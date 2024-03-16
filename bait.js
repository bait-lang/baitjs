const JS = {}
JS.console = require("console")
JS.process = require("process")
JS.os = require("os")
JS.fs = require("fs")
JS.path = require("path")
JS.child_process = require("child_process")

var bait__util__timers__g_timers = new bait__util__timers__Timers({})

function bait__ast__BoolLiteral_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.BoolLiteral{"
	s += "\n"
	s += space + "  val = " + bool_str(it.val, indent + 1).str + "\n"
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

function Array_contains_bait__token__Token(a, val) {
	return i32(Array_index_bait__token__Token(a, val) >= 0)
}

function Array_contains_Array_bait__ast__Type(a, val) {
	return i32(Array_index_bait__token__Token(a, val) >= 0)
}

function Array_contains_bait__ast__Type(a, val) {
	return i32(Array_index_bait__token__Token(a, val) >= 0)
}

function Array_contains_string(a, val) {
	return i32(Array_index_bait__token__Token(a, val) >= 0)
}

function Array_contains_bait__ast__TypeKind(a, val) {
	return i32(Array_index_bait__token__Token(a, val) >= 0)
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
	a.length = i32(a.length + 1)
}

function Array_push_many(a, b) {
	a.data = a.data.concat(b.data)
	a.length = i32(a.length + b.length)
}

function Array_index_string(a, val) {
	for (let i = 0; i32(i < a.length); i = i32(i + 1)) {
		if (string_eq(Array_get(a, i), val)) {
			return i
		}
	}
	return -1
}

function Array_index_bait__token__Token(a, val) {
	for (let i = 0; i32(i < a.length); i = i32(i + 1)) {
		if (eq(Array_get(a, i), val)) {
			return i
		}
	}
	return -1
}

function Array_delete(a, idx) {
	a.data.splice(idx, 1)
	a.length = i32(a.length - 1)
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

function print(msg) {
	JS.process.stdout.write(msg.str)
}

function eprint(msg) {
	JS.process.stderr.write(msg.str)
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

function Result({ is_error = false, msg = from_js_string(""), data = undefined }) {
	this.is_error = is_error
	this.msg = msg
	this.data = data
}
function error(msg) {
	return new Result({ is_error: true, msg: msg })
}

function bool_str(b) {
	if (b) {
		return from_js_string("true")
	}
	return from_js_string("false")
}


function u8_is_upper(c) {
	return u8(c >= u8("A")) && u8(c <= u8("Z"))
}

function u8_is_lower(c) {
	return u8(c >= u8("a")) && u8(c <= u8("z"))
}

function u8_is_digit(c) {
	return u8(c >= u8("0")) && u8(c <= u8("9"))
}

function u8_is_bin_digit(c) {
	return eq(c, u8("0")) || eq(c, u8("1"))
}

function u8_is_oct_digit(c) {
	return u8(c >= u8("0")) && u8(c <= u8("7"))
}

function u8_is_hex_digit(c) {
	return u8_is_digit(c) || (u8(c >= u8("a")) && u8(c <= u8("f"))) || (u8(c >= u8("A")) && u8(c <= u8("F")))
}

function Array_u8_to_string(chars) {
	let s = from_js_string("")
	for (let _t3 = 0; _t3 < chars.length; _t3++) {
		const c = Array_get(chars, _t3)
		s = string_add(s, u8_ascii(c))
	}
	return s
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
		m.length = i32(m.length + 1)
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


const MIN_I8 = -128
const MAX_I8 = 127
const MIN_I16 = -32768
const MAX_I16 = 32767
const MIN_I32 = -2147483648
const MAX_I32 = 2147483647
const MIN_I64 = BigInt(-9223372036854775808)
const MAX_I64 = BigInt(9223372036854775807n)
const MIN_U8 = 0
const MAX_U8 = 255
const MIN_U16 = 0
const MAX_U16 = 65535
const MIN_U32 = BigInt(0n)
const MAX_U32 = BigInt(4294967295n)
const MIN_U64 = BigInt(0n)
const MAX_U64 = BigInt(18446744073709551615n)
function u8_hex(n) {
	return to_hex_padded(BigInt(n), 2)
}

function u16_hex(n) {
	return to_hex(BigInt(n), 4)
}

function u32_hex(n) {
	return to_hex(BigInt(n), 8)
}

function u64_hex(n) {
	return to_hex(BigInt(n), 16)
}

function i8_hex(n) {
	return u8_hex((n))
}

function i16_hex(n) {
	return u16_hex((n))
}

function i32_hex(n) {
	return u32_hex((BigInt(n)))
}

function i64_hex(n) {
	return u64_hex((BigInt(n)))
}

function to_hex(num, len) {
	let n = num
	let buf = new bait_Array({ data: Array.from({ length: len }, (v, i) => 0), length: len })
	let i = (u8(len - 1))
	while (i32(i >= 0)) {
		const d = Number((u64(n & BigInt(0xFn))))
		let _t6 = undefined
		if (u8(d < 10)) {
			_t6 = u8(d + u8("0"))
		} else {
			_t6 = u8(d + 87)
		}
		const d2 = _t6
		Array_set(buf, i, d2)
		n = u64(n >> BigInt(4n))
		if (eq(n, BigInt(0n))) {
			break
		}
		i = i32(i - 1)
	}
	return Array_u8_to_string(Array_slice(buf, i, buf.length))
}

function to_hex_padded(num, len) {
	let n = num
	let buf = new bait_Array({ data: Array.from({ length: len }, (v, i) => 0), length: len })
	for (let i = (u8(len - 1)); i32(i >= 0); i = i32(i - 1)) {
		const d = Number((u64(n & BigInt(0xFn))))
		let _t8 = undefined
		if (u8(d < 10)) {
			_t8 = u8(d + u8("0"))
		} else {
			_t8 = u8(d + 87)
		}
		const d2 = _t8
		Array_set(buf, i, d2)
		n = u64(n >> BigInt(4n))
	}
	return Array_u8_to_string(buf)
}


function i8(n) {
	const v = n & 0xFF
	return v > MAX_I8 ? -v : v
}

function i16(n) {
	const v = n & 0xFFFF
	return v > MAX_I16 ? -v : v
}

function i32(n) {
	const v = n & 0xFFFFFFFF
	return v > MAX_I32 ? -v : v
}

function i64(n) {
	return BigInt(BigInt.asIntN(64, n))
}

function u8(v) {
	if (typeof(v) == "string") {
		return v.charCodeAt(0)
	}
	if (v instanceof string) {
		return v.str.charCodeAt(0)
	}
	return v & 0xFF
}

function u16(n) {
	return n & 0xFFFF
}

function u32(n) {
	return BigInt(BigInt.asUintN(32, n))
}

function u64(n) {
	return BigInt(BigInt.asUintN(64, n))
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


function string_index(s, search) {
	return string_index_after(s, search, 0)
}

function string_contains(s, pattern) {
	return !eq(string_index(s, pattern), -1)
}

function string_all_before(s, search) {
	const idx = string_index(s, search)
	if (eq(idx, -1)) {
		return s
	}
	return string_substr(s, 0, idx)
}

function string_all_before_last(s, search) {
	const idx = string_index_last(s, search)
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
	const idx = string_index_last(s, search)
	if (eq(idx, -1)) {
		return s
	}
	return string_substr(s, i32(idx + 1), s.length)
}

function string_trim_left(s, cutset) {
	let pos = 0
	while (i32(pos < s.length)) {
		let found = false
		for (let _t15 = 0; _t15 < cutset.length; _t15++) {
			const c = string_get(cutset, _t15)
			if (eq(string_get(s, pos), c)) {
				found = true
				break
			}
		}
		if (!found) {
			break
		}
		pos = i32(pos + 1)
	}
	return string_substr(s, pos, s.length)
}

function string_trim_right(s, cutset) {
	let pos = i32(s.length - 1)
	while (i32(pos >= 0)) {
		let found = false
		for (let _t18 = 0; _t18 < cutset.length; _t18++) {
			const c = string_get(cutset, _t18)
			if (eq(string_get(s, pos), c)) {
				found = true
				break
			}
		}
		if (!found) {
			break
		}
		pos = i32(pos - 1)
	}
	return string_substr(s, 0, i32(pos + 1))
}


function string({ str = undefined, length = 0 }) {
	this.str = str
	this.length = length
}
function string_get(s, i) {
	return u8(s.str.charCodeAt(i))
}

function string_bytes(s) {
	let arr = new bait_Array({ data: [], length: 0 })
	for (let _t21 = 0; _t21 < s.length; _t21++) {
		const c = string_get(s, _t21)
		Array_push(arr, c)
	}
	return arr
}

function string_replace(s, val, bait_with) {
	return from_js_string(s.str.replaceAll(val.str, bait_with.str))
}

function string_substr(s, start, end) {
	return from_js_string(s.str.slice(start, end))
}

function string_index_after(s, search, pos) {
	return s.str.indexOf(search.str, pos)
}

function string_index_last(s, search) {
	return s.str.lastIndexOf(search.str)
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

function string_is_capital(s) {
	if (eq(s.length, 0) || !u8_is_upper(string_get(s, 0))) {
		return false
	}
	for (let i = 1; i32(i < s.length); i = i32(i + 1)) {
		if (u8_is_upper(string_get(s, i))) {
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
		for (let _t25 = 0; _t25 < s.length; _t25++) {
			const c = string_get(s, _t25)
			Array_push(res, u8_ascii(c))
		}
		return res
	}
	let start = 0
	while (i32(i < s.length)) {
		const is_delim = i32(i32(i + delim.length) <= s.length) && string_eq(string_substr(s, i, i32(i + delim.length)), delim)
		if (is_delim) {
			Array_push(res, string_substr(s, start, i))
			start = i32(i + delim.length)
			i = start
		} else {
			i = i32(i + 1)
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

function string_eq(a, b) {
	if (!eq(a.length, b.length)) {
		return false
	}
	return a.str === b.str
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
	for (let i = 0; i32(i < js_arr.length); i = i32(i + 1)) {
		Array_push(a, from_js_string(js_arr[i]))
	}
	return a
}

function Array_string_to_js_arr(arr) {
	const js_arr = []
	for (let _t29 = 0; _t29 < arr.length; _t29++) {
		const s = Array_get(arr, _t29)
		js_arr.push(s.str)
	}
	return js_arr
}



function os__walk_ext(dir, ext) {
	let ext_files = new bait_Array({ data: [], length: 0 })
	const all_files = os__ls(dir)
	for (let _t30 = 0; _t30 < all_files.length; _t30++) {
		const file = Array_get(all_files, _t30)
		const fpath = os__join_path(dir, new bait_Array({ data: [file], length: 1 }))
		if (os__is_dir(fpath)) {
			const tmp = os__walk_ext(fpath, ext)
			Array_push_many(ext_files, tmp)
		} else if (string_ends_with(fpath, ext)) {
			Array_push(ext_files, fpath)
		}
	}
	return ext_files
}

function os__dir(path) {
	let other_sep = from_js_string("\\")
	if (!string_eq(os__PATH_SEP, from_js_string("/"))) {
		other_sep = from_js_string("/")
	}
	const p = string_replace(path, other_sep, os__PATH_SEP)
	const pos = string_index_last(p, os__PATH_SEP)
	if (eq(pos, -1)) {
		return from_js_string(".")
	}
	if (eq(pos, 0) && string_eq(os__PATH_SEP, from_js_string("/"))) {
		return from_js_string("/")
	}
	return string_substr(path, 0, pos)
}

function os__exists_dir(path) {
	return os__exists(path) && os__is_dir(path)
}


const os__ARGS = from_js_string_arr(JS.process.argv)
const os__PATH_SEP = from_js_string(JS.path.sep)
function os__user_args() {
	return Array_slice(os__ARGS, 2, os__ARGS.length)
}

function os__ls(dir) {
	return from_js_string_arr(JS.fs.readdirSync(dir.str))
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
	return BigInt(JS.fs.lstatSync(path.str).mtimeMs)
}

function os__symlink(src, dest) {
	JS.fs.symlinkSync(src.str, dest.str)
}

function os__is_root(path) {
	if (string_eq(os__platform(), from_js_string("win32"))) {
		return eq(path.length, 2) && eq(string_get(path, 1), u8(":"))
	}
	return string_eq(path, from_js_string("/"))
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

function os__read_bytes(path) {
	const js_arr = [...JS.fs.readFileSync(path.str)]
	return from_js_arr(js_arr)
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

function os__CmdRes({ code = 0, stdout = from_js_string(""), stderr = from_js_string("") }) {
	this.code = code
	this.stdout = stdout
	this.stderr = stderr
}
function os__exec(cmd) {
	let res = new os__CmdRes({})
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
	let _t39 = undefined
	if (eq(t, bait__token__Token.lsqr)) {
		_t39 = bait__token__Precedence.index
	} else if (eq(t, bait__token__Token.dot)) {
		_t39 = bait__token__Precedence.call
	} else if (eq(t, bait__token__Token.key_not)) {
		_t39 = bait__token__Precedence.prefix
	} else if (eq(t, bait__token__Token.mul) || eq(t, bait__token__Token.div) || eq(t, bait__token__Token.mod) || eq(t, bait__token__Token.amp) || eq(t, bait__token__Token.lshift) || eq(t, bait__token__Token.rshift)) {
		_t39 = bait__token__Precedence.product
	} else if (eq(t, bait__token__Token.plus) || eq(t, bait__token__Token.minus) || eq(t, bait__token__Token.pipe) || eq(t, bait__token__Token.caret)) {
		_t39 = bait__token__Precedence.sum
	} else if (eq(t, bait__token__Token.eq) || eq(t, bait__token__Token.ne) || eq(t, bait__token__Token.lt) || eq(t, bait__token__Token.gt) || eq(t, bait__token__Token.le) || eq(t, bait__token__Token.ge)) {
		_t39 = bait__token__Precedence.compare
	} else if (eq(t, bait__token__Token.key_as) || eq(t, bait__token__Token.key_is)) {
		_t39 = bait__token__Precedence.as_is
	} else if (eq(t, bait__token__Token.key_and) || eq(t, bait__token__Token.key_or)) {
		_t39 = bait__token__Precedence.cond
	} else {
		_t39 = bait__token__Precedence.lowest
	}
	return _t39
}


const bait__token__Token = {
	error: 0,
	attr: 1,
	hash: 2,
	comment: 3,
	name: 4,
	string: 5,
	char: 6,
	float: 7,
	integer: 8,
	_last_with_val: 9,
	eof: 10,
	dot: 11,
	colon: 12,
	comma: 13,
	semicolon: 14,
	plus: 15,
	minus: 16,
	mul: 17,
	div: 18,
	mod: 19,
	assign: 20,
	decl_assign: 21,
	plus_assign: 22,
	minus_assign: 23,
	mul_assign: 24,
	div_assign: 25,
	mod_assign: 26,
	eq: 27,
	ne: 28,
	lt: 29,
	gt: 30,
	le: 31,
	ge: 32,
	lpar: 33,
	rpar: 34,
	lsqr: 35,
	rsqr: 36,
	lcur: 37,
	rcur: 38,
	excl: 39,
	tilde: 40,
	amp: 41,
	pipe: 42,
	caret: 43,
	lshift: 44,
	rshift: 45,
	dollar: 46,
	str_dollar: 47,
	key_and: 48,
	key_as: 49,
	key_assert: 50,
	key_break: 51,
	key_const: 52,
	key_continue: 53,
	key_else: 54,
	key_enum: 55,
	key_false: 56,
	key_for: 57,
	key_fun: 58,
	key_global: 59,
	key_if: 60,
	key_import: 61,
	key_in: 62,
	key_interface: 63,
	key_is: 64,
	key_match: 65,
	key_mut: 66,
	key_not: 67,
	key_or: 68,
	key_package: 69,
	key_pub: 70,
	key_return: 71,
	key_struct: 72,
	key_true: 73,
	key_type: 74,
	key_typeof: 75,
}
function bait__token__kind_from_string(name) {
	let _t40 = undefined
	if (string_eq(name, from_js_string("and"))) {
		_t40 = bait__token__Token.key_and
	} else if (string_eq(name, from_js_string("as"))) {
		_t40 = bait__token__Token.key_as
	} else if (string_eq(name, from_js_string("assert"))) {
		_t40 = bait__token__Token.key_assert
	} else if (string_eq(name, from_js_string("break"))) {
		_t40 = bait__token__Token.key_break
	} else if (string_eq(name, from_js_string("const"))) {
		_t40 = bait__token__Token.key_const
	} else if (string_eq(name, from_js_string("continue"))) {
		_t40 = bait__token__Token.key_continue
	} else if (string_eq(name, from_js_string("else"))) {
		_t40 = bait__token__Token.key_else
	} else if (string_eq(name, from_js_string("enum"))) {
		_t40 = bait__token__Token.key_enum
	} else if (string_eq(name, from_js_string("false"))) {
		_t40 = bait__token__Token.key_false
	} else if (string_eq(name, from_js_string("for"))) {
		_t40 = bait__token__Token.key_for
	} else if (string_eq(name, from_js_string("fun"))) {
		_t40 = bait__token__Token.key_fun
	} else if (string_eq(name, from_js_string("global"))) {
		_t40 = bait__token__Token.key_global
	} else if (string_eq(name, from_js_string("if"))) {
		_t40 = bait__token__Token.key_if
	} else if (string_eq(name, from_js_string("import"))) {
		_t40 = bait__token__Token.key_import
	} else if (string_eq(name, from_js_string("in"))) {
		_t40 = bait__token__Token.key_in
	} else if (string_eq(name, from_js_string("interface"))) {
		_t40 = bait__token__Token.key_interface
	} else if (string_eq(name, from_js_string("is"))) {
		_t40 = bait__token__Token.key_is
	} else if (string_eq(name, from_js_string("match"))) {
		_t40 = bait__token__Token.key_match
	} else if (string_eq(name, from_js_string("mut"))) {
		_t40 = bait__token__Token.key_mut
	} else if (string_eq(name, from_js_string("not"))) {
		_t40 = bait__token__Token.key_not
	} else if (string_eq(name, from_js_string("or"))) {
		_t40 = bait__token__Token.key_or
	} else if (string_eq(name, from_js_string("package"))) {
		_t40 = bait__token__Token.key_package
	} else if (string_eq(name, from_js_string("pub"))) {
		_t40 = bait__token__Token.key_pub
	} else if (string_eq(name, from_js_string("return"))) {
		_t40 = bait__token__Token.key_return
	} else if (string_eq(name, from_js_string("struct"))) {
		_t40 = bait__token__Token.key_struct
	} else if (string_eq(name, from_js_string("true"))) {
		_t40 = bait__token__Token.key_true
	} else if (string_eq(name, from_js_string("type"))) {
		_t40 = bait__token__Token.key_type
	} else if (string_eq(name, from_js_string("typeof"))) {
		_t40 = bait__token__Token.key_typeof
	} else {
		_t40 = bait__token__Token.name
	}
	return _t40
}

function bait__token__Token_has_val(tok) {
	return tok < bait__token__Token._last_with_val
}

const bait__token__COMPARE_KINDS = new bait_Array({ data: [bait__token__Token.eq, bait__token__Token.ne, bait__token__Token.lt, bait__token__Token.gt, bait__token__Token.le, bait__token__Token.ge, bait__token__Token.key_is], length: 7 })
const bait__token__MATH_KINDS = new bait_Array({ data: [bait__token__Token.plus, bait__token__Token.minus, bait__token__Token.mul, bait__token__Token.div, bait__token__Token.mod], length: 5 })
const bait__token__OTHER_INFIXES = new bait_Array({ data: [bait__token__Token.key_and, bait__token__Token.key_or], length: 2 })
const bait__token__MATH_ASSIGNS = new bait_Array({ data: [bait__token__Token.plus_assign, bait__token__Token.minus_assign, bait__token__Token.mul_assign, bait__token__Token.div_assign, bait__token__Token.mod_assign], length: 5 })
const bait__token__BITWISE_INFIX = new bait_Array({ data: [bait__token__Token.amp, bait__token__Token.pipe, bait__token__Token.caret, bait__token__Token.lshift, bait__token__Token.rshift], length: 5 })
function bait__token__Token_is_compare(kind) {
	return Array_contains_bait__token__Token(bait__token__COMPARE_KINDS, kind)
}

function bait__token__Token_is_infix(kind) {
	return bait__token__Token_is_compare(kind) || bait__token__Token_is_math(kind) || Array_contains_bait__token__Token(bait__token__OTHER_INFIXES, kind) || Array_contains_bait__token__Token(bait__token__BITWISE_INFIX, kind)
}

function bait__token__Token_is_math(tok) {
	return Array_contains_bait__token__Token(bait__token__MATH_KINDS, tok)
}

function bait__token__Token_is_assign(kind) {
	return eq(kind, bait__token__Token.decl_assign) || eq(kind, bait__token__Token.assign) || bait__token__Token_is_math_assign(kind)
}

function bait__token__Token_is_math_assign(tok) {
	return Array_contains_bait__token__Token(bait__token__MATH_ASSIGNS, tok)
}

function bait__token__Token_math_from_assign(tok) {
	let _t41 = undefined
	if (eq(tok, bait__token__Token.plus_assign)) {
		_t41 = bait__token__Token.plus
	} else if (eq(tok, bait__token__Token.minus_assign)) {
		_t41 = bait__token__Token.minus
	} else if (eq(tok, bait__token__Token.mul_assign)) {
		_t41 = bait__token__Token.mul
	} else if (eq(tok, bait__token__Token.div_assign)) {
		_t41 = bait__token__Token.div
	} else if (eq(tok, bait__token__Token.mod_assign)) {
		_t41 = bait__token__Token.mod
	} else {
		_t41 = panic(from_js_string("invalid math assign token"))
	}
	return _t41
}

function bait__token__Token_js_repr(kind) {
	let _t42 = undefined
	if (eq(kind, bait__token__Token.key_break)) {
		_t42 = from_js_string("break")
	} else if (eq(kind, bait__token__Token.key_continue)) {
		_t42 = from_js_string("continue")
	} else if (eq(kind, bait__token__Token.key_is)) {
		_t42 = from_js_string("instanceof")
	} else if (eq(kind, bait__token__Token.mul)) {
		_t42 = from_js_string("*")
	} else if (eq(kind, bait__token__Token.div)) {
		_t42 = from_js_string("/")
	} else if (eq(kind, bait__token__Token.mod)) {
		_t42 = from_js_string("%")
	} else if (eq(kind, bait__token__Token.plus)) {
		_t42 = from_js_string("+")
	} else if (eq(kind, bait__token__Token.minus)) {
		_t42 = from_js_string("-")
	} else if (eq(kind, bait__token__Token.mul_assign)) {
		_t42 = from_js_string("*=")
	} else if (eq(kind, bait__token__Token.div_assign)) {
		_t42 = from_js_string("/=")
	} else if (eq(kind, bait__token__Token.mod_assign)) {
		_t42 = from_js_string("%=")
	} else if (eq(kind, bait__token__Token.plus_assign)) {
		_t42 = from_js_string("+=")
	} else if (eq(kind, bait__token__Token.minus_assign)) {
		_t42 = from_js_string("-=")
	} else if (eq(kind, bait__token__Token.decl_assign) || eq(kind, bait__token__Token.assign)) {
		_t42 = from_js_string("=")
	} else if (eq(kind, bait__token__Token.eq)) {
		_t42 = from_js_string("==")
	} else if (eq(kind, bait__token__Token.ne)) {
		_t42 = from_js_string("!=")
	} else if (eq(kind, bait__token__Token.lt)) {
		_t42 = from_js_string("<")
	} else if (eq(kind, bait__token__Token.gt)) {
		_t42 = from_js_string(">")
	} else if (eq(kind, bait__token__Token.le)) {
		_t42 = from_js_string("<=")
	} else if (eq(kind, bait__token__Token.ge)) {
		_t42 = from_js_string(">=")
	} else if (eq(kind, bait__token__Token.tilde)) {
		_t42 = from_js_string("~")
	} else if (eq(kind, bait__token__Token.amp)) {
		_t42 = from_js_string("&")
	} else if (eq(kind, bait__token__Token.pipe)) {
		_t42 = from_js_string("|")
	} else if (eq(kind, bait__token__Token.caret)) {
		_t42 = from_js_string("^")
	} else if (eq(kind, bait__token__Token.lshift)) {
		_t42 = from_js_string("<<")
	} else if (eq(kind, bait__token__Token.rshift)) {
		_t42 = from_js_string(">>")
	} else if (eq(kind, bait__token__Token.key_and)) {
		_t42 = from_js_string("&&")
	} else if (eq(kind, bait__token__Token.key_not)) {
		_t42 = from_js_string("!")
	} else if (eq(kind, bait__token__Token.key_or)) {
		_t42 = from_js_string("||")
	} else {
		_t42 = from_js_string("")
	}
	return _t42
}

function bait__token__Token_c_repr(kind) {
	let _t43 = undefined
	if (eq(kind, bait__token__Token.amp)) {
		_t43 = from_js_string("&")
	} else {
		_t43 = bait__token__Token_js_repr(kind)
	}
	return _t43
}

function bait__token__Token_str(kind) {
	let _t44 = undefined
	if (eq(kind, bait__token__Token.error)) {
		_t44 = from_js_string("error")
	} else if (eq(kind, bait__token__Token.eof)) {
		_t44 = from_js_string("eof")
	} else if (eq(kind, bait__token__Token.attr)) {
		_t44 = from_js_string("attr")
	} else if (eq(kind, bait__token__Token.comment)) {
		_t44 = from_js_string("comment")
	} else if (eq(kind, bait__token__Token.name)) {
		_t44 = from_js_string("name")
	} else if (eq(kind, bait__token__Token.string)) {
		_t44 = from_js_string("string")
	} else if (eq(kind, bait__token__Token.char)) {
		_t44 = from_js_string("char")
	} else if (eq(kind, bait__token__Token.float)) {
		_t44 = from_js_string("float")
	} else if (eq(kind, bait__token__Token.integer)) {
		_t44 = from_js_string("integer")
	} else if (eq(kind, bait__token__Token._last_with_val)) {
		_t44 = from_js_string("_last_with_val")
	} else if (eq(kind, bait__token__Token.dot)) {
		_t44 = from_js_string("dot")
	} else if (eq(kind, bait__token__Token.colon)) {
		_t44 = from_js_string("colon")
	} else if (eq(kind, bait__token__Token.comma)) {
		_t44 = from_js_string("comma")
	} else if (eq(kind, bait__token__Token.semicolon)) {
		_t44 = from_js_string("semicolon")
	} else if (eq(kind, bait__token__Token.plus)) {
		_t44 = from_js_string("plus")
	} else if (eq(kind, bait__token__Token.minus)) {
		_t44 = from_js_string("minus")
	} else if (eq(kind, bait__token__Token.mul)) {
		_t44 = from_js_string("mul")
	} else if (eq(kind, bait__token__Token.div)) {
		_t44 = from_js_string("div")
	} else if (eq(kind, bait__token__Token.mod)) {
		_t44 = from_js_string("mod")
	} else if (eq(kind, bait__token__Token.assign)) {
		_t44 = from_js_string("assign")
	} else if (eq(kind, bait__token__Token.decl_assign)) {
		_t44 = from_js_string("decl_assign")
	} else if (eq(kind, bait__token__Token.plus_assign)) {
		_t44 = from_js_string("plus_assign")
	} else if (eq(kind, bait__token__Token.minus_assign)) {
		_t44 = from_js_string("minus_assign")
	} else if (eq(kind, bait__token__Token.mul_assign)) {
		_t44 = from_js_string("mul_assign")
	} else if (eq(kind, bait__token__Token.div_assign)) {
		_t44 = from_js_string("div_assign")
	} else if (eq(kind, bait__token__Token.mod_assign)) {
		_t44 = from_js_string("mod_assign")
	} else if (eq(kind, bait__token__Token.eq)) {
		_t44 = from_js_string("eq")
	} else if (eq(kind, bait__token__Token.ne)) {
		_t44 = from_js_string("ne")
	} else if (eq(kind, bait__token__Token.lt)) {
		_t44 = from_js_string("lt")
	} else if (eq(kind, bait__token__Token.gt)) {
		_t44 = from_js_string("gt")
	} else if (eq(kind, bait__token__Token.le)) {
		_t44 = from_js_string("le")
	} else if (eq(kind, bait__token__Token.ge)) {
		_t44 = from_js_string("ge")
	} else if (eq(kind, bait__token__Token.lpar)) {
		_t44 = from_js_string("lpar")
	} else if (eq(kind, bait__token__Token.rpar)) {
		_t44 = from_js_string("rpar")
	} else if (eq(kind, bait__token__Token.lsqr)) {
		_t44 = from_js_string("lsqr")
	} else if (eq(kind, bait__token__Token.rsqr)) {
		_t44 = from_js_string("rsqr")
	} else if (eq(kind, bait__token__Token.lcur)) {
		_t44 = from_js_string("lcur")
	} else if (eq(kind, bait__token__Token.rcur)) {
		_t44 = from_js_string("rcur")
	} else if (eq(kind, bait__token__Token.excl)) {
		_t44 = from_js_string("excl")
	} else if (eq(kind, bait__token__Token.tilde)) {
		_t44 = from_js_string("tilde")
	} else if (eq(kind, bait__token__Token.amp)) {
		_t44 = from_js_string("amp")
	} else if (eq(kind, bait__token__Token.pipe)) {
		_t44 = from_js_string("pipe")
	} else if (eq(kind, bait__token__Token.caret)) {
		_t44 = from_js_string("caret")
	} else if (eq(kind, bait__token__Token.lshift)) {
		_t44 = from_js_string("lshift")
	} else if (eq(kind, bait__token__Token.rshift)) {
		_t44 = from_js_string("rshift")
	} else if (eq(kind, bait__token__Token.dollar)) {
		_t44 = from_js_string("dollar")
	} else if (eq(kind, bait__token__Token.str_dollar)) {
		_t44 = from_js_string("str_dollar")
	} else if (eq(kind, bait__token__Token.hash)) {
		_t44 = from_js_string("hash")
	} else if (eq(kind, bait__token__Token.key_and)) {
		_t44 = from_js_string("key_and")
	} else if (eq(kind, bait__token__Token.key_as)) {
		_t44 = from_js_string("key_as")
	} else if (eq(kind, bait__token__Token.key_assert)) {
		_t44 = from_js_string("key_assert")
	} else if (eq(kind, bait__token__Token.key_break)) {
		_t44 = from_js_string("key_break")
	} else if (eq(kind, bait__token__Token.key_const)) {
		_t44 = from_js_string("key_const")
	} else if (eq(kind, bait__token__Token.key_continue)) {
		_t44 = from_js_string("key_continue")
	} else if (eq(kind, bait__token__Token.key_else)) {
		_t44 = from_js_string("key_else")
	} else if (eq(kind, bait__token__Token.key_enum)) {
		_t44 = from_js_string("key_enum")
	} else if (eq(kind, bait__token__Token.key_false)) {
		_t44 = from_js_string("key_false")
	} else if (eq(kind, bait__token__Token.key_for)) {
		_t44 = from_js_string("key_for")
	} else if (eq(kind, bait__token__Token.key_fun)) {
		_t44 = from_js_string("key_fun")
	} else if (eq(kind, bait__token__Token.key_global)) {
		_t44 = from_js_string("key_global")
	} else if (eq(kind, bait__token__Token.key_if)) {
		_t44 = from_js_string("key_if")
	} else if (eq(kind, bait__token__Token.key_import)) {
		_t44 = from_js_string("key_import")
	} else if (eq(kind, bait__token__Token.key_in)) {
		_t44 = from_js_string("key_in")
	} else if (eq(kind, bait__token__Token.key_interface)) {
		_t44 = from_js_string("key_interface")
	} else if (eq(kind, bait__token__Token.key_is)) {
		_t44 = from_js_string("key_is")
	} else if (eq(kind, bait__token__Token.key_match)) {
		_t44 = from_js_string("key_match")
	} else if (eq(kind, bait__token__Token.key_mut)) {
		_t44 = from_js_string("key_mut")
	} else if (eq(kind, bait__token__Token.key_not)) {
		_t44 = from_js_string("key_not")
	} else if (eq(kind, bait__token__Token.key_or)) {
		_t44 = from_js_string("key_or")
	} else if (eq(kind, bait__token__Token.key_package)) {
		_t44 = from_js_string("key_package")
	} else if (eq(kind, bait__token__Token.key_pub)) {
		_t44 = from_js_string("key_pub")
	} else if (eq(kind, bait__token__Token.key_return)) {
		_t44 = from_js_string("key_return")
	} else if (eq(kind, bait__token__Token.key_struct)) {
		_t44 = from_js_string("key_struct")
	} else if (eq(kind, bait__token__Token.key_true)) {
		_t44 = from_js_string("key_true")
	} else if (eq(kind, bait__token__Token.key_type)) {
		_t44 = from_js_string("key_type")
	} else if (eq(kind, bait__token__Token.key_typeof)) {
		_t44 = from_js_string("key_typeof")
	}
	return _t44
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
function bait__errors__Message({ kind = 0, path = from_js_string(""), pos = new bait__token__Pos({}), title = from_js_string(""), msg = from_js_string(""), infos = new bait_Array({ data: [], length: 0 }) }) {
	this.kind = kind
	this.path = path
	this.pos = pos
	this.title = title
	this.msg = msg
	this.infos = infos
}
function bait__errors__Message_print(msg) {
	if (eq(msg.path.length, 0)) {
		bait__errors__generic_error(msg.msg)
		for (let _t46 = 0; _t46 < msg.infos.length; _t46++) {
			const info = Array_get(msg.infos, _t46)
			bait__errors__Message_print(info)
		}
		return 
	}
	bait__errors__message(msg.kind, msg.title, msg.path, msg.pos, msg.msg)
	for (let _t47 = 0; _t47 < msg.infos.length; _t47++) {
		const info = Array_get(msg.infos, _t47)
		bait__errors__Message_print(info)
	}
}

function Array_bait__errors__Message_print(msgs) {
	for (let _t48 = 0; _t48 < msgs.length; _t48++) {
		const msg = Array_get(msgs, _t48)
		bait__errors__Message_print(msg)
	}
}

function Array_bait__errors__Message_print_and_exit(msgs) {
	Array_bait__errors__Message_print(msgs)
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
	if (string_eq(os__getenv(from_js_string("BAITCOLOR")), from_js_string("0"))) {
		return s
	}
	return term__color__bold(s)
}

function bait__errors__format_title(k, title) {
	if (string_eq(os__getenv(from_js_string("BAITCOLOR")), from_js_string("0"))) {
		return title
	}
	let _t52 = undefined
	if (eq(k, bait__errors__Kind.info)) {
		_t52 = term__color__magenta(title)
	} else if (eq(k, bait__errors__Kind.warning)) {
		_t52 = term__color__yellow(title)
	} else if (eq(k, bait__errors__Kind.error)) {
		_t52 = term__color__red(title)
	}
	return _t52
}


const bait__preference__Backend = {
	js: 0,
	c: 1,
}
function bait__preference__Prefs({ command = from_js_string(""), out_name = from_js_string(""), args = new bait_Array({ data: [], length: 0 }), user_args = new bait_Array({ data: [], length: 0 }), build_options = new bait_Array({ data: [], length: 0 }), should_run = false, is_verbose = false, show_timings = false, backend = 0, is_test = false, is_script = false, is_library = false, keep_exe = false, cc = from_js_string("cc"), hide_warnings = false, warn_is_error = false }) {
	this.command = command
	this.out_name = out_name
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
	this.cc = cc
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
	for (let i = 0; i32(i < args.length); i = i32(i + 1)) {
		const arg = Array_get(args, i)
		if (string_eq(arg, from_js_string("-b")) || string_eq(arg, from_js_string("--backend"))) {
			i = i32(i + 1)
			p.backend = bait__preference__backend_from_string(Array_get(args, i))
			Array_push(p.build_options, arg)
			Array_push(p.build_options, Array_get(args, i))
		} else if (string_eq(arg, from_js_string("-o")) || string_eq(arg, from_js_string("--out"))) {
			i = i32(i + 1)
			p.out_name = Array_get(args, i)
			Array_push(p.build_options, arg)
			Array_push(p.build_options, p.out_name)
		} else if (string_eq(arg, from_js_string("-cc"))) {
			i = i32(i + 1)
			p.cc = Array_get(args, i)
			Array_push(p.build_options, arg)
			Array_push(p.build_options, p.out_name)
		} else if (string_eq(arg, from_js_string("-v")) || string_eq(arg, from_js_string("--verbose"))) {
			p.is_verbose = true
			Array_push(p.build_options, arg)
		} else if (string_eq(arg, from_js_string("-k")) || string_eq(arg, from_js_string("--keep"))) {
			p.keep_exe = true
		} else if (string_eq(arg, from_js_string("--library"))) {
			p.is_library = true
		} else if (string_eq(arg, from_js_string("-w"))) {
			p.hide_warnings = true
			Array_push(p.build_options, arg)
		} else if (string_eq(arg, from_js_string("-W"))) {
			p.warn_is_error = true
			Array_push(p.build_options, arg)
		} else if (string_eq(arg, from_js_string("--nocolor"))) {
			os__setenv(from_js_string("BAITCOLOR"), from_js_string("0"))
		} else if (string_eq(arg, from_js_string("--script"))) {
			p.is_script = true
		} else if (string_eq(arg, from_js_string("--timings"))) {
			p.show_timings = true
		} else if (string_eq(arg, from_js_string("--"))) {
			after_double_dash = true
		} else {
			if (eq(p.command.length, 0)) {
				p.command = arg
			} else if (after_double_dash) {
				Array_push(p.user_args, arg)
			} else {
				Array_push(p.args, arg)
			}
		}
	}
	Array_push_many(p.build_options, p.args)
	if (p.hide_warnings && p.warn_is_error) {
		bait__errors__generic_error(from_js_string("Cannot use -w and -W together."))
		exit(1)
	}
	if (string_eq(p.command, from_js_string("build"))) {
		p.command = Array_get(p.args, 0)
	}
	if (string_eq(p.command, from_js_string("run"))) {
		p.command = Array_get(p.args, 0)
		p.should_run = true
	}
	if (string_eq(p.command, from_js_string("test"))) {
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
	let _t63 = undefined
	if (string_eq(s, from_js_string("js"))) {
		_t63 = bait__preference__Backend.js
	} else if (string_eq(s, from_js_string("c"))) {
		_t63 = bait__preference__Backend.c
	} else {
		_t63 = panic(from_js_string(`Invalid backend: ${s.str}`))
	}
	return _t63
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
	if (eq(prefs.backend, bait__preference__Backend.js) && string_ends_with(file, from_js_string(".c.bt"))) {
		return false
	}
	if (eq(prefs.backend, bait__preference__Backend.c) && string_ends_with(file, from_js_string(".js.bt"))) {
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
function bait__ast__FunDecl({ is_pub = false, lang = 0, name = from_js_string(""), pkg = from_js_string(""), params = new bait_Array({ data: [], length: 0 }), return_type = 0, is_test = false, attrs = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}), is_method = false, noreturn = false, stmts = new bait_Array({ data: [], length: 0 }), generic_names = new bait_Array({ data: [], length: 0 }) }) {
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
	this.noreturn = noreturn
	this.stmts = stmts
	this.generic_names = generic_names
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
function bait__ast__GlobalDecl({ typ = 0, name = from_js_string(""), expr = undefined, pos = new bait__token__Pos({}) }) {
	this.typ = typ
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
function bait__ast__StructDecl({ lang = 0, pkg_prefix = from_js_string(""), name = from_js_string(""), typ = 0, fields = new bait_Array({ data: [], length: 0 }), generic_names = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.pkg_prefix = pkg_prefix
	this.name = name
	this.typ = typ
	this.fields = fields
	this.generic_names = generic_names
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
function bait__ast__CallExpr({ lang = 0, name = from_js_string(""), return_type = 0, left_type = 0, left = new bait__ast__EmptyExpr({}), concrete_types = new bait_Array({ data: [], length: 0 }), is_field = false, noreturn = false, args = new bait_Array({ data: [], length: 0 }), or_block = new bait__ast__OrBlock({}), is_method = false, pkg = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.name = name
	this.return_type = return_type
	this.left_type = left_type
	this.left = left
	this.concrete_types = concrete_types
	this.is_field = is_field
	this.noreturn = noreturn
	this.args = args
	this.or_block = or_block
	this.is_method = is_method
	this.pkg = pkg
	this.pos = pos
}
function bait__ast__CallArg({ typ = 0, is_mut = false, expr = undefined }) {
	this.typ = typ
	this.is_mut = is_mut
	this.expr = expr
}
const bait__ast__OrKind = {
	none: 0,
	block: 1,
	prop: 2,
}
function bait__ast__OrBlock({ kind = 0, stmts = new bait_Array({ data: [], length: 0 }) }) {
	this.kind = kind
	this.stmts = stmts
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
function bait__ast__IfMatch({ typ = bait__ast__VOID_TYPE, is_expr = false, ct_eval_branch = -1, is_comptime = false, is_match = false, has_else = false, branches = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.typ = typ
	this.is_expr = is_expr
	this.ct_eval_branch = ct_eval_branch
	this.is_comptime = is_comptime
	this.is_match = is_match
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
function bait__ast__InfixExpr({ left_type = 0, right_type = 0, op = 0, right = undefined, is_match = false, left = undefined, pos = new bait__token__Pos({}) }) {
	this.left_type = left_type
	this.right_type = right_type
	this.op = op
	this.right = right
	this.is_match = is_match
	this.left = left
	this.pos = pos
}
function bait__ast__IntegerLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
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
function bait__ast__StructInit({ typ = 0, pos = new bait__token__Pos({}), name = from_js_string(""), fields = new bait_Array({ data: [], length: 0 }), concrete_types = new bait_Array({ data: [], length: 0 }) }) {
	this.typ = typ
	this.pos = pos
	this.name = name
	this.fields = fields
	this.concrete_types = concrete_types
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
function bait__ast__Void({ }) {
}
function bait__ast__EmptyExpr({ pos = new bait__token__Pos({}) }) {
	this.pos = pos
}
function bait__ast__empty_expr() {
	return new bait__ast__EmptyExpr({})
}

function bait__ast__EmptyStmt({ pos = new bait__token__Pos({}) }) {
	this.pos = pos
}
function bait__ast__Import({ name = from_js_string(""), alias = from_js_string(""), lang = 0, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.alias = alias
	this.lang = lang
	this.pos = pos
}
function bait__ast__File({ infos = new bait_Array({ data: [], length: 0 }), warnings = new bait_Array({ data: [], length: 0 }), errors = new bait_Array({ data: [], length: 0 }), generic_funs = new bait_Array({ data: [], length: 0 }), path = from_js_string(""), pkg_name = from_js_string(""), imports = new bait_Array({ data: [], length: 0 }), stmts = new bait_Array({ data: [], length: 0 }) }) {
	this.infos = infos
	this.warnings = warnings
	this.errors = errors
	this.generic_funs = generic_funs
	this.path = path
	this.pkg_name = pkg_name
	this.imports = imports
	this.stmts = stmts
}
function bait__ast__FunDecl_is_main(fn) {
	return !fn.is_method && string_eq(fn.name, from_js_string("main"))
}


function bait__ast__Attribute({ name = from_js_string(""), value = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.value = value
	this.pos = pos
}
function Array_bait__ast__Attribute_has(attrs, name) {
	return i32(Array_bait__ast__Attribute_find_attr(attrs, name).name.length > 0)
}

function Array_bait__ast__Attribute_find_attr(attrs, name) {
	for (let _t68 = 0; _t68 < attrs.length; _t68++) {
		const attr = Array_get(attrs, _t68)
		if (string_eq(attr.name, name)) {
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
	let _t70 = undefined
	if (eq(l, bait__ast__Language.bait)) {
		_t70 = s
	} else if (eq(l, bait__ast__Language.c)) {
		_t70 = string_add(from_js_string("C."), s)
	} else if (eq(l, bait__ast__Language.js)) {
		_t70 = string_add(from_js_string("JS."), s)
	}
	return _t70
}

function bait__ast__prefix_to_lang(p) {
	let _t71 = undefined
	if (string_eq(p, from_js_string("C"))) {
		_t71 = bait__ast__Language.c
	} else if (string_eq(p, from_js_string("JS"))) {
		_t71 = bait__ast__Language.js
	} else {
		_t71 = bait__ast__Language.bait
	}
	return _t71
}


function bait__ast__Expr_repr(e) {
	let _t72 = undefined
	if (e instanceof bait__ast__AnonFun) {
		_t72 = from_js_string("anon_fun")
	} else if (e instanceof bait__ast__ArrayInit) {
		_t72 = from_js_string("[]XX")
	} else if (e instanceof bait__ast__AsCast) {
		_t72 = string_add(bait__ast__Expr_repr(e.expr), from_js_string(" as XX"))
	} else if (e instanceof bait__ast__BoolLiteral) {
		_t72 = bait__ast__BoolLiteral_str(e, 0)
	} else if (e instanceof bait__ast__CallExpr) {
		_t72 = string_add(e.name, from_js_string("()"))
	} else if (e instanceof bait__ast__CharLiteral) {
		_t72 = e.val
	} else if (e instanceof bait__ast__ComptimeVar) {
		_t72 = e.name
	} else if (e instanceof bait__ast__EnumVal) {
		_t72 = e.val
	} else if (e instanceof bait__ast__FloatLiteral) {
		_t72 = e.val
	} else if (e instanceof bait__ast__HashExpr) {
		_t72 = from_js_string("#XX")
	} else if (e instanceof bait__ast__Ident) {
		_t72 = e.name
	} else if (e instanceof bait__ast__IfMatch) {
		_t72 = from_js_string("if/match")
	} else if (e instanceof bait__ast__IndexExpr) {
		_t72 = string_add(string_add(string_add(bait__ast__Expr_repr(e.left), from_js_string("[")), bait__ast__Expr_repr(e.index)), from_js_string("]"))
	} else if (e instanceof bait__ast__InfixExpr) {
		_t72 = string_add(string_add(string_add(string_add(bait__ast__Expr_repr(e.left), from_js_string(" ")), bait__token__Token_js_repr(e.op)), from_js_string(" ")), bait__ast__Expr_repr(e.right))
	} else if (e instanceof bait__ast__IntegerLiteral) {
		_t72 = e.val
	} else if (e instanceof bait__ast__MapInit) {
		_t72 = from_js_string("map[xx]yy")
	} else if (e instanceof bait__ast__ParExpr) {
		_t72 = string_add(string_add(from_js_string("("), bait__ast__Expr_repr(e.expr)), from_js_string(")"))
	} else if (e instanceof bait__ast__PrefixExpr) {
		_t72 = string_add(bait__token__Token_js_repr(e.op), bait__ast__Expr_repr(e.right))
	} else if (e instanceof bait__ast__SelectorExpr) {
		_t72 = string_add(string_add(bait__ast__Expr_repr(e.expr), from_js_string(".")), e.field_name)
	} else if (e instanceof bait__ast__StringLiteral) {
		_t72 = e.val
	} else if (e instanceof bait__ast__StringInterLiteral) {
		_t72 = from_js_string("string interpolation")
	} else if (e instanceof bait__ast__StructInit) {
		_t72 = string_add(e.name, from_js_string("{..}"))
	} else if (e instanceof bait__ast__TypeOf) {
		_t72 = string_add(from_js_string("typeof "), bait__ast__Expr_repr(e.expr))
	} else if (e instanceof bait__ast__Void) {
		_t72 = from_js_string("void")
	} else if (e instanceof bait__ast__EmptyExpr) {
		_t72 = from_js_string("EmptyExpr")
	}
	return _t72
}

function bait__ast__FunDecl_key(fn) {
	if (fn.is_method) {
		return from_js_string(`${i32_str(Array_get(fn.params, 0).typ).str}.${fn.name.str}`)
	}
	return fn.name
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
	let obj = bait__ast__Scope_get(s, name)
	map_set(s.objects, name, new bait__ast__ScopeObject({ typ: typ, kind: obj.kind, is_pub: obj.is_pub, is_mut: obj.is_mut, pkg: obj.pkg }))
}

function bait__ast__Scope_is_known(s, name) {
	const obj = bait__ast__Scope_get(s, name)
	return !eq(obj.kind, bait__ast__ObjectKind.unknown)
}


function bait__ast__Table({ global_scope = new bait__ast__Scope({}), fun_decls = new map({ data: new Map([]), length: 0 }), type_idxs = new map({ data: new Map([]), length: 0 }), type_symbols = new bait_Array({ data: [], length: 0 }), redefined_types = new bait_Array({ data: [], length: 0 }), needed_equality_funs = new bait_Array({ data: [], length: 0 }), needed_str_funs = new bait_Array({ data: [], length: 0 }), generic_fun_types = new map({ data: new Map([]), length: 0 }) }) {
	this.global_scope = global_scope
	this.fun_decls = fun_decls
	this.type_idxs = type_idxs
	this.type_symbols = type_symbols
	this.redefined_types = redefined_types
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

function bait__ast__Table_type_exists(t, name) {
	const idx = bait__ast__Table_get_idx(t, name)
	if (eq(idx, 0)) {
		return false
	}
	const sym = bait__ast__Table_get_sym(t, idx)
	return !eq(sym.kind, bait__ast__TypeKind.placeholder)
}

function bait__ast__Table_unwrap_result(t, typ) {
	const sym = bait__ast__Table_get_sym(t, typ)
	let _t78 = undefined
	if (eq(sym.kind, bait__ast__TypeKind.result)) {
		_t78 = sym.parent
	} else {
		_t78 = typ
	}
	return _t78
}

function bait__ast__Table_get_final_sym(t, sym) {
	let s = sym
	while (eq(s.kind, bait__ast__TypeKind.alias_type)) {
		s = bait__ast__Table_get_sym(t, s.parent)
	}
	return s
}

function bait__ast__Table_unwrap_generic(t, sym) {
	if (eq(sym.kind, bait__ast__TypeKind.generic_inst)) {
		return bait__ast__Table_get_sym(t, sym.parent)
	}
	return sym
}

function bait__ast__Table_register_concrete(t, key, concrete) {
	if (Array_contains_Array_bait__ast__Type(map_get_set(t.generic_fun_types, key, new bait_Array({ data: [], length: 0 })), concrete)) {
		return false
	}
	Array_push(map_get_set(t.generic_fun_types, key, new bait_Array({ data: [], length: 0 })), concrete)
	return true
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
		if (eq(cur_sym.kind, bait__ast__TypeKind.result)) {
			return idx
		}
		if (idx < bait__ast__USER_TYPES_SPACE) {
			let new_sym = sym
			new_sym.is_pub = true
			new_sym.kind = cur_sym.kind
			new_sym.methods = cur_sym.methods
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
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.array, name: name, pkg: elem_sym.pkg, parent: bait__ast__ARRAY_TYPE, info: new bait__ast__ArrayInfo({ elem_type: elem_type }) }))
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

function bait__ast__Table_find_or_register_fun(t, param_types, return_type, alias) {
	const name = string_add(from_js_string("fun_"), bait__ast__Table_fun_type_signature(t, param_types, return_type))
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.fun_, name: name, info: new bait__ast__FunInfo({ is_alias: alias, param_types: param_types, return_type: return_type }) }))
}

function bait__ast__Table_fun_type_signature(t, param_types, return_type) {
	let sig = from_js_string("")
	for (let _t88 = 0; _t88 < param_types.length; _t88++) {
		const param = Array_get(param_types, _t88)
		sig = string_add(sig, string_add(bait__ast__Table_get_sym(t, param).name, from_js_string("_")))
	}
	sig = string_add(sig, string_add(from_js_string("_"), bait__ast__Table_get_sym(t, return_type).name))
	return sig
}

function bait__ast__Table_find_type_or_add_placeholder(t, name, pkg) {
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.placeholder, name: name, pkg: pkg }))
}

function bait__ast__Table_get_method(t, sym, name) {
	let s = sym
	while (true) {
		for (let _t90 = 0; _t90 < s.methods.length; _t90++) {
			const m = Array_get(s.methods, _t90)
			if (string_eq(m.name, name)) {
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
function bait__ast__FunInfo({ is_alias = false, param_types = new bait_Array({ data: [], length: 0 }), return_type = 0 }) {
	this.is_alias = is_alias
	this.param_types = param_types
	this.return_type = return_type
}
function bait__ast__GenericInst({ concrete_types = new bait_Array({ data: [], length: 0 }) }) {
	this.concrete_types = concrete_types
}
function bait__ast__MapInfo({ key_type = 0, val_type = 0 }) {
	this.key_type = key_type
	this.val_type = val_type
}
function bait__ast__StructInfo({ fields = new bait_Array({ data: [], length: 0 }), generic_names = new bait_Array({ data: [], length: 0 }) }) {
	this.fields = fields
	this.generic_names = generic_names
}
function bait__ast__SumTypeInfo({ variants = new bait_Array({ data: [], length: 0 }) }) {
	this.variants = variants
}
function bait__ast__EmptyInfo({ }) {
}
function bait__ast__FunInfo_to_params(info) {
	let p = new bait_Array({ data: [], length: 0 })
	for (let _t93 = 0; _t93 < info.param_types.length; _t93++) {
		const typ = Array_get(info.param_types, _t93)
		Array_push(p, new bait__ast__Param({ typ: typ }))
	}
	return p
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
const bait__ast__USER_TYPES_SPACE = 17
function bait__ast__new_type(t) {
	return t
}

function bait__ast__Type_idx(t) {
	return (t & 0xffff)
}

function bait__ast__Type_set_nr_amp(t, n) {
	return bait__ast__new_type((t & 0xff00ffff | i32(n << 16)))
}

function bait__ast__Type_get_nr_amp(t) {
	return (t >> 16 & 0xff)
}

function bait__ast__Type_is_int(t) {
	return t >= bait__ast__I8_TYPE && t <= bait__ast__U64_TYPE
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
	generic_inst: 13,
	result: 14,
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
	if (eq(sym.kind, bait__ast__TypeKind.generic_inst)) {
		return bait__ast__TypeSymbol_find_field(bait__ast__Table_unwrap_generic(t, sym), name, t)
	}
	if (sym.info instanceof bait__ast__StructInfo) {
		const info = sym.info
		for (let _t96 = 0; _t96 < info.fields.length; _t96++) {
			const f = Array_get(info.fields, _t96)
			if (string_eq(f.name, name)) {
				return f
			}
		}
	}
	if (Array_contains_bait__ast__Type(bait__ast__BUILTIN_STRUCT_TYPES, sym.parent)) {
		const parent_sym = bait__ast__Table_get_sym(t, sym.parent)
		return bait__ast__TypeSymbol_find_field(parent_sym, name, t)
	}
	return new bait__ast__StructField({})
}

function bait__ast__TypeSymbol_has_method(sym, name) {
	for (let _t99 = 0; _t99 < sym.methods.length; _t99++) {
		const m = Array_get(sym.methods, _t99)
		if (string_eq(m.name, name)) {
			return true
		}
	}
	return false
}

function bait__ast__Table_register_builtins(t) {
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("_"), kind: bait__ast__TypeKind.placeholder, is_pub: true }))
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
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("Map"), kind: bait__ast__TypeKind.map }))
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: from_js_string("any") }))
}

function bait__ast__Table_register_num(t, name) {
	bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ name: name, kind: bait__ast__TypeKind.number, is_pub: true }))
}


function bait__lexer__Lexer_comment_or_next(l) {
	if (eq(l.comment_mode, bait__lexer__CommentMode.discard)) {
		bait__lexer__Lexer_skip_comments(l)
		return bait__lexer__Lexer_next(l)
	}
	const start = i32(l.pos + 1)
	bait__lexer__Lexer_skip_line(l)
	l.val = string_trim_right(string_substr(l.text, start, i32(l.pos - 1)), from_js_string("\r"))
	return bait__token__Token.comment
}

function bait__lexer__Lexer_skip_comments(l) {
	while (true) {
		bait__lexer__Lexer_skip_line(l)
		bait__lexer__Lexer_skip_whitespace(l)
		if (!eq(string_get(l.text, l.pos), u8("/")) || !eq(string_get(l.text, i32(l.pos + 1)), u8("/"))) {
			break
		}
	}
}

function bait__lexer__Lexer_skip_line(l) {
	while (i32(l.pos < l.text.length) && !eq(string_get(l.text, l.pos), u8("\n"))) {
		l.pos = i32(l.pos + 1)
	}
	l.pos = i32(l.pos + 1)
	bait__lexer__Lexer_inc_line(l)
}


const bait__lexer__CommentMode = {
	discard: 0,
	store: 1,
}
function bait__lexer__Lexer({ comment_mode = 0, text = from_js_string(""), insert_semi = false, val = from_js_string(""), line_starts = new bait_Array({ data: [], length: 0 }), cur_line = 0, start = 0, pos = 0, is_str_interpol = false, is_str_dollar = false, str_quote = 0 }) {
	this.comment_mode = comment_mode
	this.text = text
	this.insert_semi = insert_semi
	this.val = val
	this.line_starts = line_starts
	this.cur_line = cur_line
	this.start = start
	this.pos = pos
	this.is_str_interpol = is_str_interpol
	this.is_str_dollar = is_str_dollar
	this.str_quote = str_quote
}
function bait__lexer__Lexer_init(l, text, comment_mode) {
	l.comment_mode = comment_mode
	l.text = text
	l.line_starts = new bait_Array({ data: [-1], length: 1 })
	l.cur_line = 0
	l.pos = 0
}

function bait__lexer__Lexer_offset(l) {
	return l.pos
}

function bait__lexer__Lexer_val(l) {
	return l.val
}

function bait__lexer__Lexer_pos(l) {
	return new bait__token__Pos({ line: i32(l.cur_line + 1), col: i32(l.start - Array_get(l.line_starts, l.cur_line)) })
}

function bait__lexer__Lexer_next(l) {
	bait__lexer__Lexer_skip_whitespace(l)
	l.start = l.pos
	if (eq(l.pos, l.text.length)) {
		return bait__token__Token.eof
	}
	const c = string_get(l.text, l.pos)
	l.pos = i32(l.pos + 1)
	l.insert_semi = false
	if (bait__lexer__is_name_start_char(c)) {
		return bait__lexer__Lexer_name_or_key(l)
	}
	if (u8_is_digit(c)) {
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
		l.pos = i32(l.pos + 1)
		bait__lexer__Lexer_name_val(l)
		return bait__token__Token.hash
	}
	if (eq(c, u8("@"))) {
		l.pos = i32(l.pos + 1)
		bait__lexer__Lexer_name_val(l)
		return bait__token__Token.attr
	}
	if (eq(c, u8("/")) && eq(string_get(l.text, l.pos), u8("/"))) {
		return bait__lexer__Lexer_comment_or_next(l)
	}
	return bait__lexer__Lexer_simple_token(l, c)
}

function bait__lexer__Lexer_simple_token(l, c) {
	l.val = from_js_string("")
	if (eq(c, u8("\n"))) {
		bait__lexer__Lexer_inc_line(l)
		return bait__token__Token.semicolon
	} else if (eq(c, u8("."))) {
		return bait__token__Token.dot
	} else if (eq(c, u8(","))) {
		return bait__token__Token.comma
	} else if (eq(c, u8("+"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.plus_assign
		}
		return bait__token__Token.plus
	} else if (eq(c, u8("-"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.minus_assign
		}
		return bait__token__Token.minus
	} else if (eq(c, u8("*"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.mul_assign
		}
		return bait__token__Token.mul
	} else if (eq(c, u8("/"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.div_assign
		}
		return bait__token__Token.div
	} else if (eq(c, u8("%"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.mod_assign
		}
		return bait__token__Token.mod
	} else if (eq(c, u8("="))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.eq
		}
		return bait__token__Token.assign
	} else if (eq(c, u8(":"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.decl_assign
		}
		return bait__token__Token.colon
	} else if (eq(c, u8("!"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.ne
		}
		return bait__token__Token.excl
	} else if (eq(c, u8("<"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.le
		}
		if (eq(string_get(l.text, l.pos), u8("<"))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.lshift
		}
		return bait__token__Token.lt
	} else if (eq(c, u8(">"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.ge
		}
		if (eq(string_get(l.text, l.pos), u8(">"))) {
			l.pos = i32(l.pos + 1)
			return bait__token__Token.rshift
		}
		return bait__token__Token.gt
	} else if (eq(c, u8(";"))) {
		return bait__token__Token.semicolon
	} else if (eq(c, u8("("))) {
		return bait__token__Token.lpar
	} else if (eq(c, u8(")"))) {
		return bait__token__Token.rpar
	} else if (eq(c, u8("["))) {
		return bait__token__Token.lsqr
	} else if (eq(c, u8("]"))) {
		l.insert_semi = true
		return bait__token__Token.rsqr
	} else if (eq(c, u8("{"))) {
		return bait__token__Token.lcur
	} else if (eq(c, u8("}"))) {
		return bait__token__Token.rcur
	} else if (eq(c, u8("~"))) {
		return bait__token__Token.tilde
	} else if (eq(c, u8("&"))) {
		return bait__token__Token.amp
	} else if (eq(c, u8("|"))) {
		return bait__token__Token.pipe
	} else if (eq(c, u8("^"))) {
		return bait__token__Token.caret
	} else if (eq(c, u8("$"))) {
		if (l.is_str_dollar) {
			l.is_str_dollar = false
			return bait__token__Token.str_dollar
		}
		return bait__token__Token.dollar
	} else {
		return bait__lexer__Lexer_unexpected_char(l, c)
	}
}

function bait__lexer__Lexer_name_val(l) {
	l.start = i32(l.pos - 1)
	while (i32(l.pos < l.text.length) && bait__lexer__is_name_char(string_get(l.text, l.pos))) {
		l.pos = i32(l.pos + 1)
	}
	l.val = string_substr(l.text, l.start, l.pos)
}

function bait__lexer__Lexer_name_or_key(l) {
	bait__lexer__Lexer_name_val(l)
	const tok = bait__token__kind_from_string(l.val)
	if (eq(tok, bait__token__Token.key_return) || eq(tok, bait__token__Token.key_break) || eq(tok, bait__token__Token.key_continue)) {
		l.insert_semi = true
	}
	return tok
}

function bait__lexer__Lexer_string_val(l, quote) {
	const is_foreign = eq(string_get(l.text, i32(l.pos - 2)), u8("."))
	l.start = l.pos
	while (i32(l.pos < l.text.length)) {
		const c = string_get(l.text, l.pos)
		l.pos = i32(l.pos + 1)
		if (eq(c, quote)) {
			l.val = string_substr(l.text, l.start, i32(l.pos - 1))
			return bait__token__Token.string
		}
		if (eq(c, u8("\n"))) {
			bait__lexer__Lexer_save_line(l)
		} else if (eq(c, u8("\\"))) {
			l.pos = i32(l.pos + 1)
		} else if (!is_foreign && eq(c, u8("$")) && eq(string_get(l.text, l.pos), u8("{"))) {
			l.is_str_interpol = true
			l.is_str_dollar = true
			l.str_quote = quote
			l.pos = i32(l.pos - 1)
			l.val = string_substr(l.text, l.start, l.pos)
			return bait__token__Token.string
		}
	}
	l.val = from_js_string("unclosed string literal [L0010]")
	return bait__token__Token.error
}

function bait__lexer__Lexer_char_val(l) {
	l.start = l.pos
	while (i32(l.pos < l.text.length)) {
		const c = string_get(l.text, l.pos)
		l.pos = i32(l.pos + 1)
		if (eq(c, u8("\`"))) {
			break
		}
		if (eq(c, u8("\\"))) {
			l.pos = i32(l.pos + 1)
		}
	}
	l.val = string_substr(l.text, l.start, i32(l.pos - 1))
	return bait__token__Token.char
}

function bait__lexer__Lexer_unexpected_char(l, c) {
	l.val = from_js_string(`unexpected char ${u8_ascii(c).str} [L0001]`)
	return bait__token__Token.error
}

function bait__lexer__Lexer_inc_line(l) {
	bait__lexer__Lexer_save_line(l)
	l.cur_line = i32(l.line_starts.length - 1)
}

function bait__lexer__Lexer_save_line(l) {
	Array_push(l.line_starts, i32(l.pos - 1))
}

function bait__lexer__Lexer_skip_whitespace(l) {
	while (i32(l.pos < l.text.length)) {
		const c = string_get(l.text, l.pos)
		if (eq(c, u8("\n"))) {
			if (l.insert_semi) {
				return 
			}
			l.pos = i32(l.pos + 1)
			bait__lexer__Lexer_inc_line(l)
		} else if (eq(c, u8(" ")) || eq(c, u8("\t")) || eq(c, u8("\r"))) {
			l.pos = i32(l.pos + 1)
		} else {
			break
		}
	}
}

function bait__lexer__is_name_start_char(c) {
	return u8_is_upper(c) || u8_is_lower(c) || eq(c, u8("_"))
}

function bait__lexer__is_name_char(c) {
	return bait__lexer__is_name_start_char(c) || u8_is_digit(c)
}


function bait__lexer__Lexer_number(l) {
	l.start = i32(l.pos - 1)
	let is_dec = false
	let c = string_get(l.text, l.pos)
	if (eq(string_get(l.text, l.start), u8("0"))) {
		if (eq(c, u8("b"))) {
			bait__lexer__Lexer_advance_bin_number(l)
		} else if (eq(c, u8("o"))) {
			bait__lexer__Lexer_advance_oct_number(l)
		} else if (eq(c, u8("x"))) {
			bait__lexer__Lexer_advance_hex_number(l)
		} else if (u8_is_digit(c)) {
			l.val = from_js_string("leading zeros in decimal numbers are not allowed [L0020]")
			return bait__token__Token.error
		} else {
			is_dec = true
		}
	} else {
		bait__lexer__Lexer_advance_dec_number(l)
		is_dec = true
	}
	if (!is_dec && eq(i32(l.pos - l.start), 2)) {
		const prefix = string_substr(l.text, l.start, l.pos)
		l.val = from_js_string(`missing number part after \`${prefix.str}\` [L0021]`)
		return bait__token__Token.error
	}
	c = string_get(l.text, l.pos)
	if (eq(c, u8("."))) {
		if (!is_dec) {
			l.val = from_js_string("floats must be decimal numbers (base 10) [L0022]")
			return bait__token__Token.error
		}
		l.pos = i32(l.pos + 1)
		bait__lexer__Lexer_advance_dec_number(l)
		l.val = string_substr(l.text, l.start, l.pos)
		return bait__token__Token.float
	}
	if (bait__lexer__is_name_char(c)) {
		l.val = from_js_string(`invalid suffix ${u8_str(c).str} on number [L0023]`)
		return bait__token__Token.error
	}
	l.val = string_substr(l.text, l.start, l.pos)
	return bait__token__Token.integer
}

function bait__lexer__Lexer_advance_dec_number(l) {
	while (i32(l.pos < l.text.length) && u8_is_digit(string_get(l.text, l.pos))) {
		l.pos = i32(l.pos + 1)
	}
}

function bait__lexer__Lexer_advance_bin_number(l) {
	l.pos = i32(l.pos + 1)
	while (i32(l.pos < l.text.length) && u8_is_bin_digit(string_get(l.text, l.pos))) {
		l.pos = i32(l.pos + 1)
	}
}

function bait__lexer__Lexer_advance_oct_number(l) {
	l.pos = i32(l.pos + 1)
	while (i32(l.pos < l.text.length) && u8_is_oct_digit(string_get(l.text, l.pos))) {
		l.pos = i32(l.pos + 1)
	}
}

function bait__lexer__Lexer_advance_hex_number(l) {
	l.pos = i32(l.pos + 1)
	while (i32(l.pos < l.text.length) && u8_is_hex_digit(string_get(l.text, l.pos))) {
		l.pos = i32(l.pos + 1)
	}
}


const hash__crc32__IEEE = BigInt(0xedb88320n)
const hash__crc32__CASTAGNOLI = BigInt(0x82f63b78n)
const hash__crc32__KOOPMAN = BigInt(0xeb31d82en)
function hash__crc32__CrcTable({ table = new bait_Array({ data: [], length: 0 }) }) {
	this.table = table
}
function hash__crc32__generate_table(poly) {
	let c = new hash__crc32__CrcTable({ table: new bait_Array({ data: [], length: 0 }) })
	for (let i = 0; i32(i < 256); i = i32(i + 1)) {
		let crc = BigInt(i)
		for (let j = 0; i32(j < 8); j = i32(j + 1)) {
			if (eq((u32(crc & BigInt(1n))), BigInt(1n))) {
				crc = u32((u32(crc >> BigInt(1n))) ^ BigInt(poly))
			} else {
				crc = u32(crc >> BigInt(1n))
			}
		}
		Array_push(c.table, crc)
	}
	return c
}

function hash__crc32__CrcTable_checksum(c, data) {
	let crc = MAX_U32
	for (let _t140 = 0; _t140 < data.length; _t140++) {
		const byte = Array_get(data, _t140)
		crc = u32(Array_get(c.table, u8(Number(crc) ^ byte)) ^ BigInt((u32(crc >> BigInt(8n)))))
	}
	return u32(~crc & BigInt(MAX_U32))
}

function hash__crc32__checksum(data) {
	const c = hash__crc32__generate_table(hash__crc32__IEEE)
	return hash__crc32__CrcTable_checksum(c, data)
}


function bait__parser__Parser_expr(p, precedence) {
	let _t141 = bait__parser__Parser_single_expr(p)
	if (_t141.is_error) {
		return _t141
	}
	let node = _t141.data
	while (precedence < bait__token__Token_precedence(p.tok)) {
		if (eq(p.tok, bait__token__Token.dot)) {
			let _t143 = bait__parser__Parser_dot_expr(p, node)
			if (_t143.is_error) {
				return _t143
			}
			node = _t143.data
		} else if (eq(p.tok, bait__token__Token.lsqr)) {
			let _t144 = bait__parser__Parser_index_expr(p, node)
			if (_t144.is_error) {
				return _t144
			}
			node = _t144.data
		} else if (eq(p.tok, bait__token__Token.key_as)) {
			let _t145 = bait__parser__Parser_as_cast(p, node)
			if (_t145.is_error) {
				return _t145
			}
			node = _t145.data
		} else if (bait__token__Token_is_infix(p.tok)) {
			let _t146 = bait__parser__Parser_infix_expr(p, node)
			if (_t146.is_error) {
				return _t146
			}
			node = _t146.data
		} else {
			panic(from_js_string(`precedence not implemented: ${bait__token__Token_str(p.tok).str} at ${bait__token__Pos_str(p.pos).str}`))
		}
	}
	return new Result({ data: node })
}

function bait__parser__Parser_single_expr(p) {
	if (eq(p.tok, bait__token__Token.hash)) {
		let _t148 = bait__parser__Parser_hash_expr(p)
		if (_t148.is_error) {
			return _t148
		}
		return new Result({ data: _t148.data })
	} else if (eq(p.tok, bait__token__Token.char)) {
		return new Result({ data: bait__parser__Parser_char_literal(p) })
	} else if (eq(p.tok, bait__token__Token.dollar)) {
		let _t149 = bait__parser__Parser_comptime_expr(p)
		if (_t149.is_error) {
			return _t149
		}
		return new Result({ data: _t149.data })
	} else if (eq(p.tok, bait__token__Token.dot)) {
		let _t150 = bait__parser__Parser_enum_val(p, false)
		if (_t150.is_error) {
			return _t150
		}
		return new Result({ data: _t150.data })
	} else if (eq(p.tok, bait__token__Token.float)) {
		return new Result({ data: bait__parser__Parser_float_literal(p) })
	} else if (eq(p.tok, bait__token__Token.integer)) {
		return new Result({ data: bait__parser__Parser_integer_literal(p) })
	} else if (eq(p.tok, bait__token__Token.lsqr)) {
		let _t151 = bait__parser__Parser_array_init(p)
		if (_t151.is_error) {
			return _t151
		}
		return new Result({ data: _t151.data })
	} else if (eq(p.tok, bait__token__Token.lpar)) {
		let _t152 = bait__parser__Parser_par_expr(p)
		if (_t152.is_error) {
			return _t152
		}
		return new Result({ data: _t152.data })
	} else if (eq(p.tok, bait__token__Token.name)) {
		let _t153 = bait__parser__Parser_name_expr(p, bait__ast__Language.bait)
		if (_t153.is_error) {
			return _t153
		}
		return new Result({ data: _t153.data })
	} else if (eq(p.tok, bait__token__Token.string)) {
		let _t154 = bait__parser__Parser_string_literal(p, bait__ast__Language.bait)
		if (_t154.is_error) {
			return _t154
		}
		return new Result({ data: _t154.data })
	} else if (eq(p.tok, bait__token__Token.key_fun)) {
		let _t155 = bait__parser__Parser_anon_fun(p)
		if (_t155.is_error) {
			return _t155
		}
		return new Result({ data: _t155.data })
	} else if (eq(p.tok, bait__token__Token.key_false) || eq(p.tok, bait__token__Token.key_true)) {
		return new Result({ data: bait__parser__Parser_bool_literal(p) })
	} else if (eq(p.tok, bait__token__Token.key_if)) {
		let _t156 = bait__parser__Parser_if_match(p, true)
		if (_t156.is_error) {
			return _t156
		}
		return new Result({ data: _t156.data })
	} else if (eq(p.tok, bait__token__Token.key_match)) {
		let _t157 = bait__parser__Parser_match_as_if_expr(p, true)
		if (_t157.is_error) {
			return _t157
		}
		return new Result({ data: _t157.data })
	} else if (eq(p.tok, bait__token__Token.key_mut)) {
		let _t158 = bait__parser__Parser_ident(p, bait__ast__Language.bait)
		if (_t158.is_error) {
			return _t158
		}
		return new Result({ data: _t158.data })
	} else if (eq(p.tok, bait__token__Token.key_not) || eq(p.tok, bait__token__Token.minus) || eq(p.tok, bait__token__Token.mul) || eq(p.tok, bait__token__Token.tilde)) {
		let _t159 = bait__parser__Parser_prefix_expr(p)
		if (_t159.is_error) {
			return _t159
		}
		return new Result({ data: _t159.data })
	} else if (eq(p.tok, bait__token__Token.key_typeof)) {
		let _t160 = bait__parser__Parser_typeof_expr(p)
		if (_t160.is_error) {
			return _t160
		}
		return new Result({ data: _t160.data })
	} else if (eq(p.tok, bait__token__Token.error)) {
		let _t161 = bait__parser__Parser_error(p, p.val)
		if (_t161.is_error) {
			return _t161
		}
_t161.data
		return new Result({ data: new bait__ast__EmptyExpr({}) })
	} else {
		let msg = from_js_string(`invalid expression: kind = ${bait__token__Token_str(p.tok).str}`)
		if (i32(p.val.length > 0)) {
			msg = string_add(msg, from_js_string(`, val = ${p.val.str}`))
		}
		let _t163 = bait__parser__Parser_error(p, msg)
		if (_t163.is_error) {
			return _t163
		}
_t163.data
		return new Result({ data: new bait__ast__EmptyExpr({}) })
	}
}

function bait__parser__Parser_expr_list(p) {
	let exprs = new bait_Array({ data: [], length: 0 })
	while (true) {
		let _t164 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t164.is_error) {
			return _t164
		}
		Array_push(exprs, _t164.data)
		if (!eq(p.tok, bait__token__Token.comma)) {
			break
		}
		bait__parser__Parser_next(p)
	}
	return new Result({ data: exprs })
}

function bait__parser__Parser_array_init(p) {
	const pos = p.pos
	let _t166 = bait__parser__Parser_check(p, bait__token__Token.lsqr)
	if (_t166.is_error) {
		return _t166
	}
_t166.data
	if (eq(p.tok, bait__token__Token.rsqr)) {
		bait__parser__Parser_next(p)
		let _t168 = bait__parser__Parser_parse_type(p)
		if (_t168.is_error) {
			return _t168
		}
		const elem_type = _t168.data
		const typ = bait__ast__Table_find_or_register_array(p.table, elem_type)
		let length_expr = new bait__ast__EmptyExpr({})
		let cap_expr = new bait__ast__EmptyExpr({})
		if (eq(p.tok, bait__token__Token.lcur)) {
			bait__parser__Parser_next(p)
			while (!eq(p.tok, bait__token__Token.rcur)) {
				let _t170 = bait__parser__Parser_check_name(p)
				if (_t170.is_error) {
					return _t170
				}
				const key = _t170.data
				let _t171 = bait__parser__Parser_check(p, bait__token__Token.assign)
				if (_t171.is_error) {
					return _t171
				}
_t171.data
				let _t172 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
				if (_t172.is_error) {
					return _t172
				}
				const expr = _t172.data
				if (string_eq(key, from_js_string("length"))) {
					length_expr = expr
				} else if (string_eq(key, from_js_string("cap"))) {
					cap_expr = expr
				} else {
					let _t174 = bait__parser__Parser_error(p, from_js_string(`invalid array init field: ${key.str}`))
					if (_t174.is_error) {
						return _t174
					}
_t174.data
				}
			}
			let _t175 = bait__parser__Parser_check(p, bait__token__Token.rcur)
			if (_t175.is_error) {
				return _t175
			}
_t175.data
		}
		return new Result({ data: new bait__ast__ArrayInit({ typ: typ, elem_type: elem_type, length_expr: length_expr, cap_expr: cap_expr, pos: pos }) })
	}
	let exprs = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rsqr)) {
		let _t176 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t176.is_error) {
			return _t176
		}
		Array_push(exprs, _t176.data)
		if (eq(p.tok, bait__token__Token.comma)) {
			bait__parser__Parser_next(p)
		}
	}
	let _t178 = bait__parser__Parser_check(p, bait__token__Token.rsqr)
	if (_t178.is_error) {
		return _t178
	}
_t178.data
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new Result({ data: new bait__ast__ArrayInit({ exprs: exprs, pos: pos }) })
}

function bait__parser__Parser_as_cast(p, left) {
	const pos = p.pos
	let _t179 = bait__parser__Parser_check(p, bait__token__Token.key_as)
	if (_t179.is_error) {
		return _t179
	}
_t179.data
	let _t180 = bait__parser__Parser_parse_type(p)
	if (_t180.is_error) {
		return _t180
	}
	const bait_target = _t180.data
	return new Result({ data: new bait__ast__AsCast({ target: bait_target, expr: left, pos: pos }) })
}

function bait__parser__Parser_bool_literal(p) {
	const pos = p.pos
	const val = eq(p.tok, bait__token__Token.key_true)
	bait__parser__Parser_next(p)
	return new bait__ast__BoolLiteral({ val: val, pos: pos })
}

function bait__parser__Parser_char_literal(p) {
	const pos = p.pos
	const val = p.val
	bait__parser__Parser_next(p)
	return new bait__ast__CharLiteral({ val: val, pos: pos })
}

function bait__parser__Parser_comptime_expr(p) {
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_if)) {
		let _t182 = bait__parser__Parser_if_match(p, false)
		if (_t182.is_error) {
			return _t182
		}
		return new Result({ data: _t182.data })
	}
	let _t183 = bait__parser__Parser_comptime_var(p)
	if (_t183.is_error) {
		return _t183
	}
	return new Result({ data: _t183.data })
}

function bait__parser__Parser_comptime_var(p) {
	const pos = p.pos
	bait__parser__Parser_next(p)
	let _t184 = bait__parser__Parser_check_name(p)
	if (_t184.is_error) {
		return _t184
	}
	const name = _t184.data
	return new Result({ data: new bait__ast__ComptimeVar({ name: name, pos: pos }) })
}

function bait__parser__Parser_dot_expr(p, left) {
	const pos = p.pos
	let _t185 = bait__parser__Parser_check(p, bait__token__Token.dot)
	if (_t185.is_error) {
		return _t185
	}
_t185.data
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.lpar)) {
		let _t187 = bait__parser__Parser_method_call(p, left)
		if (_t187.is_error) {
			return _t187
		}
		return new Result({ data: _t187.data })
	}
	let _t188 = bait__parser__Parser_check_name(p)
	if (_t188.is_error) {
		return _t188
	}
	const name = _t188.data
	return new Result({ data: new bait__ast__SelectorExpr({ expr: left, field_name: name, pos: pos }) })
}

function bait__parser__Parser_enum_val(p, has_name) {
	const pos = p.pos
	let name = from_js_string("")
	if (has_name) {
		let _t190 = bait__parser__Parser_check_name(p)
		if (_t190.is_error) {
			return _t190
		}
		name = _t190.data
		if (i32(p.expr_pkg.length > 0)) {
			name = bait__parser__Parser_prepend_expr_pkg(p, name)
		} else {
			name = bait__parser__Parser_prepend_pkg(p, name)
		}
	}
	let _t192 = bait__parser__Parser_check(p, bait__token__Token.dot)
	if (_t192.is_error) {
		return _t192
	}
_t192.data
	let _t193 = bait__parser__Parser_check_name(p)
	if (_t193.is_error) {
		return _t193
	}
	const val = _t193.data
	return new Result({ data: new bait__ast__EnumVal({ name: name, val: val, pos: pos }) })
}

function bait__parser__Parser_hash_expr(p) {
	let _t194 = bait__parser__Parser_parse_lang(p)
	if (_t194.is_error) {
		return _t194
	}
	const lang = _t194.data
	if (!eq(p.tok, bait__token__Token.string)) {
		if (eq(lang, bait__ast__Language.js)) {
			p.expr_pkg = from_js_string("JS")
		} else if (eq(lang, bait__ast__Language.c)) {
			p.expr_pkg = from_js_string("C")
		}
		let _t197 = bait__parser__Parser_name_expr(p, lang)
		if (_t197.is_error) {
			return _t197
		}
		return new Result({ data: _t197.data })
	}
	let _t198 = bait__parser__Parser_string_literal(p, bait__ast__Language.bait)
	if (_t198.is_error) {
		return _t198
	}
	const str_node = _t198.data
	return new Result({ data: new bait__ast__HashExpr({ lang: lang, val: str_node.val, pos: str_node.pos }) })
}

function bait__parser__Parser_ident(p, lang) {
	const pos = p.pos
	let is_mut = eq(p.tok, bait__token__Token.key_mut)
	if (is_mut) {
		bait__parser__Parser_next(p)
	}
	if (p.is_for_init) {
		is_mut = true
	}
	let _t201 = bait__parser__Parser_check_name(p)
	if (_t201.is_error) {
		return _t201
	}
	const name = bait__parser__Parser_prepend_expr_pkg(p, _t201.data)
	return new Result({ data: new bait__ast__Ident({ name: name, is_mut: is_mut, pkg: p.pkg_name, pos: pos, lang: lang }) })
}

function bait__parser__Parser_index_expr(p, left) {
	const pos = p.pos
	let _t202 = bait__parser__Parser_check(p, bait__token__Token.lsqr)
	if (_t202.is_error) {
		return _t202
	}
_t202.data
	let _t203 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t203.is_error) {
		return _t203
	}
	const index = _t203.data
	let _t204 = bait__parser__Parser_check(p, bait__token__Token.rsqr)
	if (_t204.is_error) {
		return _t204
	}
_t204.data
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new Result({ data: new bait__ast__IndexExpr({ left: left, index: index, pos: pos }) })
}

function bait__parser__Parser_infix_expr(p, left) {
	const pos = p.pos
	const op_tok = p.tok
	bait__parser__Parser_next(p)
	let _t205 = bait__parser__Parser_expr(p, bait__token__Token_precedence(op_tok))
	if (_t205.is_error) {
		return _t205
	}
	const right = _t205.data
	return new Result({ data: new bait__ast__InfixExpr({ left: left, right: right, op: op_tok, pos: pos }) })
}

function bait__parser__Parser_map_init(p) {
	const pos = p.pos
	bait__parser__Parser_next(p)
	if (eq(p.tok, bait__token__Token.lsqr)) {
		let _t207 = bait__parser__Parser_parse_map_type(p)
		if (_t207.is_error) {
			return _t207
		}
		const map_type = _t207.data
		return new Result({ data: new bait__ast__MapInit({ typ: map_type, pos: pos }) })
	}
	let keys = new bait_Array({ data: [], length: 0 })
	let vals = new bait_Array({ data: [], length: 0 })
	let _t208 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_t208.is_error) {
		return _t208
	}
_t208.data
	while (!eq(p.tok, bait__token__Token.rcur)) {
		let _t209 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t209.is_error) {
			return _t209
		}
		Array_push(keys, _t209.data)
		let _t210 = bait__parser__Parser_check(p, bait__token__Token.colon)
		if (_t210.is_error) {
			return _t210
		}
_t210.data
		let _t211 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t211.is_error) {
			return _t211
		}
		Array_push(vals, _t211.data)
	}
	bait__parser__Parser_next(p)
	return new Result({ data: new bait__ast__MapInit({ keys: keys, vals: vals, pos: pos }) })
}

function bait__parser__Parser_name_expr(p, lang) {
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
		if (eq(lang, bait__ast__Language.js)) {
			let _t214 = bait__parser__Parser_check_name(p)
			if (_t214.is_error) {
				return _t214
			}
			p.expr_pkg = string_add(p.expr_pkg, string_add(from_js_string("."), _t214.data))
			let _t215 = bait__parser__Parser_check(p, bait__token__Token.dot)
			if (_t215.is_error) {
				return _t215
			}
_t215.data
		} else if (map_contains(p.import_aliases, p.val)) {
			p.expr_pkg = map_get_set(p.import_aliases, p.val, from_js_string(""))
			bait__parser__Parser_next(p)
			bait__parser__Parser_next(p)
		}
	}
	if (string_eq(p.val, from_js_string("map"))) {
		let _t217 = bait__parser__Parser_map_init(p)
		if (_t217.is_error) {
			return _t217
		}
		return new Result({ data: _t217.data })
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.lpar)) {
		let _t219 = bait__parser__Parser_fun_call(p, lang)
		if (_t219.is_error) {
			return _t219
		}
		return new Result({ data: _t219.data })
	}
	const capitalised = u8_is_upper(string_get(p.val, 0)) && !string_is_upper(p.val)
	if (p.is_struct_possible && (eq(bait__parser__Parser_peek(p), bait__token__Token.lcur) || eq(bait__parser__Parser_peek(p), bait__token__Token.lsqr))) {
		if (capitalised || Array_contains_string(new bait_Array({ data: [from_js_string("array"), from_js_string("map"), from_js_string("string")], length: 3 }), p.val)) {
			let _t222 = bait__parser__Parser_struct_init(p)
			if (_t222.is_error) {
				return _t222
			}
			return new Result({ data: _t222.data })
		}
	}
	if (capitalised && eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
		let _t224 = bait__parser__Parser_enum_val(p, true)
		if (_t224.is_error) {
			return _t224
		}
		return new Result({ data: _t224.data })
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.string) && string_eq(p.val, from_js_string("js"))) {
		bait__parser__Parser_next(p)
		let _t226 = bait__parser__Parser_string_literal(p, bait__ast__Language.js)
		if (_t226.is_error) {
			return _t226
		}
		return new Result({ data: _t226.data })
	}
	let _t227 = bait__parser__Parser_ident(p, lang)
	if (_t227.is_error) {
		return _t227
	}
	return new Result({ data: _t227.data })
}

function bait__parser__Parser_float_literal(p) {
	const n = new bait__ast__FloatLiteral({ val: p.val, pos: p.pos })
	bait__parser__Parser_next(p)
	return n
}

function bait__parser__Parser_integer_literal(p) {
	const n = new bait__ast__IntegerLiteral({ val: p.val, pos: p.pos })
	bait__parser__Parser_next(p)
	return n
}

function bait__parser__Parser_par_expr(p) {
	const pos = p.pos
	bait__parser__Parser_next(p)
	let _t228 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t228.is_error) {
		return _t228
	}
	const expr = _t228.data
	let _t229 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_t229.is_error) {
		return _t229
	}
_t229.data
	return new Result({ data: new bait__ast__ParExpr({ expr: expr, pos: pos }) })
}

function bait__parser__Parser_prefix_expr(p) {
	const pos = p.pos
	const op = p.tok
	bait__parser__Parser_next(p)
	let _t230 = bait__parser__Parser_expr(p, bait__token__Precedence.prefix)
	if (_t230.is_error) {
		return _t230
	}
	const right = _t230.data
	return new Result({ data: new bait__ast__PrefixExpr({ op: op, right: right, pos: pos }) })
}

function bait__parser__Parser_string_literal(p, lang) {
	const pos = p.pos
	if (!eq(bait__parser__Parser_peek(p), bait__token__Token.str_dollar)) {
		const val = p.val
		bait__parser__Parser_next(p)
		return new Result({ data: new bait__ast__StringLiteral({ lang: lang, val: val, pos: pos }) })
	}
	let vals = new bait_Array({ data: [], length: 0 })
	let exprs = new bait_Array({ data: [], length: 0 })
	while (eq(p.tok, bait__token__Token.string)) {
		Array_push(vals, p.val)
		bait__parser__Parser_next(p)
		if (!eq(p.tok, bait__token__Token.str_dollar)) {
			break
		}
		bait__parser__Parser_next(p)
		let _t233 = bait__parser__Parser_check(p, bait__token__Token.lcur)
		if (_t233.is_error) {
			return _t233
		}
_t233.data
		let _t234 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t234.is_error) {
			return _t234
		}
		Array_push(exprs, _t234.data)
	}
	return new Result({ data: new bait__ast__StringInterLiteral({ vals: vals, exprs: exprs, pos: pos }) })
}

function bait__parser__Parser_typeof_expr(p) {
	const pos = p.pos
	let _t235 = bait__parser__Parser_check(p, bait__token__Token.key_typeof)
	if (_t235.is_error) {
		return _t235
	}
_t235.data
	let _t236 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_t236.is_error) {
		return _t236
	}
_t236.data
	let _t237 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t237.is_error) {
		return _t237
	}
	const expr = _t237.data
	let _t238 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_t238.is_error) {
		return _t238
	}
_t238.data
	return new Result({ data: new bait__ast__TypeOf({ expr: expr, pos: pos }) })
}


function bait__parser__Parser_for_loop(p, label) {
	const pos = p.pos
	bait__parser__Parser_next(p)
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.decl_assign)) {
		let _t240 = bait__parser__Parser_for_classic_loop(p, label, pos)
		if (_t240.is_error) {
			return _t240
		}
		return new Result({ data: _t240.data })
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_in) || eq(bait__parser__Parser_peek(p), bait__token__Token.comma) || eq(p.tok, bait__token__Token.key_mut)) {
		let _t242 = bait__parser__Parser_for_in_loop(p, label, pos)
		if (_t242.is_error) {
			return _t242
		}
		return new Result({ data: _t242.data })
	}
	p.is_struct_possible = false
	let _t243 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t243.is_error) {
		return _t243
	}
	const cond = _t243.data
	p.is_struct_possible = true
	let _t244 = bait__parser__Parser_parse_block(p)
	if (_t244.is_error) {
		return _t244
	}
	const stmts = _t244.data
	return new Result({ data: new bait__ast__ForLoop({ label: label, cond: cond, stmts: stmts, pos: pos }) })
}

function bait__parser__Parser_for_classic_loop(p, label, pos) {
	p.is_for_init = true
	let _t245 = bait__parser__Parser_assign_stmt(p)
	if (_t245.is_error) {
		return _t245
	}
	const init = _t245.data
	p.is_for_init = false
	let _t246 = bait__parser__Parser_check(p, bait__token__Token.semicolon)
	if (_t246.is_error) {
		return _t246
	}
_t246.data
	let _t247 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t247.is_error) {
		return _t247
	}
	const cond = _t247.data
	let _t248 = bait__parser__Parser_check(p, bait__token__Token.semicolon)
	if (_t248.is_error) {
		return _t248
	}
_t248.data
	let _t249 = bait__parser__Parser_stmt(p)
	if (_t249.is_error) {
		return _t249
	}
	const inc = _t249.data
	let _t250 = bait__parser__Parser_parse_block(p)
	if (_t250.is_error) {
		return _t250
	}
	const stmts = _t250.data
	return new Result({ data: new bait__ast__ForClassicLoop({ label: label, init: init, cond: cond, inc: inc, stmts: stmts, pos: pos }) })
}

function bait__parser__Parser_for_in_loop(p, label, pos) {
	let idxvar = from_js_string("")
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.comma)) {
		let _t252 = bait__parser__Parser_check_name(p)
		if (_t252.is_error) {
			return _t252
		}
		idxvar = _t252.data
		bait__parser__Parser_next(p)
	}
	let is_mut = false
	if (eq(p.tok, bait__token__Token.key_mut)) {
		is_mut = true
		bait__parser__Parser_next(p)
	}
	let _t254 = bait__parser__Parser_check_name(p)
	if (_t254.is_error) {
		return _t254
	}
	let valvar = new bait__ast__Param({ pos: p.pos, name: _t254.data, is_mut: is_mut })
	let _t255 = bait__parser__Parser_check(p, bait__token__Token.key_in)
	if (_t255.is_error) {
		return _t255
	}
_t255.data
	p.is_struct_possible = false
	let _t256 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t256.is_error) {
		return _t256
	}
	const expr = _t256.data
	p.is_struct_possible = true
	let _t257 = bait__parser__Parser_parse_block(p)
	if (_t257.is_error) {
		return _t257
	}
	const stmts = _t257.data
	return new Result({ data: new bait__ast__ForInLoop({ label: label, idxvar: idxvar, valvar: valvar, expr: expr, stmts: stmts, pos: pos }) })
}


function bait__parser__Parser_fun_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	let _t258 = bait__parser__Parser_check(p, bait__token__Token.key_fun)
	if (_t258.is_error) {
		return _t258
	}
_t258.data
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
		let _t261 = bait__parser__Parser_check_name(p)
		if (_t261.is_error) {
			return _t261
		}
		const rec_name = _t261.data
		let _t262 = bait__parser__Parser_parse_lang(p)
		if (_t262.is_error) {
			return _t262
		}
		lang = _t262.data
		let _t263 = undefined
		if (eq(lang, bait__ast__Language.bait)) {
					let _t264 = bait__parser__Parser_parse_type(p)
			if (_t264.is_error) {
				return _t264
			}
			_t263 = _t264.data
		} else {
					let _t265 = bait__parser__Parser_parse_name_type(p, lang)
			if (_t265.is_error) {
				return _t265
			}
			_t263 = _t265.data
		}
		let rec_type = _t263
		if (is_mut) {
			rec_type = bait__ast__Type_set_nr_amp(rec_type, 1)
		}
		Array_push(params, new bait__ast__Param({ is_mut: is_mut, name: rec_name, typ: rec_type }))
		let _t267 = bait__parser__Parser_check(p, bait__token__Token.rpar)
		if (_t267.is_error) {
			return _t267
		}
_t267.data
	}
	let name = from_js_string("")
	if (eq(p.tok, bait__token__Token.hash)) {
		let _t269 = bait__parser__Parser_parse_lang(p)
		if (_t269.is_error) {
			return _t269
		}
		lang = _t269.data
		name = bait__ast__Language_prepend_to(lang, name)
		if (eq(lang, bait__ast__Language.js) && eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
			let _t271 = bait__parser__Parser_check_name(p)
			if (_t271.is_error) {
				return _t271
			}
			name = string_add(name, string_add(_t271.data, from_js_string(".")))
			let _t272 = bait__parser__Parser_check(p, bait__token__Token.dot)
			if (_t272.is_error) {
				return _t272
			}
_t272.data
		}
	}
	let _t273 = bait__parser__Parser_check_name(p)
	if (_t273.is_error) {
		return _t273
	}
	name = string_add(name, _t273.data)
	const is_test = string_starts_with(name, from_js_string("test_"))
	if (!is_method && eq(lang, bait__ast__Language.bait)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	let _t275 = bait__parser__Parser_generic_type_names(p)
	if (_t275.is_error) {
		return _t275
	}
	const generic_names = _t275.data
	let _t276 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_t276.is_error) {
		return _t276
	}
_t276.data
	let _t277 = bait__parser__Parser_fun_params(p)
	if (_t277.is_error) {
		return _t277
	}
	Array_push_many(params, _t277.data)
	let _t278 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_t278.is_error) {
		return _t278
	}
_t278.data
	let return_type = bait__ast__VOID_TYPE
	if (!eq(p.tok, bait__token__Token.lcur) && eq(pos.line, p.pos.line)) {
		let _t280 = bait__parser__Parser_parse_type(p)
		if (_t280.is_error) {
			return _t280
		}
		return_type = _t280.data
	}
	let node = new bait__ast__FunDecl({ is_test: is_test, is_pub: is_pub, name: name, pkg: p.pkg_name, generic_names: generic_names, params: params, return_type: return_type, noreturn: Array_bait__ast__Attribute_has(p.attributes, from_js_string("noreturn")), attrs: p.attributes, lang: lang, pos: pos })
	p.attributes = new bait_Array({ data: [], length: 0 })
	if (is_method) {
		const sym = bait__ast__Table_get_sym(p.table, Array_get(params, 0).typ)
		if (eq(lang, bait__ast__Language.bait) && bait__ast__TypeSymbol_has_method(sym, name)) {
			let _t283 = bait__parser__Parser_error(p, from_js_string(`Method "${name.str}" already exists on type "${sym.name.str}"`))
			if (_t283.is_error) {
				return _t283
			}
_t283.data
		}
		Array_push(sym.methods, node)
	} else {
		map_set(p.table.fun_decls, name, node)
		let param_types = new bait_Array({ data: [], length: 0 })
		for (let _t284 = 0; _t284 < params.length; _t284++) {
			const param = Array_get(params, _t284)
			Array_push(param_types, param.typ)
		}
		const typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type, false)
	}
	if (eq(lang, bait__ast__Language.bait)) {
		let _t286 = bait__parser__Parser_parse_block(p)
		if (_t286.is_error) {
			return _t286
		}
		node.stmts = _t286.data
	}
	node.is_method = is_method
	return new Result({ data: node })
}

function bait__parser__Parser_anon_fun(p) {
	const pos = p.pos
	let _t287 = bait__parser__Parser_check(p, bait__token__Token.key_fun)
	if (_t287.is_error) {
		return _t287
	}
_t287.data
	let _t288 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_t288.is_error) {
		return _t288
	}
_t288.data
	let _t289 = bait__parser__Parser_fun_params(p)
	if (_t289.is_error) {
		return _t289
	}
	const params = _t289.data
	let _t290 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_t290.is_error) {
		return _t290
	}
_t290.data
	let return_type = bait__ast__VOID_TYPE
	if (!eq(p.tok, bait__token__Token.lcur)) {
		let _t292 = bait__parser__Parser_parse_type(p)
		if (_t292.is_error) {
			return _t292
		}
		return_type = _t292.data
	}
	let param_types = new bait_Array({ data: [], length: 0 })
	for (let _t293 = 0; _t293 < params.length; _t293++) {
		const param = Array_get(params, _t293)
		Array_push(param_types, param.typ)
	}
	const typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type, true)
	let _t294 = bait__parser__Parser_parse_block(p)
	if (_t294.is_error) {
		return _t294
	}
	const stmts = _t294.data
	return new Result({ data: new bait__ast__AnonFun({ decl: new bait__ast__FunDecl({ name: from_js_string(`_anon_${p.file_hash.str}_${i32_str(bait__lexer__Lexer_offset(p.lexer)).str}`), params: params, return_type: return_type, stmts: stmts }), typ: typ, pos: pos }) })
}

function bait__parser__Parser_fun_params(p) {
	let params = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rpar)) {
		const pos = p.pos
		let is_mut = false
		if (eq(p.tok, bait__token__Token.key_mut)) {
			is_mut = true
			bait__parser__Parser_next(p)
		}
		let _t296 = bait__parser__Parser_check_name(p)
		if (_t296.is_error) {
			return _t296
		}
		let _t297 = bait__parser__Parser_parse_type(p)
		if (_t297.is_error) {
			return _t297
		}
		const param = new bait__ast__Param({ is_mut: is_mut, name: _t296.data, typ: _t297.data, pos: pos })
		Array_push(params, param)
		if (!eq(p.tok, bait__token__Token.rpar)) {
			let _t299 = bait__parser__Parser_check(p, bait__token__Token.comma)
			if (_t299.is_error) {
				return _t299
			}
_t299.data
		}
	}
	return new Result({ data: params })
}

function bait__parser__Parser_fun_call(p, lang) {
	const pos = p.pos
	let _t300 = bait__parser__Parser_check_name(p)
	if (_t300.is_error) {
		return _t300
	}
	const name = bait__parser__Parser_prepend_expr_pkg(p, _t300.data)
	let _t301 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_t301.is_error) {
		return _t301
	}
_t301.data
	let _t302 = bait__parser__Parser_call_args(p)
	if (_t302.is_error) {
		return _t302
	}
	const args = _t302.data
	let _t303 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_t303.is_error) {
		return _t303
	}
_t303.data
	let _t304 = bait__parser__Parser_or_block(p)
	if (_t304.is_error) {
		return _t304
	}
	const or_block = _t304.data
	return new Result({ data: new bait__ast__CallExpr({ name: name, args: args, or_block: or_block, pkg: p.pkg_name, pos: pos, lang: lang }) })
}

function bait__parser__Parser_method_call(p, left) {
	const pos = p.pos
	let _t305 = bait__parser__Parser_check_name(p)
	if (_t305.is_error) {
		return _t305
	}
	const name = _t305.data
	let _t306 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_t306.is_error) {
		return _t306
	}
_t306.data
	let _t307 = bait__parser__Parser_call_args(p)
	if (_t307.is_error) {
		return _t307
	}
	const args = _t307.data
	let _t308 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_t308.is_error) {
		return _t308
	}
_t308.data
	let _t309 = bait__parser__Parser_or_block(p)
	if (_t309.is_error) {
		return _t309
	}
	const or_block = _t309.data
	return new Result({ data: new bait__ast__CallExpr({ is_method: true, left: left, name: name, args: args, or_block: or_block, pos: pos }) })
}

function bait__parser__Parser_call_args(p) {
	let args = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rpar)) {
		const is_mut = eq(p.tok, bait__token__Token.key_mut)
		let _t310 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t310.is_error) {
			return _t310
		}
		Array_push(args, new bait__ast__CallArg({ is_mut: is_mut, expr: _t310.data }))
		if (!eq(p.tok, bait__token__Token.rpar)) {
			if (eq(p.tok, bait__token__Token.eof)) {
				break
			}
			let _t313 = bait__parser__Parser_check(p, bait__token__Token.comma)
			if (_t313.is_error) {
				return _t313
			}
_t313.data
		}
	}
	return new Result({ data: args })
}

function bait__parser__Parser_or_block(p) {
	if (eq(p.tok, bait__token__Token.excl)) {
		bait__parser__Parser_next(p)
		return new Result({ data: new bait__ast__OrBlock({ kind: bait__ast__OrKind.prop }) })
	}
	if (!eq(p.tok, bait__token__Token.key_or) || !eq(bait__parser__Parser_peek(p), bait__token__Token.lcur)) {
		return new Result({ data: new bait__ast__OrBlock({ kind: bait__ast__OrKind.none }) })
	}
	bait__parser__Parser_next(p)
	let _t316 = bait__parser__Parser_parse_block(p)
	if (_t316.is_error) {
		return _t316
	}
	const stmts = _t316.data
	return new Result({ data: new bait__ast__OrBlock({ kind: bait__ast__OrKind.block, stmts: stmts }) })
}


function bait__parser__Parser_if_match(p, is_expr) {
	const pos = p.pos
	const is_comptime = eq(p.tok, bait__token__Token.dollar)
	let branches = new bait_Array({ data: [], length: 0 })
	let has_else = false
	while (true) {
		const bpos = p.pos
		if (is_comptime) {
			let _t318 = bait__parser__Parser_check(p, bait__token__Token.dollar)
			if (_t318.is_error) {
				return _t318
			}
_t318.data
		}
		if (eq(p.tok, bait__token__Token.key_else)) {
			bait__parser__Parser_next(p)
			if (eq(p.tok, bait__token__Token.lcur)) {
				has_else = true
				let _t321 = bait__parser__Parser_parse_block(p)
				if (_t321.is_error) {
					return _t321
				}
				const stmts = _t321.data
				Array_push(branches, new bait__ast__IfBranch({ cond: new bait__ast__EmptyExpr({}), stmts: stmts, pos: bpos }))
				break
			}
			if (is_comptime) {
				let _t323 = bait__parser__Parser_check(p, bait__token__Token.dollar)
				if (_t323.is_error) {
					return _t323
				}
_t323.data
			}
		}
		let _t324 = bait__parser__Parser_check(p, bait__token__Token.key_if)
		if (_t324.is_error) {
			return _t324
		}
_t324.data
		p.is_struct_possible = false
		let _t325 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t325.is_error) {
			return _t325
		}
		const cond = _t325.data
		p.is_struct_possible = true
		let _t326 = bait__parser__Parser_parse_block(p)
		if (_t326.is_error) {
			return _t326
		}
		const stmts = _t326.data
		Array_push(branches, new bait__ast__IfBranch({ cond: cond, stmts: stmts, pos: bpos }))
		if ((is_comptime && !eq(p.tok, bait__token__Token.dollar)) || (!is_comptime && !eq(p.tok, bait__token__Token.key_else))) {
			break
		}
	}
	return new Result({ data: new bait__ast__IfMatch({ is_comptime: is_comptime, is_expr: is_expr, has_else: has_else, branches: branches, pos: pos }) })
}

function bait__parser__Parser_match_as_if_expr(p, is_expr) {
	const pos = p.pos
	let has_else = false
	let branches = new bait_Array({ data: [], length: 0 })
	let _t328 = bait__parser__Parser_check(p, bait__token__Token.key_match)
	if (_t328.is_error) {
		return _t328
	}
_t328.data
	p.is_struct_possible = false
	let _t329 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t329.is_error) {
		return _t329
	}
	const cond_left = _t329.data
	p.is_struct_possible = true
	let _t330 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_t330.is_error) {
		return _t330
	}
_t330.data
	while (!eq(p.tok, bait__token__Token.rcur)) {
		const bpos = p.pos
		if (eq(p.tok, bait__token__Token.key_else)) {
			bait__parser__Parser_next(p)
			has_else = true
			let _t332 = bait__parser__Parser_parse_block(p)
			if (_t332.is_error) {
				return _t332
			}
			const stmts = _t332.data
			Array_push(branches, new bait__ast__IfBranch({ cond: new bait__ast__EmptyExpr({}), stmts: stmts, pos: bpos }))
			break
		}
		p.is_struct_possible = false
		let _t333 = bait__parser__Parser_expr_list(p)
		if (_t333.is_error) {
			return _t333
		}
		const right_conds = _t333.data
		p.is_struct_possible = true
		let _t334 = bait__parser__Parser_parse_block(p)
		if (_t334.is_error) {
			return _t334
		}
		const stmts = _t334.data
		Array_push(branches, new bait__ast__IfBranch({ cond: bait__parser__Parser_cond_list_to_infix(p, cond_left, right_conds, bpos), stmts: stmts, pos: bpos }))
	}
	let _t335 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_t335.is_error) {
		return _t335
	}
_t335.data
	return new Result({ data: new bait__ast__IfMatch({ is_expr: is_expr, is_match: true, has_else: has_else, branches: branches, pos: pos }) })
}

function bait__parser__Parser_cond_list_to_infix(p, left, right_conds, pos) {
	let cond = new bait__ast__InfixExpr({ op: bait__token__Token.eq, left: left, right: Array_last(right_conds), is_match: true, pos: pos })
	for (let i = i32(right_conds.length - 2); i32(i >= 0); i = i32(i - 1)) {
		cond = new bait__ast__InfixExpr({ op: bait__token__Token.key_or, left: new bait__ast__InfixExpr({ op: bait__token__Token.eq, left: left, right: Array_get(right_conds, i), is_match: true, pos: pos }), right: cond, pos: pos })
	}
	return cond
}


function bait__parser__Parser_add_builtin_imports(p) {
	if (string_eq(p.pkg_name, from_js_string("builtin"))) {
		return new bait_Array({ data: [], length: 0 })
	}
	let imports = new bait_Array({ data: [], length: 0 })
	Array_push(imports, new bait__ast__Import({ name: from_js_string("builtin"), alias: from_js_string("builtin") }))
	if (p.pref.is_test && !string_eq(p.pkg_name, from_js_string("main"))) {
		Array_push(imports, new bait__ast__Import({ name: p.pkg_name }))
	}
	return imports
}

function bait__parser__Parser_foreign_import(p, pos) {
	const name = p.val
	bait__parser__Parser_next(p)
	let _t338 = bait__parser__Parser_check(p, bait__token__Token.key_as)
	if (_t338.is_error) {
		return _t338
	}
_t338.data
	let _t339 = bait__parser__Parser_parse_lang(p)
	if (_t339.is_error) {
		return _t339
	}
	const lang = _t339.data
	let alias = from_js_string("")
	if (eq(lang, bait__ast__Language.js)) {
		let _t341 = bait__parser__Parser_check_name(p)
		if (_t341.is_error) {
			return _t341
		}
		alias = bait__ast__Language_prepend_to(lang, _t341.data)
	} else if (eq(lang, bait__ast__Language.c)) {
		let _t342 = bait__parser__Parser_check_name(p)
		if (_t342.is_error) {
			return _t342
		}
_t342.data
	}
	return new Result({ data: new bait__ast__Import({ name: name, alias: alias, lang: lang, pos: pos }) })
}

function bait__parser__Parser_bait_import(p, pos) {
	let _t343 = bait__parser__Parser_check_name(p)
	if (_t343.is_error) {
		return _t343
	}
	let name_parts = new bait_Array({ data: [_t343.data], length: 1 })
	while (eq(p.tok, bait__token__Token.dot)) {
		bait__parser__Parser_next(p)
		let _t344 = bait__parser__Parser_check_name(p)
		if (_t344.is_error) {
			return _t344
		}
		Array_push(name_parts, _t344.data)
	}
	const name = Array_string_join(name_parts, from_js_string("."))
	let alias = Array_last(name_parts)
	if (eq(p.tok, bait__token__Token.key_as)) {
		bait__parser__Parser_next(p)
		let _t346 = bait__parser__Parser_check_name(p)
		if (_t346.is_error) {
			return _t346
		}
		alias = _t346.data
	}
	return new Result({ data: new bait__ast__Import({ name: name, alias: alias, pos: pos }) })
}

function bait__parser__Parser_import_stmts(p) {
	let imports = bait__parser__Parser_add_builtin_imports(p)
	while (eq(p.tok, bait__token__Token.key_import)) {
		const pos = p.pos
		bait__parser__Parser_next(p)
		let _t347 = undefined
		if (eq(p.tok, bait__token__Token.string)) {
					let _t348 = bait__parser__Parser_foreign_import(p, pos)
			if (_t348.is_error) {
				return _t348
			}
			_t347 = _t348.data
		} else {
					let _t349 = bait__parser__Parser_bait_import(p, pos)
			if (_t349.is_error) {
				return _t349
			}
			_t347 = _t349.data
		}
		let imp = _t347
		map_set(p.import_aliases, imp.alias, imp.name)
		Array_push(imports, imp)
	}
	return new Result({ data: imports })
}


function bait__parser__Parser({ pref = new bait__preference__Prefs({}), path = from_js_string(""), file_hash = from_js_string(""), eofs = 0, tok = 0, next_tok = 0, val = from_js_string(""), pos = new bait__token__Pos({}), pkg_name = from_js_string(""), import_aliases = new map({ data: new Map([]), length: 0 }), attributes = new bait_Array({ data: [], length: 0 }), expr_pkg = from_js_string(""), is_for_init = false, is_struct_possible = false, table = new bait__ast__Table({}), lexer = new bait__lexer__Lexer({}), infos = new bait_Array({ data: [], length: 0 }), warnings = new bait_Array({ data: [], length: 0 }), error = new bait__errors__Message({}) }) {
	this.pref = pref
	this.path = path
	this.file_hash = file_hash
	this.eofs = eofs
	this.tok = tok
	this.next_tok = next_tok
	this.val = val
	this.pos = pos
	this.pkg_name = pkg_name
	this.import_aliases = import_aliases
	this.attributes = attributes
	this.expr_pkg = expr_pkg
	this.is_for_init = is_for_init
	this.is_struct_possible = is_struct_possible
	this.table = table
	this.lexer = lexer
	this.infos = infos
	this.warnings = warnings
	this.error = error
}
function bait__parser__new(table, pref) {
	return new bait__parser__Parser({ table: table, pref: pref })
}

function bait__parser__Parser_init(p, text, path, expected_pkg) {
	bait__lexer__Lexer_init(p.lexer, text, bait__lexer__CommentMode.discard)
	p.path = path
	p.file_hash = u32_str(hash__crc32__checksum(string_bytes(path)))
	p.pkg_name = expected_pkg
	p.eofs = 0
	p.import_aliases = new map({ data: new Map([]), length: 0 })
	p.expr_pkg = from_js_string("")
	p.is_for_init = false
	p.is_struct_possible = true
	p.attributes = new bait_Array({ data: [], length: 0 })
	p.infos = new bait_Array({ data: [], length: 0 })
	p.warnings = new bait_Array({ data: [], length: 0 })
	bait__parser__Parser_next(p)
}

function bait__parser__Parser_parse(p) {
	let _t350 = bait__parser__Parser_parse_result(p)
	if (_t350.is_error) {
		 const err = _t350.msg
		_t350.data = bait__parser__Parser_file_error(p)
	}
	return _t350.data
}

function bait__parser__Parser_parse_result(p) {
	let _t351 = bait__parser__Parser_parse_attributes(p)
	if (_t351.is_error) {
		return _t351
	}
_t351.data
	let _t352 = bait__parser__Parser_package_decl(p)
	if (_t352.is_error) {
		return _t352
	}
	p.pkg_name = _t352.data
	if (eq(p.pkg_name.length, 0)) {
		return new Result({ data: new bait__ast__File({ infos: p.infos }) })
	}
	if (!p.pref.is_test && string_eq(p.pkg_name, from_js_string("builtin")) && string_ends_with(p.path, from_js_string("assert.bt"))) {
		return new Result({ data: new bait__ast__File({ path: p.path }) })
	}
	let _t355 = bait__parser__Parser_import_stmts(p)
	if (_t355.is_error) {
		return _t355
	}
	const imports = _t355.data
	let stmts = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.eof)) {
		let _t356 = bait__parser__Parser_parse_attributes(p)
		if (_t356.is_error) {
			return _t356
		}
_t356.data
		let _t357 = bait__parser__Parser_toplevel_stmt(p)
		if (_t357.is_error) {
			return _t357
		}
		Array_push(stmts, _t357.data)
	}
	return new Result({ data: new bait__ast__File({ path: p.path, pkg_name: p.pkg_name, imports: imports, stmts: stmts, infos: p.infos, warnings: p.warnings }) })
}

function bait__parser__Parser_package_decl(p) {
	if (!eq(p.tok, bait__token__Token.key_package)) {
		return new Result({ data: from_js_string("main") })
	}
	bait__parser__Parser_next(p)
	let _t359 = bait__parser__Parser_check_name(p)
	if (_t359.is_error) {
		return _t359
	}
	const name = _t359.data
	if (eq(p.pkg_name.length, 0)) {
		return new Result({ data: name })
	}
	if (!string_ends_with(p.pkg_name, name)) {
		if (Array_bait__ast__Attribute_has(p.attributes, from_js_string("silent_mismatch"))) {
			return new Result({ data: from_js_string("") })
		}
		bait__parser__Parser_info(p, from_js_string(`skipped due to package mismatch: expected \`${p.pkg_name.str}\`, got \`${name.str}\`.\nUse \`@silent_mismatch\` to suppress this info.`))
		return new Result({ data: from_js_string("") })
	}
	p.attributes = new bait_Array({ data: [], length: 0 })
	return new Result({ data: p.pkg_name })
}

function bait__parser__Parser_parse_attributes(p) {
	while (eq(p.tok, bait__token__Token.attr)) {
		const pos = p.pos
		const name = p.val
		bait__parser__Parser_next(p)
		let value = from_js_string("")
		if (eq(p.tok, bait__token__Token.lpar)) {
			bait__parser__Parser_next(p)
			value = p.val
			let _t364 = bait__parser__Parser_check(p, bait__token__Token.string)
			if (_t364.is_error) {
				return _t364
			}
_t364.data
			let _t365 = bait__parser__Parser_check(p, bait__token__Token.rpar)
			if (_t365.is_error) {
				return _t365
			}
_t365.data
		}
		Array_push(p.attributes, new bait__ast__Attribute({ name: name, value: value, pos: pos }))
	}
	return new Result({})
}

function bait__parser__Parser_parse_block(p) {
	let _t366 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_t366.is_error) {
		return _t366
	}
_t366.data
	let stmts = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rcur) && !eq(p.tok, bait__token__Token.eof)) {
		let _t367 = bait__parser__Parser_stmt(p)
		if (_t367.is_error) {
			return _t367
		}
		Array_push(stmts, _t367.data)
	}
	let _t368 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_t368.is_error) {
		return _t368
	}
_t368.data
	return new Result({ data: stmts })
}

function bait__parser__Parser_skip(p, tok) {
	if (eq(p.tok, tok)) {
		bait__parser__Parser_next(p)
	}
}

function bait__parser__Parser_check(p, expected) {
	if (!eq(p.tok, expected)) {
		let _t371 = bait__parser__Parser_error(p, from_js_string(`unexpected ${bait__token__Token_str(p.tok).str}, expecting ${bait__token__Token_str(expected).str}`))
		if (_t371.is_error) {
			return _t371
		}
_t371.data
	}
	bait__parser__Parser_next(p)
	return new Result({})
}

function bait__parser__Parser_check_name(p) {
	const val = p.val
	let _t372 = bait__parser__Parser_check(p, bait__token__Token.name)
	if (_t372.is_error) {
		return _t372
	}
_t372.data
	return new Result({ data: val })
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
		return new Result({ data: bait__ast__Language.bait })
	}
	const lang = bait__ast__prefix_to_lang(p.val)
	bait__parser__Parser_next(p)
	let _t375 = bait__parser__Parser_check(p, bait__token__Token.dot)
	if (_t375.is_error) {
		return _t375
	}
_t375.data
	return new Result({ data: lang })
}

function bait__parser__Parser_prepend_pkg(p, val) {
	if (string_eq(p.pkg_name, from_js_string("builtin")) || string_eq(p.pkg_name, from_js_string("main"))) {
		return val
	}
	return string_add(string_add(p.pkg_name, from_js_string(".")), val)
}

function bait__parser__Parser_prepend_expr_pkg(p, val) {
	if (eq(p.expr_pkg.length, 0) || string_eq(p.expr_pkg, p.pkg_name)) {
		return val
	}
	const res = string_add(string_add(p.expr_pkg, from_js_string(".")), val)
	p.expr_pkg = from_js_string("")
	return res
}

function bait__parser__Parser_next(p) {
	if (eq(p.next_tok, bait__token__Token.error)) {
		p.tok = bait__lexer__Lexer_next(p.lexer)
	} else {
		p.tok = p.next_tok
		p.next_tok = bait__token__Token.error
	}
	p.val = bait__lexer__Lexer_val(p.lexer)
	p.pos = bait__lexer__Lexer_pos(p.lexer)
}

function bait__parser__Parser_peek(p) {
	if (eq(p.next_tok, bait__token__Token.error)) {
		p.next_tok = bait__lexer__Lexer_next(p.lexer)
	}
	return p.next_tok
}

function bait__parser__Parser_file_error(p) {
	return new bait__ast__File({ path: p.path, infos: p.infos, warnings: p.warnings, errors: new bait_Array({ data: [p.error], length: 1 }) })
}

function bait__parser__Parser_info(p, msg) {
	Array_push(p.infos, new bait__errors__Message({ kind: bait__errors__Kind.info, path: p.path, pos: p.pos, title: from_js_string("info"), msg: msg }))
}

function bait__parser__Parser_warn(p, msg) {
	Array_push(p.warnings, new bait__errors__Message({ kind: bait__errors__Kind.warning, path: p.path, pos: p.pos, title: from_js_string("warning"), msg: msg }))
}

function bait__parser__Parser_error(p, msg) {
	p.error = new bait__errors__Message({ kind: bait__errors__Kind.error, path: p.path, pos: p.pos, title: from_js_string("error"), msg: msg })
	return error(from_js_string(""))
}


function bait__parser__Parser_toplevel_stmt(p) {
	let _t380 = undefined
	if (eq(p.tok, bait__token__Token.key_pub)) {
			let _t381 = bait__parser__Parser_pub_stmt(p)
		if (_t381.is_error) {
			return _t381
		}
		_t380 = _t381.data
	} else if (eq(p.tok, bait__token__Token.hash)) {
			let _t382 = bait__parser__Parser_expr_stmt(p)
		if (_t382.is_error) {
			return _t382
		}
		_t380 = _t382.data
	} else if (eq(p.tok, bait__token__Token.key_const)) {
			let _t383 = bait__parser__Parser_const_decl(p)
		if (_t383.is_error) {
			return _t383
		}
		_t380 = _t383.data
	} else if (eq(p.tok, bait__token__Token.key_enum)) {
			let _t384 = bait__parser__Parser_enum_decl(p)
		if (_t384.is_error) {
			return _t384
		}
		_t380 = _t384.data
	} else if (eq(p.tok, bait__token__Token.key_fun)) {
			let _t385 = bait__parser__Parser_fun_decl(p)
		if (_t385.is_error) {
			return _t385
		}
		_t380 = _t385.data
	} else if (eq(p.tok, bait__token__Token.key_global)) {
			let _t386 = bait__parser__Parser_global_decl(p)
		if (_t386.is_error) {
			return _t386
		}
		_t380 = _t386.data
	} else if (eq(p.tok, bait__token__Token.key_interface)) {
			let _t387 = bait__parser__Parser_interface_decl(p)
		if (_t387.is_error) {
			return _t387
		}
		_t380 = _t387.data
	} else if (eq(p.tok, bait__token__Token.key_struct)) {
			let _t388 = bait__parser__Parser_struct_decl(p)
		if (_t388.is_error) {
			return _t388
		}
		_t380 = _t388.data
	} else if (eq(p.tok, bait__token__Token.key_type)) {
			let _t389 = bait__parser__Parser_type_decl(p)
		if (_t389.is_error) {
			return _t389
		}
		_t380 = _t389.data
	} else {
			let _t390 = bait__parser__Parser_script_mode_or_error(p)
		if (_t390.is_error) {
			return _t390
		}
		_t380 = _t390.data
	}
	return new Result({ data: _t380 })
}

function bait__parser__Parser_pub_stmt(p) {
	let _t391 = undefined
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_const)) {
			let _t392 = bait__parser__Parser_const_decl(p)
		if (_t392.is_error) {
			return _t392
		}
		_t391 = _t392.data
	} else if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_enum)) {
			let _t393 = bait__parser__Parser_enum_decl(p)
		if (_t393.is_error) {
			return _t393
		}
		_t391 = _t393.data
	} else if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_fun)) {
			let _t394 = bait__parser__Parser_fun_decl(p)
		if (_t394.is_error) {
			return _t394
		}
		_t391 = _t394.data
	} else if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_interface)) {
			let _t395 = bait__parser__Parser_interface_decl(p)
		if (_t395.is_error) {
			return _t395
		}
		_t391 = _t395.data
	} else if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_struct)) {
			let _t396 = bait__parser__Parser_struct_decl(p)
		if (_t396.is_error) {
			return _t396
		}
		_t391 = _t396.data
	} else {
			let _t397 = bait__parser__Parser_error(p, from_js_string(`cannot use pub keyword before ${bait__token__Token_str(bait__parser__Parser_peek(p)).str}`))
		if (_t397.is_error) {
			return _t397
		}
_t397.data
		_t391 = new bait__ast__EmptyStmt({})
	}
	return new Result({ data: _t391 })
}

function bait__parser__Parser_script_mode_or_error(p) {
	if (string_eq(p.pkg_name, from_js_string("main"))) {
		let _t399 = bait__parser__Parser_script_mode_main(p)
		if (_t399.is_error) {
			return _t399
		}
		return new Result({ data: _t399.data })
	}
	let _t400 = bait__parser__Parser_error(p, from_js_string(`bad toplevel token: kind = ${bait__token__Token_str(p.tok).str}, val = ${p.val.str}`))
	if (_t400.is_error) {
		return _t400
	}
_t400.data
	return new Result({ data: new bait__ast__EmptyStmt({}) })
}

function bait__parser__Parser_script_mode_main(p) {
	if (!p.pref.is_script) {
		bait__parser__Parser_warn(p, from_js_string("declare the main function or use the --script option"))
	}
	let stmts = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.eof)) {
		let _t402 = bait__parser__Parser_stmt(p)
		if (_t402.is_error) {
			return _t402
		}
		Array_push(stmts, _t402.data)
	}
	let node = new bait__ast__FunDecl({ name: from_js_string("main"), return_type: bait__ast__VOID_TYPE })
	map_set(p.table.fun_decls, from_js_string("main"), node)
	node.stmts = stmts
	return new Result({ data: node })
}

function bait__parser__Parser_stmt(p) {
	let _t403 = undefined
	if (eq(p.tok, bait__token__Token.name)) {
			let _t404 = bait__parser__Parser_stmt_with_name(p)
		if (_t404.is_error) {
			return _t404
		}
		_t403 = _t404.data
	} else if (eq(p.tok, bait__token__Token.key_assert)) {
			let _t405 = bait__parser__Parser_assert_stmt(p)
		if (_t405.is_error) {
			return _t405
		}
		_t403 = _t405.data
	} else if (eq(p.tok, bait__token__Token.key_break) || eq(p.tok, bait__token__Token.key_continue)) {
			let _t406 = bait__parser__Parser_loop_control_stmt(p)
		if (_t406.is_error) {
			return _t406
		}
		_t403 = _t406.data
	} else if (eq(p.tok, bait__token__Token.key_for)) {
			let _t407 = bait__parser__Parser_for_loop(p, from_js_string(""))
		if (_t407.is_error) {
			return _t407
		}
		_t403 = _t407.data
	} else if (eq(p.tok, bait__token__Token.key_if)) {
			let _t408 = bait__parser__Parser_if_match(p, false)
		if (_t408.is_error) {
			return _t408
		}
		_t403 = _t408.data
	} else if (eq(p.tok, bait__token__Token.key_match)) {
			let _t409 = bait__parser__Parser_match_as_if_expr(p, false)
		if (_t409.is_error) {
			return _t409
		}
		_t403 = _t409.data
	} else if (eq(p.tok, bait__token__Token.key_mut)) {
			let _t410 = bait__parser__Parser_assign_stmt(p)
		if (_t410.is_error) {
			return _t410
		}
		_t403 = _t410.data
	} else if (eq(p.tok, bait__token__Token.key_return)) {
			let _t411 = bait__parser__Parser_return_stmt(p)
		if (_t411.is_error) {
			return _t411
		}
		_t403 = _t411.data
	} else {
			let _t412 = bait__parser__Parser_expr_stmt(p)
		if (_t412.is_error) {
			return _t412
		}
		_t403 = _t412.data
	}
	return new Result({ data: _t403 })
}

function bait__parser__Parser_stmt_with_name(p) {
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.colon)) {
		const label = p.val
		bait__parser__Parser_next(p)
		bait__parser__Parser_next(p)
		let _t414 = bait__parser__Parser_for_loop(p, label)
		if (_t414.is_error) {
			return _t414
		}
		return new Result({ data: _t414.data })
	}
	let _t415 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t415.is_error) {
		return _t415
	}
	const left = _t415.data
	if (bait__token__Token_is_assign(p.tok)) {
		let _t417 = bait__parser__Parser_partial_assign_stmt(p, left)
		if (_t417.is_error) {
			return _t417
		}
		return new Result({ data: _t417.data })
	}
	return new Result({ data: new bait__ast__ExprStmt({ expr: left }) })
}

function bait__parser__Parser_assert_stmt(p) {
	bait__parser__Parser_next(p)
	const pos = p.pos
	let _t418 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t418.is_error) {
		return _t418
	}
	const expr = _t418.data
	return new Result({ data: new bait__ast__AssertStmt({ expr: expr, pos: pos }) })
}

function bait__parser__Parser_assign_stmt(p) {
	let _t419 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t419.is_error) {
		return _t419
	}
	const left = _t419.data
	let _t420 = bait__parser__Parser_partial_assign_stmt(p, left)
	if (_t420.is_error) {
		return _t420
	}
	return new Result({ data: _t420.data })
}

function bait__parser__Parser_partial_assign_stmt(p, left) {
	let op = p.tok
	bait__parser__Parser_next(p)
	let _t421 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t421.is_error) {
		return _t421
	}
	let right = _t421.data
	if (bait__token__Token_is_math_assign(op)) {
		right = new bait__ast__InfixExpr({ op: bait__token__Token_math_from_assign(op), left: left, right: right })
		op = bait__token__Token.assign
	}
	return new Result({ data: new bait__ast__AssignStmt({ op: op, left: left, right: right, pos: (left).pos }) })
}

function bait__parser__Parser_const_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	let _t423 = bait__parser__Parser_parse_lang(p)
	if (_t423.is_error) {
		return _t423
	}
	const lang = _t423.data
	let name = from_js_string("")
	if (eq(lang, bait__ast__Language.js) && eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
		let _t425 = bait__parser__Parser_check_name(p)
		if (_t425.is_error) {
			return _t425
		}
		name = string_add(_t425.data, from_js_string("."))
		bait__parser__Parser_next(p)
	}
	let _t426 = bait__parser__Parser_check_name(p)
	if (_t426.is_error) {
		return _t426
	}
	name = string_add(name, _t426.data)
	if (eq(lang, bait__ast__Language.bait)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	let _t428 = bait__parser__Parser_check(p, bait__token__Token.decl_assign)
	if (_t428.is_error) {
		return _t428
	}
_t428.data
	let expr = bait__ast__empty_expr()
	let typ = bait__ast__PLACEHOLDER_TYPE
	if (eq(lang, bait__ast__Language.bait)) {
		let _t430 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t430.is_error) {
			return _t430
		}
		expr = _t430.data
		typ = bait__parser__Parser_infer_expr_type(p, expr)
	} else {
		let _t431 = bait__parser__Parser_parse_type(p)
		if (_t431.is_error) {
			return _t431
		}
		typ = _t431.data
	}
	bait__ast__Scope_register(p.table.global_scope, bait__ast__Language_prepend_to(lang, name), new bait__ast__ScopeObject({ typ: typ, kind: bait__ast__ObjectKind.constant, is_pub: is_pub, pkg: p.pkg_name, expr: expr }))
	return new Result({ data: new bait__ast__ConstDecl({ name: name, expr: expr, typ: typ, pos: pos, lang: lang }) })
}

function bait__parser__Parser_loop_control_stmt(p) {
	const pos = p.pos
	const kind = p.tok
	bait__parser__Parser_next(p)
	let _t432 = undefined
	if (eq(p.tok, bait__token__Token.semicolon)) {
		_t432 = from_js_string("")
	} else {
			let _t433 = bait__parser__Parser_check_name(p)
		if (_t433.is_error) {
			return _t433
		}
		_t432 = _t433.data
	}
	const label = _t432
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new Result({ data: new bait__ast__LoopControlStmt({ kind: kind, label: label, pos: pos }) })
}

function bait__parser__Parser_expr_stmt(p) {
	let _t434 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t434.is_error) {
		return _t434
	}
	const expr = _t434.data
	return new Result({ data: new bait__ast__ExprStmt({ expr: expr }) })
}

function bait__parser__Parser_enum_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	let _t435 = bait__parser__Parser_parse_lang(p)
	if (_t435.is_error) {
		return _t435
	}
	const lang = _t435.data
	let _t436 = bait__parser__Parser_check_name(p)
	if (_t436.is_error) {
		return _t436
	}
	let name = _t436.data
	let _t437 = undefined
	if (eq(lang, bait__ast__Language.bait)) {
		_t437 = bait__parser__Parser_prepend_pkg(p, name)
	} else {
		_t437 = bait__ast__Language_prepend_to(lang, name)
	}
	name = _t437
	let _t438 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_t438.is_error) {
		return _t438
	}
_t438.data
	let variants = new bait_Array({ data: [], length: 0 })
	let fields = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rcur)) {
		const fpos = p.pos
		let _t439 = bait__parser__Parser_check_name(p)
		if (_t439.is_error) {
			return _t439
		}
		const fname = _t439.data
		let expr = new bait__ast__EmptyExpr({})
		if (eq(p.tok, bait__token__Token.decl_assign)) {
			bait__parser__Parser_next(p)
			let _t441 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
			if (_t441.is_error) {
				return _t441
			}
			expr = _t441.data
		}
		Array_push(variants, fname)
		Array_push(fields, new bait__ast__EnumField({ name: fname, expr: expr, pos: fpos }))
	}
	let _t442 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_t442.is_error) {
		return _t442
	}
_t442.data
	if (bait__ast__Table_type_exists(p.table, name)) {
		Array_push(p.table.redefined_types, name)
	}
	bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ name: name, is_pub: is_pub, pkg: p.pkg_name, kind: bait__ast__TypeKind.enum_, info: new bait__ast__EnumInfo({ vals: variants }) }))
	return new Result({ data: new bait__ast__EnumDecl({ lang: lang, name: name, fields: fields, pos: pos }) })
}

function bait__parser__Parser_global_decl(p) {
	const pos = p.pos
	let _t444 = bait__parser__Parser_check(p, bait__token__Token.key_global)
	if (_t444.is_error) {
		return _t444
	}
_t444.data
	let _t445 = bait__parser__Parser_check_name(p)
	if (_t445.is_error) {
		return _t445
	}
	const name = bait__parser__Parser_prepend_pkg(p, _t445.data)
	let _t446 = bait__parser__Parser_check(p, bait__token__Token.decl_assign)
	if (_t446.is_error) {
		return _t446
	}
_t446.data
	let _t447 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t447.is_error) {
		return _t447
	}
	const expr = _t447.data
	const typ = bait__parser__Parser_infer_expr_type(p, expr)
	bait__ast__Scope_register(p.table.global_scope, name, new bait__ast__ScopeObject({ is_mut: true, typ: typ, kind: bait__ast__ObjectKind.global_ }))
	return new Result({ data: new bait__ast__GlobalDecl({ name: name, expr: expr, pos: pos }) })
}

function bait__parser__Parser_interface_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	let _t448 = bait__parser__Parser_check(p, bait__token__Token.key_interface)
	if (_t448.is_error) {
		return _t448
	}
_t448.data
	let _t449 = bait__parser__Parser_parse_lang(p)
	if (_t449.is_error) {
		return _t449
	}
	const lang = _t449.data
	let _t450 = bait__parser__Parser_check_name(p)
	if (_t450.is_error) {
		return _t450
	}
	let name = bait__ast__Language_prepend_to(lang, _t450.data)
	if (!eq(lang, bait__ast__Language.bait) && eq(p.tok, bait__token__Token.dot)) {
		name = string_add(name, from_js_string("."))
		bait__parser__Parser_next(p)
		let _t452 = bait__parser__Parser_check_name(p)
		if (_t452.is_error) {
			return _t452
		}
		name = string_add(name, _t452.data)
	}
	if (bait__ast__Table_type_exists(p.table, name)) {
		Array_push(p.table.redefined_types, name)
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
	let _t454 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_t454.is_error) {
		return _t454
	}
_t454.data
	while (!eq(p.tok, bait__token__Token.rcur)) {
		if (eq(p.tok, bait__token__Token.key_mut)) {
			if (!eq(mut_idx, -1)) {
				let _t457 = bait__parser__Parser_error(p, from_js_string("redefinition of \"mut\" section"))
				if (_t457.is_error) {
					return _t457
				}
_t457.data
				return new Result({ data: new bait__ast__InterfaceDecl({}) })
			}
			bait__parser__Parser_next(p)
			let _t458 = bait__parser__Parser_check(p, bait__token__Token.colon)
			if (_t458.is_error) {
				return _t458
			}
_t458.data
			mut_idx = fields.length
			field_is_mut = true
			field_is_pub = false
			field_is_global = false
		} else if (eq(p.tok, bait__token__Token.key_pub)) {
			bait__parser__Parser_next(p)
			if (eq(p.tok, bait__token__Token.key_mut)) {
				if (!eq(pub_mut_idx, -1)) {
					let _t461 = bait__parser__Parser_error(p, from_js_string("redefinition of \"pub mut\" section"))
					if (_t461.is_error) {
						return _t461
					}
_t461.data
					return new Result({ data: new bait__ast__InterfaceDecl({}) })
				}
				bait__parser__Parser_next(p)
				pub_mut_idx = fields.length
				field_is_mut = true
				field_is_pub = true
				field_is_global = false
			} else {
				if (!eq(pub_idx, -1)) {
					let _t463 = bait__parser__Parser_error(p, from_js_string("redefinition of \"pub\" section"))
					if (_t463.is_error) {
						return _t463
					}
_t463.data
					return new Result({ data: new bait__ast__InterfaceDecl({}) })
				}
				pub_idx = fields.length
				field_is_mut = false
				field_is_pub = true
				field_is_global = false
			}
			let _t464 = bait__parser__Parser_check(p, bait__token__Token.colon)
			if (_t464.is_error) {
				return _t464
			}
_t464.data
		} else if (eq(p.tok, bait__token__Token.key_global)) {
			if (!eq(global_idx, -1)) {
				let _t466 = bait__parser__Parser_error(p, from_js_string("redefinition of \"global\" section"))
				if (_t466.is_error) {
					return _t466
				}
_t466.data
				return new Result({ data: new bait__ast__InterfaceDecl({}) })
			}
			bait__parser__Parser_next(p)
			let _t467 = bait__parser__Parser_check(p, bait__token__Token.colon)
			if (_t467.is_error) {
				return _t467
			}
_t467.data
			global_idx = fields.length
			field_is_mut = true
			field_is_pub = true
			field_is_global = true
		}
		let _t468 = bait__parser__Parser_check_name(p)
		if (_t468.is_error) {
			return _t468
		}
		const fname = _t468.data
		if (eq(p.tok, bait__token__Token.lpar)) {
			let _t470 = bait__parser__Parser_interface_method(p, fname, typ)
			if (_t470.is_error) {
				return _t470
			}
			const m = _t470.data
			Array_push(methods, m)
			Array_push(tsym.methods, m)
			continue
		}
		let _t471 = bait__parser__Parser_parse_type(p)
		if (_t471.is_error) {
			return _t471
		}
		Array_push(fields, new bait__ast__StructField({ name: fname, typ: _t471.data, is_mut: field_is_mut, is_pub: field_is_pub, is_global: field_is_global }))
	}
	bait__parser__Parser_next(p)
	tsym.info = new bait__ast__StructInfo({ fields: fields })
	return new Result({ data: new bait__ast__InterfaceDecl({ lang: lang, name: name, typ: typ, methods: methods, fields: fields, pos: pos }) })
}

function bait__parser__Parser_interface_method(p, name, rec_type) {
	let _t472 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_t472.is_error) {
		return _t472
	}
_t472.data
	let params = new bait_Array({ data: [new bait__ast__Param({ name: from_js_string("_"), typ: rec_type })], length: 1 })
	let _t473 = bait__parser__Parser_fun_params(p)
	if (_t473.is_error) {
		return _t473
	}
	Array_push_many(params, _t473.data)
	const par_line = p.pos.line
	let _t474 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_t474.is_error) {
		return _t474
	}
_t474.data
	let return_type = bait__ast__VOID_TYPE
	if (eq(p.pos.line, par_line)) {
		let _t476 = bait__parser__Parser_parse_type(p)
		if (_t476.is_error) {
			return _t476
		}
		return_type = _t476.data
	}
	return new Result({ data: new bait__ast__FunDecl({ lang: bait__ast__Language.js, name: name, params: params, return_type: return_type, is_pub: true, is_method: true }) })
}

function bait__parser__Parser_return_stmt(p) {
	const pos = p.pos
	let _t477 = bait__parser__Parser_check(p, bait__token__Token.key_return)
	if (_t477.is_error) {
		return _t477
	}
_t477.data
	let expr = new bait__ast__Void({})
	if (!eq(p.tok, bait__token__Token.semicolon)) {
		let _t479 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t479.is_error) {
			return _t479
		}
		expr = _t479.data
	}
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new Result({ data: new bait__ast__ReturnStmt({ expr: expr, pos: pos }) })
}

function bait__parser__Parser_type_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	let _t480 = bait__parser__Parser_parse_lang(p)
	if (_t480.is_error) {
		return _t480
	}
	const lang = _t480.data
	let _t481 = bait__parser__Parser_check_name(p)
	if (_t481.is_error) {
		return _t481
	}
	let name = _t481.data
	if (eq(lang, bait__ast__Language.bait)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	} else {
		name = bait__ast__Language_prepend_to(lang, name)
	}
	if (bait__ast__Table_type_exists(p.table, name) && !string_eq(p.pkg_name, from_js_string("builtin"))) {
		Array_push(p.table.redefined_types, name)
	}
	let _t484 = bait__parser__Parser_check(p, bait__token__Token.decl_assign)
	if (_t484.is_error) {
		return _t484
	}
_t484.data
	const is_fun_type = eq(p.tok, bait__token__Token.key_fun)
	let variants = new bait_Array({ data: [], length: 0 })
	let _t485 = bait__parser__Parser_parse_type(p)
	if (_t485.is_error) {
		return _t485
	}
	Array_push(variants, _t485.data)
	if (is_fun_type) {
		const sym = bait__ast__Table_get_sym(p.table, Array_get(variants, 0))
		const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.fun_, name: name, is_pub: is_pub, pkg: p.pkg_name, info: sym.info }))
		return new Result({ data: new bait__ast__TypeDecl({ lang: lang, name: name, typ: typ, pos: pos }) })
	}
	if (!eq(p.tok, bait__token__Token.pipe)) {
		const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.alias_type, name: name, parent: Array_get(variants, 0), is_pub: is_pub, pkg: p.pkg_name }))
		return new Result({ data: new bait__ast__TypeDecl({ lang: lang, name: name, typ: typ, pos: pos }) })
	}
	while (eq(p.tok, bait__token__Token.pipe)) {
		bait__parser__Parser_next(p)
		let _t488 = bait__parser__Parser_parse_type(p)
		if (_t488.is_error) {
			return _t488
		}
		Array_push(variants, _t488.data)
	}
	const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.sum_type, name: name, is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__SumTypeInfo({ variants: variants }) }))
	return new Result({ data: new bait__ast__TypeDecl({ lang: lang, name: name, typ: typ, pos: pos }) })
}


function bait__parser__Parser_struct_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	let _t489 = bait__parser__Parser_check(p, bait__token__Token.key_struct)
	if (_t489.is_error) {
		return _t489
	}
_t489.data
	let _t490 = bait__parser__Parser_parse_lang(p)
	if (_t490.is_error) {
		return _t490
	}
	const lang = _t490.data
	let _t491 = bait__parser__Parser_check_name(p)
	if (_t491.is_error) {
		return _t491
	}
	let name = _t491.data
	if (!eq(lang, bait__ast__Language.bait)) {
		name = bait__ast__Language_prepend_to(lang, name)
	}
	let _t493 = bait__parser__Parser_generic_type_names(p)
	if (_t493.is_error) {
		return _t493
	}
	const generic_names = _t493.data
	let mut_idx = -1
	let pub_idx = -1
	let pub_mut_idx = -1
	let global_idx = -1
	let field_is_mut = false
	let field_is_pub = false
	let field_is_global = false
	let fields = new bait_Array({ data: [], length: 0 })
	let _t494 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_t494.is_error) {
		return _t494
	}
_t494.data
	while (!eq(p.tok, bait__token__Token.rcur)) {
		if (eq(p.tok, bait__token__Token.key_mut)) {
			if (!eq(mut_idx, -1)) {
				let _t497 = bait__parser__Parser_error(p, from_js_string("redefinition of \"mut\" section"))
				if (_t497.is_error) {
					return _t497
				}
_t497.data
				return new Result({ data: new bait__ast__StructDecl({}) })
			}
			bait__parser__Parser_next(p)
			let _t498 = bait__parser__Parser_check(p, bait__token__Token.colon)
			if (_t498.is_error) {
				return _t498
			}
_t498.data
			mut_idx = fields.length
			field_is_mut = true
			field_is_pub = false
			field_is_global = false
		} else if (eq(p.tok, bait__token__Token.key_pub)) {
			bait__parser__Parser_next(p)
			if (eq(p.tok, bait__token__Token.key_mut)) {
				if (!eq(pub_mut_idx, -1)) {
					let _t501 = bait__parser__Parser_error(p, from_js_string("redefinition of \"pub mut\" section"))
					if (_t501.is_error) {
						return _t501
					}
_t501.data
					return new Result({ data: new bait__ast__StructDecl({}) })
				}
				bait__parser__Parser_next(p)
				pub_mut_idx = fields.length
				field_is_mut = true
				field_is_pub = true
				field_is_global = false
			} else {
				if (!eq(pub_idx, -1)) {
					let _t503 = bait__parser__Parser_error(p, from_js_string("redefinition of \"pub\" section"))
					if (_t503.is_error) {
						return _t503
					}
_t503.data
					return new Result({ data: new bait__ast__StructDecl({}) })
				}
				pub_idx = fields.length
				field_is_mut = false
				field_is_pub = true
				field_is_global = false
			}
			let _t504 = bait__parser__Parser_check(p, bait__token__Token.colon)
			if (_t504.is_error) {
				return _t504
			}
_t504.data
		} else if (eq(p.tok, bait__token__Token.key_global)) {
			if (!eq(global_idx, -1)) {
				let _t506 = bait__parser__Parser_error(p, from_js_string("redefinition of \"global\" section"))
				if (_t506.is_error) {
					return _t506
				}
_t506.data
				return new Result({ data: new bait__ast__StructDecl({}) })
			}
			bait__parser__Parser_next(p)
			let _t507 = bait__parser__Parser_check(p, bait__token__Token.colon)
			if (_t507.is_error) {
				return _t507
			}
_t507.data
			global_idx = fields.length
			field_is_mut = true
			field_is_pub = true
			field_is_global = true
		}
		let _t508 = bait__parser__Parser_parse_attributes(p)
		if (_t508.is_error) {
			return _t508
		}
_t508.data
		let _t509 = bait__parser__Parser_struct_decl_field(p, field_is_mut, field_is_pub, field_is_global)
		if (_t509.is_error) {
			return _t509
		}
		Array_push(fields, _t509.data)
	}
	let _t510 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_t510.is_error) {
		return _t510
	}
_t510.data
	const name_with_pkg = bait__parser__Parser_prepend_pkg(p, name)
	if (bait__ast__Table_type_exists(p.table, name_with_pkg) && !string_eq(p.pkg_name, from_js_string("builtin"))) {
		Array_push(p.table.redefined_types, name_with_pkg)
	}
	const tsym = new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.struct_, name: name_with_pkg, is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__StructInfo({ fields: fields, generic_names: generic_names }) })
	const typ = bait__ast__Table_register_sym(p.table, tsym)
	return new Result({ data: new bait__ast__StructDecl({ lang: lang, pkg_prefix: bait__parser__Parser_prepend_pkg(p, from_js_string("")), name: name, typ: typ, fields: fields, generic_names: generic_names, pos: pos }) })
}

function bait__parser__Parser_struct_decl_field(p, is_mut, is_pub, is_global) {
	const pos = p.pos
	let _t512 = bait__parser__Parser_check_name(p)
	if (_t512.is_error) {
		return _t512
	}
	const fname = _t512.data
	let _t513 = bait__parser__Parser_parse_type(p)
	if (_t513.is_error) {
		return _t513
	}
	const ftyp = _t513.data
	let expr = new bait__ast__EmptyExpr({})
	if (eq(p.tok, bait__token__Token.decl_assign)) {
		bait__parser__Parser_next(p)
		let _t515 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_t515.is_error) {
			return _t515
		}
		expr = _t515.data
	}
	const field = new bait__ast__StructField({ name: fname, typ: ftyp, expr: expr, pos: pos, is_mut: is_mut, is_pub: is_pub, is_global: is_global, attrs: p.attributes })
	p.attributes = new bait_Array({ data: [], length: 0 })
	return new Result({ data: field })
}

function bait__parser__Parser_struct_init(p) {
	const pos = p.pos
	const name = p.val
	let _t516 = bait__parser__Parser_parse_type(p)
	if (_t516.is_error) {
		return _t516
	}
	let typ = _t516.data
	let _t517 = bait__parser__Parser_concrete_types(p)
	if (_t517.is_error) {
		return _t517
	}
	const conc_types = _t517.data
	if (i32(conc_types.length > 0)) {
		const parent = bait__ast__Table_get_sym(p.table, typ)
		typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.generic_inst, parent: typ, pkg: parent.pkg, info: new bait__ast__GenericInst({ concrete_types: conc_types }) }))
	}
	let _t519 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_t519.is_error) {
		return _t519
	}
_t519.data
	let fields = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rcur)) {
		let _t520 = bait__parser__Parser_struct_init_field(p)
		if (_t520.is_error) {
			return _t520
		}
		Array_push(fields, _t520.data)
	}
	let _t521 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_t521.is_error) {
		return _t521
	}
_t521.data
	return new Result({ data: new bait__ast__StructInit({ name: name, typ: typ, fields: fields, pos: pos, concrete_types: conc_types }) })
}

function bait__parser__Parser_struct_init_field(p) {
	const pos = p.pos
	let _t522 = bait__parser__Parser_check_name(p)
	if (_t522.is_error) {
		return _t522
	}
	const name = _t522.data
	let _t523 = bait__parser__Parser_check(p, bait__token__Token.assign)
	if (_t523.is_error) {
		return _t523
	}
_t523.data
	let _t524 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_t524.is_error) {
		return _t524
	}
	const expr = _t524.data
	return new Result({ data: new bait__ast__StructInitField({ name: name, expr: expr, pos: pos }) })
}


function bait__parser__Parser_parse_type(p) {
	if (eq(p.tok, bait__token__Token.excl)) {
		bait__parser__Parser_next(p)
		if (eq(p.tok, bait__token__Token.lcur)) {
			return new Result({ data: bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.result, name: from_js_string("Result[void]"), parent: bait__ast__VOID_TYPE })) })
		}
		let _t527 = bait__parser__Parser_parse_type(p)
		if (_t527.is_error) {
			return _t527
		}
		const typ = _t527.data
		const tsym = bait__ast__Table_get_sym(p.table, typ)
		return new Result({ data: bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.result, name: string_add(string_add(from_js_string("Result["), tsym.name), from_js_string("]")), parent: typ })) })
	}
	let nr_amp = 0
	while (eq(p.tok, bait__token__Token.amp)) {
		bait__parser__Parser_next(p)
		nr_amp = i32(nr_amp + 1)
	}
	if (eq(p.tok, bait__token__Token.lsqr)) {
		bait__parser__Parser_next(p)
		let _t529 = bait__parser__Parser_check(p, bait__token__Token.rsqr)
		if (_t529.is_error) {
			return _t529
		}
_t529.data
		let _t530 = bait__parser__Parser_parse_type(p)
		if (_t530.is_error) {
			return _t530
		}
		const elem_type = _t530.data
		return new Result({ data: bait__ast__Table_find_or_register_array(p.table, elem_type) })
	}
	if (eq(p.tok, bait__token__Token.key_fun)) {
		let _t532 = bait__parser__Parser_parse_fun_type(p)
		if (_t532.is_error) {
			return _t532
		}
		return new Result({ data: _t532.data })
	}
	if (string_eq(p.val, from_js_string("map"))) {
		bait__parser__Parser_next(p)
		let _t534 = bait__parser__Parser_parse_map_type(p)
		if (_t534.is_error) {
			return _t534
		}
		return new Result({ data: _t534.data })
	}
	if (eq(p.tok, bait__token__Token.semicolon)) {
		bait__parser__Parser_next(p)
		return new Result({ data: bait__ast__PLACEHOLDER_TYPE })
	}
	let _t536 = bait__parser__Parser_parse_lang(p)
	if (_t536.is_error) {
		return _t536
	}
	const lang = _t536.data
	let _t537 = bait__parser__Parser_parse_name_type(p, lang)
	if (_t537.is_error) {
		return _t537
	}
	let typ = _t537.data
	if (i32(nr_amp > 0)) {
		typ = bait__ast__Type_set_nr_amp(typ, nr_amp)
	}
	return new Result({ data: typ })
}

function bait__parser__Parser_parse_name_type(p, lang) {
	if (!eq(p.tok, bait__token__Token.name)) {
		return new Result({ data: bait__ast__PLACEHOLDER_TYPE })
	}
	let _t540 = bait__parser__Parser_check_name(p)
	if (_t540.is_error) {
		return _t540
	}
	let name = bait__ast__Language_prepend_to(lang, _t540.data)
	if (eq(p.tok, bait__token__Token.dot)) {
		if (eq(lang, bait__ast__Language.js)) {
			bait__parser__Parser_next(p)
			let _t543 = bait__parser__Parser_check_name(p)
			if (_t543.is_error) {
				return _t543
			}
			name = string_add(name, string_add(from_js_string("."), _t543.data))
		} else {
			const pkg = map_get_set(p.import_aliases, name, from_js_string(""))
			bait__parser__Parser_next(p)
			let _t544 = bait__parser__Parser_check_name(p)
			if (_t544.is_error) {
				return _t544
			}
			name = string_add(string_add(pkg, from_js_string(".")), _t544.data)
		}
	} else if (i32(p.expr_pkg.length > 0)) {
		name = bait__parser__Parser_prepend_expr_pkg(p, name)
	} else if (!string_contains(name, from_js_string(".")) && !map_contains(p.table.type_idxs, name)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	let _t545 = undefined
	if (string_eq(name, from_js_string("i8"))) {
		_t545 = bait__ast__I8_TYPE
	} else if (string_eq(name, from_js_string("i16"))) {
		_t545 = bait__ast__I16_TYPE
	} else if (string_eq(name, from_js_string("i32"))) {
		_t545 = bait__ast__I32_TYPE
	} else if (string_eq(name, from_js_string("i64"))) {
		_t545 = bait__ast__I64_TYPE
	} else if (string_eq(name, from_js_string("u8"))) {
		_t545 = bait__ast__U8_TYPE
	} else if (string_eq(name, from_js_string("u16"))) {
		_t545 = bait__ast__U16_TYPE
	} else if (string_eq(name, from_js_string("u32"))) {
		_t545 = bait__ast__U32_TYPE
	} else if (string_eq(name, from_js_string("u64"))) {
		_t545 = bait__ast__U64_TYPE
	} else if (string_eq(name, from_js_string("f32"))) {
		_t545 = bait__ast__F32_TYPE
	} else if (string_eq(name, from_js_string("f64"))) {
		_t545 = bait__ast__F64_TYPE
	} else if (string_eq(name, from_js_string("bool"))) {
		_t545 = bait__ast__BOOL_TYPE
	} else if (string_eq(name, from_js_string("string"))) {
		_t545 = bait__ast__STRING_TYPE
	} else if (string_eq(name, from_js_string("any"))) {
		_t545 = bait__ast__ANY_TYPE
	} else {
		_t545 = bait__ast__Table_find_type_or_add_placeholder(p.table, name, p.pkg_name)
	}
	return new Result({ data: _t545 })
}

function bait__parser__Parser_parse_fun_type(p) {
	bait__parser__Parser_next(p)
	let _t546 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_t546.is_error) {
		return _t546
	}
_t546.data
	let param_types = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rpar)) {
		let _t547 = bait__parser__Parser_parse_type(p)
		if (_t547.is_error) {
			return _t547
		}
		const typ = _t547.data
		Array_push(param_types, typ)
		if (!eq(p.tok, bait__token__Token.rpar)) {
			let _t549 = bait__parser__Parser_check(p, bait__token__Token.comma)
			if (_t549.is_error) {
				return _t549
			}
_t549.data
		}
	}
	const par_line = p.pos.line
	let _t550 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_t550.is_error) {
		return _t550
	}
_t550.data
	let return_type = bait__ast__VOID_TYPE
	if (eq(p.pos.line, par_line)) {
		let _t552 = bait__parser__Parser_parse_type(p)
		if (_t552.is_error) {
			return _t552
		}
		return_type = _t552.data
	}
	return new Result({ data: bait__ast__Table_find_or_register_fun(p.table, param_types, return_type, true) })
}

function bait__parser__Parser_parse_map_type(p) {
	if (eq(p.tok, bait__token__Token.rpar) && string_eq(p.pkg_name, from_js_string("builtin"))) {
		return new Result({ data: bait__ast__MAP_TYPE })
	}
	let _t554 = bait__parser__Parser_check(p, bait__token__Token.lsqr)
	if (_t554.is_error) {
		return _t554
	}
_t554.data
	let _t555 = bait__parser__Parser_parse_type(p)
	if (_t555.is_error) {
		return _t555
	}
	const key_type = _t555.data
	if (!eq(key_type, bait__ast__STRING_TYPE)) {
		let _t557 = bait__parser__Parser_error(p, from_js_string("map key type must be string"))
		if (_t557.is_error) {
			return _t557
		}
_t557.data
	}
	let _t558 = bait__parser__Parser_check(p, bait__token__Token.rsqr)
	if (_t558.is_error) {
		return _t558
	}
_t558.data
	let _t559 = bait__parser__Parser_parse_type(p)
	if (_t559.is_error) {
		return _t559
	}
	const val_type = _t559.data
	return new Result({ data: bait__ast__Table_find_or_register_map(p.table, key_type, val_type) })
}

function bait__parser__Parser_generic_type_names(p) {
	if (!eq(p.tok, bait__token__Token.lsqr)) {
		return new Result({ data: new bait_Array({ data: [], length: 0 }) })
	}
	bait__parser__Parser_next(p)
	let names = new bait_Array({ data: [], length: 0 })
	while (true) {
		let _t561 = bait__parser__Parser_check_name(p)
		if (_t561.is_error) {
			return _t561
		}
		const name = _t561.data
		if (i32(name.length > 1)) {
			let _t563 = bait__parser__Parser_error(p, from_js_string("generic types names have to be exactly one character"))
			if (_t563.is_error) {
				return _t563
			}
_t563.data
		}
		if (!u8_is_upper(string_get(name, 0))) {
			let _t565 = bait__parser__Parser_error(p, from_js_string("generic type names have to be capital letters"))
			if (_t565.is_error) {
				return _t565
			}
_t565.data
		}
		Array_push(names, name)
		const idx = bait__ast__Table_get_idx(p.table, name)
		if (eq(idx, 0)) {
			bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ name: name, kind: bait__ast__TypeKind.generic, is_pub: true }))
		}
		if (eq(p.tok, bait__token__Token.rsqr)) {
			break
		}
		let _t568 = bait__parser__Parser_check(p, bait__token__Token.comma)
		if (_t568.is_error) {
			return _t568
		}
_t568.data
	}
	bait__parser__Parser_next(p)
	return new Result({ data: names })
}

function bait__parser__Parser_concrete_types(p) {
	if (!eq(p.tok, bait__token__Token.lsqr)) {
		return new Result({ data: new bait_Array({ data: [], length: 0 }) })
	}
	bait__parser__Parser_next(p)
	let types = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rsqr)) {
		let _t570 = bait__parser__Parser_parse_type(p)
		if (_t570.is_error) {
			return _t570
		}
		Array_push(types, _t570.data)
		if (!eq(p.tok, bait__token__Token.rsqr)) {
			let _t572 = bait__parser__Parser_check(p, bait__token__Token.comma)
			if (_t572.is_error) {
				return _t572
			}
_t572.data
		}
	}
	bait__parser__Parser_next(p)
	return new Result({ data: types })
}

function bait__parser__Parser_infer_expr_type(p, expr) {
	let _t573 = undefined
	if (expr instanceof bait__ast__BoolLiteral) {
		_t573 = bait__ast__BOOL_TYPE
	} else if (expr instanceof bait__ast__CharLiteral) {
		_t573 = bait__ast__U8_TYPE
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		_t573 = bait__ast__I32_TYPE
	} else if (expr instanceof bait__ast__StringLiteral) {
		_t573 = bait__ast__STRING_TYPE
	} else if (expr instanceof bait__ast__StructInit) {
		_t573 = expr.typ
	} else if (expr instanceof bait__ast__MapInit) {
		_t573 = expr.typ
	} else {
		_t573 = bait__ast__VOID_TYPE
	}
	return _t573
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
		const obj = bait__ast__Scope_get(c.scope, left.name)
		let _t578 = undefined
		if (eq(obj.kind, bait__ast__ObjectKind.package_)) {
			_t578 = from_js_string(`cannot shadow import "${left.name.str}"`)
		} else {
			_t578 = from_js_string(`redefinition of ${left.name.str}`)
		}
		const msg = _t578
		bait__checker__Checker_error(c, msg, node.pos)
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
	if ((!field.is_mut || !string_eq(sym.pkg, c.pkg)) && !field.is_global) {
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
const bait__checker__FUN_ATTRS = new map({ data: new Map([[from_js_string("deprecated").str, bait__checker__AttrValue.optional], [from_js_string("deprecated_after").str, bait__checker__AttrValue.required], [from_js_string("export").str, bait__checker__AttrValue.required], [from_js_string("noreturn").str, bait__checker__AttrValue.none], [from_js_string("overload").str, bait__checker__AttrValue.required]]), length: 5 })
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
	for (let _t592 = 0; _t592 < node.attrs.length; _t592++) {
		const attr = Array_get(node.attrs, _t592)
		if (!bait__checker__Checker_check_attribute(c, attr, bait__checker__FUN_ATTRS)) {
			continue
		}
		if (string_eq(attr.name, from_js_string("overload"))) {
			bait__checker__Checker_attr_overload(c, node, attr)
		} else if (string_eq(attr.name, from_js_string("export"))) {
			bait__checker__Checker_attr_export(c, attr)
		}
	}
}

function bait__checker__Checker_attr_overload(c, node, attr) {
	if (!node.is_method) {
		bait__checker__Checker_warn(c, from_js_string("operator overloading can only be used on methods"), attr.pos)
		return 
	}
	if (Array_contains_string(new bait_Array({ data: [from_js_string("!="), from_js_string(">"), from_js_string("<="), from_js_string(">=")], length: 4 }), attr.value)) {
		bait__checker__Checker_error(c, from_js_string("cannot overload \"!=\", \">\", \"<=\" and \">=\" as they are generated from \"==\" and \"<\""), attr.pos)
		return 
	}
	const is_math_overload = Array_contains_string(new bait_Array({ data: [from_js_string("+"), from_js_string("-"), from_js_string("*"), from_js_string("/"), from_js_string("%")], length: 5 }), attr.value)
	if (!is_math_overload && !Array_contains_string(new bait_Array({ data: [from_js_string("=="), from_js_string("<")], length: 2 }), attr.value)) {
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
	} else if (string_eq(attr.value, from_js_string("=="))) {
		map_set(rec_sym.overloads, from_js_string("!="), node)
	}
}

function bait__checker__Checker_attr_export(c, attr) {
	if (Array_contains_string(c.export_names, attr.value)) {
		bait__checker__Checker_error(c, from_js_string(`@export name "${attr.value.str}" is already used`), attr.pos)
		return 
	}
	Array_push(c.export_names, attr.value)
}

function bait__checker__Checker_check_fun_attrs_on_call(c, call, def) {
	let is_deprecated = false
	let depr_attr = new bait__ast__Attribute({})
	let depr_date_attr = new bait__ast__Attribute({})
	for (let _t601 = 0; _t601 < def.attrs.length; _t601++) {
		const attr = Array_get(def.attrs, _t601)
		if (string_eq(attr.name, from_js_string("deprecated_after"))) {
			depr_date_attr = attr
			is_deprecated = true
		}
		if (string_eq(attr.name, from_js_string("deprecated"))) {
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
	for (let _t607 = 0; _t607 < node.fields.length; _t607++) {
		const field = Array_get(node.fields, _t607)
		for (let _t608 = 0; _t608 < field.attrs.length; _t608++) {
			const attr = Array_get(field.attrs, _t608)
			if (!bait__checker__Checker_check_attribute(c, attr, bait__checker__STRUCT_FIELD_ATTRS)) {
				continue
			}
			if (string_eq(attr.name, from_js_string("required")) && !(field.expr instanceof bait__ast__EmptyExpr)) {
				bait__checker__Checker_error(c, from_js_string("@required on field with default value is redundant"), attr.pos)
			}
		}
	}
}


function bait__checker__Checker({ prefs = new bait__preference__Prefs({}), table = new bait__ast__Table({}), file = new bait__ast__File({}), scope = new bait__ast__Scope({}), path = from_js_string(""), pkg = from_js_string(""), has_main_pkg_files = false, has_main_fun = false, is_js_file = false, cur_fun = new bait__ast__FunDecl({}), cur_concrete_types = new bait_Array({ data: [], length: 0 }), need_generic_resolve = false, cur_generic_names = new bait_Array({ data: [], length: 0 }), expected_type = 0, is_lhs_assign = false, is_if_match_expr = false, is_sumtype_match = false, is_or_block = false, is_loop = false, returns = false, export_names = new bait_Array({ data: [], length: 0 }), redefined_funs = new bait_Array({ data: [], length: 0 }), infos = new bait_Array({ data: [], length: 0 }), warnings = new bait_Array({ data: [], length: 0 }), errors = new bait_Array({ data: [], length: 0 }) }) {
	this.prefs = prefs
	this.table = table
	this.file = file
	this.scope = scope
	this.path = path
	this.pkg = pkg
	this.has_main_pkg_files = has_main_pkg_files
	this.has_main_fun = has_main_fun
	this.is_js_file = is_js_file
	this.cur_fun = cur_fun
	this.cur_concrete_types = cur_concrete_types
	this.need_generic_resolve = need_generic_resolve
	this.cur_generic_names = cur_generic_names
	this.expected_type = expected_type
	this.is_lhs_assign = is_lhs_assign
	this.is_if_match_expr = is_if_match_expr
	this.is_sumtype_match = is_sumtype_match
	this.is_or_block = is_or_block
	this.is_loop = is_loop
	this.returns = returns
	this.export_names = export_names
	this.redefined_funs = redefined_funs
	this.infos = infos
	this.warnings = warnings
	this.errors = errors
}
function bait__checker__Checker_check_files(c, files) {
	for (let _t611 = 0; _t611 < files.length; _t611++) {
		const f = Array_get(files, _t611)
		bait__checker__Checker_check(c, f)
		f.infos = c.infos
		f.warnings = c.warnings
		f.errors = c.errors
		c.infos = new bait_Array({ data: [], length: 0 })
		c.warnings = new bait_Array({ data: [], length: 0 })
		c.errors = new bait_Array({ data: [], length: 0 })
	}
	let resolve_runs = 0
	while (c.need_generic_resolve && i32(resolve_runs < 100)) {
		c.need_generic_resolve = false
		for (let _t612 = 0; _t612 < files.length; _t612++) {
			const f = Array_get(files, _t612)
			if (eq(f.generic_funs.length, 0)) {
				continue
			}
			bait__checker__Checker_change_file(c, f)
			bait__checker__Checker_resolve_generics_funs(c)
		}
		resolve_runs = i32(resolve_runs + 1)
	}
	bait__checker__Checker_check_fun_redefinitions(c, files)
	bait__checker__Checker_check_type_redefinitions(c, files)
	if (c.prefs.is_library || c.prefs.is_test || c.prefs.is_script) {
		return 
	}
	if (!c.has_main_pkg_files) {
		bait__checker__Checker_generic_error(c, from_js_string("project must have a main package or be compiled as a library"))
	} else if (!c.has_main_fun) {
		bait__checker__Checker_generic_error(c, from_js_string("main package has no main function"))
	}
}

function bait__checker__Checker_change_file(c, file) {
	c.file = file
	c.path = file.path
	c.is_js_file = string_contains(c.path, from_js_string(".js."))
	c.pkg = file.pkg_name
	c.scope = new bait__ast__Scope({ parent: c.table.global_scope })
}

function bait__checker__Checker_check(c, file) {
	bait__checker__Checker_change_file(c, file)
	if (string_eq(c.pkg, from_js_string("main"))) {
		c.has_main_pkg_files = true
		bait__checker__Checker_check_main_fun(c, file.stmts)
	}
	bait__checker__Checker_check_imports(c, file.imports)
	bait__checker__Checker_stmts(c, file.stmts)
}

function bait__checker__Checker_check_imports(c, imports) {
	for (let _t617 = 0; _t617 < imports.length; _t617++) {
		const imp = Array_get(imports, _t617)
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
	Array_push(c.infos, new bait__errors__Message({ kind: bait__errors__Kind.info, path: c.path, pos: pos, title: from_js_string("info"), msg: msg }))
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


function bait__checker__Checker_comptime_var(c, node) {
	if (!Array_contains_string(bait__checker__SUPPORTED_COMPTIME_VARS, node.name)) {
		bait__checker__Checker_error(c, from_js_string(`unsupported comptime var "${node.name.str}"`), node.pos)
	}
	return bait__ast__STRING_TYPE
}

function bait__checker__Checker_comptime_if_condition(c, node) {
	if (node instanceof bait__ast__Ident) {
		if (string_eq(node.name, from_js_string("C"))) {
			return eq(c.prefs.backend, bait__preference__Backend.c)
		} else if (string_eq(node.name, from_js_string("JS"))) {
			return eq(c.prefs.backend, bait__preference__Backend.js)
		} else {
			bait__checker__Checker_error(c, from_js_string(`invalid $if condition "${node.name.str}"`), node.pos)
			return false
		}
	} else {
		bait__checker__Checker_error(c, from_js_string("invalid $if condition"), (node).pos)
	}
	return false
}


function bait__checker__Checker_expr(c, expr) {
	const expected_save = c.expected_type
	let _t622 = undefined
	if (expr instanceof bait__ast__AnonFun) {
		_t622 = bait__checker__Checker_anon_fun(c, expr)
	} else if (expr instanceof bait__ast__ArrayInit) {
		_t622 = bait__checker__Checker_array_init(c, expr)
	} else if (expr instanceof bait__ast__AsCast) {
		_t622 = bait__checker__Checker_as_cast(c, expr)
	} else if (expr instanceof bait__ast__BoolLiteral) {
		_t622 = bait__ast__BOOL_TYPE
	} else if (expr instanceof bait__ast__CallExpr) {
		_t622 = bait__checker__Checker_call_expr(c, expr)
	} else if (expr instanceof bait__ast__CharLiteral) {
		_t622 = bait__ast__U8_TYPE
	} else if (expr instanceof bait__ast__ComptimeVar) {
		_t622 = bait__checker__Checker_comptime_var(c, expr)
	} else if (expr instanceof bait__ast__EnumVal) {
		_t622 = bait__checker__Checker_enum_val(c, expr)
	} else if (expr instanceof bait__ast__FloatLiteral) {
		_t622 = bait__ast__F64_TYPE
	} else if (expr instanceof bait__ast__HashExpr) {
		_t622 = bait__checker__Checker_hash_expr(c, expr)
	} else if (expr instanceof bait__ast__Ident) {
		_t622 = bait__checker__Checker_ident(c, expr)
	} else if (expr instanceof bait__ast__IfMatch) {
		_t622 = bait__checker__Checker_if_match(c, expr)
	} else if (expr instanceof bait__ast__IndexExpr) {
		_t622 = bait__checker__Checker_index_expr(c, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		_t622 = bait__checker__Checker_infix_expr(c, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		_t622 = bait__checker__Checker_integer_literal(c, expr)
	} else if (expr instanceof bait__ast__MapInit) {
		_t622 = bait__checker__Checker_map_init(c, expr)
	} else if (expr instanceof bait__ast__ParExpr) {
		_t622 = bait__checker__Checker_par_expr(c, expr)
	} else if (expr instanceof bait__ast__PrefixExpr) {
		_t622 = bait__checker__Checker_prefix_expr(c, expr)
	} else if (expr instanceof bait__ast__SelectorExpr) {
		_t622 = bait__checker__Checker_selector_expr(c, expr)
	} else if (expr instanceof bait__ast__StringLiteral) {
		_t622 = bait__checker__Checker_string_literal(c, expr)
	} else if (expr instanceof bait__ast__StringInterLiteral) {
		_t622 = bait__checker__Checker_string_inter_literal(c, expr)
	} else if (expr instanceof bait__ast__StructInit) {
		_t622 = bait__checker__Checker_struct_init(c, expr)
	} else if (expr instanceof bait__ast__TypeOf) {
		_t622 = bait__checker__Checker_type_of(c, expr)
	} else if (expr instanceof bait__ast__Void) {
		_t622 = bait__ast__VOID_TYPE
	} else if (expr instanceof bait__ast__EmptyExpr) {
		_t622 = panic(from_js_string(`unexpected EmptyExpr at ${bait__token__Pos_str(expr.pos).str}`))
	}
	const t = _t622
	c.expected_type = expected_save
	return t
}

function bait__checker__Checker_array_init(c, node) {
	if (eq(node.exprs.length, 0)) {
		if (eq(node.elem_type, bait__ast__PLACEHOLDER_TYPE)) {
			if (eq(c.expected_type, bait__ast__VOID_TYPE)) {
				bait__checker__Checker_error(c, from_js_string("cannot infer type of empty array"), node.pos)
			}
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
			const pos = (e).pos
			bait__checker__Checker_error(c, from_js_string(`expected element type ${bait__ast__Table_type_name(c.table, node.elem_type).str}, got ${bait__ast__Table_type_name(c.table, typ).str}`), pos)
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
	if (!sym.is_pub && string_contains(sym.name, from_js_string(".")) && !string_eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`enum ${sym.name.str} is private`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	const info = sym.info
	if (!Array_contains_string(info.vals, node.val)) {
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
	if (eq(obj.kind, bait__ast__ObjectKind.constant) && !obj.is_pub && !string_eq(obj.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`const ${node.name.str} is private`), node.pos)
	}
	if (!eq(obj.typ, bait__ast__PLACEHOLDER_TYPE)) {
		node.is_mut = obj.is_mut
		return obj.typ
	}
	if (!string_contains(node.name, from_js_string(".")) && !string_eq(node.pkg, from_js_string("builtin")) && !string_eq(node.pkg, from_js_string("main"))) {
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

function bait__checker__Checker_integer_literal(c, node) {
	if (bait__ast__Type_is_int(c.expected_type)) {
		return c.expected_type
	}
	return bait__ast__I32_TYPE
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
	if (eq(node.op, bait__token__Token.mul)) {
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
	const gen_sym = bait__ast__Table_get_sym(c.table, node.expr_type)
	const sym = bait__ast__Table_get_final_sym(c.table, bait__ast__Table_unwrap_generic(c.table, gen_sym))
	if (Array_contains_bait__ast__TypeKind(new bait_Array({ data: [bait__ast__TypeKind.struct_, bait__ast__TypeKind.interface_, bait__ast__TypeKind.array, bait__ast__TypeKind.string, bait__ast__TypeKind.map], length: 5 }), sym.kind)) {
		const field = bait__ast__TypeSymbol_find_field(sym, node.field_name, c.table)
		if (eq(field.name.length, 0)) {
			bait__checker__Checker_error(c, from_js_string(`${sym.name.str} has no field ${node.field_name.str}`), node.pos)
			return bait__ast__PLACEHOLDER_TYPE
		}
		if (!field.is_pub && !string_eq(sym.pkg, c.pkg)) {
			bait__checker__Checker_error(c, from_js_string(`field ${sym.name.str}.${node.field_name.str} is private`), node.pos)
		}
		const fsym = bait__ast__Table_get_sym(c.table, field.typ)
		if (eq(fsym.kind, bait__ast__TypeKind.generic)) {
			const gen_info = gen_sym.info
			const info = sym.info
			return Array_get(gen_info.concrete_types, Array_index_string(info.generic_names, fsym.name))
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
	for (let _t666 = 0; _t666 < node.exprs.length; _t666++) {
		const e = Array_get(node.exprs, _t666)
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

function bait__checker__Checker_fun_decl(c, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return 
	}
	if (node.is_method) {
		const sym = bait__ast__Table_get_sym(c.table, Array_get(node.params, 0).typ)
		if (sym.info instanceof bait__ast__StructInfo) {
			const field = bait__ast__TypeSymbol_find_field(sym, node.name, c.table)
			if (i32(field.name.length > 0)) {
				if (eq(bait__ast__Table_get_sym(c.table, field.typ).kind, bait__ast__TypeKind.fun_)) {
					bait__checker__Checker_error(c, from_js_string(`struct has a field and method named ${node.name.str}`), node.pos)
				}
			}
		}
	} else {
		const def = bait__ast__Scope_get(c.scope, node.name)
		if (eq(def.kind, bait__ast__ObjectKind.function)) {
			Array_push(c.redefined_funs, node.name)
		} else if (!eq(def.kind, bait__ast__ObjectKind.unknown)) {
			bait__checker__Checker_error(c, from_js_string(`redefinition of ${node.name.str}`), node.pos)
		}
		let param_types = new bait_Array({ data: [], length: 0 })
		for (let _t673 = 0; _t673 < node.params.length; _t673++) {
			const param = Array_get(node.params, _t673)
			Array_push(param_types, param.typ)
		}
		bait__ast__Scope_register(c.scope, node.name, new bait__ast__ScopeObject({ typ: bait__ast__Table_find_or_register_fun(c.table, param_types, node.return_type, false), kind: bait__ast__ObjectKind.function }))
	}
	if (i32(node.generic_names.length > 0) && eq(c.cur_concrete_types.length, 0)) {
		Array_push(c.file.generic_funs, node)
		c.need_generic_resolve = true
		return 
	}
	bait__checker__Checker_fun_instance(c, node)
}

function bait__checker__Checker_fun_instance(c, node) {
	c.returns = false
	c.cur_fun = node
	bait__checker__Checker_check_fun_attrs(c, node)
	const prev_generic_names = c.cur_generic_names
	c.cur_generic_names = node.generic_names
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_fun_params(c, node.params)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
	c.cur_generic_names = prev_generic_names
	const ret_sym = bait__ast__Table_get_sym(c.table, node.return_type)
	const is_void = eq(node.return_type, bait__ast__VOID_TYPE) || eq(ret_sym.parent, bait__ast__VOID_TYPE)
	const has_top_return = bait__checker__has_toplevel_return(node.stmts)
	if (!node.noreturn && !is_void && !c.returns && !has_top_return) {
		bait__checker__Checker_error(c, from_js_string("missing return statement"), node.pos)
	}
	if (eq(ret_sym.kind, bait__ast__TypeKind.result) && eq(ret_sym.parent, bait__ast__VOID_TYPE) && !has_top_return) {
		Array_push(node.stmts, new bait__ast__ReturnStmt({ expr: new bait__ast__StructInit({ name: from_js_string("Result") }) }))
	}
	c.cur_fun = new bait__ast__FunDecl({ return_type: bait__ast__VOID_TYPE })
}

function bait__checker__Checker_fun_params(c, params) {
	for (let _t677 = 0; _t677 < params.length; _t677++) {
		const p = Array_get(params, _t677)
		if (bait__ast__Scope_is_known(c.scope, p.name)) {
			const obj = bait__ast__Scope_get(c.scope, p.name)
			let _t679 = undefined
			if (eq(obj.kind, bait__ast__ObjectKind.package_)) {
				_t679 = from_js_string(`cannot shadow import "${p.name.str}"`)
			} else {
				_t679 = from_js_string(`redefinition of ${p.name.str}`)
			}
			const msg = _t679
			bait__checker__Checker_error(c, msg, p.pos)
			continue
		}
		const sym = bait__ast__Table_get_sym(c.table, p.typ)
		if (!bait__checker__Checker_does_type_exist(c, sym, p.pos)) {
			continue
		}
		if (eq(sym.kind, bait__ast__TypeKind.fun_)) {
			const info = sym.info
			map_set(c.table.fun_decls, p.name, new bait__ast__FunDecl({ pkg: c.pkg, return_type: info.return_type, params: bait__ast__FunInfo_to_params(info) }))
			bait__ast__Scope_register(c.scope, p.name, new bait__ast__ScopeObject({ typ: p.typ, kind: bait__ast__ObjectKind.function }))
		} else {
			bait__ast__Scope_register(c.scope, p.name, new bait__ast__ScopeObject({ typ: p.typ, is_mut: p.is_mut, kind: bait__ast__ObjectKind.variable }))
		}
	}
}

function bait__checker__Checker_check_main_fun(c, stmts) {
	for (let _t682 = 0; _t682 < stmts.length; _t682++) {
		const stmt = Array_get(stmts, _t682)
		if (stmt instanceof bait__ast__FunDecl && bait__ast__FunDecl_is_main(stmt)) {
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
	if (!found && !string_contains(node.name, from_js_string(".")) && !string_eq(node.pkg, from_js_string("builtin"))) {
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
	if (!def.is_pub && !string_eq(def.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`function ${def.name.str} is private`), node.pos)
	}
	node.noreturn = def.noreturn
	node.return_type = def.return_type
	bait__checker__Checker_check_fun_attrs_on_call(c, node, def)
	if (!eq(node.args.length, def.params.length)) {
		bait__checker__Checker_error(c, from_js_string(`expected ${i32_str(def.params.length).str} arguments but got ${i32_str(node.args.length).str}`), node.pos)
		return node.return_type
	}
	if (string_eq(node.name, from_js_string("println")) || string_eq(node.name, from_js_string("eprintln")) || string_eq(node.name, from_js_string("print")) || string_eq(node.name, from_js_string("eprint"))) {
		Array_get(node.args, 0).typ = bait__checker__Checker_expr(c, Array_get(node.args, 0).expr)
		return bait__ast__VOID_TYPE
	}
	bait__checker__Checker_call_args(c, def, node, 0)
	bait__checker__Checker_or_block(c, node)
	bait__checker__Checker_set_conc_types(c, node, def)
	if (string_eq(node.name, from_js_string("error"))) {
		node.return_type = c.cur_fun.return_type
	}
	return node.return_type
}

function bait__checker__Checker_method_call(c, node) {
	const left_expr_type = bait__checker__Checker_expr(c, node.left)
	if (eq(left_expr_type, bait__ast__PLACEHOLDER_TYPE)) {
		return bait__ast__PLACEHOLDER_TYPE
	}
	const left_sym = bait__ast__Table_get_sym(c.table, left_expr_type)
	const final_sym = bait__ast__Table_get_final_sym(c.table, left_sym)
	let arg_offset = 1
	let def = bait__ast__Table_get_method(c.table, left_sym, node.name)
	if (eq(def.name.length, 0)) {
		if (eq(left_sym.kind, bait__ast__TypeKind.struct_)) {
			const field = bait__ast__TypeSymbol_find_field(left_sym, node.name, c.table)
			if (i32(field.name.length > 0)) {
				const field_sym = bait__ast__Table_get_sym(c.table, field.typ)
				const info = field_sym.info
				arg_offset = 0
				node.is_field = true
				def = new bait__ast__FunDecl({ name: field.name, params: bait__ast__FunInfo_to_params(info), return_type: info.return_type })
			}
		}
	}
	if (eq(def.name.length, 0)) {
		if (string_eq(node.name, from_js_string("str"))) {
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
	if (!def.is_pub && !string_eq(left_sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`method ${def.name.str} is private`), node.pos)
	}
	node.lang = def.lang
	node.noreturn = def.noreturn
	node.return_type = def.return_type
	if (!node.is_field) {
		if (Array_get(def.params, 0).is_mut) {
			if (node.left instanceof bait__ast__Ident && !(node.left).is_mut) {
				bait__checker__Checker_error(c, from_js_string("method requires an mutable receiver"), node.pos)
				return node.return_type
			}
		}
		node.left_type = Array_get(def.params, 0).typ
		if (eq(final_sym.kind, bait__ast__TypeKind.array) && Array_contains_string(new bait_Array({ data: [from_js_string("push"), from_js_string("push_many_with_len"), from_js_string("push_many")], length: 3 }), node.name)) {
			node.left_type = left_expr_type
		}
		if (i32(bait__ast__Type_get_nr_amp(left_expr_type) < bait__ast__Type_get_nr_amp(Array_get(def.params, 0).typ))) {
			node.left = new bait__ast__PrefixExpr({ op: bait__token__Token.amp, right: node.left })
			node.left_type = bait__ast__Type_set_nr_amp(node.left_type, 1)
		}
	}
	bait__checker__Checker_check_fun_attrs_on_call(c, node, def)
	if (!eq(i32(node.args.length + arg_offset), def.params.length)) {
		bait__checker__Checker_error(c, from_js_string(`expected ${i32_str(i32(def.params.length - arg_offset)).str} arguments but got ${i32_str(node.args.length).str}`), node.pos)
		return node.return_type
	}
	if (eq(final_sym.kind, bait__ast__TypeKind.array) && Array_contains_string(new bait_Array({ data: [from_js_string("push"), from_js_string("push_many_with_len")], length: 2 }), node.name)) {
		let arg = Array_get(node.args, 0)
		const info = final_sym.info
		c.expected_type = info.elem_type
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (!bait__checker__Checker_check_types(c, arg.typ, info.elem_type)) {
			bait__checker__Checker_error(c, from_js_string(`type ${bait__ast__Table_type_name(c.table, arg.typ).str} not matches ${bait__ast__Table_type_name(c.table, info.elem_type).str} in argument 1`), node.pos)
		}
		return node.return_type
	}
	if (eq(final_sym.kind, bait__ast__TypeKind.array) && Array_contains_string(new bait_Array({ data: [from_js_string("concat"), from_js_string("push_many")], length: 2 }), node.name)) {
		let arg = Array_get(node.args, 0)
		c.expected_type = left_expr_type
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (!bait__checker__Checker_check_types(c, arg.typ, left_expr_type)) {
			bait__checker__Checker_error(c, from_js_string(`type ${bait__ast__Table_type_name(c.table, arg.typ).str} not matches ${bait__ast__Table_type_name(c.table, left_expr_type).str} in argument 1`), node.pos)
		}
		return node.return_type
	}
	bait__checker__Checker_call_args(c, def, node, arg_offset)
	if (eq(left_sym.kind, bait__ast__TypeKind.array) && Array_contains_string(new bait_Array({ data: [from_js_string("filter"), from_js_string("reverse"), from_js_string("slice"), from_js_string("copy"), from_js_string("from_js_arr")], length: 5 }), node.name)) {
		return left_expr_type
	}
	if (eq(left_sym.kind, bait__ast__TypeKind.array) && Array_contains_string(new bait_Array({ data: [from_js_string("last")], length: 1 }), node.name)) {
		return (left_sym.info).elem_type
	}
	bait__checker__Checker_or_block(c, node)
	bait__checker__Checker_set_conc_types(c, node, def)
	return node.return_type
}

function bait__checker__Checker_set_conc_types(c, node, def) {
	if (eq(node.concrete_types.length, 0)) {
		return 
	}
	c.need_generic_resolve = bait__ast__Table_register_concrete(c.table, bait__ast__FunDecl_key(def), node.concrete_types) || c.need_generic_resolve
	const ret_sym = bait__ast__Table_get_sym(c.table, node.return_type)
	if (eq(ret_sym.kind, bait__ast__TypeKind.generic)) {
		const idx = Array_index_string(def.generic_names, ret_sym.name)
		node.return_type = Array_get(node.concrete_types, idx)
	}
}

function bait__checker__Checker_call_args(c, def, node, poffset) {
	const should_resolve_generics = !eq(def.generic_names.length, node.concrete_types.length)
	let save_as_concrete = false
	for (let i = 0; i < node.args.length; i++) {
		const arg = Array_get(node.args, i)
		const param = Array_get(def.params, i32(i + poffset))
		let param_type = param.typ
		const psym = bait__ast__Table_get_sym(c.table, param_type)
		if (should_resolve_generics && eq(psym.kind, bait__ast__TypeKind.generic)) {
			const gi = Array_index_string(def.generic_names, psym.name)
			if (i32(gi < node.concrete_types.length)) {
				param_type = Array_get(node.concrete_types, gi)
			} else if (i32(gi < c.cur_concrete_types.length)) {
				Array_push(node.concrete_types, Array_get(c.cur_concrete_types, gi))
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
		if (arg.expr instanceof bait__ast__Ident) {
			const expr = arg.expr
			if (arg.is_mut) {
				if (!param.is_mut) {
					bait__checker__Checker_error(c, from_js_string(`unnecessary \`mut\` for argument \`${expr.name.str}\``), expr.pos)
				}
				if (!expr.is_mut) {
					bait__checker__Checker_error(c, from_js_string(`\`${expr.name.str}\` is not declared as mutable`), expr.pos)
				}
			} else if (param.is_mut) {
				bait__checker__Checker_error(c, from_js_string(`add \`mut\` to argument for parameter \`${param.name.str}\``), expr.pos)
			}
		}
	}
}

function bait__checker__Checker_or_block(c, node) {
	const ret_sym = bait__ast__Table_get_sym(c.table, node.return_type)
	if (!eq(ret_sym.kind, bait__ast__TypeKind.result)) {
		if (!eq(node.or_block.kind, bait__ast__OrKind.none)) {
			bait__checker__Checker_error(c, from_js_string(`${node.name.str} does not return a result, it cannot have an \`or {}\` block or \`!\` at the end`), node.pos)
		}
		return 
	}
	if (eq(node.or_block.kind, bait__ast__OrKind.none)) {
		bait__checker__Checker_error(c, from_js_string(`${node.name.str} returns a result, it must have an \`or {}\` block or propagation \`!\` at the end`), node.pos)
		return 
	}
	node.return_type = ret_sym.parent
	if (eq(node.or_block.kind, bait__ast__OrKind.prop)) {
		const cur_fun_ret_sym = bait__ast__Table_get_sym(c.table, c.cur_fun.return_type)
		if (!eq(cur_fun_ret_sym.kind, bait__ast__TypeKind.result) && !bait__ast__FunDecl_is_main(c.cur_fun)) {
			bait__checker__Checker_error(c, from_js_string(`\`${c.cur_fun.name.str}\` must return a result to use propagation`), node.pos)
		}
		return 
	}
	c.is_or_block = true
	bait__ast__Scope_register(c.scope, from_js_string("err"), new bait__ast__ScopeObject({ kind: bait__ast__ObjectKind.variable, typ: bait__ast__STRING_TYPE }))
	bait__checker__Checker_stmts(c, node.or_block.stmts)
	c.is_or_block = false
	if (!eq(ret_sym.parent, bait__ast__VOID_TYPE)) {
		if (!bait__checker__Checker_stmt_returns(c, Array_last(node.or_block.stmts)) && !bait__checker__has_toplevel_return(node.or_block.stmts)) {
			bait__checker__Checker_error(c, from_js_string("or block does not return a value"), node.pos)
		}
	}
}

function bait__checker__Checker_resolve_generics_funs(c) {
	for (let _t732 = 0; _t732 < c.file.generic_funs.length; _t732++) {
		const fn = Array_get(c.file.generic_funs, _t732)
		const gtypes = map_get_set(c.table.generic_fun_types, bait__ast__FunDecl_key(fn), new bait_Array({ data: [], length: 0 }))
		for (let _t733 = 0; _t733 < gtypes.length; _t733++) {
			const concrete = Array_get(gtypes, _t733)
			c.cur_concrete_types = concrete
			bait__checker__Checker_fun_instance(c, fn)
		}
	}
}


function bait__checker__Checker_if_match(c, node) {
	const save_is_if_match_expr = c.is_if_match_expr
	if (c.is_if_match_expr) {
		node.is_expr = true
	}
	if (node.is_expr) {
		c.is_if_match_expr = true
		node.typ = c.expected_type
	}
	let cond_sym = new bait__ast__TypeSymbol({})
	if (node.is_match) {
		let _t737 = undefined
		if (node.has_else) {
			_t737 = 2
		} else {
			_t737 = 1
		}
		const min_branches = _t737
		if (i32(node.branches.length < min_branches)) {
			bait__checker__Checker_error(c, from_js_string("match needs at least one non-else branch"), node.pos)
			return bait__ast__PLACEHOLDER_TYPE
		}
		const cond_type = bait__checker__Checker_expr(c, (Array_get(node.branches, 0).cond).left)
		cond_sym = bait__ast__Table_get_sym(c.table, cond_type)
		c.is_sumtype_match = eq(cond_sym.kind, bait__ast__TypeKind.sum_type)
	}
	let branch_exprs = new bait_Array({ data: [], length: 0 })
	let nr_branches_return = 0
	for (let i = 0; i < node.branches.length; i++) {
		const branch = Array_get(node.branches, i)
		bait__checker__Checker_open_scope(c)
		if (!node.has_else || i32(i < i32(node.branches.length - 1))) {
			if (node.is_comptime) {
				if (bait__checker__Checker_comptime_if_condition(c, branch.cond)) {
					node.ct_eval_branch = i
				} else {
					bait__checker__Checker_close_scope(c)
					continue
				}
			} else {
				const cond_type = bait__checker__Checker_expr(c, branch.cond)
				if (node.is_match) {
					const key = bait__ast__Expr_repr((branch.cond).right)
					if (Array_contains_string(branch_exprs, key)) {
						bait__checker__Checker_error(c, from_js_string(`match case \`${key.str}\` is already handled`), branch.pos)
					} else {
						Array_push(branch_exprs, key)
					}
				}
				if (!c.is_sumtype_match && !eq(cond_type, bait__ast__BOOL_TYPE) && !eq(cond_type, bait__ast__PLACEHOLDER_TYPE)) {
					bait__checker__Checker_error(c, from_js_string(`expected bool, got ${bait__ast__Table_type_name(c.table, cond_type).str}`), node.pos)
				}
			}
		} else if (node.is_comptime) {
			node.ct_eval_branch = i
		}
		if (node.is_expr) {
			c.expected_type = node.typ
		}
		bait__checker__Checker_stmts(c, branch.stmts)
		bait__checker__Checker_close_scope(c)
		if (node.is_expr) {
			const last = Array_last(branch.stmts)
			if (bait__checker__is_noreturn_call(last)) {
				continue
			}
			if (bait__checker__Checker_stmt_returns(c, last)) {
				nr_branches_return = i32(nr_branches_return + 1)
			} else {
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
			nr_branches_return = i32(nr_branches_return + 1)
		}
		if (node.is_comptime && i32(node.ct_eval_branch >= 0)) {
			break
		}
	}
	if (node.is_match) {
		bait__checker__Checker_check_exhaustive_match(c, cond_sym.info, branch_exprs, node)
	}
	c.returns = eq(nr_branches_return, node.branches.length)
	c.is_if_match_expr = save_is_if_match_expr
	c.is_sumtype_match = false
	return node.typ
}

function bait__checker__Checker_check_exhaustive_match(c, info, branch_exprs, node) {
	let is_exhaustive = true
	let unhandled = new bait_Array({ data: [], length: 0 })
	if (info instanceof bait__ast__EnumInfo) {
		for (let _t753 = 0; _t753 < info.vals.length; _t753++) {
			const val = Array_get(info.vals, _t753)
			if (!Array_contains_string(branch_exprs, val)) {
				is_exhaustive = false
				Array_push(unhandled, val)
			}
		}
	} else if (info instanceof bait__ast__SumTypeInfo) {
		for (let _t755 = 0; _t755 < info.variants.length; _t755++) {
			const typ = Array_get(info.variants, _t755)
			const variant = bait__ast__Table_type_name(c.table, typ)
			if (!Array_contains_string(branch_exprs, variant)) {
				is_exhaustive = false
				Array_push(unhandled, variant)
			}
		}
	} else {
		is_exhaustive = false
	}
	if (is_exhaustive) {
		if (node.has_else) {
			bait__checker__Checker_warn(c, from_js_string("match is exhaustive, else is unreachable"), node.pos)
		}
	} else if (!node.has_else) {
		let msg = from_js_string("match must be exhaustive")
		if (i32(unhandled.length > 0)) {
			msg = string_add(msg, from_js_string(` (add \`else {}\` or branches for ${Array_string_join(unhandled, from_js_string(", ")).str})`))
		} else {
			msg = string_add(msg, from_js_string(" (add `else {}` branch)"))
		}
		bait__checker__Checker_error(c, msg, node.pos)
	}
}


function bait__checker__Checker_infix_expr(c, node) {
	node.left_type = bait__checker__Checker_expr(c, node.left)
	if (eq(node.left_type, bait__ast__PLACEHOLDER_TYPE)) {
		return bait__ast__PLACEHOLDER_TYPE
	}
	Array_push(c.table.needed_equality_funs, node.left_type)
	if (c.is_sumtype_match && eq(node.op, bait__token__Token.eq)) {
		node.op = bait__token__Token.key_is
	}
	if (eq(node.op, bait__token__Token.key_is)) {
		return bait__checker__Checker_is_sumtype_variant_infix(c, node)
	}
	c.expected_type = node.left_type
	node.right_type = bait__checker__Checker_expr(c, node.right)
	if (!bait__checker__Checker_check_types(c, node.right_type, node.left_type)) {
		let err_msg = from_js_string("")
		if (node.is_match) {
			err_msg = from_js_string(`cannot match ${bait__ast__Table_type_name(c.table, node.right_type).str} to ${bait__ast__Table_type_name(c.table, node.left_type).str}`)
		} else {
			err_msg = from_js_string(`infix expr: types ${bait__ast__Table_type_name(c.table, node.left_type).str} and ${bait__ast__Table_type_name(c.table, node.right_type).str} do not match`)
		}
		bait__checker__Checker_error(c, err_msg, node.pos)
	}
	if (eq(node.left_type, bait__ast__I64_TYPE) || eq(node.left_type, bait__ast__U64_TYPE) || eq(node.left_type, bait__ast__U32_TYPE)) {
		node.right = new bait__ast__AsCast({ expr: node.right, target: node.left_type })
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
		if (!string_contains(right.name, from_js_string(".")) && !string_eq(right.pkg, from_js_string("main"))) {
			right.name = string_add(string_add(right.pkg, from_js_string(".")), right.name)
		}
		node.right_type = bait__ast__Table_get_idx(c.table, right.name)
		const left = node.left
		bait__ast__Scope_update_type(c.scope, left.name, node.right_type)
		return bait__ast__BOOL_TYPE
	}
	if (node.left instanceof bait__ast__SelectorExpr) {
		let right = node.right
		if (!string_contains(right.name, from_js_string(".")) && !string_eq(right.pkg, from_js_string("main"))) {
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


const bait__checker__RedefKind = {
	fun_: 0,
	type_: 1,
}
function bait__checker__Redefinition({ path = from_js_string(""), pos = new bait__token__Pos({}), name = from_js_string(""), signature = from_js_string("") }) {
	this.path = path
	this.pos = pos
	this.name = name
	this.signature = signature
}
function bait__checker__stmt_is_redef(stmt, name, kind) {
	let _t772 = undefined
	if (eq(kind, bait__checker__RedefKind.fun_)) {
		_t772 = stmt instanceof bait__ast__FunDecl && string_eq(stmt.name, name)
	} else if (eq(kind, bait__checker__RedefKind.type_)) {
		_t772 = (stmt instanceof bait__ast__EnumDecl || stmt instanceof bait__ast__InterfaceDecl || stmt instanceof bait__ast__StructDecl || stmt instanceof bait__ast__TypeDecl) && string_eq(stmt.name, name)
	}
	return _t772
}

function bait__checker__Checker_check_redefinitions(c, redefs_list, kind, files) {
	if (eq(redefs_list.length, 0)) {
		return 
	}
	let unique = new bait_Array({ data: [], length: 0 })
	for (let _t774 = 0; _t774 < redefs_list.length; _t774++) {
		const name = Array_get(redefs_list, _t774)
		if (!Array_contains_string(unique, name)) {
			Array_push(unique, name)
		}
	}
	for (let _t776 = 0; _t776 < unique.length; _t776++) {
		const name = Array_get(unique, _t776)
		let redefinitions = new bait_Array({ data: [], length: 0 })
		for (let _t777 = 0; _t777 < files.length; _t777++) {
			const file = Array_get(files, _t777)
			for (let _t778 = 0; _t778 < file.stmts.length; _t778++) {
				const stmt = Array_get(file.stmts, _t778)
				if (bait__checker__stmt_is_redef(stmt, name, kind)) {
					Array_push(redefinitions, new bait__checker__Redefinition({ path: file.path, pos: (stmt).pos, name: name, signature: bait__checker__Checker_stmt_signature(c, stmt) }))
				}
			}
		}
		let err = new bait__errors__Message({ kind: bait__errors__Kind.error, msg: from_js_string(`redfinition of "${name.str}"`) })
		for (let _t780 = 0; _t780 < redefinitions.length; _t780++) {
			const redef = Array_get(redefinitions, _t780)
			Array_push(err.infos, new bait__errors__Message({ kind: bait__errors__Kind.info, path: redef.path, pos: redef.pos, title: from_js_string("conflict"), msg: redef.signature }))
		}
		Array_push(c.errors, err)
	}
}

function bait__checker__Checker_check_fun_redefinitions(c, files) {
	bait__checker__Checker_check_redefinitions(c, c.redefined_funs, bait__checker__RedefKind.fun_, files)
}

function bait__checker__Checker_check_type_redefinitions(c, files) {
	bait__checker__Checker_check_redefinitions(c, c.table.redefined_types, bait__checker__RedefKind.type_, files)
}

function bait__checker__Checker_stmt_signature(c, stmt) {
	let _t781 = undefined
	if (stmt instanceof bait__ast__EnumDecl) {
		_t781 = from_js_string("enum")
	} else if (stmt instanceof bait__ast__FunDecl) {
		_t781 = bait__checker__Checker_fun_signature(c, stmt)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
		_t781 = from_js_string("interface")
	} else if (stmt instanceof bait__ast__StructDecl) {
		_t781 = from_js_string("struct")
	} else if (stmt instanceof bait__ast__TypeDecl) {
		_t781 = from_js_string("type")
	} else {
		_t781 = from_js_string("")
	}
	return _t781
}

function bait__checker__Checker_fun_signature(c, node) {
	let sig = from_js_string(`fun ${node.name.str}(`)
	for (let i = 0; i < node.params.length; i++) {
		const p = Array_get(node.params, i)
		const type_name = bait__ast__Table_get_sym(c.table, p.typ).name
		sig = string_add(sig, from_js_string(`${p.name.str} ${type_name.str}`))
		if (i32(i < i32(node.params.length - 1))) {
			sig = string_add(sig, from_js_string(", "))
		}
	}
	sig = string_add(sig, from_js_string(")"))
	if (!eq(node.return_type, bait__ast__VOID_TYPE)) {
		sig = string_add(sig, from_js_string(` ${bait__ast__Table_type_name(c.table, node.return_type).str}`))
	}
	return sig
}


function bait__checker__Checker_return_stmt(c, node) {
	c.expected_type = bait__ast__Table_unwrap_result(c.table, c.cur_fun.return_type)
	const expr_type = bait__checker__Checker_expr(c, node.expr)
	if (!bait__checker__Checker_check_types(c, expr_type, c.cur_fun.return_type)) {
		let msg = from_js_string("")
		if (eq(c.cur_fun.return_type, bait__ast__VOID_TYPE)) {
			msg = from_js_string(`function ${c.cur_fun.name.str} does not return a value`)
		} else {
			msg = from_js_string(`expected return value of type ${bait__ast__Table_type_name(c.table, c.cur_fun.return_type).str}`)
		}
		if (!eq(expr_type, bait__ast__VOID_TYPE)) {
			msg = string_add(msg, from_js_string(`, got ${bait__ast__Table_type_name(c.table, expr_type).str}`))
		}
		bait__checker__Checker_error(c, msg, node.pos)
	}
	const return_sym = bait__ast__Table_get_sym(c.table, c.cur_fun.return_type)
	if (eq(return_sym.kind, bait__ast__TypeKind.result)) {
		const expr_sym = bait__ast__Table_get_sym(c.table, expr_type)
		if (eq(expr_sym.kind, bait__ast__TypeKind.result)) {
			return 
		}
		let res_expr = new bait__ast__StructInit({ name: from_js_string("Result") })
		if (!eq(expr_type, bait__ast__VOID_TYPE)) {
			res_expr.fields = new bait_Array({ data: [new bait__ast__StructInitField({ name: from_js_string("data"), expr: node.expr })], length: 1 })
		}
		node.expr = res_expr
	}
}

function bait__checker__Checker_stmt_returns(c, stmt) {
	if (stmt instanceof bait__ast__ExprStmt) {
		return !eq(stmt.typ, bait__ast__VOID_TYPE)
	}
	if (stmt instanceof bait__ast__IfMatch) {
		return c.returns
	}
	return false
}

function bait__checker__has_toplevel_return(stmts) {
	for (let _t792 = 0; _t792 < stmts.length; _t792++) {
		const stmt = Array_get(stmts, _t792)
		if (stmt instanceof bait__ast__ReturnStmt || bait__checker__is_noreturn_call(stmt)) {
			return true
		}
	}
	return false
}

function bait__checker__is_noreturn_call(stmt) {
	if (stmt instanceof bait__ast__ExprStmt) {
		if (stmt.expr instanceof bait__ast__CallExpr) {
			return (stmt.expr).noreturn
		}
	}
	return false
}


function bait__checker__Checker_stmts(c, stmts) {
	for (let _t796 = 0; _t796 < stmts.length; _t796++) {
		const stmt = Array_get(stmts, _t796)
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
	} else if (stmt instanceof bait__ast__IfMatch) {
		bait__checker__Checker_if_match(c, stmt)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
		bait__checker__Checker_interface_decl(c, stmt)
	} else if (stmt instanceof bait__ast__LoopControlStmt) {
		bait__checker__Checker_loop_control_stmt(c, stmt)
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
	let expr = node.expr
	node.typ = bait__checker__Checker_expr(c, expr)
	if (c.is_if_match_expr || c.is_or_block || expr instanceof bait__ast__CallExpr || expr instanceof bait__ast__IfMatch || expr instanceof bait__ast__HashExpr) {
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
		for (let j = 0; i32(j < i); j = i32(j + 1)) {
			if (string_eq(field.name, Array_get(node.fields, j).name)) {
				bait__checker__Checker_error(c, from_js_string(`duplicate field name ${field.name.str}`), field.pos)
				continue outer
			}
		}
		if (field.expr instanceof bait__ast__EmptyExpr) {
			field.expr = new bait__ast__IntegerLiteral({ val: from_js_string(`${i32_str(cur_val).str}`) })
			cur_val = i32(cur_val + 1)
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
	const loop_safe = c.is_loop
	c.is_loop = true
	bait__checker__Checker_stmts(c, node.stmts)
	c.is_loop = loop_safe
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_for_classic_loop(c, node) {
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_register_label(c, node.label, node.pos)
	bait__checker__Checker_stmt(c, node.init)
	bait__checker__Checker_expr(c, node.cond)
	bait__checker__Checker_stmt(c, node.inc)
	const loop_safe = c.is_loop
	c.is_loop = true
	bait__checker__Checker_stmts(c, node.stmts)
	c.is_loop = loop_safe
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
	const loop_safe = c.is_loop
	c.is_loop = true
	bait__checker__Checker_stmts(c, node.stmts)
	c.is_loop = loop_safe
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_global_decl(c, node) {
	node.typ = bait__checker__Checker_expr(c, node.expr)
	bait__ast__Scope_update_type(c.table.global_scope, node.name, node.typ)
}

function bait__checker__Checker_interface_decl(c, node) {
}

function bait__checker__Checker_loop_control_stmt(c, node) {
	if (!c.is_loop) {
		bait__checker__Checker_error(c, from_js_string("break and continue must be inside a loop"), node.pos)
	}
	if (eq(node.label.length, 0)) {
		return 
	}
	const obj = bait__ast__Scope_get(c.scope, node.label)
	if (!eq(obj.kind, bait__ast__ObjectKind.label)) {
		bait__checker__Checker_error(c, from_js_string(`label "${node.label.str}" not found`), node.pos)
	}
}

function bait__checker__Checker_type_decl(c, node) {
}


function bait__checker__Checker_struct_decl(c, node) {
	const prev_generic_names = c.cur_generic_names
	c.cur_generic_names = node.generic_names
	if (!u8_is_upper(string_get(node.name, 0)) && !string_eq(node.name, from_js_string("string")) && !string_eq(node.name, from_js_string("map"))) {
		bait__checker__Checker_warn(c, from_js_string(`struct name \`${node.name.str}\` must start with a capital letter`), node.pos)
	}
	outer: for (let i = 0; i < node.fields.length; i++) {
		const field = Array_get(node.fields, i)
		let should_continue = false
		for (let j = 0; i32(j < i); j = i32(j + 1)) {
			if (string_eq(field.name, Array_get(node.fields, j).name)) {
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
	c.cur_generic_names = prev_generic_names
}

function bait__checker__Checker_struct_init(c, node) {
	const gen_sym = bait__ast__Table_get_sym(c.table, node.typ)
	let sym = bait__ast__Table_unwrap_generic(c.table, gen_sym)
	if (eq(sym.kind, bait__ast__TypeKind.placeholder)) {
		bait__checker__Checker_error(c, from_js_string(`undefined struct ${node.name.str}`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	if (!sym.is_pub && string_contains(sym.name, from_js_string(".")) && !string_eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`struct ${sym.name.str} is private`), node.pos)
		return bait__ast__PLACEHOLDER_TYPE
	}
	bait__checker__Checker_check_init_field_values(c, node, sym.info)
	node.name = sym.name
	for (let _t821 = 0; _t821 < node.fields.length; _t821++) {
		const field = Array_get(node.fields, _t821)
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
	for (let _t825 = 0; _t825 < info.fields.length; _t825++) {
		const def_field = Array_get(info.fields, _t825)
		const def_sym = bait__ast__Table_get_sym(c.table, def_field.typ)
		let is_required = eq(def_sym.kind, bait__ast__TypeKind.sum_type)
		for (let _t826 = 0; _t826 < def_field.attrs.length; _t826++) {
			const attr = Array_get(def_field.attrs, _t826)
			if (string_eq(attr.name, from_js_string("required"))) {
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
		for (let _t830 = 0; _t830 < init.fields.length; _t830++) {
			const inited = Array_get(init.fields, _t830)
			if (string_eq(inited.name, def_field.name)) {
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
	if (eq(got_sym.kind, bait__ast__TypeKind.result) && eq(expected, got_sym.parent)) {
		return true
	}
	if (eq(exp_sym.kind, bait__ast__TypeKind.result)) {
		return bait__checker__Checker_check_types(c, got, exp_sym.parent)
	}
	if (eq(exp_sym.kind, bait__ast__TypeKind.generic) && !eq(got_sym.kind, bait__ast__TypeKind.generic)) {
		return true
	}
	if (eq(exp_sym.kind, bait__ast__TypeKind.generic) && eq(got_sym.kind, bait__ast__TypeKind.generic)) {
		return true
	}
	if (eq(bait__ast__Type_idx(exp_sym.parent), bait__ast__Type_idx(got))) {
		return true
	}
	if (eq(exp_sym.kind, bait__ast__TypeKind.array) && eq(got_sym.kind, bait__ast__TypeKind.array)) {
		if (string_eq(exp_sym.name, from_js_string("Array")) || string_eq(got_sym.name, from_js_string("Array"))) {
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
		return Array_contains_bait__ast__Type(info.variants, got)
	}
	if (eq(got_sym.kind, bait__ast__TypeKind.fun_) && eq(exp_sym.kind, bait__ast__TypeKind.fun_)) {
		const got_info = got_sym.info
		const exp_info = exp_sym.info
		if (!eq(got_info.param_types.length, exp_info.param_types.length)) {
			return false
		}
		for (let i = 0; i32(i < got_info.param_types.length); i = i32(i + 1)) {
			if (!bait__checker__Checker_check_types(c, Array_get(got_info.param_types, i), Array_get(exp_info.param_types, i))) {
				return false
			}
		}
		return bait__checker__Checker_check_types(c, got_info.return_type, exp_info.return_type)
	}
	return false
}

function bait__checker__Checker_does_type_exist(c, sym, pos) {
	if ((eq(sym.kind, bait__ast__TypeKind.placeholder) && !string_eq(sym.name, from_js_string("_"))) || (eq(sym.kind, bait__ast__TypeKind.generic) && !(Array_contains_string(c.cur_generic_names, sym.name)))) {
		bait__checker__Checker_error(c, from_js_string(`unknown type ${sym.name.str}`), pos)
		return false
	}
	if (eq(sym.kind, bait__ast__TypeKind.other) || eq(sym.kind, bait__ast__TypeKind.string)) {
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
		for (let _t856 = 0; _t856 < info.variants.length; _t856++) {
			const variant = Array_get(info.variants, _t856)
			const var_sym = bait__ast__Table_get_sym(c.table, variant)
			if (!bait__checker__Checker_does_type_exist(c, var_sym, pos)) {
				return false
			}
		}
		return true
	}
	if (eq(sym.kind, bait__ast__TypeKind.fun_)) {
		const info = sym.info
		for (let _t859 = 0; _t859 < info.param_types.length; _t859++) {
			const param_type = Array_get(info.param_types, _t859)
			const param_sym = bait__ast__Table_get_sym(c.table, param_type)
			if (!bait__checker__Checker_does_type_exist(c, param_sym, pos)) {
				return false
			}
		}
		return bait__checker__Checker_does_type_exist(c, bait__ast__Table_get_sym(c.table, info.return_type), pos)
	}
	if (sym.is_pub || string_eq(sym.pkg, c.pkg) || string_eq(c.pkg, from_js_string("builtin"))) {
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
		i = i32(i + 1)
		if (eq(c, u8("\\")) && !is_escaped) {
			is_escaped = true
		} else {
			is_escaped = false
		}
	}
	return res
}

function bait__util__escape_linebreak(s) {
	let _t865 = undefined
	if (string_eq(os__platform(), from_js_string("win32"))) {
		_t865 = string_replace(s, from_js_string("\r\n"), from_js_string("\\r\\n"))
	} else {
		_t865 = string_replace(s, from_js_string("\n"), from_js_string("\\n"))
	}
	return _t865
}

function bait__util__shell_escape(s) {
	return bait__util__escape_char(s, u8("\`"))
}


const bait__util__VERSION = from_js_string("0.0.6")
const bait__util__FULL_VERSION = from_js_string(`${bait__util__VERSION.str} ${from_js_string("35452e3").str}`)

function bait__gen__js__Gen_comptime_var(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("from_js_string(\""))
	bait__gen__js__Gen_write(g, bait__gen__js__Gen_get_comptime_val(g, node.name, node.pos))
	bait__gen__js__Gen_write(g, from_js_string("\")"))
}

function bait__gen__js__Gen_get_comptime_val(g, name, pos) {
	let _t866 = undefined
	if (string_eq(name, from_js_string("PKG"))) {
		_t866 = g.pkg
	} else if (string_eq(name, from_js_string("ABS_FILE"))) {
		_t866 = string_replace(os__abs_path(g.path), from_js_string("\\"), from_js_string("\\\\"))
	} else if (string_eq(name, from_js_string("FILE"))) {
		_t866 = string_replace(g.path, from_js_string("\\"), from_js_string("\\\\"))
	} else if (string_eq(name, from_js_string("LINE"))) {
		_t866 = i32_str(pos.line)
	} else if (string_eq(name, from_js_string("FILE_LINE"))) {
			const file = bait__gen__js__Gen_get_comptime_val(g, from_js_string("FILE"), pos)
		const line = bait__gen__js__Gen_get_comptime_val(g, from_js_string("LINE"), pos)
		_t866 = from_js_string(`${file.str}:${line.str}`)
	} else if (string_eq(name, from_js_string("FUN"))) {
		_t866 = g.cur_fun.name
	} else if (string_eq(name, from_js_string("BAITEXE"))) {
		_t866 = bait__gen__js__Gen_comptime_baitexe(g)
	} else if (string_eq(name, from_js_string("BAITDIR"))) {
		_t866 = bait__gen__js__Gen_comptime_baitdir(g)
	} else if (string_eq(name, from_js_string("BAITHASH"))) {
		_t866 = bait__gen__js__Gen_comptime_baithash(g)
	} else {
		_t866 = from_js_string("")
	}
	return _t866
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
	} else if (expr instanceof bait__ast__IfMatch) {
		bait__gen__js__Gen_if_match(g, expr)
	} else if (expr instanceof bait__ast__IndexExpr) {
		bait__gen__js__Gen_index_expr(g, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		bait__gen__js__Gen_infix_expr(g, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		bait__gen__js__Gen_integer_literal(g, expr)
	} else if (expr instanceof bait__ast__MapInit) {
		bait__gen__js__Gen_map_init(g, expr)
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
	} else if (expr instanceof bait__ast__Void) {
	} else if (expr instanceof bait__ast__EmptyExpr) {
		panic(from_js_string("unexpected EmptyExpr"))
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
	if (eq(node.target, bait__ast__I64_TYPE) || eq(node.target, bait__ast__U64_TYPE) || eq(node.target, bait__ast__U32_TYPE)) {
		bait__gen__js__Gen_write(g, from_js_string("BigInt("))
		bait__gen__js__Gen_expr(g, node.expr)
		if (node.expr instanceof bait__ast__IntegerLiteral) {
			bait__gen__js__Gen_write(g, from_js_string("n"))
		}
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return 
	}
	if (eq(node.expr_type, bait__ast__I64_TYPE) || eq(node.expr_type, bait__ast__U64_TYPE) || eq(node.expr_type, bait__ast__U32_TYPE)) {
		bait__gen__js__Gen_write(g, from_js_string("Number("))
		bait__gen__js__Gen_expr(g, node.expr)
		bait__gen__js__Gen_write(g, from_js_string(")"))
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
			bait__gen__js__Gen_write(g, from_js_string("Map_set("))
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			bait__gen__js__Gen_expr(g, node.index)
			bait__gen__js__Gen_write(g, from_js_string(", "))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("Map_get_set("))
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
		if (eq(node.op, bait__token__Token.ne)) {
			bait__gen__js__Gen_write(g, from_js_string("!"))
		}
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
	bait__gen__js__Gen_write(g, from_js_string("new bait_Map({ data: new Map(["))
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
	if (!eq(node.op, bait__token__Token.mul) && !eq(node.op, bait__token__Token.amp)) {
		bait__gen__js__Gen_write(g, bait__token__Token_js_repr(node.op))
	}
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
	const sym = bait__gen__js__Gen_concrete_sym(g, node.typ)
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
	if (eq(sym.kind, bait__ast__TypeKind.generic)) {
		bait__gen__js__Gen_expr_to_string(g, expr, map_get_set(g.cur_concrete_types, sym.name, 0))
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
	if (string_eq(node.name, from_js_string("testsuite_begin"))) {
		g.has_test_begin = true
	} else if (string_eq(node.name, from_js_string("testsuite_end"))) {
		g.has_test_end = true
	}
	if (i32(node.generic_names.length > 0) && eq(g.cur_concrete_types.length, 0)) {
		const gtypes = map_get_set(g.table.generic_fun_types, bait__ast__FunDecl_key(node), new bait_Array({ data: [], length: 0 }))
		for (let _t901 = 0; _t901 < gtypes.length; _t901++) {
			const conc_types = Array_get(gtypes, _t901)
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
		name = bait__gen__js__Gen_get_concrete_name(g, name, map_values(g.cur_concrete_types))
	}
	bait__gen__js__Gen_write(g, from_js_string(`${name.str}(`))
	bait__gen__js__Gen_fun_params(g, node.params)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	const export_attr = Array_bait__ast__Attribute_find_attr(node.attrs, from_js_string("export"))
	if (!string_eq(export_attr.name, from_js_string(""))) {
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
	if (eq(node.or_block.kind, bait__ast__OrKind.none)) {
		bait__gen__js__Gen_call_expr_no_or(g, node)
		return 
	}
	const cut = bait__gen__js__Gen_cut_back_to(g, Array_last(g.stmt_offsets))
	g.empty_line = true
	const tmp = bait__gen__js__Gen_new_temp_var(g)
	bait__gen__js__Gen_write(g, from_js_string(`let ${tmp.str} = `))
	bait__gen__js__Gen_call_expr_no_or(g, node)
	bait__gen__js__Gen_writeln(g, from_js_string(""))
	bait__gen__js__Gen_writeln(g, from_js_string(`if (${tmp.str}.is_error) {`))
	if (eq(node.or_block.kind, bait__ast__OrKind.block)) {
		bait__gen__js__Gen_writeln(g, from_js_string(`\t const err = ${tmp.str}.msg`))
		bait__gen__js__Gen_stmts(g, node.or_block.stmts)
		if (Array_last(node.or_block.stmts) instanceof bait__ast__ExprStmt) {
			if (g.empty_line) {
				bait__gen__js__Gen_cut_before(g, u8("\n"))
			}
			const last_line_cut = bait__gen__js__Gen_cut_before(g, u8("\t"))
			bait__gen__js__Gen_writeln(g, from_js_string(`${tmp.str}.data = ${last_line_cut.str}`))
		}
	} else {
		if (bait__ast__FunDecl_is_main(g.cur_fun)) {
			bait__gen__js__Gen_writeln(g, from_js_string(`\tpanic(${tmp.str}.msg)`))
		} else {
			bait__gen__js__Gen_writeln(g, from_js_string(`\treturn ${tmp.str}`))
		}
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	bait__gen__js__Gen_save_stmt_offset(g)
	g.empty_line = false
	bait__gen__js__Gen_write(g, from_js_string(`${cut.str}${tmp.str}.data`))
}

function bait__gen__js__Gen_call_expr_no_or(g, node) {
	if (node.is_method && !eq(node.lang, bait__ast__Language.bait)) {
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, string_add(string_add(from_js_string("."), node.name), from_js_string("(")))
		bait__gen__js__Gen_call_args(g, node.args)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return 
	}
	if (node.is_field) {
		bait__gen__js__Gen_expr(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string("."))
		bait__gen__js__Gen_write(g, node.name)
		bait__gen__js__Gen_write(g, from_js_string("("))
		bait__gen__js__Gen_call_args(g, node.args)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return 
	}
	let name = node.name
	if (node.is_method) {
		if (string_eq(name, from_js_string("str"))) {
			bait__gen__js__Gen_expr_to_string(g, node.left, node.left_type)
			return 
		}
		const sym = bait__ast__Table_get_sym(g.table, node.left_type)
		const final_sym = bait__ast__Table_get_final_sym(g.table, sym)
		if (eq(final_sym.kind, bait__ast__TypeKind.array) && Array_contains_string(new bait_Array({ data: [from_js_string("push"), from_js_string("push_many"), from_js_string("push_many_with_len")], length: 3 }), node.name)) {
			bait__gen__js__Gen_gen_array_method(g, node.name, node, final_sym)
			return 
		}
		name = bait__gen__js__js_name(string_add(string_add(sym.name, from_js_string("_")), node.name))
	} else if (eq(node.lang, bait__ast__Language.bait)) {
		name = bait__gen__js__js_name(node.name)
	}
	if (i32(node.concrete_types.length > 0)) {
		name = bait__gen__js__Gen_get_concrete_name(g, name, node.concrete_types)
	}
	bait__gen__js__Gen_write(g, name)
	if (!node.is_method && Array_contains_string(new bait_Array({ data: [from_js_string("println"), from_js_string("eprintln"), from_js_string("print"), from_js_string("eprint")], length: 4 }), node.name)) {
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
	for (let i = 1; i32(i < node.args.length); i = i32(i + 1)) {
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, Array_get(node.args, i).expr)
	}
	bait__gen__js__Gen_write(g, from_js_string(")"))
}


function bait__gen__js__Gen_if_match(g, node) {
	if (node.is_comptime) {
		if (i32(node.ct_eval_branch >= 0)) {
			bait__gen__js__Gen_stmts(g, Array_get(node.branches, node.ct_eval_branch).stmts)
		}
		return 
	}
	const tmp = bait__gen__js__Gen_new_temp_var(g)
	let cut = from_js_string("")
	if (node.is_expr) {
		cut = string_trim_left(bait__gen__js__Gen_cut_back_to(g, Array_last(g.stmt_offsets)), from_js_string("\t"))
		g.empty_line = true
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
		const branch_start = g.out.length
		bait__gen__js__Gen_stmts(g, b.stmts)
		if (node.is_expr) {
			if (g.empty_line) {
				bait__gen__js__Gen_cut_before(g, u8("\n"))
			}
			const last_line_cut = bait__gen__js__Gen_cut_before_any(g, from_js_string("\n\t"))
			const branch_cut = string_trim_right(bait__gen__js__Gen_cut_back_to(g, branch_start), from_js_string("\n\t"))
			if (i32(branch_cut.length > 0)) {
				bait__gen__js__Gen_writeln(g, branch_cut)
			}
			bait__gen__js__Gen_writeln(g, from_js_string(`\t${tmp.str} = ${last_line_cut.str}`))
		}
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	bait__gen__js__Gen_save_stmt_offset(g)
	if (node.is_expr) {
		bait__gen__js__Gen_write(g, cut)
		bait__gen__js__Gen_write(g, tmp)
	}
}


const bait__gen__js__JS_RESERVED = new bait_Array({ data: [from_js_string("await"), from_js_string("break"), from_js_string("case"), from_js_string("catch"), from_js_string("class"), from_js_string("const"), from_js_string("continue"), from_js_string("debugger"), from_js_string("default"), from_js_string("delete"), from_js_string("do"), from_js_string("else"), from_js_string("enum"), from_js_string("export"), from_js_string("extends"), from_js_string("false"), from_js_string("finally"), from_js_string("for"), from_js_string("function"), from_js_string("if"), from_js_string("import"), from_js_string("in"), from_js_string("instanceof"), from_js_string("new"), from_js_string("null"), from_js_string("return"), from_js_string("super"), from_js_string("switch"), from_js_string("this"), from_js_string("throw"), from_js_string("true"), from_js_string("try"), from_js_string("typeof"), from_js_string("var"), from_js_string("void"), from_js_string("while"), from_js_string("with"), from_js_string("yield"), from_js_string("let"), from_js_string("static"), from_js_string("implements"), from_js_string("interface"), from_js_string("package"), from_js_string("private"), from_js_string("protected"), from_js_string("public"), from_js_string("as"), from_js_string("async"), from_js_string("from"), from_js_string("get"), from_js_string("meta"), from_js_string("of"), from_js_string("set"), from_js_string("target"), from_js_string("globalThis"), from_js_string("Infinity"), from_js_string("NaN"), from_js_string("undefined"), from_js_string("eval"), from_js_string("isFinite"), from_js_string("isNaN"), from_js_string("parseFloat"), from_js_string("parseInt"), from_js_string("decodeURI"), from_js_string("decodeURIComponent"), from_js_string("encodeURI"), from_js_string("encodeURIComponent"), from_js_string("escape"), from_js_string("unescape"), from_js_string("Object"), from_js_string("Function"), from_js_string("Boolean"), from_js_string("Symbol"), from_js_string("Error"), from_js_string("AggregateError"), from_js_string("EvalError"), from_js_string("RangeError"), from_js_string("ReferenceError"), from_js_string("SyntaxError"), from_js_string("TypeError"), from_js_string("URIError"), from_js_string("InternalError"), from_js_string("Number"), from_js_string("BigInt"), from_js_string("Math"), from_js_string("Date"), from_js_string("String"), from_js_string("RegExp"), from_js_string("Array"), from_js_string("Int8Array"), from_js_string("Uint8Array"), from_js_string("Uint8ClampedArray"), from_js_string("Int16Array"), from_js_string("Uint16Array"), from_js_string("Int32Array"), from_js_string("Uint32Array"), from_js_string("Float32Array"), from_js_string("Float64Array"), from_js_string("BigInt64Array"), from_js_string("BigUint64Array"), from_js_string("Map"), from_js_string("Set"), from_js_string("WeakMap"), from_js_string("WeakSet"), from_js_string("ArrayBuffer"), from_js_string("SharedArrayBuffer"), from_js_string("Atomics"), from_js_string("DataView"), from_js_string("JSON"), from_js_string("FinalizationRegistry"), from_js_string("WeakRef"), from_js_string("Iterator"), from_js_string("Promise"), from_js_string("Generator"), from_js_string("GeneratorFunction"), from_js_string("AsyncFunction"), from_js_string("AsyncGenerator"), from_js_string("AsyncGeneratorFunction"), from_js_string("Reflect"), from_js_string("Proxy"), from_js_string("Intl")], length: 121 })
function bait__gen__js__Gen({ pref = new bait__preference__Prefs({}), table = new bait__ast__Table({}), path = from_js_string(""), pkg = from_js_string(""), type_defs_out = from_js_string(""), global_out = from_js_string(""), fun_decls_out = from_js_string(""), out = from_js_string(""), indent = 0, empty_line = false, stmt_offsets = new bait_Array({ data: [], length: 0 }), foreign_imports = new map({ data: new Map([]), length: 0 }), generated_str_funs = new bait_Array({ data: [], length: 0 }), tmp_counter = 0, cur_concrete_types = new map({ data: new Map([]), length: 0 }), cur_fun = new bait__ast__FunDecl({}), is_for_loop_head = false, is_lhs_assign = false, is_array_map_set = false, has_test_begin = false, has_test_end = false, baitexe = from_js_string(""), baitdir = from_js_string(""), baithash = from_js_string("") }) {
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
	this.stmt_offsets = stmt_offsets
	this.foreign_imports = foreign_imports
	this.generated_str_funs = generated_str_funs
	this.tmp_counter = tmp_counter
	this.cur_concrete_types = cur_concrete_types
	this.cur_fun = cur_fun
	this.is_for_loop_head = is_for_loop_head
	this.is_lhs_assign = is_lhs_assign
	this.is_array_map_set = is_array_map_set
	this.has_test_begin = has_test_begin
	this.has_test_end = has_test_end
	this.baitexe = baitexe
	this.baitdir = baitdir
	this.baithash = baithash
}
function bait__gen__js__gen(files, table, pref) {
	let g = new bait__gen__js__Gen({ pref: pref, table: table, indent: -1, empty_line: true, tmp_counter: -1 })
	for (let _t930 = 0; _t930 < files.length; _t930++) {
		const file = Array_get(files, _t930)
		g.path = file.path
		g.pkg = file.pkg_name
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
	for (let _t933 = 0; _t933 < g.table.needed_str_funs.length; _t933++) {
		const typ = Array_get(g.table.needed_str_funs, _t933)
		bait__gen__js__Gen_generate_str_fun(g, typ)
	}
	return string_add(string_add(string_add(string_add(string_add(bait__gen__js__Gen_headers(g), g.type_defs_out), g.global_out), from_js_string("\n")), g.fun_decls_out), g.out)
}

function bait__gen__js__Gen_process_imports(g, imports) {
	for (let _t934 = 0; _t934 < imports.length; _t934++) {
		const imp = Array_get(imports, _t934)
		if (eq(imp.lang, bait__ast__Language.bait) || map_contains(g.foreign_imports, imp.alias)) {
			continue
		}
		map_set(g.foreign_imports, imp.alias, imp.name)
	}
}

function bait__gen__js__Gen_headers(g) {
	let headers = from_js_string("const JS = {}\n")
	const _t936 = map_keys(g.foreign_imports)
	for (let _t937 = 0; _t937 < _t936.length; _t937++) {
		const alias = Array_get(_t936, _t937)
		const name = map_get(g.foreign_imports, alias)
		headers = string_add(headers, from_js_string(`${alias.str} = require("${name.str}")\n`))
	}
	return string_add(headers, from_js_string("\n"))
}

function bait__gen__js__Gen_new_temp_var(g) {
	g.tmp_counter = i32(g.tmp_counter + 1)
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

function bait__gen__js__Gen_cut_back_to(g, pos) {
	const cut = string_substr(g.out, pos, g.out.length)
	g.out = string_substr(g.out, 0, pos)
	return cut
}

function bait__gen__js__Gen_cut_before(g, to) {
	for (let i = i32(g.out.length - 1); i32(i >= 0); i = i32(i - 1)) {
		if (eq(string_get(g.out, i), to)) {
			let cut = string_substr(g.out, i32(i + 1), g.out.length)
			g.out = string_substr(g.out, 0, i)
			return cut
		}
	}
	return g.out
}

function bait__gen__js__Gen_cut_before_any(g, chars) {
	for (let i = i32(g.out.length - 1); i32(i >= 0); i = i32(i - 1)) {
		for (let _t940 = 0; _t940 < chars.length; _t940++) {
			const c = string_get(chars, _t940)
			if (eq(string_get(g.out, i), c)) {
				let cut = string_substr(g.out, i32(i + 1), g.out.length)
				g.out = string_substr(g.out, 0, i)
				return cut
			}
		}
	}
	return g.out
}

function bait__gen__js__Gen_save_stmt_offset(g) {
	Array_push(g.stmt_offsets, g.out.length)
}

function bait__gen__js__Gen_gen_test_main(g) {
	let nr_test_funs = 0
	bait__gen__js__Gen_writeln(g, from_js_string("function main() {"))
	g.indent = i32(g.indent + 1)
	if (g.has_test_begin) {
		bait__gen__js__Gen_writeln(g, from_js_string("testsuite_begin()"))
	}
	const _t943 = map_keys(g.table.fun_decls)
	for (let _t944 = 0; _t944 < _t943.length; _t944++) {
		const key = Array_get(_t943, _t944)
		const func = map_get(g.table.fun_decls, key)
		if (func.is_test) {
			nr_test_funs = i32(nr_test_funs + 1)
			const name = bait__gen__js__js_name(func.name)
			const esc_path = string_replace(g.path, from_js_string("\\"), from_js_string("\\\\"))
			bait__gen__js__Gen_writeln(g, from_js_string(`TestRunner_set_test_info(test_runner, from_js_string("${esc_path.str}"), from_js_string("${name.str}"))`))
			bait__gen__js__Gen_writeln(g, from_js_string(`${name.str}()`))
		}
	}
	if (g.has_test_end) {
		bait__gen__js__Gen_writeln(g, from_js_string("testsuite_end()"))
	}
	bait__gen__js__Gen_writeln(g, from_js_string("exit(TestRunner_exit_code(test_runner))"))
	g.indent = i32(g.indent - 1)
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
	if (eq(typ, bait__ast__I8_TYPE) || eq(typ, bait__ast__I16_TYPE) || eq(typ, bait__ast__I32_TYPE) || eq(typ, bait__ast__I64_TYPE) || eq(typ, bait__ast__U8_TYPE) || eq(typ, bait__ast__U16_TYPE) || eq(typ, bait__ast__U32_TYPE) || eq(typ, bait__ast__U64_TYPE)) {
		bait__gen__js__Gen_write(g, from_js_string("0"))
	} else if (eq(typ, bait__ast__F32_TYPE) || eq(typ, bait__ast__F64_TYPE)) {
		bait__gen__js__Gen_write(g, from_js_string("0.0"))
	} else if (eq(typ, bait__ast__BOOL_TYPE)) {
		bait__gen__js__Gen_write(g, from_js_string("false"))
	} else if (eq(typ, bait__ast__STRING_TYPE)) {
		bait__gen__js__Gen_write(g, from_js_string("from_js_string(\"\")"))
	} else {
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
	}
}

function bait__gen__js__Gen_get_concrete_name(g, name, concrete_types) {
	let full_name = name
	for (let _t950 = 0; _t950 < concrete_types.length; _t950++) {
		const t = Array_get(concrete_types, _t950)
		full_name = string_add(full_name, string_add(from_js_string("_"), bait__ast__Table_get_sym(g.table, t).name))
	}
	return bait__gen__js__js_name(full_name)
}

function bait__gen__js__Gen_concrete_sym(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (!eq(sym.kind, bait__ast__TypeKind.generic) || eq(g.cur_concrete_types.length, 0)) {
		return sym
	}
	return bait__ast__Table_get_sym(g.table, map_get_set(g.cur_concrete_types, sym.name, 0))
}

function bait__gen__js__js_name(n) {
	const name = string_replace(string_replace(string_replace(string_replace(n, from_js_string("."), from_js_string("__")), from_js_string("[]"), from_js_string("Array_")), from_js_string("["), from_js_string("_")), from_js_string("]"), from_js_string("_"))
	if (Array_contains_string(bait__gen__js__JS_RESERVED, name)) {
		return from_js_string(`bait_${name.str}`)
	}
	return name
}


function bait__gen__js__Gen_stmts(g, stmts) {
	bait__gen__js__Gen_save_stmt_offset(g)
	g.indent = i32(g.indent + 1)
	for (let _t953 = 0; _t953 < stmts.length; _t953++) {
		const stmt = Array_get(stmts, _t953)
		bait__gen__js__Gen_stmt(g, stmt)
	}
	g.indent = i32(g.indent - 1)
}

function bait__gen__js__Gen_stmt(g, stmt) {
	if (stmt instanceof bait__ast__AssertStmt) {
		bait__gen__js__Gen_assert_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__AssignStmt) {
		bait__gen__js__Gen_assign_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__ConstDecl) {
		bait__gen__js__Gen_const_decl(g, stmt)
	} else if (stmt instanceof bait__ast__ExprStmt) {
		bait__gen__js__Gen_save_stmt_offset(g)
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
	} else if (stmt instanceof bait__ast__IfMatch) {
		bait__gen__js__Gen_if_match(g, stmt)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
		bait__gen__js__Gen_interface_decl(g, stmt)
	} else if (stmt instanceof bait__ast__LoopControlStmt) {
		bait__gen__js__Gen_loop_control_stmt(g, stmt)
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
	bait__gen__js__Gen_save_stmt_offset(g)
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
	bait__gen__js__Gen_save_stmt_offset(g)
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
	g.indent = i32(g.indent + 1)
	for (let _t967 = 0; _t967 < node.fields.length; _t967++) {
		const field = Array_get(node.fields, _t967)
		bait__gen__js__Gen_write(g, from_js_string(`${field.name.str}: `))
		bait__gen__js__Gen_expr(g, field.expr)
		bait__gen__js__Gen_writeln(g, from_js_string(","))
	}
	g.indent = i32(g.indent - 1)
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
	if (string_eq(i, from_js_string(""))) {
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
	bait__gen__js__Gen_writeln(g, from_js_string(`const ${keys_var.str} = Map_keys(${container.str})`))
	const i = bait__gen__js__Gen_new_temp_var(g)
	bait__gen__js__Gen_writeln(g, from_js_string(`for (let ${i.str} = 0; ${i.str} < ${keys_var.str}.length; ${i.str}++) {`))
	bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${bait__gen__js__js_name(node.idxvar).str} = Array_get(${keys_var.str}, ${i.str})`))
	bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${bait__gen__js__js_name(node.valvar.name).str} = Map_get(${container.str}, ${node.idxvar.str})`))
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
	bait__gen__js__Gen_save_stmt_offset(g)
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


let _t976 = undefined
if (string_eq(os__platform(), from_js_string("win32"))) {
	_t976 = from_js_string("\\r\\n")
} else {
	_t976 = from_js_string("\\n")
}
const bait__gen__js__LB = _t976
function bait__gen__js__Gen_get_str_fun(g, typ) {
	Array_push(g.table.needed_str_funs, typ)
	const sym = bait__ast__Table_get_sym(g.table, typ)
	return bait__gen__js__js_name(from_js_string(`${sym.name.str}_str`))
}

function bait__gen__js__Gen_generate_str_fun(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	const name = bait__gen__js__js_name(from_js_string(`${sym.name.str}_str`))
	if (Array_contains_bait__ast__Type(g.generated_str_funs, typ)) {
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
		for (let _t982 = 0; _t982 < info.fields.length; _t982++) {
			const field = Array_get(info.fields, _t982)
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
		for (let _t987 = 0; _t987 < info.variants.length; _t987++) {
			const bait_var = Array_get(info.variants, _t987)
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
		for (let _t989 = 0; _t989 < info.vals.length; _t989++) {
			const val = Array_get(info.vals, _t989)
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\t\tcase ${bait__gen__js__js_name(sym.name).str}.${val.str}: return from_js_string("${val.str}")\n`))
		}
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string("\t}\n}\n\n"))
		return 
	}
	if (eq(sym.kind, bait__ast__TypeKind.result)) {
		const par_fun_name = bait__gen__js__Gen_get_str_fun(g, sym.parent)
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`function ${name.str}(it, indent) {
	return ${par_fun_name.str}(it, indent)
}`))
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
	g.indent = i32(g.indent + 1)
	for (let _t995 = 0; _t995 < node.fields.length; _t995++) {
		const field = Array_get(node.fields, _t995)
		bait__gen__js__Gen_writeln(g, from_js_string(`this.${field.name.str} = ${field.name.str}`))
	}
	g.indent = i32(g.indent - 1)
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


function bait__gen__c__Gen_assert_stmt(g, node) {
	bait__gen__c__Gen_write(g, from_js_string("if ("))
	bait__gen__c__Gen_expr(g, node.expr)
	bait__gen__c__Gen_writeln(g, from_js_string(") {"))
	bait__gen__c__Gen_writeln(g, from_js_string("\tTestRunner_assert_pass(&test_runner);"))
	bait__gen__c__Gen_writeln(g, from_js_string("} else {"))
	if (node.expr instanceof bait__ast__InfixExpr) {
		const expr = node.expr
		bait__gen__c__Gen_write(g, from_js_string(`\tTestRunner_set_assert_info(&test_runner, ${i32_str(node.pos.line).str}, from_c_string("assert `))
		bait__gen__c__Gen_assert_side_expr(g, expr.left)
		bait__gen__c__Gen_write(g, from_js_string(` ${bait__token__Token_js_repr(expr.op).str} `))
		bait__gen__c__Gen_assert_side_expr(g, expr.right)
		bait__gen__c__Gen_write(g, from_js_string("\"), "))
		bait__gen__c__Gen_expr_to_string(g, expr.left, expr.left_type)
		bait__gen__c__Gen_write(g, from_js_string(", "))
		bait__gen__c__Gen_expr_to_string(g, expr.right, expr.right_type)
		bait__gen__c__Gen_writeln(g, from_js_string(");"))
		bait__gen__c__Gen_writeln(g, from_js_string("\tTestRunner_assert_fail_infix(&test_runner);"))
	} else {
		bait__gen__c__Gen_write(g, from_js_string(`\tTestRunner_set_assert_info(&test_runner, ${i32_str(node.pos.line).str}, from_c_string("assert `))
		bait__gen__c__Gen_assert_side_expr(g, node.expr)
		bait__gen__c__Gen_writeln(g, from_js_string("\"), from_c_string(\"\"), from_c_string(\"\"));"))
		bait__gen__c__Gen_writeln(g, from_js_string("\tTestRunner_assert_fail(&test_runner);"))
	}
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__c__Gen_assert_side_expr(g, node) {
	if (node instanceof bait__ast__BoolLiteral) {
		bait__gen__c__Gen_bool_literal(g, node)
	} else if (node instanceof bait__ast__IntegerLiteral) {
		bait__gen__c__Gen_integer_literal(g, node)
	} else if (node instanceof bait__ast__StringLiteral) {
		bait__gen__c__Gen_write(g, from_js_string("'"))
		bait__gen__c__Gen_write(g, bait__util__escape_linebreak(node.val))
		bait__gen__c__Gen_write(g, from_js_string("'"))
	} else if (node instanceof bait__ast__CharLiteral) {
		bait__gen__c__Gen_write(g, from_js_string("`"))
		bait__gen__c__Gen_write(g, node.val)
		bait__gen__c__Gen_write(g, from_js_string("`"))
	} else if (node instanceof bait__ast__ArrayInit) {
		bait__gen__c__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = Array_get(node.exprs, i)
			bait__gen__c__Gen_assert_side_expr(g, expr)
			if (i32(i < i32(node.exprs.length - 1))) {
				bait__gen__c__Gen_write(g, from_js_string(", "))
			}
		}
		bait__gen__c__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__Ident) {
		bait__gen__c__Gen_write(g, node.name)
	} else if (node instanceof bait__ast__ArrayInit) {
		bait__gen__c__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = Array_get(node.exprs, i)
			bait__gen__c__Gen_assert_side_expr(g, expr)
			if (i32(i < i32(node.exprs.length - 1))) {
				bait__gen__c__Gen_write(g, from_js_string(", "))
			}
		}
		bait__gen__c__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__IndexExpr) {
		bait__gen__c__Gen_assert_side_expr(g, node.left)
		bait__gen__c__Gen_write(g, from_js_string("["))
		bait__gen__c__Gen_assert_side_expr(g, node.index)
		bait__gen__c__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__SelectorExpr) {
		bait__gen__c__Gen_assert_side_expr(g, node.expr)
		bait__gen__c__Gen_write(g, from_js_string(`.${node.field_name.str}`))
	} else if (node instanceof bait__ast__ComptimeVar) {
		bait__gen__c__Gen_write(g, from_js_string("$"))
		bait__gen__c__Gen_write(g, node.name)
	} else {
		bait__gen__c__Gen_write(g, from_js_string("UNHANDLED EXPR"))
	}
}


const bait__gen__c__C_RESERVED = new bait_Array({ data: [from_js_string("auto"), from_js_string("break"), from_js_string("case"), from_js_string("char"), from_js_string("const"), from_js_string("continue"), from_js_string("default"), from_js_string("do"), from_js_string("double"), from_js_string("else"), from_js_string("enum"), from_js_string("extern"), from_js_string("float"), from_js_string("for"), from_js_string("goto"), from_js_string("if"), from_js_string("inline"), from_js_string("int"), from_js_string("long"), from_js_string("register"), from_js_string("restrict"), from_js_string("return"), from_js_string("short"), from_js_string("signed"), from_js_string("sizeof"), from_js_string("static"), from_js_string("struct"), from_js_string("switch"), from_js_string("typedef"), from_js_string("union"), from_js_string("unsigned"), from_js_string("void"), from_js_string("volatile"), from_js_string("while"), from_js_string("main"), from_js_string("exit")], length: 36 })
function bait__gen__c__Gen({ pref = new bait__preference__Prefs({}), table = new bait__ast__Table({}), path = from_js_string(""), pkg = from_js_string(""), main_inits_out = from_js_string(""), type_defs_out = from_js_string("// Type definitions\n"), fun_decls_out = from_js_string("// Function declarations\n"), type_impls_out = from_js_string("// Type implementations\n"), globals_out = from_js_string("// Globals\n"), out = from_js_string("// Main code\n"), indent = -1, empty_line = true, stmt_offsets = new bait_Array({ data: [], length: 0 }), foreign_imports = new bait_Array({ data: [], length: 0 }), generated_eq_funs = new bait_Array({ data: [], length: 0 }), tmp_counter = 0, cur_concrete_types = new map({ data: new Map([]), length: 0 }), cur_fun = new bait__ast__FunDecl({}), is_lhs_assign = false, is_array_map_set = false, is_for_loop_head = false, has_test_begin = false, has_test_end = false, baitexe = from_js_string(""), baitdir = from_js_string(""), baithash = from_js_string("") }) {
	this.pref = pref
	this.table = table
	this.path = path
	this.pkg = pkg
	this.main_inits_out = main_inits_out
	this.type_defs_out = type_defs_out
	this.fun_decls_out = fun_decls_out
	this.type_impls_out = type_impls_out
	this.globals_out = globals_out
	this.out = out
	this.indent = indent
	this.empty_line = empty_line
	this.stmt_offsets = stmt_offsets
	this.foreign_imports = foreign_imports
	this.generated_eq_funs = generated_eq_funs
	this.tmp_counter = tmp_counter
	this.cur_concrete_types = cur_concrete_types
	this.cur_fun = cur_fun
	this.is_lhs_assign = is_lhs_assign
	this.is_array_map_set = is_array_map_set
	this.is_for_loop_head = is_for_loop_head
	this.has_test_begin = has_test_begin
	this.has_test_end = has_test_end
	this.baitexe = baitexe
	this.baitdir = baitdir
	this.baithash = baithash
}
function bait__gen__c__gen(files, table, pref) {
	let g = new bait__gen__c__Gen({ pref: pref, table: table })
	bait__gen__c__Gen_write_types(g)
	bait__gen__c__Gen_gen_equality_funs(g)
	for (let _t1002 = 0; _t1002 < files.length; _t1002++) {
		const file = Array_get(files, _t1002)
		g.path = file.path
		g.pkg = file.pkg_name
		bait__gen__c__Gen_process_imports(g, file.imports)
		bait__gen__c__Gen_stmts(g, file.stmts)
		g.out = string_add(g.out, from_js_string("\n"))
	}
	if (pref.is_test) {
		bait__gen__c__Gen_gen_test_main(g)
	}
	if (!g.pref.is_library) {
		bait__gen__c__Gen_c_main(g)
	}
	return string_add(string_add(string_add(string_add(string_add(string_add(bait__gen__c__Gen_headers(g), g.type_defs_out), g.fun_decls_out), g.type_impls_out), g.globals_out), from_js_string("\n")), g.out)
}

function bait__gen__c__Gen_process_imports(g, imports) {
	for (let _t1005 = 0; _t1005 < imports.length; _t1005++) {
		const imp = Array_get(imports, _t1005)
		if (eq(imp.lang, bait__ast__Language.bait) || Array_contains_string(g.foreign_imports, imp.name)) {
			continue
		}
		Array_push(g.foreign_imports, imp.name)
	}
}

function bait__gen__c__Gen_headers(g) {
	let headers = from_js_string("// Headers and includes\n")
	for (let _t1007 = 0; _t1007 < g.foreign_imports.length; _t1007++) {
		const name = Array_get(g.foreign_imports, _t1007)
		headers = string_add(headers, from_js_string(`#include <${name.str}>\n`))
	}
	return string_add(headers, from_js_string("\n"))
}

function bait__gen__c__Gen_gen_test_main(g) {
	let nr_test_funs = 0
	bait__gen__c__Gen_writeln(g, from_js_string("int bait_main() {"))
	g.indent = i32(g.indent + 2)
	if (g.has_test_begin) {
		bait__gen__c__Gen_writeln(g, from_js_string("testsuite_begin();"))
	}
	const _t1009 = map_keys(g.table.fun_decls)
	for (let _t1010 = 0; _t1010 < _t1009.length; _t1010++) {
		const key = Array_get(_t1009, _t1010)
		const func = map_get(g.table.fun_decls, key)
		if (func.is_test) {
			nr_test_funs = i32(nr_test_funs + 1)
			const name = bait__gen__c__c_name(func.name)
			const esc_path = string_replace(g.path, from_js_string("\\"), from_js_string("\\\\"))
			bait__gen__c__Gen_writeln(g, from_js_string(`TestRunner_set_test_info(&test_runner, from_c_string("${esc_path.str}"), from_c_string("${name.str}"));`))
			bait__gen__c__Gen_writeln(g, from_js_string(`${name.str}();`))
		}
	}
	if (g.has_test_end) {
		bait__gen__c__Gen_writeln(g, from_js_string("testsuite_end();"))
	}
	bait__gen__c__Gen_writeln(g, from_js_string("exit(TestRunner_exit_code(test_runner));"))
	g.indent = i32(g.indent - 2)
	bait__gen__c__Gen_writeln(g, from_js_string("}\n"))
	if (eq(nr_test_funs, 0)) {
		bait__errors__generic_error(from_js_string(`${g.path.str} contains no tests`))
		exit(1)
	}
}

function bait__gen__c__Gen_c_main(g) {
	bait__gen__c__Gen_writeln(g, from_js_string("int main(int argc, char* argv[]) {"))
	bait__gen__c__Gen_writeln(g, g.main_inits_out)
	bait__gen__c__Gen_writeln(g, from_js_string("\tbait_main();"))
	bait__gen__c__Gen_writeln(g, from_js_string("\treturn 0;"))
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__c__Gen_get_concrete_name(g, name, concrete_types) {
	let full_name = name
	for (let _t1014 = 0; _t1014 < concrete_types.length; _t1014++) {
		const t = Array_get(concrete_types, _t1014)
		full_name = string_add(full_name, string_add(from_js_string("_"), bait__ast__Table_get_sym(g.table, t).name))
	}
	return bait__gen__c__c_name(full_name)
}

function bait__gen__c__Gen_new_temp_var(g) {
	g.tmp_counter = i32(g.tmp_counter + 1)
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

function bait__gen__c__Gen_cut_before(g, to) {
	for (let i = i32(g.out.length - 1); i32(i >= 0); i = i32(i - 1)) {
		if (eq(string_get(g.out, i), to)) {
			let cut = string_substr(g.out, i32(i + 1), g.out.length)
			g.out = string_substr(g.out, 0, i)
			return cut
		}
	}
	return g.out
}

function bait__gen__c__Gen_cut_before_any(g, chars) {
	for (let i = i32(g.out.length - 1); i32(i >= 0); i = i32(i - 1)) {
		for (let _t1017 = 0; _t1017 < chars.length; _t1017++) {
			const c = string_get(chars, _t1017)
			if (eq(string_get(g.out, i), c)) {
				let cut = string_substr(g.out, i32(i + 1), g.out.length)
				g.out = string_substr(g.out, 0, i)
				return cut
			}
		}
	}
	return g.out
}

function bait__gen__c__Gen_cut_back_to(g, pos) {
	const cut = string_substr(g.out, pos, g.out.length)
	g.out = string_substr(g.out, 0, pos)
	return cut
}

function bait__gen__c__Gen_save_stmt_offset(g) {
	Array_push(g.stmt_offsets, g.out.length)
}

function bait__gen__c__c_name(n) {
	const name = string_replace(string_replace(n, from_js_string("."), from_js_string("__")), from_js_string("[]"), from_js_string("Array_"))
	if (Array_contains_string(bait__gen__c__C_RESERVED, name)) {
		return from_js_string(`bait_${name.str}`)
	}
	return name
}


function bait__gen__c__Gen_comptime_var(g, node) {
	bait__gen__c__Gen_write(g, from_js_string("from_c_string(\""))
	bait__gen__c__Gen_write(g, bait__gen__c__Gen_get_comptime_val(g, node.name, node.pos))
	bait__gen__c__Gen_write(g, from_js_string("\")"))
}

function bait__gen__c__Gen_get_comptime_val(g, name, pos) {
	let _t1020 = undefined
	if (string_eq(name, from_js_string("PKG"))) {
		_t1020 = g.pkg
	} else if (string_eq(name, from_js_string("ABS_FILE"))) {
		_t1020 = string_replace(os__abs_path(g.path), from_js_string("\\"), from_js_string("\\\\"))
	} else if (string_eq(name, from_js_string("FILE"))) {
		_t1020 = string_replace(g.path, from_js_string("\\"), from_js_string("\\\\"))
	} else if (string_eq(name, from_js_string("LINE"))) {
		_t1020 = i32_str(pos.line)
	} else if (string_eq(name, from_js_string("FILE_LINE"))) {
			const file = bait__gen__c__Gen_get_comptime_val(g, from_js_string("FILE"), pos)
		const line = bait__gen__c__Gen_get_comptime_val(g, from_js_string("LINE"), pos)
		_t1020 = from_js_string(`${file.str}:${line.str}`)
	} else if (string_eq(name, from_js_string("FUN"))) {
		_t1020 = g.cur_fun.name
	} else if (string_eq(name, from_js_string("BAITEXE"))) {
		_t1020 = bait__gen__c__Gen_comptime_baitexe(g)
	} else if (string_eq(name, from_js_string("BAITDIR"))) {
		_t1020 = bait__gen__c__Gen_comptime_baitdir(g)
	} else if (string_eq(name, from_js_string("BAITHASH"))) {
		_t1020 = bait__gen__c__Gen_comptime_baithash(g)
	} else {
		_t1020 = from_js_string("")
	}
	return _t1020
}

function bait__gen__c__Gen_comptime_baitexe(g) {
	if (eq(g.baitexe.length, 0)) {
		g.baitexe = string_replace(os__executable(), from_js_string("\\"), from_js_string("\\\\"))
	}
	return g.baitexe
}

function bait__gen__c__Gen_comptime_baitdir(g) {
	if (eq(g.baitdir.length, 0)) {
		g.baitdir = string_trim_right(os__dir(bait__gen__c__Gen_comptime_baitexe(g)), from_js_string("\\"))
	}
	return g.baitdir
}

function bait__gen__c__Gen_comptime_baithash(g) {
	if (eq(g.baithash.length, 0)) {
		const bd = bait__gen__c__Gen_comptime_baitdir(g)
		g.baithash = string_trim_space(os__exec(from_js_string(`git -C ${bd.str} rev-parse --short HEAD`)).stdout)
	}
	return g.baithash
}


function bait__gen__c__Gen_gen_equality_funs(g) {
	for (let _t1024 = 0; _t1024 < g.table.needed_equality_funs.length; _t1024++) {
		const typ = Array_get(g.table.needed_equality_funs, _t1024)
		bait__gen__c__Gen_equality_fun(g, typ)
	}
}

function bait__gen__c__Gen_equality_fun(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (eq(sym.kind, bait__ast__TypeKind.number) || eq(sym.kind, bait__ast__TypeKind.other)) {
		return from_js_string("")
	}
	if (eq(sym.kind, bait__ast__TypeKind.enum_)) {
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
}


function bait__gen__c__Gen_expr(g, expr) {
	if (expr instanceof bait__ast__AnonFun) {
		bait__gen__c__Gen_anon_fun(g, expr)
	} else if (expr instanceof bait__ast__ArrayInit) {
		bait__gen__c__Gen_array_init(g, expr)
	} else if (expr instanceof bait__ast__AsCast) {
		bait__gen__c__Gen_as_cast(g, expr)
	} else if (expr instanceof bait__ast__BoolLiteral) {
		bait__gen__c__Gen_bool_literal(g, expr)
	} else if (expr instanceof bait__ast__CallExpr) {
		bait__gen__c__Gen_call_expr(g, expr)
	} else if (expr instanceof bait__ast__CharLiteral) {
		bait__gen__c__Gen_char_literal(g, expr)
	} else if (expr instanceof bait__ast__ComptimeVar) {
		bait__gen__c__Gen_comptime_var(g, expr)
	} else if (expr instanceof bait__ast__EnumVal) {
		bait__gen__c__Gen_enum_val(g, expr)
	} else if (expr instanceof bait__ast__FloatLiteral) {
		panic(from_js_string("floats not implemented"))
	} else if (expr instanceof bait__ast__HashExpr) {
		bait__gen__c__Gen_hash_expr(g, expr)
	} else if (expr instanceof bait__ast__Ident) {
		bait__gen__c__Gen_ident(g, expr)
	} else if (expr instanceof bait__ast__IfMatch) {
		bait__gen__c__Gen_if_match(g, expr)
	} else if (expr instanceof bait__ast__IndexExpr) {
		bait__gen__c__Gen_index_expr(g, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		bait__gen__c__Gen_infix_expr(g, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		bait__gen__c__Gen_integer_literal(g, expr)
	} else if (expr instanceof bait__ast__MapInit) {
		panic(from_js_string("maps not implemented"))
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
	} else if (expr instanceof bait__ast__Void) {
	} else if (expr instanceof bait__ast__EmptyExpr) {
		panic(from_js_string("unexpected EmptyExpr"))
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
	g.indent = i32(g.indent + 1)
	for (let _t1033 = 0; _t1033 < node.exprs.length; _t1033++) {
		const expr = Array_get(node.exprs, _t1033)
		bait__gen__c__Gen_expr(g, expr)
		bait__gen__c__Gen_write(g, from_js_string(", "))
	}
	g.indent = i32(g.indent - 1)
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

function bait__gen__c__Gen_char_literal(g, node) {
	bait__gen__c__Gen_write(g, from_js_string(`'${node.val.str}'`))
}

function bait__gen__c__Gen_enum_val(g, node) {
	bait__gen__c__Gen_write(g, bait__gen__c__c_name(node.val))
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
		if (eq(node.op, bait__token__Token.ne)) {
			bait__gen__c__Gen_write(g, from_js_string("!"))
		}
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
	bait__gen__c__Gen_write(g, from_js_string(`interpolate(new_array_from_c(${i32_str(len).str}, ${i32_str(len).str}, sizeof(string), (string[${i32_str(len).str}]){`))
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
	for (let _t1045 = 0; _t1045 < node.fields.length; _t1045++) {
		const field = Array_get(node.fields, _t1045)
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
	const sym = bait__gen__c__Gen_concrete_sym(g, node.typ)
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


function bait__gen__c__Gen_anon_fun(g, node) {
	const was_line_empty = g.empty_line
	const start = g.out.length
	const last_indent = g.indent
	g.indent = 0
	bait__gen__c__Gen_fun_decl(g, node.decl)
	g.type_impls_out = string_add(g.type_impls_out, string_substr(g.out, start, g.out.length))
	g.out = string_substr(g.out, 0, start)
	g.indent = last_indent
	g.empty_line = was_line_empty
	bait__gen__c__Gen_write(g, node.decl.name)
}

function bait__gen__c__Gen_fun_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return 
	}
	if (string_eq(node.name, from_js_string("testsuite_begin"))) {
		g.has_test_begin = true
	} else if (string_eq(node.name, from_js_string("testsuite_end"))) {
		g.has_test_end = true
	}
	if (i32(node.generic_names.length > 0) && eq(g.cur_concrete_types.length, 0)) {
		const gtypes = map_get_set(g.table.generic_fun_types, bait__ast__FunDecl_key(node), new bait_Array({ data: [], length: 0 }))
		for (let _t1055 = 0; _t1055 < gtypes.length; _t1055++) {
			const conc_types = Array_get(gtypes, _t1055)
			for (let i = 0; i < node.generic_names.length; i++) {
				const gn = Array_get(node.generic_names, i)
				map_set(g.cur_concrete_types, gn, Array_get(conc_types, i))
			}
			bait__gen__c__Gen_fun_decl(g, node)
			map_clear(g.cur_concrete_types)
		}
		return 
	}
	g.cur_fun = node
	const type_str = bait__gen__c__Gen_typ(g, node.return_type)
	let name = bait__gen__c__c_name(node.name)
	if (node.is_method) {
		const sym = bait__ast__Table_get_sym(g.table, Array_get(node.params, 0).typ)
		name = bait__gen__c__c_name(string_add(string_add(sym.name, from_js_string("_")), node.name))
	}
	if (i32(g.cur_concrete_types.length > 0)) {
		name = bait__gen__c__Gen_get_concrete_name(g, name, map_values(g.cur_concrete_types))
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
		const s = string_add(string_add(bait__gen__c__Gen_typ(g, p.typ), from_js_string(" ")), bait__gen__c__c_name(p.name))
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
		const final_sym = bait__ast__Table_get_final_sym(g.table, sym)
		if (eq(final_sym.kind, bait__ast__TypeKind.array)) {
			if (string_eq(name, from_js_string("push"))) {
				bait__gen__c__Gen_gen_array_method(g, name, node, final_sym, true)
				return 
			}
			if (string_eq(name, from_js_string("push_many_with_len"))) {
				bait__gen__c__Gen_gen_array_method(g, name, node, final_sym, false)
				return 
			}
			if (string_eq(name, from_js_string("push_many"))) {
				bait__gen__c__Gen_gen_array_push_many(g, node)
				return 
			}
		}
		name = bait__gen__c__c_name(string_add(string_add(sym.name, from_js_string("_")), node.name))
	} else if (!eq(node.lang, bait__ast__Language.bait)) {
		name = string_replace(node.name, from_js_string("C."), from_js_string(""))
	}
	if (i32(node.concrete_types.length > 0)) {
		name = bait__gen__c__Gen_get_concrete_name(g, name, node.concrete_types)
	}
	bait__gen__c__Gen_write(g, name)
	if (!node.is_method && Array_contains_string(new bait_Array({ data: [from_js_string("println"), from_js_string("eprintln"), from_js_string("print"), from_js_string("eprint")], length: 4 }), node.name)) {
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
	for (let i = 1; i32(i < node.args.length); i = i32(i + 1)) {
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


function bait__gen__c__Gen_if_match(g, node) {
	if (node.is_comptime) {
		if (i32(node.ct_eval_branch >= 0)) {
			bait__gen__c__Gen_stmts(g, Array_get(node.branches, node.ct_eval_branch).stmts)
		}
		return 
	}
	const tmp = bait__gen__c__Gen_new_temp_var(g)
	let cut = from_js_string("")
	if (node.is_expr) {
		cut = string_trim_left(bait__gen__c__Gen_cut_back_to(g, Array_last(g.stmt_offsets)), from_js_string("\t"))
		g.empty_line = true
		const typ = bait__gen__c__Gen_typ(g, node.typ)
		bait__gen__c__Gen_writeln(g, from_js_string(`${typ.str} ${tmp.str};`))
	}
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
		const branch_start = g.out.length
		bait__gen__c__Gen_stmts(g, b.stmts)
		if (node.is_expr) {
			if (g.empty_line) {
				bait__gen__c__Gen_cut_before(g, u8("\n"))
			}
			const last_line_cut = bait__gen__c__Gen_cut_before_any(g, from_js_string("\n\t"))
			const branch_cut = string_trim_right(bait__gen__c__Gen_cut_back_to(g, branch_start), from_js_string("\n\t"))
			if (i32(branch_cut.length > 0)) {
				bait__gen__c__Gen_writeln(g, branch_cut)
			}
			bait__gen__c__Gen_writeln(g, from_js_string(`\t${tmp.str} = ${last_line_cut.str};`))
		}
	}
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
	bait__gen__c__Gen_save_stmt_offset(g)
	if (node.is_expr) {
		bait__gen__c__Gen_write(g, cut)
		bait__gen__c__Gen_write(g, tmp)
	}
}


function bait__gen__c__Gen_stmts(g, stmts) {
	bait__gen__c__Gen_save_stmt_offset(g)
	g.indent = i32(g.indent + 1)
	for (let _t1081 = 0; _t1081 < stmts.length; _t1081++) {
		const stmt = Array_get(stmts, _t1081)
		bait__gen__c__Gen_stmt(g, stmt)
	}
	g.indent = i32(g.indent - 1)
}

function bait__gen__c__Gen_stmt(g, stmt) {
	if (stmt instanceof bait__ast__AssertStmt) {
		bait__gen__c__Gen_assert_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__AssignStmt) {
		bait__gen__c__Gen_assign_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__ConstDecl) {
		bait__gen__c__Gen_const_decl(g, stmt)
	} else if (stmt instanceof bait__ast__EnumDecl) {
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
	} else if (stmt instanceof bait__ast__GlobalDecl) {
		bait__gen__c__Gen_global_decl(g, stmt)
	} else if (stmt instanceof bait__ast__IfMatch) {
		bait__gen__c__Gen_if_match(g, stmt)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
		bait__gen__c__Gen_interface_decl(g, stmt)
	} else if (stmt instanceof bait__ast__LoopControlStmt) {
		bait__gen__c__Gen_loop_control_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__ReturnStmt) {
		bait__gen__c__Gen_return_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__StructDecl) {
	} else if (stmt instanceof bait__ast__TypeDecl) {
	} else if (stmt instanceof bait__ast__EmptyStmt) {
		panic(from_js_string("unexpected EmptyStmt"))
	}
}

function bait__gen__c__Gen_assign_stmt(g, node) {
	bait__gen__c__Gen_save_stmt_offset(g)
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
	bait__gen__c__Gen_save_stmt_offset(g)
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
	if (string_eq(i, from_js_string(""))) {
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

function bait__gen__c__Gen_loop_control_stmt(g, node) {
	bait__gen__c__Gen_writeln(g, string_add(bait__token__Token_c_repr(node.kind), from_js_string(";")))
}

function bait__gen__c__Gen_global_decl(g, node) {
	const name = bait__gen__c__c_name(node.name)
	const expr = bait__gen__c__Gen_expr_string(g, node.expr)
	const typ = bait__gen__c__Gen_typ(g, node.typ)
	g.globals_out = string_add(g.globals_out, from_js_string(`${typ.str} ${name.str} = ${expr.str};\n`))
}

function bait__gen__c__Gen_interface_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return 
	}
	bait__errors__error(g.path, node.pos, from_js_string("Bait interfaces are not yet supported"))
	exit(1)
}

function bait__gen__c__Gen_return_stmt(g, node) {
	bait__gen__c__Gen_save_stmt_offset(g)
	bait__gen__c__Gen_write(g, from_js_string("return"))
	if (!(node.expr instanceof bait__ast__EmptyExpr)) {
		bait__gen__c__Gen_write(g, from_js_string(" "))
		bait__gen__c__Gen_expr(g, node.expr)
	}
	bait__gen__c__Gen_writeln(g, from_js_string(";"))
}


function bait__gen__c__Gen_concrete_sym(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (!eq(sym.kind, bait__ast__TypeKind.generic) || eq(g.cur_concrete_types.length, 0)) {
		return sym
	}
	return bait__ast__Table_get_sym(g.table, map_get_set(g.cur_concrete_types, sym.name, 0))
}

function bait__gen__c__Gen_typ(g, typ) {
	const sym = bait__gen__c__Gen_concrete_sym(g, typ)
	const name = string_replace(string_replace(string_replace(sym.name, from_js_string("[]"), from_js_string("Array_")), from_js_string("C."), from_js_string("")), from_js_string("."), from_js_string("__"))
	const ptrs = string_repeat(from_js_string("*"), bait__ast__Type_get_nr_amp(typ))
	let _t1096 = undefined
	if (eq(sym.kind, bait__ast__TypeKind.enum_)) {
		_t1096 = from_js_string("enum ")
	} else {
		_t1096 = from_js_string("")
	}
	const prefix = _t1096
	return string_add(string_add(prefix, name), ptrs)
}

function bait__gen__c__Gen_write_types(g) {
	for (let _t1097 = 0; _t1097 < g.table.type_symbols.length; _t1097++) {
		const sym = Array_get(g.table.type_symbols, _t1097)
		if (string_starts_with(sym.name, from_js_string("C."))) {
			continue
		}
		const cname = bait__gen__c__c_name(sym.name)
		if (sym.info instanceof bait__ast__StructInfo) {
			const info = sym.info
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(`typedef struct ${cname.str} ${cname.str};\n`))
			g.type_impls_out = string_add(g.type_impls_out, from_js_string(`struct ${cname.str} {\n`))
			for (let _t1100 = 0; _t1100 < info.fields.length; _t1100++) {
				const field = Array_get(info.fields, _t1100)
				const type_str = bait__gen__c__Gen_typ(g, field.typ)
				const field_name = bait__gen__c__c_name(field.name)
				g.type_impls_out = string_add(g.type_impls_out, from_js_string(`\t${type_str.str} ${field_name.str};\n`))
			}
			g.type_impls_out = string_add(g.type_impls_out, from_js_string("};\n"))
		} else if (sym.info instanceof bait__ast__ArrayInfo) {
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(`typedef Array ${cname.str};\n`))
		} else if (eq(sym.kind, bait__ast__TypeKind.fun_)) {
			const info = sym.info
			if (!info.is_alias) {
				continue
			}
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(`typedef ${bait__gen__c__Gen_typ(g, info.return_type).str} (*${cname.str})(`))
			for (let i = 0; i < info.param_types.length; i++) {
				const param = Array_get(info.param_types, i)
				g.type_defs_out = string_add(g.type_defs_out, bait__gen__c__Gen_typ(g, param))
				if (i32(i < i32(info.param_types.length - 1))) {
					g.type_defs_out = string_add(g.type_defs_out, from_js_string(", "))
				}
			}
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(");\n"))
		} else if (eq(sym.kind, bait__ast__TypeKind.alias_type) || eq(sym.kind, bait__ast__TypeKind.number)) {
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(`typedef ${bait__gen__c__Gen_typ(g, sym.parent).str} ${cname.str};\n`))
		} else if (eq(sym.kind, bait__ast__TypeKind.enum_)) {
			const info = sym.info
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(`enum ${cname.str} {\n`))
			for (let _t1103 = 0; _t1103 < info.vals.length; _t1103++) {
				const val = Array_get(info.vals, _t1103)
				g.type_defs_out = string_add(g.type_defs_out, from_js_string(`\t${bait__gen__c__c_name(val).str},\n`))
			}
			g.type_defs_out = string_add(g.type_defs_out, from_js_string("};\n"))
		}
	}
}


function time__Stopwatch({ start = 0, end = 0, elapsed = 0 }) {
	this.start = start
	this.end = end
	this.elapsed = elapsed
}
function time__perf_now() {
	return BigInt(Math.floor(performance.now()))
}

function time__Stopwatch_start(w) {
	w.start = time__perf_now()
	w.end = BigInt(0n)
}

function time__Stopwatch_stop(w) {
	w.end = time__perf_now()
	w.elapsed = u64(w.elapsed + BigInt(u64(w.end - BigInt(w.start))))
}

function time__Stopwatch_restart(w) {
	w.start = time__perf_now()
	w.end = BigInt(0n)
	w.elapsed = BigInt(0n)
}

function time__Stopwatch_elapsed(w) {
	if (u64(w.start > BigInt(BigInt(0n))) && eq(w.end, BigInt(BigInt(0n)))) {
		return u64(w.elapsed + BigInt((u64(time__perf_now() - BigInt(w.start)))))
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
	return i64(a.unix - BigInt(b.unix))
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


function bait__builder__Builder({ prefs = new bait__preference__Prefs({}), parsed_files = new bait_Array({ data: [], length: 0 }), parsed_pkgs = new bait_Array({ data: [], length: 0 }), checker = new bait__checker__Checker({}), parser = new bait__parser__Parser({}) }) {
	this.prefs = prefs
	this.parsed_files = parsed_files
	this.parsed_pkgs = parsed_pkgs
	this.checker = checker
	this.parser = parser
}
function bait__builder__Builder_bait_files_in_dir(b, dir) {
	const all_files = os__ls(dir)
	let files = new bait_Array({ data: [], length: 0 })
	for (let _t1106 = 0; _t1106 < all_files.length; _t1106++) {
		const f = Array_get(all_files, _t1106)
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

function bait__builder__Builder_parse_file(b, path, pkg) {
	const text = os__read_file(path)
	bait__parser__Parser_init(b.parser, text, path, pkg)
	return bait__parser__Parser_parse(b.parser)
}

function bait__builder__compile(prefs) {
	let b = new bait__builder__Builder({ prefs: prefs, parser: bait__parser__new(bait__ast__new_table(), prefs) })
	let paths = bait__builder__Builder_collect_user_files(b, prefs.command)
	if (eq(paths.length, 0)) {
		bait__errors__generic_error(from_js_string(`directory ${prefs.command.str} contains no Bait files`))
		return 1
	}
	bait__util__timers__start(from_js_string("PARSE"))
	let ast_files = new bait_Array({ data: [], length: 0 })
	for (let _t1112 = 0; _t1112 < paths.length; _t1112++) {
		const p = Array_get(paths, _t1112)
		Array_push(ast_files, bait__builder__Builder_parse_file(b, p, from_js_string("")))
	}
	for (let i = 0; i32(i < ast_files.length); i = i32(i + 1)) {
		const file = Array_get(ast_files, i)
		for (let _t1113 = 0; _t1113 < file.imports.length; _t1113++) {
			const imp = Array_get(file.imports, _t1113)
			if (!eq(imp.lang, bait__ast__Language.bait)) {
				continue
			}
			if (Array_contains_string(b.parsed_pkgs, imp.name)) {
				continue
			}
			const import_dir = bait__builder__Builder_resolve_import(b, os__dir(file.path), imp.name)
			if (!os__exists(import_dir)) {
				bait__errors__generic_error(from_js_string(`package ${imp.name.str} not found`))
				continue
			}
			let imp_paths = bait__builder__Builder_bait_files_in_dir(b, import_dir)
			if (eq(imp_paths.length, 0)) {
				bait__errors__generic_error(from_js_string(`package ${imp.name.str} contains no Bait files`))
				continue
			}
			let nr_newly_parsed = 0
			for (let _t1118 = 0; _t1118 < imp_paths.length; _t1118++) {
				const p = Array_get(imp_paths, _t1118)
				const parsed_file = bait__builder__Builder_parse_file(b, p, imp.name)
				if (eq(parsed_file.path.length, 0)) {
					bait__builder__Builder_print_infos(b, parsed_file.infos)
					continue
				}
				nr_newly_parsed = i32(nr_newly_parsed + 1)
				Array_push(paths, p)
				Array_push(ast_files, parsed_file)
			}
			if (eq(nr_newly_parsed, 0) && i32(imp_paths.length > 0)) {
				bait__errors__generic_error(from_js_string(`no files belong to package ${imp.name.str}`))
			}
			Array_push(b.parsed_pkgs, imp.name)
		}
	}
	bait__util__timers__show(from_js_string("PARSE"))
	b.parsed_files = ast_files
	if (bait__builder__Builder_print_errors_and_warnings(b, true)) {
		return 1
	}
	bait__util__timers__start(from_js_string("DEPGRAPH"))
	let deps = new map({ data: new Map([]), length: 0 })
	for (let _t1122 = 0; _t1122 < ast_files.length; _t1122++) {
		const f = Array_get(ast_files, _t1122)
		for (let _t1123 = 0; _t1123 < f.imports.length; _t1123++) {
			const imp = Array_get(f.imports, _t1123)
			if (!eq(imp.lang, bait__ast__Language.bait)) {
				continue
			}
			Array_push(map_get_set(deps, f.pkg_name, new bait_Array({ data: [], length: 0 })), imp.name)
		}
	}
	let looked = new bait_Array({ data: [], length: 0 })
	let pkg_order = new bait_Array({ data: [], length: 0 })
	bait__builder__order_pkgs(pkg_order, Array_get(ast_files, 0).pkg_name, deps, looked)
	let sorted_files = new bait_Array({ data: [], length: 0 })
	for (let _t1125 = 0; _t1125 < pkg_order.length; _t1125++) {
		const pkg = Array_get(pkg_order, _t1125)
		for (let _t1126 = 0; _t1126 < ast_files.length; _t1126++) {
			const f = Array_get(ast_files, _t1126)
			if (string_eq(f.pkg_name, pkg)) {
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
	if (os__exists_dir(b.prefs.out_name) || string_eq(os__platform(), from_js_string("win32"))) {
		b.prefs.out_name = string_add(b.prefs.out_name, from_js_string(".exe"))
	}
	bait__builder__ensure_dir_exists(os__dir(b.prefs.out_name))
	const tmp_c_path = os__join_path(os__tmp_dir(), new bait_Array({ data: [string_add(os__file_name(b.prefs.out_name), from_js_string(".c"))], length: 1 }))
	os__write_file(tmp_c_path, res)
	let cflags = from_js_string("")
	if (b.prefs.is_library) {
		cflags = string_add(cflags, from_js_string("-shared -fPIC "))
	}
	const comp_res = os__system(from_js_string(`${b.prefs.cc.str} ${tmp_c_path.str} ${cflags.str} -o ${b.prefs.out_name.str}`))
	if (!eq(comp_res, 0)) {
		return comp_res
	}
	if (b.prefs.should_run) {
		const argstr = Array_string_join(b.prefs.user_args, from_js_string(" "))
		let run_cmd = string_replace(from_js_string(`${b.prefs.out_name.str} ${argstr.str}`), from_js_string("/"), os__PATH_SEP)
		if (!string_starts_with(run_cmd, from_js_string("/"))) {
			run_cmd = string_add(string_add(from_js_string("."), os__PATH_SEP), run_cmd)
		}
		const run_res = os__system(run_cmd)
		if (!b.prefs.keep_exe) {
			os__rm(b.prefs.out_name)
		}
		return run_res
	}
	return 0
}

function bait__builder__Builder_print_infos(b, infos) {
	if (b.prefs.hide_warnings) {
		return 
	}
	for (let _t1139 = 0; _t1139 < infos.length; _t1139++) {
		const info = Array_get(infos, _t1139)
		bait__errors__Message_print(info)
	}
}

function bait__builder__Builder_print_errors_and_warnings(b, parser_errs) {
	let nr_warns = 0
	let nr_errors = 0
	for (let _t1140 = 0; _t1140 < b.parsed_files.length; _t1140++) {
		const f = Array_get(b.parsed_files, _t1140)
		nr_warns = i32(nr_warns + f.warnings.length)
		nr_errors = i32(nr_errors + f.errors.length)
		bait__builder__Builder_print_infos(b, f.infos)
		if (b.prefs.warn_is_error) {
			for (let _t1142 = 0; _t1142 < f.warnings.length; _t1142++) {
				const warn = Array_get(f.warnings, _t1142)
				bait__errors__error(warn.path, warn.pos, warn.msg)
			}
		} else if (!b.prefs.hide_warnings) {
			for (let _t1143 = 0; _t1143 < f.warnings.length; _t1143++) {
				const warn = Array_get(f.warnings, _t1143)
				bait__errors__Message_print(warn)
			}
		}
		for (let _t1144 = 0; _t1144 < f.errors.length; _t1144++) {
			const err = Array_get(f.errors, _t1144)
			bait__errors__Message_print(err)
			if (parser_errs) {
				return true
			}
		}
	}
	nr_errors = i32(nr_errors + b.checker.errors.length)
	for (let _t1146 = 0; _t1146 < b.checker.errors.length; _t1146++) {
		const err = Array_get(b.checker.errors, _t1146)
		bait__errors__Message_print(err)
	}
	return i32(nr_errors > 0) || (b.prefs.warn_is_error && i32(nr_warns > 0))
}

function bait__builder__Builder_resolve_import(b, base_dir, name) {
	const name_as_path = string_replace(name, from_js_string("."), os__PATH_SEP)
	let dir = os__resource_abs_path(os__join_path(from_js_string("lib"), new bait_Array({ data: [name_as_path], length: 1 })))
	if (os__exists(dir)) {
		return dir
	}
	if (b.prefs.is_test) {
		const project_root = bait__builder__get_project_root(os__abs_path(base_dir))
		dir = os__join_path(project_root, new bait_Array({ data: [from_js_string("src")], length: 1 }))
		if (os__exists(dir)) {
			return dir
		}
		return base_dir
	}
	return os__join_path(os__getwd(), new bait_Array({ data: [from_js_string("lib"), name_as_path], length: 2 }))
}

function bait__builder__get_project_root(abs_dir) {
	if (os__is_root(abs_dir)) {
		return from_js_string("")
	}
	const files = os__ls(abs_dir)
	if (Array_contains_string(files, from_js_string("bait.toml"))) {
		return abs_dir
	}
	return bait__builder__get_project_root(os__dir(abs_dir))
}

function bait__builder__order_pkgs(ordered, pkg, deps, looked) {
	Array_push(looked, pkg)
	for (let _t1152 = 0; _t1152 < map_get_set(deps, pkg, new bait_Array({ data: [], length: 0 })).length; _t1152++) {
		const d = Array_get(map_get_set(deps, pkg, new bait_Array({ data: [], length: 0 })), _t1152)
		if (Array_contains_string(looked, d)) {
			continue
		}
		bait__builder__order_pkgs(ordered, d, deps, looked)
	}
	if (!Array_contains_string(ordered, pkg)) {
		Array_push(ordered, pkg)
	}
}

function bait__builder__ensure_dir_exists(dir) {
	if (!os__exists(dir)) {
		os__mkdir(dir)
	}
}


function bait__builder__run_tests(prefs) {
	let files_to_test = new bait_Array({ data: [], length: 0 })
	for (let _t1156 = 0; _t1156 < prefs.args.length; _t1156++) {
		const a = Array_get(prefs.args, _t1156)
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
		if (eq(prefs.backend, bait__preference__Backend.js)) {
			test_prefs.out_name = os__join_path(os__tmp_dir(), new bait_Array({ data: [from_js_string(`test_${i32_str(i).str}.js`)], length: 1 }))
		} else {
			test_prefs.out_name = os__join_path(os__tmp_dir(), new bait_Array({ data: [from_js_string(`test_${i32_str(i).str}`)], length: 1 }))
		}
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


const bait__util__tools__VERBOSE = Array_contains_string(os__ARGS, from_js_string("--verbose")) || Array_contains_string(os__ARGS, from_js_string("-v"))
function bait__util__tools__launch_tool(name, args) {
	const base_path = os__join_path(from_js_string("/home/runner/.bait/baitjs"), new bait_Array({ data: [from_js_string("cli"), from_js_string("tools"), name], length: 3 }))
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
	if (Array_contains_string(TOOLS, prefs.command)) {
		exit(bait__util__tools__launch_tool(prefs.command, prefs.build_options))
	}
	if (string_eq(prefs.command, from_js_string("test"))) {
		exit(bait__builder__run_tests(prefs))
	}
	if (string_eq(prefs.command, from_js_string("version"))) {
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
