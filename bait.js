const js_process = require("process")
const js_fs = require("fs")
const js_path = require("path")
const js_child_process = require("child_process")

const bait__token__Precedence = {
	lowest: 0,
	cond: 1,
	as_is: 2,
	compare: 3,
	sum: 4,
	product: 5,
	prefix: 6,
	call: 7,
	index: 8
}
const bait__token__TokenKind = {
	eof: 0,
	name: 1,
	string: 2,
	char: 3,
	number: 4,
	dot: 5,
	colon: 6,
	comma: 7,
	semicolon: 8,
	plus: 9,
	minus: 10,
	mul: 11,
	div: 12,
	mod: 13,
	assign: 14,
	decl_assign: 15,
	plus_assign: 16,
	minus_assign: 17,
	mul_assign: 18,
	div_assign: 19,
	mod_assign: 20,
	eq: 21,
	ne: 22,
	lt: 23,
	gt: 24,
	le: 25,
	ge: 26,
	lpar: 27,
	rpar: 28,
	lbr: 29,
	rbr: 30,
	lcur: 31,
	rcur: 32,
	pipe: 33,
	dollar: 34,
	hash: 35,
	key_and: 36,
	key_as: 37,
	key_break: 38,
	key_const: 39,
	key_continue: 40,
	key_else: 41,
	key_enum: 42,
	key_false: 43,
	key_for: 44,
	key_fun: 45,
	key_global: 46,
	key_if: 47,
	key_import: 48,
	key_in: 49,
	key_is: 50,
	key_match: 51,
	key_mut: 52,
	key_not: 53,
	key_or: 54,
	key_package: 55,
	key_pub: 56,
	key_return: 57,
	key_struct: 58,
	key_true: 59,
	key_type: 60,
	key_typeof: 61
}
const bait__ast__ObjectKind = {
	variable: 0,
	constant: 1,
	function: 2,
	global_: 3
}
const bait__ast__TypeIdx = {
	placeholder: 0,
	void: 1,
	i8: 2,
	i16: 3,
	i32: 4,
	i64: 5,
	u8: 6,
	u16: 7,
	u32: 8,
	u64: 9,
	f32: 10,
	f64: 11,
	bool: 12,
	string: 13,
	array: 14,
	map: 15,
	any: 16
}
const bait__ast__TypeKind = {
	placeholder: 0,
	string: 1,
	array: 2,
	map: 3,
	struct_: 4,
	enum_: 5,
	sum_type: 6,
	fun_: 7
}

function array({ data = undefined, length = 0 }) {
	this.data = data
	this.length = length
}
array.prototype = {
	toString() {
		return `array{
    data: ${this.data.toString()}
    length: ${this.length.toString()}
}`}
}
function array_get(a, i) {
	return a.data[i]
}

function array_set(a, i, val) {
	a.data[i] = val
}

function array_push(a, el) {
	a.data.push(el)
	a.length += 1
}

function array_contains(a, el) {
	return a.data.includes(el)
}

function array_string_contains(a, s) {
	for (let _t0 = 0; _t0 < a.length; _t0++) {
		const el = array_get(a, _t0)
		if (string_eq(el, s)) {
			return true
		}
	}
	return false
}

function array_slice(a, start, end) {
	return new array({ data: a.data.slice(start, end), length: end - start })
}

function array_concat(a, b) {
	return new array({ data: a.data.concat(b.data), length: a.length + b.length })
}

function array_filter(a, fn) {
	return from_js_arr(a.data.filter(fn))
}

function from_js_arr(a) {
	return new array({ data: a, length: a.length })
}


function println(msg) {
	console.log(msg)
}

function eprintln(msg) {
	console.error(msg)
}

function exit(code) {
	js_process.exit(code)
}


function u8_is_capital(c) {
	return c >= "A" && c <= "Z"
}


function f32_str(n) {
	return n.toString()
}

function f64_str(n) {
	return n.toString()
}


function i8_str(n) {
	return n.toString()
}

function i16_str(n) {
	return n.toString()
}

function i32_str(n) {
	return n.toString()
}

function i64_str(n) {
	return n.toString()
}

function u8_str(n) {
	return n.toString()
}

function u16_str(n) {
	return n.toString()
}

function u32_str(n) {
	return n.toString()
}

function u64_str(n) {
	return n.toString()
}


function map({ data = undefined, length = 0 }) {
	this.data = data
	this.length = length
}
map.prototype = {
	toString() {
		return `map{
    data: ${this.data.toString()}
    length: ${this.length.toString()}
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

function map_get_set(m, key, zero) {
	if (!map_contains(m, key)) {
		map_set(m, key, zero)
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
    str: ${this.str.toString()}
    length: ${this.length.toString()}
}`}
}
string.prototype = {
	toString: function() {
		return this.str
	}
}
function string_get(s, i) {
	return s.str.charAt(i)
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
	return s.str == s.str.toUpperCase() && s.str != s.str.toLowerCase()
}

function string_add(a, b) {
	return from_js_string(a.str + b.str)
}

function string_eq(a, b) {
	return a.str === b.str
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
	for (let _t1 = 0; _t1 < arr.length; _t1++) {
		const s = array_get(arr, _t1)
		js_arr.push(s.str)
	}
	return js_arr
}


function bait__prefs__Pref({ command = from_js_string(""), out_name = from_js_string(""), args = new array({ data: [], length: 0 }), is_test = false, baitexe = from_js_string(""), baitroot = from_js_string("") }) {
	this.command = command
	this.out_name = out_name
	this.args = args
	this.is_test = is_test
	this.baitexe = baitexe
	this.baitroot = baitroot
}
bait__prefs__Pref.prototype = {
	toString() {
		return `bait__prefs__Pref{
    command: ${this.command.toString()}
    out_name: ${this.out_name.toString()}
    args: ${this.args.toString()}
    is_test: ${this.is_test.toString()}
    baitexe: ${this.baitexe.toString()}
    baitroot: ${this.baitroot.toString()}
}`}
}

function bait__token__Pos({ line = 0, col = 0 }) {
	this.line = line
	this.col = col
}
bait__token__Pos.prototype = {
	toString() {
		return `bait__token__Pos{
    line: ${this.line.toString()}
    col: ${this.col.toString()}
}`}
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


function bait__token__Token({ kind = undefined, val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.kind = kind
	this.val = val
	this.pos = pos
}
bait__token__Token.prototype = {
	toString() {
		return `bait__token__Token{
    kind: ${this.kind.toString()}
    val: ${this.val.toString()}
    pos: ${this.pos.toString()}
}`}
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


function bait__ast__AssignStmt({ op = undefined, left = undefined, left_type = 0, right = undefined, right_type = 0, pos = new bait__token__Pos({}) }) {
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
    op: ${this.op.toString()}
    left: ${this.left.toString()}
    left_type: ${this.left_type.toString()}
    right: ${this.right.toString()}
    right_type: ${this.right_type.toString()}
    pos: ${this.pos.toString()}
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
    name: ${this.name.toString()}
    expr: ${this.expr.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__EnumDecl({ name = from_js_string(""), variants = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.variants = variants
	this.pos = pos
}
bait__ast__EnumDecl.prototype = {
	toString() {
		return `bait__ast__EnumDecl{
    name: ${this.name.toString()}
    variants: ${this.variants.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__ExprStmt({ expr = undefined }) {
	this.expr = expr
}
bait__ast__ExprStmt.prototype = {
	toString() {
		return `bait__ast__ExprStmt{
    expr: ${this.expr.toString()}
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
    cond: ${this.cond.toString()}
    stmts: ${this.stmts.toString()}
    pos: ${this.pos.toString()}
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
    init: ${this.init.toString()}
    cond: ${this.cond.toString()}
    inc: ${this.inc.toString()}
    stmts: ${this.stmts.toString()}
    pos: ${this.pos.toString()}
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
    idxvar: ${this.idxvar.toString()}
    valvar: ${this.valvar.toString()}
    expr: ${this.expr.toString()}
    expr_type: ${this.expr_type.toString()}
    stmts: ${this.stmts.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__AnonFun({ params = new array({ data: [], length: 0 }), stmts = new array({ data: [], length: 0 }), return_type = 0, name = from_js_string(""), typ = 0, pos = new bait__token__Pos({}) }) {
	this.params = params
	this.stmts = stmts
	this.return_type = return_type
	this.name = name
	this.typ = typ
	this.pos = pos
}
bait__ast__AnonFun.prototype = {
	toString() {
		return `bait__ast__AnonFun{
    params: ${this.params.toString()}
    stmts: ${this.stmts.toString()}
    return_type: ${this.return_type.toString()}
    name: ${this.name.toString()}
    typ: ${this.typ.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__FunDecl({ is_pub = false, name = from_js_string(""), params = new array({ data: [], length: 0 }), stmts = new array({ data: [], length: 0 }), return_type = 0, is_method = false, is_test = false, pos = new bait__token__Pos({}) }) {
	this.is_pub = is_pub
	this.name = name
	this.params = params
	this.stmts = stmts
	this.return_type = return_type
	this.is_method = is_method
	this.is_test = is_test
	this.pos = pos
}
bait__ast__FunDecl.prototype = {
	toString() {
		return `bait__ast__FunDecl{
    is_pub: ${this.is_pub.toString()}
    name: ${this.name.toString()}
    params: ${this.params.toString()}
    stmts: ${this.stmts.toString()}
    return_type: ${this.return_type.toString()}
    is_method: ${this.is_method.toString()}
    is_test: ${this.is_test.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__Param({ name = from_js_string(""), typ = 0 }) {
	this.name = name
	this.typ = typ
}
bait__ast__Param.prototype = {
	toString() {
		return `bait__ast__Param{
    name: ${this.name.toString()}
    typ: ${this.typ.toString()}
}`}
}
function bait__ast__LoopControlStmt({ kind = undefined, pos = new bait__token__Pos({}) }) {
	this.kind = kind
	this.pos = pos
}
bait__ast__LoopControlStmt.prototype = {
	toString() {
		return `bait__ast__LoopControlStmt{
    kind: ${this.kind.toString()}
    pos: ${this.pos.toString()}
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
    name: ${this.name.toString()}
    expr: ${this.expr.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__ReturnStmt({ expr = undefined, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.pos = pos
}
bait__ast__ReturnStmt.prototype = {
	toString() {
		return `bait__ast__ReturnStmt{
    expr: ${this.expr.toString()}
    pos: ${this.pos.toString()}
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
    name: ${this.name.toString()}
    typ: ${this.typ.toString()}
    fields: ${this.fields.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__StructField({ name = from_js_string(""), typ = 0 }) {
	this.name = name
	this.typ = typ
}
bait__ast__StructField.prototype = {
	toString() {
		return `bait__ast__StructField{
    name: ${this.name.toString()}
    typ: ${this.typ.toString()}
}`}
}
function bait__ast__TypeDecl({ name = from_js_string(""), typ = 0, variants = new array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.typ = typ
	this.variants = variants
	this.pos = pos
}
bait__ast__TypeDecl.prototype = {
	toString() {
		return `bait__ast__TypeDecl{
    name: ${this.name.toString()}
    typ: ${this.typ.toString()}
    variants: ${this.variants.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__ArrayInit({ exprs = new array({ data: [], length: 0 }), typ = 0, elem_type = 0, pos = new bait__token__Pos({}) }) {
	this.exprs = exprs
	this.typ = typ
	this.elem_type = elem_type
	this.pos = pos
}
bait__ast__ArrayInit.prototype = {
	toString() {
		return `bait__ast__ArrayInit{
    exprs: ${this.exprs.toString()}
    typ: ${this.typ.toString()}
    elem_type: ${this.elem_type.toString()}
    pos: ${this.pos.toString()}
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
    expr: ${this.expr.toString()}
    expr_type: ${this.expr_type.toString()}
    target: ${this.target.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__BoolLiteral({ val = false, pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
bait__ast__BoolLiteral.prototype = {
	toString() {
		return `bait__ast__BoolLiteral{
    val: ${this.val.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__CallExpr({ name = from_js_string(""), args = new array({ data: [], length: 0 }), lang = from_js_string(""), return_type = 0, is_method = false, left = undefined, left_type = 0, pkg = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.args = args
	this.lang = lang
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
    name: ${this.name.toString()}
    args: ${this.args.toString()}
    lang: ${this.lang.toString()}
    return_type: ${this.return_type.toString()}
    is_method: ${this.is_method.toString()}
    left: ${this.left.toString()}
    left_type: ${this.left_type.toString()}
    pkg: ${this.pkg.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__CallArg({ expr = undefined, typ = 0 }) {
	this.expr = expr
	this.typ = typ
}
bait__ast__CallArg.prototype = {
	toString() {
		return `bait__ast__CallArg{
    expr: ${this.expr.toString()}
    typ: ${this.typ.toString()}
}`}
}
function bait__ast__CastExpr({ expr = undefined, target = 0, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.target = target
	this.pos = pos
}
bait__ast__CastExpr.prototype = {
	toString() {
		return `bait__ast__CastExpr{
    expr: ${this.expr.toString()}
    target: ${this.target.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__CharLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
bait__ast__CharLiteral.prototype = {
	toString() {
		return `bait__ast__CharLiteral{
    val: ${this.val.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__CompTimeVar({ name = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.pos = pos
}
bait__ast__CompTimeVar.prototype = {
	toString() {
		return `bait__ast__CompTimeVar{
    name: ${this.name.toString()}
    pos: ${this.pos.toString()}
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
    name: ${this.name.toString()}
    val: ${this.val.toString()}
    typ: ${this.typ.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__Ident({ name = from_js_string(""), is_mut = false, pkg = from_js_string(""), lang = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.name = name
	this.is_mut = is_mut
	this.pkg = pkg
	this.lang = lang
	this.pos = pos
}
bait__ast__Ident.prototype = {
	toString() {
		return `bait__ast__Ident{
    name: ${this.name.toString()}
    is_mut: ${this.is_mut.toString()}
    pkg: ${this.pkg.toString()}
    lang: ${this.lang.toString()}
    pos: ${this.pos.toString()}
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
    has_else: ${this.has_else.toString()}
    branches: ${this.branches.toString()}
    pos: ${this.pos.toString()}
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
    cond: ${this.cond.toString()}
    stmts: ${this.stmts.toString()}
    pos: ${this.pos.toString()}
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
    left: ${this.left.toString()}
    index: ${this.index.toString()}
    left_type: ${this.left_type.toString()}
    is_selector: ${this.is_selector.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__InfixExpr({ left = undefined, left_type = 0, right = undefined, right_type = 0, op = undefined, pos = new bait__token__Pos({}) }) {
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
    left: ${this.left.toString()}
    left_type: ${this.left_type.toString()}
    right: ${this.right.toString()}
    right_type: ${this.right_type.toString()}
    op: ${this.op.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__IntegerLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
bait__ast__IntegerLiteral.prototype = {
	toString() {
		return `bait__ast__IntegerLiteral{
    val: ${this.val.toString()}
    pos: ${this.pos.toString()}
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
    cond: ${this.cond.toString()}
    cond_type: ${this.cond_type.toString()}
    branches: ${this.branches.toString()}
    is_sumtype: ${this.is_sumtype.toString()}
    pos: ${this.pos.toString()}
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
    exprs: ${this.exprs.toString()}
    expr_types: ${this.expr_types.toString()}
    stmts: ${this.stmts.toString()}
    pos: ${this.pos.toString()}
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
    typ: ${this.typ.toString()}
    key_type: ${this.key_type.toString()}
    val_type: ${this.val_type.toString()}
    keys: ${this.keys.toString()}
    vals: ${this.vals.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__ParExpr({ expr = undefined, pos = new bait__token__Pos({}) }) {
	this.expr = expr
	this.pos = pos
}
bait__ast__ParExpr.prototype = {
	toString() {
		return `bait__ast__ParExpr{
    expr: ${this.expr.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__PrefixExpr({ op = undefined, right = undefined, pos = new bait__token__Pos({}) }) {
	this.op = op
	this.right = right
	this.pos = pos
}
bait__ast__PrefixExpr.prototype = {
	toString() {
		return `bait__ast__PrefixExpr{
    op: ${this.op.toString()}
    right: ${this.right.toString()}
    pos: ${this.pos.toString()}
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
    expr: ${this.expr.toString()}
    field_name: ${this.field_name.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__StringLiteral({ val = from_js_string(""), lang = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.lang = lang
	this.pos = pos
}
bait__ast__StringLiteral.prototype = {
	toString() {
		return `bait__ast__StringLiteral{
    val: ${this.val.toString()}
    lang: ${this.lang.toString()}
    pos: ${this.pos.toString()}
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
    vals: ${this.vals.toString()}
    exprs: ${this.exprs.toString()}
    expr_types: ${this.expr_types.toString()}
    pos: ${this.pos.toString()}
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
    name: ${this.name.toString()}
    typ: ${this.typ.toString()}
    fields: ${this.fields.toString()}
    pos: ${this.pos.toString()}
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
    name: ${this.name.toString()}
    expr: ${this.expr.toString()}
    pos: ${this.pos.toString()}
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
    expr: ${this.expr.toString()}
    typ: ${this.typ.toString()}
    pos: ${this.pos.toString()}
}`}
}
function bait__ast__EmptyExpr({ }) {
}
bait__ast__EmptyExpr.prototype = {
	toString() {
		return `bait__ast__EmptyExpr{
}`}
}
function bait__ast__PackageDecl({ name = from_js_string(""), full_name = from_js_string("") }) {
	this.name = name
	this.full_name = full_name
}
bait__ast__PackageDecl.prototype = {
	toString() {
		return `bait__ast__PackageDecl{
    name: ${this.name.toString()}
    full_name: ${this.full_name.toString()}
}`}
}
function bait__ast__Import({ name = from_js_string(""), alias = from_js_string(""), lang = from_js_string("") }) {
	this.name = name
	this.alias = alias
	this.lang = lang
}
bait__ast__Import.prototype = {
	toString() {
		return `bait__ast__Import{
    name: ${this.name.toString()}
    alias: ${this.alias.toString()}
    lang: ${this.lang.toString()}
}`}
}
function bait__ast__File({ path = from_js_string(""), pkg_decl = new bait__ast__PackageDecl({}), imports = new array({ data: [], length: 0 }), stmts = new array({ data: [], length: 0 }) }) {
	this.path = path
	this.pkg_decl = pkg_decl
	this.imports = imports
	this.stmts = stmts
}
bait__ast__File.prototype = {
	toString() {
		return `bait__ast__File{
    path: ${this.path.toString()}
    pkg_decl: ${this.pkg_decl.toString()}
    imports: ${this.imports.toString()}
    stmts: ${this.stmts.toString()}
}`}
}

function bait__ast__Scope({ parent = this, objects = new map({ data: new Map(), length: 0 }) }) {
	this.parent = parent
	this.objects = objects
}
bait__ast__Scope.prototype = {
	toString() {
		return `bait__ast__Scope{
    parent: ${this.parent.toString()}
    objects: ${this.objects.toString()}
}`}
}
function bait__ast__ScopeObject({ typ = 0, kind = undefined, is_pub = false }) {
	this.typ = typ
	this.kind = kind
	this.is_pub = is_pub
}
bait__ast__ScopeObject.prototype = {
	toString() {
		return `bait__ast__ScopeObject{
    typ: ${this.typ.toString()}
    kind: ${this.kind.toString()}
    is_pub: ${this.is_pub.toString()}
}`}
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
	if (s.parent != 0) {
		return bait__ast__Scope_get(s.parent, name)
	}
	return new bait__ast__ScopeObject({ typ: bait__ast__TypeIdx.placeholder })
}

function bait__ast__Scope_update_type(s, name, typ) {
	map_get_set(s.objects, name, new bait__ast__ScopeObject({})).typ = typ
}

function bait__ast__Scope_is_known(s, name) {
	const obj = bait__ast__Scope_get(s, name)
	return obj.typ != bait__ast__TypeIdx.placeholder
}


function bait__ast__Table({ global_scope = new bait__ast__Scope({}), fun_decls = new map({ data: new Map(), length: 0 }), type_idxs = new map({ data: new Map(), length: 0 }), type_symbols = new array({ data: [], length: 0 }) }) {
	this.global_scope = global_scope
	this.fun_decls = fun_decls
	this.type_idxs = type_idxs
	this.type_symbols = type_symbols
}
bait__ast__Table.prototype = {
	toString() {
		return `bait__ast__Table{
    global_scope: ${this.global_scope.toString()}
    fun_decls: ${this.fun_decls.toString()}
    type_idxs: ${this.type_idxs.toString()}
    type_symbols: ${this.type_symbols.toString()}
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

function bait__ast__Table_register_sym(t, sym) {
	const idx = bait__ast__Table_get_idx(t, sym.name)
	if (idx > 0) {
		const cur_sym = bait__ast__Table_get_sym(t, idx)
		if (cur_sym.kind == bait__ast__TypeKind.placeholder) {
			sym.methods = cur_sym.methods
			array_set(t.type_symbols, idx, sym)
			return idx
		}
		if (array_contains(bait__ast__BUILTIN_STRUCT_INDEXES, idx)) {
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
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.array, name: name, parent: bait__ast__TypeIdx.array, info: new bait__ast__ArrayInfo({ elem_type: elem_type }) }))
}

function bait__ast__Table_find_or_register_map(t, key_type, val_type) {
	const key_sym = bait__ast__Table_get_sym(t, key_type)
	const val_sym = bait__ast__Table_get_sym(t, val_type)
	const name = from_js_string(`map[${key_sym.name.str}]${val_sym.name.str}`)
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.map, name: name, parent: bait__ast__TypeIdx.map, info: new bait__ast__MapInfo({ key_type: key_type, val_type: val_type }) }))
}

function bait__ast__Table_find_or_register_fun(t, param_types, return_type) {
	const name = string_add(from_js_string("fun_"), bait__ast__Table_fun_signature(t, param_types, return_type))
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.fun_, name: name, info: new bait__ast__FunInfo({ param_types: param_types, return_type: return_type }) }))
}

function bait__ast__Table_fun_signature(t, param_types, return_type) {
	let sig = from_js_string("")
	for (let _t2 = 0; _t2 < param_types.length; _t2++) {
		const param = array_get(param_types, _t2)
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
		for (let _t3 = 0; _t3 < s.methods.length; _t3++) {
			const m = array_get(s.methods, _t3)
			if (string_eq(m.name, name)) {
				return m
			}
		}
		if (s.parent == 0) {
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
    elem_type: ${this.elem_type.toString()}
}`}
}
function bait__ast__EnumInfo({ vals = new array({ data: [], length: 0 }) }) {
	this.vals = vals
}
bait__ast__EnumInfo.prototype = {
	toString() {
		return `bait__ast__EnumInfo{
    vals: ${this.vals.toString()}
}`}
}
function bait__ast__FunInfo({ param_types = new array({ data: [], length: 0 }), return_type = 0 }) {
	this.param_types = param_types
	this.return_type = return_type
}
bait__ast__FunInfo.prototype = {
	toString() {
		return `bait__ast__FunInfo{
    param_types: ${this.param_types.toString()}
    return_type: ${this.return_type.toString()}
}`}
}
function bait__ast__MapInfo({ key_type = 0, val_type = 0 }) {
	this.key_type = key_type
	this.val_type = val_type
}
bait__ast__MapInfo.prototype = {
	toString() {
		return `bait__ast__MapInfo{
    key_type: ${this.key_type.toString()}
    val_type: ${this.val_type.toString()}
}`}
}
function bait__ast__StructInfo({ fields = new array({ data: [], length: 0 }) }) {
	this.fields = fields
}
bait__ast__StructInfo.prototype = {
	toString() {
		return `bait__ast__StructInfo{
    fields: ${this.fields.toString()}
}`}
}
function bait__ast__SumTypeInfo({ variants = new array({ data: [], length: 0 }) }) {
	this.variants = variants
}
bait__ast__SumTypeInfo.prototype = {
	toString() {
		return `bait__ast__SumTypeInfo{
    variants: ${this.variants.toString()}
}`}
}
function bait__ast__EmptyInfo({ }) {
}
bait__ast__EmptyInfo.prototype = {
	toString() {
		return `bait__ast__EmptyInfo{
}`}
}

const bait__ast__BUILTIN_STRUCT_INDEXES = new array({ data: [bait__ast__TypeIdx.string, bait__ast__TypeIdx.array, bait__ast__TypeIdx.map], length: 3 })
function bait__ast__TypeSymbol({ name = from_js_string(""), kind = undefined, info = undefined, methods = new array({ data: [], length: 0 }), parent = 0, is_pub = false, pkg = from_js_string("") }) {
	this.name = name
	this.kind = kind
	this.info = info
	this.methods = methods
	this.parent = parent
	this.is_pub = is_pub
	this.pkg = pkg
}
bait__ast__TypeSymbol.prototype = {
	toString() {
		return `bait__ast__TypeSymbol{
    name: ${this.name.toString()}
    kind: ${this.kind.toString()}
    info: ${this.info.toString()}
    methods: ${this.methods.toString()}
    parent: ${this.parent.toString()}
    is_pub: ${this.is_pub.toString()}
    pkg: ${this.pkg.toString()}
}`}
}
function bait__ast__TypeSymbol_find_field(sym, name, t) {
	if (sym.info instanceof bait__ast__StructInfo) {
		const info = sym.info
		for (let _t4 = 0; _t4 < info.fields.length; _t4++) {
			const f = array_get(info.fields, _t4)
			if (string_eq(f.name, name)) {
				return f
			}
		}
	}
	if (array_contains(bait__ast__BUILTIN_STRUCT_INDEXES, sym.parent)) {
		const parent_sym = bait__ast__Table_get_sym(t, sym.parent)
		return bait__ast__TypeSymbol_find_field(parent_sym, name, t)
	}
	return new bait__ast__StructField({})
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


function bait__tokenizer__Tokenizer({ path = from_js_string(""), text = from_js_string(""), pos = 0, line = 0, last_nl_pos = 0, is_string_inter = false, str_quote = 0 }) {
	this.path = path
	this.text = text
	this.pos = pos
	this.line = line
	this.last_nl_pos = last_nl_pos
	this.is_string_inter = is_string_inter
	this.str_quote = str_quote
}
bait__tokenizer__Tokenizer.prototype = {
	toString() {
		return `bait__tokenizer__Tokenizer{
    path: ${this.path.toString()}
    text: ${this.text.toString()}
    pos: ${this.pos.toString()}
    line: ${this.line.toString()}
    last_nl_pos: ${this.last_nl_pos.toString()}
    is_string_inter: ${this.is_string_inter.toString()}
    str_quote: ${this.str_quote.toString()}
}`}
}
function bait__tokenizer__tokenize(text, path) {
	let t = new bait__tokenizer__Tokenizer({ path: path, text: text, pos: -1, line: 1, last_nl_pos: -1 })
	let tokens = new array({ data: [], length: 0 })
	let tok = new bait__token__Token({})
	while (tok.kind != bait__token__TokenKind.eof) {
		tok = bait__tokenizer__Tokenizer_next_token(t)
		array_push(tokens, tok)
	}
	return tokens
}

function bait__tokenizer__Tokenizer_new_token(t, kind, val) {
	return new bait__token__Token({ kind: kind, val: val, pos: new bait__token__Pos({ line: t.line, col: t.pos - t.last_nl_pos }) })
}

function bait__tokenizer__Tokenizer_next_token(t) {
	while (true) {
		t.pos += 1
		bait__tokenizer__Tokenizer_skip_whitespace(t)
		if (t.pos >= t.text.length) {
			return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.eof, from_js_string(""))
		}
		const c = string_get(t.text, t.pos)
		if (bait__tokenizer__is_name_start_char(c)) {
			return bait__tokenizer__Tokenizer_name_or_keyword(t)
		} else if (bait__tokenizer__is_digit(c)) {
			const num = bait__tokenizer__Tokenizer_number_val(t)
			return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.number, num)
		}
		const nextc = string_get(t.text, t.pos + 1)
		switch (c) {
			case "\'":
			case "\"":
				{
					const str = bait__tokenizer__Tokenizer_string_val(t, c)
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.string, str)
					break
				}
			case "\`":
				{
					const val = bait__tokenizer__Tokenizer_char_val(t)
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.char, val)
					break
				}
			case ".":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.dot, from_js_string(""))
					break
				}
			case ",":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.comma, from_js_string(""))
					break
				}
			case "+":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.plus_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.plus, from_js_string(""))
					break
				}
			case "-":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.minus_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.minus, from_js_string(""))
					break
				}
			case "*":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.mul_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.mul, from_js_string(""))
					break
				}
			case "/":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.div_assign, from_js_string(""))
					}
					if (nextc == "/") {
						bait__tokenizer__Tokenizer_ignore_line(t)
						continue
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.div, from_js_string(""))
					break
				}
			case "%":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.mod_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.mod, from_js_string(""))
					break
				}
			case "=":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.eq, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.assign, from_js_string(""))
					break
				}
			case ":":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.decl_assign, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.colon, from_js_string(""))
					break
				}
			case ";":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.semicolon, from_js_string(""))
					break
				}
			case "!":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.ne, from_js_string(""))
					}
					break
				}
			case "<":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.le, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.lt, from_js_string(""))
					break
				}
			case ">":
				{
					if (nextc == "=") {
						t.pos += 1
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.ge, from_js_string(""))
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.gt, from_js_string(""))
					break
				}
			case "(":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.lpar, from_js_string(""))
					break
				}
			case ")":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.rpar, from_js_string(""))
					break
				}
			case "[":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.lbr, from_js_string(""))
					break
				}
			case "]":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.rbr, from_js_string(""))
					break
				}
			case "{":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.lcur, from_js_string(""))
					break
				}
			case "}":
				{
					if (t.is_string_inter) {
						t.is_string_inter = false
						const str = bait__tokenizer__Tokenizer_string_val(t, t.str_quote)
						return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.string, str)
					}
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.rcur, from_js_string(""))
					break
				}
			case "|":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.pipe, from_js_string(""))
					break
				}
			case "$":
				{
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.dollar, from_js_string(""))
					break
				}
			case "#":
				{
					t.pos += 1
					const name = bait__tokenizer__Tokenizer_name_val(t)
					return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.hash, name)
					break
				}
			default:
				{
					break
				}
		}
		bait__tokenizer__Tokenizer_error(t, from_js_string(`unknown char ${u8_str(c)}`))
	}
	return bait__tokenizer__Tokenizer_new_token(t, bait__token__TokenKind.eof, from_js_string(""))
}

function bait__tokenizer__Tokenizer_name_or_keyword(t) {
	const name = bait__tokenizer__Tokenizer_name_val(t)
	const kind = bait__token__keyword_to_kind(name)
	if (kind != bait__token__TokenKind.name) {
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
	const is_js = string_get(t.text, t.pos - 1) == "."
	const start_line = t.line
	const start = t.pos + 1
	while (true) {
		t.pos += 1
		if (t.pos >= t.text.length) {
			bait__tokenizer__Tokenizer_error_with_line(t, from_js_string("unfinished string literal"), start_line)
		}
		const c = string_get(t.text, t.pos)
		if (c == "\n") {
			t.last_nl_pos = t.pos
			t.line += 1
		} else if (c == "\\") {
			t.pos += 1
		} else if (!is_js && c == "$" && string_get(t.text, t.pos + 1) == "{") {
			t.is_string_inter = true
			t.str_quote = quote
			t.pos -= 1
			return string_substr(t.text, start, t.pos + 1)
		} else if (c == quote) {
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
		if (c == "\\") {
			t.pos += 1
		} else if (c == "\`") {
			break
		}
	}
	return string_substr(t.text, start, t.pos)
}

function bait__tokenizer__Tokenizer_skip_whitespace(t) {
	while (t.pos < t.text.length) {
		const c = string_get(t.text, t.pos)
		if (c == "\n") {
			t.last_nl_pos = t.pos
			t.line += 1
		} else if (!array_contains(new array({ data: [" ", "\t", "\r"], length: 3 }), c)) {
			return
		}
		t.pos += 1
	}
}

function bait__tokenizer__Tokenizer_ignore_line(t) {
	while (t.pos < t.text.length && string_get(t.text, t.pos) != "\n") {
		t.pos += 1
	}
	t.last_nl_pos = t.pos
	t.line += 1
}

function bait__tokenizer__Tokenizer_error(t, msg) {
	bait__tokenizer__Tokenizer_error_with_line(t, msg, t.line)
}

function bait__tokenizer__Tokenizer_error_with_line(t, msg, line) {
	const col = t.pos - t.last_nl_pos
	eprintln(string_add(string_add(string_add(string_add(string_add(string_add(t.path, from_js_string(":")), line), from_js_string(":")), col), from_js_string(" error: ")), msg).str)
	exit(1)
}

function bait__tokenizer__is_name_start_char(c) {
	return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c == "_"
}

function bait__tokenizer__is_name_char(c) {
	return bait__tokenizer__is_name_start_char(c) || bait__tokenizer__is_digit(c)
}

function bait__tokenizer__is_digit(c) {
	return c >= "0" && c <= "9"
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
				node = bait__parser__Parser_name_expr(p, from_js_string("bait"))
				break
			}
		case bait__token__TokenKind.number:
			{
				node = bait__parser__Parser_number_literal(p)
				break
			}
		case bait__token__TokenKind.string:
			{
				node = bait__parser__Parser_string_literal(p, from_js_string("bait"))
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
				node = bait__parser__Parser_ident(p, from_js_string("bait"))
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
				bait__parser__Parser_error(p, from_js_string(`invalid expression: ${bait__token__TokenKind_str(p.tok.kind)}, val: ${p.tok.val.str}`))
				break
			}
	}
	return bait__parser__Parser_expr_with_left(p, node, precedence)
}

function bait__parser__Parser_expr_with_left(p, left, precedence) {
	while (precedence < bait__token__Token_precedence(p.tok)) {
		if (p.tok.kind == bait__token__TokenKind.dot) {
			left = bait__parser__Parser_dot_expr(p, left)
		} else if (p.tok.kind == bait__token__TokenKind.lbr) {
			left = bait__parser__Parser_index_expr(p, left)
		} else if (p.tok.kind == bait__token__TokenKind.key_as) {
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
		if (p.tok.kind != bait__token__TokenKind.comma) {
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
	let return_type = bait__ast__TypeIdx.void
	if (p.tok.kind != bait__token__TokenKind.lcur) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	let param_types = new array({ data: [], length: 0 })
	for (let _t5 = 0; _t5 < params.length; _t5++) {
		const param = array_get(params, _t5)
		array_push(param_types, param.typ)
	}
	const typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type)
	const stmts = bait__parser__Parser_parse_block(p)
	return new bait__ast__AnonFun({ params: params, return_type: return_type, stmts: stmts, typ: typ, pos: pos })
}

function bait__parser__Parser_array_init(p) {
	let exprs = new array({ data: [], length: 0 })
	let elem_type = bait__ast__TypeIdx.placeholder
	let typ = bait__ast__TypeIdx.array
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.lbr)
	if (p.tok.kind == bait__token__TokenKind.rbr) {
		bait__parser__Parser_next(p)
		elem_type = bait__parser__Parser_parse_type(p)
		typ = bait__ast__Table_find_or_register_array(p.table, elem_type)
	} else {
		while (p.tok.kind != bait__token__TokenKind.rbr) {
			array_push(exprs, bait__parser__Parser_expr(p, 0))
			if (p.tok.kind == bait__token__TokenKind.comma) {
				bait__parser__Parser_next(p)
			}
		}
		bait__parser__Parser_check(p, bait__token__TokenKind.rbr)
	}
	return new bait__ast__ArrayInit({ exprs: exprs, typ: typ, elem_type: elem_type, pos: pos })
}

function bait__parser__Parser_as_cast(p, left) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.key_as)
	const target = bait__parser__Parser_parse_type(p)
	return new bait__ast__AsCast({ target: target, expr: left, pos: pos })
}

function bait__parser__Parser_bool_literal(p) {
	const pos = p.tok.pos
	const val = p.tok.kind == bait__token__TokenKind.key_true
	bait__parser__Parser_next(p)
	return new bait__ast__BoolLiteral({ val: val, pos: pos })
}

function bait__parser__Parser_cast_expr(p) {
	const pos = p.tok.pos
	const target = bait__parser__Parser_parse_type(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	const expr = bait__parser__Parser_expr(p, 0)
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	return new bait__ast__CastExpr({ target: target, expr: expr, pos: pos })
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
	if (p.next_tok.kind == bait__token__TokenKind.lpar) {
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
	return new bait__ast__CallExpr({ name: name, args: args, lang: lang, pkg: p.pkg_name, pos: pos })
}

function bait__parser__Parser_method_call(p, left) {
	const pos = p.tok.pos
	const name = bait__parser__Parser_check_name(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	const args = bait__parser__Parser_call_args(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	return new bait__ast__CallExpr({ is_method: true, left: left, name: name, args: args, lang: from_js_string("bait"), pos: pos })
}

function bait__parser__Parser_call_args(p) {
	let args = new array({ data: [], length: 0 })
	while (p.tok.kind != bait__token__TokenKind.rpar) {
		array_push(args, new bait__ast__CallArg({ expr: bait__parser__Parser_expr(p, 0) }))
		if (p.tok.kind != bait__token__TokenKind.rpar) {
			bait__parser__Parser_check(p, bait__token__TokenKind.comma)
		}
	}
	return args
}

function bait__parser__Parser_enum_val(p) {
	const pos = p.tok.pos
	let name = bait__parser__Parser_check_name(p)
	if (p.expr_pkg.length > 0) {
		name = bait__parser__Parser_prepend_expr_pkg(p, name)
	} else {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	const typ = bait__ast__Table_find_type_or_add_placeholder(p.table, name)
	bait__parser__Parser_check(p, bait__token__TokenKind.dot)
	const val = bait__parser__Parser_check_name(p)
	return new bait__ast__EnumVal({ name: name, val: val, typ: typ, pos: pos })
}

function bait__parser__Parser_hash_expr(p) {
	bait__parser__Parser_check(p, bait__token__TokenKind.hash)
	bait__parser__Parser_check(p, bait__token__TokenKind.dot)
	if (p.tok.kind == bait__token__TokenKind.string) {
		return bait__parser__Parser_string_literal(p, from_js_string("js"))
	}
	return bait__parser__Parser_name_expr(p, from_js_string("js"))
}

function bait__parser__Parser_ident(p, lang) {
	const pos = p.tok.pos
	let is_mut = p.tok.kind == bait__token__TokenKind.key_mut
	if (is_mut) {
		bait__parser__Parser_next(p)
	}
	if (p.is_for_init) {
		is_mut = true
	}
	const name = bait__parser__Parser_prepend_expr_pkg(p, bait__parser__Parser_check_name(p))
	return new bait__ast__Ident({ name: name, is_mut: is_mut, pkg: p.pkg_name, lang: lang, pos: pos })
}

function bait__parser__Parser_if_expr(p) {
	const pos = p.tok.pos
	let branches = new array({ data: [], length: 0 })
	let has_else = false
	while (true) {
		const bpos = p.tok.pos
		if (p.tok.kind == bait__token__TokenKind.key_else) {
			bait__parser__Parser_next(p)
			if (p.tok.kind == bait__token__TokenKind.lcur) {
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
		if (p.tok.kind != bait__token__TokenKind.key_else) {
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
	if (p.tok.kind == bait__token__TokenKind.lbr) {
		const map_type = bait__parser__Parser_parse_map_type(p)
		return new bait__ast__MapInit({ typ: map_type, pos: pos })
	}
	let keys = new array({ data: [], length: 0 })
	let vals = new array({ data: [], length: 0 })
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	while (p.tok.kind != bait__token__TokenKind.rcur) {
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
	while (p.tok.kind != bait__token__TokenKind.rcur) {
		const bpos = p.tok.pos
		let exprs = new array({ data: [], length: 0 })
		if (p.tok.kind == bait__token__TokenKind.key_else) {
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

function bait__parser__Parser_name_expr(p, lang) {
	if (p.next_tok.kind == bait__token__TokenKind.dot && map_contains(p.import_aliases, p.tok.val)) {
		p.expr_pkg = map_get_set(p.import_aliases, p.tok.val, from_js_string(""))
		bait__parser__Parser_next(p)
		bait__parser__Parser_next(p)
	}
	if (string_eq(p.tok.val, from_js_string("map"))) {
		return bait__parser__Parser_map_init(p)
	}
	if (p.next_tok.kind == bait__token__TokenKind.lpar) {
		if (map_contains(p.table.type_idxs, p.tok.val)) {
			return bait__parser__Parser_cast_expr(p)
		}
		return bait__parser__Parser_fun_call(p, lang)
	}
	if (p.is_struct_possible && p.next_tok.kind == bait__token__TokenKind.lcur) {
		return bait__parser__Parser_struct_init(p)
	}
	if (p.next_tok.kind == bait__token__TokenKind.dot && u8_is_capital(string_get(p.tok.val, 0)) && !string_is_upper(p.tok.val)) {
		return bait__parser__Parser_enum_val(p)
	}
	return bait__parser__Parser_ident(p, lang)
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

function bait__parser__Parser_string_literal(p, lang) {
	const pos = p.tok.pos
	if (p.next_tok.kind != bait__token__TokenKind.dollar) {
		bait__parser__Parser_next(p)
		return new bait__ast__StringLiteral({ val: p.prev_tok.val, lang: lang, pos: pos })
	}
	let vals = new array({ data: [], length: 0 })
	let exprs = new array({ data: [], length: 0 })
	while (p.tok.kind == bait__token__TokenKind.string) {
		array_push(vals, p.tok.val)
		bait__parser__Parser_next(p)
		if (p.tok.kind != bait__token__TokenKind.dollar) {
			break
		}
		bait__parser__Parser_next(p)
		bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
		array_push(exprs, bait__parser__Parser_expr(p, 0))
	}
	return new bait__ast__StringInterLiteral({ vals: vals, exprs: exprs, pos: pos })
}

function bait__parser__Parser_struct_init(p) {
	const pos = p.tok.pos
	const typ = bait__parser__Parser_parse_type(p)
	const name = p.prev_tok.val
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	let fields = new array({ data: [], length: 0 })
	while (p.tok.kind != bait__token__TokenKind.rcur) {
		const fpos = p.tok.pos
		const fname = bait__parser__Parser_check_name(p)
		bait__parser__Parser_check(p, bait__token__TokenKind.colon)
		const expr = bait__parser__Parser_expr(p, 0)
		array_push(fields, new bait__ast__StructInitField({ name: fname, expr: expr, pos: fpos }))
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
	return new bait__ast__StructInit({ name: name, typ: typ, fields: fields, pos: pos })
}

function bait__parser__Parser_typeof_expr(p) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.key_typeof)
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	const expr = bait__parser__Parser_expr(p, 0)
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	return new bait__ast__TypeOf({ expr: expr, pos: pos })
}


function bait__parser__Parser({ path = from_js_string(""), table = new bait__ast__Table({}), tokens = new array({ data: [], length: 0 }), idx = 0, prev_tok = new bait__token__Token({}), tok = new bait__token__Token({}), next_tok = new bait__token__Token({}), pkg_name = from_js_string(""), import_aliases = new map({ data: new Map(), length: 0 }), expr_pkg = from_js_string(""), is_test_file = false, is_for_init = false, is_struct_possible = false }) {
	this.path = path
	this.table = table
	this.tokens = tokens
	this.idx = idx
	this.prev_tok = prev_tok
	this.tok = tok
	this.next_tok = next_tok
	this.pkg_name = pkg_name
	this.import_aliases = import_aliases
	this.expr_pkg = expr_pkg
	this.is_test_file = is_test_file
	this.is_for_init = is_for_init
	this.is_struct_possible = is_struct_possible
}
bait__parser__Parser.prototype = {
	toString() {
		return `bait__parser__Parser{
    path: ${this.path.toString()}
    table: ${this.table.toString()}
    tokens: ${this.tokens.toString()}
    idx: ${this.idx.toString()}
    prev_tok: ${this.prev_tok.toString()}
    tok: ${this.tok.toString()}
    next_tok: ${this.next_tok.toString()}
    pkg_name: ${this.pkg_name.toString()}
    import_aliases: ${this.import_aliases.toString()}
    expr_pkg: ${this.expr_pkg.toString()}
    is_test_file: ${this.is_test_file.toString()}
    is_for_init: ${this.is_for_init.toString()}
    is_struct_possible: ${this.is_struct_possible.toString()}
}`}
}
function bait__parser__parse(tokens, path, table) {
	let p = new bait__parser__Parser({ path: path, table: table, tokens: tokens, is_struct_possible: true })
	p.is_test_file = string_ends_with(path, from_js_string("_test.bt"))
	bait__parser__Parser_next(p)
	bait__parser__Parser_next(p)
	const pkg_decl = bait__parser__Parser_package_decl(p)
	const imports = bait__parser__Parser_import_stmts(p)
	let stmts = new array({ data: [], length: 0 })
	while (p.tok.kind != bait__token__TokenKind.eof) {
		array_push(stmts, bait__parser__Parser_toplevel_stmt(p))
	}
	return new bait__ast__File({ path: path, pkg_decl: pkg_decl, imports: imports, stmts: stmts })
}

function bait__parser__Parser_package_decl(p) {
	if (p.tok.kind != bait__token__TokenKind.key_package) {
		p.pkg_name = from_js_string("main")
		return new bait__ast__PackageDecl({ name: from_js_string("main"), full_name: from_js_string("main") })
	}
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_check_name(p)
	let full_name = name
	if (!string_eq(full_name, from_js_string("main")) && string_contains(p.path, from_js_string("lib/"))) {
		const rel_path = string_substr(p.path, string_index(p.path, from_js_string("lib/")) + 4, p.path.length)
		full_name = string_replace(string_substr(rel_path, 0, string_last_index(rel_path, from_js_string("/"))), from_js_string("/"), from_js_string("."))
	}
	p.pkg_name = full_name
	return new bait__ast__PackageDecl({ name: name, full_name: full_name })
}

function bait__parser__Parser_import_stmts(p) {
	let imports = new array({ data: [], length: 0 })
	while (p.tok.kind == bait__token__TokenKind.key_import) {
		bait__parser__Parser_next(p)
		let lang = from_js_string("bait")
		if (p.tok.kind == bait__token__TokenKind.hash) {
			bait__parser__Parser_next(p)
			bait__parser__Parser_check(p, bait__token__TokenKind.dot)
			lang = from_js_string("js")
		}
		let name_parts = new array({ data: [], length: 0 })
		array_push(name_parts, bait__parser__Parser_check_name(p))
		while (p.tok.kind == bait__token__TokenKind.dot) {
			bait__parser__Parser_next(p)
			array_push(name_parts, bait__parser__Parser_check_name(p))
		}
		const name = array_string_join(name_parts, from_js_string("."))
		let alias = array_get(name_parts, name_parts.length - 1)
		if (p.tok.kind == bait__token__TokenKind.key_as) {
			bait__parser__Parser_next(p)
			alias = bait__parser__Parser_check_name(p)
		}
		map_set(p.import_aliases, alias, name)
		array_push(imports, new bait__ast__Import({ name: name, alias: alias, lang: lang }))
	}
	return imports
}

function bait__parser__Parser_parse_block(p) {
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	let bstmts = new array({ data: [], length: 0 })
	while (!array_contains(new array({ data: [bait__token__TokenKind.eof, bait__token__TokenKind.rcur], length: 2 }), p.tok.kind)) {
		array_push(bstmts, bait__parser__Parser_stmt(p))
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
	return bstmts
}

function bait__parser__Parser_check(p, expected) {
	if (p.tok.kind != expected) {
		bait__parser__Parser_error(p, from_js_string(`unexpected ${bait__token__TokenKind_str(p.tok.kind)}, expecting ${bait__token__TokenKind_str(expected)}`))
	}
	bait__parser__Parser_next(p)
}

function bait__parser__Parser_check_name(p) {
	bait__parser__Parser_check(p, bait__token__TokenKind.name)
	return p.prev_tok.val
}

function bait__parser__Parser_prepend_pkg(p, val) {
	if (string_eq(p.pkg_name, from_js_string("builtin")) || string_eq(p.pkg_name, from_js_string("main")) || p.pkg_name.length == 0) {
		return val
	}
	return string_add(string_add(p.pkg_name, from_js_string(".")), val)
}

function bait__parser__Parser_prepend_expr_pkg(p, val) {
	if (p.expr_pkg.length == 0 || string_eq(p.expr_pkg, p.pkg_name)) {
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

function bait__parser__Parser_error(p, msg) {
	bait__parser__Parser_error_with_pos(p, msg, p.tok.pos)
}

function bait__parser__Parser_error_with_pos(p, msg, pos) {
	eprintln(string_add(string_add(string_add(string_add(string_add(string_add(p.path, from_js_string(":")), pos.line), from_js_string(":")), pos.col), from_js_string(" error: ")), msg).str)
	exit(1)
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
				bait__parser__Parser_error(p, from_js_string(`bad toplevel token: kind: ${bait__token__TokenKind_str(p.tok.kind)}, val: ${p.tok.val.str}`))
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
				bait__parser__Parser_error(p, from_js_string(`cannot use pub keyword before ${bait__token__TokenKind_str(p.next_tok.kind)}`))
				break
			}
	}
}

function bait__parser__Parser_stmt(p) {
	switch (p.tok.kind) {
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

function bait__parser__Parser_assign_stmt(p, left) {
	const pos = p.tok.pos
	const op = p.tok.kind
	bait__parser__Parser_next(p)
	const right = bait__parser__Parser_expr(p, 0)
	return new bait__ast__AssignStmt({ op: op, left: left, right: right, pos: pos })
}

function bait__parser__Parser_const_decl(p) {
	const pos = p.tok.pos
	const is_pub = p.tok.kind == bait__token__TokenKind.key_pub
	if (is_pub) {
		bait__parser__Parser_next(p)
	}
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.decl_assign)
	const expr = bait__parser__Parser_expr(p, 0)
	const typ = bait__parser__Parser_infer_expr_type(p, expr)
	bait__ast__Scope_register(p.table.global_scope, name, new bait__ast__ScopeObject({ typ: typ, kind: bait__ast__ObjectKind.constant, is_pub: is_pub }))
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
	const is_pub = p.tok.kind == bait__token__TokenKind.key_pub
	if (is_pub) {
		bait__parser__Parser_next(p)
	}
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	let variants = new array({ data: [], length: 0 })
	while (p.tok.kind != bait__token__TokenKind.rcur) {
		const vname = bait__parser__Parser_check_name(p)
		array_push(variants, vname)
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
	bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ name: name, is_pub: is_pub, pkg: p.pkg_name, kind: bait__ast__TypeKind.enum_, info: new bait__ast__EnumInfo({ vals: variants }) }))
	return new bait__ast__EnumDecl({ name: name, variants: variants, pos: pos })
}

function bait__parser__Parser_for_loop(p) {
	const pos = p.tok.pos
	bait__parser__Parser_next(p)
	if (p.next_tok.kind == bait__token__TokenKind.decl_assign) {
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
	if (p.next_tok.kind == bait__token__TokenKind.key_in || p.next_tok.kind == bait__token__TokenKind.comma) {
		let idxvar = from_js_string("")
		if (p.next_tok.kind == bait__token__TokenKind.comma) {
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
	const is_pub = p.tok.kind == bait__token__TokenKind.key_pub
	if (is_pub) {
		bait__parser__Parser_next(p)
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.key_fun)
	let is_method = false
	let params = new array({ data: [], length: 0 })
	if (p.tok.kind == bait__token__TokenKind.lpar) {
		is_method = true
		bait__parser__Parser_next(p)
		const rec_name = bait__parser__Parser_check_name(p)
		const rec_type = bait__parser__Parser_parse_type(p)
		array_push(params, new bait__ast__Param({ name: rec_name, typ: rec_type }))
		bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	}
	let name = bait__parser__Parser_check_name(p)
	if (!is_method) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	params = array_concat(params, bait__parser__Parser_fun_params(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	let return_type = bait__ast__TypeIdx.void
	if (p.tok.kind != bait__token__TokenKind.lcur) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	let node = new bait__ast__FunDecl({ is_test: p.is_test_file && string_starts_with(name, from_js_string("test_")), is_pub: is_pub, name: name, params: params, return_type: return_type, pos: pos })
	if (is_method) {
		const sym = bait__ast__Table_get_sym(p.table, array_get(params, 0).typ)
		array_push(sym.methods, node)
	} else {
		map_set(p.table.fun_decls, name, node)
		let param_types = new array({ data: [], length: 0 })
		for (let _t6 = 0; _t6 < params.length; _t6++) {
			const param = array_get(params, _t6)
			array_push(param_types, param.typ)
		}
		const typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type)
		bait__ast__Scope_register(p.table.global_scope, name, new bait__ast__ScopeObject({ typ: typ, kind: bait__ast__ObjectKind.function, is_pub: is_pub }))
	}
	const f_stmts = bait__parser__Parser_parse_block(p)
	node.stmts = f_stmts
	node.is_method = is_method
	return node
}

function bait__parser__Parser_fun_params(p) {
	let params = new array({ data: [], length: 0 })
	while (p.tok.kind != bait__token__TokenKind.rpar) {
		const param = new bait__ast__Param({ name: bait__parser__Parser_check_name(p), typ: bait__parser__Parser_parse_type(p) })
		array_push(params, param)
		if (p.tok.kind != bait__token__TokenKind.rpar) {
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

function bait__parser__Parser_return_stmt(p) {
	const pos = p.tok.pos
	bait__parser__Parser_check(p, bait__token__TokenKind.key_return)
	let expr = new bait__ast__EmptyExpr({})
	if (p.tok.pos.line == pos.line) {
		expr = bait__parser__Parser_expr(p, 0)
	}
	return new bait__ast__ReturnStmt({ expr: expr, pos: pos })
}

function bait__parser__Parser_struct_decl(p) {
	const pos = p.tok.pos
	const is_pub = p.tok.kind == bait__token__TokenKind.key_pub
	if (is_pub) {
		bait__parser__Parser_next(p)
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.key_struct)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.lcur)
	let fields = new array({ data: [], length: 0 })
	while (p.tok.kind != bait__token__TokenKind.rcur) {
		const fname = bait__parser__Parser_check_name(p)
		const ftyp = bait__parser__Parser_parse_type(p)
		const field = new bait__ast__StructField({ name: fname, typ: ftyp })
		array_push(fields, field)
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rcur)
	const tsym = new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.struct_, name: name, is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__StructInfo({ fields: fields }) })
	const typ = bait__ast__Table_register_sym(p.table, tsym)
	return new bait__ast__StructDecl({ name: name, typ: typ, fields: fields, pos: pos })
}

function bait__parser__Parser_type_decl(p) {
	const pos = p.tok.pos
	const is_pub = p.tok.kind == bait__token__TokenKind.key_pub
	if (is_pub) {
		bait__parser__Parser_next(p)
	}
	bait__parser__Parser_next(p)
	const name = bait__parser__Parser_prepend_pkg(p, bait__parser__Parser_check_name(p))
	bait__parser__Parser_check(p, bait__token__TokenKind.decl_assign)
	const is_fun_type = p.tok.kind == bait__token__TokenKind.key_fun
	let variants = new array({ data: [], length: 0 })
	array_push(variants, bait__parser__Parser_parse_type(p))
	if (is_fun_type) {
		const sym = bait__ast__Table_get_sym(p.table, array_get(variants, 0))
		const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.fun_, name: name, is_pub: is_pub, pkg: p.pkg_name, info: sym.info }))
		return new bait__ast__TypeDecl({ name: name, typ: typ, variants: variants, pos: pos })
	}
	while (p.tok.kind == bait__token__TokenKind.pipe) {
		bait__parser__Parser_next(p)
		array_push(variants, bait__parser__Parser_parse_type(p))
	}
	const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.sum_type, name: name, is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__SumTypeInfo({ variants: variants }) }))
	return new bait__ast__TypeDecl({ name: name, typ: typ, variants: variants, pos: pos })
}


function bait__parser__Parser_parse_type(p) {
	if (p.tok.kind == bait__token__TokenKind.lbr) {
		bait__parser__Parser_next(p)
		bait__parser__Parser_check(p, bait__token__TokenKind.rbr)
		const elem_type = bait__parser__Parser_parse_type(p)
		return bait__ast__Table_find_or_register_array(p.table, elem_type)
	}
	if (p.tok.kind == bait__token__TokenKind.key_fun) {
		return bait__parser__Parser_parse_fun_type(p)
	}
	let name = bait__parser__Parser_check_name(p)
	if (string_eq(name, from_js_string("map"))) {
		return bait__parser__Parser_parse_map_type(p)
	}
	if (p.tok.kind == bait__token__TokenKind.dot) {
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
				return bait__ast__TypeIdx.i8
				break
			}
		case from_js_string("i16").str:
			{
				return bait__ast__TypeIdx.i16
				break
			}
		case from_js_string("i32").str:
			{
				return bait__ast__TypeIdx.i32
				break
			}
		case from_js_string("i64").str:
			{
				return bait__ast__TypeIdx.i64
				break
			}
		case from_js_string("u8").str:
			{
				return bait__ast__TypeIdx.u8
				break
			}
		case from_js_string("u16").str:
			{
				return bait__ast__TypeIdx.u16
				break
			}
		case from_js_string("u32").str:
			{
				return bait__ast__TypeIdx.u32
				break
			}
		case from_js_string("u64").str:
			{
				return bait__ast__TypeIdx.u64
				break
			}
		case from_js_string("f32").str:
			{
				return bait__ast__TypeIdx.f32
				break
			}
		case from_js_string("f64").str:
			{
				return bait__ast__TypeIdx.f64
				break
			}
		case from_js_string("bool").str:
			{
				return bait__ast__TypeIdx.bool
				break
			}
		case from_js_string("string").str:
			{
				return bait__ast__TypeIdx.string
				break
			}
		case from_js_string("any").str:
			{
				return bait__ast__TypeIdx.any
				break
			}
	}
	return bait__ast__Table_find_type_or_add_placeholder(p.table, name)
}

function bait__parser__Parser_parse_fun_type(p) {
	bait__parser__Parser_next(p)
	bait__parser__Parser_check(p, bait__token__TokenKind.lpar)
	let param_types = new array({ data: [], length: 0 })
	while (p.tok.kind != bait__token__TokenKind.rpar) {
		const typ = bait__parser__Parser_parse_type(p)
		array_push(param_types, typ)
		if (p.tok.kind != bait__token__TokenKind.rpar) {
			bait__parser__Parser_check(p, bait__token__TokenKind.comma)
		}
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rpar)
	let return_type = bait__ast__TypeIdx.void
	if (p.tok.pos.line == p.prev_tok.pos.line) {
		return_type = bait__parser__Parser_parse_type(p)
	}
	return bait__ast__Table_find_or_register_fun(p.table, param_types, return_type)
}

function bait__parser__Parser_parse_map_type(p) {
	if (p.tok.kind == bait__token__TokenKind.rpar && string_eq(p.pkg_name, from_js_string("builtin"))) {
		return bait__ast__TypeIdx.map
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.lbr)
	const key_type = bait__parser__Parser_parse_type(p)
	if (key_type != bait__ast__TypeIdx.string) {
		bait__parser__Parser_error(p, from_js_string("map key type must be string"))
	}
	bait__parser__Parser_check(p, bait__token__TokenKind.rbr)
	const val_type = bait__parser__Parser_parse_type(p)
	return bait__ast__Table_find_or_register_map(p.table, key_type, val_type)
}

function bait__parser__Parser_infer_expr_type(p, expr) {
	let typ = bait__ast__TypeIdx.void
	if (expr instanceof bait__ast__StructInit) {
		typ = expr.typ
	} else if (expr instanceof bait__ast__ArrayInit) {
		typ = expr.typ
	} else if (expr instanceof bait__ast__MapInit) {
		typ = expr.typ
	}
	return typ
}


function bait__checker__Checker({ table = new bait__ast__Table({}), scope = new bait__ast__Scope({}), path = from_js_string(""), pkg = from_js_string(""), errors = new array({ data: [], length: 0 }), is_lhs_assign = false }) {
	this.table = table
	this.scope = scope
	this.path = path
	this.pkg = pkg
	this.errors = errors
	this.is_lhs_assign = is_lhs_assign
}
bait__checker__Checker.prototype = {
	toString() {
		return `bait__checker__Checker{
    table: ${this.table.toString()}
    scope: ${this.scope.toString()}
    path: ${this.path.toString()}
    pkg: ${this.pkg.toString()}
    errors: ${this.errors.toString()}
    is_lhs_assign: ${this.is_lhs_assign.toString()}
}`}
}
function bait__checker__check_files(files, table) {
	let c = new bait__checker__Checker({ table: table, scope: new bait__ast__Scope({ parent: 0 }) })
	for (let _t7 = 0; _t7 < files.length; _t7++) {
		const f = array_get(files, _t7)
		bait__checker__Checker_check(c, f)
	}
	return c.errors.length > 0
}

function bait__checker__Checker_check(c, file) {
	c.path = file.path
	c.pkg = file.pkg_decl.full_name
	bait__checker__Checker_stmts(c, file.stmts)
}

function bait__checker__Checker_open_scope(c) {
	c.scope = new bait__ast__Scope({ parent: c.scope })
}

function bait__checker__Checker_close_scope(c) {
	c.scope = c.scope.parent
}

function bait__checker__Checker_warn(c, msg, pos) {
	println(from_js_string(`${c.path.str}:${i32_str(pos.line)}:${i32_str(pos.col)} warning: ${msg.str}`).str)
}

function bait__checker__Checker_error(c, msg, pos) {
	eprintln(from_js_string(`${c.path.str}:${i32_str(pos.line)}:${i32_str(pos.col)} error: ${msg.str}`).str)
	array_push(c.errors, msg)
}


function bait__checker__Checker_expr(c, expr) {
	if (expr instanceof bait__ast__AnonFun) {
		return bait__checker__Checker_anon_fun(c, expr)
	} else if (expr instanceof bait__ast__ArrayInit) {
		return bait__checker__Checker_array_init(c, expr)
	} else if (expr instanceof bait__ast__AsCast) {
		return bait__checker__Checker_as_cast(c, expr)
	} else if (expr instanceof bait__ast__BoolLiteral) {
		return bait__ast__TypeIdx.bool
	} else if (expr instanceof bait__ast__CallExpr) {
		return bait__checker__Checker_call_expr(c, expr)
	} else if (expr instanceof bait__ast__CastExpr) {
		return bait__checker__Checker_cast_expr(c, expr)
	} else if (expr instanceof bait__ast__CharLiteral) {
		return bait__ast__TypeIdx.u8
	} else if (expr instanceof bait__ast__CompTimeVar) {
		return bait__checker__Checker_comp_time_var(c, expr)
	} else if (expr instanceof bait__ast__EnumVal) {
		return bait__checker__Checker_enum_val(c, expr)
	} else if (expr instanceof bait__ast__Ident) {
		return bait__checker__Checker_ident(c, expr)
	} else if (expr instanceof bait__ast__IfExpr) {
		return bait__checker__Checker_if_expr(c, expr)
	} else if (expr instanceof bait__ast__IndexExpr) {
		return bait__checker__Checker_index_expr(c, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		return bait__checker__Checker_infix_expr(c, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		return bait__ast__TypeIdx.i32
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
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_fun_params(c, node.params)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
	return node.typ
}

function bait__checker__Checker_array_init(c, node) {
	if (node.exprs.length > 0) {
		for (let i = 0; i < node.exprs.length; i++) {
			const e = array_get(node.exprs, i)
			const typ = bait__checker__Checker_expr(c, e)
			if (i == 0) {
				node.elem_type = typ
			}
		}
		node.typ = bait__ast__Table_find_or_register_array(c.table, node.elem_type)
	}
	return node.typ
}

function bait__checker__Checker_as_cast(c, node) {
	const expr_type = bait__checker__Checker_expr(c, node.expr)
	node.expr_type = expr_type
	if (node.expr instanceof bait__ast__Ident) {
		const expr = node.expr
		bait__ast__Scope_update_type(c.scope, expr.name, node.target)
	}
	return node.target
}

function bait__checker__Checker_call_expr(c, node) {
	if (string_eq(node.lang, from_js_string("js"))) {
		for (let _t8 = 0; _t8 < node.args.length; _t8++) {
			const arg = array_get(node.args, _t8)
			arg.typ = bait__checker__Checker_expr(c, arg.expr)
		}
		return bait__ast__TypeIdx.void
	}
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
		if (obj.kind == bait__ast__ObjectKind.function) {
			found = true
		}
	}
	if (found) {
		const def = map_get_set(c.table.fun_decls, node.name, new bait__ast__FunDecl({}))
		if (!def.is_pub && !string_eq(node.pkg, c.pkg)) {
			bait__checker__Checker_error(c, from_js_string(`function ${def.name.str} is private`), node.pos)
		}
		const arg_count_matches = node.args.length == def.params.length
		if (!arg_count_matches) {
			bait__checker__Checker_error(c, string_add(string_add(string_add(from_js_string("expected "), def.params.length), from_js_string(" arguments but got ")), node.args.length), node.pos)
		}
		if (string_eq(node.name, from_js_string("println"))) {
			for (let _t9 = 0; _t9 < node.args.length; _t9++) {
				const arg = array_get(node.args, _t9)
				arg.typ = bait__checker__Checker_expr(c, arg.expr)
			}
			return bait__ast__TypeIdx.void
		}
		for (let i = 0; i < node.args.length; i++) {
			const arg = array_get(node.args, i)
			arg.typ = bait__checker__Checker_expr(c, arg.expr)
			if (arg_count_matches) {
				const param_type = array_get(def.params, i).typ
				if (!bait__checker__Checker_check_types(c, arg.typ, param_type)) {
					bait__checker__Checker_error(c, from_js_string(`type ${i32_str(arg.typ)} not matches ${i32_str(param_type)} in argument ${i32_str(i + 1)}`), node.pos)
				}
			}
		}
		node.return_type = def.return_type
	} else {
		bait__checker__Checker_error(c, from_js_string(`unknown function ${node.name.str}`), node.pos)
	}
	return node.return_type
}

function bait__checker__Checker_method_call(c, node) {
	const left_expr_type = bait__checker__Checker_expr(c, node.left)
	const left_sym = bait__ast__Table_get_sym(c.table, left_expr_type)
	const def = bait__ast__Table_get_method(c.table, left_sym, node.name)
	if (def.name.length == 0) {
		bait__checker__Checker_error(c, from_js_string(`method ${node.name.str} not found on type ${left_sym.name.str}`), node.pos)
		return bait__ast__TypeIdx.void
	}
	if (!def.is_pub && !string_eq(left_sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`method ${def.name.str} is private`), node.pos)
	}
	const arg_count_matches = node.args.length + 1 == def.params.length
	if (!arg_count_matches) {
		bait__checker__Checker_error(c, from_js_string(`expected ${i32_str(def.params.length - 1)} arguments but got ${i32_str(node.args.length)}`), node.pos)
	}
	for (let i = 0; i < node.args.length; i++) {
		const arg = array_get(node.args, i)
		arg.typ = bait__checker__Checker_expr(c, arg.expr)
		if (arg_count_matches) {
			const param_type = array_get(def.params, i + 1).typ
			if (!bait__checker__Checker_check_types(c, arg.typ, param_type)) {
				bait__checker__Checker_error(c, from_js_string(`type ${i32_str(arg.typ)} not matches ${i32_str(param_type)} in argument ${i32_str(i + 1)}`), node.pos)
			}
		}
	}
	node.left_type = array_get(def.params, 0).typ
	node.return_type = def.return_type
	return node.return_type
}

function bait__checker__Checker_cast_expr(c, node) {
	bait__checker__Checker_expr(c, node.expr)
	return node.target
}

const bait__checker__SUPPORTED_COMPTIME_VARS = new array({ data: [from_js_string("BAITEXE"), from_js_string("BAITROOT")], length: 2 })
function bait__checker__Checker_comp_time_var(c, node) {
	if (!array_string_contains(bait__checker__SUPPORTED_COMPTIME_VARS, node.name)) {
		bait__checker__Checker_error(c, from_js_string(`unsupported comptime var "${node.name.str}"`), node.pos)
	}
	return bait__ast__TypeIdx.string
}

function bait__checker__Checker_enum_val(c, node) {
	const sym = bait__ast__Table_get_sym(c.table, node.typ)
	if (sym.kind == bait__ast__TypeKind.placeholder) {
		bait__checker__Checker_error(c, from_js_string(`undefined enum ${node.name.str}`), node.pos)
		return bait__ast__TypeIdx.void
	}
	if (!sym.is_pub && string_contains(sym.name, from_js_string(".")) && !string_eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`enum ${sym.name.str} is private`), node.pos)
		return bait__ast__TypeIdx.void
	}
	const info = sym.info
	if (!array_string_contains(info.vals, node.val)) {
		bait__checker__Checker_error(c, from_js_string(`enum ${sym.name.str} has no value ${node.val.str}`), node.pos)
		return bait__ast__TypeIdx.void
	}
	node.name = sym.name
	return node.typ
}

function bait__checker__Checker_ident(c, node) {
	if (string_eq(node.lang, from_js_string("js"))) {
		return bait__ast__TypeIdx.void
	}
	let obj = bait__ast__Scope_get(c.scope, node.name)
	if (obj.typ != bait__ast__TypeIdx.placeholder) {
		return obj.typ
	}
	if (!string_contains(node.name, from_js_string(".")) && !string_eq(node.pkg, from_js_string("builtin")) && !string_eq(node.pkg, from_js_string("main"))) {
		node.name = string_add(string_add(node.pkg, from_js_string(".")), node.name)
	}
	obj = bait__ast__Scope_get(c.table.global_scope, node.name)
	if (obj.typ == bait__ast__TypeIdx.placeholder) {
		bait__checker__Checker_error(c, from_js_string(`undefined variable ${node.name.str}`), node.pos)
	}
	if (obj.kind == bait__ast__ObjectKind.constant && !obj.is_pub && !string_eq(node.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`const ${node.name.str} is private`), node.pos)
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
	return bait__ast__TypeIdx.void
}

function bait__checker__Checker_index_expr(c, node) {
	node.left_type = bait__checker__Checker_expr(c, node.left)
	bait__checker__Checker_expr(c, node.index)
	const sym = bait__ast__Table_get_sym(c.table, node.left_type)
	if (sym.kind == bait__ast__TypeKind.array) {
		const info = sym.info
		return info.elem_type
	}
	if (sym.kind == bait__ast__TypeKind.map) {
		const info = sym.info
		return info.val_type
	}
	if (sym.kind == bait__ast__TypeKind.string) {
		if (c.is_lhs_assign) {
			bait__checker__Checker_error(c, from_js_string("cannot assign to string index"), node.pos)
			return bait__ast__TypeIdx.void
		}
		return bait__ast__TypeIdx.u8
	}
	return node.left_type
}

function bait__checker__Checker_infix_expr(c, node) {
	node.left_type = bait__checker__Checker_expr(c, node.left)
	if (node.op == bait__token__TokenKind.key_is) {
		if (node.left instanceof bait__ast__Ident) {
			let right = node.right
			if (!string_contains(right.name, from_js_string("."))) {
				right.name = string_add(string_add(right.pkg, from_js_string(".")), right.name)
			}
			node.right_type = map_get_set(c.table.type_idxs, right.name, 0)
			const left = node.left
			bait__ast__Scope_update_type(c.scope, left.name, node.right_type)
		} else if (node.left instanceof bait__ast__SelectorExpr) {
			let right = node.right
			if (!string_contains(right.name, from_js_string("."))) {
				right.name = string_add(string_add(right.pkg, from_js_string(".")), right.name)
			}
			node.right_type = map_get_set(c.table.type_idxs, right.name, 0)
			const left = node.left
			const name = string_add(string_add((left.expr).name, from_js_string(".")), left.field_name)
			bait__ast__Scope_update_type(c.scope, name, node.right_type)
		}
		return bait__ast__TypeIdx.bool
	}
	node.right_type = bait__checker__Checker_expr(c, node.right)
	if (bait__token__TokenKind_is_compare(node.op)) {
		return bait__ast__TypeIdx.bool
	}
	return node.left_type
}

function bait__checker__Checker_map_init(c, node) {
	if (node.keys.length > 0) {
		for (let i = 0; i < node.keys.length; i++) {
			const key = array_get(node.keys, i)
			const key_type = bait__checker__Checker_expr(c, key)
			const val_type = bait__checker__Checker_expr(c, array_get(node.vals, i))
			if (i == 0) {
				node.key_type = key_type
				node.val_type = val_type
			}
		}
		node.typ = bait__ast__Table_find_or_register_map(c.table, node.key_type, node.val_type)
	} else {
		const sym = bait__ast__Table_get_sym(c.table, node.typ)
		const info = sym.info
		node.key_type = info.key_type
		node.val_type = info.val_type
	}
	return node.typ
}

function bait__checker__Checker_match_expr(c, node) {
	node.cond_type = bait__checker__Checker_expr(c, node.cond)
	if (node.branches.length == 0) {
		bait__checker__Checker_error(c, from_js_string("match expression must have at least one branch"), node.pos)
		return bait__ast__TypeIdx.void
	}
	const sym = bait__ast__Table_get_sym(c.table, node.cond_type)
	node.is_sumtype = sym.kind == bait__ast__TypeKind.sum_type
	for (let _t10 = 0; _t10 < node.branches.length; _t10++) {
		const b = array_get(node.branches, _t10)
		bait__checker__Checker_open_scope(c)
		for (let _t11 = 0; _t11 < b.exprs.length; _t11++) {
			const e = array_get(b.exprs, _t11)
			if (node.is_sumtype) {
				const expr = e
				const variant = map_get_set(c.table.type_idxs, expr.name, 0)
				const info = sym.info
				if (!array_contains(info.variants, variant)) {
					bait__checker__Checker_error(c, from_js_string(`sum type ${sym.name.str} has no variant ${expr.name.str}`), expr.pos)
					continue
				}
				const cond = node.cond
				bait__ast__Scope_update_type(c.scope, cond.name, variant)
			} else {
				array_push(b.expr_types, bait__checker__Checker_expr(c, e))
			}
		}
		bait__checker__Checker_stmts(c, b.stmts)
		bait__checker__Checker_close_scope(c)
	}
	return bait__ast__TypeIdx.void
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
		if (field.name.length == 0) {
			bait__checker__Checker_error(c, from_js_string(`${sym.name.str} has no field ${node.field_name.str}`), node.pos)
			return bait__ast__TypeIdx.void
		}
		return field.typ
	}
	if (sym.kind == bait__ast__TypeKind.sum_type) {
		bait__checker__Checker_error(c, from_js_string(`cast to the variant before accessing field of sumtype ${sym.name.str}`), node.pos)
		return bait__ast__TypeIdx.void
	}
	return bait__ast__TypeIdx.any
}

function bait__checker__Checker_string_literal(c, node) {
	if (!string_eq(node.lang, from_js_string("bait"))) {
		return bait__ast__TypeIdx.void
	}
	return bait__ast__TypeIdx.string
}

function bait__checker__Checker_string_inter_literal(c, node) {
	for (let _t12 = 0; _t12 < node.exprs.length; _t12++) {
		const e = array_get(node.exprs, _t12)
		const typ = bait__checker__Checker_expr(c, e)
		array_push(node.expr_types, typ)
	}
	return bait__ast__TypeIdx.string
}

function bait__checker__Checker_struct_init(c, node) {
	const sym = bait__ast__Table_get_sym(c.table, node.typ)
	if (sym.kind == bait__ast__TypeKind.placeholder) {
		bait__checker__Checker_error(c, from_js_string(`undefined struct ${node.name.str}`), node.pos)
		return bait__ast__TypeIdx.void
	}
	if (!sym.is_pub && string_contains(sym.name, from_js_string(".")) && !string_eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`struct ${sym.name.str} is private`), node.pos)
		return bait__ast__TypeIdx.void
	}
	node.name = sym.name
	for (let _t13 = 0; _t13 < node.fields.length; _t13++) {
		const field = array_get(node.fields, _t13)
		const def = bait__ast__TypeSymbol_find_field(sym, field.name, c.table)
		if (def.name.length == 0) {
			bait__checker__Checker_error(c, from_js_string(`struct ${sym.name.str} has no field ${field.name.str}`), node.pos)
		}
		const expr_type = bait__checker__Checker_expr(c, field.expr)
		if (!bait__checker__Checker_check_types(c, expr_type, def.typ)) {
			bait__checker__Checker_error(c, from_js_string(`cannot assign to field ${field.name.str}: expected ${i32_str(def.typ)}, got ${i32_str(expr_type)} `), node.pos)
		}
	}
	return node.typ
}

function bait__checker__Checker_type_of(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	node.typ = typ
	return bait__ast__TypeIdx.string
}


function bait__checker__Checker_stmts(c, stmts) {
	for (let _t14 = 0; _t14 < stmts.length; _t14++) {
		const stmt = array_get(stmts, _t14)
		bait__checker__Checker_stmt(c, stmt)
	}
}

function bait__checker__Checker_stmt(c, stmt) {
	if (stmt instanceof bait__ast__AssignStmt) {
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
}

function bait__checker__Checker_assign_stmt(c, node) {
	if (node.op == bait__token__TokenKind.decl_assign) {
		const typ = bait__checker__Checker_expr(c, node.right)
		const left = node.left
		if (bait__ast__Scope_is_known(c.scope, left.name)) {
			bait__checker__Checker_error(c, from_js_string(`redeclaration of ${left.name.str}`), node.pos)
			return
		}
		bait__ast__Scope_register(c.scope, left.name, new bait__ast__ScopeObject({ typ: typ }))
		bait__checker__Checker_expr(c, node.left)
		return
	}
	c.is_lhs_assign = true
	node.left_type = bait__checker__Checker_expr(c, node.left)
	c.is_lhs_assign = false
	node.right_type = bait__checker__Checker_expr(c, node.right)
	if (!bait__checker__Checker_check_types(c, node.right_type, node.left_type)) {
		bait__checker__Checker_error(c, from_js_string(`cannot assign type ${i32_str(node.right_type)} to ${i32_str(node.left_type)}`), node.pos)
	}
}

function bait__checker__Checker_const_decl(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	bait__ast__Scope_update_type(c.table.global_scope, node.name, typ)
}

function bait__checker__Checker_expr_stmt(c, node) {
	const expr = node.expr
	bait__checker__Checker_expr(c, expr)
	if (expr instanceof bait__ast__CallExpr || expr instanceof bait__ast__IfExpr || expr instanceof bait__ast__MatchExpr || (expr instanceof bait__ast__StringLiteral && string_eq(expr.lang, from_js_string("js")))) {
		return
	}
	bait__checker__Checker_error(c, from_js_string("expression evaluated but not used"), expr.pos)
}

function bait__checker__Checker_enum_decl(c, node) {
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
	let idx_type = bait__ast__TypeIdx.placeholder
	let val_type = bait__ast__TypeIdx.placeholder
	if (sym.kind == bait__ast__TypeKind.array) {
		idx_type = bait__ast__TypeIdx.i32
		val_type = (sym.info).elem_type
	} else if (sym.kind == bait__ast__TypeKind.map) {
		const info = sym.info
		idx_type = info.key_type
		val_type = info.val_type
	} else if (sym.kind == bait__ast__TypeKind.string) {
		idx_type = bait__ast__TypeIdx.i32
		val_type = bait__ast__TypeIdx.u8
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

function bait__checker__Checker_fun_decl(c, node) {
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_fun_params(c, node.params)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_fun_params(c, params) {
	for (let _t15 = 0; _t15 < params.length; _t15++) {
		const p = array_get(params, _t15)
		const sym = bait__ast__Table_get_sym(c.table, p.typ)
		if (sym.kind == bait__ast__TypeKind.fun_) {
			bait__ast__Scope_register(c.scope, p.name, new bait__ast__ScopeObject({ typ: p.typ, kind: bait__ast__ObjectKind.function }))
		} else {
			bait__ast__Scope_register(c.scope, p.name, new bait__ast__ScopeObject({ typ: p.typ }))
		}
	}
}

function bait__checker__Checker_global_decl(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	bait__ast__Scope_update_type(c.table.global_scope, node.name, typ)
}

function bait__checker__Checker_control_stmt(c, node) {
}

function bait__checker__Checker_return_stmt(c, node) {
	if (!(node.expr instanceof bait__ast__EmptyExpr)) {
		bait__checker__Checker_expr(c, node.expr)
	}
}

function bait__checker__Checker_struct_decl(c, node) {
}

function bait__checker__Checker_type_decl(c, node) {
}


function bait__checker__Checker_check_types(c, got, expected) {
	if (got == expected) {
		return true
	}
	if (got == bait__ast__TypeIdx.any || expected == bait__ast__TypeIdx.any) {
		return true
	}
	const got_sym = bait__ast__Table_get_sym(c.table, got)
	const exp_sym = bait__ast__Table_get_sym(c.table, expected)
	if (exp_sym.kind == bait__ast__TypeKind.array && got_sym.kind == bait__ast__TypeKind.array) {
		if (string_eq(exp_sym.name, from_js_string("array")) || string_eq(got_sym.name, from_js_string("array"))) {
			return true
		}
		const got_info = got_sym.info
		if (got_info.elem_type == bait__ast__TypeIdx.any) {
			return true
		}
		const exp_info = exp_sym.info
		if (exp_info.elem_type == bait__ast__TypeIdx.any) {
			return true
		}
	}
	if (exp_sym.kind == bait__ast__TypeKind.sum_type) {
		const info = exp_sym.info
		return array_contains(info.variants, got)
	}
	if (got_sym.kind == bait__ast__TypeKind.fun_ && exp_sym.kind == bait__ast__TypeKind.fun_) {
		const got_info = got_sym.info
		const exp_info = exp_sym.info
		if (got_info.param_types.length != exp_info.param_types.length) {
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


function bait__gen__js__Gen_expr(g, expr) {
	if (expr instanceof bait__ast__AnonFun) {
		bait__gen__js__Gen_anon_fun(g, expr)
	} else if (expr instanceof bait__ast__ArrayInit) {
		bait__gen__js__Gen_array_init(g, expr)
	} else if (expr instanceof bait__ast__AsCast) {
		bait__gen__js__Gen_expr(g, expr.expr)
	} else if (expr instanceof bait__ast__BoolLiteral) {
		bait__gen__js__Gen_bool_literal(g, expr)
	} else if (expr instanceof bait__ast__CallExpr) {
		bait__gen__js__Gen_call_expr(g, expr)
	} else if (expr instanceof bait__ast__CastExpr) {
		bait__gen__js__Gen_cast_expr(g, expr)
	} else if (expr instanceof bait__ast__CharLiteral) {
		bait__gen__js__Gen_char_literal(g, expr)
	} else if (expr instanceof bait__ast__CompTimeVar) {
		bait__gen__js__Gen_comp_time_var(g, expr)
	} else if (expr instanceof bait__ast__EnumVal) {
		bait__gen__js__Gen_enum_val(g, expr)
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
		bait__gen__js__Gen_error(g, from_js_string(`cannot generate expr: ${expr.toString()}`), expr.pos)
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
	for (let i = 0; i < node.params.length; i++) {
		const param = array_get(node.params, i)
		bait__gen__js__Gen_write(g, param.name)
		if (i < node.params.length - 1) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_write(g, from_js_string("}"))
}

function bait__gen__js__Gen_array_init(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("new array({ data: ["))
	for (let i = 0; i < node.exprs.length; i++) {
		const expr = array_get(node.exprs, i)
		bait__gen__js__Gen_expr(g, expr)
		if (i < node.exprs.length - 1) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_write(g, from_js_string(`], length: ${i32_str(node.exprs.length)} })`))
}

function bait__gen__js__Gen_bool_literal(g, node) {
	if (node.val) {
		bait__gen__js__Gen_write(g, from_js_string("true"))
	} else {
		bait__gen__js__Gen_write(g, from_js_string("false"))
	}
}

function bait__gen__js__Gen_call_expr(g, node) {
	if (string_eq(node.lang, from_js_string("bait"))) {
		if (node.is_method) {
			const sym = bait__ast__Table_get_sym(g.table, node.left_type)
			bait__gen__js__Gen_write(g, bait__gen__js__js_name(string_add(string_add(sym.name, from_js_string("_")), node.name)))
		} else {
			bait__gen__js__Gen_write(g, bait__gen__js__js_name(node.name))
		}
	} else {
		bait__gen__js__Gen_write(g, from_js_string(`js_${node.name.str}`))
	}
	if (array_string_contains(new array({ data: [from_js_string("println"), from_js_string("eprintln")], length: 2 }), node.name)) {
		bait__gen__js__Gen_write(g, from_js_string("("))
		bait__gen__js__Gen_expr_to_string(g, array_get(node.args, 0).expr, array_get(node.args, 0).typ)
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

function bait__gen__js__Gen_cast_expr(g, node) {
	bait__gen__js__Gen_expr(g, node.expr)
}

function bait__gen__js__Gen_char_literal(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("\""))
	bait__gen__js__Gen_write(g, node.val)
	bait__gen__js__Gen_write(g, from_js_string("\""))
}

function bait__gen__js__Gen_comp_time_var(g, node) {
	switch (node.name.str) {
		case from_js_string("BAITEXE").str:
			{
				bait__gen__js__Gen_write(g, from_js_string(`from_js_string("${g.pref.baitexe.str}")`))
				break
			}
		case from_js_string("BAITROOT").str:
			{
				bait__gen__js__Gen_write(g, from_js_string(`from_js_string("${g.pref.baitroot.str}")`))
				break
			}
	}
}

function bait__gen__js__Gen_enum_val(g, node) {
	bait__gen__js__Gen_write(g, string_add(string_add(bait__gen__js__js_name(node.name), from_js_string(".")), node.val))
}

function bait__gen__js__Gen_ident(g, node) {
	if (string_eq(node.lang, from_js_string("bait"))) {
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(node.name))
	} else {
		bait__gen__js__Gen_write(g, from_js_string(`js_${node.name.str}`))
	}
}

function bait__gen__js__Gen_if_expr(g, node) {
	for (let i = 0; i < node.branches.length; i++) {
		const b = array_get(node.branches, i)
		if (i > 0) {
			bait__gen__js__Gen_write(g, from_js_string("} else "))
		}
		if (node.has_else && i == node.branches.length - 1) {
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
	if (sym.kind == bait__ast__TypeKind.map) {
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
	if (sym.kind == bait__ast__TypeKind.array) {
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
	if (sym.kind == bait__ast__TypeKind.string) {
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
	if (node.left_type == bait__ast__TypeIdx.string) {
		if (node.op == bait__token__TokenKind.plus) {
			bait__gen__js__Gen_write(g, from_js_string("string_add("))
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			bait__gen__js__Gen_expr(g, node.right)
			bait__gen__js__Gen_write(g, from_js_string(")"))
			return
		}
		if (node.op == bait__token__TokenKind.ne || node.op == bait__token__TokenKind.eq) {
			if (node.op == bait__token__TokenKind.ne) {
				bait__gen__js__Gen_write(g, from_js_string("!"))
			}
			bait__gen__js__Gen_write(g, from_js_string("string_eq("))
			bait__gen__js__Gen_expr(g, node.left)
			bait__gen__js__Gen_write(g, from_js_string(", "))
			bait__gen__js__Gen_expr(g, node.right)
			bait__gen__js__Gen_write(g, from_js_string(")"))
			return
		}
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
		bait__gen__js__Gen_expr_to_string(g, key, node.key_type)
		bait__gen__js__Gen_write(g, from_js_string(", "))
		bait__gen__js__Gen_expr(g, array_get(node.vals, i))
		bait__gen__js__Gen_write(g, from_js_string("]"))
		if (i < node.keys.length - 1) {
			bait__gen__js__Gen_write(g, from_js_string(", "))
		}
	}
	bait__gen__js__Gen_write(g, from_js_string(`]), length: ${i32_str(node.keys.length)} })`))
}

function bait__gen__js__Gen_match_expr(g, node) {
	if (node.is_sumtype) {
		bait__gen__js__Gen_sumtype_match(g, node)
		return
	}
	bait__gen__js__Gen_write(g, from_js_string("switch ("))
	bait__gen__js__Gen_expr(g, node.cond)
	if (node.cond_type == bait__ast__TypeIdx.string) {
		bait__gen__js__Gen_write(g, from_js_string(".str"))
	}
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	g.indent += 1
	for (let _t16 = 0; _t16 < node.branches.length; _t16++) {
		const b = array_get(node.branches, _t16)
		if (b.exprs.length == 0) {
			bait__gen__js__Gen_writeln(g, from_js_string("default:"))
		} else {
			for (let i = 0; i < b.exprs.length; i++) {
				const e = array_get(b.exprs, i)
				bait__gen__js__Gen_write(g, from_js_string("case "))
				if (node.cond_type == bait__ast__TypeIdx.string) {
					bait__gen__js__Gen_expr_to_string(g, e, array_get(b.expr_types, i))
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
		if (b.exprs.length == 0) {
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
	if (node.right instanceof bait__ast__InfixExpr && (node.right).op == bait__token__TokenKind.key_is) {
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
	if (!string_eq(node.lang, from_js_string("bait"))) {
		bait__gen__js__Gen_write(g, node.val)
		return
	}
	const val = string_replace(string_replace(node.val, from_js_string("\""), from_js_string("\\\"")), from_js_string("\n"), from_js_string("\\n"))
	bait__gen__js__Gen_write(g, from_js_string("from_js_string(\""))
	bait__gen__js__Gen_write(g, val)
	bait__gen__js__Gen_write(g, from_js_string("\")"))
}

function bait__gen__js__Gen_string_inter_literal(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("from_js_string(`"))
	for (let i = 0; i < node.vals.length; i++) {
		const val = array_get(node.vals, i)
		bait__gen__js__Gen_write(g, val)
		if (i < node.exprs.length) {
			bait__gen__js__Gen_write(g, from_js_string("\${"))
			bait__gen__js__Gen_expr_to_string(g, array_get(node.exprs, i), array_get(node.expr_types, i))
			bait__gen__js__Gen_write(g, from_js_string("}"))
		}
	}
	bait__gen__js__Gen_write(g, from_js_string("`)"))
}

function bait__gen__js__Gen_struct_init(g, node) {
	bait__gen__js__Gen_write(g, string_add(string_add(from_js_string("new "), bait__gen__js__js_name(node.name)), from_js_string("({")))
	if (node.fields.length == 0) {
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

function bait__gen__js__Gen_type_of(g, node) {
	const sym = bait__ast__Table_get_sym(g.table, node.typ)
	bait__gen__js__Gen_write(g, string_add(string_add(from_js_string("\""), sym.name), from_js_string("\"")))
}

function bait__gen__js__Gen_expr_to_string(g, expr, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (sym.kind == bait__ast__TypeKind.string) {
		bait__gen__js__Gen_expr(g, expr)
		bait__gen__js__Gen_write(g, from_js_string(".str"))
	} else if (bait__ast__Table_get_method(g.table, sym, from_js_string("str")).name.length > 0) {
		let name = bait__gen__js__js_name(sym.name)
		if (sym.kind == bait__ast__TypeKind.array) {
			name = from_js_string("array")
		}
		bait__gen__js__Gen_write(g, from_js_string(`${name.str}_str(`))
		bait__gen__js__Gen_expr(g, expr)
		bait__gen__js__Gen_write(g, from_js_string(")"))
	} else {
		bait__gen__js__Gen_expr(g, expr)
		bait__gen__js__Gen_write(g, from_js_string(".toString()"))
	}
}


const bait__gen__js__JS_RESERVED = new array({ data: [from_js_string("case"), from_js_string("default"), from_js_string("new"), from_js_string("var"), from_js_string("with")], length: 5 })
function bait__gen__js__Gen({ pref = new bait__prefs__Pref({}), table = new bait__ast__Table({}), path = from_js_string(""), type_defs_out = from_js_string(""), global_out = from_js_string(""), out = from_js_string(""), indent = 0, empty_line = false, import_names = new array({ data: [], length: 0 }), tmp_counter = 0, is_for_loop_head = false, is_lhs_assign = false, is_array_map_set = false }) {
	this.pref = pref
	this.table = table
	this.path = path
	this.type_defs_out = type_defs_out
	this.global_out = global_out
	this.out = out
	this.indent = indent
	this.empty_line = empty_line
	this.import_names = import_names
	this.tmp_counter = tmp_counter
	this.is_for_loop_head = is_for_loop_head
	this.is_lhs_assign = is_lhs_assign
	this.is_array_map_set = is_array_map_set
}
bait__gen__js__Gen.prototype = {
	toString() {
		return `bait__gen__js__Gen{
    pref: ${this.pref.toString()}
    table: ${this.table.toString()}
    path: ${this.path.toString()}
    type_defs_out: ${this.type_defs_out.toString()}
    global_out: ${this.global_out.toString()}
    out: ${this.out.toString()}
    indent: ${this.indent.toString()}
    empty_line: ${this.empty_line.toString()}
    import_names: ${this.import_names.toString()}
    tmp_counter: ${this.tmp_counter.toString()}
    is_for_loop_head: ${this.is_for_loop_head.toString()}
    is_lhs_assign: ${this.is_lhs_assign.toString()}
    is_array_map_set: ${this.is_array_map_set.toString()}
}`}
}
function bait__gen__js__gen(files, table, pref) {
	let g = new bait__gen__js__Gen({ pref: pref, table: table, indent: -1, empty_line: true, tmp_counter: -1 })
	for (let _t17 = 0; _t17 < files.length; _t17++) {
		const file = array_get(files, _t17)
		g.path = file.path
		bait__gen__js__Gen_process_imports(g, file.imports)
		bait__gen__js__Gen_stmts(g, file.stmts)
		g.out = string_add(g.out, from_js_string("\n"))
	}
	if (pref.is_test) {
		bait__gen__js__Gen_gen_test_main(g)
	}
	bait__gen__js__Gen_main_call(g)
	const headers = bait__gen__js__Gen_headers(g)
	return string_add(string_add(string_add(string_add(headers, g.type_defs_out), g.global_out), from_js_string("\n")), g.out)
}

function bait__gen__js__Gen_new_temp_var(g) {
	g.tmp_counter += 1
	return from_js_string(`_t${i32_str(g.tmp_counter)}`)
}

function bait__gen__js__Gen_write(g, s) {
	if (g.indent > 0 && g.empty_line) {
		g.out = string_add(g.out, string_repeat(from_js_string("\t"), g.indent))
	}
	g.out = string_add(g.out, s)
	g.empty_line = false
}

function bait__gen__js__Gen_writeln(g, s) {
	if (g.indent > 0 && g.empty_line) {
		g.out = string_add(g.out, string_repeat(from_js_string("\t"), g.indent))
	}
	g.out = string_add(g.out, string_add(s, from_js_string("\n")))
	g.empty_line = true
}

function bait__gen__js__Gen_process_imports(g, imports) {
	for (let _t18 = 0; _t18 < imports.length; _t18++) {
		const imp = array_get(imports, _t18)
		if (string_eq(imp.lang, from_js_string("bait")) || array_string_contains(g.import_names, imp.name)) {
			continue
		}
		array_push(g.import_names, imp.name)
	}
}

function bait__gen__js__Gen_headers(g) {
	let headers = from_js_string("")
	for (let _t19 = 0; _t19 < g.import_names.length; _t19++) {
		const imp = array_get(g.import_names, _t19)
		headers = string_add(headers, from_js_string(`const js_${imp.str} = require("${imp.str}")\n`))
	}
	return string_add(headers, from_js_string("\n"))
}

function bait__gen__js__Gen_gen_test_main(g) {
	bait__gen__js__Gen_writeln(g, from_js_string("function main() {"))
	g.indent += 1
	const _t20 = map_keys(g.table.fun_decls)
	for (let _t21 = 0; _t21 < _t20.length; _t21++) {
		const key = array_get(_t20, _t21)
		const func = map_get(g.table.fun_decls, key)
		if (func.is_test) {
			const name = bait__gen__js__js_name(func.name)
			bait__gen__js__Gen_writeln(g, from_js_string(`${name.str}()`))
		}
	}
	bait__gen__js__Gen_writeln(g, from_js_string("exit(testing__TestRunner_exit_code(testing__test_runner))"))
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_main_call(g) {
	g.out = string_add(g.out, from_js_string("main()"))
}

function bait__gen__js__Gen_write_default_value(g, typ) {
	switch (typ) {
		case bait__ast__TypeIdx.i8:
		case bait__ast__TypeIdx.i16:
		case bait__ast__TypeIdx.i32:
		case bait__ast__TypeIdx.i64:
		case bait__ast__TypeIdx.u8:
		case bait__ast__TypeIdx.u16:
		case bait__ast__TypeIdx.u32:
		case bait__ast__TypeIdx.u64:
			{
				bait__gen__js__Gen_write(g, from_js_string("0"))
				break
			}
		case bait__ast__TypeIdx.f32:
		case bait__ast__TypeIdx.f64:
			{
				bait__gen__js__Gen_write(g, from_js_string("0.0"))
				break
			}
		case bait__ast__TypeIdx.bool:
			{
				bait__gen__js__Gen_write(g, from_js_string("false"))
				break
			}
		case bait__ast__TypeIdx.string:
			{
				bait__gen__js__Gen_write(g, from_js_string("from_js_string(\"\")"))
				break
			}
		default:
			{
				const sym = bait__ast__Table_get_sym(g.table, typ)
				if (sym.kind == bait__ast__TypeKind.array) {
					bait__gen__js__Gen_write(g, from_js_string("new array({ data: [], length: 0 })"))
				} else if (sym.kind == bait__ast__TypeKind.map) {
					bait__gen__js__Gen_write(g, from_js_string("new map({ data: new Map(), length: 0 })"))
				} else if (sym.kind == bait__ast__TypeKind.struct_) {
					bait__gen__js__Gen_write(g, from_js_string(`new ${bait__gen__js__js_name(sym.name).str}({})`))
				} else {
					bait__gen__js__Gen_write(g, from_js_string("undefined"))
				}
				break
			}
	}
}

function bait__gen__js__Gen_warn(g, msg, pos) {
	println(from_js_string(`${g.path.str}:${i32_str(pos.line)}:${i32_str(pos.col)} warning: ${msg.str}`).str)
}

function bait__gen__js__Gen_error(g, msg, pos) {
	eprintln(from_js_string(`${g.path.str}:${i32_str(pos.line)}:${i32_str(pos.col)} error: ${msg.str}`).str)
	exit(1)
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
	for (let _t22 = 0; _t22 < stmts.length; _t22++) {
		const stmt = array_get(stmts, _t22)
		bait__gen__js__Gen_stmt(g, stmt)
	}
	g.indent -= 1
}

function bait__gen__js__Gen_stmt(g, stmt) {
	if (stmt instanceof bait__ast__AssignStmt) {
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
	} else if (stmt instanceof bait__ast__LoopControlStmt) {
		bait__gen__js__Gen_control_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__ReturnStmt) {
		bait__gen__js__Gen_return_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__StructDecl) {
		bait__gen__js__Gen_struct_decl(g, stmt)
	} else if (stmt instanceof bait__ast__TypeDecl) {
	} else {
		bait__gen__js__Gen_error(g, from_js_string(`cannot generate stmt: ${stmt.toString()}`), stmt.pos)
	}
}

function bait__gen__js__Gen_assign_stmt(g, node) {
	if (node.op == bait__token__TokenKind.decl_assign) {
		const left = node.left
		if (left.is_mut) {
			bait__gen__js__Gen_write(g, from_js_string("let "))
		} else {
			bait__gen__js__Gen_write(g, from_js_string("const "))
		}
	}
	if (node.left_type == bait__ast__TypeIdx.string) {
		if (node.op == bait__token__TokenKind.plus_assign) {
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
	g.type_defs_out = string_add(g.type_defs_out, string_add(string_add(from_js_string("const "), bait__gen__js__js_name(node.name)), from_js_string(" = {\n")))
	for (let i = 0; i < node.variants.length; i++) {
		const variant = array_get(node.variants, i)
		g.type_defs_out = string_add(g.type_defs_out, from_js_string(`\t${variant.str}: ${i32_str(i)}`))
		if (i < node.variants.length - 1) {
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(","))
		}
		g.type_defs_out = string_add(g.type_defs_out, from_js_string("\n"))
	}
	g.type_defs_out = string_add(g.type_defs_out, from_js_string("}\n"))
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
	if (string_eq(i, from_js_string(""))) {
		i = bait__gen__js__Gen_new_temp_var(g)
	}
	const sym = bait__ast__Table_get_sym(g.table, node.expr_type)
	if (sym.kind == bait__ast__TypeKind.map) {
		bait__gen__js__Gen_for_in_map(g, node)
		return
	}
	const container = bait__gen__js__Gen_expr_string(g, node.expr)
	bait__gen__js__Gen_writeln(g, from_js_string(`for (let ${i.str} = 0; ${i.str} < ${container.str}.length; ${i.str}++) {`))
	if (sym.kind == bait__ast__TypeKind.array) {
		bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${node.valvar.str} = array_get(${container.str}, ${i.str})`))
	} else if (sym.kind == bait__ast__TypeKind.string) {
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
	bait__gen__js__Gen_writeln(g, from_js_string("}\n"))
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

function bait__gen__js__Gen_return_stmt(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("return"))
	if (!(node.expr instanceof bait__ast__EmptyExpr)) {
		bait__gen__js__Gen_write(g, from_js_string(" "))
		bait__gen__js__Gen_expr(g, node.expr)
	}
	bait__gen__js__Gen_writeln(g, from_js_string(""))
}

function bait__gen__js__Gen_struct_decl(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("function "))
	const jsname = bait__gen__js__js_name(node.name)
	bait__gen__js__Gen_write(g, jsname)
	bait__gen__js__Gen_write(g, from_js_string("({ "))
	for (let i = 0; i < node.fields.length; i++) {
		const field = array_get(node.fields, i)
		bait__gen__js__Gen_write(g, from_js_string(`${field.name.str} = `))
		if (node.typ == field.typ) {
			bait__gen__js__Gen_write(g, from_js_string("this"))
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
	for (let _t23 = 0; _t23 < node.fields.length; _t23++) {
		const field = array_get(node.fields, _t23)
		bait__gen__js__Gen_writeln(g, from_js_string(`this.${field.name.str} = ${field.name.str}`))
	}
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	bait__gen__js__Gen_writeln(g, from_js_string(`${jsname.str}.prototype = {`))
	g.indent += 1
	bait__gen__js__Gen_writeln(g, from_js_string("toString() {"))
	bait__gen__js__Gen_write(g, from_js_string(`\treturn \`${jsname.str}{\n`))
	for (let _t24 = 0; _t24 < node.fields.length; _t24++) {
		const field = array_get(node.fields, _t24)
		bait__gen__js__Gen_write(g, from_js_string(`    ${field.name.str}: \$`))
		bait__gen__js__Gen_write(g, from_js_string(`{this.${field.name.str}.toString()}\n`))
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}\`}"))
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}


const os__ARGS = from_js_string_arr(process.argv)
function os__ls(dir) {
	return from_js_string_arr(js_fs.readdirSync(dir.str))
}

function os__exists(path) {
	return js_fs.existsSync(path.str)
}

function os__file_name(path) {
	return from_js_string(js_path.basename(path.str))
}

function os__dir(path) {
	return from_js_string(js_path.dirname(path.str))
}

function os__is_dir(path) {
	return js_fs.lstatSync(path.str).isDirectory()
}

function os__mkdir(dir) {
	js_fs.mkdirSync(dir.str)
}

function os__mkdir_all(dir) {
	js_fs.mkdirSync(dir.str, { recursive: true })
}

function os__read_file(path) {
	return from_js_string(js_fs.readFileSync(path.str).toString())
}

function os__write_file(path, text) {
	js_fs.writeFileSync(path.str, text.str)
}

function os__getwd() {
	return from_js_string(process.cwd())
}

function os__join_path(base, dirs) {
	const js_dirs = array_string_to_js_arr(dirs)
	return from_js_string(js_path.join(base.str, ...js_dirs))
}

function os__executable() {
	return from_js_string(__filename)
}

function os__abs_path(path) {
	return from_js_string(js_path.resolve(os__getwd().str, path.str))
}

function os__resource_abs_path(path) {
	return os__join_path(from_js_string(__dirname), new array({ data: [path], length: 1 }))
}

function os__Result({ code = 0, stdout = from_js_string(""), stderr = from_js_string("") }) {
	this.code = code
	this.stdout = stdout
	this.stderr = stderr
}
os__Result.prototype = {
	toString() {
		return `os__Result{
    code: ${this.code.toString()}
    stdout: ${this.stdout.toString()}
    stderr: ${this.stderr.toString()}
}`}
}
function os__exec(cmd) {
	let res = new os__Result({})
	try {
		const stdout = js_child_process.execSync(cmd.str, {stdio: ["pipe", "pipe", "pipe"]}).toString()
		res.stdout = from_js_string(stdout)
	} catch (e) {
		res.code = e.status
		res.stderr = from_js_string(e.stderr.toString())
	}
	return res
}

function os__system(cmd) {
	try {
		js_child_process.execSync(cmd.str, { stdio: "inherit" })
	} catch (e) {
		return e.status
	}
	return 0
}


const VERSION = from_js_string("0.0.2-dev")
const TOOLS = new array({ data: [from_js_string("ast"), from_js_string("up"), from_js_string("self"), from_js_string("help"), from_js_string("test-all"), from_js_string("build-examples"), from_js_string("build-tools")], length: 7 })
function ensure_dir_exists(dir) {
	if (!os__exists(dir)) {
		os__mkdir(dir)
	}
}

function order_pkgs(ordered, pkg, deps) {
	for (let _t25 = 0; _t25 < map_get_set(deps, pkg, new array({ data: [], length: 0 })).length; _t25++) {
		const d = array_get(map_get_set(deps, pkg, new array({ data: [], length: 0 })), _t25)
		order_pkgs(ordered, d, deps)
	}
	if (!array_string_contains(ordered, pkg)) {
		array_push(ordered, pkg)
	}
}

function resolve_import_dir(pkg) {
	let dir = os__resource_abs_path(os__join_path(from_js_string("lib"), new array({ data: [pkg], length: 1 })))
	if (!os__exists(dir)) {
		dir = os__join_path(os__getwd(), new array({ data: [from_js_string("lib"), pkg], length: 2 }))
	}
	return dir
}

function transpile(pref) {
	const builtin_dir = resolve_import_dir(from_js_string("builtin"))
	let paths = bait_files_from_dir(builtin_dir)
	paths = array_concat(paths, get_user_files(pref.command))
	let table = bait__ast__new_table()
	let files = new array({ data: [], length: 0 })
	for (let _t26 = 0; _t26 < paths.length; _t26++) {
		const p = array_get(paths, _t26)
		const text2 = os__read_file(p)
		const tokens2 = bait__tokenizer__tokenize(text2, p)
		array_push(files, bait__parser__parse(tokens2, p, table))
	}
	const root_pkg = array_get(files, files.length - 1).pkg_decl.full_name
	for (let i = 0; i < files.length; i += 1) {
		const f = array_get(files, i)
		for (let _t27 = 0; _t27 < f.imports.length; _t27++) {
			const imp = array_get(f.imports, _t27)
			if (!string_eq(imp.lang, from_js_string("bait"))) {
				continue
			}
			let import_dir = resolve_import_dir(string_replace(imp.name, from_js_string("."), from_js_string("/")))
			if (pref.is_test && !os__exists(import_dir)) {
				import_dir = os__dir(f.path)
			}
			let imp_paths = bait_files_from_dir(import_dir)
			imp_paths = array_filter(imp_paths, function (p) {
				return !array_string_contains(paths, p)
			})
			for (let _t28 = 0; _t28 < imp_paths.length; _t28++) {
				const p = array_get(imp_paths, _t28)
				array_push(paths, p)
				const text2 = os__read_file(p)
				const tokens2 = bait__tokenizer__tokenize(text2, p)
				array_push(files, bait__parser__parse(tokens2, p, table))
			}
		}
	}
	let deps = new map({ data: new Map([]), length: 0 })
	for (let _t29 = 0; _t29 < files.length; _t29++) {
		const f = array_get(files, _t29)
		const pkg_name = f.pkg_decl.full_name
		if (!string_eq(pkg_name, from_js_string("builtin"))) {
			array_push(map_get_set(deps, pkg_name, new array({ data: [], length: 0 })), from_js_string("builtin"))
		}
		for (let _t30 = 0; _t30 < f.imports.length; _t30++) {
			const imp = array_get(f.imports, _t30)
			if (!string_eq(imp.lang, from_js_string("bait"))) {
				continue
			}
			array_push(map_get_set(deps, pkg_name, new array({ data: [], length: 0 })), imp.name)
		}
	}
	let pkg_order = new array({ data: [], length: 0 })
	order_pkgs(pkg_order, root_pkg, deps)
	let sorted_files = new array({ data: [], length: 0 })
	for (let _t31 = 0; _t31 < pkg_order.length; _t31++) {
		const pkg = array_get(pkg_order, _t31)
		for (let _t32 = 0; _t32 < files.length; _t32++) {
			const f = array_get(files, _t32)
			if (string_eq(f.pkg_decl.full_name, pkg)) {
				array_push(sorted_files, f)
			}
		}
	}
	const got_errors = bait__checker__check_files(sorted_files, table)
	if (got_errors) {
		return 1
	}
	const res = string_add(bait__gen__js__gen(sorted_files, table, pref), from_js_string("\n"))
	os__write_file(pref.out_name, res)
	return 0
}

function run_tests(pref) {
	let files_to_test = new array({ data: [], length: 0 })
	for (let _t33 = 0; _t33 < pref.args.length; _t33++) {
		const a = array_get(pref.args, _t33)
		if (os__is_dir(a)) {
			files_to_test = array_concat(files_to_test, test_files_from_dir_recursive(a))
		} else if (os__exists(a) && string_ends_with(a, from_js_string("_test.bt"))) {
			array_push(files_to_test, a)
		} else {
			eprintln(from_js_string(`Unrecognized file or directory: "${a.str}"`).str)
			exit(1)
		}
	}
	let test_prefs = pref
	let has_fails = false
	for (let i = 0; i < files_to_test.length; i++) {
		const file = array_get(files_to_test, i)
		test_prefs.command = file
		test_prefs.out_name = from_js_string(`/tmp/test_${i32_str(i)}.js`)
		const res = transpile(test_prefs)
		if (res != 0) {
			has_fails = true
			println(from_js_string(`FAIL ${file.str}`).str)
			continue
		}
		const run_res = os__system(from_js_string(`node ${test_prefs.out_name.str}`))
		if (run_res == 0) {
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

function bait_files_from_dir(dir) {
	const all_files = os__ls(dir)
	let files = new array({ data: [], length: 0 })
	for (let _t34 = 0; _t34 < all_files.length; _t34++) {
		const f = array_get(all_files, _t34)
		if (string_ends_with(f, from_js_string("_test.bt"))) {
			continue
		}
		if (string_ends_with(f, from_js_string(".bt"))) {
			array_push(files, os__join_path(dir, new array({ data: [f], length: 1 })))
		}
	}
	return files
}

function test_files_from_dir_recursive(dir) {
	const all_files = os__ls(dir)
	let test_files = new array({ data: [], length: 0 })
	for (let _t35 = 0; _t35 < all_files.length; _t35++) {
		const file = array_get(all_files, _t35)
		const p = os__join_path(dir, new array({ data: [file], length: 1 }))
		if (os__is_dir(p)) {
			test_files = array_concat(test_files, test_files_from_dir_recursive(p))
		} else if (os__exists(p) && string_ends_with(p, from_js_string("_test.bt"))) {
			array_push(test_files, p)
		}
	}
	return test_files
}

function get_user_files(upath) {
	if (os__is_dir(upath)) {
		return bait_files_from_dir(upath)
	}
	if (os__exists(upath) && string_ends_with(upath, from_js_string(".bt"))) {
		return new array({ data: [upath], length: 1 })
	}
	return new array({ data: [], length: 0 })
}

function parse_args(args) {
	const baitexe = os__executable()
	let pref = new bait__prefs__Pref({ baitexe: baitexe, baitroot: os__dir(baitexe) })
	for (let i = 0; i < args.length; i += 1) {
		const arg = array_get(args, i)
		switch (arg.str) {
			case from_js_string("-o").str:
			case from_js_string("--out").str:
				{
					i += 1
					pref.out_name = array_get(args, i)
					break
				}
			default:
				{
					if (pref.command.length == 0) {
						pref.command = arg
					} else {
						array_push(pref.args, arg)
					}
					break
				}
		}
	}
	if (pref.out_name.length == 0) {
		pref.out_name = from_js_string("out.js")
	}
	if (string_eq(pref.command, from_js_string("test"))) {
		pref.is_test = true
	}
	return pref
}

function launch_tool(name, args) {
	const tool_base_path = os__resource_abs_path(os__join_path(from_js_string("cli"), new array({ data: [from_js_string("tools"), name], length: 2 })))
	const tool_source = string_add(tool_base_path, from_js_string(".bt"))
	const tool_exe = string_add(tool_base_path, from_js_string(".js"))
	const tool_args = array_string_join(args, from_js_string(" "))
	const baitexe = os__executable()
	const comp_res = os__exec(from_js_string(`node ${baitexe.str} ${tool_source.str} -o ${tool_exe.str}`))
	if (comp_res.code != 0) {
		eprintln(from_js_string(`Failed to compile tool "${name.str}" with error: ${comp_res.stderr.str}`).str)
		exit(1)
	}
	exit(os__system(from_js_string(`node ${tool_exe.str} ${tool_args.str}`)))
}

function main() {
	const args = array_slice(os__ARGS, 2, os__ARGS.length)
	if (args.length == 0) {
		launch_tool(from_js_string("help"), new array({ data: [], length: 0 }))
		return
	}
	let pref = parse_args(args)
	if (array_string_contains(TOOLS, pref.command)) {
		launch_tool(pref.command, pref.args)
		return
	}
	switch (pref.command.str) {
		case from_js_string("build").str:
			{
				pref.command = array_get(pref.args, 0)
				ensure_dir_exists(os__dir(pref.out_name))
				exit(transpile(pref))
				break
			}
		case from_js_string("test").str:
			{
				exit(run_tests(pref))
				break
			}
		case from_js_string("version").str:
			{
				println(from_js_string(`Bait ${VERSION.str}`).str)
				return
				break
			}
	}
	if (os__exists(pref.command)) {
		ensure_dir_exists(os__dir(pref.out_name))
		exit(transpile(pref))
	}
	eprintln(from_js_string(`error: unknown file or command: "${pref.command.str}"`).str)
	exit(1)
}


main()
