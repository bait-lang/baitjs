const JS = {}
JS.console = require("console")
JS.process = require("process")
JS.os = require("os")
JS.fs = require("fs")
JS.path = require("path")
JS.child_process = require("child_process")

var bait__util__timers__g_timers = new bait__util__timers__Timers({})

function bait__ast__EmptyExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.EmptyExpr{"
	s += "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__EmptyStmt_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.EmptyStmt{"
	s += "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait_Array({ data = undefined, length = 0 }) {
	this.data = data
	this.length = length
}
function Array_get(a, i) {
	return a.data.at(i)
}

function Array_set(a, i, val) {
	a.data[i] = val
}

function Array_last(a) {
	return Array_get(a, i32(a.length - 1))
}

function Array_push(a, el) {
	a.data.push(el)
	a.length += 1
}

function Array_push_many(a, b) {
	a.data = a.data.concat(b.data)
	a.length += b.length
}

function Array_index_any(a, val) {
	for (let i = 0; i < a.length; i += 1) {
		if (eq(Array_get(a, i), val)) {
			return i
		}
	}
	return -1
}

function Array_index_string(a, val) {
	for (let i = 0; i < a.length; i += 1) {
		if (eq(Array_get(a, i), val)) {
			return i
		}
	}
	return -1
}

function Array_index_string(a, val) {
	for (let i = 0; i < a.length; i += 1) {
		if (eq(Array_get(a, i), val)) {
			return i
		}
	}
	return -1
}

function Array_index_string(a, val) {
	for (let i = 0; i < a.length; i += 1) {
		if (eq(Array_get(a, i), val)) {
			return i
		}
	}
	return -1
}

function Array_index_string(a, val) {
	for (let i = 0; i < a.length; i += 1) {
		if (eq(Array_get(a, i), val)) {
			return i
		}
	}
	return -1
}

function Array_contains(a, el) {
	return i32(Array_index_any(a, el) >= 0)
}

function Array_slice(a, start, end) {
	return new bait_Array({ data: a.data.slice(start, end), length: i32(end - start) })
}

function Array_concat(a, b) {
	return new bait_Array({ data: a.data.concat(b.data), length: i32(a.length + b.length) })
}

function Array_copy(a) {
	return new bait_Array({ data: [...a.data], length: a.length })
}

function Array_reverse(a) {
	const b = Array_copy(a)
	Array_reverse_in_place(b)
	return b
}

function Array_reverse_in_place(a) {
	a.data.reverse()
}

function Array_filter(a, fn) {
	return from_js_arr(a.data.filter(fn))
}

function from_js_arr(a) {
	return new bait_Array({ data: a, length: a.length })
}


function println(msg) {
	JS.console.log(msg.str)
}

function eprintln(msg) {
	JS.console.error(msg.str)
}

function exit(code) {
	JS.process.exit(code)
}

function panic(msg) {
	eprintln(from_js_string(`Panic: ${msg.str}\n${js_stacktrace().str}`))
	exit(1)
}

function js_stacktrace() {
	return from_js_string(new Error().stack)
}

function bool_str(b) {
	if (b) {
		return from_js_string("true")
	}
	return from_js_string("false")
}


function u8_is_capital(c) {
	return u8(c >= u8("A")) && u8(c <= u8("Z"))
}

function u8_ascii(c) {
	return from_js_string(String.fromCharCode(c))
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


function map({ data = undefined, length = 0 }) {
	this.data = data
	this.length = length
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

function map_values(m) {
	return from_js_arr(Array.from(m.data.values()))
}

function map_clear(m) {
	m.length = 0
	m.data = new Map([])
}


function i8(n) {
	return Math.floor(n)
}

function i16(n) {
	return Math.floor(n)
}

function i32(n) {
	return Math.floor(n)
}

function i64(n) {
	return Math.floor(n)
}

function u8(v) {
	if (typeof(v) == "string") {
		return v.charCodeAt(0)
	}
	if (v instanceof string) {
		return v.str.charCodeAt(0)
	}
	return Math.floor(v)
}

function u16(n) {
	return Math.floor(n)
}

function u32(n) {
	return Math.floor(n)
}

function u64(n) {
	return Math.floor(n)
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
	return from_js_string(n.toString())
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

function f32_str(n) {
	return from_js_string(n.toString())
}

function f64_str(n) {
	return from_js_string(n.toString())
}


function string({ str = undefined, length = 0 }) {
	this.str = str
	this.length = length
}
function string_get(s, i) {
	return u8(s.str.charCodeAt(i))
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
	return string_substr(s, i32(idx + 1), s.length)
}

function string_all_after_last(s, search) {
	const idx = string_last_index(s, search)
	if (eq(idx, -1)) {
		return s
	}
	return string_substr(s, i32(idx + 1), s.length)
}

function string_repeat(s, count) {
	return from_js_string(s.str.repeat(count))
}

function string_trim_left(s, cutset) {
	let pos = 0
	while (i32(pos < s.length)) {
		let found = false
		for (let _t14 = 0; _t14 < cutset.length; _t14++) {
			const c = string_get(cutset, _t14)
			if (eq(string_get(s, pos), c)) {
				found = true
				break
			}
		}
		if (!found) {
			break
		}
		pos += 1
	}
	return string_substr(s, pos, s.length)
}

function string_trim_right(s, cutset) {
	let pos = i32(s.length - 1)
	while (i32(pos >= 0)) {
		let found = false
		for (let _t17 = 0; _t17 < cutset.length; _t17++) {
			const c = string_get(cutset, _t17)
			if (eq(string_get(s, pos), c)) {
				found = true
				break
			}
		}
		if (!found) {
			break
		}
		pos -= 1
	}
	return string_substr(s, 0, i32(pos + 1))
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

function string_is_capital(s) {
	if (eq(s.length, 0) || !u8_is_capital(string_get(s, 0))) {
		return false
	}
	for (let i = 1; i32(i < s.length); i += 1) {
		if (u8_is_capital(string_get(s, i))) {
			return false
		}
	}
	return true
}

function string_is_upper(s) {
	return eq(s.str, s.str.toUpperCase()) && !eq(s.str, s.str.toLowerCase())
}

function string_split(s, delim) {
	let res = new bait_Array({ data: [], length: 0 })
	let i = 0
	if (eq(delim.length, 0)) {
		for (let _t23 = 0; _t23 < s.length; _t23++) {
			const c = string_get(s, _t23)
			Array_push(res, u8_ascii(c))
		}
		return res
	}
	let start = 0
	while (i32(i < s.length)) {
		const is_delim = i32(i32(i + delim.length) <= s.length) && eq(string_substr(s, i, i32(i + delim.length)), delim)
		if (is_delim) {
			Array_push(res, string_substr(s, start, i))
			start = i32(i + delim.length)
			i = start
		} else {
			i += 1
		}
	}
	Array_push(res, string_substr(s, start, s.length))
	return res
}

function string_split_lines(s) {
	const res = from_js_string_arr(s.str.split("\n"))
	if (eq(Array_get(res, i32(res.length - 1)).length, 0)) {
		return Array_slice(res, 0, i32(res.length - 1))
	}
	return res
}

function string_toI32(s) {
	return parseInt(s.str)
}

function string_toF64(s) {
	return parseFloat(s.str)
}

function string_str(s) {
	return s
}

function string_add(a, b) {
	return from_js_string(a.str + b.str)
}

function Array_string_join(arr, sep) {
	const js_arr = Array_string_to_js_arr(arr)
	return from_js_string(js_arr.join(sep.str))
}

function from_js_string(js_s) {
	return new string({ str: js_s, length: js_s.length })
}

function from_js_string_arr(js_arr) {
	let a = new bait_Array({ data: [], length: 0 })
	for (let i = 0; i32(i < js_arr.length); i += 1) {
		Array_push(a, from_js_string(js_arr[i]))
	}
	return a
}

function Array_string_to_js_arr(arr) {
	const js_arr = []
	for (let _t26 = 0; _t26 < arr.length; _t26++) {
		const s = Array_get(arr, _t26)
		js_arr.push(s.str)
	}
	return js_arr
}



const os__ARGS = from_js_string_arr(JS.process.argv)
const os__PATH_SEP = from_js_string(JS.path.sep)
function os__user_args() {
	return Array_slice(os__ARGS, 2, os__ARGS.length)
}

function os__ls(dir) {
	return from_js_string_arr(JS.fs.readdirSync(dir.str))
}

function os__walk_ext(dir, ext) {
	let ext_files = new bait_Array({ data: [], length: 0 })
	const all_files = os__ls(dir)
	for (let _t27 = 0; _t27 < all_files.length; _t27++) {
		const file = Array_get(all_files, _t27)
		const fpath = os__join_path(dir, new bait_Array({ data: [file], length: 1 }))
		if (os__is_dir(fpath)) {
			Array_push_many(ext_files, os__walk_ext(fpath, ext))
		} else if (string_ends_with(fpath, ext)) {
			Array_push(ext_files, fpath)
		}
	}
	return ext_files
}

function os__cp(src, dest) {
	JS.fs.cpSync(src.str, dest.str, { recursive: true })
}

function os__exists(path) {
	return JS.fs.existsSync(path.str)
}

function os__file_name(path) {
	return from_js_string(JS.path.basename(path.str))
}

function os__file_mod_time(path) {
	return JS.fs.lstatSync(path.str).mtimeMs
}

function os__symlink(src, dest) {
	JS.fs.symlinkSync(src.str, dest.str)
}

function os__chdir(dir) {
	JS.process.chdir(dir.str)
}

function os__home_dir() {
	return from_js_string(JS.os.homedir())
}

function os__tmp_dir() {
	return from_js_string(JS.os.tmpdir())
}

function os__dir(path) {
	let other_sep = from_js_string("\\")
	if (!eq(os__PATH_SEP, from_js_string("/"))) {
		other_sep = from_js_string("/")
	}
	const p = string_replace(path, other_sep, os__PATH_SEP)
	const pos = string_last_index(p, os__PATH_SEP)
	if (eq(pos, -1)) {
		return from_js_string(".")
	}
	if (eq(pos, 0) && eq(os__PATH_SEP, from_js_string("/"))) {
		return from_js_string("/")
	}
	return string_substr(path, 0, pos)
}

function os__exists_dir(path) {
	return os__exists(path) && os__is_dir(path)
}

function os__is_dir(path) {
	return JS.fs.lstatSync(path.str).isDirectory()
}

function os__mkdir(dir) {
	if (os__exists(dir)) {
		return
	}
	JS.fs.mkdirSync(dir.str)
}

function os__mkdir_all(dir) {
	if (os__exists(dir)) {
		return
	}
	JS.fs.mkdirSync(dir.str, { recursive: true })
}

function os__rm(path) {
	JS.fs.rmSync(path.str)
}

function os__rmdir(dir) {
	JS.fs.rmdirSync(dir.str)
}

function os__rmdir_all(dir) {
	JS.fs.rmdirSync(dir.str, { recursive: true })
}

function os__read_file(path) {
	return from_js_string(JS.fs.readFileSync(path.str).toString())
}

function os__read_lines(path) {
	const text = string_replace(os__read_file(path), from_js_string("\r\n"), from_js_string("\n"))
	return string_split_lines(text)
}

function os__write_file(path, text) {
	JS.fs.writeFileSync(path.str, text.str)
}

function os__getwd() {
	return from_js_string(JS.process.cwd())
}

function os__join_path(base, dirs) {
	const js_dirs = Array_string_to_js_arr(dirs)
	return from_js_string(JS.path.join(base.str, ...js_dirs))
}

function os__executable() {
	return from_js_string(__filename)
}

function os__abs_path(path) {
	const wd = os__getwd()
	return from_js_string(JS.path.resolve(wd.str, path.str))
}

function os__resource_abs_path(path) {
	return os__join_path(from_js_string(__dirname), new bait_Array({ data: [path], length: 1 }))
}

function os__getenv(key) {
	if (JS.process.env[key.str]) {
		return from_js_string(JS.process.env[key.str])
	}
	return from_js_string("")
}

function os__setenv(key, value) {
	JS.process.env[key.str] = value.str
}

function os__user_os() {
	return from_js_string(JS.process.platform)
}

function os__arch() {
	return from_js_string(JS.os.arch())
}

function os__platform() {
	return from_js_string(JS.process.platform)
}

function os__input(prompt) {
	const fd = JS.fs.openSync("/dev/stdin", "rs")
	JS.process.stdout.write(prompt.str)
	const buf = Buffer.alloc(1024)
	const bytesRead = JS.fs.readSync(fd, buf, 0, buf.length)
	const input = buf.slice(0, bytesRead).toString()
	return from_js_string(input)
}

function os__Result({ code = 0, stdout = from_js_string(""), stderr = from_js_string("") }) {
	this.code = code
	this.stdout = stdout
	this.stderr = stderr
}
function os__exec(cmd) {
	let res = new os__Result({})
	const out = JS.child_process.spawnSync(cmd.str, { shell: true })
	res.code = out.status
	res.stdout = from_js_string(out.stdout.toString())
	res.stderr = from_js_string(out.stderr.toString())
	return res
}

function os__system(cmd) {
	try {
		JS.child_process.execSync(cmd.str, { stdio: "inherit" })
	} catch (e) {
		return e.status
	}
	return 0
}


function bait__token__Pos({ line = 0, col = 0 }) {
	this.line = line
	this.col = col
}
function bait__token__Pos_str(p) {
	return from_js_string(`{ line = ${i32_str(p.line).str}, col = ${i32_str(p.col).str} }`)
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
	let _t35 = undefined
	switch (t) {
		case bait__token__Token.lsqr:
			{
				_t35 = bait__token__Precedence.index
				break
			}
		case bait__token__Token.dot:
			{
				_t35 = bait__token__Precedence.call
				break
			}
		case bait__token__Token.key_not:
		case bait__token__Token.caret:
			{
				_t35 = bait__token__Precedence.prefix
				break
			}
		case bait__token__Token.mul:
		case bait__token__Token.div:
		case bait__token__Token.mod:
			{
				_t35 = bait__token__Precedence.product
				break
			}
		case bait__token__Token.plus:
		case bait__token__Token.minus:
			{
				_t35 = bait__token__Precedence.sum
				break
			}
		case bait__token__Token.eq:
		case bait__token__Token.ne:
		case bait__token__Token.lt:
		case bait__token__Token.gt:
		case bait__token__Token.le:
		case bait__token__Token.ge:
			{
				_t35 = bait__token__Precedence.compare
				break
			}
		case bait__token__Token.key_as:
		case bait__token__Token.key_is:
			{
				_t35 = bait__token__Precedence.as_is
				break
			}
		case bait__token__Token.key_and:
		case bait__token__Token.key_or:
			{
				_t35 = bait__token__Precedence.cond
				break
			}
		default:
			{
				_t35 = bait__token__Precedence.lowest
				break
			}
	}
	return _t35
}


const bait__token__Token = {
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
	lsqr: 31,
	rsqr: 32,
	lcur: 33,
	rcur: 34,
	amp: 35,
	caret: 36,
	pipe: 37,
	dollar: 38,
	hash: 39,
	key_and: 40,
	key_as: 41,
	key_assert: 42,
	key_break: 43,
	key_const: 44,
	key_continue: 45,
	key_else: 46,
	key_enum: 47,
	key_false: 48,
	key_for: 49,
	key_fun: 50,
	key_global: 51,
	key_if: 52,
	key_import: 53,
	key_in: 54,
	key_interface: 55,
	key_is: 56,
	key_match: 57,
	key_mut: 58,
	key_not: 59,
	key_or: 60,
	key_package: 61,
	key_pub: 62,
	key_return: 63,
	key_struct: 64,
	key_true: 65,
	key_type: 66,
	key_typeof: 67,
}
function bait__token__kind_from_string(name) {
	let _t36 = undefined
	switch (name.str) {
		case from_js_string("and").str:
			{
				_t36 = bait__token__Token.key_and
				break
			}
		case from_js_string("as").str:
			{
				_t36 = bait__token__Token.key_as
				break
			}
		case from_js_string("assert").str:
			{
				_t36 = bait__token__Token.key_assert
				break
			}
		case from_js_string("break").str:
			{
				_t36 = bait__token__Token.key_break
				break
			}
		case from_js_string("const").str:
			{
				_t36 = bait__token__Token.key_const
				break
			}
		case from_js_string("continue").str:
			{
				_t36 = bait__token__Token.key_continue
				break
			}
		case from_js_string("else").str:
			{
				_t36 = bait__token__Token.key_else
				break
			}
		case from_js_string("enum").str:
			{
				_t36 = bait__token__Token.key_enum
				break
			}
		case from_js_string("false").str:
			{
				_t36 = bait__token__Token.key_false
				break
			}
		case from_js_string("for").str:
			{
				_t36 = bait__token__Token.key_for
				break
			}
		case from_js_string("fun").str:
			{
				_t36 = bait__token__Token.key_fun
				break
			}
		case from_js_string("global").str:
			{
				_t36 = bait__token__Token.key_global
				break
			}
		case from_js_string("if").str:
			{
				_t36 = bait__token__Token.key_if
				break
			}
		case from_js_string("import").str:
			{
				_t36 = bait__token__Token.key_import
				break
			}
		case from_js_string("in").str:
			{
				_t36 = bait__token__Token.key_in
				break
			}
		case from_js_string("interface").str:
			{
				_t36 = bait__token__Token.key_interface
				break
			}
		case from_js_string("is").str:
			{
				_t36 = bait__token__Token.key_is
				break
			}
		case from_js_string("match").str:
			{
				_t36 = bait__token__Token.key_match
				break
			}
		case from_js_string("mut").str:
			{
				_t36 = bait__token__Token.key_mut
				break
			}
		case from_js_string("not").str:
			{
				_t36 = bait__token__Token.key_not
				break
			}
		case from_js_string("or").str:
			{
				_t36 = bait__token__Token.key_or
				break
			}
		case from_js_string("package").str:
			{
				_t36 = bait__token__Token.key_package
				break
			}
		case from_js_string("pub").str:
			{
				_t36 = bait__token__Token.key_pub
				break
			}
		case from_js_string("return").str:
			{
				_t36 = bait__token__Token.key_return
				break
			}
		case from_js_string("struct").str:
			{
				_t36 = bait__token__Token.key_struct
				break
			}
		case from_js_string("true").str:
			{
				_t36 = bait__token__Token.key_true
				break
			}
		case from_js_string("type").str:
			{
				_t36 = bait__token__Token.key_type
				break
			}
		case from_js_string("typeof").str:
			{
				_t36 = bait__token__Token.key_typeof
				break
			}
		default:
			{
				_t36 = bait__token__Token.name
				break
			}
	}
	return _t36
}

const bait__token__COMPARE_KINDS = new bait_Array({ data: [bait__token__Token.eq, bait__token__Token.ne, bait__token__Token.lt, bait__token__Token.gt, bait__token__Token.le, bait__token__Token.ge, bait__token__Token.key_is], length: 7 })
const bait__token__MATH_KINDS = new bait_Array({ data: [bait__token__Token.plus, bait__token__Token.minus, bait__token__Token.mul, bait__token__Token.div, bait__token__Token.mod], length: 5 })
const bait__token__OTHER_INFIXES = new bait_Array({ data: [bait__token__Token.key_and, bait__token__Token.key_or], length: 2 })
function bait__token__Token_is_compare(kind) {
	return Array_contains(bait__token__COMPARE_KINDS, kind)
}

function bait__token__Token_is_infix(kind) {
	return bait__token__Token_is_compare(kind) || Array_contains(bait__token__MATH_KINDS, kind) || Array_contains(bait__token__OTHER_INFIXES, kind)
}

const bait__token__ASSIGN_KINDS = new bait_Array({ data: [bait__token__Token.decl_assign, bait__token__Token.assign, bait__token__Token.plus_assign, bait__token__Token.minus_assign, bait__token__Token.mul_assign, bait__token__Token.div_assign, bait__token__Token.mod_assign], length: 7 })
function bait__token__Token_is_assign(kind) {
	return Array_contains(bait__token__ASSIGN_KINDS, kind)
}

function bait__token__Token_js_repr(kind) {
	let _t37 = undefined
	switch (kind) {
		case bait__token__Token.key_break:
			{
				_t37 = from_js_string("break")
				break
			}
		case bait__token__Token.key_continue:
			{
				_t37 = from_js_string("continue")
				break
			}
		case bait__token__Token.key_is:
			{
				_t37 = from_js_string("instanceof")
				break
			}
		case bait__token__Token.mul:
			{
				_t37 = from_js_string("*")
				break
			}
		case bait__token__Token.div:
			{
				_t37 = from_js_string("/")
				break
			}
		case bait__token__Token.mod:
			{
				_t37 = from_js_string("%")
				break
			}
		case bait__token__Token.plus:
			{
				_t37 = from_js_string("+")
				break
			}
		case bait__token__Token.minus:
			{
				_t37 = from_js_string("-")
				break
			}
		case bait__token__Token.mul_assign:
			{
				_t37 = from_js_string("*=")
				break
			}
		case bait__token__Token.div_assign:
			{
				_t37 = from_js_string("/=")
				break
			}
		case bait__token__Token.mod_assign:
			{
				_t37 = from_js_string("%=")
				break
			}
		case bait__token__Token.plus_assign:
			{
				_t37 = from_js_string("+=")
				break
			}
		case bait__token__Token.minus_assign:
			{
				_t37 = from_js_string("-=")
				break
			}
		case bait__token__Token.decl_assign:
		case bait__token__Token.assign:
			{
				_t37 = from_js_string("=")
				break
			}
		case bait__token__Token.eq:
			{
				_t37 = from_js_string("==")
				break
			}
		case bait__token__Token.ne:
			{
				_t37 = from_js_string("!=")
				break
			}
		case bait__token__Token.lt:
			{
				_t37 = from_js_string("<")
				break
			}
		case bait__token__Token.gt:
			{
				_t37 = from_js_string(">")
				break
			}
		case bait__token__Token.le:
			{
				_t37 = from_js_string("<=")
				break
			}
		case bait__token__Token.ge:
			{
				_t37 = from_js_string(">=")
				break
			}
		case bait__token__Token.key_and:
			{
				_t37 = from_js_string("&&")
				break
			}
		case bait__token__Token.key_not:
			{
				_t37 = from_js_string("!")
				break
			}
		case bait__token__Token.key_or:
			{
				_t37 = from_js_string("||")
				break
			}
		default:
			{
				_t37 = from_js_string("")
				break
			}
	}
	return _t37
}

function bait__token__Token_c_repr(kind) {
	let _t38 = undefined
	switch (kind) {
		case bait__token__Token.amp:
			{
				_t38 = from_js_string("&")
				break
			}
		case bait__token__Token.caret:
			{
				_t38 = from_js_string("*")
				break
			}
		default:
			{
				_t38 = bait__token__Token_js_repr(kind)
				break
			}
	}
	return _t38
}

function bait__token__Token_str(kind) {
	let _t39 = undefined
	switch (kind) {
		case bait__token__Token.unknown:
			{
				_t39 = from_js_string("unknown")
				break
			}
		case bait__token__Token.eof:
			{
				_t39 = from_js_string("eof")
				break
			}
		case bait__token__Token.attr:
			{
				_t39 = from_js_string("attr")
				break
			}
		case bait__token__Token.name:
			{
				_t39 = from_js_string("name")
				break
			}
		case bait__token__Token.string:
			{
				_t39 = from_js_string("string")
				break
			}
		case bait__token__Token.char:
			{
				_t39 = from_js_string("char")
				break
			}
		case bait__token__Token.number:
			{
				_t39 = from_js_string("number")
				break
			}
		case bait__token__Token.dot:
			{
				_t39 = from_js_string("dot")
				break
			}
		case bait__token__Token.colon:
			{
				_t39 = from_js_string("colon")
				break
			}
		case bait__token__Token.comma:
			{
				_t39 = from_js_string("comma")
				break
			}
		case bait__token__Token.semicolon:
			{
				_t39 = from_js_string("semicolon")
				break
			}
		case bait__token__Token.plus:
			{
				_t39 = from_js_string("plus")
				break
			}
		case bait__token__Token.minus:
			{
				_t39 = from_js_string("minus")
				break
			}
		case bait__token__Token.mul:
			{
				_t39 = from_js_string("mul")
				break
			}
		case bait__token__Token.div:
			{
				_t39 = from_js_string("div")
				break
			}
		case bait__token__Token.mod:
			{
				_t39 = from_js_string("mod")
				break
			}
		case bait__token__Token.assign:
			{
				_t39 = from_js_string("assign")
				break
			}
		case bait__token__Token.decl_assign:
			{
				_t39 = from_js_string("decl_assign")
				break
			}
		case bait__token__Token.plus_assign:
			{
				_t39 = from_js_string("plus_assign")
				break
			}
		case bait__token__Token.minus_assign:
			{
				_t39 = from_js_string("minus_assign")
				break
			}
		case bait__token__Token.mul_assign:
			{
				_t39 = from_js_string("mul_assign")
				break
			}
		case bait__token__Token.div_assign:
			{
				_t39 = from_js_string("div_assign")
				break
			}
		case bait__token__Token.mod_assign:
			{
				_t39 = from_js_string("mod_assign")
				break
			}
		case bait__token__Token.eq:
			{
				_t39 = from_js_string("eq")
				break
			}
		case bait__token__Token.ne:
			{
				_t39 = from_js_string("ne")
				break
			}
		case bait__token__Token.lt:
			{
				_t39 = from_js_string("lt")
				break
			}
		case bait__token__Token.gt:
			{
				_t39 = from_js_string("gt")
				break
			}
		case bait__token__Token.le:
			{
				_t39 = from_js_string("le")
				break
			}
		case bait__token__Token.ge:
			{
				_t39 = from_js_string("ge")
				break
			}
		case bait__token__Token.lpar:
			{
				_t39 = from_js_string("lpar")
				break
			}
		case bait__token__Token.rpar:
			{
				_t39 = from_js_string("rpar")
				break
			}
		case bait__token__Token.lsqr:
			{
				_t39 = from_js_string("lsqr")
				break
			}
		case bait__token__Token.rsqr:
			{
				_t39 = from_js_string("rsqr")
				break
			}
		case bait__token__Token.lcur:
			{
				_t39 = from_js_string("lcur")
				break
			}
		case bait__token__Token.rcur:
			{
				_t39 = from_js_string("rcur")
				break
			}
		case bait__token__Token.amp:
			{
				_t39 = from_js_string("amp")
				break
			}
		case bait__token__Token.caret:
			{
				_t39 = from_js_string("caret")
				break
			}
		case bait__token__Token.pipe:
			{
				_t39 = from_js_string("pipe")
				break
			}
		case bait__token__Token.dollar:
			{
				_t39 = from_js_string("dollar")
				break
			}
		case bait__token__Token.hash:
			{
				_t39 = from_js_string("hash")
				break
			}
		case bait__token__Token.key_and:
			{
				_t39 = from_js_string("key_and")
				break
			}
		case bait__token__Token.key_as:
			{
				_t39 = from_js_string("key_as")
				break
			}
		case bait__token__Token.key_assert:
			{
				_t39 = from_js_string("key_assert")
				break
			}
		case bait__token__Token.key_break:
			{
				_t39 = from_js_string("key_break")
				break
			}
		case bait__token__Token.key_const:
			{
				_t39 = from_js_string("key_const")
				break
			}
		case bait__token__Token.key_continue:
			{
				_t39 = from_js_string("key_continue")
				break
			}
		case bait__token__Token.key_else:
			{
				_t39 = from_js_string("key_else")
				break
			}
		case bait__token__Token.key_enum:
			{
				_t39 = from_js_string("key_enum")
				break
			}
		case bait__token__Token.key_false:
			{
				_t39 = from_js_string("key_false")
				break
			}
		case bait__token__Token.key_for:
			{
				_t39 = from_js_string("key_for")
				break
			}
		case bait__token__Token.key_fun:
			{
				_t39 = from_js_string("key_fun")
				break
			}
		case bait__token__Token.key_global:
			{
				_t39 = from_js_string("key_global")
				break
			}
		case bait__token__Token.key_if:
			{
				_t39 = from_js_string("key_if")
				break
			}
		case bait__token__Token.key_import:
			{
				_t39 = from_js_string("key_import")
				break
			}
		case bait__token__Token.key_in:
			{
				_t39 = from_js_string("key_in")
				break
			}
		case bait__token__Token.key_interface:
			{
				_t39 = from_js_string("key_interface")
				break
			}
		case bait__token__Token.key_is:
			{
				_t39 = from_js_string("key_is")
				break
			}
		case bait__token__Token.key_match:
			{
				_t39 = from_js_string("key_match")
				break
			}
		case bait__token__Token.key_mut:
			{
				_t39 = from_js_string("key_mut")
				break
			}
		case bait__token__Token.key_not:
			{
				_t39 = from_js_string("key_not")
				break
			}
		case bait__token__Token.key_or:
			{
				_t39 = from_js_string("key_or")
				break
			}
		case bait__token__Token.key_package:
			{
				_t39 = from_js_string("key_package")
				break
			}
		case bait__token__Token.key_pub:
			{
				_t39 = from_js_string("key_pub")
				break
			}
		case bait__token__Token.key_return:
			{
				_t39 = from_js_string("key_return")
				break
			}
		case bait__token__Token.key_struct:
			{
				_t39 = from_js_string("key_struct")
				break
			}
		case bait__token__Token.key_true:
			{
				_t39 = from_js_string("key_true")
				break
			}
		case bait__token__Token.key_type:
			{
				_t39 = from_js_string("key_type")
				break
			}
		case bait__token__Token.key_typeof:
			{
				_t39 = from_js_string("key_typeof")
				break
			}
	}
	return _t39
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
function bait__errors__Message_print(msg) {
	if (eq(msg.path.length, 0)) {
		bait__errors__generic_error(msg.msg)
		return
	}
	bait__errors__message(msg.kind, msg.title, msg.path, msg.pos, msg.msg)
}

function Array_bait__errors__Message_print_and_exit(msgs) {
	for (let _t41 = 0; _t41 < msgs.length; _t41++) {
		const msg = Array_get(msgs, _t41)
		bait__errors__Message_print(msg)
	}
	if (i32(msgs.length > 0)) {
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
	eprintln(from_js_string(`${title.str}: ${msg.str}`))
}

function bait__errors__message(kind, title, path, pos, msg) {
	const file_line = bait__errors__bold(from_js_string(`${path.str}:${i32_str(pos.line).str}:${i32_str(pos.col).str}`))
	eprintln(from_js_string(`${file_line.str} ${bait__errors__format_title(kind, title).str}: ${msg.str}`))
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
	let _t45 = undefined
	switch (k) {
		case bait__errors__Kind.info:
			{
				_t45 = term__color__magenta(title)
				break
			}
		case bait__errors__Kind.warning:
			{
				_t45 = term__color__yellow(title)
				break
			}
		case bait__errors__Kind.error:
			{
				_t45 = term__color__red(title)
				break
			}
	}
	return _t45
}


const bait__preference__Backend = {
	js: 0,
	c: 1,
}
function bait__preference__Prefs({ command = from_js_string(""), out_name = from_js_string(""), expected_pkg = from_js_string(""), args = new bait_Array({ data: [], length: 0 }), user_args = new bait_Array({ data: [], length: 0 }), build_options = new bait_Array({ data: [], length: 0 }), should_run = false, is_verbose = false, show_timings = false, backend = 0, is_test = false, is_script = false, is_library = false, keep_exe = false, hide_warnings = false, warn_is_error = false }) {
	this.command = command
	this.out_name = out_name
	this.expected_pkg = expected_pkg
	this.args = args
	this.user_args = user_args
	this.build_options = build_options
	this.should_run = should_run
	this.is_verbose = is_verbose
	this.show_timings = show_timings
	this.backend = backend
	this.is_test = is_test
	this.is_script = is_script
	this.is_library = is_library
	this.keep_exe = keep_exe
	this.hide_warnings = hide_warnings
	this.warn_is_error = warn_is_error
}
function bait__preference__parse_args(args) {
	let p = new bait__preference__Prefs({ backend: bait__preference__Backend.js })
	if (eq(args.length, 0)) {
		p.command = from_js_string("help")
		return p
	}
	let after_double_dash = false
	for (let i = 0; i32(i < args.length); i += 1) {
		const arg = Array_get(args, i)
		switch (arg.str) {
			case from_js_string("-b").str:
			case from_js_string("--backend").str:
				{
					i += 1
					p.backend = bait__preference__backend_from_string(Array_get(args, i))
					Array_push(p.build_options, arg)
					Array_push(p.build_options, Array_get(args, i))
					break
				}
			case from_js_string("-o").str:
			case from_js_string("--out").str:
				{
					i += 1
					p.out_name = Array_get(args, i)
					Array_push(p.build_options, arg)
					Array_push(p.build_options, p.out_name)
					break
				}
			case from_js_string("-v").str:
			case from_js_string("--verbose").str:
				{
					p.is_verbose = true
					Array_push(p.build_options, arg)
					break
				}
			case from_js_string("-k").str:
			case from_js_string("--keep").str:
				{
					p.keep_exe = true
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
					Array_push(p.build_options, arg)
					break
				}
			case from_js_string("-W").str:
				{
					p.warn_is_error = true
					Array_push(p.build_options, arg)
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
			case from_js_string("--timings").str:
				{
					p.show_timings = true
					break
				}
			case from_js_string("--").str:
				{
					after_double_dash = true
					break
				}
			default:
				{
					if (eq(p.command.length, 0)) {
						p.command = arg
					} else if (after_double_dash) {
						Array_push(p.user_args, arg)
					} else {
						Array_push(p.args, arg)
					}
					break
				}
		}
	}
	Array_push_many(p.build_options, p.args)
	if (p.hide_warnings && p.warn_is_error) {
		bait__errors__generic_error(from_js_string("Cannot use -w and -W together."))
		exit(1)
	}
	if (eq(p.command, from_js_string("build"))) {
		p.command = Array_get(p.args, 0)
	}
	if (eq(p.command, from_js_string("run"))) {
		p.command = Array_get(p.args, 0)
		p.should_run = true
	}
	if (eq(p.command, from_js_string("test"))) {
		p.should_run = true
		p.keep_exe = true
		p.is_test = true
	}
	if (eq(p.out_name.length, 0)) {
		let ext = from_js_string("")
		if (eq(p.backend, bait__preference__Backend.js)) {
			ext = from_js_string(".js")
		}
		if (string_ends_with(p.command, from_js_string(".bt"))) {
			p.out_name = string_replace(p.command, from_js_string(".bt"), ext)
		} else {
			p.out_name = string_add(string_all_after_last(os__abs_path(p.command), os__PATH_SEP), ext)
		}
	}
	return p
}

function bait__preference__backend_from_string(s) {
	let _t56 = undefined
	switch (s.str) {
		case from_js_string("js").str:
			{
				_t56 = bait__preference__Backend.js
				break
			}
		case from_js_string("c").str:
			{
				_t56 = bait__preference__Backend.c
				break
			}
		default:
			{
				panic(from_js_string(`Invalid backend: ${s.str}`))
				_t56 = bait__preference__Backend.js
				break
			}
	}
	return _t56
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
function bait__ast__AssignStmt({ left_type = 0, right_type = 0, op = 0, left = undefined, right = undefined, pos = new bait__token__Pos({}) }) {
	this.left_type = left_type
	this.right_type = right_type
	this.op = op
	this.left = left
	this.right = right
	this.pos = pos
}
function bait__ast__ConstDecl({ name = from_js_string(""), expr = undefined, pos = new bait__token__Pos({}), lang = 0, typ = 0 }) {
	this.name = name
	this.expr = expr
	this.pos = pos
	this.lang = lang
	this.typ = typ
}
function bait__ast__EnumDecl({ lang = 0, name = from_js_string(""), fields = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.name = name
	this.fields = fields
	this.pos = pos
}
function bait__ast__EnumField({ expr = undefined, name = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.name = name
	this.pos = pos
}
function bait__ast__ExprStmt({ expr = undefined, typ = 0 }) {
	this.expr = expr
	this.typ = typ
}
function bait__ast__ForLoop({ label = from_js_string(""), cond = undefined, stmts = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.label = label
	this.cond = cond
	this.stmts = stmts
	this.pos = pos
}
function bait__ast__ForClassicLoop({ label = from_js_string(""), init = undefined, cond = undefined, inc = undefined, stmts = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.label = label
	this.init = init
	this.cond = cond
	this.inc = inc
	this.stmts = stmts
	this.pos = pos
}
function bait__ast__ForInLoop({ expr_type = 0, label = from_js_string(""), idxvar = from_js_string(""), valvar = new bait__ast__Param({}), expr = undefined, stmts = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.expr_type = expr_type
	this.label = label
	this.idxvar = idxvar
	this.valvar = valvar
	this.expr = expr
	this.stmts = stmts
	this.pos = pos
}
function bait__ast__AnonFun({ decl = new bait__ast__FunDecl({}), typ = 0, pos = new bait__token__Pos({}) }) {
	this.decl = decl
	this.typ = typ
	this.pos = pos
}
function bait__ast__FunDecl({ is_pub = false, lang = 0, name = from_js_string(""), pkg = from_js_string(""), params = new bait_Array({ data: [], length: 0 }), return_type = 0, is_test = false, attrs = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}), is_method = false, stmts = new bait_Array({ data: [], length: 0 }), generic_names = new bait_Array({ data: [], length: 0 }), concrete_types = new bait_Array({ data: [], length: 0 }) }) {
	this.is_pub = is_pub
	this.lang = lang
	this.name = name
	this.pkg = pkg
	this.params = params
	this.return_type = return_type
	this.is_test = is_test
	this.attrs = attrs
	this.pos = pos
	this.is_method = is_method
	this.stmts = stmts
	this.generic_names = generic_names
	this.concrete_types = concrete_types
}
function bait__ast__Param({ is_mut = false, name = from_js_string(""), typ = 0, pos = new bait__token__Pos({}) }) {
	this.is_mut = is_mut
	this.name = name
	this.typ = typ
	this.pos = pos
}
function bait__ast__LoopControlStmt({ kind = 0, label = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.kind = kind
	this.label = label
	this.pos = pos
}
function bait__ast__GlobalDecl({ name = from_js_string(""), expr = undefined, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.expr = expr
	this.pos = pos
}
function bait__ast__InterfaceDecl({ lang = 0, name = from_js_string(""), typ = 0, methods = new bait_Array({ data: [], length: 0 }), fields = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.name = name
	this.typ = typ
	this.methods = methods
	this.fields = fields
	this.pos = pos
}
function bait__ast__ReturnStmt({ expr = undefined, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.pos = pos
}
function bait__ast__StructDecl({ lang = 0, pkg_prefix = from_js_string(""), name = from_js_string(""), typ = 0, fields = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.pkg_prefix = pkg_prefix
	this.name = name
	this.typ = typ
	this.fields = fields
	this.pos = pos
}
function bait__ast__StructField({ name = from_js_string(""), typ = 0, expr = new bait__ast__EmptyExpr({}), pos = new bait__token__Pos({}), is_mut = false, is_pub = false, is_global = false, attrs = new bait_Array({ data: [], length: 0 }) }) {
	this.name = name
	this.typ = typ
	this.expr = expr
	this.pos = pos
	this.is_mut = is_mut
	this.is_pub = is_pub
	this.is_global = is_global
	this.attrs = attrs
}
function bait__ast__TypeDecl({ lang = 0, name = from_js_string(""), typ = 0, pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.name = name
	this.typ = typ
	this.pos = pos
}
function bait__ast__ArrayInit({ typ = 0, elem_type = 0, exprs = new bait_Array({ data: [], length: 0 }), length_expr = new bait__ast__EmptyExpr({}), cap_expr = new bait__ast__EmptyExpr({}), pos = new bait__token__Pos({}) }) {
	this.typ = typ
	this.elem_type = elem_type
	this.exprs = exprs
	this.length_expr = length_expr
	this.cap_expr = cap_expr
	this.pos = pos
}
function bait__ast__AsCast({ expr_type = 0, expr = undefined, target = 0, pos = new bait__token__Pos({}) }) {
	this.expr_type = expr_type
	this.expr = expr
	this.target = target
	this.pos = pos
}
function bait__ast__BoolLiteral({ val = false, pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
function bait__ast__CallExpr({ lang = 0, name = from_js_string(""), return_type = 0, left_type = 0, left = new bait__ast__EmptyExpr({}), concrete_types = new bait_Array({ data: [], length: 0 }), args = new bait_Array({ data: [], length: 0 }), is_method = false, pkg = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.name = name
	this.return_type = return_type
	this.left_type = left_type
	this.left = left
	this.concrete_types = concrete_types
	this.args = args
	this.is_method = is_method
	this.pkg = pkg
	this.pos = pos
}
function bait__ast__CallArg({ typ = 0, expr = undefined }) {
	this.typ = typ
	this.expr = expr
}
function bait__ast__CharLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
function bait__ast__ComptimeVar({ name = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.pos = pos
}
function bait__ast__EnumVal({ name = from_js_string(""), typ = 0, val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.typ = typ
	this.val = val
	this.pos = pos
}
function bait__ast__FloatLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
function bait__ast__HashExpr({ lang = 0, val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.val = val
	this.pos = pos
}
function bait__ast__Ident({ name = from_js_string(""), is_mut = false, pkg = from_js_string(""), pos = new bait__token__Pos({}), lang = 0 }) {
	this.name = name
	this.is_mut = is_mut
	this.pkg = pkg
	this.pos = pos
	this.lang = lang
}
function bait__ast__IfExpr({ typ = bait__ast__VOID_TYPE, has_else = false, branches = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.typ = typ
	this.has_else = has_else
	this.branches = branches
	this.pos = pos
}
function bait__ast__IfBranch({ cond = undefined, stmts = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.cond = cond
	this.stmts = stmts
	this.pos = pos
}
function bait__ast__IndexExpr({ is_selector = false, left_type = 0, left = undefined, index = undefined, pos = new bait__token__Pos({}) }) {
	this.is_selector = is_selector
	this.left_type = left_type
	this.left = left
	this.index = index
	this.pos = pos
}
function bait__ast__InfixExpr({ left_type = 0, right_type = 0, left = undefined, right = undefined, op = 0, pos = new bait__token__Pos({}) }) {
	this.left_type = left_type
	this.right_type = right_type
	this.left = left
	this.right = right
	this.op = op
	this.pos = pos
}
function bait__ast__IntegerLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
function bait__ast__MatchExpr({ cond_type = 0, is_sumtype = false, typ = bait__ast__VOID_TYPE, cond = undefined, branches = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.cond_type = cond_type
	this.is_sumtype = is_sumtype
	this.typ = typ
	this.cond = cond
	this.branches = branches
	this.pos = pos
}
function bait__ast__MatchBranch({ exprs = new bait_Array({ data: [], length: 0 }), expr_types = new bait_Array({ data: [], length: 0 }), stmts = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.exprs = exprs
	this.expr_types = expr_types
	this.stmts = stmts
	this.pos = pos
}
function bait__ast__MapInit({ typ = 0, key_type = 0, val_type = 0, keys = new bait_Array({ data: [], length: 0 }), vals = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.typ = typ
	this.key_type = key_type
	this.val_type = val_type
	this.keys = keys
	this.vals = vals
	this.pos = pos
}
function bait__ast__ParExpr({ expr = undefined, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.pos = pos
}
function bait__ast__PrefixExpr({ op = 0, right = undefined, pos = new bait__token__Pos({}) }) {
	this.op = op
	this.right = right
	this.pos = pos
}
function bait__ast__SelectorExpr({ expr_type = 0, expr = undefined, field_name = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.expr_type = expr_type
	this.expr = expr
	this.field_name = field_name
	this.pos = pos
}
function bait__ast__StringLiteral({ lang = 0, val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.val = val
	this.pos = pos
}
function bait__ast__StringInterLiteral({ vals = new bait_Array({ data: [], length: 0 }), exprs = new bait_Array({ data: [], length: 0 }), expr_types = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.vals = vals
	this.exprs = exprs
	this.expr_types = expr_types
	this.pos = pos
}
function bait__ast__StructInit({ typ = 0, fields = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}), name = from_js_string("") }) {
	this.typ = typ
	this.fields = fields
	this.pos = pos
	this.name = name
}
function bait__ast__StructInitField({ name = from_js_string(""), expr = undefined, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.expr = expr
	this.pos = pos
}
function bait__ast__TypeOf({ typ = 0, expr = undefined, pos = new bait__token__Pos({}) }) {
	this.typ = typ
	this.expr = expr
	this.pos = pos
}
function bait__ast__EmptyExpr({ pos = new bait__token__Pos({}) }) {
	this.pos = pos
}
function bait__ast__EmptyStmt({ pos = new bait__token__Pos({}) }) {
	this.pos = pos
}
function bait__ast__PackageDecl({ name = from_js_string(""), full_name = from_js_string("") }) {
	this.name = name
	this.full_name = full_name
}
function bait__ast__Import({ name = from_js_string(""), alias = from_js_string(""), lang = 0, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.alias = alias
	this.lang = lang
	this.pos = pos
}
function bait__ast__File({ infos = new bait_Array({ data: [], length: 0 }), warnings = new bait_Array({ data: [], length: 0 }), errors = new bait_Array({ data: [], length: 0 }), path = from_js_string(""), pkg_decl = new bait__ast__PackageDecl({}), imports = new bait_Array({ data: [], length: 0 }), stmts = new bait_Array({ data: [], length: 0 }) }) {
	this.infos = infos
	this.warnings = warnings
	this.errors = errors
	this.path = path
	this.pkg_decl = pkg_decl
	this.imports = imports
	this.stmts = stmts
}

function bait__ast__Attribute({ name = from_js_string(""), value = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.value = value
	this.pos = pos
}
function Array_bait__ast__Attribute_find_attr(attrs, name) {
	for (let _t61 = 0; _t61 < attrs.length; _t61++) {
		const attr = Array_get(attrs, _t61)
		if (eq(attr.name, name)) {
			return attr
		}
	}
	return new bait__ast__Attribute({})
}


const bait__ast__Language = {
	bait: 0,
	c: 1,
	js: 2,
}
function bait__ast__Language_prepend_to(l, s) {
	if (eq(l, bait__ast__Language.bait)) {
		return s
	}
	if (eq(l, bait__ast__Language.c)) {
		return string_add(from_js_string("C."), s)
	}
	if (eq(l, bait__ast__Language.js)) {
		return string_add(from_js_string("JS."), s)
	}
	return s
}

function bait__ast__prefix_to_lang(p) {
	if (eq(p, from_js_string("C"))) {
		return bait__ast__Language.c
	}
	if (eq(p, from_js_string("JS"))) {
		return bait__ast__Language.js
	}
	return bait__ast__Language.bait
}


function bait__ast__Scope({ parent = this, objects = new map({ data: new Map([]), length: 0 }) }) {
	this.parent = parent
	this.objects = objects
}
function bait__ast__ScopeObject({ typ = 0, kind = 0, is_pub = false, is_mut = false, pkg = from_js_string(""), expr = new bait__ast__EmptyExpr({}) }) {
	this.typ = typ
	this.kind = kind
	this.is_pub = is_pub
	this.is_mut = is_mut
	this.pkg = pkg
	this.expr = expr
}
const bait__ast__ObjectKind = {
	unknown: 0,
	variable: 1,
	constant: 2,
	function: 3,
	global_: 4,
	package_: 5,
	label: 6,
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


function bait__ast__Table({ global_scope = new bait__ast__Scope({}), fun_decls = new map({ data: new Map([]), length: 0 }), type_idxs = new map({ data: new Map([]), length: 0 }), type_symbols = new bait_Array({ data: [], length: 0 }), redefined_funs = new bait_Array({ data: [], length: 0 }), needed_equality_funs = new bait_Array({ data: [], length: 0 }), needed_str_funs = new bait_Array({ data: [], length: 0 }), generic_fun_types = new map({ data: new Map([]), length: 0 }) }) {
	this.global_scope = global_scope
	this.fun_decls = fun_decls
	this.type_idxs = type_idxs
	this.type_symbols = type_symbols
	this.redefined_funs = redefined_funs
	this.needed_equality_funs = needed_equality_funs
	this.needed_str_funs = needed_str_funs
	this.generic_fun_types = generic_fun_types
}
function bait__ast__new_table() {
	let t = new bait__ast__Table({ global_scope: new bait__ast__Scope({ parent: 0 }) })
	bait__ast__Table_register_builtins(t)
	return t
}

function bait__ast__Table_get_idx(t, name) {
	return map_get_set(t.type_idxs, name, 0)
}

function bait__ast__Table_get_sym(t, typ) {
	return Array_get(t.type_symbols, bait__ast__Type_idx(typ))
}

function bait__ast__Table_get_final_sym(t, typ) {
	let s = bait__ast__Table_get_sym(t, typ)
	while (eq(s.kind, bait__ast__TypeKind.alias_type)) {
		s = bait__ast__Table_get_sym(t, s.parent)
	}
	return s
}

function bait__ast__Table_type_name(t, typ) {
	const amps = string_repeat(from_js_string("&"), bait__ast__Type_get_nr_amp(typ))
	return string_add(amps, bait__ast__Table_get_sym(t, typ).name)
}

function bait__ast__Table_register_sym(t, sym) {
	const idx = bait__ast__Table_get_idx(t, sym.name)
	if (idx > 0) {
		const cur_sym = bait__ast__Table_get_sym(t, idx)
		if (eq(cur_sym.kind, bait__ast__TypeKind.placeholder)) {
			let new_sym = sym
			new_sym.methods = cur_sym.methods
			Array_set(t.type_symbols, idx, new_sym)
			return idx
		}
		if (Array_contains(bait__ast__BUILTIN_STRUCT_TYPES, idx)) {
			let new_sym = sym
			new_sym.kind = cur_sym.kind
			Array_set(t.type_symbols, idx, new_sym)
			return idx
		}
	}
	const new_idx = t.type_symbols.length
	Array_push(t.type_symbols, sym)
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
	for (let _t77 = 0; _t77 < param_types.length; _t77++) {
		const param = Array_get(param_types, _t77)
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
		for (let _t79 = 0; _t79 < s.methods.length; _t79++) {
			const m = Array_get(s.methods, _t79)
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
function bait__ast__EnumInfo({ vals = new bait_Array({ data: [], length: 0 }) }) {
	this.vals = vals
}
function bait__ast__FunInfo({ param_types = new bait_Array({ data: [], length: 0 }), return_type = 0 }) {
	this.param_types = param_types
	this.return_type = return_type
}
function bait__ast__MapInfo({ key_type = 0, val_type = 0 }) {
	this.key_type = key_type
	this.val_type = val_type
}
function bait__ast__StructInfo({ fields = new bait_Array({ data: [], length: 0 }) }) {
	this.fields = fields
}
function bait__ast__SumTypeInfo({ variants = new bait_Array({ data: [], length: 0 }) }) {
	this.variants = variants
}
function bait__ast__EmptyInfo({ }) {
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

function bait__ast__Type_idx(t) {
	return i32((t) % 65536)
}

function bait__ast__Type_set_nr_amp(t, n) {
	return bait__ast__new_type(i32(bait__ast__Type_idx(t) + (i32(n * 65536))))
}

function bait__ast__Type_get_nr_amp(t) {
	return i32((i32(t - bait__ast__Type_idx(t))) / 65536)
}

const bait__ast__BUILTIN_STRUCT_TYPES = new bait_Array({ data: [bait__ast__STRING_TYPE, bait__ast__ARRAY_TYPE, bait__ast__MAP_TYPE], length: 3 })
const bait__ast__TypeKind = {
	other: 0,
	placeholder: 1,
	number: 2,
	string: 3,
	array: 4,
	map: 5,
	interface_: 6,
	struct_: 7,
	enum_: 8,
	alias_type: 9,
	sum_type: 10,
	fun_: 11,
	generic: 12,
}
function bait__ast__TypeSymbol({ name = from_js_string(""), kind = 0, methods = new bait_Array({ data: [], length: 0 }), parent = 0, overloads = new map({ data: new Map([]), length: 0 }), is_pub = false, pkg = from_js_string(""), info = new bait__ast__EmptyInfo({}) }) {
	this.name = name
	this.kind = kind
	this.methods = methods
	this.parent = parent
	this.overloads = overloads
	this.is_pub = is_pub
	this.pkg = pkg
	this.info = info
}
function bait__ast__TypeSymbol_find_field(sym, name, t) {
	if (sym.info instanceof bait__ast__StructInfo) {
		const info = sym.info
		for (let _t83 = 0; _t83 < info.fields.length; _t83++) {
			const f = Array_get(info.fields, _t83)
			if (eq(f.name, name)) {
				return f
			}
		}
	}
	if (Array_contains(bait__ast__BUILTIN_STRUCT_TYPES, sym.parent)) {
		const parent_sym = bait__ast__Table_get_sym(t, sym.parent)
		return bait__ast__TypeSymbol_find_field(parent_sym, name, t)
	}
	return new bait__ast__StructField({})
}

function bait__ast__TypeSymbol_has_method(sym, name) {
	for (let _t86 = 0; _t86 < sym.methods.length; _t86++) {
		const m = Array_get(sym.methods, _t86)
		if (eq(m.name, name)) {
			return true
		}
	}
	return false
}

function bait__ast__Table_register_builtins(t) {
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("placeholder"), kind: bait__ast__TypeKind.placeholder }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("void") }))
	bait__ast__Table_register_num(t, from_js_string("i8"))
	bait__ast__Table_register_num(t, from_js_string("i16"))
	bait__ast__Table_register_num(t, from_js_string("i32"))
	bait__ast__Table_register_num(t, from_js_string("i64"))
	bait__ast__Table_register_num(t, from_js_string("u8"))
	bait__ast__Table_register_num(t, from_js_string("u16"))
	bait__ast__Table_register_num(t, from_js_string("u32"))
	bait__ast__Table_register_num(t, from_js_string("u64"))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("f32") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("f64") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("bool") }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("string"), kind: bait__ast__TypeKind.string }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("Array"), kind: bait__ast__TypeKind.array }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("map"), kind: bait__ast__TypeKind.map }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("any") }))
}

function bait__ast__Table_register_num(t, name) {
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: name, kind: bait__ast__TypeKind.number, is_pub: true }))
}


function bait__lexer__Lexer({ val = from_js_string(""), text = from_js_string(""), line_starts = new bait_Array({ data: [], length: 0 }), start = 0, pos = 0, insert_semi = false, is_str_interpol = false, str_quote = 0 }) {
	this.val = val
	this.text = text
	this.line_starts = line_starts
	this.start = start
	this.pos = pos
	this.insert_semi = insert_semi
	this.is_str_interpol = is_str_interpol
	this.str_quote = str_quote
}
function bait__lexer__Lexer_init(l, text) {
	l.text = text
	l.line_starts = new bait_Array({ data: [0], length: 1 })
	l.pos = 0
}

function bait__lexer__Lexer_get_pos(l) {
	return new bait__token__Pos({ line: l.line_starts.length, col: i32(l.start - Array_last(l.line_starts)) })
}

function bait__lexer__Lexer_next(l) {
	bait__lexer__Lexer_skip_whitespace(l)
	l.start = l.pos
	if (eq(l.pos, l.text.length)) {
		return bait__token__Token.eof
	}
	const c = string_get(l.text, l.pos)
	l.pos += 1
	l.insert_semi = false
	if (bait__lexer__is_name_start_char(c)) {
		return bait__lexer__Lexer_name_or_key(l)
	}
	if (bait__lexer__is_digit(c)) {
		return bait__lexer__Lexer_number(l)
	}
	if (eq(c, u8("'")) || eq(c, u8("\""))) {
		return bait__lexer__Lexer_string_val(l, c)
	}
	if (l.is_str_interpol && eq(c, u8("}"))) {
		l.is_str_interpol = false
		return bait__lexer__Lexer_string_val(l, l.str_quote)
	}
	if (eq(c, u8("\`"))) {
		return bait__lexer__Lexer_char_val(l)
	}
	if (eq(c, u8("#"))) {
		l.pos += 1
		bait__lexer__Lexer_name_val(l)
		return bait__token__Token.hash
	}
	if (eq(c, u8("@"))) {
		l.pos += 1
		bait__lexer__Lexer_name_val(l)
		return bait__token__Token.attr
	}
	return bait__lexer__Lexer_simple_token(l, c)
}

function bait__lexer__Lexer_simple_token(l, c) {
	l.val = from_js_string("")
	switch (c) {
		case u8("\n"):
			{
				Array_push(l.line_starts, l.pos)
				return bait__token__Token.semicolon
				break
			}
		case u8("."):
			{
				return bait__token__Token.dot
				break
			}
		case u8(","):
			{
				return bait__token__Token.comma
				break
			}
		case u8("+"):
			{
				if (eq(string_get(l.text, l.pos), u8("="))) {
					l.pos += 1
					return bait__token__Token.plus_assign
				}
				return bait__token__Token.plus
				break
			}
		case u8("-"):
			{
				if (eq(string_get(l.text, l.pos), u8("="))) {
					l.pos += 1
					return bait__token__Token.minus_assign
				}
				return bait__token__Token.minus
				break
			}
		case u8("*"):
			{
				if (eq(string_get(l.text, l.pos), u8("="))) {
					l.pos += 1
					return bait__token__Token.mul_assign
				}
				return bait__token__Token.mul
				break
			}
		case u8("/"):
			{
				const c2 = string_get(l.text, l.pos)
				if (eq(c2, u8("="))) {
					l.pos += 1
					return bait__token__Token.div_assign
				}
				if (eq(c2, u8("/"))) {
					bait__lexer__Lexer_skip_line(l)
					return bait__lexer__Lexer_next(l)
				}
				return bait__token__Token.div
				break
			}
		case u8("%"):
			{
				if (eq(string_get(l.text, l.pos), u8("="))) {
					l.pos += 1
					return bait__token__Token.mod_assign
				}
				return bait__token__Token.mod
				break
			}
		case u8("="):
			{
				if (eq(string_get(l.text, l.pos), u8("="))) {
					l.pos += 1
					return bait__token__Token.eq
				}
				return bait__token__Token.assign
				break
			}
		case u8(":"):
			{
				if (eq(string_get(l.text, l.pos), u8("="))) {
					l.pos += 1
					return bait__token__Token.decl_assign
				}
				return bait__token__Token.colon
				break
			}
		case u8(";"):
			{
				return bait__token__Token.semicolon
				break
			}
		case u8("!"):
			{
				if (eq(string_get(l.text, l.pos), u8("="))) {
					l.pos += 1
					return bait__token__Token.ne
				}
				return bait__lexer__Lexer_unknown_char(l, c)
				break
			}
		case u8("<"):
			{
				if (eq(string_get(l.text, l.pos), u8("="))) {
					l.pos += 1
					return bait__token__Token.le
				}
				return bait__token__Token.lt
				break
			}
		case u8(">"):
			{
				if (eq(string_get(l.text, l.pos), u8("="))) {
					l.pos += 1
					return bait__token__Token.ge
				}
				return bait__token__Token.gt
				break
			}
		case u8("("):
			{
				return bait__token__Token.lpar
				break
			}
		case u8(")"):
			{
				return bait__token__Token.rpar
				break
			}
		case u8("["):
			{
				return bait__token__Token.lsqr
				break
			}
		case u8("]"):
			{
				l.insert_semi = true
				return bait__token__Token.rsqr
				break
			}
		case u8("{"):
			{
				return bait__token__Token.lcur
				break
			}
		case u8("}"):
			{
				return bait__token__Token.rcur
				break
			}
		case u8("&"):
			{
				return bait__token__Token.amp
				break
			}
		case u8("|"):
			{
				return bait__token__Token.pipe
				break
			}
		case u8("^"):
			{
				return bait__token__Token.caret
				break
			}
		case u8("$"):
			{
				return bait__token__Token.dollar
				break
			}
		default:
			{
				return bait__lexer__Lexer_unknown_char(l, c)
				break
			}
	}
}

function bait__lexer__Lexer_name_val(l) {
	l.start = i32(l.pos - 1)
	while (i32(l.pos < l.text.length) && bait__lexer__is_name_char(string_get(l.text, l.pos))) {
		l.pos += 1
	}
	l.val = string_substr(l.text, l.start, l.pos)
}

function bait__lexer__Lexer_name_or_key(l) {
	bait__lexer__Lexer_name_val(l)
	const tok = bait__token__kind_from_string(l.val)
	if (eq(tok, bait__token__Token.key_return)) {
		l.insert_semi = true
	}
	return tok
}

function bait__lexer__Lexer_number(l) {
	l.start = i32(l.pos - 1)
	while (i32(l.pos < l.text.length) && bait__lexer__is_digit(string_get(l.text, l.pos))) {
		l.pos += 1
	}
	l.val = string_substr(l.text, l.start, l.pos)
	return bait__token__Token.number
}

function bait__lexer__Lexer_string_val(l, quote) {
	const is_foreign = eq(string_get(l.text, i32(l.pos - 2)), u8("."))
	l.start = l.pos
	while (i32(l.pos < l.text.length)) {
		const c = string_get(l.text, l.pos)
		l.pos += 1
		if (eq(c, quote)) {
			l.val = string_substr(l.text, l.start, i32(l.pos - 1))
			return bait__token__Token.string
		}
		if (eq(c, u8("\n"))) {
			Array_push(l.line_starts, l.pos)
		} else if (eq(c, u8("\\"))) {
			l.pos += 1
		} else if (!is_foreign && eq(c, u8("$")) && eq(string_get(l.text, l.pos), u8("{"))) {
			l.is_str_interpol = true
			l.str_quote = quote
			l.pos -= 1
			l.val = string_substr(l.text, l.start, l.pos)
			return bait__token__Token.string
		}
	}
	l.start = l.pos
	l.val = from_js_string("unclosed string literal")
	return bait__token__Token.unknown
}

function bait__lexer__Lexer_char_val(l) {
	l.start = l.pos
	while (i32(l.pos < l.text.length)) {
		const c = string_get(l.text, l.pos)
		l.pos += 1
		if (eq(c, u8("\`"))) {
			break
		}
		if (eq(c, u8("\\"))) {
			l.pos += 1
		}
	}
	l.val = string_substr(l.text, l.start, i32(l.pos - 1))
	return bait__token__Token.char
}

function bait__lexer__Lexer_unknown_char(l, c) {
	l.val = from_js_string(`unknown char ${u8_ascii(c).str}`)
	return bait__token__Token.unknown
}

function bait__lexer__Lexer_skip_whitespace(l) {
	while (i32(l.pos < l.text.length)) {
		const c = string_get(l.text, l.pos)
		if (eq(c, u8("\n"))) {
			if (l.insert_semi) {
				return
			}
			l.pos += 1
			Array_push(l.line_starts, l.pos)
		} else if (eq(c, u8(" ")) || eq(c, u8("\t")) || eq(c, u8("\r"))) {
			l.pos += 1
		} else {
			break
		}
	}
}

function bait__lexer__Lexer_skip_line(l) {
	while (i32(l.pos < l.text.length) && !eq(string_get(l.text, l.pos), u8("\n"))) {
		l.pos += 1
	}
	l.pos += 1
	Array_push(l.line_starts, l.pos)
}

function bait__lexer__is_name_start_char(c) {
	return u8(c >= u8("a")) && u8(c <= u8("z")) || u8(c >= u8("A")) && u8(c <= u8("Z")) || eq(c, u8("_"))
}

function bait__lexer__is_name_char(c) {
	return bait__lexer__is_name_start_char(c) || bait__lexer__is_digit(c)
}

function bait__lexer__is_digit(c) {
	return u8(c >= u8("0")) && u8(c <= u8("9"))
}


function bait__parser__Parser_expr(p, precedence) {
	let node = bait__parser__Parser_single_expr(p)
	while (precedence < bait__token__Token_precedence(p.tok)) {
		if (eq(p.tok, bait__token__Token.dot)) {
			node = bait__parser__Parser_dot_expr(p, node)
		} else if (eq(p.tok, bait__token__Token.lsqr)) {
			node = bait__parser__Parser_index_expr(p, node)
		} else if (eq(p.tok, bait__token__Token.key_as)) {
			node = bait__parser__Parser_as_cast(p, node)
		} else if (bait__token__Token_is_infix(p.tok)) {
			node = bait__parser__Parser_infix_expr(p, node)
		} else {
			return node
		}
	}
	return node
}

function bait__parser__Parser_single_expr(p) {
	switch (p.tok) {
		case bait__token__Token.hash:
			{
				return bait__parser__Parser_hash_expr(p)
				break
			}
		case bait__token__Token.char:
			{
				return bait__parser__Parser_char_literal(p)
				break
			}
		case bait__token__Token.dollar:
			{
				return bait__parser__Parser_comptime_var(p)
				break
			}
		case bait__token__Token.dot:
			{
				return bait__parser__Parser_enum_val(p, false)
				break
			}
		case bait__token__Token.lsqr:
			{
				return bait__parser__Parser_array_init(p)
				break
			}
		case bait__token__Token.lpar:
			{
				return bait__parser__Parser_par_expr(p)
				break
			}
		case bait__token__Token.name:
			{
				return bait__parser__Parser_name_expr(p, bait__ast__Language.bait)
				break
			}
		case bait__token__Token.number:
			{
				return bait__parser__Parser_number_literal(p)
				break
			}
		case bait__token__Token.string:
			{
				return bait__parser__Parser_string_literal(p, bait__ast__Language.bait)
				break
			}
		case bait__token__Token.key_fun:
			{
				return bait__parser__Parser_anon_fun(p)
				break
			}
		case bait__token__Token.key_false:
		case bait__token__Token.key_true:
			{
				return bait__parser__Parser_bool_literal(p)
				break
			}
		case bait__token__Token.key_if:
			{
				return bait__parser__Parser_if_expr(p)
				break
			}
		case bait__token__Token.key_match:
			{
				return bait__parser__Parser_match_expr(p)
				break
			}
		case bait__token__Token.key_mut:
			{
				return bait__parser__Parser_ident(p, bait__ast__Language.bait)
				break
			}
		case bait__token__Token.key_not:
		case bait__token__Token.minus:
		case bait__token__Token.caret:
			{
				return bait__parser__Parser_prefix_expr(p)
				break
			}
		case bait__token__Token.key_typeof:
			{
				return bait__parser__Parser_typeof_expr(p)
				break
			}
		case bait__token__Token.eof:
			{
				p.should_abort = true
				return new bait__ast__EmptyExpr({})
				break
			}
		case bait__token__Token.unknown:
			{
				bait__parser__Parser_error(p, p.val)
				return new bait__ast__EmptyExpr({})
				break
			}
		default:
			{
				let msg = from_js_string(`invalid expression: kind = ${bait__token__Token_str(p.tok).str}`)
				if (i32(p.val.length > 0)) {
					msg = string_add(msg, from_js_string(`, val = ${p.val.str}`))
				}
				bait__parser__Parser_error(p, msg)
				return new bait__ast__EmptyExpr({})
				break
			}
	}
}

function bait__parser__Parser_expr_list(p) {
	let exprs = new bait_Array({ data: [], length: 0 })
	while (true) {
		Array_push(exprs, bait__parser__Parser_expr(p, bait__token__Precedence.lowest))
		if (!eq(p.tok, bait__token__Token.comma)) {
			break
		}
		bait__parser__Parser_check(p, bait__token__Token.comma)
	}
	return exprs
}

function bait__parser__Parser_array_init(p) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_check(p, bait__token__Token.lsqr)
	if (eq(p.tok, bait__token__Token.rsqr)) {
		bait__parser__Parser_next(p)
		const elem_type = bait__parser__Parser_parse_type(p)
		const typ = bait__ast__Table_find_or_register_array(p.table, elem_type)
		let length_expr = new bait__ast__EmptyExpr({})
		let cap_expr = new bait__ast__EmptyExpr({})
		if (eq(p.tok, bait__token__Token.lcur)) {
			bait__parser__Parser_next(p)
			while (!eq(p.tok, bait__token__Token.rcur)) {
				const key = bait__parser__Parser_check_name(p)
				bait__parser__Parser_check(p, bait__token__Token.assign)
				const expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
				if (eq(key, from_js_string("length"))) {
					length_expr = expr
				} else if (eq(key, from_js_string("cap"))) {
					cap_expr = expr
				} else {
					bait__parser__Parser_error(p, from_js_string(`invalid array init field: ${key.str}`))
				}
			}
			bait__parser__Parser_check(p, bait__token__Token.rcur)
		}
		return new bait__ast__ArrayInit({ typ: typ, elem_type: elem_type, length_expr: length_expr, cap_expr: cap_expr, pos: pos })
	}
	let exprs = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rsqr)) {
		Array_push(exprs, bait__parser__Parser_expr(p, bait__token__Precedence.lowest))
		if (eq(p.tok, bait__token__Token.comma)) {
			bait__parser__Parser_next(p)
		}
	}
	bait__parser__Parser_check(p, bait__token__Token.rsqr)
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new bait__ast__ArrayInit({ exprs: exprs, pos: pos })
}

function bait__parser__Parser_as_cast(p, left) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_check(p, bait__token__Token.key_as)
	const bait_target = bait__parser__Parser_parse_type(p)
	return new bait__ast__AsCast({ target: bait_target, expr: left, pos: pos })
}

function bait__parser__Parser_bool_literal(p) {
	const pos = bait__parser__Parser_pos(p)
	const val = eq(p.tok, bait__token__Token.key_true)
	bait__parser__Parser_next(p)
	return new bait__ast__BoolLiteral({ val: val, pos: pos })
}

function bait__parser__Parser_char_literal(p) {
	const pos = bait__parser__Parser_pos(p)
	const val = p.val
	bait__parser__Parser_next(p)
	return new bait__ast__CharLiteral({ val: val, pos: pos })
}

function bait__parser__Parser_comptime_var(p) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_check_name(p)
	return new bait__ast__ComptimeVar({ name: name, pos: pos })
}

function bait__parser__Parser_dot_expr(p, left) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_check(p, bait__token__Token.dot)
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.lpar)) {
		return bait__parser__Parser_method_call(p, left)
	}
	const name = bait__parser__Parser_check_name(p)
	return new bait__ast__SelectorExpr({ expr: left, field_name: name, pos: pos })
}

function bait__parser__Parser_enum_val(p, has_name) {
	const pos = bait__parser__Parser_pos(p)
	let name = from_js_string("")
	if (has_name) {
		name = bait__parser__Parser_check_name(p)
		if (i32(p.expr_pkg.length > 0)) {
			name = bait__parser__Parser_prepend_expr_pkg(p, name)
		} else {
			name = bait__parser__Parser_prepend_pkg(p, name)
		}
	}
	bait__parser__Parser_check(p, bait__token__Token.dot)
	const val = bait__parser__Parser_check_name(p)
	return new bait__ast__EnumVal({ name: name, val: val, pos: pos })
}

function bait__parser__Parser_hash_expr(p) {
	const lang = bait__parser__Parser_parse_lang(p)
	if (!eq(p.tok, bait__token__Token.string)) {
		if (eq(lang, bait__ast__Language.js)) {
			p.expr_pkg = from_js_string("JS")
		} else if (eq(lang, bait__ast__Language.c)) {
			p.expr_pkg = from_js_string("C")
		}
		return bait__parser__Parser_name_expr(p, lang)
	}
	const str_node = bait__parser__Parser_string_literal(p, bait__ast__Language.bait)
	return new bait__ast__HashExpr({ lang: lang, val: str_node.val, pos: str_node.pos })
}

function bait__parser__Parser_ident(p, lang) {
	const pos = bait__parser__Parser_pos(p)
	let is_mut = eq(p.tok, bait__token__Token.key_mut)
	if (is_mut) {
		bait__parser__Parser_next(p)
	}
	if (p.is_for_init) {
		is_mut = true
	}
	const name = bait__parser__Parser_prepend_expr_pkg(p, bait__parser__Parser_check_name(p))
	return new bait__ast__Ident({ name: name, is_mut: is_mut, pkg: p.pkg_name, pos: pos, lang: lang })
}

function bait__parser__Parser_index_expr(p, left) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_check(p, bait__token__Token.lsqr)
	const index = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	bait__parser__Parser_check(p, bait__token__Token.rsqr)
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new bait__ast__IndexExpr({ left: left, index: index, pos: pos })
}

function bait__parser__Parser_infix_expr(p, left) {
	const pos = bait__parser__Parser_pos(p)
	const op_tok = p.tok
	bait__parser__Parser_next(p)
	const right = bait__parser__Parser_expr(p, bait__token__Token_precedence(op_tok))
	return new bait__ast__InfixExpr({ left: left, right: right, op: op_tok, pos: pos })
}

function bait__parser__Parser_map_init(p) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_next(p)
	if (eq(p.tok, bait__token__Token.lsqr)) {
		const map_type = bait__parser__Parser_parse_map_type(p)
		return new bait__ast__MapInit({ typ: map_type, pos: pos })
	}
	let keys = new bait_Array({ data: [], length: 0 })
	let vals = new bait_Array({ data: [], length: 0 })
	bait__parser__Parser_check(p, bait__token__Token.lcur)
	while (!eq(p.tok, bait__token__Token.rcur)) {
		Array_push(keys, bait__parser__Parser_expr(p, bait__token__Precedence.lowest))
		bait__parser__Parser_check(p, bait__token__Token.colon)
		Array_push(vals, bait__parser__Parser_expr(p, bait__token__Precedence.lowest))
	}
	bait__parser__Parser_next(p)
	return new bait__ast__MapInit({ keys: keys, vals: vals, pos: pos })
}

function bait__parser__Parser_name_expr(p, lang) {
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
		if (eq(lang, bait__ast__Language.js)) {
			p.expr_pkg = string_add(p.expr_pkg, string_add(from_js_string("."), bait__parser__Parser_check_name(p)))
			bait__parser__Parser_check(p, bait__token__Token.dot)
		} else if (map_contains(p.import_aliases, p.val)) {
			p.expr_pkg = map_get_set(p.import_aliases, p.val, from_js_string(""))
			bait__parser__Parser_next(p)
			bait__parser__Parser_next(p)
		}
	}
	if (eq(p.val, from_js_string("map"))) {
		return bait__parser__Parser_map_init(p)
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.lpar)) {
		return bait__parser__Parser_fun_call(p, lang)
	}
	if (p.is_struct_possible && eq(bait__parser__Parser_peek(p), bait__token__Token.lcur)) {
		return bait__parser__Parser_struct_init(p)
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.dot) && u8_is_capital(string_get(p.val, 0)) && !string_is_upper(p.val)) {
		return bait__parser__Parser_enum_val(p, true)
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.string) && eq(p.val, from_js_string("js"))) {
		bait__parser__Parser_next(p)
		return bait__parser__Parser_string_literal(p, bait__ast__Language.js)
	}
	return bait__parser__Parser_ident(p, lang)
}

function bait__parser__Parser_number_literal(p) {
	const pos = bait__parser__Parser_pos(p)
	let val = p.val
	bait__parser__Parser_next(p)
	if (!eq(p.tok, bait__token__Token.dot)) {
		return new bait__ast__IntegerLiteral({ val: val, pos: pos })
	}
	bait__parser__Parser_next(p)
	val = string_add(val, string_add(from_js_string("."), p.val))
	bait__parser__Parser_check(p, bait__token__Token.number)
	return new bait__ast__FloatLiteral({ val: val, pos: pos })
}

function bait__parser__Parser_par_expr(p) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_next(p)
	const expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	bait__parser__Parser_check(p, bait__token__Token.rpar)
	return new bait__ast__ParExpr({ expr: expr, pos: pos })
}

function bait__parser__Parser_prefix_expr(p) {
	const pos = bait__parser__Parser_pos(p)
	const op = p.tok
	bait__parser__Parser_next(p)
	const right = bait__parser__Parser_expr(p, bait__token__Precedence.prefix)
	return new bait__ast__PrefixExpr({ op: op, right: right, pos: pos })
}

function bait__parser__Parser_string_literal(p, lang) {
	const pos = bait__parser__Parser_pos(p)
	if (!eq(bait__parser__Parser_peek(p), bait__token__Token.dollar)) {
		const val = p.val
		bait__parser__Parser_next(p)
		return new bait__ast__StringLiteral({ lang: lang, val: val, pos: pos })
	}
	let vals = new bait_Array({ data: [], length: 0 })
	let exprs = new bait_Array({ data: [], length: 0 })
	while (eq(p.tok, bait__token__Token.string)) {
		Array_push(vals, p.val)
		bait__parser__Parser_next(p)
		if (!eq(p.tok, bait__token__Token.dollar)) {
			break
		}
		bait__parser__Parser_next(p)
		bait__parser__Parser_check(p, bait__token__Token.lcur)
		Array_push(exprs, bait__parser__Parser_expr(p, bait__token__Precedence.lowest))
	}
	return new bait__ast__StringInterLiteral({ vals: vals, exprs: exprs, pos: pos })
}

function bait__parser__Parser_typeof_expr(p) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_check(p, bait__token__Token.key_typeof)
	bait__parser__Parser_check(p, bait__token__Token.lpar)
	const expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	bait__parser__Parser_check(p, bait__token__Token.rpar)
	return new bait__ast__TypeOf({ expr: expr, pos: pos })
}


function bait__parser__Parser_for_loop(p, label) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_next(p)
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.decl_assign)) {
		return bait__parser__Parser_for_classic_loop(p, label, pos)
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_in) || eq(bait__parser__Parser_peek(p), bait__token__Token.comma) || eq(p.tok, bait__token__Token.key_mut)) {
		return bait__parser__Parser_for_in_loop(p, label, pos)
	}
	p.is_struct_possible = false
	const cond = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	p.is_struct_possible = true
	const stmts = bait__parser__Parser_parse_block(p)
	return new bait__ast__ForLoop({ label: label, cond: cond, stmts: stmts, pos: pos })
}

function bait__parser__Parser_for_classic_loop(p, label, pos) {
	p.is_for_init = true
	const init = bait__parser__Parser_assign_stmt(p)
	p.is_for_init = false
	bait__parser__Parser_check(p, bait__token__Token.semicolon)
	const cond = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	bait__parser__Parser_check(p, bait__token__Token.semicolon)
	const inc = bait__parser__Parser_stmt(p)
	const stmts = bait__parser__Parser_parse_block(p)
	return new bait__ast__ForClassicLoop({ label: label, init: init, cond: cond, inc: inc, stmts: stmts, pos: pos })
}

function bait__parser__Parser_for_in_loop(p, label, pos) {
	let idxvar = from_js_string("")
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.comma)) {
		idxvar = bait__parser__Parser_check_name(p)
		bait__parser__Parser_next(p)
	}
	let is_mut = false
	if (eq(p.tok, bait__token__Token.key_mut)) {
		is_mut = true
		bait__parser__Parser_next(p)
	}
	let valvar = new bait__ast__Param({ pos: bait__parser__Parser_pos(p), name: bait__parser__Parser_check_name(p), is_mut: is_mut })
	bait__parser__Parser_check(p, bait__token__Token.key_in)
	p.is_struct_possible = false
	const expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	p.is_struct_possible = true
	const stmts = bait__parser__Parser_parse_block(p)
	return new bait__ast__ForInLoop({ label: label, idxvar: idxvar, valvar: valvar, expr: expr, stmts: stmts, pos: pos })
}


function bait__parser__Parser_fun_decl(p) {
	const pos = bait__parser__Parser_pos(p)
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_check(p, bait__token__Token.key_fun)
	let lang = bait__ast__Language.bait
	let is_method = false
	let params = new bait_Array({ data: [], length: 0 })
	if (eq(p.tok, bait__token__Token.lpar)) {
		is_method = true
		bait__parser__Parser_next(p)
		let is_mut = false
		if (eq(p.tok, bait__token__Token.key_mut)) {
			is_mut = true
			bait__parser__Parser_next(p)
		}
		const rec_name = bait__parser__Parser_check_name(p)
		lang = bait__parser__Parser_parse_lang(p)
		let rec_type = bait__ast__PLACEHOLDER_TYPE
		if (!eq(lang, bait__ast__Language.bait)) {
			rec_type = bait__parser__Parser_parse_name_type(p, lang)
		} else {
			rec_type = bait__parser__Parser_parse_type(p)
		}
		if (is_mut) {
			rec_type = bait__ast__Type_set_nr_amp(rec_type, 1)
		}
		Array_push(params, new bait__ast__Param({ is_mut: is_mut, name: rec_name, typ: rec_type }))
		bait__parser__Parser_check(p, bait__token__Token.rpar)
	}
	let name = from_js_string("")
	if (eq(p.tok, bait__token__Token.hash)) {
		lang = bait__parser__Parser_parse_lang(p)
		name = bait__ast__Language_prepend_to(lang, name)
		if (eq(lang, bait__ast__Language.js) && eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
			name = string_add(name, string_add(bait__parser__Parser_check_name(p), from_js_string(".")))
			bait__parser__Parser_check(p, bait__token__Token.dot)
		}
	}
	name = string_add(name, bait__parser__Parser_check_name(p))
	if (!is_method && eq(lang, bait__ast__Language.bait)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	const generic_names = bait__parser__Parser_generic_type_names(p)
	bait__parser__Parser_check(p, bait__token__Token.lpar)
	params = Array_concat(params, bait__parser__Parser_fun_params(p))
	bait__parser__Parser_check(p, bait__token__Token.rpar)
	let return_type = bait__ast__VOID_TYPE
	if (!eq(p.tok, bait__token__Token.lcur) && eq(pos.line, bait__parser__Parser_pos(p).line)) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	let node = new bait__ast__FunDecl({ is_test: string_starts_with(name, from_js_string("test_")), is_pub: is_pub, name: name, pkg: p.pkg_name, generic_names: generic_names, params: params, return_type: return_type, attrs: p.attributes, lang: lang, pos: pos })
	p.attributes = new bait_Array({ data: [], length: 0 })
	if (is_method) {
		const sym = bait__ast__Table_get_sym(p.table, Array_get(params, 0).typ)
		if (eq(lang, bait__ast__Language.bait) && bait__ast__TypeSymbol_has_method(sym, name)) {
			bait__parser__Parser_error(p, from_js_string(`Method "${name.str}" already exists on type "${sym.name.str}"`))
		}
		Array_push(sym.methods, node)
	} else {
		if (map_contains(p.table.fun_decls, name)) {
			Array_push(p.table.redefined_funs, name)
		}
		map_set(p.table.fun_decls, name, node)
		let param_types = new bait_Array({ data: [], length: 0 })
		for (let _t156 = 0; _t156 < params.length; _t156++) {
			const param = Array_get(params, _t156)
			Array_push(param_types, param.typ)
		}
		const typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type)
	}
	if (eq(lang, bait__ast__Language.bait)) {
		node.stmts = bait__parser__Parser_parse_block(p)
	}
	node.is_method = is_method
	return node
}

function bait__parser__Parser_anon_fun(p) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_check(p, bait__token__Token.key_fun)
	bait__parser__Parser_check(p, bait__token__Token.lpar)
	const params = bait__parser__Parser_fun_params(p)
	bait__parser__Parser_check(p, bait__token__Token.rpar)
	let return_type = bait__ast__VOID_TYPE
	if (!eq(p.tok, bait__token__Token.lcur)) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	let param_types = new bait_Array({ data: [], length: 0 })
	for (let _t159 = 0; _t159 < params.length; _t159++) {
		const param = Array_get(params, _t159)
		Array_push(param_types, param.typ)
	}
	const typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type)
	const stmts = bait__parser__Parser_parse_block(p)
	return new bait__ast__AnonFun({ decl: new bait__ast__FunDecl({ params: params, return_type: return_type, stmts: stmts }), typ: typ, pos: pos })
}

function bait__parser__Parser_fun_params(p) {
	let params = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rpar)) {
		const pos = bait__parser__Parser_pos(p)
		let is_mut = false
		if (eq(p.tok, bait__token__Token.key_mut)) {
			is_mut = true
			bait__parser__Parser_next(p)
		}
		const param = new bait__ast__Param({ is_mut: is_mut, name: bait__parser__Parser_check_name(p), typ: bait__parser__Parser_parse_type(p), pos: pos })
		Array_push(params, param)
		if (!eq(p.tok, bait__token__Token.rpar)) {
			bait__parser__Parser_check(p, bait__token__Token.comma)
		}
	}
	return params
}

function bait__parser__Parser_fun_call(p, lang) {
	const pos = bait__parser__Parser_pos(p)
	const name = bait__parser__Parser_prepend_expr_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__Token.lpar)
	const args = bait__parser__Parser_call_args(p)
	bait__parser__Parser_check(p, bait__token__Token.rpar)
	return new bait__ast__CallExpr({ name: name, args: args, pkg: p.pkg_name, pos: pos, lang: lang })
}

function bait__parser__Parser_method_call(p, left) {
	const pos = bait__parser__Parser_pos(p)
	const name = bait__parser__Parser_check_name(p)
	bait__parser__Parser_check(p, bait__token__Token.lpar)
	const args = bait__parser__Parser_call_args(p)
	bait__parser__Parser_check(p, bait__token__Token.rpar)
	return new bait__ast__CallExpr({ is_method: true, left: left, name: name, args: args, pos: pos })
}

function bait__parser__Parser_call_args(p) {
	let args = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rpar) && !p.should_abort) {
		Array_push(args, new bait__ast__CallArg({ expr: bait__parser__Parser_expr(p, bait__token__Precedence.lowest) }))
		if (!eq(p.tok, bait__token__Token.rpar) && !eq(p.tok, bait__token__Token.eof)) {
			bait__parser__Parser_check(p, bait__token__Token.comma)
		}
	}
	return args
}


function bait__parser__Parser_if_expr(p) {
	const pos = bait__parser__Parser_pos(p)
	let branches = new bait_Array({ data: [], length: 0 })
	let has_else = false
	while (true) {
		const bpos = bait__parser__Parser_pos(p)
		if (eq(p.tok, bait__token__Token.key_else)) {
			bait__parser__Parser_next(p)
			if (eq(p.tok, bait__token__Token.lcur)) {
				has_else = true
				const stmts = bait__parser__Parser_parse_block(p)
				Array_push(branches, new bait__ast__IfBranch({ cond: new bait__ast__EmptyExpr({}), stmts: stmts, pos: bpos }))
				break
			}
		}
		bait__parser__Parser_check(p, bait__token__Token.key_if)
		p.is_struct_possible = false
		const cond = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		p.is_struct_possible = true
		const stmts = bait__parser__Parser_parse_block(p)
		Array_push(branches, new bait__ast__IfBranch({ cond: cond, stmts: stmts }))
		if (!eq(p.tok, bait__token__Token.key_else)) {
			break
		}
	}
	return new bait__ast__IfExpr({ has_else: has_else, branches: branches, pos: pos })
}

function bait__parser__Parser_match_expr(p) {
	const pos = bait__parser__Parser_pos(p)
	let branches = new bait_Array({ data: [], length: 0 })
	bait__parser__Parser_check(p, bait__token__Token.key_match)
	p.is_struct_possible = false
	const cond = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	p.is_struct_possible = true
	bait__parser__Parser_check(p, bait__token__Token.lcur)
	while (!eq(p.tok, bait__token__Token.rcur)) {
		const bpos = bait__parser__Parser_pos(p)
		let exprs = new bait_Array({ data: [], length: 0 })
		if (eq(p.tok, bait__token__Token.key_else)) {
			bait__parser__Parser_next(p)
		} else {
			p.is_struct_possible = false
			exprs = bait__parser__Parser_expr_list(p)
			p.is_struct_possible = true
		}
		const stmts = bait__parser__Parser_parse_block(p)
		Array_push(branches, new bait__ast__MatchBranch({ exprs: exprs, stmts: stmts, pos: pos }))
	}
	bait__parser__Parser_check(p, bait__token__Token.rcur)
	return new bait__ast__MatchExpr({ cond: cond, branches: branches, pos: pos })
}


function bait__parser__Parser_add_builtin_imports(p) {
	if (eq(p.pkg_name, from_js_string("builtin"))) {
		return new bait_Array({ data: [], length: 0 })
	}
	let imports = new bait_Array({ data: [], length: 0 })
	Array_push(imports, new bait__ast__Import({ name: from_js_string("builtin"), alias: from_js_string("builtin") }))
	return imports
}

function bait__parser__Parser_foreign_import(p) {
	const name = p.val
	bait__parser__Parser_next(p)
	bait__parser__Parser_check(p, bait__token__Token.key_as)
	const lang = bait__parser__Parser_parse_lang(p)
	let alias = from_js_string("")
	if (eq(lang, bait__ast__Language.js)) {
		alias = bait__ast__Language_prepend_to(lang, bait__parser__Parser_check_name(p))
	} else if (eq(lang, bait__ast__Language.c)) {
		bait__parser__Parser_check_name(p)
	}
	return new bait__ast__Import({ name: name, alias: alias, lang: lang })
}

function bait__parser__Parser_bait_import(p) {
	let name_parts = new bait_Array({ data: [], length: 0 })
	Array_push(name_parts, bait__parser__Parser_check_name(p))
	while (eq(p.tok, bait__token__Token.dot)) {
		bait__parser__Parser_next(p)
		Array_push(name_parts, bait__parser__Parser_check_name(p))
	}
	const name = Array_string_join(name_parts, from_js_string("."))
	let alias = Array_get(name_parts, i32(name_parts.length - 1))
	if (eq(p.tok, bait__token__Token.key_as)) {
		bait__parser__Parser_next(p)
		alias = bait__parser__Parser_check_name(p)
	}
	return new bait__ast__Import({ name: name, alias: alias })
}

function bait__parser__Parser_import_stmts(p) {
	let imports = bait__parser__Parser_add_builtin_imports(p)
	while (eq(p.tok, bait__token__Token.key_import)) {
		const pos = bait__parser__Parser_pos(p)
		bait__parser__Parser_next(p)
		let imp = new bait__ast__Import({})
		if (eq(p.tok, bait__token__Token.string)) {
			imp = bait__parser__Parser_foreign_import(p)
		} else {
			imp = bait__parser__Parser_bait_import(p)
		}
		map_set(p.import_aliases, imp.alias, imp.name)
		imp.pos = pos
		Array_push(imports, imp)
	}
	return imports
}


function bait__parser__Parser({ pref = new bait__preference__Prefs({}), path = from_js_string(""), eofs = 0, tok = 0, next_tok = 0, val = from_js_string(""), pkg_name = from_js_string(""), import_aliases = new map({ data: new Map([]), length: 0 }), attributes = new bait_Array({ data: [], length: 0 }), expr_pkg = from_js_string(""), is_for_init = false, is_struct_possible = false, should_abort = false, table = new bait__ast__Table({}), lexer = new bait__lexer__Lexer({}), warnings = new bait_Array({ data: [], length: 0 }), errors = new bait_Array({ data: [], length: 0 }) }) {
	this.pref = pref
	this.path = path
	this.eofs = eofs
	this.tok = tok
	this.next_tok = next_tok
	this.val = val
	this.pkg_name = pkg_name
	this.import_aliases = import_aliases
	this.attributes = attributes
	this.expr_pkg = expr_pkg
	this.is_for_init = is_for_init
	this.is_struct_possible = is_struct_possible
	this.should_abort = should_abort
	this.table = table
	this.lexer = lexer
	this.warnings = warnings
	this.errors = errors
}
function bait__parser__new(table, pref) {
	return new bait__parser__Parser({ table: table, pref: pref })
}

function bait__parser__Parser_parse(p, text, path) {
	bait__lexer__Lexer_init(p.lexer, text)
	p.path = path
	p.eofs = 0
	p.import_aliases = new map({ data: new Map([]), length: 0 })
	p.expr_pkg = from_js_string("")
	p.is_for_init = false
	p.is_struct_possible = true
	p.should_abort = false
	bait__parser__Parser_next(p)
	const pkg_decl = bait__parser__Parser_package_decl(p)
	if (i32(p.pref.expected_pkg.length > 0) && !eq(pkg_decl.full_name, p.pref.expected_pkg)) {
		return new bait__ast__File({})
	}
	if (!p.pref.is_test && eq(pkg_decl.name, from_js_string("builtin")) && string_ends_with(path, from_js_string("assert.bt"))) {
		return new bait__ast__File({ path: path })
	}
	const imports = bait__parser__Parser_import_stmts(p)
	let stmts = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.eof)) {
		bait__parser__Parser_parse_attributes(p)
		Array_push(stmts, bait__parser__Parser_toplevel_stmt(p))
		if (p.should_abort) {
			break
		}
	}
	return new bait__ast__File({ path: path, pkg_decl: pkg_decl, imports: imports, stmts: stmts, warnings: p.warnings, errors: p.errors })
}

function bait__parser__Parser_package_decl(p) {
	if (!eq(p.tok, bait__token__Token.key_package)) {
		p.pkg_name = from_js_string("main")
		return new bait__ast__PackageDecl({ name: from_js_string("main"), full_name: from_js_string("main") })
	}
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_check_name(p)
	let full_name = name
	const lib_part = string_add(string_add(os__PATH_SEP, from_js_string("lib")), os__PATH_SEP)
	if (!eq(full_name, from_js_string("main")) && string_contains(p.path, lib_part)) {
		const rel_path = string_substr(p.path, i32(string_index(p.path, lib_part) + lib_part.length), p.path.length)
		full_name = string_replace(string_substr(rel_path, 0, string_last_index(rel_path, os__PATH_SEP)), os__PATH_SEP, from_js_string("."))
		if (!string_ends_with(full_name, name)) {
			return new bait__ast__PackageDecl({})
		}
	}
	p.pkg_name = full_name
	return new bait__ast__PackageDecl({ name: name, full_name: full_name })
}

function bait__parser__Parser_parse_attributes(p) {
	while (eq(p.tok, bait__token__Token.attr)) {
		const pos = bait__parser__Parser_pos(p)
		const name = p.val
		bait__parser__Parser_next(p)
		let value = from_js_string("")
		if (eq(p.tok, bait__token__Token.colon)) {
			bait__parser__Parser_next(p)
			value = p.val
			bait__parser__Parser_check(p, bait__token__Token.string)
		}
		Array_push(p.attributes, new bait__ast__Attribute({ name: name, value: value, pos: pos }))
	}
}

function bait__parser__Parser_parse_block(p) {
	bait__parser__Parser_check(p, bait__token__Token.lcur)
	let bstmts = new bait_Array({ data: [], length: 0 })
	while (!Array_contains(new bait_Array({ data: [bait__token__Token.eof, bait__token__Token.rcur], length: 2 }), p.tok)) {
		Array_push(bstmts, bait__parser__Parser_stmt(p))
		if (p.should_abort) {
			break
		}
	}
	bait__parser__Parser_check(p, bait__token__Token.rcur)
	return bstmts
}

function bait__parser__Parser_skip(p, tok) {
	if (eq(p.tok, tok)) {
		bait__parser__Parser_next(p)
	}
}

function bait__parser__Parser_check(p, expected) {
	if (!eq(p.tok, expected)) {
		bait__parser__Parser_error(p, from_js_string(`unexpected ${bait__token__Token_str(p.tok).str}, expecting ${bait__token__Token_str(expected).str}`))
	}
	bait__parser__Parser_next(p)
}

function bait__parser__Parser_check_name(p) {
	const val = p.val
	bait__parser__Parser_check(p, bait__token__Token.name)
	return val
}

function bait__parser__Parser_check_pub(p) {
	if (eq(p.tok, bait__token__Token.key_pub)) {
		bait__parser__Parser_next(p)
		return true
	}
	return false
}

function bait__parser__Parser_parse_lang(p) {
	if (!eq(p.tok, bait__token__Token.hash)) {
		return bait__ast__Language.bait
	}
	const lang = bait__ast__prefix_to_lang(p.val)
	bait__parser__Parser_next(p)
	bait__parser__Parser_check(p, bait__token__Token.dot)
	return lang
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

function bait__parser__Parser_pos(p) {
	return bait__lexer__Lexer_get_pos(p.lexer)
}

function bait__parser__Parser_next(p) {
	if (eq(p.next_tok, bait__token__Token.unknown)) {
		p.tok = bait__lexer__Lexer_next(p.lexer)
	} else {
		p.tok = p.next_tok
		p.next_tok = bait__token__Token.unknown
	}
	p.val = p.lexer.val
}

function bait__parser__Parser_peek(p) {
	if (eq(p.next_tok, bait__token__Token.unknown)) {
		p.next_tok = bait__lexer__Lexer_next(p.lexer)
	}
	return p.next_tok
}

function bait__parser__Parser_warn(p, msg) {
	Array_push(p.warnings, new bait__errors__Message({ kind: bait__errors__Kind.warning, path: p.path, pos: bait__parser__Parser_pos(p), title: from_js_string("warning"), msg: msg }))
}

function bait__parser__Parser_error(p, msg) {
	Array_push(p.errors, new bait__errors__Message({ kind: bait__errors__Kind.error, path: p.path, pos: bait__parser__Parser_pos(p), title: from_js_string("error"), msg: msg }))
	p.should_abort = true
}


function bait__parser__Parser_toplevel_stmt(p) {
	switch (p.tok) {
		case bait__token__Token.key_pub:
			{
				return bait__parser__Parser_pub_stmt(p)
				break
			}
		case bait__token__Token.hash:
			{
				return bait__parser__Parser_expr_stmt(p)
				break
			}
		case bait__token__Token.key_const:
			{
				return bait__parser__Parser_const_decl(p)
				break
			}
		case bait__token__Token.key_enum:
			{
				return bait__parser__Parser_enum_decl(p)
				break
			}
		case bait__token__Token.key_fun:
			{
				return bait__parser__Parser_fun_decl(p)
				break
			}
		case bait__token__Token.key_global:
			{
				return bait__parser__Parser_global_decl(p)
				break
			}
		case bait__token__Token.key_interface:
			{
				return bait__parser__Parser_interface_decl(p)
				break
			}
		case bait__token__Token.key_struct:
			{
				return bait__parser__Parser_struct_decl(p)
				break
			}
		case bait__token__Token.key_type:
			{
				return bait__parser__Parser_type_decl(p)
				break
			}
		default:
			{
				if (eq(p.pkg_name, from_js_string("main"))) {
					return bait__parser__Parser_script_mode_main(p)
				}
				bait__parser__Parser_error(p, from_js_string(`bad toplevel token: kind = ${bait__token__Token_str(p.tok).str}, val = ${p.val.str}`))
				return new bait__ast__EmptyStmt({})
				break
			}
	}
}

function bait__parser__Parser_pub_stmt(p) {
	switch (bait__parser__Parser_peek(p)) {
		case bait__token__Token.key_const:
			{
				return bait__parser__Parser_const_decl(p)
				break
			}
		case bait__token__Token.key_enum:
			{
				return bait__parser__Parser_enum_decl(p)
				break
			}
		case bait__token__Token.key_fun:
			{
				return bait__parser__Parser_fun_decl(p)
				break
			}
		case bait__token__Token.key_interface:
			{
				return bait__parser__Parser_interface_decl(p)
				break
			}
		case bait__token__Token.key_struct:
			{
				return bait__parser__Parser_struct_decl(p)
				break
			}
		default:
			{
				bait__parser__Parser_error(p, from_js_string(`cannot use pub keyword before ${bait__token__Token_str(bait__parser__Parser_peek(p)).str}`))
				return new bait__ast__EmptyStmt({})
				break
			}
	}
}

function bait__parser__Parser_script_mode_main(p) {
	if (!p.pref.is_script) {
		bait__parser__Parser_warn(p, from_js_string("declare the main function or use the --script option"))
	}
	let stmts = new bait_Array({ data: [], length: 0 })
	while (!p.should_abort && !eq(p.tok, bait__token__Token.eof)) {
		Array_push(stmts, bait__parser__Parser_stmt(p))
	}
	let node = new bait__ast__FunDecl({ name: from_js_string("main"), return_type: bait__ast__VOID_TYPE })
	map_set(p.table.fun_decls, from_js_string("main"), node)
	node.stmts = stmts
	return node
}

function bait__parser__Parser_stmt(p) {
	switch (p.tok) {
		case bait__token__Token.name:
			{
				return bait__parser__Parser_stmt_with_name(p)
				break
			}
		case bait__token__Token.key_assert:
			{
				return bait__parser__Parser_assert_stmt(p)
				break
			}
		case bait__token__Token.key_mut:
			{
				return bait__parser__Parser_assign_stmt(p)
				break
			}
		case bait__token__Token.key_break:
		case bait__token__Token.key_continue:
			{
				return bait__parser__Parser_loop_control_stmt(p)
				break
			}
		case bait__token__Token.key_for:
			{
				return bait__parser__Parser_for_loop(p, from_js_string(""))
				break
			}
		case bait__token__Token.key_if:
			{
				return bait__parser__Parser_if_expr(p)
				break
			}
		case bait__token__Token.key_match:
			{
				return bait__parser__Parser_match_expr(p)
				break
			}
		case bait__token__Token.key_return:
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

function bait__parser__Parser_stmt_with_name(p) {
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.colon)) {
		const label = p.val
		bait__parser__Parser_next(p)
		bait__parser__Parser_next(p)
		return bait__parser__Parser_for_loop(p, label)
	}
	const left = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (bait__token__Token_is_assign(p.tok)) {
		return bait__parser__Parser_partial_assign_stmt(p, left)
	}
	return new bait__ast__ExprStmt({ expr: left })
}

function bait__parser__Parser_assert_stmt(p) {
	bait__parser__Parser_next(p)
	const pos = bait__parser__Parser_pos(p)
	const expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	return new bait__ast__AssertStmt({ expr: expr, pos: pos })
}

function bait__parser__Parser_assign_stmt(p) {
	const left = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	return bait__parser__Parser_partial_assign_stmt(p, left)
}

function bait__parser__Parser_partial_assign_stmt(p, left) {
	const op = p.tok
	bait__parser__Parser_next(p)
	const right = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	return new bait__ast__AssignStmt({ op: op, left: left, right: right, pos: (left).pos })
}

function bait__parser__Parser_const_decl(p) {
	const pos = bait__parser__Parser_pos(p)
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	const lang = bait__parser__Parser_parse_lang(p)
	let name = from_js_string("")
	if (eq(lang, bait__ast__Language.js) && eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
		name = string_add(bait__parser__Parser_check_name(p), from_js_string("."))
		bait__parser__Parser_next(p)
	}
	name = string_add(name, bait__parser__Parser_check_name(p))
	if (eq(lang, bait__ast__Language.bait)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	bait__parser__Parser_check(p, bait__token__Token.decl_assign)
	let expr = new bait__ast__EmptyExpr({})
	let typ = bait__ast__PLACEHOLDER_TYPE
	if (eq(lang, bait__ast__Language.bait)) {
		expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		typ = bait__parser__Parser_infer_expr_type(p, expr)
	} else {
		typ = bait__parser__Parser_parse_type(p)
	}
	bait__ast__Scope_register(p.table.global_scope, bait__ast__Language_prepend_to(lang, name), new bait__ast__ScopeObject({ typ: typ, kind: bait__ast__ObjectKind.constant, is_pub: is_pub, pkg: p.pkg_name, expr: expr }))
	return new bait__ast__ConstDecl({ name: name, expr: expr, typ: typ, pos: pos, lang: lang })
}

function bait__parser__Parser_loop_control_stmt(p) {
	const pos = bait__parser__Parser_pos(p)
	const kind = p.tok
	bait__parser__Parser_next(p)
	let label = from_js_string("")
	if (eq(p.tok, bait__token__Token.name) && eq(bait__parser__Parser_pos(p).line, pos.line)) {
		label = bait__parser__Parser_check_name(p)
	}
	return new bait__ast__LoopControlStmt({ kind: kind, label: label, pos: pos })
}

function bait__parser__Parser_expr_stmt(p) {
	const expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	return new bait__ast__ExprStmt({ expr: expr })
}

function bait__parser__Parser_enum_decl(p) {
	const pos = bait__parser__Parser_pos(p)
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	const lang = bait__parser__Parser_parse_lang(p)
	let name = bait__parser__Parser_check_name(p)
	if (eq(lang, bait__ast__Language.bait)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	} else {
		name = bait__ast__Language_prepend_to(lang, name)
	}
	bait__parser__Parser_check(p, bait__token__Token.lcur)
	let variants = new bait_Array({ data: [], length: 0 })
	let fields = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rcur)) {
		const fpos = bait__parser__Parser_pos(p)
		const fname = bait__parser__Parser_check_name(p)
		let expr = new bait__ast__EmptyExpr({})
		if (eq(p.tok, bait__token__Token.decl_assign)) {
			bait__parser__Parser_next(p)
			expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		}
		Array_push(variants, fname)
		Array_push(fields, new bait__ast__EnumField({ name: fname, expr: expr, pos: fpos }))
	}
	bait__parser__Parser_check(p, bait__token__Token.rcur)
	bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ name: name, is_pub: is_pub, pkg: p.pkg_name, kind: bait__ast__TypeKind.enum_, info: new bait__ast__EnumInfo({ vals: variants }) }))
	return new bait__ast__EnumDecl({ lang: lang, name: name, fields: fields, pos: pos })
}

function bait__parser__Parser_global_decl(p) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_check(p, bait__token__Token.key_global)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__Token.decl_assign)
	const expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	const typ = bait__parser__Parser_infer_expr_type(p, expr)
	bait__ast__Scope_register(p.table.global_scope, name, new bait__ast__ScopeObject({ is_mut: true, typ: typ, kind: bait__ast__ObjectKind.global_ }))
	return new bait__ast__GlobalDecl({ name: name, expr: expr, pos: pos })
}

function bait__parser__Parser_interface_decl(p) {
	const pos = bait__parser__Parser_pos(p)
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_check(p, bait__token__Token.key_interface)
	const lang = bait__parser__Parser_parse_lang(p)
	let name = bait__ast__Language_prepend_to(lang, bait__parser__Parser_check_name(p))
	if (!eq(lang, bait__ast__Language.bait) && eq(p.tok, bait__token__Token.dot)) {
		name = string_add(name, from_js_string("."))
		bait__parser__Parser_next(p)
		name = string_add(name, bait__parser__Parser_check_name(p))
	}
	let tsym = new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.interface_, name: name, is_pub: is_pub, pkg: p.pkg_name })
	const typ = bait__ast__Table_register_sym(p.table, tsym)
	let mut_idx = -1
	let pub_idx = -1
	let pub_mut_idx = -1
	let global_idx = -1
	let field_is_mut = false
	let field_is_pub = false
	let field_is_global = false
	let methods = new bait_Array({ data: [], length: 0 })
	let fields = new bait_Array({ data: [], length: 0 })
	bait__parser__Parser_check(p, bait__token__Token.lcur)
	while (!eq(p.tok, bait__token__Token.rcur)) {
		if (eq(p.tok, bait__token__Token.key_mut)) {
			if (!eq(mut_idx, -1)) {
				bait__parser__Parser_error(p, from_js_string("redefinition of \"mut\" section"))
				return new bait__ast__InterfaceDecl({})
			}
			bait__parser__Parser_next(p)
			bait__parser__Parser_check(p, bait__token__Token.colon)
			mut_idx = fields.length
			field_is_mut = true
			field_is_pub = false
			field_is_global = false
		} else if (eq(p.tok, bait__token__Token.key_pub)) {
			bait__parser__Parser_next(p)
			if (eq(p.tok, bait__token__Token.key_mut)) {
				if (!eq(pub_mut_idx, -1)) {
					bait__parser__Parser_error(p, from_js_string("redefinition of \"pub mut\" section"))
					return new bait__ast__InterfaceDecl({})
				}
				bait__parser__Parser_next(p)
				pub_mut_idx = fields.length
				field_is_mut = true
				field_is_pub = true
				field_is_global = false
			} else {
				if (!eq(pub_idx, -1)) {
					bait__parser__Parser_error(p, from_js_string("redefinition of \"pub\" section"))
					return new bait__ast__InterfaceDecl({})
				}
				pub_idx = fields.length
				field_is_mut = false
				field_is_pub = true
				field_is_global = false
			}
			bait__parser__Parser_check(p, bait__token__Token.colon)
		} else if (eq(p.tok, bait__token__Token.key_global)) {
			if (!eq(global_idx, -1)) {
				bait__parser__Parser_error(p, from_js_string("redefinition of \"global\" section"))
				return new bait__ast__InterfaceDecl({})
			}
			bait__parser__Parser_next(p)
			bait__parser__Parser_check(p, bait__token__Token.colon)
			global_idx = fields.length
			field_is_mut = true
			field_is_pub = true
			field_is_global = true
		}
		const fname = bait__parser__Parser_check_name(p)
		if (eq(p.tok, bait__token__Token.lpar)) {
			const m = bait__parser__Parser_interface_method(p, fname, typ)
			Array_push(methods, m)
			Array_push(tsym.methods, m)
			continue
		}
		Array_push(fields, new bait__ast__StructField({ name: fname, typ: bait__parser__Parser_parse_type(p), is_mut: field_is_mut, is_pub: field_is_pub, is_global: field_is_global }))
	}
	bait__parser__Parser_next(p)
	tsym.info = new bait__ast__StructInfo({ fields: fields })
	return new bait__ast__InterfaceDecl({ lang: lang, name: name, typ: typ, methods: methods, fields: fields, pos: pos })
}

function bait__parser__Parser_interface_method(p, name, rec_type) {
	bait__parser__Parser_check(p, bait__token__Token.lpar)
	let params = new bait_Array({ data: [new bait__ast__Param({ name: from_js_string("_"), typ: rec_type })], length: 1 })
	params = Array_concat(params, bait__parser__Parser_fun_params(p))
	const par_line = bait__parser__Parser_pos(p).line
	bait__parser__Parser_check(p, bait__token__Token.rpar)
	let return_type = bait__ast__VOID_TYPE
	if (eq(bait__parser__Parser_pos(p).line, par_line)) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	return new bait__ast__FunDecl({ lang: bait__ast__Language.js, name: name, params: params, return_type: return_type, is_pub: true, is_method: true })
}

function bait__parser__Parser_return_stmt(p) {
	const pos = bait__parser__Parser_pos(p)
	bait__parser__Parser_check(p, bait__token__Token.key_return)
	let expr = new bait__ast__EmptyExpr({})
	if (!eq(p.tok, bait__token__Token.semicolon)) {
		expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	}
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new bait__ast__ReturnStmt({ expr: expr, pos: pos })
}

function bait__parser__Parser_type_decl(p) {
	const pos = bait__parser__Parser_pos(p)
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	const lang = bait__parser__Parser_parse_lang(p)
	let name = bait__parser__Parser_check_name(p)
	if (eq(lang, bait__ast__Language.bait)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	} else {
		name = bait__ast__Language_prepend_to(lang, name)
	}
	bait__parser__Parser_check(p, bait__token__Token.decl_assign)
	const is_fun_type = eq(p.tok, bait__token__Token.key_fun)
	let variants = new bait_Array({ data: [], length: 0 })
	Array_push(variants, bait__parser__Parser_parse_type(p))
	if (is_fun_type) {
		const sym = bait__ast__Table_get_sym(p.table, Array_get(variants, 0))
		const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.fun_, name: name, is_pub: is_pub, pkg: p.pkg_name, info: sym.info }))
		return new bait__ast__TypeDecl({ lang: lang, name: name, typ: typ, pos: pos })
	}
	if (!eq(p.tok, bait__token__Token.pipe)) {
		const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.alias_type, name: name, parent: Array_get(variants, 0), is_pub: is_pub, pkg: p.pkg_name }))
		return new bait__ast__TypeDecl({ lang: lang, name: name, typ: typ, pos: pos })
	}
	while (eq(p.tok, bait__token__Token.pipe)) {
		bait__parser__Parser_next(p)
		Array_push(variants, bait__parser__Parser_parse_type(p))
	}
	const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.sum_type, name: name, is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__SumTypeInfo({ variants: variants }) }))
	return new bait__ast__TypeDecl({ lang: lang, name: name, typ: typ, pos: pos })
}


function bait__parser__Parser_struct_decl(p) {
	const pos = bait__parser__Parser_pos(p)
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_check(p, bait__token__Token.key_struct)
	const lang = bait__parser__Parser_parse_lang(p)
	let name = bait__parser__Parser_check_name(p)
	if (eq(lang, bait__ast__Language.bait)) {
	} else {
		name = bait__ast__Language_prepend_to(lang, name)
	}
	let mut_idx = -1
	let pub_idx = -1
	let pub_mut_idx = -1
	let global_idx = -1
	let field_is_mut = false
	let field_is_pub = false
	let field_is_global = false
	let fields = new bait_Array({ data: [], length: 0 })
	bait__parser__Parser_check(p, bait__token__Token.lcur)
	while (!eq(p.tok, bait__token__Token.rcur)) {
		if (eq(p.tok, bait__token__Token.key_mut)) {
			if (!eq(mut_idx, -1)) {
				bait__parser__Parser_error(p, from_js_string("redefinition of \"mut\" section"))
				return new bait__ast__StructDecl({})
			}
			bait__parser__Parser_next(p)
			bait__parser__Parser_check(p, bait__token__Token.colon)
			mut_idx = fields.length
			field_is_mut = true
			field_is_pub = false
			field_is_global = false
		} else if (eq(p.tok, bait__token__Token.key_pub)) {
			bait__parser__Parser_next(p)
			if (eq(p.tok, bait__token__Token.key_mut)) {
				if (!eq(pub_mut_idx, -1)) {
					bait__parser__Parser_error(p, from_js_string("redefinition of \"pub mut\" section"))
					return new bait__ast__StructDecl({})
				}
				bait__parser__Parser_next(p)
				pub_mut_idx = fields.length
				field_is_mut = true
				field_is_pub = true
				field_is_global = false
			} else {
				if (!eq(pub_idx, -1)) {
					bait__parser__Parser_error(p, from_js_string("redefinition of \"pub\" section"))
					return new bait__ast__StructDecl({})
				}
				pub_idx = fields.length
				field_is_mut = false
				field_is_pub = true
				field_is_global = false
			}
			bait__parser__Parser_check(p, bait__token__Token.colon)
		} else if (eq(p.tok, bait__token__Token.key_global)) {
			if (!eq(global_idx, -1)) {
				bait__parser__Parser_error(p, from_js_string("redefinition of \"global\" section"))
				return new bait__ast__StructDecl({})
			}
			bait__parser__Parser_next(p)
			bait__parser__Parser_check(p, bait__token__Token.colon)
			global_idx = fields.length
			field_is_mut = true
			field_is_pub = true
			field_is_global = true
		}
		bait__parser__Parser_parse_attributes(p)
		Array_push(fields, bait__parser__Parser_struct_decl_field(p, field_is_mut, field_is_pub, field_is_global))
	}
	bait__parser__Parser_check(p, bait__token__Token.rcur)
	const tsym = new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.struct_, name: bait__parser__Parser_prepend_pkg(p, name), is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__StructInfo({ fields: fields }) })
	const typ = bait__ast__Table_register_sym(p.table, tsym)
	return new bait__ast__StructDecl({ lang: lang, pkg_prefix: bait__parser__Parser_prepend_pkg(p, from_js_string("")), name: name, typ: typ, fields: fields, pos: pos })
}

function bait__parser__Parser_struct_decl_field(p, is_mut, is_pub, is_global) {
	const pos = bait__parser__Parser_pos(p)
	const fname = bait__parser__Parser_check_name(p)
	const ftyp = bait__parser__Parser_parse_type(p)
	let expr = new bait__ast__EmptyExpr({})
	if (eq(p.tok, bait__token__Token.decl_assign)) {
		bait__parser__Parser_next(p)
		expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	}
	const field = new bait__ast__StructField({ name: fname, typ: ftyp, expr: expr, pos: pos, is_mut: is_mut, is_pub: is_pub, is_global: is_global, attrs: p.attributes })
	p.attributes = new bait_Array({ data: [], length: 0 })
	return field
}

function bait__parser__Parser_struct_init(p) {
	const pos = bait__parser__Parser_pos(p)
	const name = p.val
	const typ = bait__parser__Parser_parse_type(p)
	bait__parser__Parser_check(p, bait__token__Token.lcur)
	let fields = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rcur)) {
		Array_push(fields, bait__parser__Parser_struct_init_field(p))
	}
	bait__parser__Parser_check(p, bait__token__Token.rcur)
	return new bait__ast__StructInit({ name: name, typ: typ, fields: fields, pos: pos })
}

function bait__parser__Parser_struct_init_field(p) {
	const pos = bait__parser__Parser_pos(p)
	const name = bait__parser__Parser_check_name(p)
	bait__parser__Parser_check(p, bait__token__Token.assign)
	const expr = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	return new bait__ast__StructInitField({ name: name, expr: expr, pos: pos })
}


function bait__parser__Parser_parse_type(p) {
	let nr_amp = 0
	while (eq(p.tok, bait__token__Token.amp)) {
		bait__parser__Parser_next(p)
		nr_amp += 1
	}
	if (eq(p.tok, bait__token__Token.lsqr)) {
		bait__parser__Parser_next(p)
		bait__parser__Parser_check(p, bait__token__Token.rsqr)
		const elem_type = bait__parser__Parser_parse_type(p)
		return bait__ast__Table_find_or_register_array(p.table, elem_type)
	}
	if (eq(p.tok, bait__token__Token.key_fun)) {
		return bait__parser__Parser_parse_fun_type(p)
	}
	if (eq(p.val, from_js_string("map"))) {
		bait__parser__Parser_next(p)
		return bait__parser__Parser_parse_map_type(p)
	}
	if (eq(p.tok, bait__token__Token.semicolon)) {
		bait__parser__Parser_next(p)
		return bait__ast__PLACEHOLDER_TYPE
	}
	const lang = bait__parser__Parser_parse_lang(p)
	let typ = bait__parser__Parser_parse_name_type(p, lang)
	if (i32(nr_amp > 0)) {
		typ = bait__ast__Type_set_nr_amp(typ, nr_amp)
	}
	return typ
}

function bait__parser__Parser_parse_name_type(p, lang) {
	let name = bait__ast__Language_prepend_to(lang, bait__parser__Parser_check_name(p))
	if (eq(p.tok, bait__token__Token.dot)) {
		if (eq(lang, bait__ast__Language.js)) {
			bait__parser__Parser_next(p)
			name = string_add(name, string_add(from_js_string("."), bait__parser__Parser_check_name(p)))
		} else {
			const pkg = map_get_set(p.import_aliases, name, from_js_string(""))
			bait__parser__Parser_next(p)
			name = string_add(string_add(pkg, from_js_string(".")), bait__parser__Parser_check_name(p))
		}
	} else if (i32(p.expr_pkg.length > 0)) {
		name = bait__parser__Parser_prepend_expr_pkg(p, name)
	} else if (!string_contains(name, from_js_string(".")) && !map_contains(p.table.type_idxs, name)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	let _t228 = undefined
	switch (name.str) {
		case from_js_string("i8").str:
			{
				_t228 = bait__ast__I8_TYPE
				break
			}
		case from_js_string("i16").str:
			{
				_t228 = bait__ast__I16_TYPE
				break
			}
		case from_js_string("i32").str:
			{
				_t228 = bait__ast__I32_TYPE
				break
			}
		case from_js_string("i64").str:
			{
				_t228 = bait__ast__I64_TYPE
				break
			}
		case from_js_string("u8").str:
			{
				_t228 = bait__ast__U8_TYPE
				break
			}
		case from_js_string("u16").str:
			{
				_t228 = bait__ast__U16_TYPE
				break
			}
		case from_js_string("u32").str:
			{
				_t228 = bait__ast__U32_TYPE
				break
			}
		case from_js_string("u64").str:
			{
				_t228 = bait__ast__U64_TYPE
				break
			}
		case from_js_string("f32").str:
			{
				_t228 = bait__ast__F32_TYPE
				break
			}
		case from_js_string("f64").str:
			{
				_t228 = bait__ast__F64_TYPE
				break
			}
		case from_js_string("bool").str:
			{
				_t228 = bait__ast__BOOL_TYPE
				break
			}
		case from_js_string("string").str:
			{
				_t228 = bait__ast__STRING_TYPE
				break
			}
		case from_js_string("any").str:
			{
				_t228 = bait__ast__ANY_TYPE
				break
			}
		default:
			{
				_t228 = bait__ast__Table_find_type_or_add_placeholder(p.table, name)
				break
			}
	}
	return _t228
}

function bait__parser__Parser_parse_fun_type(p) {
	bait__parser__Parser_next(p)
	bait__parser__Parser_check(p, bait__token__Token.lpar)
	let param_types = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rpar)) {
		const typ = bait__parser__Parser_parse_type(p)
		Array_push(param_types, typ)
		if (!eq(p.tok, bait__token__Token.rpar)) {
			bait__parser__Parser_check(p, bait__token__Token.comma)
		}
	}
	const par_line = bait__parser__Parser_pos(p).line
	bait__parser__Parser_check(p, bait__token__Token.rpar)
	let return_type = bait__ast__VOID_TYPE
	if (eq(bait__parser__Parser_pos(p).line, par_line)) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	return bait__ast__Table_find_or_register_fun(p.table, param_types, return_type)
}

function bait__parser__Parser_parse_map_type(p) {
	if (eq(p.tok, bait__token__Token.rpar) && eq(p.pkg_name, from_js_string("builtin"))) {
		return bait__ast__MAP_TYPE
	}
	bait__parser__Parser_check(p, bait__token__Token.lsqr)
	const key_type = bait__parser__Parser_parse_type(p)
	if (!eq(key_type, bait__ast__STRING_TYPE)) {
		bait__parser__Parser_error(p, from_js_string("map key type must be string"))
	}
	bait__parser__Parser_check(p, bait__token__Token.rsqr)
	const val_type = bait__parser__Parser_parse_type(p)
	return bait__ast__Table_find_or_register_map(p.table, key_type, val_type)
}

function bait__parser__Parser_generic_type_names(p) {
	if (!eq(p.tok, bait__token__Token.lsqr)) {
		return new bait_Array({ data: [], length: 0 })
	}
	bait__parser__Parser_next(p)
	let names = new bait_Array({ data: [], length: 0 })
	while (true) {
		const name = bait__parser__Parser_check_name(p)
		if (i32(name.length > 1)) {
			bait__parser__Parser_error(p, from_js_string("generic types names have to be exactly one character"))
		}
		if (!u8_is_capital(string_get(name, 0))) {
			bait__parser__Parser_error(p, from_js_string("generic type names have to be capital letters"))
		}
		Array_push(names, name)
		const idx = bait__ast__Table_get_idx(p.table, name)
		if (eq(idx, 0)) {
			bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ name: name, kind: bait__ast__TypeKind.generic, is_pub: true }))
		}
		if (eq(p.tok, bait__token__Token.rsqr)) {
			break
		}
		bait__parser__Parser_check(p, bait__token__Token.comma)
	}
	bait__parser__Parser_next(p)
	return names
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


function bait__checker__Checker_decl_assign(c, node) {
	const typ = bait__checker__Checker_expr(c, node.right)
	if (eq(typ, bait__ast__PLACEHOLDER_TYPE)) {
		return
	}
	if (eq(typ, bait__ast__VOID_TYPE)) {
		bait__checker__Checker_error(c, from_js_string("cannot assign void to variable"), node.pos)
		return
	}
	if (!(node.left instanceof bait__ast__Ident)) {
		bait__checker__Checker_error(c, from_js_string("cannot declare a variable with a non-identifier"), node.pos)
		return
	}
	const left = node.left
	if (bait__ast__Scope_is_known(c.scope, left.name)) {
		bait__checker__Checker_error(c, from_js_string(`redefinition of ${left.name.str}`), node.pos)
		return
	}
	bait__ast__Scope_register(c.scope, left.name, new bait__ast__ScopeObject({ kind: bait__ast__ObjectKind.variable, typ: typ, is_mut: left.is_mut }))
	bait__checker__Checker_expr(c, node.left)
	node.left_type = typ
	node.right_type = typ
}

function bait__checker__Checker_assign_stmt(c, node) {
	if (eq(node.op, bait__token__Token.decl_assign)) {
		bait__checker__Checker_decl_assign(c, node)
		return
	}
	c.is_lhs_assign = true
	node.left_type = bait__checker__Checker_expr(c, node.left)
	c.is_lhs_assign = false
	c.expected_type = node.left_type
	node.right_type = bait__checker__Checker_expr(c, node.right)
	if (eq(node.left_type, bait__ast__PLACEHOLDER_TYPE) || (eq(node.right_type, bait__ast__VOID_TYPE) && !(node.right instanceof bait__ast__CallExpr))) {
		return
	}
	if (node.left instanceof bait__ast__Ident) {
		const left = node.left
		if (!left.is_mut) {
			bait__checker__Checker_error(c, from_js_string(`cannot assign to immutable variable "${left.name.str}"`), left.pos)
			return
		}
	} else if (node.left instanceof bait__ast__SelectorExpr) {
		let left = node.left
		if (!bait__checker__Checker_is_field_mutable(c, left)) {
			return
		}
		while (left.expr instanceof bait__ast__SelectorExpr) {
			left = left.expr
			if (!bait__checker__Checker_is_field_mutable(c, left)) {
				return
			}
		}
		if (left.expr instanceof bait__ast__Ident) {
			const lident = left.expr
			if (!lident.is_mut) {
				bait__checker__Checker_error(c, from_js_string(`cannot assign to field of immutable variable \`${lident.name.str}\``), node.pos)
				return
			}
		}
	}
	if (!bait__checker__Checker_check_types(c, node.right_type, node.left_type)) {
		bait__checker__Checker_error(c, from_js_string(`cannot assign type ${bait__ast__Table_type_name(c.table, node.right_type).str} to ${bait__ast__Table_type_name(c.table, node.left_type).str}`), node.pos)
	}
}

function bait__checker__Checker_is_field_mutable(c, left) {
	const sym = bait__ast__Table_get_sym(c.table, left.expr_type)
	const field = bait__ast__TypeSymbol_find_field(sym, left.field_name, c.table)
	if ((!field.is_mut || !eq(sym.pkg, c.pkg)) && !field.is_global) {
		bait__checker__Checker_error(c, from_js_string(`field \`${sym.name.str}.${left.field_name.str}\` is immutable`), left.pos)
		return false
	}
	return true
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
	if (eq(val_req, bait__checker__AttrValue.none) && i32(attr.value.length > 0)) {
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
	for (let _t255 = 0; _t255 < node.attrs.length; _t255++) {
		const attr = Array_get(node.attrs, _t255)
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
	if (Array_contains(new bait_Array({ data: [from_js_string("!="), from_js_string(">"), from_js_string("<="), from_js_string(">=")], length: 4 }), attr.value)) {
		bait__checker__Checker_error(c, from_js_string("cannot overload \"!=\", \">\", \"<=\" and \">=\" as they are generated from \"==\" and \"<\""), attr.pos)
		return
	}
	const is_math_overload = Array_contains(new bait_Array({ data: [from_js_string("+"), from_js_string("-"), from_js_string("*"), from_js_string("/"), from_js_string("%")], length: 5 }), attr.value)
	if (!is_math_overload && !Array_contains(new bait_Array({ data: [from_js_string("=="), from_js_string("<")], length: 2 }), attr.value)) {
		bait__checker__Checker_error(c, from_js_string(`cannot overload "${attr.value.str}"`), attr.pos)
		return
	}
	const rec_sym = bait__ast__Table_get_sym(c.table, Array_get(node.params, 0).typ)
	if (map_contains(rec_sym.overloads, attr.value)) {
		bait__checker__Checker_error(c, from_js_string(`"${attr.value.str}" was overloaded twice for type "${rec_sym.name.str}"`), attr.pos)
		return
	}
	map_set(rec_sym.overloads, attr.value, node)
	if (is_math_overload) {
		map_set(rec_sym.overloads, from_js_string(`${attr.value.str}=`), node)
	}
}

function bait__checker__Checker_attr_export(c, attr) {
	if (Array_contains(c.export_names, attr.value)) {
		bait__checker__Checker_error(c, from_js_string(`@export name "${attr.value.str}" is already used`), attr.pos)
		return
	}
	Array_push(c.export_names, attr.value)
}

function bait__checker__Checker_check_fun_attrs_on_call(c, call, def) {
	let is_deprecated = false
	let depr_attr = new bait__ast__Attribute({})
	let depr_date_attr = new bait__ast__Attribute({})
	for (let _t264 = 0; _t264 < def.attrs.length; _t264++) {
		const attr = Array_get(def.attrs, _t264)
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
		if (i32(depr_date_attr.name.length > 0)) {
			depr_message = string_add(depr_message, from_js_string(`will be deprecated after ${depr_date_attr.value.str}`))
		} else {
			depr_message = string_add(depr_message, from_js_string("is deprecated"))
		}
		if (i32(depr_attr.value.length > 0)) {
			depr_message = string_add(depr_message, from_js_string(`; ${depr_attr.value.str}`))
		}
		bait__checker__Checker_info(c, depr_message, call.pos)
	}
}

function bait__checker__Checker_check_struct_field_attrs(c, node) {
	for (let _t270 = 0; _t270 < node.fields.length; _t270++) {
		const field = Array_get(node.fields, _t270)
		for (let _t271 = 0; _t271 < field.attrs.length; _t271++) {
			const attr = Array_get(field.attrs, _t271)
			if (!bait__checker__Checker_check_attribute(c, attr, bait__checker__STRUCT_FIELD_ATTRS)) {
				continue
			}
			if (eq(attr.name, from_js_string("required")) && !(field.expr instanceof bait__ast__EmptyExpr)) {
				bait__checker__Checker_error(c, from_js_string("@required on field with default value is redundant"), attr.pos)
			}
		}
	}
}


function bait__checker__Checker({ prefs = new bait__preference__Prefs({}), table = new bait__ast__Table({}), scope = new bait__ast__Scope({}), path = from_js_string(""), pkg = from_js_string(""), has_main_pkg_files = false, has_main_fun = false, is_js_file = false, cur_fun = new bait__ast__FunDecl({}), expected_type = 0, is_lhs_assign = false, is_if_match_expr = false, returns = false, export_names = new bait_Array({ data: [], length: 0 }), infos = new bait_Array({ data: [], length: 0 }), warnings = new bait_Array({ data: [], length: 0 }), errors = new bait_Array({ data: [], length: 0 }) }) {
	this.prefs = prefs
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
	this.is_if_match_expr = is_if_match_expr
	this.returns = returns
	this.export_names = export_names
	this.infos = infos
	this.warnings = warnings
	this.errors = errors
}
function bait__checker__Checker_check_files(c, files) {
	for (let _t274 = 0; _t274 < files.length; _t274++) {
		const f = Array_get(files, _t274)
		bait__checker__Checker_check(c, f)
		f.infos = c.infos
		f.warnings = c.warnings
		f.errors = c.errors
		c.infos = new bait_Array({ data: [], length: 0 })
		c.warnings = new bait_Array({ data: [], length: 0 })
		c.errors = new bait_Array({ data: [], length: 0 })
	}
	if (c.prefs.is_library || c.prefs.is_test || c.prefs.is_script) {
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
	for (let _t278 = 0; _t278 < imports.length; _t278++) {
		const imp = Array_get(imports, _t278)
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
	Array_push(c.infos, new bait__errors__Message({ kind: bait__errors__Kind.info, path: c.path, pos: pos, title: from_js_string("note"), msg: msg }))
}

function bait__checker__Checker_warn(c, msg, pos) {
	Array_push(c.warnings, new bait__errors__Message({ kind: bait__errors__Kind.warning, path: c.path, pos: pos, title: from_js_string("warning"), msg: msg }))
}

function bait__checker__Checker_error(c, msg, pos) {
	Array_push(c.errors, new bait__errors__Message({ kind: bait__errors__Kind.error, path: c.path, pos: pos, title: from_js_string("error"), msg: msg }))
}

function bait__checker__Checker_generic_error(c, msg) {
	Array_push(c.errors, new bait__errors__Message({ kind: bait__errors__Kind.error, msg: msg }))
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
	} else if (expr instanceof bait__ast__ComptimeVar) {
		return bait__checker__Checker_comptime_var(c, expr)
	} else if (expr instanceof bait__ast__EnumVal) {
		return bait__checker__Checker_enum_val(c, expr)
	} else if (expr instanceof bait__ast__FloatLiteral) {
		return bait__ast__F64_TYPE
	} else if (expr instanceof bait__ast__HashExpr) {
		return bait__checker__Checker_hash_expr(c, expr)
	} else if (expr instanceof bait__ast__Ident) {
		return bait__checker__Checker_ident(c, expr)
	} else if (expr instanceof bait__ast__IfExpr) {
		return bait__checker__Checker_if_expr(c, expr, true)
	} else if (expr instanceof bait__ast__IndexExpr) {
		return bait__checker__Checker_index_expr(c, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		return bait__checker__Checker_infix_expr(c, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		return bait__ast__I32_TYPE
	} else if (expr instanceof bait__ast__MapInit) {
		return bait__checker__Checker_map_init(c, expr)
	} else if (expr instanceof bait__ast__MatchExpr) {
		return bait__checker__Checker_match_expr(c, expr, true)
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
		const e = expr
		bait__checker__Checker_error(c, from_js_string(`unexpected expr: ${bait__ast__EmptyExpr_str(e, 0).str}`), e.pos)
		return bait__ast__PLACEHOLDER_TYPE
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
		if (!(node.cap_expr instanceof bait__ast__EmptyExpr)) {
			const typ = bait__checker__Checker_expr(c, node.cap_expr)
			if (!bait__checker__Checker_check_types(c, typ, bait__ast__I32_TYPE)) {
				bait__checker__Checker_error(c, from_js_string(`expected i32, got ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
			}
		}
		return node.typ
	}
	for (let i = 0; i < node.exprs.length; i++) {
		const e = Array_get(node.exprs, i)
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
	if (i32(bait__ast__Type_get_nr_amp(expr_type) >= 1) && eq(bait__ast__Type_get_nr_amp(node.target), 0)) {
		bait__checker__Checker_error(c, from_js_string("cannot cast to normal type from pointer"), node.pos)
		return expr_type
	}
	if (eq(expr_sym.kind, bait__ast__TypeKind.sum_type) && node.expr instanceof bait__ast__Ident) {
		const expr = node.expr
		bait__ast__Scope_update_type(c.scope, expr.name, node.target)
	}
	return node.target
}

const bait__checker__SUPPORTED_COMPTIME_VARS = new bait_Array({ data: [from_js_string("PKG"), from_js_string("FILE"), from_js_string("ABS_FILE"), from_js_string("LINE"), from_js_string("FILE_LINE"), from_js_string("FUN"), from_js_string("BAITEXE"), from_js_string("BAITDIR"), from_js_string("BAITHASH")], length: 9 })
function bait__checker__Checker_comptime_var(c, node) {
	if (!Array_contains(bait__checker__SUPPORTED_COMPTIME_VARS, node.name)) {
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
		return bait__ast__PLACEHOLDER_TYPE
	}
	if (!eq(sym.kind, bait__ast__TypeKind.enum_)) {
		bait__checker__Checker_error(c, from_js_string(`expected type is not an enum, got ${sym.name.str}`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	if (!sym.is_pub && string_contains(sym.name, from_js_string(".")) && !eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`enum ${sym.name.str} is private`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	const info = sym.info
	if (!Array_contains(info.vals, node.val)) {
		bait__checker__Checker_error(c, from_js_string(`enum ${sym.name.str} has no value ${node.val.str}`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	node.name = sym.name
	return node.typ
}

function bait__checker__Checker_hash_expr(c, node) {
	if (eq(node.lang, bait__ast__Language.js) && !c.is_js_file) {
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
		node.is_mut = obj.is_mut
		return obj.typ
	}
	if (!string_contains(node.name, from_js_string(".")) && !eq(node.pkg, from_js_string("builtin")) && !eq(node.pkg, from_js_string("main"))) {
		node.name = string_add(string_add(node.pkg, from_js_string(".")), node.name)
	}
	obj = bait__ast__Scope_get(c.table.global_scope, node.name)
	if (eq(obj.typ, bait__ast__PLACEHOLDER_TYPE)) {
		bait__checker__Checker_error(c, from_js_string(`undefined identifier ${node.name.str}`), node.pos)
	}
	if (eq(obj.typ, bait__ast__VOID_TYPE)) {
		obj.typ = bait__checker__Checker_expr(c, obj.expr)
	}
	node.is_mut = obj.is_mut
	return obj.typ
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
		const key = Array_get(node.keys, i)
		const key_type = bait__checker__Checker_expr(c, key)
		if (i32(i >= 1)) {
			c.expected_type = node.val_type
		}
		const val_type = bait__checker__Checker_expr(c, Array_get(node.vals, i))
		if (eq(i, 0)) {
			node.key_type = key_type
			node.val_type = val_type
		} else {
			if (!bait__checker__Checker_check_types(c, key_type, node.key_type)) {
				const key_expr = key
				bait__checker__Checker_error(c, from_js_string(`expected key type ${bait__ast__Table_type_name(c.table, node.key_type).str}, got ${bait__ast__Table_type_name(c.table, key_type).str}`), key_expr.pos)
			}
			if (!bait__checker__Checker_check_types(c, val_type, node.val_type)) {
				const val_expr = Array_get(node.vals, i)
				bait__checker__Checker_error(c, from_js_string(`expected value type ${bait__ast__Table_type_name(c.table, node.val_type).str}, got ${bait__ast__Table_type_name(c.table, val_type).str}`), val_expr.pos)
			}
		}
	}
	node.typ = bait__ast__Table_find_or_register_map(c.table, node.key_type, node.val_type)
	return node.typ
}

function bait__checker__Checker_par_expr(c, node) {
	return bait__checker__Checker_expr(c, node.expr)
}

function bait__checker__Checker_prefix_expr(c, node) {
	const typ = bait__checker__Checker_expr(c, node.right)
	const sym = bait__ast__Table_get_sym(c.table, typ)
	if (eq(node.op, bait__token__Token.minus) && !eq(sym.kind, bait__ast__TypeKind.number)) {
		bait__checker__Checker_error(c, from_js_string(`cannot negate ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	if (eq(node.op, bait__token__Token.key_not) && !eq(typ, bait__ast__BOOL_TYPE)) {
		bait__checker__Checker_error(c, from_js_string(`cannot use \`not\` on ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	if (eq(node.op, bait__token__Token.caret)) {
		if (eq(bait__ast__Type_get_nr_amp(typ), 0)) {
			bait__checker__Checker_error(c, from_js_string(`cannot dereference ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
			return bait__ast__PLACEHOLDER_TYPE
		}
		return bait__ast__Type_set_nr_amp(typ, i32(bait__ast__Type_get_nr_amp(typ) - 1))
	}
	return typ
}

function bait__checker__Checker_selector_expr(c, node) {
	if (node.expr instanceof bait__ast__IndexExpr) {
		let expr = node.expr
		expr.is_selector = true
	}
	node.expr_type = bait__checker__Checker_expr(c, node.expr)
	let sym = bait__ast__Table_get_sym(c.table, node.expr_type)
	if (eq(sym.kind, bait__ast__TypeKind.alias_type)) {
		sym = bait__ast__Table_get_sym(c.table, sym.parent)
	}
	if (Array_contains(new bait_Array({ data: [bait__ast__TypeKind.struct_, bait__ast__TypeKind.interface_, bait__ast__TypeKind.array, bait__ast__TypeKind.string, bait__ast__TypeKind.map], length: 5 }), sym.kind)) {
		const field = bait__ast__TypeSymbol_find_field(sym, node.field_name, c.table)
		if (eq(field.name.length, 0)) {
			bait__checker__Checker_error(c, from_js_string(`${sym.name.str} has no field ${node.field_name.str}`), node.pos)
			return bait__ast__PLACEHOLDER_TYPE
		}
		if (!field.is_pub && !eq(sym.pkg, c.pkg)) {
			bait__checker__Checker_error(c, from_js_string(`field ${sym.name.str}.${node.field_name.str} is private`), node.pos)
		}
		return field.typ
	}
	if (eq(sym.kind, bait__ast__TypeKind.sum_type)) {
		bait__checker__Checker_error(c, from_js_string(`cast to the variant before accessing field of sumtype ${sym.name.str}`), node.pos)
		return bait__ast__VOID_TYPE
	}
	bait__checker__Checker_error(c, from_js_string(`cannot select from ${bait__ast__Table_type_name(c.table, node.expr_type).str}`), node.pos)
	return bait__ast__PLACEHOLDER_TYPE
}

function bait__checker__Checker_string_literal(c, node) {
	return bait__ast__STRING_TYPE
}

function bait__checker__Checker_string_inter_literal(c, node) {
	for (let _t323 = 0; _t323 < node.exprs.length; _t323++) {
		const e = Array_get(node.exprs, _t323)
		const typ = bait__checker__Checker_expr(c, e)
		Array_push(node.expr_types, typ)
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
	c.returns = false
	if (!node.is_method) {
		if (bait__ast__Scope_is_known(c.scope, node.name)) {
			bait__checker__Checker_error(c, from_js_string(`redefinition of ${node.name.str}`), node.pos)
		}
		let param_types = new bait_Array({ data: [], length: 0 })
		for (let _t327 = 0; _t327 < node.params.length; _t327++) {
			const param = Array_get(node.params, _t327)
			Array_push(param_types, param.typ)
		}
		bait__ast__Scope_register(c.scope, node.name, new bait__ast__ScopeObject({ typ: bait__ast__Table_find_or_register_fun(c.table, param_types, node.return_type), kind: bait__ast__ObjectKind.function }))
	}
	c.cur_fun = node
	bait__checker__Checker_check_fun_attrs(c, node)
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_fun_params(c, node.params)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
	if (!eq(node.return_type, bait__ast__VOID_TYPE) && !bait__checker__has_toplevel_return(node.stmts) && !c.returns) {
		bait__checker__Checker_error(c, from_js_string("missing return statement"), node.pos)
	}
	c.cur_fun = new bait__ast__FunDecl({ return_type: bait__ast__VOID_TYPE })
}

function bait__checker__Checker_fun_params(c, params) {
	for (let _t329 = 0; _t329 < params.length; _t329++) {
		const p = Array_get(params, _t329)
		if (bait__ast__Scope_is_known(c.scope, p.name)) {
			bait__checker__Checker_error(c, from_js_string(`cannot shadow import "${p.name.str}"`), p.pos)
			continue
		}
		const sym = bait__ast__Table_get_sym(c.table, p.typ)
		if (eq(sym.kind, bait__ast__TypeKind.fun_)) {
			bait__ast__Scope_register(c.scope, p.name, new bait__ast__ScopeObject({ typ: p.typ, kind: bait__ast__ObjectKind.function }))
		} else {
			bait__ast__Scope_register(c.scope, p.name, new bait__ast__ScopeObject({ typ: p.typ, is_mut: p.is_mut, kind: bait__ast__ObjectKind.variable }))
		}
	}
}

function bait__checker__Checker_check_main_fun(c, stmts) {
	for (let _t332 = 0; _t332 < stmts.length; _t332++) {
		const stmt = Array_get(stmts, _t332)
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
		return bait__ast__PLACEHOLDER_TYPE
	}
	let def = map_get_set(c.table.fun_decls, node.name, new bait__ast__FunDecl({}))
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
		Array_get(node.args, 0).typ = bait__checker__Checker_expr(c, Array_get(node.args, 0).expr)
		return bait__ast__VOID_TYPE
	}
	bait__checker__Checker_call_args(c, def, node)
	if (i32(node.concrete_types.length > 0)) {
		Array_push(def.concrete_types, node.concrete_types)
		const ret_sym = bait__ast__Table_get_sym(c.table, node.return_type)
		if (eq(ret_sym.kind, bait__ast__TypeKind.generic)) {
			node.return_type = Array_get(node.concrete_types, Array_index_string(def.generic_names, ret_sym.name))
		}
	}
	return node.return_type
}

function bait__checker__Checker_method_call(c, node) {
	const left_expr_type = bait__checker__Checker_expr(c, node.left)
	if (eq(left_expr_type, bait__ast__PLACEHOLDER_TYPE)) {
		return bait__ast__PLACEHOLDER_TYPE
	}
	const left_sym = bait__ast__Table_get_sym(c.table, left_expr_type)
	const final_sym = bait__ast__Table_get_final_sym(c.table, left_expr_type)
	let def = bait__ast__Table_get_method(c.table, left_sym, node.name)
	if (eq(def.name.length, 0)) {
		if (eq(node.name, from_js_string("str"))) {
			if (i32(node.args.length > 0)) {
				bait__checker__Checker_error(c, from_js_string(`expected 0 arguments but got ${i32_str(node.args.length).str}`), node.pos)
				return bait__ast__STRING_TYPE
			}
			Array_push(c.table.needed_str_funs, left_expr_type)
			node.return_type = bait__ast__STRING_TYPE
			node.left_type = left_expr_type
			return node.return_type
		}
		bait__checker__Checker_error(c, from_js_string(`method ${node.name.str} not found on type ${left_sym.name.str}`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	if (!def.is_pub && !eq(left_sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`method ${def.name.str} is private`), node.pos)
	}
	node.lang = def.lang
	node.return_type = def.return_type
	if (Array_get(def.params, 0).is_mut) {
		if (node.left instanceof bait__ast__Ident && !(node.left).is_mut) {
			bait__checker__Checker_error(c, from_js_string("method requires an mutable receiver"), node.pos)
			return node.return_type
		}
	}
	if (i32(bait__ast__Type_get_nr_amp(left_expr_type) < bait__ast__Type_get_nr_amp(Array_get(def.params, 0).typ))) {
		node.left = new bait__ast__PrefixExpr({ op: bait__token__Token.amp, right: node.left })
	}
	node.left_type = Array_get(def.params, 0).typ
	if (eq(final_sym.kind, bait__ast__TypeKind.array) && Array_contains(new bait_Array({ data: [from_js_string("push"), from_js_string("push_many_with_len"), from_js_string("push_many")], length: 3 }), node.name)) {
		node.left_type = left_expr_type
	}
	bait__checker__Checker_check_fun_attrs_on_call(c, node, def)
	if (!eq(i32(node.args.length + 1), def.params.length)) {
		bait__checker__Checker_error(c, from_js_string(`expected ${i32_str(i32(def.params.length - 1)).str} arguments but got ${i32_str(node.args.length).str}`), node.pos)
		return node.return_type
	}
	if (eq(final_sym.kind, bait__ast__TypeKind.array) && Array_contains(new bait_Array({ data: [from_js_string("push"), from_js_string("push_many_with_len"), from_js_string("contains")], length: 3 }), node.name)) {
		let arg = Array_get(node.args, 0)
		const info = final_sym.info
		c.expected_type = info.elem_type
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (!bait__checker__Checker_check_types(c, arg.typ, info.elem_type)) {
			bait__checker__Checker_error(c, from_js_string(`type ${bait__ast__Table_type_name(c.table, arg.typ).str} not matches ${bait__ast__Table_type_name(c.table, info.elem_type).str} in argument 1`), node.pos)
		}
		return node.return_type
	}
	if (eq(final_sym.kind, bait__ast__TypeKind.array) && Array_contains(new bait_Array({ data: [from_js_string("concat"), from_js_string("push_many")], length: 2 }), node.name)) {
		let arg = Array_get(node.args, 0)
		c.expected_type = left_expr_type
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (!bait__checker__Checker_check_types(c, arg.typ, left_expr_type)) {
			bait__checker__Checker_error(c, from_js_string(`type ${bait__ast__Table_type_name(c.table, arg.typ).str} not matches ${bait__ast__Table_type_name(c.table, left_expr_type).str} in argument 1`), node.pos)
		}
		return node.return_type
	}
	bait__checker__Checker_call_args(c, def, node)
	if (eq(left_sym.kind, bait__ast__TypeKind.array) && Array_contains(new bait_Array({ data: [from_js_string("filter"), from_js_string("reverse"), from_js_string("slice"), from_js_string("copy"), from_js_string("from_js_arr")], length: 5 }), node.name)) {
		return left_expr_type
	}
	if (i32(node.concrete_types.length > 0)) {
		Array_push(def.concrete_types, node.concrete_types)
		const ret_sym = bait__ast__Table_get_sym(c.table, node.return_type)
		if (eq(ret_sym.kind, bait__ast__TypeKind.generic)) {
			node.return_type = Array_get(node.concrete_types, Array_index_string(def.generic_names, ret_sym.name))
		}
	}
	return node.return_type
}

function bait__checker__Checker_call_args(c, def, node) {
	const should_resolve_generics = !eq(def.generic_names.length, node.concrete_types.length)
	let save_as_concrete = false
	let poffset = 0
	if (node.is_method) {
		poffset = 1
	}
	for (let i = 0; i < node.args.length; i++) {
		const arg = Array_get(node.args, i)
		let param_type = Array_get(def.params, i32(i + poffset)).typ
		const psym = bait__ast__Table_get_sym(c.table, param_type)
		if (should_resolve_generics && eq(psym.kind, bait__ast__TypeKind.generic)) {
			const gi = Array_index_string(def.generic_names, psym.name)
			if (i32(gi < node.concrete_types.length)) {
				param_type = Array_get(node.concrete_types, gi)
			} else {
				save_as_concrete = true
			}
		}
		c.expected_type = param_type
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (eq(arg.typ, bait__ast__VOID_TYPE) && !(arg.expr instanceof bait__ast__CallExpr)) {
			continue
		}
		if (save_as_concrete) {
			Array_push(node.concrete_types, arg.typ)
			save_as_concrete = false
		}
		if (!bait__checker__Checker_check_types(c, arg.typ, param_type)) {
			bait__checker__Checker_error(c, from_js_string(`type ${bait__ast__Table_type_name(c.table, arg.typ).str} not matches ${bait__ast__Table_type_name(c.table, param_type).str} in argument ${i32_str(i32(i + 1)).str}`), node.pos)
		}
	}
}

function bait__checker__has_toplevel_return(stmts) {
	for (let _t368 = 0; _t368 < stmts.length; _t368++) {
		const stmt = Array_get(stmts, _t368)
		if (stmt instanceof bait__ast__ReturnStmt) {
			return true
		}
		if (stmt instanceof bait__ast__ExprStmt) {
			if (stmt.expr instanceof bait__ast__CallExpr) {
				const expr = stmt.expr
				if (!expr.is_method && Array_contains(new bait_Array({ data: [from_js_string("panic"), from_js_string("exit")], length: 2 }), expr.name)) {
					return true
				}
			}
		}
	}
	return false
}


function bait__checker__Checker_if_expr(c, node, is_expr) {
	if (is_expr) {
		c.is_if_match_expr = true
		node.typ = c.cur_fun.return_type
	}
	let nr_branches_return = 0
	for (let i = 0; i < node.branches.length; i++) {
		const branch = Array_get(node.branches, i)
		bait__checker__Checker_open_scope(c)
		if (!node.has_else || i32(i < i32(node.branches.length - 1))) {
			const cond_type = bait__checker__Checker_expr(c, branch.cond)
			if (!eq(cond_type, bait__ast__BOOL_TYPE) && !eq(cond_type, bait__ast__PLACEHOLDER_TYPE)) {
				bait__checker__Checker_error(c, from_js_string(`expected bool, got ${bait__ast__Table_type_name(c.table, cond_type).str}`), node.pos)
			}
		}
		if (is_expr) {
			c.expected_type = node.typ
		}
		bait__checker__Checker_stmts(c, branch.stmts)
		bait__checker__Checker_close_scope(c)
		if (is_expr) {
			const last = Array_last(branch.stmts)
			if (!(last instanceof bait__ast__ExprStmt) || eq((last).typ, bait__ast__VOID_TYPE)) {
				bait__checker__Checker_error(c, from_js_string("branch does not return a value"), branch.pos)
				continue
			}
			const typ = (last).typ
			if (eq(node.typ, bait__ast__VOID_TYPE)) {
				node.typ = typ
			} else if (!bait__checker__Checker_check_types(c, typ, node.typ)) {
				bait__checker__Checker_error(c, from_js_string(`branch returns ${bait__ast__Table_type_name(c.table, typ).str}, expected ${bait__ast__Table_type_name(c.table, node.typ).str}`), branch.pos)
			}
		} else if (bait__checker__has_toplevel_return(branch.stmts)) {
			nr_branches_return += 1
		}
	}
	c.returns = eq(nr_branches_return, node.branches.length)
	c.is_if_match_expr = false
	return node.typ
}

function bait__checker__Checker_match_expr(c, node, is_expr) {
	node.cond_type = bait__checker__Checker_expr(c, node.cond)
	if (eq(node.branches.length, 0)) {
		bait__checker__Checker_error(c, from_js_string("match expression must have at least one branch"), node.pos)
		return bait__ast__VOID_TYPE
	}
	if (is_expr) {
		c.is_if_match_expr = true
		node.typ = c.cur_fun.return_type
	}
	let nr_branches_return = 0
	const sym = bait__ast__Table_get_sym(c.table, node.cond_type)
	node.is_sumtype = eq(sym.kind, bait__ast__TypeKind.sum_type)
	for (let _t382 = 0; _t382 < node.branches.length; _t382++) {
		const branch = Array_get(node.branches, _t382)
		bait__checker__Checker_open_scope(c)
		for (let _t383 = 0; _t383 < branch.exprs.length; _t383++) {
			const e = Array_get(branch.exprs, _t383)
			if (node.is_sumtype) {
				const expr = e
				const variant = bait__ast__Table_get_idx(c.table, expr.name)
				const info = sym.info
				if (!Array_contains(info.variants, variant)) {
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
				Array_push(branch.expr_types, expr_type)
			}
		}
		if (is_expr) {
			c.expected_type = node.typ
		}
		bait__checker__Checker_stmts(c, branch.stmts)
		bait__checker__Checker_close_scope(c)
		if (is_expr) {
			const last = Array_last(branch.stmts)
			if (!(last instanceof bait__ast__ExprStmt) || eq((last).typ, bait__ast__VOID_TYPE)) {
				bait__checker__Checker_error(c, from_js_string("branch does not return a value"), branch.pos)
				continue
			}
			const typ = (last).typ
			if (eq(node.typ, bait__ast__VOID_TYPE)) {
				node.typ = typ
			} else if (!bait__checker__Checker_check_types(c, typ, node.typ)) {
				bait__checker__Checker_error(c, from_js_string(`branch returns ${bait__ast__Table_type_name(c.table, typ).str}, expected ${bait__ast__Table_type_name(c.table, node.typ).str}`), branch.pos)
			}
		} else if (bait__checker__has_toplevel_return(branch.stmts)) {
			nr_branches_return += 1
		}
	}
	c.returns = eq(nr_branches_return, node.branches.length)
	c.is_if_match_expr = false
	return node.typ
}


function bait__checker__Checker_infix_expr(c, node) {
	node.left_type = bait__checker__Checker_expr(c, node.left)
	if (eq(node.left_type, bait__ast__PLACEHOLDER_TYPE)) {
		return bait__ast__PLACEHOLDER_TYPE
	}
	Array_push(c.table.needed_equality_funs, node.left_type)
	if (eq(node.op, bait__token__Token.key_is)) {
		return bait__checker__Checker_is_sumtype_variant_infix(c, node)
	}
	c.expected_type = node.left_type
	node.right_type = bait__checker__Checker_expr(c, node.right)
	if (!bait__checker__Checker_check_types(c, node.right_type, node.left_type)) {
		bait__checker__Checker_error(c, from_js_string(`infix expr: types ${bait__ast__Table_type_name(c.table, node.left_type).str} and ${bait__ast__Table_type_name(c.table, node.right_type).str} do not match`), node.pos)
	}
	if (bait__token__Token_is_compare(node.op)) {
		return bait__ast__BOOL_TYPE
	}
	const lsym = bait__ast__Table_get_sym(c.table, node.left_type)
	if (map_contains(lsym.overloads, bait__token__Token_js_repr(node.op))) {
		return map_get_set(lsym.overloads, bait__token__Token_js_repr(node.op), new bait__ast__FunDecl({})).return_type
	}
	return node.left_type
}

function bait__checker__Checker_is_sumtype_variant_infix(c, node) {
	if (node.left instanceof bait__ast__Ident) {
		let right = node.right
		if (!string_contains(right.name, from_js_string(".")) && !eq(right.pkg, from_js_string("main"))) {
			right.name = string_add(string_add(right.pkg, from_js_string(".")), right.name)
		}
		node.right_type = bait__ast__Table_get_idx(c.table, right.name)
		const left = node.left
		bait__ast__Scope_update_type(c.scope, left.name, node.right_type)
		return bait__ast__BOOL_TYPE
	}
	if (node.left instanceof bait__ast__SelectorExpr) {
		let right = node.right
		if (!string_contains(right.name, from_js_string(".")) && !eq(right.pkg, from_js_string("main"))) {
			right.name = string_add(string_add(right.pkg, from_js_string(".")), right.name)
		}
		node.right_type = bait__ast__Table_get_idx(c.table, right.name)
		const left = node.left
		const name = string_add(string_add((left.expr).name, from_js_string(".")), left.field_name)
		bait__ast__Scope_update_type(c.scope, name, node.right_type)
		return bait__ast__BOOL_TYPE
	}
	return bait__ast__BOOL_TYPE
}


function bait__checker__Checker_stmts(c, stmts) {
	for (let _t400 = 0; _t400 < stmts.length; _t400++) {
		const stmt = Array_get(stmts, _t400)
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
	} else if (stmt instanceof bait__ast__IfExpr) {
		bait__checker__Checker_if_expr(c, stmt, false)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
		bait__checker__Checker_interface_decl(c, stmt)
	} else if (stmt instanceof bait__ast__LoopControlStmt) {
		bait__checker__Checker_loop_control_stmt(c, stmt)
	} else if (stmt instanceof bait__ast__MatchExpr) {
		bait__checker__Checker_match_expr(c, stmt, false)
	} else if (stmt instanceof bait__ast__ReturnStmt) {
		bait__checker__Checker_return_stmt(c, stmt)
	} else if (stmt instanceof bait__ast__StructDecl) {
		bait__checker__Checker_struct_decl(c, stmt)
	} else if (stmt instanceof bait__ast__TypeDecl) {
		bait__checker__Checker_type_decl(c, stmt)
	} else {
		const s = stmt
		bait__checker__Checker_error(c, from_js_string(`unexpected stmt: ${bait__ast__EmptyStmt_str(s, 0).str}`), s.pos)
	}
	c.expected_type = bait__ast__VOID_TYPE
}

function bait__checker__Checker_assert_stmt(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	if (!bait__checker__Checker_check_types(c, typ, bait__ast__BOOL_TYPE)) {
		bait__checker__Checker_error(c, from_js_string("assert must be of type bool"), node.pos)
	}
}

function bait__checker__Checker_const_decl(c, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	node.typ = bait__checker__Checker_expr(c, node.expr)
	bait__ast__Scope_update_type(c.table.global_scope, node.name, node.typ)
}

function bait__checker__Checker_expr_stmt(c, node) {
	const expr = node.expr
	node.typ = bait__checker__Checker_expr(c, expr)
	if (c.is_if_match_expr || expr instanceof bait__ast__CallExpr || expr instanceof bait__ast__IfExpr || expr instanceof bait__ast__MatchExpr || expr instanceof bait__ast__HashExpr) {
		return
	}
	const e = expr
	bait__checker__Checker_error(c, from_js_string("expression evaluated but not used"), e.pos)
}

function bait__checker__Checker_enum_decl(c, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	if (eq(node.fields.length, 0)) {
		bait__checker__Checker_error(c, from_js_string("enum cannot be empty"), node.pos)
		return
	}
	let cur_val = 0
	outer: for (let i = 0; i < node.fields.length; i++) {
		const field = Array_get(node.fields, i)
		for (let j = 0; i32(j < i); j += 1) {
			if (eq(field.name, Array_get(node.fields, j).name)) {
				bait__checker__Checker_error(c, from_js_string(`duplicate field name ${field.name.str}`), field.pos)
				continue outer
			}
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
		if (i32(val < cur_val)) {
			bait__checker__Checker_error(c, from_js_string("enum field value must be greater than previous field"), field.pos)
			continue
		}
		cur_val = i32(val + 1)
	}
}

function bait__checker__Checker_register_label(c, label, pos) {
	if (eq(label.length, 0)) {
		return
	}
	if (bait__ast__Scope_is_known(c.scope, label)) {
		bait__checker__Checker_error(c, from_js_string(`redefinition of "${label.str}"`), pos)
		return
	}
	bait__ast__Scope_register(c.scope, label, new bait__ast__ScopeObject({ kind: bait__ast__ObjectKind.label }))
}

function bait__checker__Checker_for_loop(c, node) {
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_register_label(c, node.label, node.pos)
	bait__checker__Checker_expr(c, node.cond)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_for_classic_loop(c, node) {
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_register_label(c, node.label, node.pos)
	bait__checker__Checker_stmt(c, node.init)
	bait__checker__Checker_expr(c, node.cond)
	bait__checker__Checker_stmt(c, node.inc)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_for_in_loop(c, node) {
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_register_label(c, node.label, node.pos)
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
	if (i32(node.idxvar.length > 0)) {
		bait__ast__Scope_register(c.scope, node.idxvar, new bait__ast__ScopeObject({ typ: idx_type }))
	}
	bait__ast__Scope_register(c.scope, node.valvar.name, new bait__ast__ScopeObject({ typ: val_type, is_mut: node.valvar.is_mut }))
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_global_decl(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	bait__ast__Scope_update_type(c.table.global_scope, node.name, typ)
}

function bait__checker__Checker_interface_decl(c, node) {
}

function bait__checker__Checker_loop_control_stmt(c, node) {
	if (eq(node.label.length, 0)) {
		return
	}
	const obj = bait__ast__Scope_get(c.scope, node.label)
	if (!eq(obj.kind, bait__ast__ObjectKind.label)) {
		bait__checker__Checker_error(c, from_js_string(`label "${node.label.str}" not found`), node.pos)
	}
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
	if (!u8_is_capital(string_get(node.name, 0)) && !eq(node.name, from_js_string("string")) && !eq(node.name, from_js_string("map"))) {
		bait__checker__Checker_warn(c, from_js_string(`struct name \`${node.name.str}\` must start with a capital letter`), node.pos)
	}
	outer: for (let i = 0; i < node.fields.length; i++) {
		const field = Array_get(node.fields, i)
		let should_continue = false
		for (let j = 0; i32(j < i); j += 1) {
			if (eq(field.name, Array_get(node.fields, j).name)) {
				bait__checker__Checker_error(c, from_js_string(`duplicate field name ${field.name.str}`), field.pos)
				continue outer
			}
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
		return bait__ast__PLACEHOLDER_TYPE
	}
	if (!sym.is_pub && string_contains(sym.name, from_js_string(".")) && !eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`struct ${sym.name.str} is private`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	bait__checker__Checker_check_init_field_values(c, node, sym.info)
	node.name = sym.name
	for (let _t428 = 0; _t428 < node.fields.length; _t428++) {
		const field = Array_get(node.fields, _t428)
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
	for (let _t432 = 0; _t432 < info.fields.length; _t432++) {
		const def_field = Array_get(info.fields, _t432)
		const def_sym = bait__ast__Table_get_sym(c.table, def_field.typ)
		let is_required = eq(def_sym.kind, bait__ast__TypeKind.sum_type)
		for (let _t433 = 0; _t433 < def_field.attrs.length; _t433++) {
			const attr = Array_get(def_field.attrs, _t433)
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
		for (let _t437 = 0; _t437 < init.fields.length; _t437++) {
			const inited = Array_get(init.fields, _t437)
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
	if (eq(bait__ast__Type_idx(got), bait__ast__Type_idx(expected))) {
		return true
	}
	if (eq(got, bait__ast__ANY_TYPE) || eq(expected, bait__ast__ANY_TYPE)) {
		return true
	}
	if (eq(bait__ast__Type_idx(expected), 1) && i32(bait__ast__Type_get_nr_amp(expected) >= 1) && i32(bait__ast__Type_get_nr_amp(got) >= 1)) {
		return true
	}
	const got_sym = bait__ast__Table_get_sym(c.table, got)
	const exp_sym = bait__ast__Table_get_sym(c.table, expected)
	if (eq(exp_sym.kind, bait__ast__TypeKind.generic) && !eq(got_sym.kind, bait__ast__TypeKind.generic)) {
		return true
	}
	if (eq(bait__ast__Type_idx(exp_sym.parent), bait__ast__Type_idx(got))) {
		return true
	}
	if (eq(exp_sym.kind, bait__ast__TypeKind.array) && eq(got_sym.kind, bait__ast__TypeKind.array)) {
		if (eq(exp_sym.name, from_js_string("Array")) || eq(got_sym.name, from_js_string("Array"))) {
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
		return Array_contains(info.variants, got)
	}
	if (eq(got_sym.kind, bait__ast__TypeKind.fun_) && eq(exp_sym.kind, bait__ast__TypeKind.fun_)) {
		const got_info = got_sym.info
		const exp_info = exp_sym.info
		if (!eq(got_info.param_types.length, exp_info.param_types.length)) {
			return false
		}
		for (let i = 0; i32(i < got_info.param_types.length); i += 1) {
			if (!bait__checker__Checker_check_types(c, Array_get(got_info.param_types, i), Array_get(exp_info.param_types, i))) {
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
		for (let _t461 = 0; _t461 < info.variants.length; _t461++) {
			const variant = Array_get(info.variants, _t461)
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
	while (i32(i < s.length)) {
		const c = string_get(s, i)
		if (eq(c, esc_char)) {
			if (!is_escaped) {
				res = string_add(res, from_js_string("\\"))
			}
		}
		res = string_add(res, u8_ascii(c))
		i += 1
		if (eq(c, u8("\\")) && !is_escaped) {
			is_escaped = true
		} else {
			is_escaped = false
		}
	}
	return res
}

function bait__util__escape_linebreak(s) {
	let _t466 = undefined
	if (eq(os__platform(), from_js_string("win32"))) {
		_t466 = string_replace(s, from_js_string("\r\n"), from_js_string("\\r\\n"))
	} else {
		_t466 = string_replace(s, from_js_string("\n"), from_js_string("\\n"))
	}
	return _t466
}

function bait__util__shell_escape(s) {
	return bait__util__escape_char(s, u8("\`"))
}


const bait__util__VERSION = from_js_string("0.0.5")
const bait__util__FULL_VERSION = from_js_string(`${bait__util__VERSION.str} ${from_js_string("a2a0d15").str}`)

function bait__gen__js__Gen_comptime_var(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("from_js_string(\""))
	bait__gen__js__Gen_write(g, bait__gen__js__Gen_get_comptime_val(g, node.name, node.pos))
	bait__gen__js__Gen_write(g, from_js_string("\")"))
}

function bait__gen__js__Gen_get_comptime_val(g, name, pos) {
	let _t467 = undefined
	switch (name.str) {
		case from_js_string("PKG").str:
			{
				_t467 = g.pkg
				break
			}
		case from_js_string("ABS_FILE").str:
			{
				_t467 = string_replace(os__abs_path(g.path), from_js_string("\\"), from_js_string("\\\\"))
				break
			}
		case from_js_string("FILE").str:
			{
				_t467 = string_replace(g.path, from_js_string("\\"), from_js_string("\\\\"))
				break
			}
		case from_js_string("LINE").str:
			{
				_t467 = i32_str(pos.line)
				break
			}
		case from_js_string("FILE_LINE").str:
			{
				const file = bait__gen__js__Gen_get_comptime_val(g, from_js_string("FILE"), pos)
				const line = bait__gen__js__Gen_get_comptime_val(g, from_js_string("LINE"), pos)
				_t467 = from_js_string(`${file.str}:${line.str}`)
				break
			}
		case from_js_string("FUN").str:
			{
				_t467 = g.cur_fun.name
				break
			}
		case from_js_string("BAITEXE").str:
			{
				_t467 = bait__gen__js__Gen_comptime_baitexe(g)
				break
			}
		case from_js_string("BAITDIR").str:
			{
				_t467 = bait__gen__js__Gen_comptime_baitdir(g)
				break
			}
		case from_js_string("BAITHASH").str:
			{
				_t467 = bait__gen__js__Gen_comptime_baithash(g)
				break
			}
	}
	return _t467
}

function bait__gen__js__Gen_comptime_baitexe(g) {
	if (eq(g.baitexe.length, 0)) {
		g.baitexe = string_replace(os__executable(), from_js_string("\\"), from_js_string("\\\\"))
	}
	return g.baitexe
}

function bait__gen__js__Gen_comptime_baitdir(g) {
	if (eq(g.baitdir.length, 0)) {
		g.baitdir = string_trim_right(os__dir(bait__gen__js__Gen_comptime_baitexe(g)), from_js_string("\\"))
	}
	return g.baitdir
}

function bait__gen__js__Gen_comptime_baithash(g) {
	if (eq(g.baithash.length, 0)) {
		const bd = bait__gen__js__Gen_comptime_baitdir(g)
		g.baithash = string_trim_space(os__exec(from_js_string(`git -C ${bd.str} rev-parse --short HEAD`)).stdout)
	}
	return g.baithash
}


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
	} else if (expr instanceof bait__ast__ComptimeVar) {
		bait__gen__js__Gen_comptime_var(g, expr)
	} else if (expr instanceof bait__ast__EnumVal) {
		bait__gen__js__Gen_enum_val(g, expr)
	} else if (expr instanceof bait__ast__FloatLiteral) {
		bait__gen__js__Gen_float_literal(g, expr)
	} else if (expr instanceof bait__ast__HashExpr) {
		bait__gen__js__Gen_hash_expr(g, expr)
	} else if (expr instanceof bait__ast__Ident) {
		bait__gen__js__Gen_ident(g, expr)
	} else if (expr instanceof bait__ast__IfExpr) {
		bait__gen__js__Gen_if_expr(g, expr, true)
	} else if (expr instanceof bait__ast__IndexExpr) {
		bait__gen__js__Gen_index_expr(g, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		bait__gen__js__Gen_infix_expr(g, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		bait__gen__js__Gen_integer_literal(g, expr)
	} else if (expr instanceof bait__ast__MapInit) {
		bait__gen__js__Gen_map_init(g, expr)
	} else if (expr instanceof bait__ast__MatchExpr) {
		bait__gen__js__Gen_match_expr(g, expr, true)
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
		const e = expr
		bait__errors__error(g.path, e.pos, from_js_string(`cannot gen ${bait__ast__EmptyExpr_str(e, 0).str}`))
		exit(1)
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
		const param = Array_get(node.decl.params, i)
		bait__gen__js__Gen_write(g, param.name)
		if (i32(i < i32(node.decl.params.length - 1))) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_stmts(g, node.decl.stmts)
	bait__gen__js__Gen_write(g, from_js_string("}"))
}

function bait__gen__js__Gen_array_init(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("new bait_Array({ data: "))
	if (node.length_expr instanceof bait__ast__EmptyExpr) {
		bait__gen__js__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = Array_get(node.exprs, i)
			bait__gen__js__Gen_expr(g, expr)
			if (i32(i < i32(node.exprs.length - 1))) {
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

function bait__gen__js__Gen_char_literal(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("u8(\""))
	bait__gen__js__Gen_write(g, bait__util__escape_char(node.val, u8("\"")))
	bait__gen__js__Gen_write(g, from_js_string("\")"))
}

function bait__gen__js__Gen_enum_val(g, node) {
	bait__gen__js__Gen_write(g, string_add(string_add(bait__gen__js__js_name(node.name), from_js_string(".")), node.val))
}

function bait__gen__js__Gen_float_literal(g, node) {
	bait__gen__js__Gen_write(g, node.val)
}

function bait__gen__js__Gen_hash_expr(g, node) {
	bait__gen__js__Gen_write(g, node.val)
}

function bait__gen__js__Gen_ident(g, node) {
	if (eq(node.lang, bait__ast__Language.js)) {
		bait__gen__js__Gen_write(g, node.name)
		return
	}
	bait__gen__js__Gen_write(g, bait__gen__js__js_name(node.name))
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
			bait__gen__js__Gen_write(g, from_js_string("Array_set("))
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			bait__gen__js__Gen_expr(g, node.index)
			bait__gen__js__Gen_write(g, from_js_string(", "))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("Array_get("))
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
	const lsym = bait__gen__js__Gen_concrete_sym(g, node.left_type)
	if (map_contains(lsym.overloads, bait__token__Token_js_repr(node.op))) {
		const overload = map_get_set(lsym.overloads, bait__token__Token_js_repr(node.op), new bait__ast__FunDecl({}))
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(string_add(string_add(lsym.name, from_js_string("_")), overload.name)))
		bait__gen__js__Gen_write(g, from_js_string("("))
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, node.right)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	if (eq(node.op, bait__token__Token.eq) || eq(node.op, bait__token__Token.ne)) {
		if (eq(node.op, bait__token__Token.ne)) {
			bait__gen__js__Gen_write(g, from_js_string("!"))
		}
		bait__gen__js__Gen_write(g, from_js_string("eq("))
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, node.right)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	if (eq(lsym.kind, bait__ast__TypeKind.number)) {
		bait__gen__js__Gen_write(g, from_js_string(`${lsym.name.str}(`))
	}
	bait__gen__js__Gen_expr(g, node.left)
	bait__gen__js__Gen_write(g, from_js_string(" "))
	bait__gen__js__Gen_write(g, bait__token__Token_js_repr(node.op))
	bait__gen__js__Gen_write(g, from_js_string(" "))
	bait__gen__js__Gen_expr(g, node.right)
	if (eq(lsym.kind, bait__ast__TypeKind.number)) {
		bait__gen__js__Gen_write(g, from_js_string(")"))
	}
}

function bait__gen__js__Gen_map_init(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("new map({ data: new Map(["))
	for (let i = 0; i < node.keys.length; i++) {
		const key = Array_get(node.keys, i)
		bait__gen__js__Gen_write(g, from_js_string("["))
		bait__gen__js__Gen_expr_to_string(g, key, node.key_type)
		bait__gen__js__Gen_write(g, from_js_string(".str, "))
		bait__gen__js__Gen_expr(g, Array_get(node.vals, i))
		bait__gen__js__Gen_write(g, from_js_string("]"))
		if (i32(i < i32(node.keys.length - 1))) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_write(g, from_js_string(`]), length: ${i32_str(node.keys.length).str} })`))
}

function bait__gen__js__Gen_par_expr(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("("))
	bait__gen__js__Gen_expr(g, node.expr)
	bait__gen__js__Gen_write(g, from_js_string(")"))
}

function bait__gen__js__Gen_prefix_expr(g, node) {
	bait__gen__js__Gen_write(g, bait__token__Token_js_repr(node.op))
	if (node.right instanceof bait__ast__InfixExpr && eq((node.right).op, bait__token__Token.key_is)) {
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
	const val = bait__util__escape_char(bait__util__escape_linebreak(node.val), u8("\""))
	if (eq(node.lang, bait__ast__Language.js)) {
		bait__gen__js__Gen_write(g, from_js_string("\""))
		bait__gen__js__Gen_write(g, val)
		bait__gen__js__Gen_write(g, from_js_string("\""))
	} else {
		bait__gen__js__Gen_write(g, from_js_string("from_js_string(\""))
		bait__gen__js__Gen_write(g, val)
		bait__gen__js__Gen_write(g, from_js_string("\")"))
	}
}

function bait__gen__js__Gen_string_inter_literal(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("from_js_string(`"))
	for (let i = 0; i < node.vals.length; i++) {
		const val = Array_get(node.vals, i)
		bait__gen__js__Gen_write(g, bait__util__escape_char(val, u8("\`")))
		if (i32(i < node.exprs.length)) {
			bait__gen__js__Gen_write(g, from_js_string("\${"))
			bait__gen__js__Gen_expr_to_string(g, Array_get(node.exprs, i), Array_get(node.expr_types, i))
			bait__gen__js__Gen_write(g, from_js_string(".str}"))
		}
	}
	bait__gen__js__Gen_write(g, from_js_string("`)"))
}

function bait__gen__js__Gen_type_of(g, node) {
	const sym = bait__ast__Table_get_sym(g.table, node.typ)
	const amp = string_repeat(from_js_string("*"), bait__ast__Type_get_nr_amp(node.typ))
	bait__gen__js__Gen_write(g, string_add(string_add(string_add(from_js_string("from_js_string(\""), amp), sym.name), from_js_string("\")")))
}

function bait__gen__js__Gen_expr_to_string(g, expr, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (eq(sym.kind, bait__ast__TypeKind.string)) {
		bait__gen__js__Gen_expr(g, expr)
		return
	}
	const str_def = bait__ast__Table_get_method(g.table, sym, from_js_string("str"))
	if (i32(str_def.name.length > 0)) {
		const final_sym = bait__ast__Table_get_sym(g.table, Array_get(str_def.params, 0).typ)
		let name = bait__gen__js__js_name(final_sym.name)
		bait__gen__js__Gen_write(g, from_js_string(`${name.str}_str(`))
		bait__gen__js__Gen_expr(g, expr)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	const name = bait__gen__js__Gen_get_str_fun(g, typ)
	bait__gen__js__Gen_write(g, from_js_string(`${name.str}(`))
	bait__gen__js__Gen_expr(g, expr)
	bait__gen__js__Gen_write(g, from_js_string(", 0)"))
}


function bait__gen__js__Gen_fun_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	if (i32(node.generic_names.length > 0) && eq(g.cur_concrete_types.length, 0)) {
		for (let _t496 = 0; _t496 < node.concrete_types.length; _t496++) {
			const conc_types = Array_get(node.concrete_types, _t496)
			for (let i = 0; i < node.generic_names.length; i++) {
				const gn = Array_get(node.generic_names, i)
				map_set(g.cur_concrete_types, gn, Array_get(conc_types, i))
			}
			bait__gen__js__Gen_fun_decl(g, node)
			map_clear(g.cur_concrete_types)
		}
		return
	}
	g.cur_fun = node
	bait__gen__js__Gen_write(g, from_js_string("function "))
	let name = from_js_string("")
	if (node.is_method) {
		const sym = bait__ast__Table_get_sym(g.table, Array_get(node.params, 0).typ)
		name = bait__gen__js__js_name(string_add(string_add(sym.name, from_js_string("_")), node.name))
	} else {
		name = bait__gen__js__js_name(node.name)
	}
	if (i32(g.cur_concrete_types.length > 0)) {
		name = bait__gen__js__Gen_generic_fun_name(g, name, map_values(g.cur_concrete_types))
	}
	bait__gen__js__Gen_write(g, from_js_string(`${name.str}(`))
	bait__gen__js__Gen_fun_params(g, node.params)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	const export_attr = Array_bait__ast__Attribute_find_attr(node.attrs, from_js_string("export"))
	if (!eq(export_attr.name, from_js_string(""))) {
		bait__gen__js__Gen_writeln(g, from_js_string(`module.exports.${export_attr.value.str} = ${bait__gen__js__js_name(node.name).str}`))
	}
	bait__gen__js__Gen_writeln(g, from_js_string(""))
}

function bait__gen__js__Gen_fun_params(g, params) {
	for (let i = 0; i < params.length; i++) {
		const p = Array_get(params, i)
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(p.name))
		if (i32(i < i32(params.length - 1))) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
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
	let name = node.name
	if (node.is_method) {
		if (eq(name, from_js_string("str"))) {
			bait__gen__js__Gen_expr_to_string(g, node.left, node.left_type)
			return
		}
		const sym = bait__ast__Table_get_sym(g.table, node.left_type)
		if (eq(sym.kind, bait__ast__TypeKind.array) && Array_contains(new bait_Array({ data: [from_js_string("push"), from_js_string("push_many"), from_js_string("push_many_with_len")], length: 3 }), node.name)) {
			bait__gen__js__Gen_gen_array_method(g, node.name, node, sym)
			return
		}
		name = bait__gen__js__js_name(string_add(string_add(sym.name, from_js_string("_")), node.name))
	} else if (eq(node.lang, bait__ast__Language.bait)) {
		name = bait__gen__js__js_name(node.name)
	}
	if (i32(node.concrete_types.length > 0)) {
		name = bait__gen__js__Gen_generic_fun_name(g, name, node.concrete_types)
	}
	bait__gen__js__Gen_write(g, name)
	if (Array_contains(new bait_Array({ data: [from_js_string("println"), from_js_string("eprintln")], length: 2 }), node.name)) {
		bait__gen__js__Gen_write(g, from_js_string("("))
		bait__gen__js__Gen_expr_to_string(g, Array_get(node.args, 0).expr, Array_get(node.args, 0).typ)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return
	}
	bait__gen__js__Gen_write(g, from_js_string("("))
	if (node.is_method) {
		bait__gen__js__Gen_expr(g, node.left)
		if (i32(node.args.length > 0)) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_call_args(g, node.args)
	bait__gen__js__Gen_write(g, from_js_string(")"))
}

function bait__gen__js__Gen_call_args(g, args) {
	for (let i = 0; i < args.length; i++) {
		const a = Array_get(args, i)
		bait__gen__js__Gen_expr(g, a.expr)
		if (i32(i < i32(args.length - 1))) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
}

function bait__gen__js__Gen_gen_array_method(g, name, node, sym) {
	bait__gen__js__Gen_write(g, from_js_string(`Array_${name.str}(`))
	bait__gen__js__Gen_expr(g, node.left)
	bait__gen__js__Gen_write(g, from_js_string(", "))
	bait__gen__js__Gen_expr(g, Array_get(node.args, 0).expr)
	for (let i = 1; i32(i < node.args.length); i += 1) {
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, Array_get(node.args, i).expr)
	}
	bait__gen__js__Gen_write(g, from_js_string(")"))
}

function bait__gen__js__Gen_generic_fun_name(g, name, concrete_types) {
	let full_name = name
	for (let _t510 = 0; _t510 < concrete_types.length; _t510++) {
		const t = Array_get(concrete_types, _t510)
		full_name = string_add(full_name, string_add(from_js_string("_"), bait__ast__Table_get_sym(g.table, t).name))
	}
	return full_name
}


function bait__gen__js__Gen_if_expr(g, node, is_expr) {
	const tmp = bait__gen__js__Gen_new_temp_var(g)
	let cut = from_js_string("")
	if (is_expr) {
		cut = string_trim_left(bait__gen__js__Gen_cut_before(g, u8("\n")), from_js_string("\t"))
		bait__gen__js__Gen_writeln(g, from_js_string(""))
		bait__gen__js__Gen_writeln(g, from_js_string(`let ${tmp.str} = undefined`))
	}
	for (let i = 0; i < node.branches.length; i++) {
		const b = Array_get(node.branches, i)
		if (i32(i > 0)) {
			bait__gen__js__Gen_write(g, from_js_string("} else "))
		}
		if (node.has_else && eq(i, i32(node.branches.length - 1))) {
			bait__gen__js__Gen_writeln(g, from_js_string("{"))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("if ("))
			bait__gen__js__Gen_expr(g, b.cond)
			bait__gen__js__Gen_writeln(g, from_js_string(") {"))
		}
		bait__gen__js__Gen_stmts(g, b.stmts)
		if (is_expr) {
			let branch_cut = bait__gen__js__Gen_cut_before(g, u8("\n"))
			branch_cut = bait__gen__js__Gen_cut_before(g, u8("\t"))
			g.empty_line = false
			bait__gen__js__Gen_writeln(g, from_js_string(`\t${tmp.str} = ${branch_cut.str}`))
		}
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	if (is_expr) {
		bait__gen__js__Gen_write(g, cut)
		bait__gen__js__Gen_write(g, tmp)
	}
}

function bait__gen__js__Gen_match_expr(g, node, is_expr) {
	if (node.is_sumtype) {
		bait__gen__js__Gen_sumtype_match(g, node)
		return
	}
	const tmp = bait__gen__js__Gen_new_temp_var(g)
	let cut = from_js_string("")
	if (is_expr) {
		cut = string_trim_left(bait__gen__js__Gen_cut_before(g, u8("\n")), from_js_string("\t"))
		bait__gen__js__Gen_writeln(g, from_js_string(""))
		bait__gen__js__Gen_writeln(g, from_js_string(`let ${tmp.str} = undefined`))
	}
	bait__gen__js__Gen_write(g, from_js_string("switch ("))
	bait__gen__js__Gen_expr(g, node.cond)
	if (eq(node.cond_type, bait__ast__STRING_TYPE)) {
		bait__gen__js__Gen_write(g, from_js_string(".str"))
	}
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	g.indent += 1
	for (let _t519 = 0; _t519 < node.branches.length; _t519++) {
		const b = Array_get(node.branches, _t519)
		if (eq(b.exprs.length, 0)) {
			bait__gen__js__Gen_writeln(g, from_js_string("default:"))
		} else {
			for (let i = 0; i < b.exprs.length; i++) {
				const e = Array_get(b.exprs, i)
				bait__gen__js__Gen_write(g, from_js_string("case "))
				bait__gen__js__Gen_expr(g, e)
				if (eq(node.cond_type, bait__ast__STRING_TYPE)) {
					bait__gen__js__Gen_write(g, from_js_string(".str"))
				}
				bait__gen__js__Gen_writeln(g, from_js_string(":"))
			}
		}
		g.indent += 1
		bait__gen__js__Gen_writeln(g, from_js_string("{"))
		bait__gen__js__Gen_stmts(g, b.stmts)
		if (is_expr) {
			let branch_cut = bait__gen__js__Gen_cut_before(g, u8("\n"))
			branch_cut = bait__gen__js__Gen_cut_before(g, u8("\t"))
			g.empty_line = false
			bait__gen__js__Gen_writeln(g, from_js_string(`\t${tmp.str} = ${branch_cut.str}`))
		}
		bait__gen__js__Gen_writeln(g, from_js_string("\tbreak"))
		bait__gen__js__Gen_writeln(g, from_js_string("}"))
		g.indent -= 1
	}
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	if (is_expr) {
		bait__gen__js__Gen_write(g, cut)
		bait__gen__js__Gen_write(g, tmp)
	}
}

function bait__gen__js__Gen_sumtype_match(g, node) {
	const cond = bait__gen__js__Gen_expr_string(g, node.cond)
	for (let i = 0; i < node.branches.length; i++) {
		const b = Array_get(node.branches, i)
		if (i32(i >= 1)) {
			bait__gen__js__Gen_write(g, from_js_string("} else "))
		}
		if (eq(b.exprs.length, 0)) {
			bait__gen__js__Gen_writeln(g, from_js_string("{"))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("if ("))
			for (let j = 0; j < b.exprs.length; j++) {
				const e = Array_get(b.exprs, j)
				const expr = e
				bait__gen__js__Gen_write(g, from_js_string(`${cond.str} instanceof ${bait__gen__js__js_name(expr.name).str}`))
				if (i32(j < i32(b.exprs.length - 1))) {
					bait__gen__js__Gen_write(g, from_js_string(" || "))
				}
			}
			bait__gen__js__Gen_writeln(g, from_js_string(") {"))
		}
		bait__gen__js__Gen_stmts(g, b.stmts)
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}


const bait__gen__js__JS_RESERVED = new bait_Array({ data: [from_js_string("await"), from_js_string("break"), from_js_string("case"), from_js_string("catch"), from_js_string("class"), from_js_string("const"), from_js_string("continue"), from_js_string("debugger"), from_js_string("default"), from_js_string("delete"), from_js_string("do"), from_js_string("else"), from_js_string("enum"), from_js_string("export"), from_js_string("extends"), from_js_string("false"), from_js_string("finally"), from_js_string("for"), from_js_string("function"), from_js_string("if"), from_js_string("import"), from_js_string("in"), from_js_string("instanceof"), from_js_string("new"), from_js_string("null"), from_js_string("return"), from_js_string("super"), from_js_string("switch"), from_js_string("this"), from_js_string("throw"), from_js_string("true"), from_js_string("try"), from_js_string("typeof"), from_js_string("var"), from_js_string("void"), from_js_string("while"), from_js_string("with"), from_js_string("yield"), from_js_string("let"), from_js_string("static"), from_js_string("implements"), from_js_string("interface"), from_js_string("package"), from_js_string("private"), from_js_string("protected"), from_js_string("public"), from_js_string("as"), from_js_string("async"), from_js_string("from"), from_js_string("get"), from_js_string("meta"), from_js_string("of"), from_js_string("set"), from_js_string("target"), from_js_string("globalThis"), from_js_string("Infinity"), from_js_string("NaN"), from_js_string("undefined"), from_js_string("eval"), from_js_string("isFinite"), from_js_string("isNaN"), from_js_string("parseFloat"), from_js_string("parseInt"), from_js_string("decodeURI"), from_js_string("decodeURIComponent"), from_js_string("encodeURI"), from_js_string("encodeURIComponent"), from_js_string("escape"), from_js_string("unescape"), from_js_string("Object"), from_js_string("Function"), from_js_string("Boolean"), from_js_string("Symbol"), from_js_string("Error"), from_js_string("AggregateError"), from_js_string("EvalError"), from_js_string("RangeError"), from_js_string("ReferenceError"), from_js_string("SyntaxError"), from_js_string("TypeError"), from_js_string("URIError"), from_js_string("InternalError"), from_js_string("Number"), from_js_string("BigInt"), from_js_string("Math"), from_js_string("Date"), from_js_string("String"), from_js_string("RegExp"), from_js_string("Array"), from_js_string("Int8Array"), from_js_string("Uint8Array"), from_js_string("Uint8ClampedArray"), from_js_string("Int16Array"), from_js_string("Uint16Array"), from_js_string("Int32Array"), from_js_string("Uint32Array"), from_js_string("Float32Array"), from_js_string("Float64Array"), from_js_string("BigInt64Array"), from_js_string("BigUint64Array"), from_js_string("Map"), from_js_string("Set"), from_js_string("WeakMap"), from_js_string("WeakSet"), from_js_string("ArrayBuffer"), from_js_string("SharedArrayBuffer"), from_js_string("Atomics"), from_js_string("DataView"), from_js_string("JSON"), from_js_string("FinalizationRegistry"), from_js_string("WeakRef"), from_js_string("Iterator"), from_js_string("Promise"), from_js_string("Generator"), from_js_string("GeneratorFunction"), from_js_string("AsyncFunction"), from_js_string("AsyncGenerator"), from_js_string("AsyncGeneratorFunction"), from_js_string("Reflect"), from_js_string("Proxy"), from_js_string("Intl")], length: 121 })
function bait__gen__js__Gen({ pref = new bait__preference__Prefs({}), table = new bait__ast__Table({}), path = from_js_string(""), pkg = from_js_string(""), type_defs_out = from_js_string(""), global_out = from_js_string(""), fun_decls_out = from_js_string(""), out = from_js_string(""), indent = 0, empty_line = false, foreign_imports = new map({ data: new Map([]), length: 0 }), generated_str_funs = new bait_Array({ data: [], length: 0 }), tmp_counter = 0, cur_concrete_types = new map({ data: new Map([]), length: 0 }), cur_fun = new bait__ast__FunDecl({}), is_for_loop_head = false, is_lhs_assign = false, is_array_map_set = false, baitexe = from_js_string(""), baitdir = from_js_string(""), baithash = from_js_string("") }) {
	this.pref = pref
	this.table = table
	this.path = path
	this.pkg = pkg
	this.type_defs_out = type_defs_out
	this.global_out = global_out
	this.fun_decls_out = fun_decls_out
	this.out = out
	this.indent = indent
	this.empty_line = empty_line
	this.foreign_imports = foreign_imports
	this.generated_str_funs = generated_str_funs
	this.tmp_counter = tmp_counter
	this.cur_concrete_types = cur_concrete_types
	this.cur_fun = cur_fun
	this.is_for_loop_head = is_for_loop_head
	this.is_lhs_assign = is_lhs_assign
	this.is_array_map_set = is_array_map_set
	this.baitexe = baitexe
	this.baitdir = baitdir
	this.baithash = baithash
}
function bait__gen__js__gen(files, table, pref) {
	let g = new bait__gen__js__Gen({ pref: pref, table: table, indent: -1, empty_line: true, tmp_counter: -1 })
	for (let _t527 = 0; _t527 < files.length; _t527++) {
		const file = Array_get(files, _t527)
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
	for (let _t530 = 0; _t530 < g.table.needed_str_funs.length; _t530++) {
		const typ = Array_get(g.table.needed_str_funs, _t530)
		bait__gen__js__Gen_generate_str_fun(g, typ)
	}
	return string_add(string_add(string_add(string_add(string_add(bait__gen__js__Gen_headers(g), g.type_defs_out), g.global_out), from_js_string("\n")), g.fun_decls_out), g.out)
}

function bait__gen__js__Gen_process_imports(g, imports) {
	for (let _t531 = 0; _t531 < imports.length; _t531++) {
		const imp = Array_get(imports, _t531)
		if (eq(imp.lang, bait__ast__Language.bait) || map_contains(g.foreign_imports, imp.alias)) {
			continue
		}
		map_set(g.foreign_imports, imp.alias, imp.name)
	}
}

function bait__gen__js__Gen_headers(g) {
	let headers = from_js_string("const JS = {}\n")
	const _t533 = map_keys(g.foreign_imports)
	for (let _t534 = 0; _t534 < _t533.length; _t534++) {
		const alias = Array_get(_t533, _t534)
		const name = map_get(g.foreign_imports, alias)
		headers = string_add(headers, from_js_string(`${alias.str} = require("${name.str}")\n`))
	}
	return string_add(headers, from_js_string("\n"))
}

function bait__gen__js__Gen_new_temp_var(g) {
	g.tmp_counter += 1
	return from_js_string(`_t${i32_str(g.tmp_counter).str}`)
}

function bait__gen__js__Gen_write_indent(g) {
	if (i32(g.indent > 0) && g.empty_line) {
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

function bait__gen__js__Gen_cut_before(g, to) {
	for (let i = i32(g.out.length - 1); i32(i >= 0); i -= 1) {
		if (eq(string_get(g.out, i), to)) {
			let cut = string_substr(g.out, i32(i + 1), g.out.length)
			g.out = string_substr(g.out, 0, i)
			return cut
		}
	}
	return g.out
}

function bait__gen__js__Gen_gen_test_main(g) {
	let nr_test_funs = 0
	bait__gen__js__Gen_writeln(g, from_js_string("function main() {"))
	g.indent += 1
	const _t537 = map_keys(g.table.fun_decls)
	for (let _t538 = 0; _t538 < _t537.length; _t538++) {
		const key = Array_get(_t537, _t538)
		const func = map_get(g.table.fun_decls, key)
		if (func.is_test) {
			nr_test_funs += 1
			const name = bait__gen__js__js_name(func.name)
			const esc_path = string_replace(g.path, from_js_string("\\"), from_js_string("\\\\"))
			bait__gen__js__Gen_writeln(g, from_js_string(`TestRunner_set_test_info(test_runner, from_js_string("${esc_path.str}"), from_js_string("${name.str}"))`))
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
					bait__gen__js__Gen_array_init(g, new bait__ast__ArrayInit({ exprs: new bait_Array({ data: [], length: 0 }) }))
				} else if (eq(sym.kind, bait__ast__TypeKind.map)) {
					bait__gen__js__Gen_map_init(g, new bait__ast__MapInit({ keys: new bait_Array({ data: [], length: 0 }) }))
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

function bait__gen__js__Gen_concrete_sym(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (eq(g.cur_concrete_types.length, 0)) {
		return sym
	}
	return bait__ast__Table_get_sym(g.table, map_get_set(g.cur_concrete_types, sym.name, 0))
}

function bait__gen__js__js_name(n) {
	const name = string_replace(string_replace(string_replace(string_replace(n, from_js_string("."), from_js_string("__")), from_js_string("[]"), from_js_string("Array_")), from_js_string("["), from_js_string("_")), from_js_string("]"), from_js_string("_"))
	if (Array_contains(bait__gen__js__JS_RESERVED, name)) {
		return from_js_string(`bait_${name.str}`)
	}
	return name
}


function bait__gen__js__Gen_stmts(g, stmts) {
	g.indent += 1
	for (let _t545 = 0; _t545 < stmts.length; _t545++) {
		const stmt = Array_get(stmts, _t545)
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
	} else if (stmt instanceof bait__ast__IfExpr) {
		bait__gen__js__Gen_if_expr(g, stmt, false)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
		bait__gen__js__Gen_interface_decl(g, stmt)
	} else if (stmt instanceof bait__ast__LoopControlStmt) {
		bait__gen__js__Gen_loop_control_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__MatchExpr) {
		bait__gen__js__Gen_match_expr(g, stmt, false)
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
		bait__gen__js__Gen_write(g, from_js_string(` ${bait__token__Token_js_repr(expr.op).str} `))
		bait__gen__js__Gen_assert_side_expr(g, expr.right)
		bait__gen__js__Gen_write(g, from_js_string("\"), "))
		bait__gen__js__Gen_expr_to_string(g, expr.left, expr.left_type)
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr_to_string(g, expr.right, expr.right_type)
		bait__gen__js__Gen_writeln(g, from_js_string(")"))
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
		bait__gen__js__Gen_write(g, bait__util__escape_linebreak(node.val))
		bait__gen__js__Gen_write(g, from_js_string("'"))
	} else if (node instanceof bait__ast__CharLiteral) {
		bait__gen__js__Gen_write(g, from_js_string("`"))
		bait__gen__js__Gen_write(g, node.val)
		bait__gen__js__Gen_write(g, from_js_string("`"))
	} else if (node instanceof bait__ast__ArrayInit) {
		bait__gen__js__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = Array_get(node.exprs, i)
			bait__gen__js__Gen_assert_side_expr(g, expr)
			if (i32(i < i32(node.exprs.length - 1))) {
				bait__gen__js__Gen_write(g, from_js_string(", "))
			}
		}
		bait__gen__js__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__Ident) {
		bait__gen__js__Gen_write(g, node.name)
	} else if (node instanceof bait__ast__ArrayInit) {
		bait__gen__js__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = Array_get(node.exprs, i)
			bait__gen__js__Gen_assert_side_expr(g, expr)
			if (i32(i < i32(node.exprs.length - 1))) {
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
	} else if (node instanceof bait__ast__ComptimeVar) {
		bait__gen__js__Gen_write(g, from_js_string("$"))
		bait__gen__js__Gen_write(g, node.name)
	} else {
		bait__gen__js__Gen_write(g, from_js_string("UNHANDLED EXPR"))
	}
}

function bait__gen__js__Gen_assign_stmt(g, node) {
	if (eq(node.op, bait__token__Token.decl_assign)) {
		const left = node.left
		if (left.is_mut) {
			bait__gen__js__Gen_write(g, from_js_string("let "))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("const "))
		}
	}
	g.is_lhs_assign = true
	bait__gen__js__Gen_expr(g, node.left)
	g.is_lhs_assign = false
	const lsym = bait__ast__Table_get_sym(g.table, node.left_type)
	if (map_contains(lsym.overloads, bait__token__Token_js_repr(node.op))) {
		bait__gen__js__Gen_write(g, from_js_string(" = "))
		const overload = map_get_set(lsym.overloads, bait__token__Token_js_repr(node.op), new bait__ast__FunDecl({}))
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(string_add(string_add(lsym.name, from_js_string("_")), overload.name)))
		bait__gen__js__Gen_write(g, from_js_string("("))
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, node.right)
		bait__gen__js__Gen_writeln(g, from_js_string(")"))
		return
	}
	if (g.is_array_map_set) {
		bait__gen__js__Gen_expr(g, node.right)
		bait__gen__js__Gen_writeln(g, from_js_string(")"))
		g.is_array_map_set = false
		return
	}
	bait__gen__js__Gen_write(g, from_js_string(" "))
	bait__gen__js__Gen_write(g, bait__token__Token_js_repr(node.op))
	bait__gen__js__Gen_write(g, from_js_string(" "))
	bait__gen__js__Gen_expr(g, node.right)
	if (!g.is_for_loop_head) {
		bait__gen__js__Gen_writeln(g, from_js_string(""))
	}
}

function bait__gen__js__Gen_const_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	bait__gen__js__Gen_write(g, from_js_string("const "))
	bait__gen__js__Gen_write(g, bait__gen__js__js_name(node.name))
	bait__gen__js__Gen_write(g, from_js_string(" = "))
	bait__gen__js__Gen_expr(g, node.expr)
	bait__gen__js__Gen_writeln(g, from_js_string(""))
}

function bait__gen__js__Gen_enum_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	bait__gen__js__Gen_writeln(g, string_add(string_add(from_js_string("const "), bait__gen__js__js_name(node.name)), from_js_string(" = {")))
	g.indent += 1
	for (let _t559 = 0; _t559 < node.fields.length; _t559++) {
		const field = Array_get(node.fields, _t559)
		bait__gen__js__Gen_write(g, from_js_string(`${field.name.str}: `))
		bait__gen__js__Gen_expr(g, field.expr)
		bait__gen__js__Gen_writeln(g, from_js_string(","))
	}
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_loop_control_stmt(g, node) {
	bait__gen__js__Gen_write(g, bait__token__Token_js_repr(node.kind))
	if (i32(node.label.length > 0)) {
		bait__gen__js__Gen_writeln(g, from_js_string(` ${node.label.str}`))
	} else {
		bait__gen__js__Gen_writeln(g, from_js_string(""))
	}
}

function bait__gen__js__Gen_write_label(g, label) {
	if (i32(label.length > 0)) {
		bait__gen__js__Gen_write(g, from_js_string(`${label.str}: `))
	}
}

function bait__gen__js__Gen_for_loop(g, node) {
	bait__gen__js__Gen_write_label(g, node.label)
	bait__gen__js__Gen_write(g, from_js_string("while ("))
	bait__gen__js__Gen_expr(g, node.cond)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_for_classic_loop(g, node) {
	bait__gen__js__Gen_write_label(g, node.label)
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
	bait__gen__js__Gen_write_label(g, node.label)
	let i = bait__gen__js__js_name(node.idxvar)
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
	const val_name = bait__gen__js__js_name(node.valvar.name)
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${val_name.str} = Array_get(${container.str}, ${i.str})`))
	} else if (eq(sym.kind, bait__ast__TypeKind.string)) {
		bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${val_name.str} = string_get(${container.str}, ${i.str})`))
	} else {
		bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${val_name.str} = ${container.str}[${i.str}]`))
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
	bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${bait__gen__js__js_name(node.idxvar).str} = Array_get(${keys_var.str}, ${i.str})`))
	bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${bait__gen__js__js_name(node.valvar.name).str} = map_get(${container.str}, ${node.idxvar.str})`))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
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
	bait__errors__error(g.path, node.pos, from_js_string("Bait interfaces are not yet supported"))
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


let _t568 = undefined
if (eq(os__platform(), from_js_string("win32"))) {
	_t568 = from_js_string("\\r\\n")
} else {
	_t568 = from_js_string("\\n")
}
const bait__gen__js__LB = _t568
function bait__gen__js__Gen_get_str_fun(g, typ) {
	Array_push(g.table.needed_str_funs, typ)
	const sym = bait__ast__Table_get_sym(g.table, typ)
	return bait__gen__js__js_name(from_js_string(`${sym.name.str}_str`))
}

function bait__gen__js__Gen_generate_str_fun(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	const name = bait__gen__js__js_name(from_js_string(`${sym.name.str}_str`))
	if (Array_contains(g.generated_str_funs, typ)) {
		return
	}
	if (bait__ast__TypeSymbol_has_method(sym, from_js_string("str"))) {
		return
	}
	Array_push(g.generated_str_funs, typ)
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		const info = sym.info
		const el_str = bait__gen__js__Gen_get_str_fun(g, info.elem_type)
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`function ${name.str}(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += ${el_str.str}(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}\n`))
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.struct_)) {
		const info = sym.info
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`function ${name.str}(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "${sym.name.str}{"\n`))
		if (i32(info.fields.length > 0)) {
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\ts += "${bait__gen__js__LB.str}"\n`))
		}
		for (let _t574 = 0; _t574 < info.fields.length; _t574++) {
			const field = Array_get(info.fields, _t574)
			if (eq(typ, field.typ)) {
				g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\ts += space + "  ${field.name.str} = ${sym.name.str}{...}${bait__gen__js__LB.str}"\n`))
				continue
			}
			const str_fun_name = bait__gen__js__Gen_get_str_fun(g, field.typ)
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\ts += space + "  ${field.name.str} = " + ${str_fun_name.str}(it.${field.name.str}, indent + 1).str + "${bait__gen__js__LB.str}"\n`))
		}
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string("\treturn from_js_string(s + space + \"}\")\n}\n\n"))
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.map)) {
		const info = sym.info
		const val_str = bait__gen__js__Gen_get_str_fun(g, info.val_type)
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`function ${name.str}(m) {
	let s = "{"
	let i = 0
	for (const [k, v] of m.data.entries()) {
		s += \`\'\${k}\'\`
		s += ": "
		s += ${val_str.str}(v).str

		i++
		if (i < m.length) {
			s += ", "
		}
	}
	return from_js_string(s + "}")
}\n`))
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.alias_type)) {
		const par_fun_name = bait__gen__js__Gen_get_str_fun(g, sym.parent)
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`function ${name.str}(it, indent) {
	return ${par_fun_name.str}(it, indent)
}`))
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.sum_type)) {
		const info = sym.info
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`function ${name.str}(it, indent) {\n`))
		for (let _t579 = 0; _t579 < info.variants.length; _t579++) {
			const bait_var = Array_get(info.variants, _t579)
			const var_sym = bait__ast__Table_get_sym(g.table, bait_var)
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\tif (it instanceof ${bait__gen__js__js_name(var_sym.name).str}) {
		return ${bait__gen__js__Gen_get_str_fun(g, bait_var).str}(it, indent)
	}
`))
		}
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string("}\n\n"))
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.enum_)) {
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`function ${name.str}(it) {
	switch(it) {\n`))
		const info = sym.info
		for (let _t581 = 0; _t581 < info.vals.length; _t581++) {
			const val = Array_get(info.vals, _t581)
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\t\tcase ${bait__gen__js__js_name(sym.name).str}.${val.str}: return from_js_string("${val.str}")\n`))
		}
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string("\t}\n}\n\n"))
		return
	}
	bait__errors__generic_error(from_js_string(`cannot convert ${sym.name.str} to string`))
	exit(1)
}


function bait__gen__js__Gen_struct_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	bait__gen__js__Gen_write(g, from_js_string("function "))
	const jsname = bait__gen__js__js_name(string_add(node.pkg_prefix, node.name))
	bait__gen__js__Gen_write(g, jsname)
	bait__gen__js__Gen_write(g, from_js_string("({ "))
	for (let i = 0; i < node.fields.length; i++) {
		const field = Array_get(node.fields, i)
		bait__gen__js__Gen_write(g, from_js_string(`${field.name.str} = `))
		if (eq(node.typ, field.typ)) {
			bait__gen__js__Gen_write(g, from_js_string("this"))
		} else if (!(field.expr instanceof bait__ast__EmptyExpr)) {
			bait__gen__js__Gen_expr(g, field.expr)
		} else {
			bait__gen__js__Gen_write_default_value(g, field.typ)
		}
		if (i32(i < i32(node.fields.length - 1))) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	if (i32(node.fields.length > 0)) {
		bait__gen__js__Gen_write(g, from_js_string(" "))
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}) {"))
	g.indent += 1
	for (let _t586 = 0; _t586 < node.fields.length; _t586++) {
		const field = Array_get(node.fields, _t586)
		bait__gen__js__Gen_writeln(g, from_js_string(`this.${field.name.str} = ${field.name.str}`))
	}
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
		const field = Array_get(node.fields, i)
		bait__gen__js__Gen_write(g, from_js_string(`${field.name.str}: `))
		bait__gen__js__Gen_expr(g, field.expr)
		if (i32(i < i32(node.fields.length - 1))) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_write(g, from_js_string(" })"))
}


const bait__gen__c__C_RESERVED = new bait_Array({ data: [from_js_string("auto"), from_js_string("break"), from_js_string("case"), from_js_string("char"), from_js_string("const"), from_js_string("continue"), from_js_string("default"), from_js_string("do"), from_js_string("double"), from_js_string("else"), from_js_string("enum"), from_js_string("extern"), from_js_string("float"), from_js_string("for"), from_js_string("goto"), from_js_string("if"), from_js_string("inline"), from_js_string("int"), from_js_string("long"), from_js_string("register"), from_js_string("restrict"), from_js_string("return"), from_js_string("short"), from_js_string("signed"), from_js_string("sizeof"), from_js_string("static"), from_js_string("struct"), from_js_string("switch"), from_js_string("typedef"), from_js_string("union"), from_js_string("unsigned"), from_js_string("void"), from_js_string("volatile"), from_js_string("while"), from_js_string("main")], length: 35 })
function bait__gen__c__Gen({ pref = new bait__preference__Prefs({}), table = new bait__ast__Table({}), path = from_js_string(""), pkg = from_js_string(""), main_inits_out = from_js_string(""), type_defs_out = from_js_string(""), fun_decls_out = from_js_string(""), type_impls_out = from_js_string(""), out = from_js_string(""), indent = -1, empty_line = true, foreign_imports = new bait_Array({ data: [], length: 0 }), generated_eq_funs = new bait_Array({ data: [], length: 0 }), tmp_counter = 0, cur_concrete_types = new map({ data: new Map([]), length: 0 }), is_lhs_assign = false, is_array_map_set = false, is_for_loop_head = false }) {
	this.pref = pref
	this.table = table
	this.path = path
	this.pkg = pkg
	this.main_inits_out = main_inits_out
	this.type_defs_out = type_defs_out
	this.fun_decls_out = fun_decls_out
	this.type_impls_out = type_impls_out
	this.out = out
	this.indent = indent
	this.empty_line = empty_line
	this.foreign_imports = foreign_imports
	this.generated_eq_funs = generated_eq_funs
	this.tmp_counter = tmp_counter
	this.cur_concrete_types = cur_concrete_types
	this.is_lhs_assign = is_lhs_assign
	this.is_array_map_set = is_array_map_set
	this.is_for_loop_head = is_for_loop_head
}
function bait__gen__c__gen(files, table, pref) {
	let g = new bait__gen__c__Gen({ pref: pref, table: table })
	bait__gen__c__Gen_write_types(g)
	bait__gen__c__Gen_gen_equality_funs(g)
	for (let _t589 = 0; _t589 < files.length; _t589++) {
		const file = Array_get(files, _t589)
		g.path = file.path
		g.pkg = file.pkg_decl.full_name
		bait__gen__c__Gen_process_imports(g, file.imports)
		bait__gen__c__Gen_stmts(g, file.stmts)
		g.out = string_add(g.out, from_js_string("\n"))
	}
	if (!g.pref.is_library) {
		bait__gen__c__Gen_c_main(g)
	}
	return string_add(string_add(string_add(string_add(string_add(bait__gen__c__Gen_headers(g), g.type_defs_out), g.fun_decls_out), g.type_impls_out), from_js_string("\n")), g.out)
}

function bait__gen__c__Gen_process_imports(g, imports) {
	for (let _t591 = 0; _t591 < imports.length; _t591++) {
		const imp = Array_get(imports, _t591)
		if (eq(imp.lang, bait__ast__Language.bait) || Array_contains(g.foreign_imports, imp.name)) {
			continue
		}
		Array_push(g.foreign_imports, imp.name)
	}
}

function bait__gen__c__Gen_headers(g) {
	let headers = from_js_string("")
	for (let _t593 = 0; _t593 < g.foreign_imports.length; _t593++) {
		const name = Array_get(g.foreign_imports, _t593)
		headers = string_add(headers, from_js_string(`#include <${name.str}>\n`))
	}
	return string_add(headers, from_js_string("\n"))
}

function bait__gen__c__Gen_c_main(g) {
	bait__gen__c__Gen_writeln(g, from_js_string("int main(int argc, char* argv[]) {"))
	bait__gen__c__Gen_writeln(g, g.main_inits_out)
	bait__gen__c__Gen_writeln(g, from_js_string("\tbait_main();"))
	bait__gen__c__Gen_writeln(g, from_js_string("\treturn 0;"))
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__c__Gen_new_temp_var(g) {
	g.tmp_counter += 1
	return from_js_string(`_t${i32_str(g.tmp_counter).str}`)
}

function bait__gen__c__Gen_write_indent(g) {
	if (i32(g.indent > 0) && g.empty_line) {
		g.out = string_add(g.out, string_repeat(from_js_string("\t"), g.indent))
	}
}

function bait__gen__c__Gen_write(g, s) {
	bait__gen__c__Gen_write_indent(g)
	g.out = string_add(g.out, s)
	g.empty_line = false
}

function bait__gen__c__Gen_writeln(g, s) {
	bait__gen__c__Gen_write_indent(g)
	g.out = string_add(g.out, string_add(s, from_js_string("\n")))
	g.empty_line = true
}

function bait__gen__c__c_name(n) {
	const name = string_replace(string_replace(n, from_js_string("."), from_js_string("__")), from_js_string("[]"), from_js_string("Array_"))
	if (Array_contains(bait__gen__c__C_RESERVED, name)) {
		return from_js_string(`bait_${name.str}`)
	}
	return name
}


function bait__gen__c__Gen_gen_equality_funs(g) {
	for (let _t596 = 0; _t596 < g.table.needed_equality_funs.length; _t596++) {
		const typ = Array_get(g.table.needed_equality_funs, _t596)
		bait__gen__c__Gen_equality_fun(g, typ)
	}
}

function bait__gen__c__Gen_equality_fun(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (eq(sym.kind, bait__ast__TypeKind.number) || eq(sym.kind, bait__ast__TypeKind.other)) {
		return from_js_string("")
	}
	if (map_contains(sym.overloads, from_js_string("=="))) {
		return from_js_string("")
	}
	if (eq(sym.kind, bait__ast__TypeKind.generic)) {
		return from_js_string("")
	}
	bait__errors__generic_error(from_js_string(`cannot generate equality function for type ${sym.name.str}`))
	exit(1)
	return from_js_string("")
}


function bait__gen__c__Gen_expr(g, expr) {
	if (expr instanceof bait__ast__ArrayInit) {
		bait__gen__c__Gen_array_init(g, expr)
	} else if (expr instanceof bait__ast__AsCast) {
		bait__gen__c__Gen_as_cast(g, expr)
	} else if (expr instanceof bait__ast__BoolLiteral) {
		bait__gen__c__Gen_bool_literal(g, expr)
	} else if (expr instanceof bait__ast__CallExpr) {
		bait__gen__c__Gen_call_expr(g, expr)
	} else if (expr instanceof bait__ast__HashExpr) {
		bait__gen__c__Gen_hash_expr(g, expr)
	} else if (expr instanceof bait__ast__Ident) {
		bait__gen__c__Gen_ident(g, expr)
	} else if (expr instanceof bait__ast__IfExpr) {
		bait__gen__c__Gen_if_expr(g, expr)
	} else if (expr instanceof bait__ast__IndexExpr) {
		bait__gen__c__Gen_index_expr(g, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		bait__gen__c__Gen_infix_expr(g, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		bait__gen__c__Gen_integer_literal(g, expr)
	} else if (expr instanceof bait__ast__ParExpr) {
		bait__gen__c__Gen_par_expr(g, expr)
	} else if (expr instanceof bait__ast__PrefixExpr) {
		bait__gen__c__Gen_prefix_expr(g, expr)
	} else if (expr instanceof bait__ast__SelectorExpr) {
		bait__gen__c__Gen_selector_expr(g, expr)
	} else if (expr instanceof bait__ast__StringLiteral) {
		bait__gen__c__Gen_string_literal(g, expr)
	} else if (expr instanceof bait__ast__StringInterLiteral) {
		bait__gen__c__Gen_string_inter_literal(g, expr)
	} else if (expr instanceof bait__ast__StructInit) {
		bait__gen__c__Gen_struct_init(g, expr)
	} else if (expr instanceof bait__ast__TypeOf) {
		bait__gen__c__Gen_type_of(g, expr)
	} else {
	}
}

function bait__gen__c__Gen_expr_string(g, expr) {
	const was_line_empty = g.empty_line
	const start = g.out.length
	bait__gen__c__Gen_expr(g, expr)
	const s = string_substr(g.out, start, g.out.length)
	g.out = string_substr(g.out, 0, start)
	g.empty_line = was_line_empty
	return string_trim_space(s)
}

function bait__gen__c__Gen_array_init(g, node) {
	const elem_type = bait__gen__c__Gen_typ(g, node.elem_type)
	if (eq(node.exprs.length, 0)) {
		bait__gen__c__Gen_write(g, from_js_string("new_array("))
		if (node.length_expr instanceof bait__ast__EmptyExpr) {
			bait__gen__c__Gen_write(g, from_js_string("0, "))
		} else {
			bait__gen__c__Gen_expr(g, node.length_expr)
			bait__gen__c__Gen_write(g, from_js_string(", "))
		}
		if (node.cap_expr instanceof bait__ast__EmptyExpr) {
			bait__gen__c__Gen_write(g, from_js_string("0, "))
		} else {
			bait__gen__c__Gen_expr(g, node.cap_expr)
			bait__gen__c__Gen_write(g, from_js_string(", "))
		}
		bait__gen__c__Gen_write(g, from_js_string(`sizeof(${elem_type.str}))`))
		return
	}
	const len = node.exprs.length
	bait__gen__c__Gen_write(g, from_js_string(`new_array_from_c(${i32_str(len).str}, ${i32_str(len).str}, sizeof(${elem_type.str}), (${elem_type.str}[${i32_str(len).str}]){`))
	g.indent += 1
	for (let _t603 = 0; _t603 < node.exprs.length; _t603++) {
		const expr = Array_get(node.exprs, _t603)
		bait__gen__c__Gen_expr(g, expr)
		bait__gen__c__Gen_write(g, from_js_string(", "))
	}
	g.indent -= 1
	bait__gen__c__Gen_write(g, from_js_string("})"))
}

function bait__gen__c__Gen_as_cast(g, node) {
	const type_str = bait__gen__c__Gen_typ(g, node.target)
	bait__gen__c__Gen_write(g, from_js_string(`(${type_str.str})(`))
	bait__gen__c__Gen_expr(g, node.expr)
	bait__gen__c__Gen_write(g, from_js_string(")"))
}

function bait__gen__c__Gen_bool_literal(g, node) {
	if (node.val) {
		bait__gen__c__Gen_write(g, from_js_string("true"))
	} else {
		bait__gen__c__Gen_write(g, from_js_string("false"))
	}
}

function bait__gen__c__Gen_hash_expr(g, node) {
	bait__gen__c__Gen_write(g, node.val)
}

function bait__gen__c__Gen_ident(g, node) {
	if (eq(node.lang, bait__ast__Language.bait)) {
		bait__gen__c__Gen_write(g, bait__gen__c__c_name(node.name))
		return
	}
	bait__gen__c__Gen_write(g, string_replace(node.name, from_js_string("C."), from_js_string("")))
}

function bait__gen__c__Gen_if_expr(g, node) {
	for (let i = 0; i < node.branches.length; i++) {
		const b = Array_get(node.branches, i)
		if (i32(i > 0)) {
			bait__gen__c__Gen_write(g, from_js_string("} else "))
		}
		if (node.has_else && eq(i, i32(node.branches.length - 1))) {
			bait__gen__c__Gen_writeln(g, from_js_string("{"))
		} else {
			bait__gen__c__Gen_write(g, from_js_string("if ("))
			bait__gen__c__Gen_expr(g, b.cond)
			bait__gen__c__Gen_writeln(g, from_js_string(") {"))
		}
		bait__gen__c__Gen_stmts(g, b.stmts)
	}
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__c__Gen_index_expr(g, node) {
	const sym = bait__ast__Table_get_sym(g.table, node.left_type)
	if (eq(sym.kind, bait__ast__TypeKind.map)) {
		const info = sym.info
		const val_type_str = bait__gen__c__Gen_typ(g, info.val_type)
		if (g.is_lhs_assign && !node.is_selector) {
			g.is_array_map_set = true
			bait__gen__c__Gen_write(g, from_js_string("map_set((map*)&"))
			bait__gen__c__Gen_expr(g, node.left)
			bait__gen__c__Gen_write(g, from_js_string(", "))
			bait__gen__c__Gen_expr(g, node.index)
			bait__gen__c__Gen_write(g, from_js_string(`, (${val_type_str.str}[])`))
		} else {
			bait__gen__c__Gen_write(g, from_js_string(`(*(${val_type_str.str}*)(map_get(&`))
			bait__gen__c__Gen_expr(g, node.left)
			bait__gen__c__Gen_write(g, from_js_string(", "))
			bait__gen__c__Gen_expr(g, node.index)
			bait__gen__c__Gen_write(g, from_js_string(")))"))
		}
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		const info = sym.info
		const elem_type_str = bait__gen__c__Gen_typ(g, info.elem_type)
		if (g.is_lhs_assign && !node.is_selector) {
			g.is_array_map_set = true
			bait__gen__c__Gen_write(g, from_js_string("Array_set(&"))
			bait__gen__c__Gen_expr(g, node.left)
			bait__gen__c__Gen_write(g, from_js_string(", "))
			bait__gen__c__Gen_expr(g, node.index)
			bait__gen__c__Gen_write(g, from_js_string(`, (${elem_type_str.str}[])`))
		} else {
			bait__gen__c__Gen_write(g, from_js_string(`(*(${elem_type_str.str}*)(Array_get(`))
			bait__gen__c__Gen_expr(g, node.left)
			bait__gen__c__Gen_write(g, from_js_string(", "))
			bait__gen__c__Gen_expr(g, node.index)
			bait__gen__c__Gen_write(g, from_js_string(")))"))
		}
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.string)) {
		bait__gen__c__Gen_write(g, from_js_string("string_get("))
		bait__gen__c__Gen_expr(g, node.left)
		bait__gen__c__Gen_write(g, from_js_string(", "))
		bait__gen__c__Gen_expr(g, node.index)
		bait__gen__c__Gen_write(g, from_js_string(")"))
		return
	}
	bait__gen__c__Gen_expr(g, node.left)
	bait__gen__c__Gen_write(g, from_js_string("["))
	bait__gen__c__Gen_expr(g, node.index)
	bait__gen__c__Gen_write(g, from_js_string("]"))
}

function bait__gen__c__Gen_infix_expr(g, node) {
	const lsym = bait__gen__c__Gen_concrete_sym(g, node.left_type)
	if (map_contains(lsym.overloads, bait__token__Token_c_repr(node.op))) {
		const overload = map_get_set(lsym.overloads, bait__token__Token_c_repr(node.op), new bait__ast__FunDecl({}))
		bait__gen__c__Gen_write(g, bait__gen__c__c_name(string_add(string_add(lsym.name, from_js_string("_")), overload.name)))
		bait__gen__c__Gen_write(g, from_js_string("("))
		bait__gen__c__Gen_expr(g, node.left)
		bait__gen__c__Gen_write(g, from_js_string(", "))
		bait__gen__c__Gen_expr(g, node.right)
		bait__gen__c__Gen_write(g, from_js_string(")"))
		return
	}
	bait__gen__c__Gen_expr(g, node.left)
	bait__gen__c__Gen_write(g, from_js_string(" "))
	bait__gen__c__Gen_write(g, bait__token__Token_c_repr(node.op))
	bait__gen__c__Gen_write(g, from_js_string(" "))
	bait__gen__c__Gen_expr(g, node.right)
}

function bait__gen__c__Gen_integer_literal(g, node) {
	bait__gen__c__Gen_write(g, node.val)
}

function bait__gen__c__Gen_par_expr(g, node) {
	bait__gen__c__Gen_write(g, from_js_string("("))
	bait__gen__c__Gen_expr(g, node.expr)
	bait__gen__c__Gen_write(g, from_js_string(")"))
}

function bait__gen__c__Gen_prefix_expr(g, node) {
	bait__gen__c__Gen_write(g, bait__token__Token_c_repr(node.op))
	bait__gen__c__Gen_expr(g, node.right)
}

function bait__gen__c__Gen_selector_expr(g, node) {
	bait__gen__c__Gen_expr(g, node.expr)
	if (i32(bait__ast__Type_get_nr_amp(node.expr_type) > 0)) {
		bait__gen__c__Gen_write(g, from_js_string("->"))
	} else {
		bait__gen__c__Gen_write(g, from_js_string("."))
	}
	bait__gen__c__Gen_write(g, node.field_name)
}

function bait__gen__c__Gen_string_literal(g, node) {
	const val = bait__util__escape_char(string_replace(node.val, from_js_string("\n"), from_js_string("\\n")), u8("\""))
	bait__gen__c__Gen_write(g, from_js_string("from_c_string(\""))
	bait__gen__c__Gen_write(g, val)
	bait__gen__c__Gen_write(g, from_js_string("\")"))
}

function bait__gen__c__Gen_string_inter_literal(g, node) {
	const len = i32(node.vals.length + node.exprs.length)
	bait__gen__c__Gen_write(g, from_js_string(`interpolate(new_array_from_c(${i32_str(len).str}, ${i32_str(len).str}, sizeof(string), (string[]){`))
	for (let i = 0; i < node.vals.length; i++) {
		const val = Array_get(node.vals, i)
		const esc_val = bait__util__escape_char(string_replace(val, from_js_string("\n"), from_js_string("\\n")), u8("\""))
		bait__gen__c__Gen_write(g, from_js_string(`from_c_string("${esc_val.str}")`))
		bait__gen__c__Gen_write(g, from_js_string(", "))
		if (i32(i < node.exprs.length)) {
			bait__gen__c__Gen_expr_to_string(g, Array_get(node.exprs, i), Array_get(node.expr_types, i))
			bait__gen__c__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__c__Gen_write(g, from_js_string("}))"))
}

function bait__gen__c__Gen_struct_init(g, node) {
	const type_str = bait__gen__c__Gen_typ(g, node.typ)
	bait__gen__c__Gen_write(g, from_js_string(`(${type_str.str}){`))
	let inited_fields = new bait_Array({ data: [], length: 0 })
	for (let _t616 = 0; _t616 < node.fields.length; _t616++) {
		const field = Array_get(node.fields, _t616)
		Array_push(inited_fields, field.name)
	}
	const info = bait__ast__Table_get_sym(g.table, node.typ).info
	for (let i = 0; i < info.fields.length; i++) {
		const field = Array_get(info.fields, i)
		const name = bait__gen__c__c_name(field.name)
		bait__gen__c__Gen_write(g, from_js_string(`.${name.str} = `))
		const init_idx = Array_index_string(inited_fields, field.name)
		if (eq(init_idx, -1)) {
			bait__gen__c__Gen_write(g, from_js_string("0"))
		} else {
			bait__gen__c__Gen_expr(g, Array_get(node.fields, init_idx).expr)
		}
		if (i32(i < i32(info.fields.length - 1))) {
			bait__gen__c__Gen_write(g, from_js_string(", "))
		}
	}
	if (eq(info.fields.length, 0)) {
		bait__gen__c__Gen_write(g, from_js_string("0"))
	}
	bait__gen__c__Gen_write(g, from_js_string("}"))
}

function bait__gen__c__Gen_type_of(g, node) {
	const sym = bait__ast__Table_get_sym(g.table, node.typ)
	const amp = string_repeat(from_js_string("*"), bait__ast__Type_get_nr_amp(node.typ))
	bait__gen__c__Gen_write(g, string_add(string_add(string_add(from_js_string("from_c_string(\""), amp), sym.name), from_js_string("\")")))
}

function bait__gen__c__Gen_expr_to_string(g, expr, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (eq(sym.kind, bait__ast__TypeKind.string)) {
		bait__gen__c__Gen_expr(g, expr)
		return
	}
	const str_def = bait__ast__Table_get_method(g.table, sym, from_js_string("str"))
	if (i32(str_def.name.length > 0)) {
		const final_sym = bait__ast__Table_get_sym(g.table, Array_get(str_def.params, 0).typ)
		let name = bait__gen__c__c_name(final_sym.name)
		bait__gen__c__Gen_write(g, from_js_string(`${name.str}_str(`))
		bait__gen__c__Gen_expr(g, expr)
		bait__gen__c__Gen_write(g, from_js_string(")"))
		return
	}
	if (eq(sym.kind, bait__ast__TypeKind.generic)) {
		bait__gen__c__Gen_expr_to_string(g, expr, map_get_set(g.cur_concrete_types, sym.name, 0))
		return
	}
	const e = expr
	bait__errors__error(g.path, expr.pos, from_js_string(`cannot convert ${sym.name.str} to string`))
	exit(1)
}


function bait__gen__c__Gen_fun_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	if (i32(node.generic_names.length > 0) && eq(g.cur_concrete_types.length, 0)) {
		for (let _t625 = 0; _t625 < node.concrete_types.length; _t625++) {
			const conc_types = Array_get(node.concrete_types, _t625)
			for (let i = 0; i < node.generic_names.length; i++) {
				const gn = Array_get(node.generic_names, i)
				map_set(g.cur_concrete_types, gn, Array_get(conc_types, i))
			}
			bait__gen__c__Gen_fun_decl(g, node)
			map_clear(g.cur_concrete_types)
		}
		return
	}
	const type_str = bait__gen__c__Gen_typ(g, node.return_type)
	let name = bait__gen__c__c_name(node.name)
	if (node.is_method) {
		const sym = bait__ast__Table_get_sym(g.table, Array_get(node.params, 0).typ)
		name = bait__gen__c__c_name(string_add(string_add(sym.name, from_js_string("_")), node.name))
	}
	if (i32(g.cur_concrete_types.length > 0)) {
		name = bait__gen__c__Gen_generic_fun_name(g, name, map_values(g.cur_concrete_types))
	}
	const s = from_js_string(`${type_str.str} ${name.str}(`)
	g.fun_decls_out = string_add(g.fun_decls_out, s)
	bait__gen__c__Gen_write(g, s)
	bait__gen__c__Gen_fun_params(g, node.params)
	g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(");\n"))
	bait__gen__c__Gen_writeln(g, from_js_string(") {"))
	bait__gen__c__Gen_stmts(g, node.stmts)
	bait__gen__c__Gen_writeln(g, from_js_string("};\n"))
}

function bait__gen__c__Gen_fun_params(g, params) {
	for (let i = 0; i < params.length; i++) {
		const p = Array_get(params, i)
		const type_str = bait__gen__c__Gen_typ(g, p.typ)
		const s = from_js_string(`${type_str.str} ${bait__gen__c__c_name(p.name).str}`)
		g.fun_decls_out = string_add(g.fun_decls_out, s)
		bait__gen__c__Gen_write(g, s)
		if (i32(i < i32(params.length - 1))) {
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(", "))
			bait__gen__c__Gen_write(g, from_js_string(", "))
		}
	}
}

function bait__gen__c__Gen_call_expr(g, node) {
	let name = bait__gen__c__c_name(node.name)
	if (node.is_method) {
		const sym = bait__ast__Table_get_sym(g.table, node.left_type)
		const final_sym = bait__ast__Table_get_final_sym(g.table, node.left_type)
		if (eq(final_sym.kind, bait__ast__TypeKind.array)) {
			if (eq(name, from_js_string("push"))) {
				bait__gen__c__Gen_gen_array_method(g, name, node, final_sym, true)
				return
			}
			if (eq(name, from_js_string("push_many_with_len"))) {
				bait__gen__c__Gen_gen_array_method(g, name, node, final_sym, false)
				return
			}
			if (eq(name, from_js_string("push_many"))) {
				bait__gen__c__Gen_gen_array_push_many(g, node)
				return
			}
		}
		name = bait__gen__c__c_name(string_add(string_add(sym.name, from_js_string("_")), node.name))
	} else if (!eq(node.lang, bait__ast__Language.bait)) {
		name = string_replace(node.name, from_js_string("C."), from_js_string(""))
	}
	if (i32(node.concrete_types.length > 0)) {
		name = bait__gen__c__Gen_generic_fun_name(g, name, node.concrete_types)
	}
	bait__gen__c__Gen_write(g, name)
	if (Array_contains(new bait_Array({ data: [from_js_string("println"), from_js_string("eprintln")], length: 2 }), node.name)) {
		bait__gen__c__Gen_write(g, from_js_string("("))
		bait__gen__c__Gen_expr_to_string(g, Array_get(node.args, 0).expr, Array_get(node.args, 0).typ)
		bait__gen__c__Gen_write(g, from_js_string(")"))
		return
	}
	bait__gen__c__Gen_write(g, from_js_string("("))
	if (node.is_method) {
		bait__gen__c__Gen_expr(g, node.left)
		if (i32(node.args.length > 0)) {
			bait__gen__c__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__c__Gen_call_args(g, node.args)
	bait__gen__c__Gen_write(g, from_js_string(")"))
}

function bait__gen__c__Gen_call_args(g, args) {
	for (let i = 0; i < args.length; i++) {
		const a = Array_get(args, i)
		bait__gen__c__Gen_expr(g, a.expr)
		if (i32(i < i32(args.length - 1))) {
			bait__gen__c__Gen_write(g, from_js_string(", "))
		}
	}
}

function bait__gen__c__Gen_gen_array_method(g, name, node, sym, cast) {
	bait__gen__c__Gen_write(g, from_js_string(`Array_${name.str}(`))
	if (eq(bait__ast__Type_get_nr_amp(node.left_type), 0)) {
		bait__gen__c__Gen_write(g, from_js_string("&"))
	}
	bait__gen__c__Gen_expr(g, node.left)
	if (cast) {
		const info = sym.info
		const type_str = bait__gen__c__Gen_typ(g, info.elem_type)
		bait__gen__c__Gen_write(g, from_js_string(`, (${type_str.str}[]){`))
		bait__gen__c__Gen_expr(g, Array_get(node.args, 0).expr)
		bait__gen__c__Gen_write(g, from_js_string("}"))
	} else {
		bait__gen__c__Gen_write(g, from_js_string(", "))
		bait__gen__c__Gen_expr(g, Array_get(node.args, 0).expr)
	}
	for (let i = 1; i32(i < node.args.length); i += 1) {
		bait__gen__c__Gen_write(g, from_js_string(", "))
		bait__gen__c__Gen_expr(g, Array_get(node.args, i).expr)
	}
	bait__gen__c__Gen_write(g, from_js_string(")"))
}

function bait__gen__c__Gen_gen_array_push_many(g, node) {
	bait__gen__c__Gen_write(g, from_js_string("Array_push_many("))
	if (eq(bait__ast__Type_get_nr_amp(node.left_type), 0)) {
		bait__gen__c__Gen_write(g, from_js_string("&"))
	}
	bait__gen__c__Gen_expr(g, node.left)
	bait__gen__c__Gen_write(g, from_js_string(", &"))
	bait__gen__c__Gen_expr(g, Array_get(node.args, 0).expr)
	bait__gen__c__Gen_write(g, from_js_string(")"))
}

function bait__gen__c__Gen_generic_fun_name(g, name, concrete_types) {
	let full_name = name
	for (let _t642 = 0; _t642 < concrete_types.length; _t642++) {
		const t = Array_get(concrete_types, _t642)
		full_name = string_add(full_name, string_add(from_js_string("_"), bait__ast__Table_get_sym(g.table, t).name))
	}
	return full_name
}


function bait__gen__c__Gen_stmts(g, stmts) {
	g.indent += 1
	for (let _t643 = 0; _t643 < stmts.length; _t643++) {
		const stmt = Array_get(stmts, _t643)
		bait__gen__c__Gen_stmt(g, stmt)
	}
	g.indent -= 1
}

function bait__gen__c__Gen_stmt(g, stmt) {
	if (stmt instanceof bait__ast__AssignStmt) {
		bait__gen__c__Gen_assign_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__ConstDecl) {
		bait__gen__c__Gen_const_decl(g, stmt)
	} else if (stmt instanceof bait__ast__ExprStmt) {
		bait__gen__c__Gen_expr_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__ForLoop) {
		bait__gen__c__Gen_for_loop(g, stmt)
	} else if (stmt instanceof bait__ast__ForClassicLoop) {
		bait__gen__c__Gen_for_classic_loop(g, stmt)
	} else if (stmt instanceof bait__ast__ForInLoop) {
		bait__gen__c__Gen_for_in_loop(g, stmt)
	} else if (stmt instanceof bait__ast__FunDecl) {
		bait__gen__c__Gen_fun_decl(g, stmt)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
		bait__gen__c__Gen_interface_decl(g, stmt)
	} else if (stmt instanceof bait__ast__ReturnStmt) {
		bait__gen__c__Gen_return_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__StructDecl) {
	} else if (stmt instanceof bait__ast__TypeDecl) {
	} else {
	}
}

function bait__gen__c__Gen_assign_stmt(g, node) {
	if (eq(node.op, bait__token__Token.decl_assign)) {
		const type_str = bait__gen__c__Gen_typ(g, node.right_type)
		bait__gen__c__Gen_write(g, from_js_string(`${type_str.str} `))
	} else if (i32(bait__ast__Type_get_nr_amp(node.left_type) > 0) && node.left instanceof bait__ast__Ident) {
		bait__gen__c__Gen_write(g, from_js_string("*"))
	}
	g.is_lhs_assign = true
	bait__gen__c__Gen_expr(g, node.left)
	g.is_lhs_assign = false
	const lsym = bait__ast__Table_get_sym(g.table, node.left_type)
	if (map_contains(lsym.overloads, bait__token__Token_c_repr(node.op))) {
		bait__gen__c__Gen_write(g, from_js_string(" = "))
		const overload = map_get_set(lsym.overloads, bait__token__Token_c_repr(node.op), new bait__ast__FunDecl({}))
		bait__gen__c__Gen_write(g, bait__gen__c__c_name(string_add(string_add(lsym.name, from_js_string("_")), overload.name)))
		bait__gen__c__Gen_write(g, from_js_string("("))
		bait__gen__c__Gen_expr(g, node.left)
		bait__gen__c__Gen_write(g, from_js_string(", "))
		bait__gen__c__Gen_expr(g, node.right)
		bait__gen__c__Gen_writeln(g, from_js_string(");"))
		return
	}
	if (g.is_array_map_set) {
		bait__gen__c__Gen_write(g, from_js_string("{"))
		bait__gen__c__Gen_expr(g, node.right)
		bait__gen__c__Gen_writeln(g, from_js_string("});"))
		g.is_array_map_set = false
		return
	}
	bait__gen__c__Gen_write(g, from_js_string(" "))
	bait__gen__c__Gen_write(g, bait__token__Token_c_repr(node.op))
	bait__gen__c__Gen_write(g, from_js_string(" "))
	bait__gen__c__Gen_expr(g, node.right)
	if (!g.is_for_loop_head) {
		bait__gen__c__Gen_writeln(g, from_js_string(";"))
	}
}

function bait__gen__c__Gen_const_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	const name = bait__gen__c__c_name(node.name)
	const val = bait__gen__c__Gen_expr_string(g, node.expr)
	if (node.expr instanceof bait__ast__ArrayInit || node.expr instanceof bait__ast__CallExpr || node.expr instanceof bait__ast__MapInit) {
		const typ = bait__gen__c__Gen_typ(g, node.typ)
		g.type_defs_out = string_add(g.type_defs_out, from_js_string(`${typ.str} ${name.str};\n`))
		g.main_inits_out = string_add(g.main_inits_out, from_js_string(`\t${name.str} = ${val.str};\n`))
	} else {
		g.type_impls_out = string_add(g.type_impls_out, from_js_string(`#define ${name.str} ${val.str}\n`))
	}
}

function bait__gen__c__Gen_expr_stmt(g, node) {
	bait__gen__c__Gen_expr(g, node.expr)
	if (!g.empty_line) {
		bait__gen__c__Gen_writeln(g, from_js_string(";"))
	}
}

function bait__gen__c__Gen_write_label(g, label) {
	if (i32(label.length > 0)) {
		bait__gen__c__Gen_writeln(g, from_js_string(`${label.str}: `))
	}
}

function bait__gen__c__Gen_for_loop(g, node) {
	bait__gen__c__Gen_write(g, from_js_string("while ("))
	bait__gen__c__Gen_expr(g, node.cond)
	bait__gen__c__Gen_writeln(g, from_js_string(") {"))
	bait__gen__c__Gen_stmts(g, node.stmts)
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
	bait__gen__c__Gen_write_label(g, node.label)
}

function bait__gen__c__Gen_for_classic_loop(g, node) {
	g.is_for_loop_head = true
	bait__gen__c__Gen_write(g, from_js_string("for ("))
	bait__gen__c__Gen_stmt(g, node.init)
	bait__gen__c__Gen_write(g, from_js_string("; "))
	bait__gen__c__Gen_expr(g, node.cond)
	bait__gen__c__Gen_write(g, from_js_string("; "))
	bait__gen__c__Gen_stmt(g, node.inc)
	bait__gen__c__Gen_writeln(g, from_js_string(") {"))
	g.is_for_loop_head = false
	bait__gen__c__Gen_stmts(g, node.stmts)
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
	bait__gen__c__Gen_write_label(g, node.label)
}

function bait__gen__c__Gen_for_in_loop(g, node) {
	let i = node.idxvar
	if (eq(i, from_js_string(""))) {
		i = bait__gen__c__Gen_new_temp_var(g)
	}
	const sym = bait__ast__Table_get_sym(g.table, node.expr_type)
	const container = bait__gen__c__Gen_expr_string(g, node.expr)
	bait__gen__c__Gen_writeln(g, from_js_string(`for (i32 ${i.str} = 0; ${i.str} < ${container.str}.length; ${i.str}++) {`))
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		const info = sym.info
		const typ = bait__gen__c__Gen_typ(g, info.elem_type)
		bait__gen__c__Gen_writeln(g, from_js_string(`\t${typ.str} ${node.valvar.name.str} = (*(${typ.str}*)(Array_get(${container.str}, ${i.str})));`))
	} else if (eq(sym.kind, bait__ast__TypeKind.string)) {
		bait__gen__c__Gen_writeln(g, from_js_string(`\tu8 ${node.valvar.name.str} = string_get(${container.str}, ${i.str});`))
	}
	bait__gen__c__Gen_stmts(g, node.stmts)
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__c__Gen_interface_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return
	}
	bait__errors__error(g.path, node.pos, from_js_string("Bait interfaces are not yet supported"))
	exit(1)
}

function bait__gen__c__Gen_return_stmt(g, node) {
	bait__gen__c__Gen_write(g, from_js_string("return"))
	if (!(node.expr instanceof bait__ast__EmptyExpr)) {
		bait__gen__c__Gen_write(g, from_js_string(" "))
		bait__gen__c__Gen_expr(g, node.expr)
	}
	bait__gen__c__Gen_writeln(g, from_js_string(";"))
}


function bait__gen__c__Gen_concrete_sym(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (eq(g.cur_concrete_types.length, 0)) {
		return sym
	}
	return bait__ast__Table_get_sym(g.table, map_get_set(g.cur_concrete_types, sym.name, 0))
}

function bait__gen__c__Gen_typ(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (eq(sym.kind, bait__ast__TypeKind.generic)) {
		return bait__gen__c__Gen_typ(g, bait__ast__Type_set_nr_amp(map_get_set(g.cur_concrete_types, sym.name, 0), bait__ast__Type_get_nr_amp(typ)))
	}
	const name = string_replace(string_replace(string_replace(sym.name, from_js_string("[]"), from_js_string("Array_")), from_js_string("C."), from_js_string("")), from_js_string("."), from_js_string("__"))
	const ptrs = string_repeat(from_js_string("*"), bait__ast__Type_get_nr_amp(typ))
	return string_add(name, ptrs)
}

function bait__gen__c__Gen_write_types(g) {
	for (let _t658 = 0; _t658 < g.table.type_symbols.length; _t658++) {
		const sym = Array_get(g.table.type_symbols, _t658)
		if (string_starts_with(sym.name, from_js_string("C."))) {
			continue
		}
		const cname = bait__gen__c__c_name(sym.name)
		if (sym.info instanceof bait__ast__StructInfo) {
			const info = sym.info
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(`typedef struct ${cname.str} ${cname.str};\n`))
			g.type_impls_out = string_add(g.type_impls_out, from_js_string(`struct ${cname.str} {\n`))
			for (let _t661 = 0; _t661 < info.fields.length; _t661++) {
				const field = Array_get(info.fields, _t661)
				const type_str = bait__gen__c__Gen_typ(g, field.typ)
				const field_name = bait__gen__c__c_name(field.name)
				g.type_impls_out = string_add(g.type_impls_out, from_js_string(`\t${type_str.str} ${field_name.str};\n`))
			}
			g.type_impls_out = string_add(g.type_impls_out, from_js_string("};\n"))
		} else if (sym.info instanceof bait__ast__ArrayInfo) {
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(`typedef Array ${cname.str};\n`))
		} else {
			switch (sym.kind) {
				case bait__ast__TypeKind.alias_type:
					{
						g.type_defs_out = string_add(g.type_defs_out, from_js_string(`typedef ${bait__gen__c__Gen_typ(g, sym.parent).str} ${cname.str};\n`))
						break
					}
			}
		}
	}
}


function time__Stopwatch({ start = 0, end = 0, elapsed = 0 }) {
	this.start = start
	this.end = end
	this.elapsed = elapsed
}
function time__Stopwatch_start(w) {
	w.start = performance.now()
	w.end = 0
}

function time__Stopwatch_stop(w) {
	w.end = performance.now()
	w.elapsed += u64(w.end - w.start)
}

function time__Stopwatch_restart(w) {
	w.start = performance.now()
	w.end = 0
	w.elapsed = 0
}

function time__Stopwatch_elapsed(w) {
	if (u64(w.start > 0) && eq(w.end, 0)) {
		return u64(w.elapsed + (u64(performance.now() - w.start)))
	}
	return w.elapsed
}


function time__Time({ year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0, millisecond = 0, unix = 0 }) {
	this.year = year
	this.month = month
	this.day = day
	this.hour = hour
	this.minute = minute
	this.second = second
	this.millisecond = millisecond
	this.unix = unix
}
function time__now() {
	let res = new time__Time({})
	
	const date = new Date()
	res.year = date.getFullYear()
	res.month = date.getMonth() + 1
	res.day = date.getDate()
	res.hour = date.getHours()
	res.minute = date.getMinutes()
	res.second = date.getSeconds()
	res.millisecond = date.getMilliseconds()
	res.unix = date.getTime()
	return res
}

function time__Time_minus(a, b) {
	return i64(a.unix - b.unix)
}


function bait__util__timers__Timers({ watches = new map({ data: new Map([]), length: 0 }), show = true }) {
	this.watches = watches
	this.show = show
}
function bait__util__timers__Timers_start(t, name) {
	time__Stopwatch_start(map_get_set(t.watches, name, new time__Stopwatch({})))
}

function bait__util__timers__Timers_show(t, name) {
	if (!t.show) {
		return
	}
	println(from_js_string(`${name.str}: ${u64_str(time__Stopwatch_elapsed(map_get_set(t.watches, name, new time__Stopwatch({})))).str}ms`))
}

function bait__util__timers__Timers_set_show(t, state) {
	t.show = state
}

function bait__util__timers__start(name) {
	bait__util__timers__Timers_start(bait__util__timers__g_timers, name)
}

function bait__util__timers__show(name) {
	bait__util__timers__Timers_show(bait__util__timers__g_timers, name)
}

function bait__util__timers__set_show(state) {
	bait__util__timers__Timers_set_show(bait__util__timers__g_timers, state)
}


function bait__builder__Builder({ prefs = new bait__preference__Prefs({}), parsed_files = new bait_Array({ data: [], length: 0 }), checker = new bait__checker__Checker({}), parser = new bait__parser__Parser({}) }) {
	this.prefs = prefs
	this.parsed_files = parsed_files
	this.checker = checker
	this.parser = parser
}
function bait__builder__Builder_bait_files_in_dir(b, dir) {
	const all_files = os__ls(dir)
	let files = new bait_Array({ data: [], length: 0 })
	for (let _t665 = 0; _t665 < all_files.length; _t665++) {
		const f = Array_get(all_files, _t665)
		if (bait__preference__Prefs_should_compile_file(b.prefs, f)) {
			Array_push(files, os__join_path(dir, new bait_Array({ data: [f], length: 1 })))
		}
	}
	return files
}

function bait__builder__Builder_collect_user_files(b, path) {
	if (os__exists(path)) {
		if (string_ends_with(path, from_js_string(".bt"))) {
			return new bait_Array({ data: [path], length: 1 })
		}
		if (os__is_dir(path)) {
			return bait__builder__Builder_bait_files_in_dir(b, path)
		}
	}
	return new bait_Array({ data: [], length: 0 })
}

function bait__builder__Builder_parse_source_file(b, path) {
	const text = os__read_file(path)
	return bait__parser__Parser_parse(b.parser, text, path)
}

function bait__builder__compile(prefs) {
	let b = new bait__builder__Builder({ prefs: prefs, parser: bait__parser__new(bait__ast__new_table(), prefs) })
	let paths = bait__builder__Builder_collect_user_files(b, prefs.command)
	bait__util__timers__start(from_js_string("PARSE"))
	let files = new bait_Array({ data: [], length: 0 })
	for (let _t670 = 0; _t670 < paths.length; _t670++) {
		const p = Array_get(paths, _t670)
		b.prefs.expected_pkg = from_js_string("")
		Array_push(files, bait__builder__Builder_parse_source_file(b, p))
	}
	const root_pkg = Array_get(files, i32(files.length - 1)).pkg_decl.full_name
	for (let i = 0; i32(i < files.length); i += 1) {
		const f = Array_get(files, i)
		const fdir = os__dir(f.path)
		for (let _t671 = 0; _t671 < f.imports.length; _t671++) {
			const imp = Array_get(f.imports, _t671)
			if (!eq(imp.lang, bait__ast__Language.bait)) {
				continue
			}
			b.prefs.expected_pkg = imp.name
			const import_dir = bait__builder__resolve_import(fdir, string_replace(imp.name, from_js_string("."), os__PATH_SEP))
			if (!os__exists(import_dir)) {
				bait__errors__generic_error(from_js_string(`package ${imp.name.str} not found`))
				continue
			}
			let imp_paths = bait__builder__Builder_bait_files_in_dir(b, import_dir)
			if (eq(imp_paths.length, 0)) {
				bait__errors__generic_error(from_js_string(`package ${imp.name.str} contains no Bait files`))
				continue
			}
			const filtered_paths = Array_filter(imp_paths, function (p) {
				return !Array_contains(paths, p)
			})
			let nr_newly_parsed = 0
			for (let _t675 = 0; _t675 < filtered_paths.length; _t675++) {
				const p = Array_get(filtered_paths, _t675)
				const parsed_file = bait__builder__Builder_parse_source_file(b, p)
				if (eq(parsed_file.path.length, 0)) {
					continue
				}
				nr_newly_parsed += 1
				Array_push(paths, p)
				Array_push(files, parsed_file)
			}
			if (eq(nr_newly_parsed, 0) && i32(filtered_paths.length > 0)) {
				bait__errors__generic_error(from_js_string(`no files belong to package ${imp.name.str}`))
			}
		}
	}
	bait__util__timers__show(from_js_string("PARSE"))
	b.parsed_files = files
	if (bait__builder__Builder_print_errors_and_warnings(b, true)) {
		return 1
	}
	bait__util__timers__start(from_js_string("DEPGRAPH"))
	let deps = new map({ data: new Map([]), length: 0 })
	for (let _t679 = 0; _t679 < files.length; _t679++) {
		const f = Array_get(files, _t679)
		const pkg_name = f.pkg_decl.full_name
		for (let _t680 = 0; _t680 < f.imports.length; _t680++) {
			const imp = Array_get(f.imports, _t680)
			if (!eq(imp.lang, bait__ast__Language.bait)) {
				continue
			}
			Array_push(map_get_set(deps, pkg_name, new bait_Array({ data: [], length: 0 })), imp.name)
		}
	}
	let looked = new bait_Array({ data: [], length: 0 })
	let pkg_order = new bait_Array({ data: [], length: 0 })
	bait__builder__order_pkgs(pkg_order, root_pkg, deps, looked)
	let sorted_files = new bait_Array({ data: [], length: 0 })
	for (let _t682 = 0; _t682 < pkg_order.length; _t682++) {
		const pkg = Array_get(pkg_order, _t682)
		for (let _t683 = 0; _t683 < files.length; _t683++) {
			const f = Array_get(files, _t683)
			if (eq(f.pkg_decl.full_name, pkg)) {
				Array_push(sorted_files, f)
			}
		}
	}
	bait__util__timers__show(from_js_string("DEPGRAPH"))
	bait__util__timers__start(from_js_string("CHECK"))
	b.parsed_files = sorted_files
	b.checker = new bait__checker__Checker({ prefs: b.prefs, table: b.parser.table })
	bait__checker__Checker_check_files(b.checker, sorted_files)
	bait__util__timers__show(from_js_string("CHECK"))
	if (bait__builder__Builder_check_redefined_functions(b)) {
		return 1
	}
	if (bait__builder__Builder_print_errors_and_warnings(b, false)) {
		return 1
	}
	if (eq(b.prefs.backend, bait__preference__Backend.c)) {
		return bait__builder__Builder_code_gen_c(b)
	}
	return bait__builder__Builder_code_gen_js(b)
}

function bait__builder__Builder_code_gen_js(b) {
	bait__util__timers__start(from_js_string("GEN"))
	const res = string_add(bait__gen__js__gen(b.parsed_files, b.parser.table, b.prefs), from_js_string("\n"))
	bait__util__timers__show(from_js_string("GEN"))
	bait__builder__ensure_dir_exists(os__dir(b.prefs.out_name))
	os__write_file(b.prefs.out_name, res)
	if (b.prefs.should_run) {
		const argstr = Array_string_join(b.prefs.user_args, from_js_string(" "))
		const run_res = os__system(from_js_string(`node ${b.prefs.out_name.str} ${argstr.str}`))
		if (!b.prefs.keep_exe) {
			os__rm(b.prefs.out_name)
		}
		return run_res
	}
	return 0
}

function bait__builder__Builder_code_gen_c(b) {
	bait__util__timers__start(from_js_string("GEN"))
	const res = string_add(bait__gen__c__gen(b.parsed_files, b.parser.table, b.prefs), from_js_string("\n"))
	bait__util__timers__show(from_js_string("GEN"))
	if (os__exists_dir(b.prefs.out_name)) {
		b.prefs.out_name = string_add(b.prefs.out_name, from_js_string(".exe"))
	} else {
		bait__builder__ensure_dir_exists(os__dir(b.prefs.out_name))
	}
	const tmp_c_path = os__join_path(os__tmp_dir(), new bait_Array({ data: [string_add(os__file_name(b.prefs.out_name), from_js_string(".c"))], length: 1 }))
	os__write_file(tmp_c_path, res)
	const comp_res = os__system(from_js_string(`cc ${tmp_c_path.str} -o ${b.prefs.out_name.str}`))
	if (!eq(comp_res, 0)) {
		return comp_res
	}
	if (b.prefs.should_run) {
		const argstr = Array_string_join(b.prefs.user_args, from_js_string(" "))
		const run_res = os__system(from_js_string(`./${b.prefs.out_name.str} ${argstr.str}`))
		if (!b.prefs.keep_exe) {
			os__rm(b.prefs.out_name)
		}
		return run_res
	}
	return 0
}

function bait__builder__Builder_print_errors_and_warnings(b, parser_errs) {
	let nr_warns = 0
	let nr_errors = 0
	for (let _t694 = 0; _t694 < b.parsed_files.length; _t694++) {
		const f = Array_get(b.parsed_files, _t694)
		nr_warns += f.warnings.length
		nr_errors += f.errors.length
		if (!b.prefs.hide_warnings) {
			for (let _t696 = 0; _t696 < f.infos.length; _t696++) {
				const info = Array_get(f.infos, _t696)
				bait__errors__Message_print(info)
			}
		}
		if (b.prefs.warn_is_error) {
			for (let _t698 = 0; _t698 < f.warnings.length; _t698++) {
				const warn = Array_get(f.warnings, _t698)
				bait__errors__error(warn.path, warn.pos, warn.msg)
			}
		} else if (!b.prefs.hide_warnings) {
			for (let _t699 = 0; _t699 < f.warnings.length; _t699++) {
				const warn = Array_get(f.warnings, _t699)
				bait__errors__Message_print(warn)
			}
		}
		for (let _t700 = 0; _t700 < f.errors.length; _t700++) {
			const err = Array_get(f.errors, _t700)
			bait__errors__Message_print(err)
			if (parser_errs) {
				return true
			}
		}
	}
	nr_errors += b.checker.errors.length
	for (let _t702 = 0; _t702 < b.checker.errors.length; _t702++) {
		const err = Array_get(b.checker.errors, _t702)
		bait__errors__Message_print(err)
	}
	return i32(nr_errors > 0) || (b.prefs.warn_is_error && i32(nr_warns > 0))
}

function bait__builder__resolve_import(base_dir, pkg) {
	let dir = os__join_path(base_dir, new bait_Array({ data: [pkg], length: 1 }))
	if (os__exists(dir)) {
		return dir
	}
	dir = os__resource_abs_path(os__join_path(from_js_string("lib"), new bait_Array({ data: [pkg], length: 1 })))
	if (os__exists(dir)) {
		return dir
	}
	return os__join_path(os__getwd(), new bait_Array({ data: [from_js_string("lib"), pkg], length: 2 }))
}

function bait__builder__order_pkgs(ordered, pkg, deps, looked) {
	Array_push(looked, pkg)
	for (let _t705 = 0; _t705 < map_get_set(deps, pkg, new bait_Array({ data: [], length: 0 })).length; _t705++) {
		const d = Array_get(map_get_set(deps, pkg, new bait_Array({ data: [], length: 0 })), _t705)
		if (Array_contains(looked, d)) {
			continue
		}
		bait__builder__order_pkgs(ordered, d, deps, looked)
	}
	if (!Array_contains(ordered, pkg)) {
		Array_push(ordered, pkg)
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
function bait__builder__Builder_check_redefined_functions(b) {
	if (eq(b.parser.table.redefined_funs.length, 0)) {
		return false
	}
	let unique_redefs = new bait_Array({ data: [], length: 0 })
	for (let _t710 = 0; _t710 < b.parser.table.redefined_funs.length; _t710++) {
		const name = Array_get(b.parser.table.redefined_funs, _t710)
		if (!Array_contains(unique_redefs, name)) {
			Array_push(unique_redefs, name)
		}
	}
	for (let _t712 = 0; _t712 < unique_redefs.length; _t712++) {
		const name = Array_get(unique_redefs, _t712)
		let redefinitions = new bait_Array({ data: [], length: 0 })
		for (let _t713 = 0; _t713 < b.parsed_files.length; _t713++) {
			const file = Array_get(b.parsed_files, _t713)
			for (let _t714 = 0; _t714 < file.stmts.length; _t714++) {
				const stmt = Array_get(file.stmts, _t714)
				if (stmt instanceof bait__ast__FunDecl && eq(stmt.name, name)) {
					Array_push(redefinitions, new bait__builder__FunRedefinition({ path: file.path, pos: stmt.pos, name: name, signature: bait__builder__Builder_fun_signature(b, stmt) }))
				}
			}
		}
		bait__errors__generic_error(from_js_string(`redfinition of function "${name.str}"`))
		for (let _t716 = 0; _t716 < redefinitions.length; _t716++) {
			const redef = Array_get(redefinitions, _t716)
			bait__errors__info(from_js_string("conflict"), redef.path, redef.pos, redef.signature)
		}
	}
	return true
}

function bait__builder__Builder_fun_signature(b, node) {
	let sig = from_js_string(`fun ${node.name.str}(`)
	for (let i = 0; i < node.params.length; i++) {
		const p = Array_get(node.params, i)
		const type_name = bait__ast__Table_get_sym(b.parser.table, p.typ).name
		sig = string_add(sig, from_js_string(`${p.name.str} ${type_name.str}`))
		if (i32(i < i32(node.params.length - 1))) {
			sig = string_add(sig, from_js_string(", "))
		}
	}
	sig = string_add(sig, from_js_string(")"))
	return sig
}


function bait__builder__run_tests(prefs) {
	let files_to_test = new bait_Array({ data: [], length: 0 })
	for (let _t718 = 0; _t718 < prefs.args.length; _t718++) {
		const a = Array_get(prefs.args, _t718)
		if (os__exists(a) && string_ends_with(a, from_js_string(".bt")) && string_contains(a, from_js_string("_test."))) {
			Array_push(files_to_test, a)
		} else if (os__exists_dir(a)) {
			const t = Array_filter(os__walk_ext(a, from_js_string(".bt")), function (f) {
				return string_contains(f, from_js_string("_test.")) && !string_contains(f, from_js_string(".in."))
			})
			Array_push_many(files_to_test, t)
		} else {
			eprintln(from_js_string(`Unrecognized test file or directory: "${a.str}"`))
			exit(1)
		}
	}
	let test_prefs = prefs
	let has_fails = false
	for (let i = 0; i < files_to_test.length; i++) {
		const file = Array_get(files_to_test, i)
		test_prefs.command = file
		test_prefs.out_name = os__join_path(os__tmp_dir(), new bait_Array({ data: [from_js_string(`test_${i32_str(i).str}.js`)], length: 1 }))
		const res = bait__builder__compile(test_prefs)
		if (eq(res, 0)) {
			println(from_js_string(`OK ${file.str}`))
		} else {
			has_fails = true
			println(from_js_string(`FAIL ${file.str}`))
		}
	}
	if (has_fails) {
		return 1
	}
	return 0
}


const bait__util__tools__VERBOSE = Array_contains(os__ARGS, from_js_string("--verbose")) || Array_contains(os__ARGS, from_js_string("-v"))
function bait__util__tools__launch_tool(name, args) {
	const base_path = os__join_path(from_js_string("/home/runner/work/bait/bait"), new bait_Array({ data: [from_js_string("cli"), from_js_string("tools"), name], length: 3 }))
	const tool_source = bait__util__tools__find_tool_source(base_path)
	const tool_exe = string_add(base_path, from_js_string(".js"))
	const baitexe = os__executable()
	const comp_res = os__exec(from_js_string(`node ${baitexe.str} ${tool_source.str} -o ${tool_exe.str}`))
	if (!eq(comp_res.code, 0)) {
		eprintln(from_js_string(`Failed to compile tool "${name.str}" with error: ${comp_res.stderr.str}`))
		return 1
	}
	const args_string = Array_string_join(args, from_js_string(" "))
	if (bait__util__tools__VERBOSE) {
		println(from_js_string("launching tool"))
		println(from_js_string(`  source: ${tool_source.str}`))
		println(from_js_string(`  exe:    ${tool_exe.str}`))
		println(from_js_string(`  args:   ${args_string.str}`))
	}
	return os__system(from_js_string(`node ${tool_exe.str} ${args_string.str}`))
}

function bait__util__tools__find_tool_source(base) {
	if (os__exists_dir(base)) {
		return base
	}
	return string_add(base, from_js_string(".bt"))
}


const TOOLS = new bait_Array({ data: [from_js_string("ast"), from_js_string("init"), from_js_string("self"), from_js_string("up"), from_js_string("symlink"), from_js_string("doctor"), from_js_string("help"), from_js_string("test-all"), from_js_string("build-examples"), from_js_string("build-tools"), from_js_string("check-md")], length: 11 })
function main() {
	const args = os__user_args()
	bait__util__timers__start(from_js_string("PREFS"))
	let prefs = bait__preference__parse_args(args)
	bait__util__timers__set_show(prefs.show_timings)
	bait__util__timers__show(from_js_string("PREFS"))
	if (Array_contains(TOOLS, prefs.command)) {
		exit(bait__util__tools__launch_tool(prefs.command, prefs.build_options))
	}
	if (eq(prefs.command, from_js_string("test"))) {
		exit(bait__builder__run_tests(prefs))
	}
	if (eq(prefs.command, from_js_string("version"))) {
		println(from_js_string(`Bait ${bait__util__FULL_VERSION.str}`))
		return
	}
	if (os__exists(prefs.command)) {
		exit(bait__builder__compile(prefs))
	}
	eprintln(from_js_string(`error: unknown file or command: "${prefs.command.str}"`))
	exit(1)
}


main()
