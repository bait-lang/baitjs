const JS__console = require("console")
const JS__process = require("process")
const JS__os = require("os")
const JS__fs = require("fs")
const JS__path = require("path")
const JS__child_process = require("child_process")

var test_runner = new TestRunner({})

function array({ data = undefined, length = 0 }) {
	this.data = data
	this.length = length
}
array.prototype = {
	toString() {
		return `array{
    data = ${this.data.toString()}
    length = ${this.length.toString()}
}`}
}
function array_get(a, i) {
	return a.data.at(i)
}

function array_set(a, i, val) {
	a.data[i] = val
}

function array_push(a, el) {
	a.data.push(el)
	a.length += 1
}

function array_push_many(a, b) {
	a.data = a.data.concat(b.data)
	a.length += b.length
}

function array_index(a, el) {
	return a.data.indexOf(el)
}

function array_u8_index(a, c) {
	for (let i = 0; i < a.length; i++) {
		const el = array_get(a, i)
		if (eq(el, c)) {
			return i
		}
	}
	return -1
}

function array_string_index(a, s) {
	for (let i = 0; i < a.length; i++) {
		const el = array_get(a, i)
		if (eq(el, s)) {
			return i
		}
	}
	return -1
}

function array_last_index(a, el) {
	return a.data.lastIndexOf(el)
}

function array_u8_last_index(a, c) {
	for (let i = a.length - 1; i >= 0; i -= 1) {
		if (eq(array_get(a, i), c)) {
			return i
		}
	}
	return -1
}

function array_string_last_index(a, s) {
	for (let i = a.length - 1; i >= 0; i -= 1) {
		if (eq(array_get(a, i), s)) {
			return i
		}
	}
	return -1
}

function array_contains(a, el) {
	return array_index(a, el) >= 0
}

function array_u8_contains(a, c) {
	return array_u8_index(a, c) >= 0
}

function array_string_contains(a, s) {
	return array_string_index(a, s) >= 0
}

function array_slice(a, start, end) {
	return new array({ data: a.data.slice(start, end), length: end - start })
}

function array_concat(a, b) {
	return new array({ data: a.data.concat(b.data), length: a.length + b.length })
}

function array_copy(a) {
	return new array({ data: [...a.data], length: a.length })
}

function array_reverse(a) {
	const b = array_copy(a)
	array_reverse_in_place(b)
	return b
}

function array_reverse_in_place(a) {
	a.data.reverse()
}

function array_filter(a, fn) {
	return from_js_arr(a.data.filter(fn))
}

function from_js_arr(a) {
	return new array({ data: a, length: a.length })
}


function TestRunner({ passes = 0, fails = 0, file = from_js_string(""), fun_name = from_js_string(""), line = 0, expr_string = from_js_string(""), exp_val = from_js_string(""), got_val = from_js_string("") }) {
	this.passes = passes
	this.fails = fails
	this.file = file
	this.fun_name = fun_name
	this.line = line
	this.expr_string = expr_string
	this.exp_val = exp_val
	this.got_val = got_val
}
TestRunner.prototype = {
	toString() {
		return `TestRunner{
    passes = ${this.passes.toString()}
    fails = ${this.fails.toString()}
    file = ${this.file.toString()}
    fun_name = ${this.fun_name.toString()}
    line = ${this.line.toString()}
    expr_string = ${this.expr_string.toString()}
    exp_val = ${this.exp_val.toString()}
    got_val = ${this.got_val.toString()}
}`}
}
function TestRunner_set_test_info(tr, file, name) {
	tr.file = file
	tr.fun_name = name
}

function TestRunner_set_assert_info(tr, line, expr_string, exp, got) {
	tr.line = line
	tr.expr_string = expr_string
	tr.exp_val = exp
	tr.got_val = got
}

function TestRunner_assert_pass(tr) {
	tr.passes += 1
}

function TestRunner_assert_fail(tr) {
	tr.fails += 1
	eprintln(from_js_string(`${tr.file.str}:${i32_str(tr.line).str} ${tr.fun_name.str}`).str)
	eprintln(tr.expr_string.str)
}

function TestRunner_assert_fail_infix(tr) {
	tr.fails += 1
	eprintln(from_js_string(`${tr.file.str}:${i32_str(tr.line).str} ${tr.fun_name.str}`).str)
	eprintln(tr.expr_string.str)
	eprintln(from_js_string(`  left:  ${tr.exp_val.str}`).str)
	eprintln(from_js_string(`  right: ${tr.got_val.str}`).str)
}

function TestRunner_exit_code(tr) {
	if (tr.fails > 0) {
		return 1
	}
	return 0
}


function println(msg) {
	JS__console.log(msg)
}

function eprintln(msg) {
	JS__console.error(msg)
}

function exit(code) {
	JS__process.exit(code)
}

function panic(msg) {
	eprintln(from_js_string(`Panic: ${msg.str}\n${js_stacktrace().str}`).str)
	exit(1)
}

function js_stacktrace() {
	return from_js_string(new Error().stack)
}


function u8(v) {
	if (typeof(v) == "string") {
		this.val = v.charCodeAt(0)
	} else if (v instanceof string) {
		this.val = v.str.charCodeAt(0)
	} else {
		this.val = Number(v)
	}
}
function u8_is_capital(c) {
	return c.val >= new u8("A").val && c.val <= new u8("Z").val
}

function u8_ascii(c) {
	return from_js_string(String.fromCharCode(c.val))
}

function u8_add(a, b) {
	return new u8(a.val + b.val)
}



function eq(a, b) {
	if (a === b) {
		return true
	}
	if (typeof a == "object" && typeof b == "object") {
		return JSON.stringify(a) == JSON.stringify(b)
	}
	return false
}


function f32_str(n) {
	return from_js_string(n.toString())
}

function f64_str(n) {
	return from_js_string(n.toString())
}


function i8_str(n) {
	return from_js_string(n.toString())
}

function i16_str(n) {
	return from_js_string(n.toString())
}

function i32_str(n) {
	return from_js_string(n.toString())
}

function i64_str(n) {
	return from_js_string(n.toString())
}

function u8_str(n) {
	return from_js_string(n.val.toString())
}

function u16_str(n) {
	return from_js_string(n.toString())
}

function u32_str(n) {
	return from_js_string(n.toString())
}

function u64_str(n) {
	return from_js_string(n.toString())
}


function map({ data = undefined, length = 0 }) {
	this.data = data
	this.length = length
}
map.prototype = {
	toString() {
		return `map{
    data = ${this.data.toString()}
    length = ${this.length.toString()}
}`}
}
function map_get(m, key) {
	return m.data.get(key.str)
}

function map_set(m, key, val) {
	if (!map_contains(m, key)) {
		m.length += 1
	}
	m.data.set(key.str, val)
}

function map_get_set(m, key, val) {
	if (!map_contains(m, key)) {
		map_set(m, key, val)
	}
	return map_get(m, key)
}

function map_contains(m, key) {
	return m.data.has(key.str)
}

function map_keys(m) {
	return from_js_string_arr(Array.from(m.data.keys()))
}


function string({ str = undefined, length = 0 }) {
	this.str = str
	this.length = length
}
string.prototype = {
	toString() {
		return `string{
    str = ${this.str.toString()}
    length = ${this.length.toString()}
}`}
}
string.prototype = {
	toString: function() {
		return this.str
	}
}
function string_get(s, i) {
	return new u8(s.str.charCodeAt(i))
}

function string_get_str(s, i) {
	return from_js_string(s.str.charAt(i))
}

function string_get_code(s) {
	return s.str.charCodeAt(0)
}

function string_replace(s, val, rep) {
	return from_js_string(s.str.replaceAll(val.str, rep.str))
}

function string_substr(s, start, end) {
	return from_js_string(s.str.slice(start, end))
}

function string_index(s, search) {
	return s.str.indexOf(search.str)
}

function string_last_index(s, search) {
	return s.str.lastIndexOf(search.str)
}

function string_all_before(s, search) {
	const idx = string_index(s, search)
	if (eq(idx, -1)) {
		return s
	}
	return string_substr(s, 0, idx)
}

function string_all_before_last(s, search) {
	const idx = string_last_index(s, search)
	if (eq(idx, -1)) {
		return s
	}
	return string_substr(s, 0, idx)
}

function string_all_after(s, search) {
	const idx = string_index(s, search)
	if (eq(idx, -1)) {
		return s
	}
	return string_substr(s, idx + 1, s.length)
}

function string_all_after_last(s, search) {
	const idx = string_last_index(s, search)
	if (eq(idx, -1)) {
		return s
	}
	return string_substr(s, idx + 1, s.length)
}

function string_repeat(s, count) {
	return from_js_string(s.str.repeat(count))
}

function string_trim_space(s) {
	return from_js_string(s.str.trim())
}

function string_starts_with(s, prefix) {
	return s.str.startsWith(prefix.str)
}

function string_ends_with(s, suffix) {
	return s.str.endsWith(suffix.str)
}

function string_contains(s, substr) {
	return s.str.includes(substr.str)
}

function string_is_upper(s) {
	return eq(s.str, s.str.toUpperCase()) && !eq(s.str, s.str.toLowerCase())
}

function string_split_lines(s) {
	const res = from_js_string_arr(s.str.split("\n"))
	if (eq(array_get(res, res.length - 1).length, 0)) {
		return array_slice(res, 0, res.length - 1)
	}
	return res
}

function string_toI32(s) {
	return parseInt(s.str)
}

function string_add(a, b) {
	return from_js_string(a.str + b.str)
}

function array_string_join(arr, sep) {
	const js_arr = array_string_to_js_arr(arr)
	return from_js_string(js_arr.join(sep.str))
}

function from_js_string(js_s) {
	return new string({ str: js_s, length: js_s.length })
}

function from_js_string_arr(js_arr) {
	let a = new array({ data: [], length: 0 })
	for (let i = 0; i < js_arr.length; i += 1) {
		array_push(a, from_js_string(js_arr[i]))
	}
	return a
}

function array_string_to_js_arr(arr) {
	const js_arr = []
	for (let _t0 = 0; _t0 < arr.length; _t0++) {
		const s = array_get(arr, _t0)
		js_arr.push(s.str)
	}
	return js_arr
}



const os__ARGS = from_js_string_arr(JS__process.argv)
function os__ls(dir) {
	return from_js_string_arr(JS__fs.readdirSync(dir.str))
}

function os__walk_ext(dir, ext) {
	let ext_files = new array({ data: [], length: 0 })
	const all_files = os__ls(dir)
	for (let _t1 = 0; _t1 < all_files.length; _t1++) {
		const file = array_get(all_files, _t1)
		const fpath = os__join_path(dir, new array({ data: [file], length: 1 }))
		if (os__is_dir(fpath)) {
			array_push_many(ext_files, os__walk_ext(fpath, ext))
		} else if (string_ends_with(fpath, ext)) {
			array_push(ext_files, fpath)
		}
	}
	return ext_files
}

function os__cp(src, dest) {
	JS__fs.cpSync(src.str, dest.str, { recursive: true })
}

function os__exists(path) {
	return JS__fs.existsSync(path.str)
}

function os__file_name(path) {
	return from_js_string(JS__path.basename(path.str))
}

function os__file_mod_time(path) {
	return JS__fs.lstatSync(path.str).mtimeMs
}

function os__symlink(src, dest) {
	JS__fs.symlinkSync(src.str, dest.str)
}

function os__chdir(dir) {
	JS__process.chdir(dir.str)
}

function os__home_dir() {
	return from_js_string(JS__os.homedir())
}

function os__dir(path) {
	return from_js_string(JS__path.dirname(path.str))
}

function os__is_dir(path) {
	return JS__fs.lstatSync(path.str).isDirectory()
}

function os__mkdir(dir) {
	JS__fs.mkdirSync(dir.str)
}

function os__mkdir_all(dir) {
	JS__fs.mkdirSync(dir.str, { recursive: true })
}

function os__rm(path) {
	JS__fs.rmSync(path.str)
}

function os__rmdir(dir) {
	JS__fs.rmdirSync(dir.str)
}

function os__rmdir_all(dir) {
	JS__fs.rmdirSync(dir.str, { recursive: true })
}

function os__read_file(path) {
	return from_js_string(JS__fs.readFileSync(path.str).toString())
}

function os__read_lines(path) {
	const text = os__read_file(path)
	return string_split_lines(text)
}

function os__write_file(path, text) {
	JS__fs.writeFileSync(path.str, text.str)
}

function os__getwd() {
	return from_js_string(JS__process.cwd())
}

function os__join_path(base, dirs) {
	const js_dirs = array_string_to_js_arr(dirs)
	return from_js_string(JS__path.join(base.str, ...js_dirs))
}

function os__executable() {
	return from_js_string(__filename)
}

function os__abs_path(path) {
	const wd = os__getwd()
	return from_js_string(JS__path.resolve(wd.str, path.str))
}

function os__resource_abs_path(path) {
	return os__join_path(from_js_string(__dirname), new array({ data: [path], length: 1 }))
}

function os__getenv(key) {
	if (JS__process.env[key.str]) {
		return from_js_string(JS__process.env[key.str])
	}
	return from_js_string("")
}

function os__setenv(key, value) {
	JS__process.env[key.str] = value.str
}

function os__user_os() {
	return from_js_string(JS__process.platform)
}

function os__arch() {
	return from_js_string(JS__os.arch())
}

function os__Result({ code = 0, stdout = from_js_string(""), stderr = from_js_string("") }) {
	this.code = code
	this.stdout = stdout
	this.stderr = stderr
}
os__Result.prototype = {
	toString() {
		return `os__Result{
    code = ${this.code.toString()}
    stdout = ${this.stdout.toString()}
    stderr = ${this.stderr.toString()}
}`}
}
function os__exec(cmd) {
	let res = new os__Result({})
	const commands = cmd.str.split(" ")
	const out = JS__child_process.spawnSync(commands[0], commands.slice(1))
	res.code = out.status
	res.stdout = from_js_string(out.stdout.toString())
	res.stderr = from_js_string(out.stderr.toString())
	return res
}

function os__system(cmd) {
	try {
		JS__child_process.execSync(cmd.str, { stdio: "inherit" })
	} catch (e) {
		return e.status
	}
	return 0
}


function bait__token__Pos({ line = 0, col = 0 }) {
	this.line = line
	this.col = col
}
bait__token__Pos.prototype = {
	toString() {
		return `bait__token__Pos{
    line = ${this.line.toString()}
    col = ${this.col.toString()}
}`}
}

const bait__token__Precedence = {
	lowest: 0,
	cond: 1,
	compare: 2,
	as_is: 3,
	sum: 4,
	product: 5,
	prefix: 6,
	call: 7,
	index: 8,
}
function bait__token__Token_precedence(t) {
	switch (t.kind) {
		case bait__token__TokenKind.lbr:
			{
				return bait__token__Precedence.index
				break
			}
		case bait__token__TokenKind.dot:
			{
				return bait__token__Precedence.call
				break
			}
		case bait__token__TokenKind.key_not:
			{
				return bait__token__Precedence.prefix
				break
			}
		case bait__token__TokenKind.mul:
		case bait__token__TokenKind.div:
		case bait__token__TokenKind.mod:
			{
				return bait__token__Precedence.product
				break
			}
		case bait__token__TokenKind.plus:
		case bait__token__TokenKind.minus:
			{
				return bait__token__Precedence.sum
				break
			}
		case bait__token__TokenKind.eq:
		case bait__token__TokenKind.ne:
		case bait__token__TokenKind.lt:
		case bait__token__TokenKind.gt:
		case bait__token__TokenKind.le:
		case bait__token__TokenKind.ge:
			{
				return bait__token__Precedence.compare
				break
			}
		case bait__token__TokenKind.key_as:
		case bait__token__TokenKind.key_is:
			{
				return bait__token__Precedence.as_is
				break
			}
		case bait__token__TokenKind.key_and:
		case bait__token__TokenKind.key_or:
			{
				return bait__token__Precedence.cond
				break
			}
		default:
			{
				return bait__token__Precedence.lowest
				break
			}
	}
}


function bait__token__Token({ kind = 0, val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.kind = kind
	this.val = val
	this.pos = pos
}
bait__token__Token.prototype = {
	toString() {
		return `bait__token__Token{
    kind = ${this.kind.toString()}
    val = ${this.val.toString()}
    pos = ${this.pos.toString()}
}`}
}
const bait__token__TokenKind = {
	unknown: 0,
	eof: 1,
	attr: 2,
	name: 3,
	string: 4,
	char: 5,
	number: 6,
	dot: 7,
	colon: 8,
	comma: 9,
	semicolon: 10,
	plus: 11,
	minus: 12,
	mul: 13,
	div: 14,
	mod: 15,
	assign: 16,
	decl_assign: 17,
	plus_assign: 18,
	minus_assign: 19,
	mul_assign: 20,
	div_assign: 21,
	mod_assign: 22,
	eq: 23,
	ne: 24,
	lt: 25,
	gt: 26,
	le: 27,
	ge: 28,
	lpar: 29,
	rpar: 30,
	lbr: 31,
	rbr: 32,
	lcur: 33,
	rcur: 34,
	pipe: 35,
	dollar: 36,
	hash: 37,
	key_and: 38,
	key_as: 39,
	key_assert: 40,
	key_break: 41,
	key_const: 42,
	key_continue: 43,
	key_else: 44,
	key_enum: 45,
	key_false: 46,
	key_for: 47,
	key_fun: 48,
	key_global: 49,
	key_if: 50,
	key_import: 51,
	key_in: 52,
	key_interface: 53,
	key_is: 54,
	key_match: 55,
	key_mut: 56,
	key_not: 57,
	key_or: 58,
	key_package: 59,
	key_pub: 60,
	key_return: 61,
	key_struct: 62,
	key_true: 63,
	key_type: 64,
	key_typeof: 65,
}
function bait__token__keyword_to_kind(name) {
	switch (name.str) {
		case from_js_string("and").str:
			{
				return bait__token__TokenKind.key_and
				break
			}
		case from_js_string("as").str:
			{
				return bait__token__TokenKind.key_as
				break
			}
		case from_js_string("assert").str:
			{
				return bait__token__TokenKind.key_assert
				break
			}
		case from_js_string("break").str:
			{
				return bait__token__TokenKind.key_break
				break
			}
		case from_js_string("const").str:
			{
				return bait__token__TokenKind.key_const
				break
			}
		case from_js_string("continue").str:
			{
				return bait__token__TokenKind.key_continue
				break
			}
		case from_js_string("else").str:
			{
				return bait__token__TokenKind.key_else
				break
			}
		case from_js_string("enum").str:
			{
				return bait__token__TokenKind.key_enum
				break
			}
		case from_js_string("false").str:
			{
				return bait__token__TokenKind.key_false
				break
			}
		case from_js_string("for").str:
			{
				return bait__token__TokenKind.key_for
				break
			}
		case from_js_string("fun").str:
			{
				return bait__token__TokenKind.key_fun
				break
			}
		case from_js_string("global").str:
			{
				return bait__token__TokenKind.key_global
				break
			}
		case from_js_string("if").str:
			{
				return bait__token__TokenKind.key_if
				break
			}
		case from_js_string("import").str:
			{
				return bait__token__TokenKind.key_import
				break
			}
		case from_js_string("in").str:
			{
				return bait__token__TokenKind.key_in
				break
			}
		case from_js_string("interface").str:
			{
				return bait__token__TokenKind.key_interface
				break
			}
		case from_js_string("is").str:
			{
				return bait__token__TokenKind.key_is
				break
			}
		case from_js_string("match").str:
			{
				return bait__token__TokenKind.key_match
				break
			}
		case from_js_string("mut").str:
			{
				return bait__token__TokenKind.key_mut
				break
			}
		case from_js_string("not").str:
			{
				return bait__token__TokenKind.key_not
				break
			}
		case from_js_string("or").str:
			{
				return bait__token__TokenKind.key_or
				break
			}
		case from_js_string("package").str:
			{
				return bait__token__TokenKind.key_package
				break
			}
		case from_js_string("pub").str:
			{
				return bait__token__TokenKind.key_pub
				break
			}
		case from_js_string("return").str:
			{
				return bait__token__TokenKind.key_return
				break
			}
		case from_js_string("struct").str:
			{
				return bait__token__TokenKind.key_struct
				break
			}
		case from_js_string("true").str:
			{
				return bait__token__TokenKind.key_true
				break
			}
		case from_js_string("type").str:
			{
				return bait__token__TokenKind.key_type
				break
			}
		case from_js_string("typeof").str:
			{
				return bait__token__TokenKind.key_typeof
				break
			}
		default:
			{
				return bait__token__TokenKind.name
				break
			}
	}
}

const bait__token__COMPARE_KINDS = new array({ data: [bait__token__TokenKind.eq, bait__token__TokenKind.ne, bait__token__TokenKind.lt, bait__token__TokenKind.gt, bait__token__TokenKind.le, bait__token__TokenKind.ge, bait__token__TokenKind.key_is], length: 7 })
const bait__token__MATH_KINDS = new array({ data: [bait__token__TokenKind.plus, bait__token__TokenKind.minus, bait__token__TokenKind.mul, bait__token__TokenKind.div, bait__token__TokenKind.mod], length: 5 })
const bait__token__OTHER_INFIXES = new array({ data: [bait__token__TokenKind.key_and, bait__token__TokenKind.key_or], length: 2 })
function bait__token__TokenKind_is_compare(kind) {
	return array_contains(bait__token__COMPARE_KINDS, kind)
}

function bait__token__TokenKind_is_infix(kind) {
	return bait__token__TokenKind_is_compare(kind) || array_contains(bait__token__MATH_KINDS, kind) || array_contains(bait__token__OTHER_INFIXES, kind)
}

const bait__token__ASSIGN_KINDS = new array({ data: [bait__token__TokenKind.decl_assign, bait__token__TokenKind.assign, bait__token__TokenKind.plus_assign, bait__token__TokenKind.minus_assign, bait__token__TokenKind.mul_assign, bait__token__TokenKind.div_assign, bait__token__TokenKind.mod_assign], length: 7 })
function bait__token__TokenKind_is_assign(kind) {
	return array_contains(bait__token__ASSIGN_KINDS, kind)
}

function bait__token__TokenKind_js_repr(kind) {
	switch (kind) {
		case bait__token__TokenKind.key_break:
			{
				return from_js_string("break")
				break
			}
		case bait__token__TokenKind.key_continue:
			{
				return from_js_string("continue")
				break
			}
		case bait__token__TokenKind.key_is:
			{
				return from_js_string("instanceof")
				break
			}
		case bait__token__TokenKind.mul:
			{
				return from_js_string("*")
				break
			}
		case bait__token__TokenKind.div:
			{
				return from_js_string("/")
				break
			}
		case bait__token__TokenKind.mod:
			{
				return from_js_string("%")
				break
			}
		case bait__token__TokenKind.plus:
			{
				return from_js_string("+")
				break
			}
		case bait__token__TokenKind.minus:
			{
				return from_js_string("-")
				break
			}
		case bait__token__TokenKind.mul_assign:
			{
				return from_js_string("*=")
				break
			}
		case bait__token__TokenKind.div_assign:
			{
				return from_js_string("/=")
				break
			}
		case bait__token__TokenKind.mod_assign:
			{
				return from_js_string("%=")
				break
			}
		case bait__token__TokenKind.plus_assign:
			{
				return from_js_string("+=")
				break
			}
		case bait__token__TokenKind.minus_assign:
			{
				return from_js_string("-=")
				break
			}
		case bait__token__TokenKind.decl_assign:
		case bait__token__TokenKind.assign:
			{
				return from_js_string("=")
				break
			}
		case bait__token__TokenKind.eq:
			{
				return from_js_string("==")
				break
			}
		case bait__token__TokenKind.ne:
			{
				return from_js_string("!=")
				break
			}
		case bait__token__TokenKind.lt:
			{
				return from_js_string("<")
				break
			}
		case bait__token__TokenKind.gt:
			{
				return from_js_string(">")
				break
			}
		case bait__token__TokenKind.le:
			{
				return from_js_string("<=")
				break
			}
		case bait__token__TokenKind.ge:
			{
				return from_js_string(">=")
				break
			}
		case bait__token__TokenKind.key_and:
			{
				return from_js_string("&&")
				break
			}
		case bait__token__TokenKind.key_not:
			{
				return from_js_string("!")
				break
			}
		case bait__token__TokenKind.key_or:
			{
				return from_js_string("||")
				break
			}
	}
}

function bait__token__TokenKind_str(kind) {
	switch (kind) {
		case bait__token__TokenKind.eof:
			{
				return from_js_string("eof")
				break
			}
		case bait__token__TokenKind.attr:
			{
				return from_js_string("attr")
				break
			}
		case bait__token__TokenKind.name:
			{
				return from_js_string("name")
				break
			}
		case bait__token__TokenKind.string:
			{
				return from_js_string("string")
				break
			}
		case bait__token__TokenKind.char:
			{
				return from_js_string("char")
				break
			}
		case bait__token__TokenKind.number:
			{
				return from_js_string("number")
				break
			}
		case bait__token__TokenKind.dot:
			{
				return from_js_string("dot")
				break
			}
		case bait__token__TokenKind.colon:
			{
				return from_js_string("colon")
				break
			}
		case bait__token__TokenKind.comma:
			{
				return from_js_string("comma")
				break
			}
		case bait__token__TokenKind.semicolon:
			{
				return from_js_string("semicolon")
				break
			}
		case bait__token__TokenKind.plus:
			{
				return from_js_string("plus")
				break
			}
		case bait__token__TokenKind.minus:
			{
				return from_js_string("minus")
				break
			}
		case bait__token__TokenKind.mul:
			{
				return from_js_string("mul")
				break
			}
		case bait__token__TokenKind.div:
			{
				return from_js_string("div")
				break
			}
		case bait__token__TokenKind.mod:
			{
				return from_js_string("mod")
				break
			}
		case bait__token__TokenKind.assign:
			{
				return from_js_string("assign")
				break
			}
		case bait__token__TokenKind.decl_assign:
			{
				return from_js_string("decl_assign")
				break
			}
		case bait__token__TokenKind.plus_assign:
			{
				return from_js_string("plus_assign")
				break
			}
		case bait__token__TokenKind.minus_assign:
			{
				return from_js_string("minus_assign")
				break
			}
		case bait__token__TokenKind.mul_assign:
			{
				return from_js_string("mul_assign")
				break
			}
		case bait__token__TokenKind.div_assign:
			{
				return from_js_string("div_assign")
				break
			}
		case bait__token__TokenKind.mod_assign:
			{
				return from_js_string("mod_assign")
				break
			}
		case bait__token__TokenKind.eq:
			{
				return from_js_string("eq")
				break
			}
		case bait__token__TokenKind.ne:
			{
				return from_js_string("ne")
				break
			}
		case bait__token__TokenKind.lt:
			{
				return from_js_string("lt")
				break
			}
		case bait__token__TokenKind.gt:
			{
				return from_js_string("gt")
				break
			}
		case bait__token__TokenKind.le:
			{
				return from_js_string("le")
				break
			}
		case bait__token__TokenKind.ge:
			{
				return from_js_string("ge")
				break
			}
		case bait__token__TokenKind.lpar:
			{
				return from_js_string("lpar")
				break
			}
		case bait__token__TokenKind.rpar:
			{
				return from_js_string("rpar")
				break
			}
		case bait__token__TokenKind.lbr:
			{
				return from_js_string("lbr")
				break
			}
		case bait__token__TokenKind.rbr:
			{
				return from_js_string("rbr")
				break
			}
		case bait__token__TokenKind.lcur:
			{
				return from_js_string("lcur")
				break
			}
		case bait__token__TokenKind.rcur:
			{
				return from_js_string("rcur")
				break
			}
		case bait__token__TokenKind.pipe:
			{
				return from_js_string("pipe")
				break
			}
		case bait__token__TokenKind.dollar:
			{
				return from_js_string("dollar")
				break
			}
		case bait__token__TokenKind.hash:
			{
				return from_js_string("hash")
				break
			}
		case bait__token__TokenKind.key_and:
			{
				return from_js_string("key_and")
				break
			}
		case bait__token__TokenKind.key_as:
			{
				return from_js_string("key_as")
				break
			}
		case bait__token__TokenKind.key_assert:
			{
				return from_js_string("key_assert")
				break
			}
		case bait__token__TokenKind.key_break:
			{
				return from_js_string("key_break")
				break
			}
		case bait__token__TokenKind.key_const:
			{
				return from_js_string("key_const")
				break
			}
		case bait__token__TokenKind.key_continue:
			{
				return from_js_string("key_continue")
				break
			}
		case bait__token__TokenKind.key_else:
			{
				return from_js_string("key_else")
				break
			}
		case bait__token__TokenKind.key_enum:
			{
				return from_js_string("key_enum")
				break
			}
		case bait__token__TokenKind.key_false:
			{
				return from_js_string("key_false")
				break
			}
		case bait__token__TokenKind.key_for:
			{
				return from_js_string("key_for")
				break
			}
		case bait__token__TokenKind.key_fun:
			{
				return from_js_string("key_fun")
				break
			}
		case bait__token__TokenKind.key_global:
			{
				return from_js_string("key_global")
				break
			}
		case bait__token__TokenKind.key_if:
			{
				return from_js_string("key_if")
				break
			}
		case bait__token__TokenKind.key_import:
			{
				return from_js_string("key_import")
				break
			}
		case bait__token__TokenKind.key_in:
			{
				return from_js_string("key_in")
				break
			}
		case bait__token__TokenKind.key_interface:
			{
				return from_js_string("key_interface")
				break
			}
		case bait__token__TokenKind.key_is:
			{
				return from_js_string("key_is")
				break
			}
		case bait__token__TokenKind.key_match:
			{
				return from_js_string("key_match")
				break
			}
		case bait__token__TokenKind.key_mut:
			{
				return from_js_string("key_mut")
				break
			}
		case bait__token__TokenKind.key_not:
			{
				return from_js_string("key_not")
				break
			}
		case bait__token__TokenKind.key_or:
			{
				return from_js_string("key_or")
				break
			}
		case bait__token__TokenKind.key_package:
			{
				return from_js_string("key_package")
				break
			}
		case bait__token__TokenKind.key_pub:
			{
				return from_js_string("key_pub")
				break
			}
		case bait__token__TokenKind.key_return:
			{
				return from_js_string("key_return")
				break
			}
		case bait__token__TokenKind.key_struct:
			{
				return from_js_string("key_struct")
				break
			}
		case bait__token__TokenKind.key_true:
			{
				return from_js_string("key_true")
				break
			}
		case bait__token__TokenKind.key_type:
			{
				return from_js_string("key_type")
				break
			}
		case bait__token__TokenKind.key_typeof:
			{
				return from_js_string("key_typeof")
				break
			}
	}
}


const term__color__RESET = term__color__esc(0)
function term__color__esc(code) {
	return from_js_string(`\x1b[${i32_str(code).str}m`)
}

function term__color__format(code, text) {
	return string_add(string_add(term__color__esc(code), text), term__color__RESET)
}

const term__color__AnsiCode = {
	reset: 0,
	bold: 1,
	dim: 2,
	italic: 3,
	underline: 4,
	blink_slow: 5,
	blink_rapid: 6,
	invert: 7,
	hide: 8,
	strike: 9,
	black: 30,
	red: 31,
	green: 32,
	yellow: 33,
	blue: 34,
	magenta: 35,
	cyan: 36,
	white: 37,
	bg_black: 40,
	bg_red: 41,
	bg_green: 42,
	bg_yellow: 43,
	bg_blue: 44,
	bg_magenta: 45,
	bg_cyan: 46,
	bg_white: 47,
	overline: 53,
	bright_black: 90,
	bright_red: 91,
	bright_green: 92,
	bright_yellow: 93,
	bright_blue: 94,
	bright_magenta: 95,
	bright_cyan: 96,
	bright_white: 97,
	bg_bright_black: 100,
	bg_bright_red: 101,
	bg_bright_green: 102,
	bg_bright_yellow: 103,
	bg_bright_blue: 104,
	bg_bright_magenta: 105,
	bg_bright_cyan: 106,
	bg_bright_white: 107,
}
function term__color__bold(text) {
	return term__color__format(term__color__AnsiCode.bold, text)
}

function term__color__dim(text) {
	return term__color__format(term__color__AnsiCode.dim, text)
}

function term__color__italic(text) {
	return term__color__format(term__color__AnsiCode.italic, text)
}

function term__color__underline(text) {
	return term__color__format(term__color__AnsiCode.underline, text)
}

function term__color__blink_slow(text) {
	return term__color__format(term__color__AnsiCode.blink_slow, text)
}

function term__color__blink_rapid(text) {
	return term__color__format(term__color__AnsiCode.blink_rapid, text)
}

function term__color__invert(text) {
	return term__color__format(term__color__AnsiCode.invert, text)
}

function term__color__hide(text) {
	return term__color__format(term__color__AnsiCode.hide, text)
}

function term__color__strike(text) {
	return term__color__format(term__color__AnsiCode.strike, text)
}

function term__color__overline(text) {
	return term__color__format(term__color__AnsiCode.overline, text)
}

function term__color__black(text) {
	return term__color__format(term__color__AnsiCode.black, text)
}

function term__color__red(text) {
	return term__color__format(term__color__AnsiCode.red, text)
}

function term__color__green(text) {
	return term__color__format(term__color__AnsiCode.green, text)
}

function term__color__yellow(text) {
	return term__color__format(term__color__AnsiCode.yellow, text)
}

function term__color__blue(text) {
	return term__color__format(term__color__AnsiCode.blue, text)
}

function term__color__magenta(text) {
	return term__color__format(term__color__AnsiCode.magenta, text)
}

function term__color__cyan(text) {
	return term__color__format(term__color__AnsiCode.cyan, text)
}

function term__color__white(text) {
	return term__color__format(term__color__AnsiCode.white, text)
}

function term__color__bg_black(text) {
	return term__color__format(term__color__AnsiCode.bg_black, text)
}

function term__color__bg_red(text) {
	return term__color__format(term__color__AnsiCode.bg_red, text)
}

function term__color__bg_green(text) {
	return term__color__format(term__color__AnsiCode.bg_green, text)
}

function term__color__bg_yellow(text) {
	return term__color__format(term__color__AnsiCode.bg_yellow, text)
}

function term__color__bg_blue(text) {
	return term__color__format(term__color__AnsiCode.bg_blue, text)
}

function term__color__bg_magenta(text) {
	return term__color__format(term__color__AnsiCode.bg_magenta, text)
}

function term__color__bg_cyan(text) {
	return term__color__format(term__color__AnsiCode.bg_cyan, text)
}

function term__color__bg_white(text) {
	return term__color__format(term__color__AnsiCode.bg_white, text)
}

function term__color__bright_black(text) {
	return term__color__format(term__color__AnsiCode.bright_black, text)
}

function term__color__bright_red(text) {
	return term__color__format(term__color__AnsiCode.bright_red, text)
}

function term__color__bright_green(text) {
	return term__color__format(term__color__AnsiCode.bright_green, text)
}

function term__color__bright_yellow(text) {
	return term__color__format(term__color__AnsiCode.bright_yellow, text)
}

function term__color__bright_blue(text) {
	return term__color__format(term__color__AnsiCode.bright_blue, text)
}

function term__color__bright_magenta(text) {
	return term__color__format(term__color__AnsiCode.bright_magenta, text)
}

function term__color__bright_cyan(text) {
	return term__color__format(term__color__AnsiCode.bright_cyan, text)
}

function term__color__bright_white(text) {
	return term__color__format(term__color__AnsiCode.bright_white, text)
}

function term__color__bg_bright_black(text) {
	return term__color__format(term__color__AnsiCode.bg_bright_black, text)
}

function term__color__bg_bright_red(text) {
	return term__color__format(term__color__AnsiCode.bg_bright_red, text)
}

function term__color__bg_bright_green(text) {
	return term__color__format(term__color__AnsiCode.bg_bright_green, text)
}

function term__color__bg_bright_yellow(text) {
	return term__color__format(term__color__AnsiCode.bg_bright_yellow, text)
}

function term__color__bg_bright_blue(text) {
	return term__color__format(term__color__AnsiCode.bg_bright_blue, text)
}

function term__color__bg_bright_magenta(text) {
	return term__color__format(term__color__AnsiCode.bg_bright_magenta, text)
}

function term__color__bg_bright_cyan(text) {
	return term__color__format(term__color__AnsiCode.bg_bright_cyan, text)
}

function term__color__bg_bright_white(text) {
	return term__color__format(term__color__AnsiCode.bg_bright_white, text)
}


const bait__errors__Kind = {
	info: 0,
	warning: 1,
	error: 2,
}
function bait__errors__Message({ kind = 0, path = from_js_string(""), pos = new bait__token__Pos({}), title = from_js_string(""), msg = from_js_string("") }) {
	this.kind = kind
	this.path = path
	this.pos = pos
	this.title = title
	this.msg = msg
}
bait__errors__Message.prototype = {
	toString() {
		return `bait__errors__Message{
    kind = ${this.kind.toString()}
    path = ${this.path.toString()}
    pos = ${this.pos.toString()}
    title = ${this.title.toString()}
    msg = ${this.msg.toString()}
}`}
}
function bait__errors__Message_print(msg) {
	if (eq(msg.path.length, 0)) {
		bait__errors__generic_error(msg.msg)
		return
	}
	bait__errors__message(msg.kind, msg.title, msg.path, msg.pos, msg.msg)
}

function array_bait__errors__Message_print_and_exit(msgs) {
	for (let _t2 = 0; _t2 < msgs.length; _t2++) {
		const msg = array_get(msgs, _t2)
		bait__errors__Message_print(msg)
	}
	if (msgs.length > 0) {
		exit(1)
	}
}

function bait__errors__info(title, path, pos, msg) {
	bait__errors__message(bait__errors__Kind.info, title, path, pos, msg)
}

function bait__errors__warn(path, pos, msg) {
	bait__errors__message(bait__errors__Kind.warning, from_js_string("warning"), path, pos, msg)
}

function bait__errors__error(path, pos, msg) {
	bait__errors__message(bait__errors__Kind.error, from_js_string("error"), path, pos, msg)
}

function bait__errors__generic_error(msg) {
	const title = bait__errors__format_title(bait__errors__Kind.error, from_js_string("error"))
	eprintln(from_js_string(`${title.str}: ${msg.str}`).str)
}

function bait__errors__message(kind, title, path, pos, msg) {
	const file_line = bait__errors__bold(from_js_string(`${path.str}:${i32_str(pos.line).str}:${i32_str(pos.col).str}`))
	eprintln(from_js_string(`${file_line.str} ${bait__errors__format_title(kind, title).str}: ${msg.str}`).str)
}

function bait__errors__bold(s) {
	if (eq(os__getenv(from_js_string("BAITCOLOR")), from_js_string("0"))) {
		return s
	}
	return term__color__bold(s)
}

function bait__errors__format_title(k, title) {
	if (eq(os__getenv(from_js_string("BAITCOLOR")), from_js_string("0"))) {
		return title
	}
	switch (k) {
		case bait__errors__Kind.info:
			{
				return term__color__magenta(title)
				break
			}
		case bait__errors__Kind.warning:
			{
				return term__color__yellow(title)
				break
			}
		case bait__errors__Kind.error:
			{
				return term__color__red(title)
				break
			}
	}
}


const bait__preference__Backend = {
	js: 0,
	c: 1,
}
function bait__preference__Prefs({ command = from_js_string(""), args = new array({ data: [], length: 0 }), build_options = new array({ data: [], length: 0 }), out_name = from_js_string(""), should_run = false, is_verbose = false, backend = 0, expected_pkg = from_js_string(""), is_test = false, is_script = false, is_library = false, hide_warnings = false, warn_is_error = false, baitexe = from_js_string(""), baitdir = from_js_string(""), baithash = from_js_string("") }) {
	this.command = command
	this.args = args
	this.build_options = build_options
	this.out_name = out_name
	this.should_run = should_run
	this.is_verbose = is_verbose
	this.backend = backend
	this.expected_pkg = expected_pkg
	this.is_test = is_test
	this.is_script = is_script
	this.is_library = is_library
	this.hide_warnings = hide_warnings
	this.warn_is_error = warn_is_error
	this.baitexe = baitexe
	this.baitdir = baitdir
	this.baithash = baithash
}
bait__preference__Prefs.prototype = {
	toString() {
		return `bait__preference__Prefs{
    command = ${this.command.toString()}
    args = ${this.args.toString()}
    build_options = ${this.build_options.toString()}
    out_name = ${this.out_name.toString()}
    should_run = ${this.should_run.toString()}
    is_verbose = ${this.is_verbose.toString()}
    backend = ${this.backend.toString()}
    expected_pkg = ${this.expected_pkg.toString()}
    is_test = ${this.is_test.toString()}
    is_script = ${this.is_script.toString()}
    is_library = ${this.is_library.toString()}
    hide_warnings = ${this.hide_warnings.toString()}
    warn_is_error = ${this.warn_is_error.toString()}
    baitexe = ${this.baitexe.toString()}
    baitdir = ${this.baitdir.toString()}
    baithash = ${this.baithash.toString()}
}`}
}
function bait__preference__parse_args(args) {
	const p = new bait__preference__Prefs({ backend: bait__preference__Backend.js })
	if (eq(args.length, 0)) {
		p.command = from_js_string("help")
		return p
	}
	for (let i = 0; i < args.length; i += 1) {
		const arg = array_get(args, i)
		switch (arg.str) {
			case from_js_string("-b").str:
			case from_js_string("--backend").str:
				{
					i += 1
					p.backend = bait__preference__backend_from_string(array_get(args, i))
					break
				}
			case from_js_string("-o").str:
			case from_js_string("--out").str:
				{
					i += 1
					p.out_name = array_get(args, i)
					array_push(p.build_options, arg)
					array_push(p.build_options, p.out_name)
					break
				}
			case from_js_string("-v").str:
			case from_js_string("--verbose").str:
				{
					p.is_verbose = true
					array_push(p.build_options, arg)
					break
				}
			case from_js_string("--library").str:
				{
					p.is_library = true
					break
				}
			case from_js_string("-w").str:
				{
					p.hide_warnings = true
					array_push(p.build_options, arg)
					break
				}
			case from_js_string("-W").str:
				{
					p.warn_is_error = true
					array_push(p.build_options, arg)
					break
				}
			case from_js_string("--nocolor").str:
				{
					os__setenv(from_js_string("BAITCOLOR"), from_js_string("0"))
					break
				}
			case from_js_string("--script").str:
				{
					p.is_script = true
					break
				}
			default:
				{
					if (eq(p.command.length, 0)) {
						p.command = arg
					} else {
						array_push(p.args, arg)
					}
					break
				}
		}
	}
	array_push_many(p.build_options, p.args)
	if (p.hide_warnings && p.warn_is_error) {
		bait__errors__generic_error(from_js_string("Cannot use -w and -W together."))
		exit(1)
	}
	if (eq(p.command, from_js_string("build"))) {
		p.command = array_get(p.args, 0)
	}
	if (eq(p.command, from_js_string("run"))) {
		p.command = array_get(p.args, 0)
		p.should_run = true
	}
	if (eq(p.command, from_js_string("test"))) {
		p.should_run = true
		p.is_test = true
	}
	if (eq(p.out_name.length, 0)) {
		if (string_ends_with(p.command, from_js_string(".bt"))) {
			p.out_name = string_replace(p.command, from_js_string(".bt"), from_js_string(".js"))
		} else {
			p.out_name = string_add(p.command, from_js_string(".js"))
		}
	}
	return p
}

function bait__preference__Prefs_set_comptime_vars(p) {
	p.baitexe = os__executable()
	p.baitdir = os__dir(p.baitexe)
	p.baithash = string_trim_space(os__exec(from_js_string("git rev-parse --short HEAD")).stdout)
}

function bait__preference__backend_from_string(s) {
	switch (s.str) {
		case from_js_string("js").str:
			{
				return bait__preference__Backend.js
				break
			}
		case from_js_string("c").str:
			{
				return bait__preference__Backend.c
				break
			}
	}
	return bait__preference__Backend.js
}


function bait__preference__Prefs_should_compile_file(prefs, file) {
	if (!string_ends_with(file, from_js_string(".bt"))) {
		return false
	}
	if (string_contains(file, from_js_string("_test."))) {
		return false
	}
	return bait__preference__Prefs_matches_backend(prefs, file)
}

function bait__preference__Prefs_matches_backend(prefs, file) {
	if (eq(prefs.backend, bait__preference__Backend.js) && string_contains(file, from_js_string(".c."))) {
		return false
	}
	if (eq(prefs.backend, bait__preference__Backend.c) && string_contains(file, from_js_string(".js."))) {
		return false
	}
	return true
}


function bait__ast__AssertStmt({ expr = undefined, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.pos = pos
}
bait__ast__AssertStmt.prototype = {
	toString() {
		return `bait__ast__AssertStmt{
    expr = ${this.expr.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__AssignStmt({ op = 0, left = undefined, left_type = 0, right = undefined, right_type = 0, pos = new bait__token__Pos({}) }) {
	this.op = op
	this.left = left
	this.left_type = left_type
	this.right = right
	this.right_type = right_type
	this.pos = pos
}
bait__ast__AssignStmt.prototype = {
	toString() {
		return `bait__ast__AssignStmt{
    op = ${this.op.toString()}
    left = ${this.left.toString()}
    left_type = ${this.left_type.toString()}
    right = ${this.right.toString()}
    right_type = ${this.right_type.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__ConstDecl({ name = from_js_string(""), expr = undefined, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.expr = expr
	this.pos = pos
}
bait__ast__ConstDecl.prototype = {
	toString() {
		return `bait__ast__ConstDecl{
    name = ${this.name.toString()}
    expr = ${this.expr.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__EnumDecl({ name = from_js_string(""), fields = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.fields = fields
	this.pos = pos
}
bait__ast__EnumDecl.prototype = {
	toString() {
		return `bait__ast__EnumDecl{
    name = ${this.name.toString()}
    fields = ${this.fields.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__EnumField({ name = from_js_string(""), expr = undefined, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.expr = expr
	this.pos = pos
}
bait__ast__EnumField.prototype = {
	toString() {
		return `bait__ast__EnumField{
    name = ${this.name.toString()}
    expr = ${this.expr.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__ExprStmt({ expr = undefined }) {
	this.expr = expr
}
bait__ast__ExprStmt.prototype = {
	toString() {
		return `bait__ast__ExprStmt{
    expr = ${this.expr.toString()}
}`}
}
function bait__ast__ForLoop({ cond = undefined, stmts = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.cond = cond
	this.stmts = stmts
	this.pos = pos
}
bait__ast__ForLoop.prototype = {
	toString() {
		return `bait__ast__ForLoop{
    cond = ${this.cond.toString()}
    stmts = ${this.stmts.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__ForClassicLoop({ init = undefined, cond = undefined, inc = undefined, stmts = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.init = init
	this.cond = cond
	this.inc = inc
	this.stmts = stmts
	this.pos = pos
}
bait__ast__ForClassicLoop.prototype = {
	toString() {
		return `bait__ast__ForClassicLoop{
    init = ${this.init.toString()}
    cond = ${this.cond.toString()}
    inc = ${this.inc.toString()}
    stmts = ${this.stmts.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__ForInLoop({ idxvar = from_js_string(""), valvar = from_js_string(""), expr = undefined, expr_type = 0, stmts = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.idxvar = idxvar
	this.valvar = valvar
	this.expr = expr
	this.expr_type = expr_type
	this.stmts = stmts
	this.pos = pos
}
bait__ast__ForInLoop.prototype = {
	toString() {
		return `bait__ast__ForInLoop{
    idxvar = ${this.idxvar.toString()}
    valvar = ${this.valvar.toString()}
    expr = ${this.expr.toString()}
    expr_type = ${this.expr_type.toString()}
    stmts = ${this.stmts.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__AnonFun({ decl = new bait__ast__FunDecl({}), typ = 0, pos = new bait__token__Pos({}) }) {
	this.decl = decl
	this.typ = typ
	this.pos = pos
}
bait__ast__AnonFun.prototype = {
	toString() {
		return `bait__ast__AnonFun{
    decl = ${this.decl.toString()}
    typ = ${this.typ.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__FunDecl({ is_pub = false, lang = 0, name = from_js_string(""), pkg = from_js_string(""), params = new array({ data: [], length: 0 }), stmts = new array({ data: [], length: 0 }), return_type = 0, is_method = false, is_test = false, attrs = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.is_pub = is_pub
	this.lang = lang
	this.name = name
	this.pkg = pkg
	this.params = params
	this.stmts = stmts
	this.return_type = return_type
	this.is_method = is_method
	this.is_test = is_test
	this.attrs = attrs
	this.pos = pos
}
bait__ast__FunDecl.prototype = {
	toString() {
		return `bait__ast__FunDecl{
    is_pub = ${this.is_pub.toString()}
    lang = ${this.lang.toString()}
    name = ${this.name.toString()}
    pkg = ${this.pkg.toString()}
    params = ${this.params.toString()}
    stmts = ${this.stmts.toString()}
    return_type = ${this.return_type.toString()}
    is_method = ${this.is_method.toString()}
    is_test = ${this.is_test.toString()}
    attrs = ${this.attrs.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__Param({ name = from_js_string(""), typ = 0, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.typ = typ
	this.pos = pos
}
bait__ast__Param.prototype = {
	toString() {
		return `bait__ast__Param{
    name = ${this.name.toString()}
    typ = ${this.typ.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__LoopControlStmt({ kind = 0, pos = new bait__token__Pos({}) }) {
	this.kind = kind
	this.pos = pos
}
bait__ast__LoopControlStmt.prototype = {
	toString() {
		return `bait__ast__LoopControlStmt{
    kind = ${this.kind.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__GlobalDecl({ name = from_js_string(""), expr = undefined, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.expr = expr
	this.pos = pos
}
bait__ast__GlobalDecl.prototype = {
	toString() {
		return `bait__ast__GlobalDecl{
    name = ${this.name.toString()}
    expr = ${this.expr.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__InterfaceDecl({ lang = 0, name = from_js_string(""), typ = 0, methods = new array({ data: [], length: 0 }), fields = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.name = name
	this.typ = typ
	this.methods = methods
	this.fields = fields
	this.pos = pos
}
bait__ast__InterfaceDecl.prototype = {
	toString() {
		return `bait__ast__InterfaceDecl{
    lang = ${this.lang.toString()}
    name = ${this.name.toString()}
    typ = ${this.typ.toString()}
    methods = ${this.methods.toString()}
    fields = ${this.fields.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__ReturnStmt({ expr = undefined, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.pos = pos
}
bait__ast__ReturnStmt.prototype = {
	toString() {
		return `bait__ast__ReturnStmt{
    expr = ${this.expr.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__StructDecl({ name = from_js_string(""), typ = 0, fields = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.typ = typ
	this.fields = fields
	this.pos = pos
}
bait__ast__StructDecl.prototype = {
	toString() {
		return `bait__ast__StructDecl{
    name = ${this.name.toString()}
    typ = ${this.typ.toString()}
    fields = ${this.fields.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__StructField({ name = from_js_string(""), typ = 0, expr = new bait__ast__EmptyExpr({}), pos = new bait__token__Pos({}), attrs = new array({ data: [], length: 0 }) }) {
	this.name = name
	this.typ = typ
	this.expr = expr
	this.pos = pos
	this.attrs = attrs
}
bait__ast__StructField.prototype = {
	toString() {
		return `bait__ast__StructField{
    name = ${this.name.toString()}
    typ = ${this.typ.toString()}
    expr = ${this.expr.toString()}
    pos = ${this.pos.toString()}
    attrs = ${this.attrs.toString()}
}`}
}
function bait__ast__TypeDecl({ name = from_js_string(""), typ = 0, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.typ = typ
	this.pos = pos
}
bait__ast__TypeDecl.prototype = {
	toString() {
		return `bait__ast__TypeDecl{
    name = ${this.name.toString()}
    typ = ${this.typ.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__ArrayInit({ exprs = new array({ data: [], length: 0 }), typ = 0, elem_type = 0, length_expr = new bait__ast__EmptyExpr({}), pos = new bait__token__Pos({}) }) {
	this.exprs = exprs
	this.typ = typ
	this.elem_type = elem_type
	this.length_expr = length_expr
	this.pos = pos
}
bait__ast__ArrayInit.prototype = {
	toString() {
		return `bait__ast__ArrayInit{
    exprs = ${this.exprs.toString()}
    typ = ${this.typ.toString()}
    elem_type = ${this.elem_type.toString()}
    length_expr = ${this.length_expr.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__AsCast({ expr = undefined, expr_type = 0, target = 0, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.expr_type = expr_type
	this.target = target
	this.pos = pos
}
bait__ast__AsCast.prototype = {
	toString() {
		return `bait__ast__AsCast{
    expr = ${this.expr.toString()}
    expr_type = ${this.expr_type.toString()}
    target = ${this.target.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__BoolLiteral({ val = false, pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
bait__ast__BoolLiteral.prototype = {
	toString() {
		return `bait__ast__BoolLiteral{
    val = ${this.val.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__CallExpr({ lang = 0, name = from_js_string(""), args = new array({ data: [], length: 0 }), return_type = 0, is_method = false, left = new bait__ast__EmptyExpr({}), left_type = 0, pkg = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.name = name
	this.args = args
	this.return_type = return_type
	this.is_method = is_method
	this.left = left
	this.left_type = left_type
	this.pkg = pkg
	this.pos = pos
}
bait__ast__CallExpr.prototype = {
	toString() {
		return `bait__ast__CallExpr{
    lang = ${this.lang.toString()}
    name = ${this.name.toString()}
    args = ${this.args.toString()}
    return_type = ${this.return_type.toString()}
    is_method = ${this.is_method.toString()}
    left = ${this.left.toString()}
    left_type = ${this.left_type.toString()}
    pkg = ${this.pkg.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__CallArg({ expr = undefined, typ = 0 }) {
	this.expr = expr
	this.typ = typ
}
bait__ast__CallArg.prototype = {
	toString() {
		return `bait__ast__CallArg{
    expr = ${this.expr.toString()}
    typ = ${this.typ.toString()}
}`}
}
function bait__ast__CharLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
bait__ast__CharLiteral.prototype = {
	toString() {
		return `bait__ast__CharLiteral{
    val = ${this.val.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__CompTimeVar({ name = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.pos = pos
}
bait__ast__CompTimeVar.prototype = {
	toString() {
		return `bait__ast__CompTimeVar{
    name = ${this.name.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__EnumVal({ name = from_js_string(""), val = from_js_string(""), typ = 0, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.val = val
	this.typ = typ
	this.pos = pos
}
bait__ast__EnumVal.prototype = {
	toString() {
		return `bait__ast__EnumVal{
    name = ${this.name.toString()}
    val = ${this.val.toString()}
    typ = ${this.typ.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__HashExpr({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
bait__ast__HashExpr.prototype = {
	toString() {
		return `bait__ast__HashExpr{
    val = ${this.val.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__Ident({ name = from_js_string(""), is_mut = false, pkg = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.is_mut = is_mut
	this.pkg = pkg
	this.pos = pos
}
bait__ast__Ident.prototype = {
	toString() {
		return `bait__ast__Ident{
    name = ${this.name.toString()}
    is_mut = ${this.is_mut.toString()}
    pkg = ${this.pkg.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__IfExpr({ has_else = false, branches = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.has_else = has_else
	this.branches = branches
	this.pos = pos
}
bait__ast__IfExpr.prototype = {
	toString() {
		return `bait__ast__IfExpr{
    has_else = ${this.has_else.toString()}
    branches = ${this.branches.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__IfBranch({ cond = undefined, stmts = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.cond = cond
	this.stmts = stmts
	this.pos = pos
}
bait__ast__IfBranch.prototype = {
	toString() {
		return `bait__ast__IfBranch{
    cond = ${this.cond.toString()}
    stmts = ${this.stmts.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__IndexExpr({ left = undefined, index = undefined, left_type = 0, is_selector = false, pos = new bait__token__Pos({}) }) {
	this.left = left
	this.index = index
	this.left_type = left_type
	this.is_selector = is_selector
	this.pos = pos
}
bait__ast__IndexExpr.prototype = {
	toString() {
		return `bait__ast__IndexExpr{
    left = ${this.left.toString()}
    index = ${this.index.toString()}
    left_type = ${this.left_type.toString()}
    is_selector = ${this.is_selector.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__InfixExpr({ left = undefined, left_type = 0, right = undefined, right_type = 0, op = 0, pos = new bait__token__Pos({}) }) {
	this.left = left
	this.left_type = left_type
	this.right = right
	this.right_type = right_type
	this.op = op
	this.pos = pos
}
bait__ast__InfixExpr.prototype = {
	toString() {
		return `bait__ast__InfixExpr{
    left = ${this.left.toString()}
    left_type = ${this.left_type.toString()}
    right = ${this.right.toString()}
    right_type = ${this.right_type.toString()}
    op = ${this.op.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__IntegerLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
bait__ast__IntegerLiteral.prototype = {
	toString() {
		return `bait__ast__IntegerLiteral{
    val = ${this.val.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__MatchExpr({ cond = undefined, cond_type = 0, branches = new array({ data: [], length: 0 }), is_sumtype = false, pos = new bait__token__Pos({}) }) {
	this.cond = cond
	this.cond_type = cond_type
	this.branches = branches
	this.is_sumtype = is_sumtype
	this.pos = pos
}
bait__ast__MatchExpr.prototype = {
	toString() {
		return `bait__ast__MatchExpr{
    cond = ${this.cond.toString()}
    cond_type = ${this.cond_type.toString()}
    branches = ${this.branches.toString()}
    is_sumtype = ${this.is_sumtype.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__MatchBranch({ exprs = new array({ data: [], length: 0 }), expr_types = new array({ data: [], length: 0 }), stmts = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.exprs = exprs
	this.expr_types = expr_types
	this.stmts = stmts
	this.pos = pos
}
bait__ast__MatchBranch.prototype = {
	toString() {
		return `bait__ast__MatchBranch{
    exprs = ${this.exprs.toString()}
    expr_types = ${this.expr_types.toString()}
    stmts = ${this.stmts.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__MapInit({ typ = 0, key_type = 0, val_type = 0, keys = new array({ data: [], length: 0 }), vals = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.typ = typ
	this.key_type = key_type
	this.val_type = val_type
	this.keys = keys
	this.vals = vals
	this.pos = pos
}
bait__ast__MapInit.prototype = {
	toString() {
		return `bait__ast__MapInit{
    typ = ${this.typ.toString()}
    key_type = ${this.key_type.toString()}
    val_type = ${this.val_type.toString()}
    keys = ${this.keys.toString()}
    vals = ${this.vals.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__ParExpr({ expr = undefined, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.pos = pos
}
bait__ast__ParExpr.prototype = {
	toString() {
		return `bait__ast__ParExpr{
    expr = ${this.expr.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__PrefixExpr({ op = 0, right = undefined, pos = new bait__token__Pos({}) }) {
	this.op = op
	this.right = right
	this.pos = pos
}
bait__ast__PrefixExpr.prototype = {
	toString() {
		return `bait__ast__PrefixExpr{
    op = ${this.op.toString()}
    right = ${this.right.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__SelectorExpr({ expr = undefined, field_name = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.field_name = field_name
	this.pos = pos
}
bait__ast__SelectorExpr.prototype = {
	toString() {
		return `bait__ast__SelectorExpr{
    expr = ${this.expr.toString()}
    field_name = ${this.field_name.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__StringLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
bait__ast__StringLiteral.prototype = {
	toString() {
		return `bait__ast__StringLiteral{
    val = ${this.val.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__StringInterLiteral({ vals = new array({ data: [], length: 0 }), exprs = new array({ data: [], length: 0 }), expr_types = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.vals = vals
	this.exprs = exprs
	this.expr_types = expr_types
	this.pos = pos
}
bait__ast__StringInterLiteral.prototype = {
	toString() {
		return `bait__ast__StringInterLiteral{
    vals = ${this.vals.toString()}
    exprs = ${this.exprs.toString()}
    expr_types = ${this.expr_types.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__StructInit({ name = from_js_string(""), typ = 0, fields = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.typ = typ
	this.fields = fields
	this.pos = pos
}
bait__ast__StructInit.prototype = {
	toString() {
		return `bait__ast__StructInit{
    name = ${this.name.toString()}
    typ = ${this.typ.toString()}
    fields = ${this.fields.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__StructInitField({ name = from_js_string(""), expr = undefined, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.expr = expr
	this.pos = pos
}
bait__ast__StructInitField.prototype = {
	toString() {
		return `bait__ast__StructInitField{
    name = ${this.name.toString()}
    expr = ${this.expr.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__TypeOf({ expr = undefined, typ = 0, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.typ = typ
	this.pos = pos
}
bait__ast__TypeOf.prototype = {
	toString() {
		return `bait__ast__TypeOf{
    expr = ${this.expr.toString()}
    typ = ${this.typ.toString()}
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__EmptyExpr({ pos = new bait__token__Pos({}) }) {
	this.pos = pos
}
bait__ast__EmptyExpr.prototype = {
	toString() {
		return `bait__ast__EmptyExpr{
    pos = ${this.pos.toString()}
}`}
}
function bait__ast__PackageDecl({ name = from_js_string(""), full_name = from_js_string("") }) {
	this.name = name
	this.full_name = full_name
}
bait__ast__PackageDecl.prototype = {
	toString() {
		return `bait__ast__PackageDecl{
    name = ${this.name.toString()}
    full_name = ${this.full_name.toString()}
}`}
}
function bait__ast__Import({ name = from_js_string(""), alias = from_js_string(""), pos = new bait__token__Pos({}), lang = 0 }) {
	this.name = name
	this.alias = alias
	this.pos = pos
	this.lang = lang
}
bait__ast__Import.prototype = {
	toString() {
		return `bait__ast__Import{
    name = ${this.name.toString()}
    alias = ${this.alias.toString()}
    pos = ${this.pos.toString()}
    lang = ${this.lang.toString()}
}`}
}
function bait__ast__File({ path = from_js_string(""), pkg_decl = new bait__ast__PackageDecl({}), imports = new array({ data: [], length: 0 }), stmts = new array({ data: [], length: 0 }), infos = new array({ data: [], length: 0 }), warnings = new array({ data: [], length: 0 }), errors = new array({ data: [], length: 0 }) }) {
	this.path = path
	this.pkg_decl = pkg_decl
	this.imports = imports
	this.stmts = stmts
	this.infos = infos
	this.warnings = warnings
	this.errors = errors
}
bait__ast__File.prototype = {
	toString() {
		return `bait__ast__File{
    path = ${this.path.toString()}
    pkg_decl = ${this.pkg_decl.toString()}
    imports = ${this.imports.toString()}
    stmts = ${this.stmts.toString()}
    infos = ${this.infos.toString()}
    warnings = ${this.warnings.toString()}
    errors = ${this.errors.toString()}
}`}
}

function bait__ast__Attribute({ name = from_js_string(""), value = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.value = value
	this.pos = pos
}
bait__ast__Attribute.prototype = {
	toString() {
		return `bait__ast__Attribute{
    name = ${this.name.toString()}
    value = ${this.value.toString()}
    pos = ${this.pos.toString()}
}`}
}
function array_bait__ast__Attribute_find_attr(attrs, name) {
	for (let _t3 = 0; _t3 < attrs.length; _t3++) {
		const attr = array_get(attrs, _t3)
		if (eq(attr.name, name)) {
			return attr
		}
	}
	return new bait__ast__Attribute({})
}


const bait__ast__Language = {
	bait: 0,
	js: 1,
}

function bait__ast__Scope({ parent = this, objects = new map({ data: new Map([]), length: 0 }) }) {
	this.parent = parent
	this.objects = objects
}
bait__ast__Scope.prototype = {
	toString() {
		return `bait__ast__Scope{
    parent = ${this.parent.toString()}
    objects = ${this.objects.toString()}
}`}
}
function bait__ast__ScopeObject({ kind = 0, typ = 0, is_pub = false, pkg = from_js_string(""), expr = new bait__ast__EmptyExpr({}) }) {
	this.kind = kind
	this.typ = typ
	this.is_pub = is_pub
	this.pkg = pkg
	this.expr = expr
}
bait__ast__ScopeObject.prototype = {
	toString() {
		return `bait__ast__ScopeObject{
    kind = ${this.kind.toString()}
    typ = ${this.typ.toString()}
    is_pub = ${this.is_pub.toString()}
    pkg = ${this.pkg.toString()}
    expr = ${this.expr.toString()}
}`}
}
const bait__ast__ObjectKind = {
	unknown: 0,
	variable: 1,
	constant: 2,
	function: 3,
	global_: 4,
	package_: 5,
}
function bait__ast__Scope_register(s, name, obj) {
	if (map_contains(s.objects, name)) {
		return
	}
	map_set(s.objects, name, obj)
}

function bait__ast__Scope_get(s, name) {
	if (map_contains(s.objects, name)) {
		return map_get_set(s.objects, name, new bait__ast__ScopeObject({}))
	}
	if (!eq(s.parent, 0)) {
		return bait__ast__Scope_get(s.parent, name)
	}
	return new bait__ast__ScopeObject({ kind: bait__ast__ObjectKind.unknown })
}

function bait__ast__Scope_update_type(s, name, typ) {
	map_get_set(s.objects, name, new bait__ast__ScopeObject({})).typ = typ
}

function bait__ast__Scope_is_known(s, name) {
	const obj = bait__ast__Scope_get(s, name)
	return !eq(obj.kind, bait__ast__ObjectKind.unknown)
}


function bait__ast__Table({ global_scope = new bait__ast__Scope({}), fun_decls = new map({ data: new Map([]), length: 0 }), type_idxs = new map({ data: new Map([]), length: 0 }), type_symbols = new array({ data: [], length: 0 }), redefined_funs = new array({ data: [], length: 0 }) }) {
	this.global_scope = global_scope
	this.fun_decls = fun_decls
	this.type_idxs = type_idxs
	this.type_symbols = type_symbols
	this.redefined_funs = redefined_funs
}
bait__ast__Table.prototype = {
	toString() {
		return `bait__ast__Table{
    global_scope = ${this.global_scope.toString()}
    fun_decls = ${this.fun_decls.toString()}
    type_idxs = ${this.type_idxs.toString()}
    type_symbols = ${this.type_symbols.toString()}
    redefined_funs = ${this.redefined_funs.toString()}
}`}
}
function bait__ast__new_table() {
	let t = new bait__ast__Table({ global_scope: new bait__ast__Scope({ parent: 0 }) })
	bait__ast__Table_register_builtins(t)
	return t
}

function bait__ast__Table_get_idx(t, name) {
	return map_get_set(t.type_idxs, name, 0)
}

function bait__ast__Table_get_sym(t, idx) {
	return array_get(t.type_symbols, idx)
}

function bait__ast__Table_type_name(t, idx) {
	return bait__ast__Table_get_sym(t, idx).name
}

function bait__ast__Table_register_sym(t, sym) {
	const idx = bait__ast__Table_get_idx(t, sym.name)
	if (idx > 0) {
		const cur_sym = bait__ast__Table_get_sym(t, idx)
		if (eq(cur_sym.kind, bait__ast__TypeKind.placeholder)) {
			sym.methods = cur_sym.methods
			array_set(t.type_symbols, idx, sym)
			return idx
		}
		if (array_contains(bait__ast__BUILTIN_STRUCT_TYPES, idx)) {
			let new_sym = sym
			new_sym.kind = cur_sym.kind
			array_set(t.type_symbols, idx, new_sym)
			return idx
		}
	}
	const new_idx = t.type_symbols.length
	array_push(t.type_symbols, sym)
	map_set(t.type_idxs, sym.name, new_idx)
	return new_idx
}

function bait__ast__Table_find_or_register_array(t, elem_type) {
	const elem_sym = bait__ast__Table_get_sym(t, elem_type)
	const name = string_add(from_js_string("[]"), elem_sym.name)
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.array, name: name, parent: bait__ast__ARRAY_TYPE, info: new bait__ast__ArrayInfo({ elem_type: elem_type }) }))
}

function bait__ast__Table_find_or_register_map(t, key_type, val_type) {
	const key_sym = bait__ast__Table_get_sym(t, key_type)
	const val_sym = bait__ast__Table_get_sym(t, val_type)
	const name = from_js_string(`map[${key_sym.name.str}]${val_sym.name.str}`)
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.map, name: name, parent: bait__ast__MAP_TYPE, info: new bait__ast__MapInfo({ key_type: key_type, val_type: val_type }) }))
}

function bait__ast__Table_find_or_register_fun(t, param_types, return_type) {
	const name = string_add(from_js_string("fun_"), bait__ast__Table_fun_type_signature(t, param_types, return_type))
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.fun_, name: name, info: new bait__ast__FunInfo({ param_types: param_types, return_type: return_type }) }))
}

function bait__ast__Table_fun_type_signature(t, param_types, return_type) {
	let sig = from_js_string("")
	for (let _t4 = 0; _t4 < param_types.length; _t4++) {
		const param = array_get(param_types, _t4)
		sig = string_add(sig, string_add(bait__ast__Table_get_sym(t, param).name, from_js_string("_")))
	}
	sig = string_add(sig, string_add(from_js_string("_"), bait__ast__Table_get_sym(t, return_type).name))
	return sig
}

function bait__ast__Table_find_type_or_add_placeholder(t, name) {
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.placeholder, name: name }))
}

function bait__ast__Table_get_method(t, sym, name) {
	let s = sym
	while (true) {
		for (let _t5 = 0; _t5 < s.methods.length; _t5++) {
			const m = array_get(s.methods, _t5)
			if (eq(m.name, name)) {
				return m
			}
		}
		if (eq(s.parent, bait__ast__PLACEHOLDER_TYPE)) {
			break
		}
		s = bait__ast__Table_get_sym(t, s.parent)
	}
	return new bait__ast__FunDecl({})
}


function bait__ast__ArrayInfo({ elem_type = 0 }) {
	this.elem_type = elem_type
}
bait__ast__ArrayInfo.prototype = {
	toString() {
		return `bait__ast__ArrayInfo{
    elem_type = ${this.elem_type.toString()}
}`}
}
function bait__ast__EnumInfo({ vals = new array({ data: [], length: 0 }) }) {
	this.vals = vals
}
bait__ast__EnumInfo.prototype = {
	toString() {
		return `bait__ast__EnumInfo{
    vals = ${this.vals.toString()}
}`}
}
function bait__ast__FunInfo({ param_types = new array({ data: [], length: 0 }), return_type = 0 }) {
	this.param_types = param_types
	this.return_type = return_type
}
bait__ast__FunInfo.prototype = {
	toString() {
		return `bait__ast__FunInfo{
    param_types = ${this.param_types.toString()}
    return_type = ${this.return_type.toString()}
}`}
}
function bait__ast__MapInfo({ key_type = 0, val_type = 0 }) {
	this.key_type = key_type
	this.val_type = val_type
}
bait__ast__MapInfo.prototype = {
	toString() {
		return `bait__ast__MapInfo{
    key_type = ${this.key_type.toString()}
    val_type = ${this.val_type.toString()}
}`}
}
function bait__ast__StructInfo({ fields = new array({ data: [], length: 0 }) }) {
	this.fields = fields
}
bait__ast__StructInfo.prototype = {
	toString() {
		return `bait__ast__StructInfo{
    fields = ${this.fields.toString()}
}`}
}
function bait__ast__SumTypeInfo({ variants = new array({ data: [], length: 0 }) }) {
	this.variants = variants
}
bait__ast__SumTypeInfo.prototype = {
	toString() {
		return `bait__ast__SumTypeInfo{
    variants = ${this.variants.toString()}
}`}
}
function bait__ast__EmptyInfo({ }) {
}
bait__ast__EmptyInfo.prototype = {
	toString() {
		return `bait__ast__EmptyInfo{
}`}
}

function bait__ast__Type(val) { return val }
const bait__ast__PLACEHOLDER_TYPE = bait__ast__new_type(0)
const bait__ast__VOID_TYPE = bait__ast__new_type(1)
const bait__ast__I8_TYPE = bait__ast__new_type(2)
const bait__ast__I16_TYPE = bait__ast__new_type(3)
const bait__ast__I32_TYPE = bait__ast__new_type(4)
const bait__ast__I64_TYPE = bait__ast__new_type(5)
const bait__ast__U8_TYPE = bait__ast__new_type(6)
const bait__ast__U16_TYPE = bait__ast__new_type(7)
const bait__ast__U32_TYPE = bait__ast__new_type(8)
const bait__ast__U64_TYPE = bait__ast__new_type(9)
const bait__ast__F32_TYPE = bait__ast__new_type(10)
const bait__ast__F64_TYPE = bait__ast__new_type(11)
const bait__ast__BOOL_TYPE = bait__ast__new_type(12)
const bait__ast__STRING_TYPE = bait__ast__new_type(13)
const bait__ast__ARRAY_TYPE = bait__ast__new_type(14)
const bait__ast__MAP_TYPE = bait__ast__new_type(15)
const bait__ast__ANY_TYPE = bait__ast__new_type(16)
function bait__ast__new_type(t) {
	return t
}

function bait__ast__Type_str(t) {
	return i32_str((t))
}

const bait__ast__BUILTIN_STRUCT_TYPES = new array({ data: [bait__ast__STRING_TYPE, bait__ast__ARRAY_TYPE, bait__ast__MAP_TYPE], length: 3 })
const bait__ast__TypeKind = {
	other: 0,
	placeholder: 1,
	string: 2,
	array: 3,
	map: 4,
	interface_: 5,
	struct_: 6,
	enum_: 7,
	alias_type: 8,
	sum_type: 9,
	fun_: 10,
}
function bait__ast__TypeSymbol({ name = from_js_string(""), kind = 0, info = new bait__ast__EmptyInfo({}), methods = new array({ data: [], length: 0 }), parent = 0, overloads = new map({ data: new Map([]), length: 0 }), is_pub = false, pkg = from_js_string("") }) {
	this.name = name
	this.kind = kind
	this.info = info
	this.methods = methods
	this.parent = parent
	this.overloads = overloads
	this.is_pub = is_pub
	this.pkg = pkg
}
bait__ast__TypeSymbol.prototype = {
	toString() {
		return `bait__ast__TypeSymbol{
    name = ${this.name.toString()}
    kind = ${this.kind.toString()}
    info = ${this.info.toString()}
    methods = ${this.methods.toString()}
    parent = ${this.parent.toString()}
    overloads = ${this.overloads.toString()}
    is_pub = ${this.is_pub.toString()}
    pkg = ${this.pkg.toString()}
}`}
}
function bait__ast__TypeSymbol_find_field(sym, name, t) {
	if (sym.info instanceof bait__ast__StructInfo) {
		const info = sym.info
		for (let _t6 = 0; _t6 < info.fields.length; _t6++) {
			const f = array_get(info.fields, _t6)
			if (eq(f.name, name)) {
				return f
			}
		}
	}
	if (array_contains(bait__ast__BUILTIN_STRUCT_TYPES, sym.parent)) {
		const parent_sym = bait__ast__Table_get_sym(t, sym.parent)
		return bait__ast__TypeSymbol_find_field(parent_sym, name, t)
	}
	return new bait__ast__StructField({})
}

function bait__ast__TypeSymbol_has_method(sym, name) {
	for (let _t7 = 0; _t7 < sym.methods.length; _t7++) {
		const m = array_get(sym.methods, _t7)
		if (eq(m.name, name)) {
			return true
		}
	}
	return false
}

function bait__ast__Table_register_builtins(t) {
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("placeholder"), kind: bait__ast__TypeKind.placeholder }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("void") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("i8") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("i16") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("i32") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("i64") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("u8") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("u16") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("u32") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("u64") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("f32") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("f64") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("bool") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("string"), kind: bait__ast__TypeKind.string }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("array"), kind: bait__ast__TypeKind.array }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("map"), kind: bait__ast__TypeKind.map }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("any") }))
}


function bait__parser__Parser_expr(p, precedence) {
	let node = new bait__ast__EmptyExpr({})
	switch (p.tok.kind) {
		case bait__token__TokenKind.hash:
			{
				node = bait__parser__Parser_hash_expr(p)
				break
			}
		case bait__token__TokenKind.char:
			{
				node = bait__parser__Parser_char_literal(p)
				break
			}
		case bait__token__TokenKind.dollar:
			{
				node = bait__parser__Parser_comp_time_var(p)
				break
			}
		case bait__token__TokenKind.dot:
			{
				node = bait__parser__Parser_enum_val(p, false)
				break
			}
		case bait__token__TokenKind.lbr:
			{
				node = bait__parser__Parser_array_init(p)
				break
			}
		case bait__token__TokenKind.lpar:
			{
				node = bait__parser__Parser_par_expr(p)
				break
			}
		case bait__token__TokenKind.name:
			{
				node = bait__parser__Parser_name_expr(p)
				break
			}
		case bait__token__TokenKind.number:
			{
				node = bait__parser__Parser_number_literal(p)
				break
			}
		case bait__token__TokenKind.string:
			{
				node = bait__parser__Parser_string_literal(p)
				break
			}
		case bait__token__TokenKind.key_fun:
			{
				node = bait__parser__Parser_anon_fun(p)
				break
			}
		case bait__token__TokenKind.key_false:
		case bait__token__TokenKind.key_true:
			{
				node = bait__parser__Parser_bool_literal(p)
				break
			}
		case bait__token__TokenKind.key_if:
			{
				node = bait__parser__Parser_if_expr(p)
				break
			}
		case bait__token__TokenKind.key_match:
			{
				node = bait__parser__Parser_match_expr(p)
				break
			}
		case bait__token__TokenKind.key_mut:
			{
				node = bait__parser__Parser_ident(p)
				break
			}
		case bait__token__TokenKind.key_not:
		case bait__token__TokenKind.minus:
			{
				node = bait__parser__Parser_prefix_expr(p)
				break
			}
		case bait__token__TokenKind.key_typeof:
			{
				node = bait__parser__Parser_typeof_expr(p)
				break
			}
		default:
			{
				let msg = from_js_string(`invalid expression: kind = ${bait__token__TokenKind_str(p.tok.kind).str}`)
				if (p.tok.val.length > 0) {
					msg = string_add(msg, from_js_string(`, val = ${p.tok.val.str}`))
				}
				bait__parser__Parser_error(p, msg)
				break
			}
	}
	return bait__parser__Parser_expr_with_left(p, node, precedence)
}

function bait__parser__Parser_expr_with_left(p, left, precedence) {
	while (precedence < bait__token__Token_precedence(p.tok)) {
		if (eq(p.tok.kind, bait__token__TokenKind.dot)) {
			left = bait__parser__Parser_dot_expr(p, left)
		} else if (eq(p.tok.kind, bait__token__TokenKind.lbr)) {
			left = bait__parser__Parser_index_expr(p, left)
		} else if (eq(p.tok.kind, bait__token__TokenKind.key_as)) {
			left = bait__parser__Parser_as_cast(p, left)
		} else if (bait__token__TokenKind_is_infix(p.tok.kind)) {
			left = bait__parser__Parser_infix_expr(p, left)
		} else {
			return left
		}
	}
	return left
}

function bait__parser__Parser_expr_list(p) {
	let exprs = new array({ data: [], length: 0 })
	while (true) {
		array_push(exprs, bait__parser__Parser_expr(p, 0))
		if (!eq(p.tok.kind, bait__token__TokenKind.comma)) {
			break
		}
		bait__parser__Parser_check(p, bait__token__TokenKind.comma)
	}
	return exprs
}

function bait__parser__Parser_anon_fun(p) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.key_fun)
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	const params = bait__parser__Parser_fun_params(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	let return_type = bait__ast__VOID_TYPE
	if (!eq(p.tok.kind, bait__token__TokenKind.lcur)) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	let param_types = new array({ data: [], length: 0 })
	for (let _t8 = 0; _t8 < params.length; _t8++) {
		const param = array_get(params, _t8)
		array_push(param_types, param.typ)
	}
	const typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type)
	const stmts = bait__parser__Parser_parse_block(p)
	return new bait__ast__AnonFun({ decl: new bait__ast__FunDecl({ params: params, return_type: return_type, stmts: stmts }), typ: typ, pos: pos })
}

function bait__parser__Parser_array_init(p) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.lbr)
	if (eq(p.tok.kind, bait__token__TokenKind.rbr)) {
		bait__parser__Parser_next(p)
		const elem_type = bait__parser__Parser_parse_type(p)
		const typ = bait__ast__Table_find_or_register_array(p.table, elem_type)
		let length_expr = new bait__ast__EmptyExpr({})
		if (eq(p.tok.kind, bait__token__TokenKind.lcur)) {
			bait__parser__Parser_next(p)
			while (!eq(p.tok.kind, bait__token__TokenKind.rcur)) {
				const key = bait__parser__Parser_check_name(p)
				bait__parser__Parser_check(p, bait__token__TokenKind.assign)
				const expr = bait__parser__Parser_expr(p, 0)
				if (eq(key, from_js_string("length"))) {
					length_expr = expr
				} else {
					bait__parser__Parser_error(p, from_js_string(`invalid array init field: ${key.str}`))
				}
			}
			bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
		}
		return new bait__ast__ArrayInit({ typ: typ, elem_type: elem_type, length_expr: length_expr, pos: pos })
	}
	let exprs = new array({ data: [], length: 0 })
	while (!eq(p.tok.kind, bait__token__TokenKind.rbr)) {
		array_push(exprs, bait__parser__Parser_expr(p, 0))
		if (eq(p.tok.kind, bait__token__TokenKind.comma)) {
			bait__parser__Parser_next(p)
		}
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rbr)
	return new bait__ast__ArrayInit({ exprs: exprs, pos: pos })
}

function bait__parser__Parser_as_cast(p, left) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.key_as)
	const bait_target = bait__parser__Parser_parse_type(p)
	return new bait__ast__AsCast({ target: bait_target, expr: left, pos: pos })
}

function bait__parser__Parser_bool_literal(p) {
	const pos = p.tok.pos
	const val = eq(p.tok.kind, bait__token__TokenKind.key_true)
	bait__parser__Parser_next(p)
	return new bait__ast__BoolLiteral({ val: val, pos: pos })
}

function bait__parser__Parser_char_literal(p) {
	const pos = p.tok.pos
	bait__parser__Parser_next(p)
	return new bait__ast__CharLiteral({ val: p.prev_tok.val, pos: pos })
}

function bait__parser__Parser_comp_time_var(p) {
	const pos = p.tok.pos
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_check_name(p)
	return new bait__ast__CompTimeVar({ name: name, pos: pos })
}

function bait__parser__Parser_dot_expr(p, left) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.dot)
	if (eq(p.next_tok.kind, bait__token__TokenKind.lpar)) {
		return bait__parser__Parser_method_call(p, left)
	}
	const name = bait__parser__Parser_check_name(p)
	return new bait__ast__SelectorExpr({ expr: left, field_name: name, pos: pos })
}

function bait__parser__Parser_fun_call(p, lang) {
	const pos = p.tok.pos
	const name = bait__parser__Parser_prepend_expr_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	const args = bait__parser__Parser_call_args(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	return new bait__ast__CallExpr({ name: name, args: args, pkg: p.pkg_name, pos: pos, lang: lang })
}

function bait__parser__Parser_method_call(p, left) {
	const pos = p.tok.pos
	const name = bait__parser__Parser_check_name(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	const args = bait__parser__Parser_call_args(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	return new bait__ast__CallExpr({ is_method: true, left: left, name: name, args: args, pos: pos })
}

function bait__parser__Parser_call_args(p) {
	let args = new array({ data: [], length: 0 })
	while (!eq(p.tok.kind, bait__token__TokenKind.rpar)) {
		array_push(args, new bait__ast__CallArg({ expr: bait__parser__Parser_expr(p, 0) }))
		if (!eq(p.tok.kind, bait__token__TokenKind.rpar)) {
			bait__parser__Parser_check(p, bait__token__TokenKind.comma)
		}
	}
	return args
}

function bait__parser__Parser_enum_val(p, has_name) {
	const pos = p.tok.pos
	let name = from_js_string("")
	if (has_name) {
		name = bait__parser__Parser_check_name(p)
		if (p.expr_pkg.length > 0) {
			name = bait__parser__Parser_prepend_expr_pkg(p, name)
		} else {
			name = bait__parser__Parser_prepend_pkg(p, name)
		}
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.dot)
	const val = bait__parser__Parser_check_name(p)
	return new bait__ast__EnumVal({ name: name, val: val, pos: pos })
}

function bait__parser__Parser_hash_expr(p) {
	bait__parser__Parser_check(p, bait__token__TokenKind.hash)
	bait__parser__Parser_check(p, bait__token__TokenKind.dot)
	if (!eq(p.tok.kind, bait__token__TokenKind.string)) {
		p.expr_pkg = from_js_string("JS__")
		p.expr_pkg = string_add(p.expr_pkg, bait__parser__Parser_check_name(p))
		bait__parser__Parser_check(p, bait__token__TokenKind.dot)
		return bait__parser__Parser_fun_call(p, bait__ast__Language.js)
	}
	const str_node = bait__parser__Parser_string_literal(p)
	return new bait__ast__HashExpr({ val: str_node.val, pos: str_node.pos })
}

function bait__parser__Parser_ident(p) {
	const pos = p.tok.pos
	let is_mut = eq(p.tok.kind, bait__token__TokenKind.key_mut)
	if (is_mut) {
		bait__parser__Parser_next(p)
	}
	if (p.is_for_init) {
		is_mut = true
	}
	const name = bait__parser__Parser_prepend_expr_pkg(p, bait__parser__Parser_check_name(p))
	return new bait__ast__Ident({ name: name, is_mut: is_mut, pkg: p.pkg_name, pos: pos })
}

function bait__parser__Parser_if_expr(p) {
	const pos = p.tok.pos
	let branches = new array({ data: [], length: 0 })
	let has_else = false
	while (true) {
		const bpos = p.tok.pos
		if (eq(p.tok.kind, bait__token__TokenKind.key_else)) {
			bait__parser__Parser_next(p)
			if (eq(p.tok.kind, bait__token__TokenKind.lcur)) {
				has_else = true
				const stmts = bait__parser__Parser_parse_block(p)
				array_push(branches, new bait__ast__IfBranch({ cond: new bait__ast__EmptyExpr({}), stmts: stmts, pos: bpos }))
				break
			}
		}
		bait__parser__Parser_check(p, bait__token__TokenKind.key_if)
		p.is_struct_possible = false
		const cond = bait__parser__Parser_expr(p, 0)
		p.is_struct_possible = true
		const stmts = bait__parser__Parser_parse_block(p)
		array_push(branches, new bait__ast__IfBranch({ cond: cond, stmts: stmts }))
		if (!eq(p.tok.kind, bait__token__TokenKind.key_else)) {
			break
		}
	}
	return new bait__ast__IfExpr({ has_else: has_else, branches: branches, pos: pos })
}

function bait__parser__Parser_index_expr(p, left) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.lbr)
	const index = bait__parser__Parser_expr(p, 0)
	bait__parser__Parser_check(p, bait__token__TokenKind.rbr)
	return new bait__ast__IndexExpr({ left: left, index: index, pos: pos })
}

function bait__parser__Parser_infix_expr(p, left) {
	const pos = p.tok.pos
	const op_tok = p.tok
	bait__parser__Parser_next(p)
	const right = bait__parser__Parser_expr(p, bait__token__Token_precedence(op_tok))
	return new bait__ast__InfixExpr({ left: left, right: right, op: op_tok.kind, pos: pos })
}

function bait__parser__Parser_map_init(p) {
	const pos = p.tok.pos
	bait__parser__Parser_next(p)
	if (eq(p.tok.kind, bait__token__TokenKind.lbr)) {
		const map_type = bait__parser__Parser_parse_map_type(p)
		return new bait__ast__MapInit({ typ: map_type, pos: pos })
	}
	let keys = new array({ data: [], length: 0 })
	let vals = new array({ data: [], length: 0 })
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	while (!eq(p.tok.kind, bait__token__TokenKind.rcur)) {
		array_push(keys, bait__parser__Parser_expr(p, 0))
		bait__parser__Parser_check(p, bait__token__TokenKind.colon)
		array_push(vals, bait__parser__Parser_expr(p, 0))
	}
	bait__parser__Parser_next(p)
	return new bait__ast__MapInit({ keys: keys, vals: vals, pos: pos })
}

function bait__parser__Parser_match_expr(p) {
	const pos = p.tok.pos
	let branches = new array({ data: [], length: 0 })
	bait__parser__Parser_check(p, bait__token__TokenKind.key_match)
	p.is_struct_possible = false
	const cond = bait__parser__Parser_expr(p, 0)
	p.is_struct_possible = true
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	while (!eq(p.tok.kind, bait__token__TokenKind.rcur)) {
		const bpos = p.tok.pos
		let exprs = new array({ data: [], length: 0 })
		if (eq(p.tok.kind, bait__token__TokenKind.key_else)) {
			bait__parser__Parser_next(p)
		} else {
			p.is_struct_possible = false
			exprs = bait__parser__Parser_expr_list(p)
			p.is_struct_possible = true
		}
		const stmts = bait__parser__Parser_parse_block(p)
		array_push(branches, new bait__ast__MatchBranch({ exprs: exprs, stmts: stmts, pos: pos }))
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
	return new bait__ast__MatchExpr({ cond: cond, branches: branches, pos: pos })
}

function bait__parser__Parser_name_expr(p) {
	if (eq(p.next_tok.kind, bait__token__TokenKind.dot) && map_contains(p.import_aliases, p.tok.val)) {
		p.expr_pkg = map_get_set(p.import_aliases, p.tok.val, from_js_string(""))
		bait__parser__Parser_next(p)
		bait__parser__Parser_next(p)
	}
	if (eq(p.tok.val, from_js_string("map"))) {
		return bait__parser__Parser_map_init(p)
	}
	if (eq(p.next_tok.kind, bait__token__TokenKind.lpar)) {
		return bait__parser__Parser_fun_call(p, bait__ast__Language.bait)
	}
	if (p.is_struct_possible && eq(p.next_tok.kind, bait__token__TokenKind.lcur)) {
		return bait__parser__Parser_struct_init(p)
	}
	if (eq(p.next_tok.kind, bait__token__TokenKind.dot) && u8_is_capital(string_get(p.tok.val, 0)) && !string_is_upper(p.tok.val)) {
		return bait__parser__Parser_enum_val(p, true)
	}
	return bait__parser__Parser_ident(p)
}

function bait__parser__Parser_number_literal(p) {
	const pos = p.tok.pos
	bait__parser__Parser_next(p)
	return new bait__ast__IntegerLiteral({ val: p.prev_tok.val, pos: pos })
}

function bait__parser__Parser_par_expr(p) {
	const pos = p.tok.pos
	bait__parser__Parser_next(p)
	const expr = bait__parser__Parser_expr(p, 0)
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	return new bait__ast__ParExpr({ expr: expr, pos: pos })
}

function bait__parser__Parser_prefix_expr(p) {
	const pos = p.tok.pos
	const op = p.tok.kind
	bait__parser__Parser_next(p)
	const right = bait__parser__Parser_expr(p, 0)
	return new bait__ast__PrefixExpr({ op: op, right: right, pos: pos })
}

function bait__parser__Parser_string_literal(p) {
	const pos = p.tok.pos
	if (!eq(p.next_tok.kind, bait__token__TokenKind.dollar)) {
		bait__parser__Parser_next(p)
		return new bait__ast__StringLiteral({ val: p.prev_tok.val, pos: pos })
	}
	let vals = new array({ data: [], length: 0 })
	let exprs = new array({ data: [], length: 0 })
	while (eq(p.tok.kind, bait__token__TokenKind.string)) {
		array_push(vals, p.tok.val)
		bait__parser__Parser_next(p)
		if (!eq(p.tok.kind, bait__token__TokenKind.dollar)) {
			break
		}
		bait__parser__Parser_next(p)
		bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
		array_push(exprs, bait__parser__Parser_expr(p, 0))
	}
	return new bait__ast__StringInterLiteral({ vals: vals, exprs: exprs, pos: pos })
}

function bait__parser__Parser_typeof_expr(p) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.key_typeof)
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	const expr = bait__parser__Parser_expr(p, 0)
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	return new bait__ast__TypeOf({ expr: expr, pos: pos })
}


function bait__parser__Parser_js_import(p) {
	const name = p.tok.val
	bait__parser__Parser_next(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.key_as)
	let alias = string_add(p.tok.val, from_js_string("."))
	bait__parser__Parser_check(p, bait__token__TokenKind.hash)
	bait__parser__Parser_check(p, bait__token__TokenKind.dot)
	alias = string_add(alias, bait__parser__Parser_check_name(p))
	return new bait__ast__Import({ name: name, alias: alias, lang: bait__ast__Language.js })
}

function bait__parser__Parser_bait_import(p) {
	let name_parts = new array({ data: [], length: 0 })
	array_push(name_parts, bait__parser__Parser_check_name(p))
	while (eq(p.tok.kind, bait__token__TokenKind.dot)) {
		bait__parser__Parser_next(p)
		array_push(name_parts, bait__parser__Parser_check_name(p))
	}
	const name = array_string_join(name_parts, from_js_string("."))
	let alias = array_get(name_parts, name_parts.length - 1)
	if (eq(p.tok.kind, bait__token__TokenKind.key_as)) {
		bait__parser__Parser_next(p)
		alias = bait__parser__Parser_check_name(p)
	}
	return new bait__ast__Import({ name: name, alias: alias })
}

function bait__parser__Parser_import_stmts(p) {
	let imports = new array({ data: [], length: 0 })
	while (eq(p.tok.kind, bait__token__TokenKind.key_import)) {
		const pos = p.tok.pos
		bait__parser__Parser_next(p)
		let imp = new bait__ast__Import({})
		if (eq(p.tok.kind, bait__token__TokenKind.string)) {
			imp = bait__parser__Parser_js_import(p)
		} else {
			imp = bait__parser__Parser_bait_import(p)
		}
		map_set(p.import_aliases, imp.alias, imp.name)
		imp.pos = pos
		array_push(imports, imp)
	}
	return imports
}


function bait__parser__Parser({ pref = new bait__preference__Prefs({}), path = from_js_string(""), table = new bait__ast__Table({}), tokens = new array({ data: [], length: 0 }), idx = 0, prev_tok = new bait__token__Token({}), tok = new bait__token__Token({}), next_tok = new bait__token__Token({}), pkg_name = from_js_string(""), import_aliases = new map({ data: new Map([]), length: 0 }), attributes = new array({ data: [], length: 0 }), expr_pkg = from_js_string(""), is_for_init = false, is_struct_possible = false, should_abort = false, warnings = new array({ data: [], length: 0 }), errors = new array({ data: [], length: 0 }) }) {
	this.pref = pref
	this.path = path
	this.table = table
	this.tokens = tokens
	this.idx = idx
	this.prev_tok = prev_tok
	this.tok = tok
	this.next_tok = next_tok
	this.pkg_name = pkg_name
	this.import_aliases = import_aliases
	this.attributes = attributes
	this.expr_pkg = expr_pkg
	this.is_for_init = is_for_init
	this.is_struct_possible = is_struct_possible
	this.should_abort = should_abort
	this.warnings = warnings
	this.errors = errors
}
bait__parser__Parser.prototype = {
	toString() {
		return `bait__parser__Parser{
    pref = ${this.pref.toString()}
    path = ${this.path.toString()}
    table = ${this.table.toString()}
    tokens = ${this.tokens.toString()}
    idx = ${this.idx.toString()}
    prev_tok = ${this.prev_tok.toString()}
    tok = ${this.tok.toString()}
    next_tok = ${this.next_tok.toString()}
    pkg_name = ${this.pkg_name.toString()}
    import_aliases = ${this.import_aliases.toString()}
    attributes = ${this.attributes.toString()}
    expr_pkg = ${this.expr_pkg.toString()}
    is_for_init = ${this.is_for_init.toString()}
    is_struct_possible = ${this.is_struct_possible.toString()}
    should_abort = ${this.should_abort.toString()}
    warnings = ${this.warnings.toString()}
    errors = ${this.errors.toString()}
}`}
}
function bait__parser__parse(tokens, path, table, pref) {
	let p = new bait__parser__Parser({ pref: pref, path: path, table: table, tokens: tokens, is_struct_possible: true })
	bait__parser__Parser_next(p)
	bait__parser__Parser_next(p)
	const pkg_decl = bait__parser__Parser_package_decl(p)
	if (p.pref.expected_pkg.length > 0 && !eq(pkg_decl.full_name, p.pref.expected_pkg)) {
		return new bait__ast__File({ path: path })
	}
	const imports = bait__parser__Parser_import_stmts(p)
	let stmts = new array({ data: [], length: 0 })
	while (!eq(p.tok.kind, bait__token__TokenKind.eof)) {
		bait__parser__Parser_parse_attributes(p)
		array_push(stmts, bait__parser__Parser_toplevel_stmt(p))
		if (p.should_abort) {
			break
		}
	}
	return new bait__ast__File({ path: path, pkg_decl: pkg_decl, imports: imports, stmts: stmts, warnings: p.warnings, errors: p.errors })
}

function bait__parser__Parser_package_decl(p) {
	if (!eq(p.tok.kind, bait__token__TokenKind.key_package)) {
		p.pkg_name = from_js_string("main")
		return new bait__ast__PackageDecl({ name: from_js_string("main"), full_name: from_js_string("main") })
	}
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_check_name(p)
	let full_name = name
	if (!eq(full_name, from_js_string("main")) && string_contains(p.path, from_js_string("lib/"))) {
		const rel_path = string_substr(p.path, string_index(p.path, from_js_string("lib/")) + 4, p.path.length)
		full_name = string_replace(string_substr(rel_path, 0, string_last_index(rel_path, from_js_string("/"))), from_js_string("/"), from_js_string("."))
	}
	p.pkg_name = full_name
	return new bait__ast__PackageDecl({ name: name, full_name: full_name })
}

function bait__parser__Parser_parse_attributes(p) {
	while (eq(p.tok.kind, bait__token__TokenKind.attr)) {
		const pos = p.tok.pos
		const name = p.tok.val
		bait__parser__Parser_next(p)
		let value = from_js_string("")
		if (eq(p.tok.kind, bait__token__TokenKind.colon)) {
			bait__parser__Parser_next(p)
			bait__parser__Parser_check(p, bait__token__TokenKind.string)
			value = p.prev_tok.val
		}
		array_push(p.attributes, new bait__ast__Attribute({ name: name, value: value, pos: pos }))
	}
}

function bait__parser__Parser_parse_block(p) {
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	let bstmts = new array({ data: [], length: 0 })
	while (!array_contains(new array({ data: [bait__token__TokenKind.eof, bait__token__TokenKind.rcur], length: 2 }), p.tok.kind)) {
		array_push(bstmts, bait__parser__Parser_stmt(p))
		if (p.should_abort) {
			break
		}
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
	return bstmts
}

function bait__parser__Parser_check(p, expected) {
	if (!eq(p.tok.kind, expected)) {
		bait__parser__Parser_error(p, from_js_string(`unexpected ${bait__token__TokenKind_str(p.tok.kind).str}, expecting ${bait__token__TokenKind_str(expected).str}`))
	}
	bait__parser__Parser_next(p)
}

function bait__parser__Parser_check_name(p) {
	bait__parser__Parser_check(p, bait__token__TokenKind.name)
	return p.prev_tok.val
}

function bait__parser__Parser_check_pub(p) {
	if (eq(p.tok.kind, bait__token__TokenKind.key_pub)) {
		bait__parser__Parser_next(p)
		return true
	}
	return false
}

function bait__parser__Parser_parse_lang(p) {
	if (!eq(p.tok.kind, bait__token__TokenKind.hash)) {
		return bait__ast__Language.bait
	}
	bait__parser__Parser_next(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.dot)
	return bait__ast__Language.js
}

function bait__parser__Parser_prepend_lang(p, lang, val) {
	if (eq(lang, bait__ast__Language.bait)) {
		return val
	}
	return string_add(from_js_string("#JS."), val)
}

function bait__parser__Parser_prepend_pkg(p, val) {
	if (eq(p.pkg_name, from_js_string("builtin")) || eq(p.pkg_name, from_js_string("main")) || eq(p.pkg_name.length, 0)) {
		return val
	}
	return string_add(string_add(p.pkg_name, from_js_string(".")), val)
}

function bait__parser__Parser_prepend_expr_pkg(p, val) {
	if (eq(p.expr_pkg.length, 0) || eq(p.expr_pkg, p.pkg_name)) {
		return val
	}
	const res = string_add(string_add(p.expr_pkg, from_js_string(".")), val)
	p.expr_pkg = from_js_string("")
	return res
}

function bait__parser__Parser_next(p) {
	p.prev_tok = p.tok
	p.tok = p.next_tok
	p.next_tok = array_get(p.tokens, p.idx)
	p.idx += 1
}

function bait__parser__Parser_warn(p, msg) {
	array_push(p.warnings, new bait__errors__Message({ kind: bait__errors__Kind.warning, path: p.path, pos: p.tok.pos, title: from_js_string("warning"), msg: msg }))
}

function bait__parser__Parser_error(p, msg) {
	array_push(p.errors, new bait__errors__Message({ kind: bait__errors__Kind.error, path: p.path, pos: p.tok.pos, title: from_js_string("error"), msg: msg }))
	p.should_abort = true
}


function bait__parser__Parser_toplevel_stmt(p) {
	switch (p.tok.kind) {
		case bait__token__TokenKind.key_pub:
			{
				return bait__parser__Parser_pub_stmt(p)
				break
			}
		case bait__token__TokenKind.hash:
			{
				return bait__parser__Parser_expr_stmt(p)
				break
			}
		case bait__token__TokenKind.key_const:
			{
				return bait__parser__Parser_const_decl(p)
				break
			}
		case bait__token__TokenKind.key_enum:
			{
				return bait__parser__Parser_enum_decl(p)
				break
			}
		case bait__token__TokenKind.key_fun:
			{
				return bait__parser__Parser_fun_decl(p)
				break
			}
		case bait__token__TokenKind.key_global:
			{
				return bait__parser__Parser_global_decl(p)
				break
			}
		case bait__token__TokenKind.key_interface:
			{
				return bait__parser__Parser_interface_decl(p)
				break
			}
		case bait__token__TokenKind.key_struct:
			{
				return bait__parser__Parser_struct_decl(p)
				break
			}
		case bait__token__TokenKind.key_type:
			{
				return bait__parser__Parser_type_decl(p)
				break
			}
		default:
			{
				if (eq(p.pkg_name, from_js_string("main"))) {
					return bait__parser__Parser_script_mode_main(p)
				}
				bait__parser__Parser_error(p, from_js_string(`bad toplevel token: kind = ${bait__token__TokenKind_str(p.tok.kind).str}, val = ${p.tok.val.str}`))
				break
			}
	}
}

function bait__parser__Parser_pub_stmt(p) {
	switch (p.next_tok.kind) {
		case bait__token__TokenKind.key_const:
			{
				return bait__parser__Parser_const_decl(p)
				break
			}
		case bait__token__TokenKind.key_enum:
			{
				return bait__parser__Parser_enum_decl(p)
				break
			}
		case bait__token__TokenKind.key_fun:
			{
				return bait__parser__Parser_fun_decl(p)
				break
			}
		case bait__token__TokenKind.key_interface:
			{
				return bait__parser__Parser_interface_decl(p)
				break
			}
		case bait__token__TokenKind.key_struct:
			{
				return bait__parser__Parser_struct_decl(p)
				break
			}
		default:
			{
				bait__parser__Parser_error(p, from_js_string(`cannot use pub keyword before ${bait__token__TokenKind_str(p.next_tok.kind).str}`))
				break
			}
	}
}

function bait__parser__Parser_script_mode_main(p) {
	if (!p.pref.is_script) {
		bait__parser__Parser_warn(p, from_js_string("declare the main function or use the --script option"))
	}
	let stmts = new array({ data: [], length: 0 })
	while (!p.should_abort && !eq(p.tok.kind, bait__token__TokenKind.eof)) {
		array_push(stmts, bait__parser__Parser_stmt(p))
	}
	let node = new bait__ast__FunDecl({ name: from_js_string("main") })
	map_set(p.table.fun_decls, from_js_string("main"), node)
	node.stmts = stmts
	return node
}

function bait__parser__Parser_stmt(p) {
	switch (p.tok.kind) {
		case bait__token__TokenKind.key_assert:
			{
				return bait__parser__Parser_assert_stmt(p)
				break
			}
		case bait__token__TokenKind.key_mut:
		case bait__token__TokenKind.name:
			{
				return bait__parser__Parser_assign_or_expr_stmt(p)
				break
			}
		case bait__token__TokenKind.key_break:
		case bait__token__TokenKind.key_continue:
			{
				return bait__parser__Parser_control_stmt(p)
				break
			}
		case bait__token__TokenKind.key_for:
			{
				return bait__parser__Parser_for_loop(p)
				break
			}
		case bait__token__TokenKind.key_return:
			{
				return bait__parser__Parser_return_stmt(p)
				break
			}
		default:
			{
				return bait__parser__Parser_expr_stmt(p)
				break
			}
	}
}

function bait__parser__Parser_assign_or_expr_stmt(p) {
	const left = bait__parser__Parser_expr(p, 0)
	if (bait__token__TokenKind_is_assign(p.tok.kind)) {
		return bait__parser__Parser_assign_stmt(p, left)
	}
	return new bait__ast__ExprStmt({ expr: left })
}

function bait__parser__Parser_assert_stmt(p) {
	bait__parser__Parser_next(p)
	const pos = p.tok.pos
	const expr = bait__parser__Parser_expr(p, 0)
	return new bait__ast__AssertStmt({ expr: expr, pos: pos })
}

function bait__parser__Parser_assign_stmt(p, left) {
	const pos = p.tok.pos
	const op = p.tok.kind
	bait__parser__Parser_next(p)
	const right = bait__parser__Parser_expr(p, 0)
	return new bait__ast__AssignStmt({ op: op, left: left, right: right, pos: pos })
}

function bait__parser__Parser_const_decl(p) {
	const pos = p.tok.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.decl_assign)
	const expr = bait__parser__Parser_expr(p, 0)
	const typ = bait__parser__Parser_infer_expr_type(p, expr)
	bait__ast__Scope_register(p.table.global_scope, name, new bait__ast__ScopeObject({ typ: typ, kind: bait__ast__ObjectKind.constant, is_pub: is_pub, pkg: p.pkg_name, expr: expr }))
	return new bait__ast__ConstDecl({ name: name, expr: expr, pos: pos })
}

function bait__parser__Parser_control_stmt(p) {
	const pos = p.tok.pos
	bait__parser__Parser_next(p)
	return new bait__ast__LoopControlStmt({ kind: p.prev_tok.kind, pos: pos })
}

function bait__parser__Parser_expr_stmt(p) {
	const expr = bait__parser__Parser_expr(p, 0)
	return new bait__ast__ExprStmt({ expr: expr })
}

function bait__parser__Parser_enum_decl(p) {
	const pos = p.tok.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	let variants = new array({ data: [], length: 0 })
	let fields = new array({ data: [], length: 0 })
	while (!eq(p.tok.kind, bait__token__TokenKind.rcur)) {
		const fpos = p.tok.pos
		const fname = bait__parser__Parser_check_name(p)
		let expr = new bait__ast__EmptyExpr({})
		if (eq(p.tok.kind, bait__token__TokenKind.decl_assign)) {
			bait__parser__Parser_next(p)
			expr = bait__parser__Parser_expr(p, 0)
		}
		array_push(variants, fname)
		array_push(fields, new bait__ast__EnumField({ name: fname, expr: expr, pos: fpos }))
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
	bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ name: name, is_pub: is_pub, pkg: p.pkg_name, kind: bait__ast__TypeKind.enum_, info: new bait__ast__EnumInfo({ vals: variants }) }))
	return new bait__ast__EnumDecl({ name: name, fields: fields, pos: pos })
}

function bait__parser__Parser_for_loop(p) {
	const pos = p.tok.pos
	bait__parser__Parser_next(p)
	if (eq(p.next_tok.kind, bait__token__TokenKind.decl_assign)) {
		p.is_for_init = true
		const init = bait__parser__Parser_assign_or_expr_stmt(p)
		p.is_for_init = false
		bait__parser__Parser_check(p, bait__token__TokenKind.semicolon)
		const cond = bait__parser__Parser_expr(p, 0)
		bait__parser__Parser_check(p, bait__token__TokenKind.semicolon)
		const inc = bait__parser__Parser_stmt(p)
		const stmts = bait__parser__Parser_parse_block(p)
		return new bait__ast__ForClassicLoop({ init: init, cond: cond, inc: inc, stmts: stmts, pos: pos })
	}
	if (eq(p.next_tok.kind, bait__token__TokenKind.key_in) || eq(p.next_tok.kind, bait__token__TokenKind.comma)) {
		let idxvar = from_js_string("")
		if (eq(p.next_tok.kind, bait__token__TokenKind.comma)) {
			idxvar = bait__parser__Parser_check_name(p)
			bait__parser__Parser_next(p)
		}
		const valvar = bait__parser__Parser_check_name(p)
		bait__parser__Parser_check(p, bait__token__TokenKind.key_in)
		p.is_struct_possible = false
		const expr = bait__parser__Parser_expr(p, 0)
		p.is_struct_possible = true
		const stmts = bait__parser__Parser_parse_block(p)
		return new bait__ast__ForInLoop({ idxvar: idxvar, valvar: valvar, expr: expr, stmts: stmts, pos: pos })
	}
	const cond = bait__parser__Parser_expr(p, 0)
	const stmts = bait__parser__Parser_parse_block(p)
	return new bait__ast__ForLoop({ cond: cond, stmts: stmts, pos: pos })
}

function bait__parser__Parser_fun_decl(p) {
	const pos = p.tok.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.key_fun)
	let lang = bait__ast__Language.bait
	let is_method = false
	let params = new array({ data: [], length: 0 })
	if (eq(p.tok.kind, bait__token__TokenKind.lpar)) {
		is_method = true
		bait__parser__Parser_next(p)
		const rec_name = bait__parser__Parser_check_name(p)
		const rec_type = bait__parser__Parser_parse_type(p)
		array_push(params, new bait__ast__Param({ name: rec_name, typ: rec_type }))
		bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	}
	let name = from_js_string("")
	if (eq(p.tok.kind, bait__token__TokenKind.hash)) {
		lang = bait__ast__Language.js
		name = string_add(name, string_add(p.tok.val, from_js_string("__")))
		bait__parser__Parser_next(p)
		bait__parser__Parser_check(p, bait__token__TokenKind.dot)
		name = string_add(name, string_add(bait__parser__Parser_check_name(p), from_js_string(".")))
		bait__parser__Parser_check(p, bait__token__TokenKind.dot)
	}
	name = string_add(name, bait__parser__Parser_check_name(p))
	if (!is_method && eq(lang, bait__ast__Language.bait)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	params = array_concat(params, bait__parser__Parser_fun_params(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	let return_type = bait__ast__VOID_TYPE
	if (!eq(p.tok.kind, bait__token__TokenKind.lcur) && eq(pos.line, p.tok.pos.line)) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	let node = new bait__ast__FunDecl({ is_test: string_starts_with(name, from_js_string("test_")), is_pub: is_pub, name: name, pkg: p.pkg_name, params: params, return_type: return_type, attrs: p.attributes, lang: lang, pos: pos })
	p.attributes = new array({ data: [], length: 0 })
	if (is_method) {
		const sym = bait__ast__Table_get_sym(p.table, array_get(params, 0).typ)
		if (bait__ast__TypeSymbol_has_method(sym, name)) {
			bait__parser__Parser_error(p, from_js_string(`Method "${name.str}" already exists on type "${sym.name.str}"`))
		}
		array_push(sym.methods, node)
	} else {
		if (map_contains(p.table.fun_decls, name)) {
			array_push(p.table.redefined_funs, name)
		}
		map_set(p.table.fun_decls, name, node)
		let param_types = new array({ data: [], length: 0 })
		for (let _t9 = 0; _t9 < params.length; _t9++) {
			const param = array_get(params, _t9)
			array_push(param_types, param.typ)
		}
		const typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type)
	}
	if (eq(lang, bait__ast__Language.bait)) {
		node.stmts = bait__parser__Parser_parse_block(p)
	}
	node.is_method = is_method
	return node
}

function bait__parser__Parser_fun_params(p) {
	let params = new array({ data: [], length: 0 })
	while (!eq(p.tok.kind, bait__token__TokenKind.rpar)) {
		const pos = p.tok.pos
		const param = new bait__ast__Param({ name: bait__parser__Parser_check_name(p), typ: bait__parser__Parser_parse_type(p), pos: pos })
		array_push(params, param)
		if (!eq(p.tok.kind, bait__token__TokenKind.rpar)) {
			bait__parser__Parser_check(p, bait__token__TokenKind.comma)
		}
	}
	return params
}

function bait__parser__Parser_global_decl(p) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.key_global)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.decl_assign)
	const expr = bait__parser__Parser_expr(p, 0)
	const typ = bait__parser__Parser_infer_expr_type(p, expr)
	bait__ast__Scope_register(p.table.global_scope, name, new bait__ast__ScopeObject({ typ: typ, kind: bait__ast__ObjectKind.global_ }))
	return new bait__ast__GlobalDecl({ name: name, expr: expr, pos: pos })
}

function bait__parser__Parser_interface_decl(p) {
	const pos = p.tok.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.key_interface)
	const lang = bait__parser__Parser_parse_lang(p)
	const name = bait__parser__Parser_prepend_lang(p, lang, bait__parser__Parser_check_name(p))
	const tsym = new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.interface_, name: name, is_pub: is_pub, pkg: p.pkg_name })
	const typ = bait__ast__Table_register_sym(p.table, tsym)
	let methods = new array({ data: [], length: 0 })
	let fields = new array({ data: [], length: 0 })
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	while (!eq(p.tok.kind, bait__token__TokenKind.rcur)) {
		if (eq(p.tok.kind, bait__token__TokenKind.key_fun)) {
			bait__parser__Parser_next(p)
			const fun_name = bait__parser__Parser_check_name(p)
			bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
			let params = new array({ data: [new bait__ast__Param({ name: from_js_string("_"), typ: typ })], length: 1 })
			params = array_concat(params, bait__parser__Parser_fun_params(p))
			bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
			let return_type = bait__ast__VOID_TYPE
			if (eq(p.tok.pos.line, p.prev_tok.pos.line)) {
				return_type = bait__parser__Parser_parse_type(p)
			}
			const m = new bait__ast__FunDecl({ lang: bait__ast__Language.js, name: fun_name, params: params, return_type: return_type, is_pub: true, is_method: true })
			array_push(methods, m)
			array_push(tsym.methods, m)
			continue
		}
		if (eq(p.tok.kind, bait__token__TokenKind.name)) {
			array_push(fields, new bait__ast__StructField({ name: bait__parser__Parser_check_name(p), typ: bait__parser__Parser_parse_type(p) }))
			continue
		}
	}
	bait__parser__Parser_next(p)
	tsym.info = new bait__ast__StructInfo({ fields: fields })
	return new bait__ast__InterfaceDecl({ lang: lang, name: name, typ: typ, methods: methods, fields: fields, pos: pos })
}

function bait__parser__Parser_return_stmt(p) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.key_return)
	let expr = new bait__ast__EmptyExpr({})
	if (eq(p.tok.pos.line, pos.line)) {
		expr = bait__parser__Parser_expr(p, 0)
	}
	return new bait__ast__ReturnStmt({ expr: expr, pos: pos })
}

function bait__parser__Parser_type_decl(p) {
	const pos = p.tok.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.decl_assign)
	const is_fun_type = eq(p.tok.kind, bait__token__TokenKind.key_fun)
	let variants = new array({ data: [], length: 0 })
	array_push(variants, bait__parser__Parser_parse_type(p))
	if (is_fun_type) {
		const sym = bait__ast__Table_get_sym(p.table, array_get(variants, 0))
		const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.fun_, name: name, is_pub: is_pub, pkg: p.pkg_name, info: sym.info }))
		return new bait__ast__TypeDecl({ name: name, typ: typ, pos: pos })
	}
	if (!eq(p.tok.kind, bait__token__TokenKind.pipe)) {
		const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.alias_type, name: name, parent: array_get(variants, 0), is_pub: is_pub, pkg: p.pkg_name }))
		return new bait__ast__TypeDecl({ name: name, typ: typ, pos: pos })
	}
	while (eq(p.tok.kind, bait__token__TokenKind.pipe)) {
		bait__parser__Parser_next(p)
		array_push(variants, bait__parser__Parser_parse_type(p))
	}
	const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.sum_type, name: name, is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__SumTypeInfo({ variants: variants }) }))
	return new bait__ast__TypeDecl({ name: name, typ: typ, pos: pos })
}


function bait__parser__Parser_struct_decl(p) {
	const pos = p.tok.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.key_struct)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	let fields = new array({ data: [], length: 0 })
	while (!eq(p.tok.kind, bait__token__TokenKind.rcur)) {
		bait__parser__Parser_parse_attributes(p)
		array_push(fields, bait__parser__Parser_struct_decl_field(p))
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
	const tsym = new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.struct_, name: name, is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__StructInfo({ fields: fields }) })
	const typ = bait__ast__Table_register_sym(p.table, tsym)
	return new bait__ast__StructDecl({ name: name, typ: typ, fields: fields, pos: pos })
}

function bait__parser__Parser_struct_decl_field(p) {
	const pos = p.tok.pos
	const fname = bait__parser__Parser_check_name(p)
	const ftyp = bait__parser__Parser_parse_type(p)
	let expr = new bait__ast__EmptyExpr({})
	if (eq(p.tok.kind, bait__token__TokenKind.decl_assign)) {
		bait__parser__Parser_next(p)
		expr = bait__parser__Parser_expr(p, 0)
	}
	const field = new bait__ast__StructField({ name: fname, typ: ftyp, expr: expr, pos: pos, attrs: p.attributes })
	p.attributes = new array({ data: [], length: 0 })
	return field
}

function bait__parser__Parser_struct_init(p) {
	const pos = p.tok.pos
	const typ = bait__parser__Parser_parse_type(p)
	const name = p.prev_tok.val
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	let fields = new array({ data: [], length: 0 })
	while (!eq(p.tok.kind, bait__token__TokenKind.rcur)) {
		array_push(fields, bait__parser__Parser_struct_init_field(p))
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
	return new bait__ast__StructInit({ name: name, typ: typ, fields: fields, pos: pos })
}

function bait__parser__Parser_struct_init_field(p) {
	const pos = p.tok.pos
	const name = bait__parser__Parser_check_name(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.assign)
	const expr = bait__parser__Parser_expr(p, 0)
	return new bait__ast__StructInitField({ name: name, expr: expr, pos: pos })
}


function bait__parser__Parser_parse_type(p) {
	if (eq(p.tok.kind, bait__token__TokenKind.lbr)) {
		bait__parser__Parser_next(p)
		bait__parser__Parser_check(p, bait__token__TokenKind.rbr)
		const elem_type = bait__parser__Parser_parse_type(p)
		return bait__ast__Table_find_or_register_array(p.table, elem_type)
	}
	if (eq(p.tok.kind, bait__token__TokenKind.key_fun)) {
		return bait__parser__Parser_parse_fun_type(p)
	}
	const lang = bait__parser__Parser_parse_lang(p)
	if (!eq(p.tok.pos.line, p.prev_tok.pos.line)) {
		return bait__ast__PLACEHOLDER_TYPE
	}
	let name = bait__parser__Parser_prepend_lang(p, lang, bait__parser__Parser_check_name(p))
	if (eq(name, from_js_string("map"))) {
		return bait__parser__Parser_parse_map_type(p)
	}
	if (eq(p.tok.kind, bait__token__TokenKind.dot)) {
		const pkg = map_get_set(p.import_aliases, name, from_js_string(""))
		bait__parser__Parser_next(p)
		name = string_add(string_add(pkg, from_js_string(".")), bait__parser__Parser_check_name(p))
	} else if (p.expr_pkg.length > 0) {
		name = bait__parser__Parser_prepend_expr_pkg(p, name)
	} else if (!string_contains(name, from_js_string(".")) && !map_contains(p.table.type_idxs, name)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	switch (name.str) {
		case from_js_string("i8").str:
			{
				return bait__ast__I8_TYPE
				break
			}
		case from_js_string("i16").str:
			{
				return bait__ast__I16_TYPE
				break
			}
		case from_js_string("i32").str:
			{
				return bait__ast__I32_TYPE
				break
			}
		case from_js_string("i64").str:
			{
				return bait__ast__I64_TYPE
				break
			}
		case from_js_string("u8").str:
			{
				return bait__ast__U8_TYPE
				break
			}
		case from_js_string("u16").str:
			{
				return bait__ast__U16_TYPE
				break
			}
		case from_js_string("u32").str:
			{
				return bait__ast__U32_TYPE
				break
			}
		case from_js_string("u64").str:
			{
				return bait__ast__U64_TYPE
				break
			}
		case from_js_string("f32").str:
			{
				return bait__ast__F32_TYPE
				break
			}
		case from_js_string("f64").str:
			{
				return bait__ast__F64_TYPE
				break
			}
		case from_js_string("bool").str:
			{
				return bait__ast__BOOL_TYPE
				break
			}
		case from_js_string("string").str:
			{
				return bait__ast__STRING_TYPE
				break
			}
		case from_js_string("any").str:
			{
				return bait__ast__ANY_TYPE
				break
			}
	}
	return bait__ast__Table_find_type_or_add_placeholder(p.table, name)
}

function bait__parser__Parser_parse_fun_type(p) {
	bait__parser__Parser_next(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	let param_types = new array({ data: [], length: 0 })
	while (!eq(p.tok.kind, bait__token__TokenKind.rpar)) {
		const typ = bait__parser__Parser_parse_type(p)
		array_push(param_types, typ)
		if (!eq(p.tok.kind, bait__token__TokenKind.rpar)) {
			bait__parser__Parser_check(p, bait__token__TokenKind.comma)
		}
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	let return_type = bait__ast__VOID_TYPE
	if (eq(p.tok.pos.line, p.prev_tok.pos.line)) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	return bait__ast__Table_find_or_register_fun(p.table, param_types, return_type)
}

function bait__parser__Parser_parse_map_type(p) {
	if (eq(p.tok.kind, bait__token__TokenKind.rpar) && eq(p.pkg_name, from_js_string("builtin"))) {
		return bait__ast__MAP_TYPE
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.lbr)
	const key_type = bait__parser__Parser_parse_type(p)
	if (!eq(key_type, bait__ast__STRING_TYPE)) {
		bait__parser__Parser_error(p, from_js_string("map key type must be string"))
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rbr)
	const val_type = bait__parser__Parser_parse_type(p)
	return bait__ast__Table_find_or_register_map(p.table, key_type, val_type)
}

function bait__parser__Parser_infer_expr_type(p, expr) {
	if (expr instanceof bait__ast__BoolLiteral) {
		return bait__ast__BOOL_TYPE
	} else if (expr instanceof bait__ast__CharLiteral) {
		return bait__ast__U8_TYPE
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		return bait__ast__I32_TYPE
	} else if (expr instanceof bait__ast__StringLiteral) {
		return bait__ast__STRING_TYPE
	} else if (expr instanceof bait__ast__StructInit) {
		return expr.typ
	} else if (expr instanceof bait__ast__MapInit) {
		return expr.typ
	}
	return bait__ast__VOID_TYPE
}


const bait__checker__AttrValue = {
	none: 0,
	optional: 1,
	required: 2,
}
const bait__checker__FUN_ATTRS = new map({ data: new Map([[from_js_string("deprecated").str, bait__checker__AttrValue.optional], [from_js_string("deprecated_after").str, bait__checker__AttrValue.required], [from_js_string("export").str, bait__checker__AttrValue.required], [from_js_string("overload").str, bait__checker__AttrValue.required]]), length: 4 })
const bait__checker__STRUCT_FIELD_ATTRS = new map({ data: new Map([[from_js_string("required").str, bait__checker__AttrValue.none]]), length: 1 })
function bait__checker__Checker_check_attribute(c, attr, known_list) {
	if (!map_contains(known_list, attr.name)) {
		bait__checker__Checker_warn(c, from_js_string(`unknown attribute "${attr.name.str}"`), attr.pos)
		return false
	}
	const val_req = map_get_set(known_list, attr.name, 0)
	if (eq(val_req, bait__checker__AttrValue.none) && attr.value.length > 0) {
		bait__checker__Checker_error(c, from_js_string(`attribute "${attr.name.str}" does not take a value`), attr.pos)
		return false
	}
	if (eq(val_req, bait__checker__AttrValue.required) && eq(attr.value.length, 0)) {
		bait__checker__Checker_error(c, from_js_string(`attribute "${attr.name.str}" requires a value`), attr.pos)
		return false
	}
	return true
}

function bait__checker__Checker_check_fun_attrs(c, node) {
	for (let _t10 = 0; _t10 < node.attrs.length; _t10++) {
		const attr = array_get(node.attrs, _t10)
		if (!bait__checker__Checker_check_attribute(c, attr, bait__checker__FUN_ATTRS)) {
			continue
		}
		if (eq(attr.name, from_js_string("overload"))) {
			bait__checker__Checker_attr_overload(c, node, attr)
		} else if (eq(attr.name, from_js_string("export"))) {
			bait__checker__Checker_attr_export(c, attr)
		}
	}
}

function bait__checker__Checker_attr_overload(c, node, attr) {
	if (!node.is_method) {
		bait__checker__Checker_warn(c, from_js_string("operator overloading can only be used on methods"), attr.pos)
		return
	}
	if (array_string_contains(new array({ data: [from_js_string("!="), from_js_string(">"), from_js_string("<="), from_js_string(">=")], length: 4 }), attr.value)) {
		bait__checker__Checker_error(c, from_js_string("cannot overload \"!=\", \">\", \"<=\" and \">=\" as they are generated from \"==\" and \"<\""), attr.pos)
		return
	}
	if (!array_string_contains(new array({ data: [from_js_string("+"), from_js_string("-"), from_js_string("*"), from_js_string("/"), from_js_string("%"), from_js_string("=="), from_js_string("<")], length: 7 }), attr.value)) {
		bait__checker__Checker_error(c, from_js_string(`cannot overload "${attr.value.str}"`), attr.pos)
		return
	}
	const rec_sym = bait__ast__Table_get_sym(c.table, array_get(node.params, 0).typ)
	if (map_contains(rec_sym.overloads, attr.value)) {
		bait__checker__Checker_error(c, from_js_string(`"${attr.value.str}" was overloaded twice for type "${rec_sym.name.str}"`), attr.pos)
		return
	}
	map_set(rec_sym.overloads, attr.value, node)
}

function bait__checker__Checker_attr_export(c, attr) {
	if (array_string_contains(c.export_names, attr.value)) {
		bait__checker__Checker_error(c, from_js_string(`@export name "${attr.value.str}" is already used`), attr.pos)
		return
	}
	array_push(c.export_names, attr.value)
}

function bait__checker__Checker_check_fun_attrs_on_call(c, call, def) {
	let is_deprecated = false
	let depr_attr = new bait__ast__Attribute({})
	let depr_date_attr = new bait__ast__Attribute({})
	for (let _t11 = 0; _t11 < def.attrs.length; _t11++) {
		const attr = array_get(def.attrs, _t11)
		if (eq(attr.name, from_js_string("deprecated_after"))) {
			depr_date_attr = attr
			is_deprecated = true
		}
		if (eq(attr.name, from_js_string("deprecated"))) {
			depr_attr = attr
			is_deprecated = true
		}
	}
	if (is_deprecated) {
		let depr_message = from_js_string(`function "${call.name.str}" `)
		if (depr_date_attr.name.length > 0) {
			depr_message = string_add(depr_message, from_js_string(`will be deprecated after ${depr_date_attr.value.str}`))
		} else {
			depr_message = string_add(depr_message, from_js_string("is deprecated"))
		}
		if (depr_attr.value.length > 0) {
			depr_message = string_add(depr_message, from_js_string(`; ${depr_attr.value.str}`))
		}
		bait__checker__Checker_info(c, depr_message, call.pos)
	}
}

function bait__checker__Checker_check_struct_field_attrs(c, node) {
	for (let _t12 = 0; _t12 < node.fields.length; _t12++) {
		const field = array_get(node.fields, _t12)
		for (let _t13 = 0; _t13 < field.attrs.length; _t13++) {
			const attr = array_get(field.attrs, _t13)
			if (!bait__checker__Checker_check_attribute(c, attr, bait__checker__STRUCT_FIELD_ATTRS)) {
				continue
			}
			if (eq(attr.name, from_js_string("required")) && !(field.expr instanceof bait__ast__EmptyExpr)) {
				bait__checker__Checker_error(c, from_js_string("@required on field with default value is redundant"), attr.pos)
			}
		}
	}
}


function bait__checker__Checker({ pref = new bait__preference__Prefs({}), table = new bait__ast__Table({}), scope = new bait__ast__Scope({}), path = from_js_string(""), pkg = from_js_string(""), has_main_pkg_files = false, has_main_fun = false, is_js_file = false, cur_fun = new bait__ast__FunDecl({}), expected_type = 0, is_lhs_assign = false, export_names = new array({ data: [], length: 0 }), infos = new array({ data: [], length: 0 }), warnings = new array({ data: [], length: 0 }), errors = new array({ data: [], length: 0 }) }) {
	this.pref = pref
	this.table = table
	this.scope = scope
	this.path = path
	this.pkg = pkg
	this.has_main_pkg_files = has_main_pkg_files
	this.has_main_fun = has_main_fun
	this.is_js_file = is_js_file
	this.cur_fun = cur_fun
	this.expected_type = expected_type
	this.is_lhs_assign = is_lhs_assign
	this.export_names = export_names
	this.infos = infos
	this.warnings = warnings
	this.errors = errors
}
bait__checker__Checker.prototype = {
	toString() {
		return `bait__checker__Checker{
    pref = ${this.pref.toString()}
    table = ${this.table.toString()}
    scope = ${this.scope.toString()}
    path = ${this.path.toString()}
    pkg = ${this.pkg.toString()}
    has_main_pkg_files = ${this.has_main_pkg_files.toString()}
    has_main_fun = ${this.has_main_fun.toString()}
    is_js_file = ${this.is_js_file.toString()}
    cur_fun = ${this.cur_fun.toString()}
    expected_type = ${this.expected_type.toString()}
    is_lhs_assign = ${this.is_lhs_assign.toString()}
    export_names = ${this.export_names.toString()}
    infos = ${this.infos.toString()}
    warnings = ${this.warnings.toString()}
    errors = ${this.errors.toString()}
}`}
}
function bait__checker__new_checker(table, pref) {
	return new bait__checker__Checker({ pref: pref, table: table })
}

function bait__checker__Checker_check_files(c, files) {
	for (let _t14 = 0; _t14 < files.length; _t14++) {
		const f = array_get(files, _t14)
		bait__checker__Checker_check(c, f)
		f.infos = c.infos
		f.warnings = c.warnings
		f.errors = c.errors
		c.infos = new array({ data: [], length: 0 })
		c.warnings = new array({ data: [], length: 0 })
		c.errors = new array({ data: [], length: 0 })
	}
	if (c.pref.is_library || c.pref.is_test || c.pref.is_script) {
		return
	}
	if (!c.has_main_pkg_files) {
		bait__checker__Checker_generic_error(c, from_js_string("project must have a main package or be compiled as a library"))
	} else if (!c.has_main_fun) {
		bait__checker__Checker_generic_error(c, from_js_string("main package has no main function"))
	}
}

function bait__checker__Checker_check(c, file) {
	c.path = file.path
	c.is_js_file = string_contains(c.path, from_js_string(".js."))
	c.pkg = file.pkg_decl.full_name
	c.scope = new bait__ast__Scope({ parent: c.table.global_scope })
	if (eq(c.pkg, from_js_string("main"))) {
		c.has_main_pkg_files = true
		bait__checker__Checker_check_main_fun(c, file.stmts)
	}
	bait__checker__Checker_check_imports(c, file.imports)
	bait__checker__Checker_stmts(c, file.stmts)
}

function bait__checker__Checker_check_imports(c, imports) {
	for (let _t15 = 0; _t15 < imports.length; _t15++) {
		const imp = array_get(imports, _t15)
		bait__ast__Scope_register(c.scope, imp.alias, new bait__ast__ScopeObject({ kind: bait__ast__ObjectKind.package_ }))
		if (!c.is_js_file && eq(imp.lang, bait__ast__Language.js)) {
			bait__checker__Checker_warn(c, from_js_string("JS imports have to be in .js.bt files"), imp.pos)
		}
	}
}

function bait__checker__Checker_open_scope(c) {
	c.scope = new bait__ast__Scope({ parent: c.scope })
}

function bait__checker__Checker_close_scope(c) {
	c.scope = c.scope.parent
}

function bait__checker__Checker_info(c, msg, pos) {
	array_push(c.infos, new bait__errors__Message({ kind: bait__errors__Kind.info, path: c.path, pos: pos, title: from_js_string("note"), msg: msg }))
}

function bait__checker__Checker_warn(c, msg, pos) {
	array_push(c.warnings, new bait__errors__Message({ kind: bait__errors__Kind.warning, path: c.path, pos: pos, title: from_js_string("warning"), msg: msg }))
}

function bait__checker__Checker_error(c, msg, pos) {
	array_push(c.errors, new bait__errors__Message({ kind: bait__errors__Kind.error, path: c.path, pos: pos, title: from_js_string("error"), msg: msg }))
}

function bait__checker__Checker_generic_error(c, msg) {
	array_push(c.errors, new bait__errors__Message({ kind: bait__errors__Kind.error, msg: msg }))
}


function bait__checker__Checker_expr(c, expr) {
	if (expr instanceof bait__ast__AnonFun) {
		return bait__checker__Checker_anon_fun(c, expr)
	} else if (expr instanceof bait__ast__ArrayInit) {
		return bait__checker__Checker_array_init(c, expr)
	} else if (expr instanceof bait__ast__AsCast) {
		return bait__checker__Checker_as_cast(c, expr)
	} else if (expr instanceof bait__ast__BoolLiteral) {
		return bait__ast__BOOL_TYPE
	} else if (expr instanceof bait__ast__CallExpr) {
		return bait__checker__Checker_call_expr(c, expr)
	} else if (expr instanceof bait__ast__CharLiteral) {
		return bait__ast__U8_TYPE
	} else if (expr instanceof bait__ast__CompTimeVar) {
		return bait__checker__Checker_comp_time_var(c, expr)
	} else if (expr instanceof bait__ast__EnumVal) {
		return bait__checker__Checker_enum_val(c, expr)
	} else if (expr instanceof bait__ast__HashExpr) {
		return bait__checker__Checker_hash_expr(c, expr)
	} else if (expr instanceof bait__ast__Ident) {
		return bait__checker__Checker_ident(c, expr)
	} else if (expr instanceof bait__ast__IfExpr) {
		return bait__checker__Checker_if_expr(c, expr)
	} else if (expr instanceof bait__ast__IndexExpr) {
		return bait__checker__Checker_index_expr(c, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		return bait__checker__Checker_infix_expr(c, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		return bait__ast__I32_TYPE
	} else if (expr instanceof bait__ast__MapInit) {
		return bait__checker__Checker_map_init(c, expr)
	} else if (expr instanceof bait__ast__MatchExpr) {
		return bait__checker__Checker_match_expr(c, expr)
	} else if (expr instanceof bait__ast__ParExpr) {
		return bait__checker__Checker_par_expr(c, expr)
	} else if (expr instanceof bait__ast__PrefixExpr) {
		return bait__checker__Checker_prefix_expr(c, expr)
	} else if (expr instanceof bait__ast__SelectorExpr) {
		return bait__checker__Checker_selector_expr(c, expr)
	} else if (expr instanceof bait__ast__StringLiteral) {
		return bait__checker__Checker_string_literal(c, expr)
	} else if (expr instanceof bait__ast__StringInterLiteral) {
		return bait__checker__Checker_string_inter_literal(c, expr)
	} else if (expr instanceof bait__ast__StructInit) {
		return bait__checker__Checker_struct_init(c, expr)
	} else if (expr instanceof bait__ast__TypeOf) {
		return bait__checker__Checker_type_of(c, expr)
	} else {
		bait__checker__Checker_error(c, from_js_string(`unexpected expr: ${expr.toString()}`), expr.pos)
	}
}

function bait__checker__Checker_anon_fun(c, node) {
	const root_fun_decl = c.cur_fun
	c.cur_fun = node.decl
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_fun_params(c, node.decl.params)
	bait__checker__Checker_stmts(c, node.decl.stmts)
	bait__checker__Checker_close_scope(c)
	c.cur_fun = root_fun_decl
	return node.typ
}

function bait__checker__Checker_array_init(c, node) {
	if (eq(node.exprs.length, 0)) {
		if (eq(node.elem_type, bait__ast__PLACEHOLDER_TYPE)) {
			node.typ = c.expected_type
			return node.typ
		}
		if (!(node.length_expr instanceof bait__ast__EmptyExpr)) {
			const typ = bait__checker__Checker_expr(c, node.length_expr)
			if (!bait__checker__Checker_check_types(c, typ, bait__ast__I32_TYPE)) {
				bait__checker__Checker_error(c, from_js_string(`expected i32, got ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
			}
		}
		return node.typ
	}
	for (let i = 0; i < node.exprs.length; i++) {
		const e = array_get(node.exprs, i)
		const typ = bait__checker__Checker_expr(c, e)
		if (eq(i, 0)) {
			node.elem_type = typ
			c.expected_type = typ
		}
		if (!bait__checker__Checker_check_types(c, typ, node.elem_type)) {
			bait__checker__Checker_error(c, from_js_string(`expected element type ${bait__ast__Table_type_name(c.table, node.elem_type).str}, got ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
		}
	}
	node.typ = bait__ast__Table_find_or_register_array(c.table, node.elem_type)
	return node.typ
}

function bait__checker__Checker_as_cast(c, node) {
	const expr_type = bait__checker__Checker_expr(c, node.expr)
	node.expr_type = expr_type
	const expr_sym = bait__ast__Table_get_sym(c.table, expr_type)
	const target_sym = bait__ast__Table_get_sym(c.table, node.target)
	if (!bait__checker__Checker_does_type_exist(c, target_sym, node.pos)) {
		return expr_type
	}
	if (eq(expr_sym.kind, bait__ast__TypeKind.sum_type) && node.expr instanceof bait__ast__Ident) {
		const expr = node.expr
		bait__ast__Scope_update_type(c.scope, expr.name, node.target)
	}
	return node.target
}

const bait__checker__SUPPORTED_COMPTIME_VARS = new array({ data: [from_js_string("PKG"), from_js_string("FILE"), from_js_string("ABS_FILE"), from_js_string("LINE"), from_js_string("FILE_LINE"), from_js_string("FUN"), from_js_string("BAITEXE"), from_js_string("BAITDIR"), from_js_string("BAITHASH")], length: 9 })
function bait__checker__Checker_comp_time_var(c, node) {
	if (!array_string_contains(bait__checker__SUPPORTED_COMPTIME_VARS, node.name)) {
		bait__checker__Checker_error(c, from_js_string(`unsupported comptime var "${node.name.str}"`), node.pos)
	}
	return bait__ast__STRING_TYPE
}

function bait__checker__Checker_enum_val(c, node) {
	if (eq(node.name.length, 0)) {
		node.typ = c.expected_type
	} else {
		node.typ = bait__ast__Table_get_idx(c.table, node.name)
	}
	const sym = bait__ast__Table_get_sym(c.table, node.typ)
	if (eq(sym.kind, bait__ast__TypeKind.placeholder)) {
		bait__checker__Checker_error(c, from_js_string(`undefined enum ${node.name.str}`), node.pos)
		return bait__ast__VOID_TYPE
	}
	if (!eq(sym.kind, bait__ast__TypeKind.enum_)) {
		bait__checker__Checker_error(c, from_js_string(`expected type is not an enum, got ${sym.name.str}`), node.pos)
		return bait__ast__VOID_TYPE
	}
	if (!sym.is_pub && string_contains(sym.name, from_js_string(".")) && !eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`enum ${sym.name.str} is private`), node.pos)
		return bait__ast__VOID_TYPE
	}
	const info = sym.info
	if (!array_string_contains(info.vals, node.val)) {
		bait__checker__Checker_error(c, from_js_string(`enum ${sym.name.str} has no value ${node.val.str}`), node.pos)
		return bait__ast__VOID_TYPE
	}
	node.name = sym.name
	return node.typ
}

function bait__checker__Checker_hash_expr(c, node) {
	if (!c.is_js_file) {
		bait__checker__Checker_warn(c, from_js_string("JS code can only be used in .js.bt files"), node.pos)
	}
	return bait__ast__VOID_TYPE
}

function bait__checker__Checker_ident(c, node) {
	let obj = bait__ast__Scope_get(c.scope, node.name)
	if (eq(obj.kind, bait__ast__ObjectKind.constant) && !obj.is_pub && !eq(obj.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`const ${node.name.str} is private`), node.pos)
	}
	if (!eq(obj.typ, bait__ast__PLACEHOLDER_TYPE)) {
		return obj.typ
	}
	if (!string_contains(node.name, from_js_string(".")) && !eq(node.pkg, from_js_string("builtin")) && !eq(node.pkg, from_js_string("main"))) {
		node.name = string_add(string_add(node.pkg, from_js_string(".")), node.name)
	}
	obj = bait__ast__Scope_get(c.table.global_scope, node.name)
	if (eq(obj.typ, bait__ast__PLACEHOLDER_TYPE)) {
		bait__checker__Checker_error(c, from_js_string(`undefined variable ${node.name.str}`), node.pos)
	}
	if (eq(obj.typ, bait__ast__VOID_TYPE)) {
		obj.typ = bait__checker__Checker_expr(c, obj.expr)
	}
	return obj.typ
}

function bait__checker__Checker_if_expr(c, node) {
	for (let i = 0; i < node.branches.length; i++) {
		const b = array_get(node.branches, i)
		if (!node.has_else || i < node.branches.length - 1) {
			bait__checker__Checker_expr(c, b.cond)
		}
		bait__checker__Checker_open_scope(c)
		bait__checker__Checker_stmts(c, b.stmts)
		bait__checker__Checker_close_scope(c)
	}
	return bait__ast__VOID_TYPE
}

function bait__checker__Checker_index_expr(c, node) {
	node.left_type = bait__checker__Checker_expr(c, node.left)
	bait__checker__Checker_expr(c, node.index)
	const sym = bait__ast__Table_get_sym(c.table, node.left_type)
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		const info = sym.info
		return info.elem_type
	}
	if (eq(sym.kind, bait__ast__TypeKind.map)) {
		const info = sym.info
		return info.val_type
	}
	if (eq(sym.kind, bait__ast__TypeKind.string)) {
		if (c.is_lhs_assign) {
			bait__checker__Checker_error(c, from_js_string("cannot assign to string index"), node.pos)
			return bait__ast__VOID_TYPE
		}
		return bait__ast__U8_TYPE
	}
	return node.left_type
}

function bait__checker__Checker_map_init(c, node) {
	if (eq(node.keys.length, 0)) {
		const sym = bait__ast__Table_get_sym(c.table, node.typ)
		const info = sym.info
		node.key_type = info.key_type
		node.val_type = info.val_type
		return node.typ
	}
	for (let i = 0; i < node.keys.length; i++) {
		const key = array_get(node.keys, i)
		const key_type = bait__checker__Checker_expr(c, key)
		if (i >= 1) {
			c.expected_type = node.val_type
		}
		const val_type = bait__checker__Checker_expr(c, array_get(node.vals, i))
		if (eq(i, 0)) {
			node.key_type = key_type
			node.val_type = val_type
		} else {
			if (!bait__checker__Checker_check_types(c, key_type, node.key_type)) {
				const key_expr = key
				bait__checker__Checker_error(c, from_js_string(`expected key type ${bait__ast__Table_type_name(c.table, node.key_type).str}, got ${bait__ast__Table_type_name(c.table, key_type).str}`), key_expr.pos)
			}
			if (!bait__checker__Checker_check_types(c, val_type, node.val_type)) {
				const val_expr = array_get(node.vals, i)
				bait__checker__Checker_error(c, from_js_string(`expected value type ${bait__ast__Table_type_name(c.table, node.val_type).str}, got ${bait__ast__Table_type_name(c.table, val_type).str}`), val_expr.pos)
			}
		}
	}
	node.typ = bait__ast__Table_find_or_register_map(c.table, node.key_type, node.val_type)
	return node.typ
}

function bait__checker__Checker_match_expr(c, node) {
	node.cond_type = bait__checker__Checker_expr(c, node.cond)
	if (eq(node.branches.length, 0)) {
		bait__checker__Checker_error(c, from_js_string("match expression must have at least one branch"), node.pos)
		return bait__ast__VOID_TYPE
	}
	const sym = bait__ast__Table_get_sym(c.table, node.cond_type)
	node.is_sumtype = eq(sym.kind, bait__ast__TypeKind.sum_type)
	for (let _t16 = 0; _t16 < node.branches.length; _t16++) {
		const branch = array_get(node.branches, _t16)
		bait__checker__Checker_open_scope(c)
		for (let _t17 = 0; _t17 < branch.exprs.length; _t17++) {
			const e = array_get(branch.exprs, _t17)
			if (node.is_sumtype) {
				const expr = e
				const variant = bait__ast__Table_get_idx(c.table, expr.name)
				const info = sym.info
				if (!array_contains(info.variants, variant)) {
					bait__checker__Checker_error(c, from_js_string(`sum type ${sym.name.str} has no variant ${expr.name.str}`), expr.pos)
					continue
				}
				const cond = node.cond
				bait__ast__Scope_update_type(c.scope, cond.name, variant)
			} else {
				c.expected_type = node.cond_type
				const expr_type = bait__checker__Checker_expr(c, e)
				if (!bait__checker__Checker_check_types(c, expr_type, node.cond_type)) {
					const expr = e
					bait__checker__Checker_error(c, from_js_string(`cannot match ${bait__ast__Table_type_name(c.table, expr_type).str} to ${sym.name.str}`), expr.pos)
				}
				array_push(branch.expr_types, expr_type)
			}
		}
		bait__checker__Checker_stmts(c, branch.stmts)
		bait__checker__Checker_close_scope(c)
	}
	return bait__ast__VOID_TYPE
}

function bait__checker__Checker_par_expr(c, node) {
	return bait__checker__Checker_expr(c, node.expr)
}

function bait__checker__Checker_prefix_expr(c, node) {
	const typ = bait__checker__Checker_expr(c, node.right)
	return typ
}

function bait__checker__Checker_selector_expr(c, node) {
	if (node.expr instanceof bait__ast__IndexExpr) {
		const expr = node.expr
		expr.is_selector = true
	}
	const typ = bait__checker__Checker_expr(c, node.expr)
	const sym = bait__ast__Table_get_sym(c.table, typ)
	if (array_contains(new array({ data: [bait__ast__TypeKind.struct_, bait__ast__TypeKind.array, bait__ast__TypeKind.string, bait__ast__TypeKind.map], length: 4 }), sym.kind)) {
		const field = bait__ast__TypeSymbol_find_field(sym, node.field_name, c.table)
		if (eq(field.name.length, 0)) {
			bait__checker__Checker_error(c, from_js_string(`${sym.name.str} has no field ${node.field_name.str}`), node.pos)
			return bait__ast__VOID_TYPE
		}
		return field.typ
	}
	if (eq(sym.kind, bait__ast__TypeKind.sum_type)) {
		bait__checker__Checker_error(c, from_js_string(`cast to the variant before accessing field of sumtype ${sym.name.str}`), node.pos)
		return bait__ast__VOID_TYPE
	}
	return bait__ast__ANY_TYPE
}

function bait__checker__Checker_string_literal(c, node) {
	return bait__ast__STRING_TYPE
}

function bait__checker__Checker_string_inter_literal(c, node) {
	for (let _t18 = 0; _t18 < node.exprs.length; _t18++) {
		const e = array_get(node.exprs, _t18)
		const typ = bait__checker__Checker_expr(c, e)
		array_push(node.expr_types, typ)
	}
	return bait__ast__STRING_TYPE
}

function bait__checker__Checker_type_of(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	node.typ = typ
	return bait__ast__STRING_TYPE
}


function bait__checker__Checker_fun_decl(c, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	c.cur_fun = node
	bait__checker__Checker_check_fun_attrs(c, node)
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_fun_params(c, node.params)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_fun_params(c, params) {
	for (let _t19 = 0; _t19 < params.length; _t19++) {
		const p = array_get(params, _t19)
		if (bait__ast__Scope_is_known(c.scope, p.name)) {
			bait__checker__Checker_error(c, from_js_string(`cannot shadow import "${p.name.str}"`), p.pos)
			continue
		}
		const sym = bait__ast__Table_get_sym(c.table, p.typ)
		if (eq(sym.kind, bait__ast__TypeKind.fun_)) {
			bait__ast__Scope_register(c.scope, p.name, new bait__ast__ScopeObject({ typ: p.typ, kind: bait__ast__ObjectKind.function }))
		} else {
			bait__ast__Scope_register(c.scope, p.name, new bait__ast__ScopeObject({ typ: p.typ }))
		}
	}
}

function bait__checker__Checker_check_main_fun(c, stmts) {
	for (let _t20 = 0; _t20 < stmts.length; _t20++) {
		const stmt = array_get(stmts, _t20)
		if (stmt instanceof bait__ast__FunDecl && eq(stmt.name, from_js_string("main"))) {
			c.has_main_fun = true
		}
	}
}

function bait__checker__Checker_call_expr(c, node) {
	if (node.is_method) {
		return bait__checker__Checker_method_call(c, node)
	}
	return bait__checker__Checker_fun_call(c, node)
}

function bait__checker__Checker_fun_call(c, node) {
	let found = map_contains(c.table.fun_decls, node.name)
	if (!found && !string_contains(node.name, from_js_string(".")) && !eq(node.pkg, from_js_string("builtin"))) {
		const full_name = string_add(string_add(node.pkg, from_js_string(".")), node.name)
		if (map_contains(c.table.fun_decls, full_name)) {
			node.name = full_name
			found = true
		}
	}
	if (!found) {
		const obj = bait__ast__Scope_get(c.scope, node.name)
		if (eq(obj.kind, bait__ast__ObjectKind.function)) {
			found = true
		}
	}
	if (!found) {
		bait__checker__Checker_error(c, from_js_string(`unknown function ${node.name.str}`), node.pos)
		return bait__ast__VOID_TYPE
	}
	const def = map_get_set(c.table.fun_decls, node.name, new bait__ast__FunDecl({}))
	if (!def.is_pub && !eq(def.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`function ${def.name.str} is private`), node.pos)
	}
	node.return_type = def.return_type
	bait__checker__Checker_check_fun_attrs_on_call(c, node, def)
	if (!eq(node.args.length, def.params.length)) {
		bait__checker__Checker_error(c, from_js_string(`expected ${i32_str(def.params.length).str} arguments but got ${i32_str(node.args.length).str}`), node.pos)
		return node.return_type
	}
	if (eq(node.name, from_js_string("println")) || eq(node.name, from_js_string("eprintln"))) {
		for (let _t21 = 0; _t21 < node.args.length; _t21++) {
			const arg = array_get(node.args, _t21)
			arg.typ = bait__checker__Checker_expr(c, arg.expr)
		}
		return bait__ast__VOID_TYPE
	}
	for (let i = 0; i < node.args.length; i++) {
		const arg = array_get(node.args, i)
		const param_type = array_get(def.params, i).typ
		c.expected_type = param_type
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (eq(arg.typ, bait__ast__VOID_TYPE) && !(arg.expr instanceof bait__ast__CallExpr)) {
			continue
		}
		if (!bait__checker__Checker_check_types(c, arg.typ, param_type)) {
			bait__checker__Checker_error(c, from_js_string(`type ${bait__ast__Table_type_name(c.table, arg.typ).str} not matches ${bait__ast__Table_type_name(c.table, param_type).str} in argument ${i32_str(i + 1).str}`), node.pos)
		}
	}
	return node.return_type
}

function bait__checker__Checker_method_call(c, node) {
	const left_expr_type = bait__checker__Checker_expr(c, node.left)
	const left_sym = bait__ast__Table_get_sym(c.table, left_expr_type)
	const def = bait__ast__Table_get_method(c.table, left_sym, node.name)
	if (eq(def.name.length, 0)) {
		bait__checker__Checker_error(c, from_js_string(`method ${node.name.str} not found on type ${left_sym.name.str}`), node.pos)
		return bait__ast__VOID_TYPE
	}
	if (!def.is_pub && !eq(left_sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`method ${def.name.str} is private`), node.pos)
	}
	node.lang = def.lang
	node.left_type = array_get(def.params, 0).typ
	node.return_type = def.return_type
	bait__checker__Checker_check_fun_attrs_on_call(c, node, def)
	if (!eq(node.args.length + 1, def.params.length)) {
		bait__checker__Checker_error(c, from_js_string(`expected ${i32_str(def.params.length - 1).str} arguments but got ${i32_str(node.args.length).str}`), node.pos)
		return node.return_type
	}
	if (eq(left_sym.kind, bait__ast__TypeKind.array) && array_string_contains(new array({ data: [from_js_string("push"), from_js_string("index"), from_js_string("last_index"), from_js_string("contains")], length: 4 }), node.name)) {
		const arg = array_get(node.args, 0)
		const info = left_sym.info
		c.expected_type = info.elem_type
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (!bait__checker__Checker_check_types(c, arg.typ, info.elem_type)) {
			bait__checker__Checker_error(c, from_js_string(`type ${bait__ast__Table_type_name(c.table, arg.typ).str} not matches ${bait__ast__Table_type_name(c.table, info.elem_type).str} in argument 1`), node.pos)
		}
		return node.return_type
	}
	if (eq(left_sym.kind, bait__ast__TypeKind.array) && array_string_contains(new array({ data: [from_js_string("concat"), from_js_string("push_many")], length: 2 }), node.name)) {
		const arg = array_get(node.args, 0)
		c.expected_type = left_expr_type
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (!bait__checker__Checker_check_types(c, arg.typ, left_expr_type)) {
			bait__checker__Checker_error(c, from_js_string(`type ${bait__ast__Table_type_name(c.table, arg.typ).str} not matches ${bait__ast__Table_type_name(c.table, left_expr_type).str} in argument 1`), node.pos)
		}
		return node.return_type
	}
	for (let i = 0; i < node.args.length; i++) {
		const arg = array_get(node.args, i)
		const param_type = array_get(def.params, i + 1).typ
		c.expected_type = param_type
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (!bait__checker__Checker_check_types(c, arg.typ, param_type)) {
			bait__checker__Checker_error(c, from_js_string(`type ${bait__ast__Table_type_name(c.table, arg.typ).str} not matches ${bait__ast__Table_type_name(c.table, param_type).str} in argument ${i32_str(i + 1).str}`), node.pos)
		}
	}
	if (eq(left_sym.kind, bait__ast__TypeKind.array) && array_string_contains(new array({ data: [from_js_string("filter"), from_js_string("reverse"), from_js_string("slice"), from_js_string("copy"), from_js_string("from_js_arr")], length: 5 }), node.name)) {
		return left_expr_type
	}
	return node.return_type
}


function bait__checker__Checker_infix_expr(c, node) {
	node.left_type = bait__checker__Checker_expr(c, node.left)
	if (eq(node.op, bait__token__TokenKind.key_is)) {
		return bait__checker__Checker_is_sumtype_variant_infix(c, node)
	}
	c.expected_type = node.left_type
	node.right_type = bait__checker__Checker_expr(c, node.right)
	if (!bait__checker__Checker_check_types(c, node.right_type, node.left_type)) {
		bait__checker__Checker_error(c, from_js_string(`infix expr: types ${bait__ast__Table_type_name(c.table, node.left_type).str} and ${bait__ast__Table_type_name(c.table, node.right_type).str} do not match`), node.pos)
	}
	if (bait__token__TokenKind_is_compare(node.op)) {
		return bait__ast__BOOL_TYPE
	}
	return node.left_type
}

function bait__checker__Checker_is_sumtype_variant_infix(c, node) {
	if (node.left instanceof bait__ast__Ident) {
		let right = node.right
		if (!string_contains(right.name, from_js_string("."))) {
			right.name = string_add(string_add(right.pkg, from_js_string(".")), right.name)
		}
		node.right_type = bait__ast__Table_get_idx(c.table, right.name)
		const left = node.left
		bait__ast__Scope_update_type(c.scope, left.name, node.right_type)
	} else if (node.left instanceof bait__ast__SelectorExpr) {
		let right = node.right
		if (!string_contains(right.name, from_js_string("."))) {
			right.name = string_add(string_add(right.pkg, from_js_string(".")), right.name)
		}
		node.right_type = bait__ast__Table_get_idx(c.table, right.name)
		const left = node.left
		const name = string_add(string_add((left.expr).name, from_js_string(".")), left.field_name)
		bait__ast__Scope_update_type(c.scope, name, node.right_type)
	}
	return bait__ast__BOOL_TYPE
}


function bait__checker__Checker_stmts(c, stmts) {
	for (let _t22 = 0; _t22 < stmts.length; _t22++) {
		const stmt = array_get(stmts, _t22)
		bait__checker__Checker_stmt(c, stmt)
	}
}

function bait__checker__Checker_stmt(c, stmt) {
	if (stmt instanceof bait__ast__AssertStmt) {
		bait__checker__Checker_assert_stmt(c, stmt)
	} else if (stmt instanceof bait__ast__AssignStmt) {
		bait__checker__Checker_assign_stmt(c, stmt)
	} else if (stmt instanceof bait__ast__ConstDecl) {
		bait__checker__Checker_const_decl(c, stmt)
	} else if (stmt instanceof bait__ast__ExprStmt) {
		bait__checker__Checker_expr_stmt(c, stmt)
	} else if (stmt instanceof bait__ast__EnumDecl) {
		bait__checker__Checker_enum_decl(c, stmt)
	} else if (stmt instanceof bait__ast__ForLoop) {
		bait__checker__Checker_for_loop(c, stmt)
	} else if (stmt instanceof bait__ast__ForClassicLoop) {
		bait__checker__Checker_for_classic_loop(c, stmt)
	} else if (stmt instanceof bait__ast__ForInLoop) {
		bait__checker__Checker_for_in_loop(c, stmt)
	} else if (stmt instanceof bait__ast__FunDecl) {
		bait__checker__Checker_fun_decl(c, stmt)
	} else if (stmt instanceof bait__ast__GlobalDecl) {
		bait__checker__Checker_global_decl(c, stmt)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
		bait__checker__Checker_interface_decl(c, stmt)
	} else if (stmt instanceof bait__ast__LoopControlStmt) {
		bait__checker__Checker_control_stmt(c, stmt)
	} else if (stmt instanceof bait__ast__ReturnStmt) {
		bait__checker__Checker_return_stmt(c, stmt)
	} else if (stmt instanceof bait__ast__StructDecl) {
		bait__checker__Checker_struct_decl(c, stmt)
	} else if (stmt instanceof bait__ast__TypeDecl) {
		bait__checker__Checker_type_decl(c, stmt)
	} else {
		bait__checker__Checker_error(c, from_js_string(`unexpected stmt: ${stmt.toString()}`), stmt.pos)
	}
	c.expected_type = bait__ast__VOID_TYPE
}

function bait__checker__Checker_assert_stmt(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	if (!bait__checker__Checker_check_types(c, typ, bait__ast__BOOL_TYPE)) {
		bait__checker__Checker_error(c, from_js_string("assert must be of type bool"), node.pos)
	}
}

function bait__checker__Checker_assign_stmt(c, node) {
	if (eq(node.op, bait__token__TokenKind.decl_assign)) {
		const typ = bait__checker__Checker_expr(c, node.right)
		const left = node.left
		if (bait__ast__Scope_is_known(c.scope, left.name)) {
			bait__checker__Checker_error(c, from_js_string(`redefinition of ${left.name.str}`), node.pos)
			return
		}
		bait__ast__Scope_register(c.scope, left.name, new bait__ast__ScopeObject({ kind: bait__ast__ObjectKind.variable, typ: typ }))
		bait__checker__Checker_expr(c, node.left)
		return
	}
	c.is_lhs_assign = true
	node.left_type = bait__checker__Checker_expr(c, node.left)
	c.is_lhs_assign = false
	c.expected_type = node.left_type
	node.right_type = bait__checker__Checker_expr(c, node.right)
	if (eq(node.right_type, bait__ast__VOID_TYPE) && !(node.right instanceof bait__ast__CallExpr)) {
		return
	}
	if (!bait__checker__Checker_check_types(c, node.right_type, node.left_type)) {
		bait__checker__Checker_error(c, from_js_string(`cannot assign type ${bait__ast__Table_type_name(c.table, node.right_type).str} to ${bait__ast__Table_type_name(c.table, node.left_type).str}`), node.pos)
	}
}

function bait__checker__Checker_const_decl(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	bait__ast__Scope_update_type(c.table.global_scope, node.name, typ)
}

function bait__checker__Checker_expr_stmt(c, node) {
	const expr = node.expr
	bait__checker__Checker_expr(c, expr)
	if (expr instanceof bait__ast__CallExpr || expr instanceof bait__ast__IfExpr || expr instanceof bait__ast__MatchExpr || expr instanceof bait__ast__HashExpr) {
		return
	}
	bait__checker__Checker_error(c, from_js_string("expression evaluated but not used"), expr.pos)
}

function bait__checker__Checker_enum_decl(c, node) {
	if (eq(node.fields.length, 0)) {
		bait__checker__Checker_error(c, from_js_string("enum cannot be empty"), node.pos)
		return
	}
	let cur_val = 0
	for (let i = 0; i < node.fields.length; i++) {
		const field = array_get(node.fields, i)
		let should_continue = false
		for (let j = 0; j < i; j += 1) {
			if (eq(field.name, array_get(node.fields, j).name)) {
				bait__checker__Checker_error(c, from_js_string(`duplicate field name ${field.name.str}`), field.pos)
				should_continue = true
				break
			}
		}
		if (should_continue) {
			continue
		}
		if (field.expr instanceof bait__ast__EmptyExpr) {
			field.expr = new bait__ast__IntegerLiteral({ val: from_js_string(`${i32_str(cur_val).str}`) })
			cur_val += 1
			continue
		}
		if (!(field.expr instanceof bait__ast__IntegerLiteral)) {
			bait__checker__Checker_error(c, from_js_string("enum field value must be an integer"), field.pos)
			continue
		}
		const val = string_toI32((field.expr).val)
		if (val < cur_val) {
			bait__checker__Checker_error(c, from_js_string("enum field value must be greater than previous field"), field.pos)
			continue
		}
		cur_val = val + 1
	}
}

function bait__checker__Checker_for_loop(c, node) {
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_expr(c, node.cond)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_for_classic_loop(c, node) {
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_stmt(c, node.init)
	bait__checker__Checker_expr(c, node.cond)
	bait__checker__Checker_stmt(c, node.inc)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_for_in_loop(c, node) {
	bait__checker__Checker_open_scope(c)
	node.expr_type = bait__checker__Checker_expr(c, node.expr)
	const sym = bait__ast__Table_get_sym(c.table, node.expr_type)
	let idx_type = bait__ast__PLACEHOLDER_TYPE
	let val_type = bait__ast__PLACEHOLDER_TYPE
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		idx_type = bait__ast__I32_TYPE
		val_type = (sym.info).elem_type
	} else if (eq(sym.kind, bait__ast__TypeKind.map)) {
		const info = sym.info
		idx_type = info.key_type
		val_type = info.val_type
	} else if (eq(sym.kind, bait__ast__TypeKind.string)) {
		idx_type = bait__ast__I32_TYPE
		val_type = bait__ast__U8_TYPE
	} else {
		bait__checker__Checker_error(c, from_js_string(`cannot iterate over ${sym.name.str}`), node.pos)
	}
	if (node.idxvar.length > 0) {
		bait__ast__Scope_register(c.scope, node.idxvar, new bait__ast__ScopeObject({ typ: idx_type }))
	}
	bait__ast__Scope_register(c.scope, node.valvar, new bait__ast__ScopeObject({ typ: val_type }))
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_global_decl(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	bait__ast__Scope_update_type(c.table.global_scope, node.name, typ)
}

function bait__checker__Checker_interface_decl(c, node) {
}

function bait__checker__Checker_control_stmt(c, node) {
}

function bait__checker__Checker_return_stmt(c, node) {
	if (node.expr instanceof bait__ast__EmptyExpr) {
		if (!eq(c.cur_fun.return_type, bait__ast__VOID_TYPE)) {
			bait__checker__Checker_error(c, from_js_string(`expected return value of type ${bait__ast__Table_type_name(c.table, c.cur_fun.return_type).str}`), node.pos)
		}
	} else {
		if (eq(c.cur_fun.return_type, bait__ast__VOID_TYPE)) {
			bait__checker__Checker_error(c, from_js_string(`function ${c.cur_fun.name.str} does not return a value`), node.pos)
		}
		c.expected_type = c.cur_fun.return_type
		const expr_type = bait__checker__Checker_expr(c, node.expr)
		if (!bait__checker__Checker_check_types(c, expr_type, c.cur_fun.return_type)) {
			bait__checker__Checker_error(c, from_js_string(`expected return value of type ${bait__ast__Table_type_name(c.table, c.cur_fun.return_type).str}, got ${bait__ast__Table_type_name(c.table, expr_type).str}`), node.pos)
		}
	}
}

function bait__checker__Checker_type_decl(c, node) {
}


function bait__checker__Checker_struct_decl(c, node) {
	for (let i = 0; i < node.fields.length; i++) {
		const field = array_get(node.fields, i)
		let should_continue = false
		for (let j = 0; j < i; j += 1) {
			if (eq(field.name, array_get(node.fields, j).name)) {
				bait__checker__Checker_error(c, from_js_string(`duplicate field name ${field.name.str}`), field.pos)
				should_continue = true
				break
			}
		}
		if (should_continue) {
			continue
		}
		bait__checker__Checker_check_struct_field_attrs(c, node)
		const sym = bait__ast__Table_get_sym(c.table, field.typ)
		if (!bait__checker__Checker_does_type_exist(c, sym, field.pos)) {
			continue
		}
		if (field.expr instanceof bait__ast__EmptyExpr) {
			continue
		}
		const typ = bait__checker__Checker_expr(c, field.expr)
		if (!bait__checker__Checker_check_types(c, typ, field.typ)) {
			bait__checker__Checker_error(c, from_js_string(`default value not matches field type ${bait__ast__Table_type_name(c.table, field.typ).str}`), (field.expr).pos)
		}
	}
}

function bait__checker__Checker_struct_init(c, node) {
	const sym = bait__ast__Table_get_sym(c.table, node.typ)
	if (eq(sym.kind, bait__ast__TypeKind.placeholder)) {
		bait__checker__Checker_error(c, from_js_string(`undefined struct ${node.name.str}`), node.pos)
		return bait__ast__VOID_TYPE
	}
	if (!sym.is_pub && string_contains(sym.name, from_js_string(".")) && !eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`struct ${sym.name.str} is private`), node.pos)
		return bait__ast__VOID_TYPE
	}
	bait__checker__Checker_check_init_field_values(c, node, sym.info)
	node.name = sym.name
	for (let _t23 = 0; _t23 < node.fields.length; _t23++) {
		const field = array_get(node.fields, _t23)
		const def = bait__ast__TypeSymbol_find_field(sym, field.name, c.table)
		if (eq(def.name.length, 0)) {
			bait__checker__Checker_error(c, from_js_string(`struct ${sym.name.str} has no field ${field.name.str}`), node.pos)
		}
		c.expected_type = def.typ
		const expr_type = bait__checker__Checker_expr(c, field.expr)
		if (eq(def.typ, bait__ast__PLACEHOLDER_TYPE)) {
			continue
		}
		if (!bait__checker__Checker_check_types(c, expr_type, def.typ)) {
			bait__checker__Checker_error(c, from_js_string(`cannot assign to field ${field.name.str}: expected ${bait__ast__Table_type_name(c.table, def.typ).str}, got ${bait__ast__Table_type_name(c.table, expr_type).str} `), node.pos)
		}
	}
	return node.typ
}

function bait__checker__Checker_check_init_field_values(c, init, info) {
	for (let _t24 = 0; _t24 < info.fields.length; _t24++) {
		const def_field = array_get(info.fields, _t24)
		const def_sym = bait__ast__Table_get_sym(c.table, def_field.typ)
		let is_required = eq(def_sym.kind, bait__ast__TypeKind.sum_type)
		for (let _t25 = 0; _t25 < def_field.attrs.length; _t25++) {
			const attr = array_get(def_field.attrs, _t25)
			if (eq(attr.name, from_js_string("required"))) {
				is_required = true
			}
		}
		if (!is_required) {
			continue
		}
		if (!(def_field.expr instanceof bait__ast__EmptyExpr)) {
			continue
		}
		let is_present = false
		for (let _t26 = 0; _t26 < init.fields.length; _t26++) {
			const inited = array_get(init.fields, _t26)
			if (eq(inited.name, def_field.name)) {
				is_present = true
				break
			}
		}
		if (!is_present) {
			bait__checker__Checker_error(c, from_js_string(`field "${init.name.str}.${def_field.name.str}" requires initialization`), init.pos)
		}
	}
}


function bait__checker__Checker_check_types(c, got, expected) {
	if (eq(got, expected)) {
		return true
	}
	if (eq(got, bait__ast__ANY_TYPE) || eq(expected, bait__ast__ANY_TYPE)) {
		return true
	}
	const got_sym = bait__ast__Table_get_sym(c.table, got)
	const exp_sym = bait__ast__Table_get_sym(c.table, expected)
	if (eq(exp_sym.kind, bait__ast__TypeKind.array) && eq(got_sym.kind, bait__ast__TypeKind.array)) {
		if (eq(exp_sym.name, from_js_string("array")) || eq(got_sym.name, from_js_string("array"))) {
			return true
		}
		const got_info = got_sym.info
		if (eq(got_info.elem_type, bait__ast__ANY_TYPE)) {
			return true
		}
		const exp_info = exp_sym.info
		if (eq(exp_info.elem_type, bait__ast__ANY_TYPE)) {
			return true
		}
	}
	if (eq(exp_sym.kind, bait__ast__TypeKind.sum_type)) {
		const info = exp_sym.info
		return array_contains(info.variants, got)
	}
	if (eq(got_sym.kind, bait__ast__TypeKind.fun_) && eq(exp_sym.kind, bait__ast__TypeKind.fun_)) {
		const got_info = got_sym.info
		const exp_info = exp_sym.info
		if (!eq(got_info.param_types.length, exp_info.param_types.length)) {
			return false
		}
		for (let i = 0; i < got_info.param_types.length; i += 1) {
			if (!bait__checker__Checker_check_types(c, array_get(got_info.param_types, i), array_get(exp_info.param_types, i))) {
				return false
			}
		}
		return bait__checker__Checker_check_types(c, got_info.return_type, exp_info.return_type)
	}
	return false
}

function bait__checker__Checker_does_type_exist(c, sym, pos) {
	if (eq(sym.kind, bait__ast__TypeKind.placeholder)) {
		bait__checker__Checker_error(c, from_js_string(`unknown type ${sym.name.str}`), pos)
		return false
	}
	if (eq(sym.kind, bait__ast__TypeKind.other) || eq(sym.kind, bait__ast__TypeKind.string)) {
		return true
	}
	if (sym.is_pub || eq(sym.pkg, c.pkg)) {
		return true
	}
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		const info = sym.info
		const elem_sym = bait__ast__Table_get_sym(c.table, info.elem_type)
		return bait__checker__Checker_does_type_exist(c, elem_sym, pos)
	}
	if (eq(sym.kind, bait__ast__TypeKind.map)) {
		const info = sym.info
		const key_sym = bait__ast__Table_get_sym(c.table, info.key_type)
		const val_sym = bait__ast__Table_get_sym(c.table, info.val_type)
		return bait__checker__Checker_does_type_exist(c, key_sym, pos) && bait__checker__Checker_does_type_exist(c, val_sym, pos)
	}
	if (eq(sym.kind, bait__ast__TypeKind.alias_type)) {
		const parent_sym = bait__ast__Table_get_sym(c.table, sym.parent)
		return bait__checker__Checker_does_type_exist(c, parent_sym, pos)
	}
	if (eq(sym.kind, bait__ast__TypeKind.sum_type)) {
		const info = sym.info
		for (let _t27 = 0; _t27 < info.variants.length; _t27++) {
			const variant = array_get(info.variants, _t27)
			const var_sym = bait__ast__Table_get_sym(c.table, variant)
			if (!bait__checker__Checker_does_type_exist(c, var_sym, pos)) {
				return false
			}
		}
		return true
	}
	bait__checker__Checker_error(c, from_js_string(`type ${sym.name.str} is private`), pos)
	return false
}


function bait__util__escape_char(s, esc_char) {
	let res = from_js_string("")
	let is_escaped = false
	let i = 0
	while (i < s.length) {
		const c = string_get(s, i)
		if (eq(c, esc_char)) {
			if (!is_escaped) {
				res = string_add(res, from_js_string("\\"))
			}
		}
		res = string_add(res, u8_ascii(c))
		i += 1
		if (eq(c, new u8("\\")) && !is_escaped) {
			is_escaped = true
		} else {
			is_escaped = false
		}
	}
	return res
}

function bait__util__shell_escape(s) {
	return bait__util__escape_char(s, new u8("\`"))
}


const bait__util__VERSION = from_js_string(`0.0.4-dev ${from_js_string("1fba74b").str}`)

function bait__gen__js__Gen_expr(g, expr) {
	if (expr instanceof bait__ast__AnonFun) {
		bait__gen__js__Gen_anon_fun(g, expr)
	} else if (expr instanceof bait__ast__ArrayInit) {
		bait__gen__js__Gen_array_init(g, expr)
	} else if (expr instanceof bait__ast__AsCast) {
		bait__gen__js__Gen_as_cast(g, expr)
	} else if (expr instanceof bait__ast__BoolLiteral) {
		bait__gen__js__Gen_bool_literal(g, expr)
	} else if (expr instanceof bait__ast__CallExpr) {
		bait__gen__js__Gen_call_expr(g, expr)
	} else if (expr instanceof bait__ast__CharLiteral) {
		bait__gen__js__Gen_char_literal(g, expr)
	} else if (expr instanceof bait__ast__CompTimeVar) {
		bait__gen__js__Gen_comp_time_var(g, expr)
	} else if (expr instanceof bait__ast__EnumVal) {
		bait__gen__js__Gen_enum_val(g, expr)
	} else if (expr instanceof bait__ast__HashExpr) {
		bait__gen__js__Gen_hash_expr(g, expr)
	} else if (expr instanceof bait__ast__Ident) {
		bait__gen__js__Gen_ident(g, expr)
	} else if (expr instanceof bait__ast__IfExpr) {
		bait__gen__js__Gen_if_expr(g, expr)
	} else if (expr instanceof bait__ast__IndexExpr) {
		bait__gen__js__Gen_index_expr(g, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		bait__gen__js__Gen_infix_expr(g, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		bait__gen__js__Gen_integer_literal(g, expr)
	} else if (expr instanceof bait__ast__MapInit) {
		bait__gen__js__Gen_map_init(g, expr)
	} else if (expr instanceof bait__ast__MatchExpr) {
		bait__gen__js__Gen_match_expr(g, expr)
	} else if (expr instanceof bait__ast__ParExpr) {
		bait__gen__js__Gen_par_expr(g, expr)
	} else if (expr instanceof bait__ast__PrefixExpr) {
		bait__gen__js__Gen_prefix_expr(g, expr)
	} else if (expr instanceof bait__ast__SelectorExpr) {
		bait__gen__js__Gen_selector_expr(g, expr)
	} else if (expr instanceof bait__ast__StringLiteral) {
		bait__gen__js__Gen_string_literal(g, expr)
	} else if (expr instanceof bait__ast__StringInterLiteral) {
		bait__gen__js__Gen_string_inter_literal(g, expr)
	} else if (expr instanceof bait__ast__StructInit) {
		bait__gen__js__Gen_struct_init(g, expr)
	} else if (expr instanceof bait__ast__TypeOf) {
		bait__gen__js__Gen_type_of(g, expr)
	} else {
	}
}

function bait__gen__js__Gen_expr_string(g, expr) {
	const was_line_empty = g.empty_line
	const start = g.out.length
	bait__gen__js__Gen_expr(g, expr)
	const s = string_substr(g.out, start, g.out.length)
	g.out = string_substr(g.out, 0, start)
	g.empty_line = was_line_empty
	return string_trim_space(s)
}

function bait__gen__js__Gen_anon_fun(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("function ("))
	for (let i = 0; i < node.decl.params.length; i++) {
		const param = array_get(node.decl.params, i)
		bait__gen__js__Gen_write(g, param.name)
		if (i < node.decl.params.length - 1) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_stmts(g, node.decl.stmts)
	bait__gen__js__Gen_write(g, from_js_string("}"))
}

function bait__gen__js__Gen_array_init(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("new array({ data: "))
	if (node.length_expr instanceof bait__ast__EmptyExpr) {
		bait__gen__js__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = array_get(node.exprs, i)
			bait__gen__js__Gen_expr(g, expr)
			if (i < node.exprs.length - 1) {
				bait__gen__js__Gen_write(g, from_js_string(", "))
			}
		}
		bait__gen__js__Gen_write(g, from_js_string(`], length: ${i32_str(node.exprs.length).str} })`))
		return
	}
	const len = bait__gen__js__Gen_expr_string(g, node.length_expr)
	bait__gen__js__Gen_write(g, from_js_string(`Array.from({ length: ${len.str} }, (v, i) => `))
	bait__gen__js__Gen_write_default_value(g, node.elem_type)
	bait__gen__js__Gen_write(g, from_js_string(`), length: ${len.str} })`))
}

function bait__gen__js__Gen_as_cast(g, node) {
	const target_sym = bait__ast__Table_get_sym(g.table, node.target)
	if (eq(target_sym.kind, bait__ast__TypeKind.alias_type)) {
		bait__gen__js__Gen_expr(g, node.expr)
		return
	}
	bait__gen__js__Gen_expr(g, node.expr)
}

function bait__gen__js__Gen_bool_literal(g, node) {
	if (node.val) {
		bait__gen__js__Gen_write(g, from_js_string("true"))
	} else {
		bait__gen__js__Gen_write(g, from_js_string("false"))
	}
}

function bait__gen__js__Gen_call_expr(g, node) {
	if (node.is_method && !eq(node.lang, bait__ast__Language.bait)) {
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, string_add(string_add(from_js_string("."), node.name), from_js_string("(")))
		bait__gen__js__Gen_call_args(g, node.args)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	if (node.is_method) {
		const sym = bait__ast__Table_get_sym(g.table, node.left_type)
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(string_add(string_add(sym.name, from_js_string("_")), node.name)))
	} else if (eq(node.lang, bait__ast__Language.bait)) {
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(node.name))
	} else {
		bait__gen__js__Gen_write(g, node.name)
	}
	if (array_string_contains(new array({ data: [from_js_string("println"), from_js_string("eprintln")], length: 2 }), node.name)) {
		bait__gen__js__Gen_write(g, from_js_string("("))
		bait__gen__js__Gen_expr_to_jsstring(g, array_get(node.args, 0).expr, array_get(node.args, 0).typ)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	bait__gen__js__Gen_write(g, from_js_string("("))
	if (node.is_method) {
		bait__gen__js__Gen_expr(g, node.left)
		if (node.args.length > 0) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_call_args(g, node.args)
	bait__gen__js__Gen_write(g, from_js_string(")"))
}

function bait__gen__js__Gen_call_args(g, args) {
	for (let i = 0; i < args.length; i++) {
		const a = array_get(args, i)
		bait__gen__js__Gen_expr(g, a.expr)
		if (i < args.length - 1) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
}

function bait__gen__js__Gen_char_literal(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("new u8(\""))
	bait__gen__js__Gen_write(g, bait__util__escape_char(node.val, new u8("\"")))
	bait__gen__js__Gen_write(g, from_js_string("\")"))
}

function bait__gen__js__Gen_comp_time_var(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("from_js_string(\""))
	switch (node.name.str) {
		case from_js_string("PKG").str:
			{
				bait__gen__js__Gen_write(g, g.pkg)
				break
			}
		case from_js_string("FILE").str:
			{
				bait__gen__js__Gen_write(g, g.path)
				break
			}
		case from_js_string("ABS_FILE").str:
			{
				bait__gen__js__Gen_write(g, os__abs_path(g.path))
				break
			}
		case from_js_string("LINE").str:
			{
				bait__gen__js__Gen_write(g, from_js_string(`${i32_str(node.pos.line).str}`))
				break
			}
		case from_js_string("FILE_LINE").str:
			{
				bait__gen__js__Gen_write(g, from_js_string(`${g.path.str}:${i32_str(node.pos.line).str}`))
				break
			}
		case from_js_string("FUN").str:
			{
				bait__gen__js__Gen_write(g, g.cur_fun.name)
				break
			}
		case from_js_string("BAITEXE").str:
			{
				bait__gen__js__Gen_write(g, g.pref.baitexe)
				break
			}
		case from_js_string("BAITDIR").str:
			{
				bait__gen__js__Gen_write(g, g.pref.baitdir)
				break
			}
		case from_js_string("BAITHASH").str:
			{
				bait__gen__js__Gen_write(g, g.pref.baithash)
				break
			}
	}
	bait__gen__js__Gen_write(g, from_js_string("\")"))
}

function bait__gen__js__Gen_enum_val(g, node) {
	bait__gen__js__Gen_write(g, string_add(string_add(bait__gen__js__js_name(node.name), from_js_string(".")), node.val))
}

function bait__gen__js__Gen_hash_expr(g, node) {
	bait__gen__js__Gen_write(g, node.val)
}

function bait__gen__js__Gen_ident(g, node) {
	bait__gen__js__Gen_write(g, bait__gen__js__js_name(node.name))
}

function bait__gen__js__Gen_if_expr(g, node) {
	for (let i = 0; i < node.branches.length; i++) {
		const b = array_get(node.branches, i)
		if (i > 0) {
			bait__gen__js__Gen_write(g, from_js_string("} else "))
		}
		if (node.has_else && eq(i, node.branches.length - 1)) {
			bait__gen__js__Gen_writeln(g, from_js_string("{"))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("if ("))
			bait__gen__js__Gen_expr(g, b.cond)
			bait__gen__js__Gen_writeln(g, from_js_string(") {"))
		}
		bait__gen__js__Gen_stmts(g, b.stmts)
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_integer_literal(g, node) {
	bait__gen__js__Gen_write(g, node.val)
}

function bait__gen__js__Gen_index_expr(g, node) {
	const sym = bait__ast__Table_get_sym(g.table, node.left_type)
	if (eq(sym.kind, bait__ast__TypeKind.map)) {
		if (g.is_lhs_assign && !node.is_selector) {
			g.is_array_map_set = true
			bait__gen__js__Gen_write(g, from_js_string("map_set("))
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			bait__gen__js__Gen_expr(g, node.index)
			bait__gen__js__Gen_write(g, from_js_string(", "))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("map_get_set("))
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			bait__gen__js__Gen_expr(g, node.index)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			const info = sym.info
			bait__gen__js__Gen_write_default_value(g, info.val_type)
			bait__gen__js__Gen_write(g, from_js_string(")"))
		}
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		if (g.is_lhs_assign && !node.is_selector) {
			g.is_array_map_set = true
			bait__gen__js__Gen_write(g, from_js_string("array_set("))
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			bait__gen__js__Gen_expr(g, node.index)
			bait__gen__js__Gen_write(g, from_js_string(", "))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("array_get("))
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			bait__gen__js__Gen_expr(g, node.index)
			bait__gen__js__Gen_write(g, from_js_string(")"))
		}
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.string)) {
		bait__gen__js__Gen_write(g, from_js_string("string_get("))
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, node.index)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	bait__gen__js__Gen_expr(g, node.left)
	bait__gen__js__Gen_write(g, from_js_string("["))
	bait__gen__js__Gen_expr(g, node.index)
	bait__gen__js__Gen_write(g, from_js_string("]"))
}

function bait__gen__js__Gen_infix_expr(g, node) {
	const lsym = bait__ast__Table_get_sym(g.table, node.left_type)
	if (map_contains(lsym.overloads, bait__token__TokenKind_js_repr(node.op))) {
		const overload = map_get_set(lsym.overloads, bait__token__TokenKind_js_repr(node.op), new bait__ast__FunDecl({}))
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(string_add(string_add(lsym.name, from_js_string("_")), overload.name)))
		bait__gen__js__Gen_write(g, from_js_string("("))
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, node.right)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	if (eq(node.op, bait__token__TokenKind.eq) || eq(node.op, bait__token__TokenKind.ne)) {
		if (eq(node.op, bait__token__TokenKind.ne)) {
			bait__gen__js__Gen_write(g, from_js_string("!"))
		}
		bait__gen__js__Gen_write(g, from_js_string("eq("))
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, node.right)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	if (eq(node.left_type, bait__ast__U8_TYPE)) {
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string(".val "))
		bait__gen__js__Gen_write(g, bait__token__TokenKind_js_repr(node.op))
		bait__gen__js__Gen_write(g, from_js_string(" "))
		bait__gen__js__Gen_expr(g, node.right)
		bait__gen__js__Gen_write(g, from_js_string(".val"))
		return
	}
	bait__gen__js__Gen_expr(g, node.left)
	bait__gen__js__Gen_write(g, from_js_string(" "))
	bait__gen__js__Gen_write(g, bait__token__TokenKind_js_repr(node.op))
	bait__gen__js__Gen_write(g, from_js_string(" "))
	bait__gen__js__Gen_expr(g, node.right)
}

function bait__gen__js__Gen_map_init(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("new map({ data: new Map(["))
	for (let i = 0; i < node.keys.length; i++) {
		const key = array_get(node.keys, i)
		bait__gen__js__Gen_write(g, from_js_string("["))
		bait__gen__js__Gen_expr_to_jsstring(g, key, node.key_type)
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, array_get(node.vals, i))
		bait__gen__js__Gen_write(g, from_js_string("]"))
		if (i < node.keys.length - 1) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_write(g, from_js_string(`]), length: ${i32_str(node.keys.length).str} })`))
}

function bait__gen__js__Gen_match_expr(g, node) {
	if (node.is_sumtype) {
		bait__gen__js__Gen_sumtype_match(g, node)
		return
	}
	bait__gen__js__Gen_write(g, from_js_string("switch ("))
	bait__gen__js__Gen_expr(g, node.cond)
	if (eq(node.cond_type, bait__ast__STRING_TYPE)) {
		bait__gen__js__Gen_write(g, from_js_string(".str"))
	} else if (eq(node.cond_type, bait__ast__U8_TYPE)) {
		bait__gen__js__Gen_write(g, from_js_string(".val"))
	}
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	g.indent += 1
	for (let _t28 = 0; _t28 < node.branches.length; _t28++) {
		const b = array_get(node.branches, _t28)
		if (eq(b.exprs.length, 0)) {
			bait__gen__js__Gen_writeln(g, from_js_string("default:"))
		} else {
			for (let i = 0; i < b.exprs.length; i++) {
				const e = array_get(b.exprs, i)
				bait__gen__js__Gen_write(g, from_js_string("case "))
				if (eq(node.cond_type, bait__ast__STRING_TYPE)) {
					bait__gen__js__Gen_expr_to_jsstring(g, e, array_get(b.expr_types, i))
				} else if (eq(node.cond_type, bait__ast__U8_TYPE)) {
					bait__gen__js__Gen_expr(g, e)
					bait__gen__js__Gen_write(g, from_js_string(".val"))
				} else {
					bait__gen__js__Gen_expr(g, e)
				}
				bait__gen__js__Gen_writeln(g, from_js_string(":"))
			}
		}
		g.indent += 1
		bait__gen__js__Gen_writeln(g, from_js_string("{"))
		bait__gen__js__Gen_stmts(g, b.stmts)
		bait__gen__js__Gen_writeln(g, from_js_string("\tbreak"))
		bait__gen__js__Gen_writeln(g, from_js_string("}"))
		g.indent -= 1
	}
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_sumtype_match(g, node) {
	const cond = bait__gen__js__Gen_expr_string(g, node.cond)
	for (let i = 0; i < node.branches.length; i++) {
		const b = array_get(node.branches, i)
		if (i >= 1) {
			bait__gen__js__Gen_write(g, from_js_string("} else "))
		}
		if (eq(b.exprs.length, 0)) {
			bait__gen__js__Gen_writeln(g, from_js_string("{"))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("if ("))
			for (let j = 0; j < b.exprs.length; j++) {
				const e = array_get(b.exprs, j)
				const expr = e
				bait__gen__js__Gen_write(g, from_js_string(`${cond.str} instanceof ${bait__gen__js__js_name(expr.name).str}`))
				if (j < b.exprs.length - 1) {
					bait__gen__js__Gen_write(g, from_js_string(" || "))
				}
			}
			bait__gen__js__Gen_writeln(g, from_js_string(") {"))
		}
		bait__gen__js__Gen_stmts(g, b.stmts)
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_par_expr(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("("))
	bait__gen__js__Gen_expr(g, node.expr)
	bait__gen__js__Gen_write(g, from_js_string(")"))
}

function bait__gen__js__Gen_prefix_expr(g, node) {
	bait__gen__js__Gen_write(g, bait__token__TokenKind_js_repr(node.op))
	if (node.right instanceof bait__ast__InfixExpr && eq((node.right).op, bait__token__TokenKind.key_is)) {
		bait__gen__js__Gen_write(g, from_js_string("("))
		bait__gen__js__Gen_expr(g, node.right)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	bait__gen__js__Gen_expr(g, node.right)
}

function bait__gen__js__Gen_selector_expr(g, node) {
	bait__gen__js__Gen_expr(g, node.expr)
	bait__gen__js__Gen_write(g, from_js_string("."))
	bait__gen__js__Gen_write(g, node.field_name)
}

function bait__gen__js__Gen_string_literal(g, node) {
	const val = bait__util__escape_char(string_replace(node.val, from_js_string("\n"), from_js_string("\\n")), new u8("\""))
	bait__gen__js__Gen_write(g, from_js_string("from_js_string(\""))
	bait__gen__js__Gen_write(g, val)
	bait__gen__js__Gen_write(g, from_js_string("\")"))
}

function bait__gen__js__Gen_string_inter_literal(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("from_js_string(`"))
	for (let i = 0; i < node.vals.length; i++) {
		const val = array_get(node.vals, i)
		bait__gen__js__Gen_write(g, bait__util__escape_char(val, new u8("\`")))
		if (i < node.exprs.length) {
			bait__gen__js__Gen_write(g, from_js_string("\${"))
			bait__gen__js__Gen_expr_to_jsstring(g, array_get(node.exprs, i), array_get(node.expr_types, i))
			bait__gen__js__Gen_write(g, from_js_string("}"))
		}
	}
	bait__gen__js__Gen_write(g, from_js_string("`)"))
}

function bait__gen__js__Gen_type_of(g, node) {
	const sym = bait__ast__Table_get_sym(g.table, node.typ)
	bait__gen__js__Gen_write(g, string_add(string_add(from_js_string("from_js_string(\""), sym.name), from_js_string("\")")))
}

function bait__gen__js__Gen_expr_to_jsstring(g, expr, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (eq(sym.kind, bait__ast__TypeKind.string)) {
		bait__gen__js__Gen_expr(g, expr)
		bait__gen__js__Gen_write(g, from_js_string(".str"))
		return
	}
	const str_def = bait__ast__Table_get_method(g.table, sym, from_js_string("str"))
	if (str_def.name.length > 0) {
		const final_sym = bait__ast__Table_get_sym(g.table, array_get(str_def.params, 0).typ)
		let name = bait__gen__js__js_name(final_sym.name)
		bait__gen__js__Gen_write(g, from_js_string(`${name.str}_str(`))
		bait__gen__js__Gen_expr(g, expr)
		bait__gen__js__Gen_write(g, from_js_string(").str"))
		return
	}
	bait__gen__js__Gen_expr(g, expr)
	bait__gen__js__Gen_write(g, from_js_string(".toString()"))
}


const bait__gen__js__JS_RESERVED = new array({ data: [from_js_string("await"), from_js_string("break"), from_js_string("case"), from_js_string("catch"), from_js_string("class"), from_js_string("const"), from_js_string("continue"), from_js_string("debugger"), from_js_string("default"), from_js_string("delete"), from_js_string("do"), from_js_string("else"), from_js_string("enum"), from_js_string("export"), from_js_string("extends"), from_js_string("false"), from_js_string("finally"), from_js_string("for"), from_js_string("function"), from_js_string("if"), from_js_string("import"), from_js_string("in"), from_js_string("instanceof"), from_js_string("new"), from_js_string("null"), from_js_string("return"), from_js_string("super"), from_js_string("switch"), from_js_string("this"), from_js_string("throw"), from_js_string("true"), from_js_string("try"), from_js_string("typeof"), from_js_string("var"), from_js_string("void"), from_js_string("while"), from_js_string("with"), from_js_string("yield"), from_js_string("let"), from_js_string("static"), from_js_string("implements"), from_js_string("interface"), from_js_string("package"), from_js_string("private"), from_js_string("protected"), from_js_string("public"), from_js_string("as"), from_js_string("async"), from_js_string("from"), from_js_string("get"), from_js_string("meta"), from_js_string("of"), from_js_string("set"), from_js_string("target")], length: 54 })
function bait__gen__js__Gen({ pref = new bait__preference__Prefs({}), table = new bait__ast__Table({}), path = from_js_string(""), pkg = from_js_string(""), type_defs_out = from_js_string(""), global_out = from_js_string(""), out = from_js_string(""), indent = 0, empty_line = false, foreign_imports = new map({ data: new Map([]), length: 0 }), tmp_counter = 0, cur_fun = new bait__ast__FunDecl({}), is_for_loop_head = false, is_lhs_assign = false, is_array_map_set = false }) {
	this.pref = pref
	this.table = table
	this.path = path
	this.pkg = pkg
	this.type_defs_out = type_defs_out
	this.global_out = global_out
	this.out = out
	this.indent = indent
	this.empty_line = empty_line
	this.foreign_imports = foreign_imports
	this.tmp_counter = tmp_counter
	this.cur_fun = cur_fun
	this.is_for_loop_head = is_for_loop_head
	this.is_lhs_assign = is_lhs_assign
	this.is_array_map_set = is_array_map_set
}
bait__gen__js__Gen.prototype = {
	toString() {
		return `bait__gen__js__Gen{
    pref = ${this.pref.toString()}
    table = ${this.table.toString()}
    path = ${this.path.toString()}
    pkg = ${this.pkg.toString()}
    type_defs_out = ${this.type_defs_out.toString()}
    global_out = ${this.global_out.toString()}
    out = ${this.out.toString()}
    indent = ${this.indent.toString()}
    empty_line = ${this.empty_line.toString()}
    foreign_imports = ${this.foreign_imports.toString()}
    tmp_counter = ${this.tmp_counter.toString()}
    cur_fun = ${this.cur_fun.toString()}
    is_for_loop_head = ${this.is_for_loop_head.toString()}
    is_lhs_assign = ${this.is_lhs_assign.toString()}
    is_array_map_set = ${this.is_array_map_set.toString()}
}`}
}
function bait__gen__js__gen(files, table, pref) {
	let g = new bait__gen__js__Gen({ pref: pref, table: table, indent: -1, empty_line: true, tmp_counter: -1 })
	for (let _t29 = 0; _t29 < files.length; _t29++) {
		const file = array_get(files, _t29)
		g.path = file.path
		g.pkg = file.pkg_decl.full_name
		bait__gen__js__Gen_process_imports(g, file.imports)
		bait__gen__js__Gen_stmts(g, file.stmts)
		g.out = string_add(g.out, from_js_string("\n"))
	}
	if (pref.is_test) {
		bait__gen__js__Gen_gen_test_main(g)
	}
	if (!pref.is_library) {
		bait__gen__js__Gen_main_call(g)
	}
	const headers = bait__gen__js__Gen_headers(g)
	return string_add(string_add(string_add(string_add(headers, g.type_defs_out), g.global_out), from_js_string("\n")), g.out)
}

function bait__gen__js__Gen_process_imports(g, imports) {
	for (let _t30 = 0; _t30 < imports.length; _t30++) {
		const imp = array_get(imports, _t30)
		if (eq(imp.lang, bait__ast__Language.bait) || map_contains(g.foreign_imports, imp.alias)) {
			continue
		}
		map_set(g.foreign_imports, imp.alias, imp.name)
	}
}

function bait__gen__js__Gen_headers(g) {
	let headers = from_js_string("")
	const _t31 = map_keys(g.foreign_imports)
	for (let _t32 = 0; _t32 < _t31.length; _t32++) {
		const alias = array_get(_t31, _t32)
		const name = map_get(g.foreign_imports, alias)
		const js_alias = bait__gen__js__js_name(alias)
		headers = string_add(headers, from_js_string(`const ${js_alias.str} = require("${name.str}")\n`))
	}
	return string_add(headers, from_js_string("\n"))
}

function bait__gen__js__Gen_new_temp_var(g) {
	g.tmp_counter += 1
	return from_js_string(`_t${i32_str(g.tmp_counter).str}`)
}

function bait__gen__js__Gen_write_indent(g) {
	if (g.indent > 0 && g.empty_line) {
		g.out = string_add(g.out, string_repeat(from_js_string("\t"), g.indent))
	}
}

function bait__gen__js__Gen_write(g, s) {
	bait__gen__js__Gen_write_indent(g)
	g.out = string_add(g.out, s)
	g.empty_line = false
}

function bait__gen__js__Gen_writeln(g, s) {
	bait__gen__js__Gen_write_indent(g)
	g.out = string_add(g.out, string_add(s, from_js_string("\n")))
	g.empty_line = true
}

function bait__gen__js__Gen_gen_test_main(g) {
	let nr_test_funs = 0
	bait__gen__js__Gen_writeln(g, from_js_string("function main() {"))
	g.indent += 1
	const _t33 = map_keys(g.table.fun_decls)
	for (let _t34 = 0; _t34 < _t33.length; _t34++) {
		const key = array_get(_t33, _t34)
		const func = map_get(g.table.fun_decls, key)
		if (func.is_test) {
			nr_test_funs += 1
			const name = bait__gen__js__js_name(func.name)
			bait__gen__js__Gen_writeln(g, from_js_string(`TestRunner_set_test_info(test_runner, from_js_string("${g.path.str}"), from_js_string("${name.str}"))`))
			bait__gen__js__Gen_writeln(g, from_js_string(`${name.str}()`))
		}
	}
	bait__gen__js__Gen_writeln(g, from_js_string("exit(TestRunner_exit_code(test_runner))"))
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	if (eq(nr_test_funs, 0)) {
		bait__errors__generic_error(from_js_string(`${g.path.str} contains no tests`))
		exit(1)
	}
}

function bait__gen__js__Gen_main_call(g) {
	g.out = string_add(g.out, from_js_string("main()"))
}

function bait__gen__js__Gen_write_default_value(g, typ) {
	switch (typ) {
		case bait__ast__I8_TYPE:
		case bait__ast__I16_TYPE:
		case bait__ast__I32_TYPE:
		case bait__ast__I64_TYPE:
		case bait__ast__U8_TYPE:
		case bait__ast__U16_TYPE:
		case bait__ast__U32_TYPE:
		case bait__ast__U64_TYPE:
			{
				bait__gen__js__Gen_write(g, from_js_string("0"))
				break
			}
		case bait__ast__F32_TYPE:
		case bait__ast__F64_TYPE:
			{
				bait__gen__js__Gen_write(g, from_js_string("0.0"))
				break
			}
		case bait__ast__BOOL_TYPE:
			{
				bait__gen__js__Gen_write(g, from_js_string("false"))
				break
			}
		case bait__ast__STRING_TYPE:
			{
				bait__gen__js__Gen_write(g, from_js_string("from_js_string(\"\")"))
				break
			}
		default:
			{
				const sym = bait__ast__Table_get_sym(g.table, typ)
				if (eq(sym.kind, bait__ast__TypeKind.array)) {
					bait__gen__js__Gen_array_init(g, new bait__ast__ArrayInit({ exprs: new array({ data: [], length: 0 }) }))
				} else if (eq(sym.kind, bait__ast__TypeKind.map)) {
					bait__gen__js__Gen_map_init(g, new bait__ast__MapInit({ keys: new array({ data: [], length: 0 }) }))
				} else if (eq(sym.kind, bait__ast__TypeKind.struct_)) {
					bait__gen__js__Gen_write(g, from_js_string(`new ${bait__gen__js__js_name(sym.name).str}({})`))
				} else if (eq(sym.kind, bait__ast__TypeKind.alias_type)) {
					bait__gen__js__Gen_write_default_value(g, sym.parent)
				} else if (eq(sym.kind, bait__ast__TypeKind.enum_)) {
					bait__gen__js__Gen_write(g, from_js_string("0"))
				} else {
					bait__gen__js__Gen_write(g, from_js_string("undefined"))
				}
				break
			}
	}
}

function bait__gen__js__js_name(n) {
	const name = string_replace(string_replace(n, from_js_string("."), from_js_string("__")), from_js_string("[]"), from_js_string("array_"))
	if (array_string_contains(bait__gen__js__JS_RESERVED, name)) {
		return from_js_string(`bait_${name.str}`)
	}
	return name
}


function bait__gen__js__Gen_stmts(g, stmts) {
	g.indent += 1
	for (let _t35 = 0; _t35 < stmts.length; _t35++) {
		const stmt = array_get(stmts, _t35)
		bait__gen__js__Gen_stmt(g, stmt)
	}
	g.indent -= 1
}

function bait__gen__js__Gen_stmt(g, stmt) {
	if (stmt instanceof bait__ast__AssertStmt) {
		bait__gen__js__Gen_assert_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__AssignStmt) {
		bait__gen__js__Gen_assign_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__ConstDecl) {
		bait__gen__js__Gen_const_decl(g, stmt)
	} else if (stmt instanceof bait__ast__ExprStmt) {
		bait__gen__js__Gen_expr(g, stmt.expr)
		if (!g.empty_line) {
			bait__gen__js__Gen_writeln(g, from_js_string(""))
		}
	} else if (stmt instanceof bait__ast__EnumDecl) {
		bait__gen__js__Gen_enum_decl(g, stmt)
	} else if (stmt instanceof bait__ast__ForLoop) {
		bait__gen__js__Gen_for_loop(g, stmt)
	} else if (stmt instanceof bait__ast__ForClassicLoop) {
		bait__gen__js__Gen_for_classic_loop(g, stmt)
	} else if (stmt instanceof bait__ast__ForInLoop) {
		bait__gen__js__Gen_for_in_loop(g, stmt)
	} else if (stmt instanceof bait__ast__FunDecl) {
		bait__gen__js__Gen_fun_decl(g, stmt)
	} else if (stmt instanceof bait__ast__GlobalDecl) {
		bait__gen__js__Gen_global_decl(g, stmt)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
		bait__gen__js__Gen_interface_decl(g, stmt)
	} else if (stmt instanceof bait__ast__LoopControlStmt) {
		bait__gen__js__Gen_control_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__ReturnStmt) {
		bait__gen__js__Gen_return_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__StructDecl) {
		bait__gen__js__Gen_struct_decl(g, stmt)
	} else if (stmt instanceof bait__ast__TypeDecl) {
		bait__gen__js__Gen_type_decl(g, stmt)
	} else {
	}
}

function bait__gen__js__Gen_assert_stmt(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("if ("))
	bait__gen__js__Gen_expr(g, node.expr)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_writeln(g, from_js_string("\tTestRunner_assert_pass(test_runner)"))
	bait__gen__js__Gen_writeln(g, from_js_string("} else {"))
	if (node.expr instanceof bait__ast__InfixExpr) {
		const expr = node.expr
		bait__gen__js__Gen_write(g, from_js_string(`\tTestRunner_set_assert_info(test_runner, ${i32_str(node.pos.line).str}, from_js_string("assert `))
		bait__gen__js__Gen_assert_side_expr(g, expr.left)
		bait__gen__js__Gen_write(g, from_js_string(` ${bait__token__TokenKind_js_repr(expr.op).str} `))
		bait__gen__js__Gen_assert_side_expr(g, expr.right)
		bait__gen__js__Gen_write(g, from_js_string("\"), from_js_string("))
		bait__gen__js__Gen_expr_to_jsstring(g, expr.left, expr.left_type)
		bait__gen__js__Gen_write(g, from_js_string("), from_js_string("))
		bait__gen__js__Gen_expr_to_jsstring(g, expr.right, expr.right_type)
		bait__gen__js__Gen_writeln(g, from_js_string("))"))
		bait__gen__js__Gen_writeln(g, from_js_string("\tTestRunner_assert_fail_infix(test_runner)"))
	} else {
		bait__gen__js__Gen_write(g, from_js_string(`\tTestRunner_set_assert_info(test_runner, ${i32_str(node.pos.line).str}, from_js_string("assert `))
		bait__gen__js__Gen_assert_side_expr(g, node.expr)
		bait__gen__js__Gen_writeln(g, from_js_string("\"), from_js_string(\"\"), from_js_string(\"\"), from_js_string(\"\"))"))
		bait__gen__js__Gen_writeln(g, from_js_string("\tTestRunner_assert_fail(test_runner)"))
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_assert_side_expr(g, node) {
	if (node instanceof bait__ast__BoolLiteral) {
		bait__gen__js__Gen_bool_literal(g, node)
	} else if (node instanceof bait__ast__IntegerLiteral) {
		bait__gen__js__Gen_integer_literal(g, node)
	} else if (node instanceof bait__ast__StringLiteral) {
		bait__gen__js__Gen_write(g, from_js_string("'"))
		bait__gen__js__Gen_write(g, node.val)
		bait__gen__js__Gen_write(g, from_js_string("'"))
	} else if (node instanceof bait__ast__CharLiteral) {
		bait__gen__js__Gen_write(g, from_js_string("`"))
		bait__gen__js__Gen_write(g, node.val)
		bait__gen__js__Gen_write(g, from_js_string("`"))
	} else if (node instanceof bait__ast__ArrayInit) {
		bait__gen__js__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = array_get(node.exprs, i)
			bait__gen__js__Gen_assert_side_expr(g, expr)
			if (i < node.exprs.length - 1) {
				bait__gen__js__Gen_write(g, from_js_string(", "))
			}
		}
		bait__gen__js__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__Ident) {
		bait__gen__js__Gen_write(g, node.name)
	} else if (node instanceof bait__ast__ArrayInit) {
		bait__gen__js__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = array_get(node.exprs, i)
			bait__gen__js__Gen_assert_side_expr(g, expr)
			if (i < node.exprs.length - 1) {
				bait__gen__js__Gen_write(g, from_js_string(", "))
			}
		}
		bait__gen__js__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__IndexExpr) {
		bait__gen__js__Gen_assert_side_expr(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string("["))
		bait__gen__js__Gen_assert_side_expr(g, node.index)
		bait__gen__js__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__SelectorExpr) {
		bait__gen__js__Gen_assert_side_expr(g, node.expr)
		bait__gen__js__Gen_write(g, from_js_string(`.${node.field_name.str}`))
	} else {
		bait__gen__js__Gen_write(g, from_js_string("UNHANDLED EXPR"))
	}
}

function bait__gen__js__Gen_assign_stmt(g, node) {
	if (eq(node.op, bait__token__TokenKind.decl_assign)) {
		const left = node.left
		if (left.is_mut) {
			bait__gen__js__Gen_write(g, from_js_string("let "))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("const "))
		}
	}
	if (eq(node.left_type, bait__ast__STRING_TYPE)) {
		if (eq(node.op, bait__token__TokenKind.plus_assign)) {
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(" = "))
			bait__gen__js__Gen_write(g, from_js_string("string_add("))
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			bait__gen__js__Gen_expr(g, node.right)
			bait__gen__js__Gen_writeln(g, from_js_string(")"))
			return
		}
	}
	g.is_lhs_assign = true
	bait__gen__js__Gen_expr(g, node.left)
	g.is_lhs_assign = false
	if (g.is_array_map_set) {
		bait__gen__js__Gen_expr(g, node.right)
		bait__gen__js__Gen_writeln(g, from_js_string(")"))
		g.is_array_map_set = false
		return
	}
	bait__gen__js__Gen_write(g, from_js_string(" "))
	bait__gen__js__Gen_write(g, bait__token__TokenKind_js_repr(node.op))
	bait__gen__js__Gen_write(g, from_js_string(" "))
	bait__gen__js__Gen_expr(g, node.right)
	if (!g.is_for_loop_head) {
		bait__gen__js__Gen_writeln(g, from_js_string(""))
	}
}

function bait__gen__js__Gen_const_decl(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("const "))
	bait__gen__js__Gen_write(g, bait__gen__js__js_name(node.name))
	bait__gen__js__Gen_write(g, from_js_string(" = "))
	bait__gen__js__Gen_expr(g, node.expr)
	bait__gen__js__Gen_writeln(g, from_js_string(""))
}

function bait__gen__js__Gen_enum_decl(g, node) {
	bait__gen__js__Gen_writeln(g, string_add(string_add(from_js_string("const "), bait__gen__js__js_name(node.name)), from_js_string(" = {")))
	g.indent += 1
	for (let _t36 = 0; _t36 < node.fields.length; _t36++) {
		const field = array_get(node.fields, _t36)
		bait__gen__js__Gen_write(g, from_js_string(`${field.name.str}: `))
		bait__gen__js__Gen_expr(g, field.expr)
		bait__gen__js__Gen_writeln(g, from_js_string(","))
	}
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_control_stmt(g, node) {
	bait__gen__js__Gen_writeln(g, bait__token__TokenKind_js_repr(node.kind))
}

function bait__gen__js__Gen_for_loop(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("while ("))
	bait__gen__js__Gen_expr(g, node.cond)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_for_classic_loop(g, node) {
	g.is_for_loop_head = true
	bait__gen__js__Gen_write(g, from_js_string("for ("))
	bait__gen__js__Gen_stmt(g, node.init)
	bait__gen__js__Gen_write(g, from_js_string("; "))
	bait__gen__js__Gen_expr(g, node.cond)
	bait__gen__js__Gen_write(g, from_js_string("; "))
	bait__gen__js__Gen_stmt(g, node.inc)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	g.is_for_loop_head = false
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_for_in_loop(g, node) {
	let i = node.idxvar
	if (eq(i, from_js_string(""))) {
		i = bait__gen__js__Gen_new_temp_var(g)
	}
	const sym = bait__ast__Table_get_sym(g.table, node.expr_type)
	if (eq(sym.kind, bait__ast__TypeKind.map)) {
		bait__gen__js__Gen_for_in_map(g, node)
		return
	}
	const container = bait__gen__js__Gen_expr_string(g, node.expr)
	bait__gen__js__Gen_writeln(g, from_js_string(`for (let ${i.str} = 0; ${i.str} < ${container.str}.length; ${i.str}++) {`))
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${node.valvar.str} = array_get(${container.str}, ${i.str})`))
	} else if (eq(sym.kind, bait__ast__TypeKind.string)) {
		bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${node.valvar.str} = string_get(${container.str}, ${i.str})`))
	} else {
		bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${node.valvar.str} = ${container.str}[${i.str}]`))
	}
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_for_in_map(g, node) {
	const container = bait__gen__js__Gen_expr_string(g, node.expr)
	const keys_var = bait__gen__js__Gen_new_temp_var(g)
	bait__gen__js__Gen_writeln(g, from_js_string(`const ${keys_var.str} = map_keys(${container.str})`))
	const i = bait__gen__js__Gen_new_temp_var(g)
	bait__gen__js__Gen_writeln(g, from_js_string(`for (let ${i.str} = 0; ${i.str} < ${keys_var.str}.length; ${i.str}++) {`))
	bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${node.idxvar.str} = array_get(${keys_var.str}, ${i.str})`))
	bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${node.valvar.str} = map_get(${container.str}, ${node.idxvar.str})`))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_fun_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	g.cur_fun = node
	bait__gen__js__Gen_write(g, from_js_string("function "))
	if (node.is_method) {
		const sym = bait__ast__Table_get_sym(g.table, array_get(node.params, 0).typ)
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(string_add(string_add(sym.name, from_js_string("_")), node.name)))
	} else {
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(node.name))
	}
	bait__gen__js__Gen_write(g, from_js_string("("))
	bait__gen__js__Gen_fun_params(g, node.params)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	const export_attr = array_bait__ast__Attribute_find_attr(node.attrs, from_js_string("export"))
	if (!eq(export_attr.name, from_js_string(""))) {
		bait__gen__js__Gen_writeln(g, from_js_string(`module.exports.${export_attr.value.str} = ${bait__gen__js__js_name(node.name).str}`))
	}
	bait__gen__js__Gen_writeln(g, from_js_string(""))
}

function bait__gen__js__Gen_fun_params(g, params) {
	for (let i = 0; i < params.length; i++) {
		const p = array_get(params, i)
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(p.name))
		if (i < params.length - 1) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
}

function bait__gen__js__Gen_global_decl(g, node) {
	const name = bait__gen__js__js_name(node.name)
	const expr = bait__gen__js__Gen_expr_string(g, node.expr)
	g.global_out = string_add(g.global_out, from_js_string(`var ${name.str} = ${expr.str}\n`))
}

function bait__gen__js__Gen_interface_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	bait__errors__error(g.path, node.pos, from_js_string("only JS interfaces are supported right now"))
	exit(1)
}

function bait__gen__js__Gen_return_stmt(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("return"))
	if (!(node.expr instanceof bait__ast__EmptyExpr)) {
		bait__gen__js__Gen_write(g, from_js_string(" "))
		bait__gen__js__Gen_expr(g, node.expr)
	}
	bait__gen__js__Gen_writeln(g, from_js_string(""))
}

function bait__gen__js__Gen_type_decl(g, node) {
	const sym = bait__ast__Table_get_sym(g.table, node.typ)
	if (!eq(sym.kind, bait__ast__TypeKind.alias_type)) {
		return
	}
	bait__gen__js__Gen_write(g, from_js_string("function "))
	bait__gen__js__Gen_write(g, bait__gen__js__js_name(node.name))
	bait__gen__js__Gen_writeln(g, from_js_string("(val) { return val }"))
}


function bait__gen__js__Gen_struct_decl(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("function "))
	const jsname = bait__gen__js__js_name(node.name)
	bait__gen__js__Gen_write(g, jsname)
	bait__gen__js__Gen_write(g, from_js_string("({ "))
	for (let i = 0; i < node.fields.length; i++) {
		const field = array_get(node.fields, i)
		bait__gen__js__Gen_write(g, from_js_string(`${field.name.str} = `))
		if (eq(node.typ, field.typ)) {
			bait__gen__js__Gen_write(g, from_js_string("this"))
		} else if (!(field.expr instanceof bait__ast__EmptyExpr)) {
			bait__gen__js__Gen_expr(g, field.expr)
		} else {
			bait__gen__js__Gen_write_default_value(g, field.typ)
		}
		if (i < node.fields.length - 1) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	if (node.fields.length > 0) {
		bait__gen__js__Gen_write(g, from_js_string(" "))
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}) {"))
	g.indent += 1
	for (let _t37 = 0; _t37 < node.fields.length; _t37++) {
		const field = array_get(node.fields, _t37)
		bait__gen__js__Gen_writeln(g, from_js_string(`this.${field.name.str} = ${field.name.str}`))
	}
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	bait__gen__js__Gen_writeln(g, from_js_string(`${jsname.str}.prototype = {`))
	g.indent += 1
	bait__gen__js__Gen_writeln(g, from_js_string("toString() {"))
	bait__gen__js__Gen_write(g, from_js_string(`\treturn \`${jsname.str}{\n`))
	for (let _t38 = 0; _t38 < node.fields.length; _t38++) {
		const field = array_get(node.fields, _t38)
		bait__gen__js__Gen_write(g, from_js_string(`    ${field.name.str} = \$`))
		bait__gen__js__Gen_write(g, from_js_string(`{this.${field.name.str}.toString()}\n`))
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}\`}"))
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_struct_init(g, node) {
	bait__gen__js__Gen_write(g, string_add(string_add(from_js_string("new "), bait__gen__js__js_name(node.name)), from_js_string("({")))
	if (eq(node.fields.length, 0)) {
		bait__gen__js__Gen_write(g, from_js_string("})"))
		return
	}
	bait__gen__js__Gen_write(g, from_js_string(" "))
	for (let i = 0; i < node.fields.length; i++) {
		const field = array_get(node.fields, i)
		bait__gen__js__Gen_write(g, from_js_string(`${field.name.str}: `))
		bait__gen__js__Gen_expr(g, field.expr)
		if (i < node.fields.length - 1) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_write(g, from_js_string(" })"))
}


function bait__tokenizer__Tokenizer({ path = from_js_string(""), text = from_js_string(""), pos = 0, line = 0, last_nl_pos = 0, is_string_inter = false, str_quote = 0, should_abort = false, errors = new array({ data: [], length: 0 }) }) {
	this.path = path
	this.text = text
	this.pos = pos
	this.line = line
	this.last_nl_pos = last_nl_pos
	this.is_string_inter = is_string_inter
	this.str_quote = str_quote
	this.should_abort = should_abort
	this.errors = errors
}
bait__tokenizer__Tokenizer.prototype = {
	toString() {
		return `bait__tokenizer__Tokenizer{
    path = ${this.path.toString()}
    text = ${this.text.toString()}
    pos = ${this.pos.toString()}
    line = ${this.line.toString()}
    last_nl_pos = ${this.last_nl_pos.toString()}
    is_string_inter = ${this.is_string_inter.toString()}
    str_quote = ${this.str_quote.toString()}
    should_abort = ${this.should_abort.toString()}
    errors = ${this.errors.toString()}
}`}
}
function bait__tokenizer__new_tokenizer(text, path) {
	return new bait__tokenizer__Tokenizer({ path: path, text: text, pos: -1, line: 1, last_nl_pos: -1 })
}

function bait__tokenizer__Tokenizer_tokenize(t) {
	let tokens = new array({ data: [], length: 0 })
	while (!t.should_abort) {
		array_push(tokens, bait__tokenizer__Tokenizer_next_token(t))
	}
	return tokens
}

function bait__tokenizer__Tokenizer_new_token(t, kind, val) {
	return new bait__token__Token({ kind: kind, val: val, pos: new bait__token__Pos({ line: t.line, col: t.pos - t.last_nl_pos }) })
}

function bait__tokenizer__Tokenizer_eof_token(t) {
	t.should_abort = true
	return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.eof, from_js_string(""))
}

function bait__tokenizer__Tokenizer_next_token(t) {
	while (true) {
		t.pos += 1
		bait__tokenizer__Tokenizer_skip_whitespace(t)
		if (t.pos >= t.text.length) {
			return bait__tokenizer__Tokenizer_eof_token(t)
		}
		const c = string_get(t.text, t.pos)
		if (bait__tokenizer__is_name_start_char(c)) {
			return bait__tokenizer__Tokenizer_name_or_keyword(t)
		} else if (bait__tokenizer__is_digit(c)) {
			const num = bait__tokenizer__Tokenizer_number_val(t)
			return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.number, num)
		}
		const nextc = string_get(t.text, t.pos + 1)
		switch (c.val) {
			case new u8("'").val:
			case new u8("\"").val:
				{
					const str = bait__tokenizer__Tokenizer_string_val(t, c)
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.string, str)
					break
				}
			case new u8("\`").val:
				{
					const val = bait__tokenizer__Tokenizer_char_val(t)
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.char, val)
					break
				}
			case new u8(".").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.dot, from_js_string(""))
					break
				}
			case new u8(",").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.comma, from_js_string(""))
					break
				}
			case new u8("+").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.plus_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.plus, from_js_string(""))
					break
				}
			case new u8("-").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.minus_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.minus, from_js_string(""))
					break
				}
			case new u8("*").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.mul_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.mul, from_js_string(""))
					break
				}
			case new u8("/").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.div_assign, from_js_string(""))
					}
					if (eq(nextc, new u8("/"))) {
						bait__tokenizer__Tokenizer_ignore_line(t)
						continue
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.div, from_js_string(""))
					break
				}
			case new u8("%").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.mod_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.mod, from_js_string(""))
					break
				}
			case new u8("=").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.eq, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.assign, from_js_string(""))
					break
				}
			case new u8(":").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.decl_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.colon, from_js_string(""))
					break
				}
			case new u8(";").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.semicolon, from_js_string(""))
					break
				}
			case new u8("!").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.ne, from_js_string(""))
					}
					break
				}
			case new u8("<").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.le, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.lt, from_js_string(""))
					break
				}
			case new u8(">").val:
				{
					if (eq(nextc, new u8("="))) {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.ge, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.gt, from_js_string(""))
					break
				}
			case new u8("(").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.lpar, from_js_string(""))
					break
				}
			case new u8(")").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.rpar, from_js_string(""))
					break
				}
			case new u8("[").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.lbr, from_js_string(""))
					break
				}
			case new u8("]").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.rbr, from_js_string(""))
					break
				}
			case new u8("{").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.lcur, from_js_string(""))
					break
				}
			case new u8("}").val:
				{
					if (t.is_string_inter) {
						t.is_string_inter = false
						const str = bait__tokenizer__Tokenizer_string_val(t, t.str_quote)
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.string, str)
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.rcur, from_js_string(""))
					break
				}
			case new u8("|").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.pipe, from_js_string(""))
					break
				}
			case new u8("$").val:
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.dollar, from_js_string(""))
					break
				}
			case new u8("#").val:
				{
					t.pos += 1
					const name = bait__tokenizer__Tokenizer_name_val(t)
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.hash, name)
					break
				}
			case new u8("@").val:
				{
					t.pos += 1
					const name = bait__tokenizer__Tokenizer_name_val(t)
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.attr, name)
					break
				}
			default:
				{
					break
				}
		}
		bait__tokenizer__Tokenizer_error(t, from_js_string(`unknown char \`${u8_ascii(c).str}\``))
	}
	return bait__tokenizer__Tokenizer_eof_token(t)
}

function bait__tokenizer__Tokenizer_name_or_keyword(t) {
	const name = bait__tokenizer__Tokenizer_name_val(t)
	const kind = bait__token__keyword_to_kind(name)
	if (!eq(kind, bait__token__TokenKind.name)) {
		return bait__tokenizer__Tokenizer_new_token(t, kind, from_js_string(""))
	}
	return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.name, name)
}

function bait__tokenizer__Tokenizer_name_val(t) {
	const start = t.pos
	t.pos += 1
	while (t.pos < t.text.length) {
		if (!bait__tokenizer__is_name_char(string_get(t.text, t.pos))) {
			break
		}
		t.pos += 1
	}
	t.pos -= 1
	return string_substr(t.text, start, t.pos + 1)
}

function bait__tokenizer__Tokenizer_number_val(t) {
	const start = t.pos
	while (bait__tokenizer__is_digit(string_get(t.text, t.pos))) {
		t.pos += 1
	}
	t.pos -= 1
	return string_substr(t.text, start, t.pos + 1)
}

function bait__tokenizer__Tokenizer_string_val(t, quote) {
	const is_js = eq(string_get(t.text, t.pos - 1), new u8("."))
	const start_line = t.line
	const start = t.pos + 1
	while (!t.should_abort) {
		t.pos += 1
		if (t.pos >= t.text.length) {
			bait__tokenizer__Tokenizer_error_with_line(t, from_js_string("unfinished string literal"), start_line)
		}
		const c = string_get(t.text, t.pos)
		if (eq(c, new u8("\n"))) {
			t.last_nl_pos = t.pos
			t.line += 1
		} else if (eq(c, new u8("\\"))) {
			t.pos += 1
		} else if (!is_js && eq(c, new u8("$")) && eq(string_get(t.text, t.pos + 1), new u8("{"))) {
			t.is_string_inter = true
			t.str_quote = quote
			t.pos -= 1
			return string_substr(t.text, start, t.pos + 1)
		} else if (eq(c, quote)) {
			break
		}
	}
	return string_substr(t.text, start, t.pos)
}

function bait__tokenizer__Tokenizer_char_val(t) {
	const start = t.pos + 1
	while (true) {
		t.pos += 1
		const c = string_get(t.text, t.pos)
		if (eq(c, new u8("\\"))) {
			t.pos += 1
		} else if (eq(c, new u8("\`"))) {
			break
		}
	}
	return string_substr(t.text, start, t.pos)
}

function bait__tokenizer__Tokenizer_skip_whitespace(t) {
	while (t.pos < t.text.length) {
		const c = string_get(t.text, t.pos)
		if (eq(c, new u8("\n"))) {
			t.last_nl_pos = t.pos
			t.line += 1
		} else if (!array_u8_contains(new array({ data: [new u8(" "), new u8("\t"), new u8("\r")], length: 3 }), c)) {
			return
		}
		t.pos += 1
	}
}

function bait__tokenizer__Tokenizer_ignore_line(t) {
	while (t.pos < t.text.length && !eq(string_get(t.text, t.pos), new u8("\n"))) {
		t.pos += 1
	}
	t.last_nl_pos = t.pos
	t.line += 1
}

function bait__tokenizer__Tokenizer_error(t, msg) {
	bait__tokenizer__Tokenizer_error_with_line(t, msg, t.line)
}

function bait__tokenizer__Tokenizer_error_with_line(t, msg, line) {
	array_push(t.errors, new bait__errors__Message({ kind: bait__errors__Kind.error, path: t.path, pos: new bait__token__Pos({ line: line, col: t.pos - t.last_nl_pos }), title: from_js_string("error"), msg: msg }))
	t.should_abort = true
}

function bait__tokenizer__is_name_start_char(c) {
	return c.val >= new u8("a").val && c.val <= new u8("z").val || c.val >= new u8("A").val && c.val <= new u8("Z").val || eq(c, new u8("_"))
}

function bait__tokenizer__is_name_char(c) {
	return bait__tokenizer__is_name_start_char(c) || bait__tokenizer__is_digit(c)
}

function bait__tokenizer__is_digit(c) {
	return c.val >= new u8("0").val && c.val <= new u8("9").val
}


function bait__builder__Builder({ prefs = new bait__preference__Prefs({}), table = new bait__ast__Table({}), parsed_files = new array({ data: [], length: 0 }), checker = new bait__checker__Checker({}) }) {
	this.prefs = prefs
	this.table = table
	this.parsed_files = parsed_files
	this.checker = checker
}
bait__builder__Builder.prototype = {
	toString() {
		return `bait__builder__Builder{
    prefs = ${this.prefs.toString()}
    table = ${this.table.toString()}
    parsed_files = ${this.parsed_files.toString()}
    checker = ${this.checker.toString()}
}`}
}
function bait__builder__Builder_collect_bait_files(b, dir) {
	const all_files = os__ls(dir)
	let files = new array({ data: [], length: 0 })
	for (let _t39 = 0; _t39 < all_files.length; _t39++) {
		const f = array_get(all_files, _t39)
		if (bait__preference__Prefs_should_compile_file(b.prefs, f)) {
			array_push(files, os__join_path(dir, new array({ data: [f], length: 1 })))
		}
	}
	return files
}

function bait__builder__Builder_get_user_files(b, path) {
	if (os__is_dir(path)) {
		return bait__builder__Builder_collect_bait_files(b, path)
	}
	if (os__exists(path) && string_ends_with(path, from_js_string(".bt"))) {
		return new array({ data: [path], length: 1 })
	}
	return new array({ data: [], length: 0 })
}

function bait__builder__Builder_parse_source_file(b, path) {
	const text = os__read_file(path)
	const t = bait__tokenizer__new_tokenizer(text, path)
	const tokens = bait__tokenizer__Tokenizer_tokenize(t)
	array_bait__errors__Message_print_and_exit(t.errors)
	return bait__parser__parse(tokens, path, b.table, b.prefs)
}

function bait__builder__compile(prefs) {
	let b = new bait__builder__Builder({ prefs: prefs, table: bait__ast__new_table() })
	let paths = bait__builder__Builder_collect_bait_files(b, bait__builder__resolve_import(from_js_string("builtin")))
	paths = array_concat(paths, bait__builder__Builder_get_user_files(b, prefs.command))
	let files = new array({ data: [], length: 0 })
	for (let _t40 = 0; _t40 < paths.length; _t40++) {
		const p = array_get(paths, _t40)
		array_push(files, bait__builder__Builder_parse_source_file(b, p))
	}
	const root_pkg = array_get(files, files.length - 1).pkg_decl.full_name
	for (let i = 0; i < files.length; i += 1) {
		const f = array_get(files, i)
		for (let _t41 = 0; _t41 < f.imports.length; _t41++) {
			const imp = array_get(f.imports, _t41)
			if (!eq(imp.lang, bait__ast__Language.bait)) {
				continue
			}
			b.prefs.expected_pkg = imp.name
			const import_dir = bait__builder__resolve_import(string_replace(imp.name, from_js_string("."), from_js_string("/")))
			let imp_paths = bait__builder__Builder_collect_bait_files(b, import_dir)
			if (eq(imp_paths.length, 0)) {
				bait__errors__generic_error(from_js_string(`package ${imp.name.str} contains no Bait files`))
				continue
			}
			imp_paths = array_filter(imp_paths, function (p) {
				return !array_string_contains(paths, p)
			})
			for (let _t42 = 0; _t42 < imp_paths.length; _t42++) {
				const p = array_get(imp_paths, _t42)
				array_push(paths, p)
				const parsed_file = bait__builder__Builder_parse_source_file(b, p)
				array_push(files, parsed_file)
			}
		}
	}
	b.parsed_files = files
	if (bait__builder__Builder_print_errors_and_warnings(b)) {
		return 1
	}
	let deps = new map({ data: new Map([]), length: 0 })
	for (let _t43 = 0; _t43 < files.length; _t43++) {
		const f = array_get(files, _t43)
		const pkg_name = f.pkg_decl.full_name
		if (!eq(pkg_name, from_js_string("builtin"))) {
			array_push(map_get_set(deps, pkg_name, new array({ data: [], length: 0 })), from_js_string("builtin"))
		}
		for (let _t44 = 0; _t44 < f.imports.length; _t44++) {
			const imp = array_get(f.imports, _t44)
			if (!eq(imp.lang, bait__ast__Language.bait)) {
				continue
			}
			array_push(map_get_set(deps, pkg_name, new array({ data: [], length: 0 })), imp.name)
		}
	}
	let pkg_order = new array({ data: [], length: 0 })
	bait__builder__order_pkgs(pkg_order, root_pkg, deps)
	let sorted_files = new array({ data: [], length: 0 })
	for (let _t45 = 0; _t45 < pkg_order.length; _t45++) {
		const pkg = array_get(pkg_order, _t45)
		for (let _t46 = 0; _t46 < files.length; _t46++) {
			const f = array_get(files, _t46)
			if (eq(f.pkg_decl.full_name, pkg)) {
				array_push(sorted_files, f)
			}
		}
	}
	b.parsed_files = sorted_files
	b.checker = bait__checker__new_checker(b.table, b.prefs)
	bait__checker__Checker_check_files(b.checker, sorted_files)
	if (bait__builder__Builder_check_redefined_functions(b)) {
		return 1
	}
	if (bait__builder__Builder_print_errors_and_warnings(b)) {
		return 1
	}
	if (!eq(b.prefs.backend, bait__preference__Backend.js)) {
		bait__errors__generic_error(from_js_string("Only the JS backend is supported right now."))
		return 1
	}
	const res = string_add(bait__gen__js__gen(sorted_files, b.table, b.prefs), from_js_string("\n"))
	bait__builder__ensure_dir_exists(os__dir(b.prefs.out_name))
	os__write_file(b.prefs.out_name, res)
	if (b.prefs.should_run) {
		const run_res = os__system(from_js_string(`node ${b.prefs.out_name.str}`))
		return run_res
	}
	return 0
}

function bait__builder__Builder_print_errors_and_warnings(b) {
	let nr_warns = 0
	let nr_errors = 0
	for (let _t47 = 0; _t47 < b.parsed_files.length; _t47++) {
		const f = array_get(b.parsed_files, _t47)
		nr_warns += f.warnings.length
		nr_errors += f.errors.length
		if (!b.prefs.hide_warnings) {
			for (let _t48 = 0; _t48 < f.infos.length; _t48++) {
				const info = array_get(f.infos, _t48)
				bait__errors__Message_print(info)
			}
		}
		if (b.prefs.warn_is_error) {
			for (let _t49 = 0; _t49 < f.warnings.length; _t49++) {
				const warn = array_get(f.warnings, _t49)
				bait__errors__error(warn.path, warn.pos, warn.msg)
			}
		} else if (!b.prefs.hide_warnings) {
			for (let _t50 = 0; _t50 < f.warnings.length; _t50++) {
				const warn = array_get(f.warnings, _t50)
				bait__errors__Message_print(warn)
			}
		}
		for (let _t51 = 0; _t51 < f.errors.length; _t51++) {
			const err = array_get(f.errors, _t51)
			bait__errors__Message_print(err)
		}
	}
	nr_errors += b.checker.errors.length
	for (let _t52 = 0; _t52 < b.checker.errors.length; _t52++) {
		const err = array_get(b.checker.errors, _t52)
		bait__errors__Message_print(err)
	}
	return nr_errors > 0 || (b.prefs.warn_is_error && nr_warns > 0)
}

function bait__builder__resolve_import(pkg) {
	const dir = os__resource_abs_path(os__join_path(from_js_string("lib"), new array({ data: [pkg], length: 1 })))
	if (os__exists(dir)) {
		return dir
	}
	return os__join_path(os__getwd(), new array({ data: [from_js_string("lib"), pkg], length: 2 }))
}

function bait__builder__order_pkgs(ordered, pkg, deps) {
	for (let _t53 = 0; _t53 < map_get_set(deps, pkg, new array({ data: [], length: 0 })).length; _t53++) {
		const d = array_get(map_get_set(deps, pkg, new array({ data: [], length: 0 })), _t53)
		bait__builder__order_pkgs(ordered, d, deps)
	}
	if (!array_string_contains(ordered, pkg)) {
		array_push(ordered, pkg)
	}
}

function bait__builder__ensure_dir_exists(dir) {
	if (!os__exists(dir)) {
		os__mkdir(dir)
	}
}


function bait__builder__FunRedefinition({ path = from_js_string(""), pos = new bait__token__Pos({}), name = from_js_string(""), signature = from_js_string("") }) {
	this.path = path
	this.pos = pos
	this.name = name
	this.signature = signature
}
bait__builder__FunRedefinition.prototype = {
	toString() {
		return `bait__builder__FunRedefinition{
    path = ${this.path.toString()}
    pos = ${this.pos.toString()}
    name = ${this.name.toString()}
    signature = ${this.signature.toString()}
}`}
}
function bait__builder__Builder_check_redefined_functions(b) {
	if (eq(b.table.redefined_funs.length, 0)) {
		return false
	}
	let unique_redefs = new array({ data: [], length: 0 })
	for (let _t54 = 0; _t54 < b.table.redefined_funs.length; _t54++) {
		const name = array_get(b.table.redefined_funs, _t54)
		if (!array_string_contains(unique_redefs, name)) {
			array_push(unique_redefs, name)
		}
	}
	for (let _t55 = 0; _t55 < unique_redefs.length; _t55++) {
		const name = array_get(unique_redefs, _t55)
		let redefinitions = new array({ data: [], length: 0 })
		for (let _t56 = 0; _t56 < b.parsed_files.length; _t56++) {
			const file = array_get(b.parsed_files, _t56)
			for (let _t57 = 0; _t57 < file.stmts.length; _t57++) {
				const stmt = array_get(file.stmts, _t57)
				if (stmt instanceof bait__ast__FunDecl && eq(stmt.name, name)) {
					array_push(redefinitions, new bait__builder__FunRedefinition({ path: file.path, pos: stmt.pos, name: name, signature: bait__builder__Builder_fun_signature(b, stmt) }))
				}
			}
		}
		bait__errors__generic_error(from_js_string(`redfinition of function "${name.str}"`))
		for (let _t58 = 0; _t58 < redefinitions.length; _t58++) {
			const redef = array_get(redefinitions, _t58)
			bait__errors__info(from_js_string("conflict"), redef.path, redef.pos, redef.signature)
		}
	}
	return true
}

function bait__builder__Builder_fun_signature(b, node) {
	let sig = from_js_string(`fun ${node.name.str}(`)
	for (let i = 0; i < node.params.length; i++) {
		const p = array_get(node.params, i)
		const type_name = bait__ast__Table_get_sym(b.table, p.typ).name
		sig = string_add(sig, from_js_string(`${p.name.str} ${type_name.str}`))
		if (i < node.params.length - 1) {
			sig = string_add(sig, from_js_string(", "))
		}
	}
	sig = string_add(sig, from_js_string(")"))
	return sig
}


function bait__builder__run_tests(prefs) {
	let files_to_test = new array({ data: [], length: 0 })
	for (let _t59 = 0; _t59 < prefs.args.length; _t59++) {
		const a = array_get(prefs.args, _t59)
		if (os__exists(a) && string_ends_with(a, from_js_string(".bt")) && string_contains(a, from_js_string("_test."))) {
			array_push(files_to_test, a)
		} else if (os__is_dir(a)) {
			const t = array_filter(os__walk_ext(a, from_js_string(".bt")), function (f) {
				return string_contains(f, from_js_string("_test.")) && !string_contains(f, from_js_string(".in."))
			})
			array_push_many(files_to_test, t)
		} else {
			eprintln(from_js_string(`Unrecognized test file or directory: "${a.str}"`).str)
			exit(1)
		}
	}
	let test_prefs = prefs
	let has_fails = false
	for (let i = 0; i < files_to_test.length; i++) {
		const file = array_get(files_to_test, i)
		test_prefs.command = file
		test_prefs.out_name = from_js_string(`/tmp/test_${i32_str(i).str}.js`)
		const res = bait__builder__compile(test_prefs)
		if (eq(res, 0)) {
			println(from_js_string(`OK ${file.str}`).str)
		} else {
			has_fails = true
			println(from_js_string(`FAIL ${file.str}`).str)
		}
	}
	if (has_fails) {
		return 1
	}
	return 0
}


const TOOLS = new array({ data: [from_js_string("ast"), from_js_string("self"), from_js_string("up"), from_js_string("symlink"), from_js_string("doctor"), from_js_string("help"), from_js_string("test-all"), from_js_string("test-lib"), from_js_string("build-examples"), from_js_string("build-tools"), from_js_string("check-md"), from_js_string("gen-baitjs")], length: 12 })
function launch_tool(name, args, is_verbose) {
	const baitexe = os__executable()
	const tool_base_path = os__resource_abs_path(os__join_path(from_js_string("cli"), new array({ data: [from_js_string("tools"), name], length: 2 })))
	const tool_source = string_add(tool_base_path, from_js_string(".bt"))
	const tool_exe = string_add(tool_base_path, from_js_string(".js"))
	const comp_res = os__exec(from_js_string(`node ${baitexe.str} ${tool_source.str} -o ${tool_exe.str}`))
	if (!eq(comp_res.code, 0)) {
		eprintln(from_js_string(`Failed to compile tool "${name.str}" with error: ${comp_res.stderr.str}`).str)
		return 1
	}
	const args_string = array_string_join(args, from_js_string(" "))
	if (is_verbose) {
		println(from_js_string("launching tool").str)
		println(from_js_string(`  bait:      ${baitexe.str}`).str)
		println(from_js_string(`  source:    ${tool_source.str}`).str)
		println(from_js_string(`  args:      ${args_string.str}`).str)
	}
	return os__system(from_js_string(`node ${tool_exe.str} ${args_string.str}`))
}

function main() {
	const args = array_slice(os__ARGS, 2, os__ARGS.length)
	let prefs = bait__preference__parse_args(args)
	bait__preference__Prefs_set_comptime_vars(prefs)
	if (array_string_contains(TOOLS, prefs.command)) {
		exit(launch_tool(prefs.command, prefs.build_options, prefs.is_verbose))
	}
	switch (prefs.command.str) {
		case from_js_string("test").str:
			{
				exit(bait__builder__run_tests(prefs))
				break
			}
		case from_js_string("version").str:
			{
				println(from_js_string(`Bait ${bait__util__VERSION.str}`).str)
				return
				break
			}
	}
	if (os__exists(prefs.command)) {
		exit(bait__builder__compile(prefs))
	}
	eprintln(from_js_string(`error: unknown file or command: "${prefs.command.str}"`).str)
	exit(1)
}


main()
