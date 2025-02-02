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

function bait__token__ComptimeVar_str(it) {
	switch(it) {
		case bait__token__ComptimeVar.unknown: return from_js_string("unknown")
		case bait__token__ComptimeVar.pkg: return from_js_string("pkg")
		case bait__token__ComptimeVar.file: return from_js_string("file")
		case bait__token__ComptimeVar.abs_file: return from_js_string("abs_file")
		case bait__token__ComptimeVar.dir: return from_js_string("dir")
		case bait__token__ComptimeVar.line: return from_js_string("line")
		case bait__token__ComptimeVar.file_line: return from_js_string("file_line")
		case bait__token__ComptimeVar.fun_: return from_js_string("fun_")
		case bait__token__ComptimeVar.baitexe: return from_js_string("baitexe")
		case bait__token__ComptimeVar.baitdir: return from_js_string("baitdir")
		case bait__token__ComptimeVar.baithash: return from_js_string("baithash")
	}
}

function bait__ast__InvalidStmt_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.InvalidStmt{"
	s += "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__Stmt_str(it, indent) {
	if (it instanceof bait__ast__AssertStmt) {
		return bait__ast__AssertStmt_str(it, indent)
	}
	if (it instanceof bait__ast__AssignStmt) {
		return bait__ast__AssignStmt_str(it, indent)
	}
	if (it instanceof bait__ast__Block) {
		return bait__ast__Block_str(it, indent)
	}
	if (it instanceof bait__ast__ConstDecl) {
		return bait__ast__ConstDecl_str(it, indent)
	}
	if (it instanceof bait__ast__EnumDecl) {
		return bait__ast__EnumDecl_str(it, indent)
	}
	if (it instanceof bait__ast__ExprStmt) {
		return bait__ast__ExprStmt_str(it, indent)
	}
	if (it instanceof bait__ast__ForLoop) {
		return bait__ast__ForLoop_str(it, indent)
	}
	if (it instanceof bait__ast__ForClassicLoop) {
		return bait__ast__ForClassicLoop_str(it, indent)
	}
	if (it instanceof bait__ast__ForInLoop) {
		return bait__ast__ForInLoop_str(it, indent)
	}
	if (it instanceof bait__ast__FunDecl) {
		return bait__ast__FunDecl_str(it, indent)
	}
	if (it instanceof bait__ast__StaticDecl) {
		return bait__ast__StaticDecl_str(it, indent)
	}
	if (it instanceof bait__ast__InterfaceDecl) {
		return bait__ast__InterfaceDecl_str(it, indent)
	}
	if (it instanceof bait__ast__ReturnStmt) {
		return bait__ast__ReturnStmt_str(it, indent)
	}
	if (it instanceof bait__ast__StructDecl) {
		return bait__ast__StructDecl_str(it, indent)
	}
	if (it instanceof bait__ast__TypeDecl) {
		return bait__ast__TypeDecl_str(it, indent)
	}
	if (it instanceof bait__ast__LoopControlStmt) {
		return bait__ast__LoopControlStmt_str(it, indent)
	}
	if (it instanceof bait__ast__IfMatch) {
		return bait__ast__IfMatch_str(it, indent)
	}
	if (it instanceof bait__ast__Void) {
		return bait__ast__Void_str(it, indent)
	}
	if (it instanceof bait__ast__InvalidStmt) {
		return bait__ast__InvalidStmt_str(it, indent)
	}
}

function bait__ast__AssertStmt_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.AssertStmt{"
	s += "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__AssignStmt_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.AssignStmt{"
	s += "\n"
	s += space + "  left_type = " + bait__ast__Type_str(it.left_type, indent + 1).str + "\n"
	s += space + "  right_type = " + bait__ast__Type_str(it.right_type, indent + 1).str + "\n"
	s += space + "  op = " + bait__token__Token_str(it.op, indent + 1).str + "\n"
	s += space + "  left = " + bait__ast__Expr_str(it.left, indent + 1).str + "\n"
	s += space + "  right = " + bait__ast__Expr_str(it.right, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__Block_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.Block{"
	s += "\n"
	s += space + "  stmts = " + Array_bait__ast__Stmt_str(it.stmts, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__ConstDecl_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.ConstDecl{"
	s += "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__EnumDecl_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.EnumDecl{"
	s += "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  fields = " + Array_bait__ast__EnumField_str(it.fields, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__ExprStmt_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.ExprStmt{"
	s += "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__ForLoop_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.ForLoop{"
	s += "\n"
	s += space + "  label = " + string_str(it.label, indent + 1).str + "\n"
	s += space + "  cond = " + bait__ast__Expr_str(it.cond, indent + 1).str + "\n"
	s += space + "  stmts = " + Array_bait__ast__Stmt_str(it.stmts, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__ForClassicLoop_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.ForClassicLoop{"
	s += "\n"
	s += space + "  label = " + string_str(it.label, indent + 1).str + "\n"
	s += space + "  init = " + bait__ast__Stmt_str(it.init, indent + 1).str + "\n"
	s += space + "  cond = " + bait__ast__Expr_str(it.cond, indent + 1).str + "\n"
	s += space + "  inc = " + bait__ast__Stmt_str(it.inc, indent + 1).str + "\n"
	s += space + "  stmts = " + Array_bait__ast__Stmt_str(it.stmts, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__ForInLoop_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.ForInLoop{"
	s += "\n"
	s += space + "  expr_type = " + bait__ast__Type_str(it.expr_type, indent + 1).str + "\n"
	s += space + "  val_type = " + bait__ast__Type_str(it.val_type, indent + 1).str + "\n"
	s += space + "  label = " + string_str(it.label, indent + 1).str + "\n"
	s += space + "  idxvar = " + bait__ast__Expr_str(it.idxvar, indent + 1).str + "\n"
	s += space + "  valvar = " + bait__ast__Ident_str(it.valvar, indent + 1).str + "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  stmts = " + Array_bait__ast__Stmt_str(it.stmts, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__FunDecl_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.FunDecl{"
	s += "\n"
	s += space + "  is_pub = " + bool_str(it.is_pub, indent + 1).str + "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  key = " + string_str(it.key, indent + 1).str + "\n"
	s += space + "  params = " + Array_bait__ast__Param_str(it.params, indent + 1).str + "\n"
	s += space + "  return_type = " + bait__ast__Type_str(it.return_type, indent + 1).str + "\n"
	s += space + "  is_test = " + bool_str(it.is_test, indent + 1).str + "\n"
	s += space + "  attrs = " + Array_bait__ast__Attribute_str(it.attrs, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  is_method = " + bool_str(it.is_method, indent + 1).str + "\n"
	s += space + "  noreturn = " + bool_str(it.noreturn, indent + 1).str + "\n"
	s += space + "  stmts = " + Array_bait__ast__Stmt_str(it.stmts, indent + 1).str + "\n"
	s += space + "  generic_names = " + Array_string_str(it.generic_names, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__StaticDecl_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.StaticDecl{"
	s += "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__InterfaceDecl_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.InterfaceDecl{"
	s += "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  methods = " + Array_bait__ast__FunDecl_str(it.methods, indent + 1).str + "\n"
	s += space + "  fields = " + Array_bait__ast__StructField_str(it.fields, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__ReturnStmt_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.ReturnStmt{"
	s += "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__StructDecl_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.StructDecl{"
	s += "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	s += space + "  pkg_prefix = " + string_str(it.pkg_prefix, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  fields = " + Array_bait__ast__StructField_str(it.fields, indent + 1).str + "\n"
	s += space + "  generic_names = " + Array_string_str(it.generic_names, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__TypeDecl_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.TypeDecl{"
	s += "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__LoopControlStmt_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.LoopControlStmt{"
	s += "\n"
	s += space + "  kind = " + bait__token__Token_str(it.kind, indent + 1).str + "\n"
	s += space + "  label = " + string_str(it.label, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__IfMatch_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.IfMatch{"
	s += "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  is_expr = " + bool_str(it.is_expr, indent + 1).str + "\n"
	s += space + "  ct_eval_branch = " + i32_str(it.ct_eval_branch, indent + 1).str + "\n"
	s += space + "  is_comptime = " + bool_str(it.is_comptime, indent + 1).str + "\n"
	s += space + "  is_match = " + bool_str(it.is_match, indent + 1).str + "\n"
	s += space + "  has_else = " + bool_str(it.has_else, indent + 1).str + "\n"
	s += space + "  branches = " + Array_bait__ast__IfBranch_str(it.branches, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__Void_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.Void{"
	return from_js_string(s + space + "}")
}

function bait__ast__Expr_str(it, indent) {
	if (it instanceof bait__ast__AnonFun) {
		return bait__ast__AnonFun_str(it, indent)
	}
	if (it instanceof bait__ast__ArrayInit) {
		return bait__ast__ArrayInit_str(it, indent)
	}
	if (it instanceof bait__ast__AsCast) {
		return bait__ast__AsCast_str(it, indent)
	}
	if (it instanceof bait__ast__BlankIdent) {
		return bait__ast__BlankIdent_str(it, indent)
	}
	if (it instanceof bait__ast__BoolLiteral) {
		return bait__ast__BoolLiteral_str(it, indent)
	}
	if (it instanceof bait__ast__CallExpr) {
		return bait__ast__CallExpr_str(it, indent)
	}
	if (it instanceof bait__ast__CharLiteral) {
		return bait__ast__CharLiteral_str(it, indent)
	}
	if (it instanceof bait__ast__ComptimeVar) {
		return bait__ast__ComptimeVar_str(it, indent)
	}
	if (it instanceof bait__ast__EnumVal) {
		return bait__ast__EnumVal_str(it, indent)
	}
	if (it instanceof bait__ast__FloatLiteral) {
		return bait__ast__FloatLiteral_str(it, indent)
	}
	if (it instanceof bait__ast__HashExpr) {
		return bait__ast__HashExpr_str(it, indent)
	}
	if (it instanceof bait__ast__Ident) {
		return bait__ast__Ident_str(it, indent)
	}
	if (it instanceof bait__ast__IfMatch) {
		return bait__ast__IfMatch_str(it, indent)
	}
	if (it instanceof bait__ast__IndexExpr) {
		return bait__ast__IndexExpr_str(it, indent)
	}
	if (it instanceof bait__ast__InfixExpr) {
		return bait__ast__InfixExpr_str(it, indent)
	}
	if (it instanceof bait__ast__IntegerLiteral) {
		return bait__ast__IntegerLiteral_str(it, indent)
	}
	if (it instanceof bait__ast__MapInit) {
		return bait__ast__MapInit_str(it, indent)
	}
	if (it instanceof bait__ast__ParExpr) {
		return bait__ast__ParExpr_str(it, indent)
	}
	if (it instanceof bait__ast__PrefixExpr) {
		return bait__ast__PrefixExpr_str(it, indent)
	}
	if (it instanceof bait__ast__RangeExpr) {
		return bait__ast__RangeExpr_str(it, indent)
	}
	if (it instanceof bait__ast__SelectorExpr) {
		return bait__ast__SelectorExpr_str(it, indent)
	}
	if (it instanceof bait__ast__StringLiteral) {
		return bait__ast__StringLiteral_str(it, indent)
	}
	if (it instanceof bait__ast__StringInterLiteral) {
		return bait__ast__StringInterLiteral_str(it, indent)
	}
	if (it instanceof bait__ast__StructInit) {
		return bait__ast__StructInit_str(it, indent)
	}
	if (it instanceof bait__ast__TmpVar) {
		return bait__ast__TmpVar_str(it, indent)
	}
	if (it instanceof bait__ast__TypeOf) {
		return bait__ast__TypeOf_str(it, indent)
	}
	if (it instanceof bait__ast__Void) {
		return bait__ast__Void_str(it, indent)
	}
	if (it instanceof bait__ast__InvalidExpr) {
		return bait__ast__InvalidExpr_str(it, indent)
	}
}

function bait__ast__Type_str(it, indent) {
	return i32_str(it, indent)
}function Array_bait__ast__Stmt_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__Stmt_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function Array_bait__ast__EnumField_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__EnumField_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function bait__ast__Ident_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.Ident{"
	s += "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  pkg = " + string_str(it.pkg, indent + 1).str + "\n"
	s += space + "  is_mut = " + bool_str(it.is_mut, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function Array_bait__ast__Param_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__Param_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function Array_bait__ast__Attribute_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__Attribute_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function Array_string_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += string_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function Array_bait__ast__FunDecl_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__FunDecl_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function Array_bait__ast__StructField_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__StructField_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function Array_bait__ast__IfBranch_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__IfBranch_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function bait__ast__AnonFun_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.AnonFun{"
	s += "\n"
	s += space + "  decl = " + bait__ast__FunDecl_str(it.decl, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__ArrayInit_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.ArrayInit{"
	s += "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  elem_type = " + bait__ast__Type_str(it.elem_type, indent + 1).str + "\n"
	s += space + "  exprs = " + Array_bait__ast__Expr_str(it.exprs, indent + 1).str + "\n"
	s += space + "  length_expr = " + bait__ast__Expr_str(it.length_expr, indent + 1).str + "\n"
	s += space + "  cap_expr = " + bait__ast__Expr_str(it.cap_expr, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__AsCast_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.AsCast{"
	s += "\n"
	s += space + "  expr_type = " + bait__ast__Type_str(it.expr_type, indent + 1).str + "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  target = " + bait__ast__Type_str(it.target, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__BlankIdent_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.BlankIdent{"
	s += "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__CallExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.CallExpr{"
	s += "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	s += space + "  pkg = " + string_str(it.pkg, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  return_type = " + bait__ast__Type_str(it.return_type, indent + 1).str + "\n"
	s += space + "  left_type = " + bait__ast__Type_str(it.left_type, indent + 1).str + "\n"
	s += space + "  left = " + bait__ast__Expr_str(it.left, indent + 1).str + "\n"
	s += space + "  concrete_types = " + Array_bait__ast__Type_str(it.concrete_types, indent + 1).str + "\n"
	s += space + "  is_field = " + bool_str(it.is_field, indent + 1).str + "\n"
	s += space + "  noreturn = " + bool_str(it.noreturn, indent + 1).str + "\n"
	s += space + "  args = " + Array_bait__ast__CallArg_str(it.args, indent + 1).str + "\n"
	s += space + "  or_block = " + bait__ast__OrBlock_str(it.or_block, indent + 1).str + "\n"
	s += space + "  is_method = " + bool_str(it.is_method, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__CharLiteral_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.CharLiteral{"
	s += "\n"
	s += space + "  val = " + string_str(it.val, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__ComptimeVar_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.ComptimeVar{"
	s += "\n"
	s += space + "  kind = " + bait__token__ComptimeVar_str(it.kind, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__EnumVal_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.EnumVal{"
	s += "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  val = " + string_str(it.val, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__FloatLiteral_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.FloatLiteral{"
	s += "\n"
	s += space + "  val = " + string_str(it.val, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__HashExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.HashExpr{"
	s += "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	s += space + "  val = " + string_str(it.val, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__IndexExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.IndexExpr{"
	s += "\n"
	s += space + "  is_selector = " + bool_str(it.is_selector, indent + 1).str + "\n"
	s += space + "  left_type = " + bait__ast__Type_str(it.left_type, indent + 1).str + "\n"
	s += space + "  left = " + bait__ast__Expr_str(it.left, indent + 1).str + "\n"
	s += space + "  index = " + bait__ast__Expr_str(it.index, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__InfixExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.InfixExpr{"
	s += "\n"
	s += space + "  left_type = " + bait__ast__Type_str(it.left_type, indent + 1).str + "\n"
	s += space + "  right_type = " + bait__ast__Type_str(it.right_type, indent + 1).str + "\n"
	s += space + "  op = " + bait__token__Token_str(it.op, indent + 1).str + "\n"
	s += space + "  right = " + bait__ast__Expr_str(it.right, indent + 1).str + "\n"
	s += space + "  left = " + bait__ast__Expr_str(it.left, indent + 1).str + "\n"
	s += space + "  is_match = " + bool_str(it.is_match, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__IntegerLiteral_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.IntegerLiteral{"
	s += "\n"
	s += space + "  val = " + string_str(it.val, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__MapInit_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.MapInit{"
	s += "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  key_type = " + bait__ast__Type_str(it.key_type, indent + 1).str + "\n"
	s += space + "  val_type = " + bait__ast__Type_str(it.val_type, indent + 1).str + "\n"
	s += space + "  keys = " + Array_bait__ast__Expr_str(it.keys, indent + 1).str + "\n"
	s += space + "  vals = " + Array_bait__ast__Expr_str(it.vals, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__ParExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.ParExpr{"
	s += "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__PrefixExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.PrefixExpr{"
	s += "\n"
	s += space + "  op = " + bait__token__Token_str(it.op, indent + 1).str + "\n"
	s += space + "  right = " + bait__ast__Expr_str(it.right, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__RangeExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.RangeExpr{"
	s += "\n"
	s += space + "  low = " + bait__ast__Expr_str(it.low, indent + 1).str + "\n"
	s += space + "  high = " + bait__ast__Expr_str(it.high, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__SelectorExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.SelectorExpr{"
	s += "\n"
	s += space + "  expr_type = " + bait__ast__Type_str(it.expr_type, indent + 1).str + "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  field_name = " + string_str(it.field_name, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__StringLiteral_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.StringLiteral{"
	s += "\n"
	s += space + "  lang = " + bait__ast__Language_str(it.lang, indent + 1).str + "\n"
	s += space + "  val = " + string_str(it.val, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__StringInterLiteral_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.StringInterLiteral{"
	s += "\n"
	s += space + "  vals = " + Array_string_str(it.vals, indent + 1).str + "\n"
	s += space + "  exprs = " + Array_bait__ast__Expr_str(it.exprs, indent + 1).str + "\n"
	s += space + "  expr_types = " + Array_bait__ast__Type_str(it.expr_types, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__StructInit_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.StructInit{"
	s += "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  fields = " + Array_bait__ast__StructInitField_str(it.fields, indent + 1).str + "\n"
	s += space + "  concrete_types = " + Array_bait__ast__Type_str(it.concrete_types, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__TmpVar_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.TmpVar{"
	return from_js_string(s + space + "}")
}

function bait__ast__TypeOf_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.TypeOf{"
	s += "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__InvalidExpr_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.InvalidExpr{"
	s += "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__EnumField_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.EnumField{"
	s += "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__Param_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.Param{"
	s += "\n"
	s += space + "  is_mut = " + bool_str(it.is_mut, indent + 1).str + "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__Attribute_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.Attribute{"
	s += "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  value = " + string_str(it.value, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__StructField_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.StructField{"
	s += "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	s += space + "  is_mut = " + bool_str(it.is_mut, indent + 1).str + "\n"
	s += space + "  is_pub = " + bool_str(it.is_pub, indent + 1).str + "\n"
	s += space + "  is_global = " + bool_str(it.is_global, indent + 1).str + "\n"
	s += space + "  attrs = " + Array_bait__ast__Attribute_str(it.attrs, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__IfBranch_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.IfBranch{"
	s += "\n"
	s += space + "  cond = " + bait__ast__Expr_str(it.cond, indent + 1).str + "\n"
	s += space + "  stmts = " + Array_bait__ast__Stmt_str(it.stmts, indent + 1).str + "\n"
	s += space + "  pos = " + bait__token__Pos_str(it.pos, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function Array_bait__ast__Expr_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__Expr_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function Array_bait__ast__Type_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__Type_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function Array_bait__ast__CallArg_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__CallArg_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function bait__ast__OrBlock_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.OrBlock{"
	s += "\n"
	s += space + "  kind = " + bait__ast__OrKind_str(it.kind, indent + 1).str + "\n"
	s += space + "  stmts = " + Array_bait__ast__Stmt_str(it.stmts, indent + 1).str + "\n"
	s += space + "  uid = " + string_str(it.uid, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function Array_bait__ast__StructInitField_str(a, indent) {
	let s = "["
	for (let i = 0; i < a.length; i++) {
		s += bait__ast__StructInitField_str(a.data[i], indent + 1).str
		if (i < a.length - 1) {
			s += ", "
		}
	}
	return from_js_string(s + "]")
}
function bait__ast__CallArg_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.CallArg{"
	s += "\n"
	s += space + "  typ = " + bait__ast__Type_str(it.typ, indent + 1).str + "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
	s += space + "  is_mut = " + bool_str(it.is_mut, indent + 1).str + "\n"
	return from_js_string(s + space + "}")
}

function bait__ast__OrKind_str(it) {
	switch(it) {
		case bait__ast__OrKind.none: return from_js_string("none")
		case bait__ast__OrKind.block: return from_js_string("block")
		case bait__ast__OrKind.prop: return from_js_string("prop")
	}
}

function bait__ast__StructInitField_str(it, indent) {
	const space = " ".repeat(indent * 2)
	let s = "bait.ast.StructInitField{"
	s += "\n"
	s += space + "  name = " + string_str(it.name, indent + 1).str + "\n"
	s += space + "  expr = " + bait__ast__Expr_str(it.expr, indent + 1).str + "\n"
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

function Array_trim(a, new_len) {
	if (i32(new_len < a.length)) {
		a.length = new_len
	}
}


function bait_Array({ data = undefined, length = 0 }) {
	this.data = data
	this.length = length
}
function Array_check_bounds(a, i) {
	if (i32(i < 0) || i32(i >= a.length)) {
		panic(from_js_string(`array index out of bounds (0..${i32_str(a.length).str}): ${i32_str(i).str}`))
	}
}

function Array_get(a, i) {
	Array_check_bounds(a, i)
	return a.data.at(i)
}

function Array_set(a, i, val) {
	Array_check_bounds(a, i)
	a.data[i] = val
}

function Array_last(a) {
	if (eq(a.length, 0)) {
		panic(from_js_string("array is empty"))
	}
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

function Array_insert(a, i, el) {
	if (i32(i < 0) || i32(i > a.length)) {
		panic(from_js_string(`array index out of bounds (0..=${i32_str(a.length).str}): ${i32_str(i).str}`))
	}
	a.length += 1
	a.data.splice(i, 0, el)
}

function Array_index_string(a, val) {
	for (let i = 0; i32(i < a.length); i += 1) {
		if (string_eq(Array_get(a, i), val)) {
			return i
		}
	}
	return -1
}

function Array_index_bait__token__Token(a, val) {
	for (let i = 0; i32(i < a.length); i += 1) {
		if (eq(Array_get(a, i), val)) {
			return i
		}
	}
	return -1
}

function Array_delete(a, idx) {
	a.data.splice(idx, 1)
	a.length -= 1
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

function Array_eq(a, b) {
	if (!eq(a.length, b.length)) {
		return false
	}
	for (let i = 0; i32(i < a.length); i += 1) {
		if (!eq(a.data[i], b.data[i])) {
			return false
		}
	}
	return true
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
	for (let _t8 = 0; _t8 < chars.length; _t8++) {
		const c = Array_get(chars, _t8)
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


function bait_Map({ data = undefined, length = 0 }) {
	this.data = data
	this.length = length
}
function Map_get(m, key) {
	return m.data.get(key.str)
}

function Map_set(m, key, val) {
	if (!Map_contains(m, key)) {
		m.length += 1
	}
	m.data.set(key.str, val)
}

function Map_get_set(m, key, val) {
	if (!Map_contains(m, key)) {
		Map_set(m, key, val)
	}
	return Map_get(m, key)
}

function Map_contains(m, key) {
	return m.data.has(key.str)
}

function Map_keys(m) {
	return from_js_string_arr(Array.from(m.data.keys()))
}

function Map_values(m) {
	return from_js_arr(Array.from(m.data.values()))
}

function Map_clear(m) {
	m.length = 0
	m.data = new Map([])
}


const builtin__MIN_I8 = -128
const builtin__MAX_I8 = 127
const builtin__MIN_I16 = -32768
const builtin__MAX_I16 = 32767
const builtin__MIN_I32 = -2147483648
const builtin__MAX_I32 = 2147483647
const builtin__MIN_I64 = BigInt(-9223372036854775808)
const builtin__MAX_I64 = BigInt(9223372036854775807n)
const builtin__MIN_U8 = 0
const builtin__MAX_U8 = 255
const builtin__MIN_U16 = 0
const builtin__MAX_U16 = 65535
const builtin__MIN_U32 = BigInt(0n)
const builtin__MAX_U32 = BigInt(4294967295n)
const builtin__MIN_U64 = BigInt(0n)
const builtin__MAX_U64 = BigInt(18446744073709551615n)
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
		let _t11 = undefined
		if (u8(d < 10)) {
			_t11 = u8(d + u8("0"))
		} else {
			_t11 = u8(d + 87)
		}
		const d2 = _t11
		Array_set(buf, i, d2)
		n = u64(n >> BigInt(4n))
		if (eq(n, BigInt(0n))) {
			break
		}
		i -= 1
	}
	return Array_u8_to_string(Array_slice(buf, i, buf.length))
}

function to_hex_padded(num, len) {
	let n = num
	let buf = new bait_Array({ data: Array.from({ length: len }, (v, i) => 0), length: len })
	for (let i = (u8(len - 1)); i32(i >= 0); i -= 1) {
		const d = Number((u64(n & BigInt(0xFn))))
		let _t13 = undefined
		if (u8(d < 10)) {
			_t13 = u8(d + u8("0"))
		} else {
			_t13 = u8(d + 87)
		}
		const d2 = _t13
		Array_set(buf, i, d2)
		n = u64(n >> BigInt(4n))
	}
	return Array_u8_to_string(buf)
}


function i8(n) {
	const v = n & 0xFF
	return v > builtin__MAX_I8 ? -v : v
}

function i16(n) {
	const v = n & 0xFFFF
	return v > builtin__MAX_I16 ? -v : v
}

function i32(n) {
	const v = n & 0xFFFFFFFF
	return v > builtin__MAX_I32 ? -v : v
}

function i64(n) {
	return BigInt(BigInt.asIntN(64, n))
}

function u8(v) {
	if (typeof(v) == "string") {
		return v.charCodeAt(0)
	}
	if (v instanceof string) {
		return string_get(v, 0)
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
		for (let _t19 = 0; _t19 < cutset.length; _t19++) {
			const c = string_get(cutset, _t19)
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
		for (let _t21 = 0; _t21 < cutset.length; _t21++) {
			const c = string_get(cutset, _t21)
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


function string({ str = undefined, length = 0 }) {
	this.str = str
	this.length = length
}
function string_get(s, i) {
	return u8(s.str.charCodeAt(i))
}

function string_bytes(s) {
	let arr = new bait_Array({ data: [], length: 0 })
	for (let _t23 = 0; _t23 < s.length; _t23++) {
		const c = string_get(s, _t23)
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
	for (let i = 1; i32(i < s.length); i += 1) {
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
		for (let _t26 = 0; _t26 < s.length; _t26++) {
			const c = string_get(s, _t26)
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
	for (let i = 0; i32(i < js_arr.length); i += 1) {
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



function os__walk_ext(basedir, ext) {
	let ext_files = new bait_Array({ data: [], length: 0 })
	const all_files = os__ls(basedir)
	for (let _t29 = 0; _t29 < all_files.length; _t29++) {
		const file = Array_get(all_files, _t29)
		const fpath = os__join_path(basedir, new bait_Array({ data: [file], length: 1 }))
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
	return string_trim_right(string_substr(path, 0, pos), os__PATH_SEP)
}

function os__exists_dir(path) {
	return os__exists(path) && os__is_dir(path)
}


const os__ARGS = from_js_string_arr(JS.process.argv)
const os__PATH_SEP = from_js_string(JS.path.sep)
function os__user_args() {
	return Array_slice(os__ARGS, 2, os__ARGS.length)
}

function os__ls(d) {
	return from_js_string_arr(JS.fs.readdirSync(d.str))
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
	if (string_eq(os__platform(), from_js_string("windows"))) {
		return eq(path.length, 2) && eq(string_get(path, 1), u8(":"))
	}
	return string_eq(path, from_js_string("/"))
}

function os__chdir(d) {
	JS.process.chdir(d.str)
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

function os__mkdir(d) {
	if (os__exists(d)) {
		return 
	}
	JS.fs.mkdirSync(d.str)
}

function os__mkdir_all(d) {
	if (os__exists(d)) {
		return 
	}
	JS.fs.mkdirSync(d.str, { recursive: true })
}

function os__rm(path) {
	JS.fs.rmSync(path.str)
}

function os__rmdir(d) {
	JS.fs.rmdirSync(d.str)
}

function os__rmdir_all(d) {
	JS.fs.rmdirSync(d.str, { recursive: true })
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
	const p = from_js_string(JS.process.platform)
	if (string_eq(p, from_js_string("win32")) || string_eq(p, from_js_string("win64"))) {
		return from_js_string("windows")
	}
	return p
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


const bait__token__ComptimeVar = {
	unknown: 0,
	pkg: 1,
	file: 2,
	abs_file: 3,
	dir: 4,
	line: 5,
	file_line: 6,
	fun_: 7,
	baitexe: 8,
	baitdir: 9,
	baithash: 10,
}
function bait__token__comptime_var_from_string(name) {
	let _t39 = undefined
	if (string_eq(name, from_js_string("PKG"))) {
		_t39 = bait__token__ComptimeVar.pkg
	} else if (string_eq(name, from_js_string("FILE"))) {
		_t39 = bait__token__ComptimeVar.file
	} else if (string_eq(name, from_js_string("ABS_FILE"))) {
		_t39 = bait__token__ComptimeVar.abs_file
	} else if (string_eq(name, from_js_string("DIR"))) {
		_t39 = bait__token__ComptimeVar.dir
	} else if (string_eq(name, from_js_string("LINE"))) {
		_t39 = bait__token__ComptimeVar.line
	} else if (string_eq(name, from_js_string("FILE_LINE"))) {
		_t39 = bait__token__ComptimeVar.file_line
	} else if (string_eq(name, from_js_string("FUN"))) {
		_t39 = bait__token__ComptimeVar.fun_
	} else if (string_eq(name, from_js_string("BAITEXE"))) {
		_t39 = bait__token__ComptimeVar.baitexe
	} else if (string_eq(name, from_js_string("BAITDIR"))) {
		_t39 = bait__token__ComptimeVar.baitdir
	} else if (string_eq(name, from_js_string("BAITHASH"))) {
		_t39 = bait__token__ComptimeVar.baithash
	} else {
		_t39 = bait__token__ComptimeVar.unknown
	}
	return _t39
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
	range: 1,
	cond: 2,
	compare: 3,
	as_is: 4,
	sum: 5,
	product: 6,
	prefix: 7,
	select: 8,
	index: 9,
}
function bait__token__Token_precedence(t) {
	let _t40 = undefined
	if (eq(t, bait__token__Token.lsqr)) {
		_t40 = bait__token__Precedence.index
	} else if (eq(t, bait__token__Token.dot)) {
		_t40 = bait__token__Precedence.select
	} else if (eq(t, bait__token__Token.key_not)) {
		_t40 = bait__token__Precedence.prefix
	} else if (eq(t, bait__token__Token.mul) || eq(t, bait__token__Token.div) || eq(t, bait__token__Token.mod) || eq(t, bait__token__Token.amp) || eq(t, bait__token__Token.lshift) || eq(t, bait__token__Token.rshift)) {
		_t40 = bait__token__Precedence.product
	} else if (eq(t, bait__token__Token.plus) || eq(t, bait__token__Token.minus) || eq(t, bait__token__Token.pipe) || eq(t, bait__token__Token.caret)) {
		_t40 = bait__token__Precedence.sum
	} else if (eq(t, bait__token__Token.eq) || eq(t, bait__token__Token.ne) || eq(t, bait__token__Token.lt) || eq(t, bait__token__Token.gt) || eq(t, bait__token__Token.le) || eq(t, bait__token__Token.ge)) {
		_t40 = bait__token__Precedence.compare
	} else if (eq(t, bait__token__Token.key_as) || eq(t, bait__token__Token.key_is)) {
		_t40 = bait__token__Precedence.as_is
	} else if (eq(t, bait__token__Token.key_and) || eq(t, bait__token__Token.key_or)) {
		_t40 = bait__token__Precedence.cond
	} else if (eq(t, bait__token__Token.dotdot)) {
		_t40 = bait__token__Precedence.range
	} else {
		_t40 = bait__token__Precedence.lowest
	}
	return _t40
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
	dotdot: 12,
	colon: 13,
	comma: 14,
	semicolon: 15,
	plus: 16,
	minus: 17,
	mul: 18,
	div: 19,
	mod: 20,
	assign: 21,
	decl_assign: 22,
	plus_assign: 23,
	minus_assign: 24,
	mul_assign: 25,
	div_assign: 26,
	mod_assign: 27,
	eq: 28,
	ne: 29,
	lt: 30,
	gt: 31,
	le: 32,
	ge: 33,
	lpar: 34,
	rpar: 35,
	lsqr: 36,
	rsqr: 37,
	lcur: 38,
	rcur: 39,
	excl: 40,
	tilde: 41,
	amp: 42,
	pipe: 43,
	caret: 44,
	lshift: 45,
	rshift: 46,
	dollar: 47,
	str_dollar: 48,
	key_and: 49,
	key_as: 50,
	key_assert: 51,
	key_break: 52,
	key_const: 53,
	key_continue: 54,
	key_else: 55,
	key_enum: 56,
	key_false: 57,
	key_for: 58,
	key_fun: 59,
	key_global: 60,
	key_if: 61,
	key_import: 62,
	key_in: 63,
	key_interface: 64,
	key_is: 65,
	key_match: 66,
	key_mut: 67,
	key_not: 68,
	key_or: 69,
	key_package: 70,
	key_pub: 71,
	key_return: 72,
	key_static: 73,
	key_struct: 74,
	key_true: 75,
	key_type: 76,
	key_typeof: 77,
}
function bait__token__kind_from_string(name) {
	let _t41 = undefined
	if (string_eq(name, from_js_string("and"))) {
		_t41 = bait__token__Token.key_and
	} else if (string_eq(name, from_js_string("as"))) {
		_t41 = bait__token__Token.key_as
	} else if (string_eq(name, from_js_string("assert"))) {
		_t41 = bait__token__Token.key_assert
	} else if (string_eq(name, from_js_string("break"))) {
		_t41 = bait__token__Token.key_break
	} else if (string_eq(name, from_js_string("const"))) {
		_t41 = bait__token__Token.key_const
	} else if (string_eq(name, from_js_string("continue"))) {
		_t41 = bait__token__Token.key_continue
	} else if (string_eq(name, from_js_string("else"))) {
		_t41 = bait__token__Token.key_else
	} else if (string_eq(name, from_js_string("enum"))) {
		_t41 = bait__token__Token.key_enum
	} else if (string_eq(name, from_js_string("false"))) {
		_t41 = bait__token__Token.key_false
	} else if (string_eq(name, from_js_string("for"))) {
		_t41 = bait__token__Token.key_for
	} else if (string_eq(name, from_js_string("fun"))) {
		_t41 = bait__token__Token.key_fun
	} else if (string_eq(name, from_js_string("global"))) {
		_t41 = bait__token__Token.key_global
	} else if (string_eq(name, from_js_string("if"))) {
		_t41 = bait__token__Token.key_if
	} else if (string_eq(name, from_js_string("import"))) {
		_t41 = bait__token__Token.key_import
	} else if (string_eq(name, from_js_string("in"))) {
		_t41 = bait__token__Token.key_in
	} else if (string_eq(name, from_js_string("interface"))) {
		_t41 = bait__token__Token.key_interface
	} else if (string_eq(name, from_js_string("is"))) {
		_t41 = bait__token__Token.key_is
	} else if (string_eq(name, from_js_string("match"))) {
		_t41 = bait__token__Token.key_match
	} else if (string_eq(name, from_js_string("mut"))) {
		_t41 = bait__token__Token.key_mut
	} else if (string_eq(name, from_js_string("not"))) {
		_t41 = bait__token__Token.key_not
	} else if (string_eq(name, from_js_string("or"))) {
		_t41 = bait__token__Token.key_or
	} else if (string_eq(name, from_js_string("package"))) {
		_t41 = bait__token__Token.key_package
	} else if (string_eq(name, from_js_string("pub"))) {
		_t41 = bait__token__Token.key_pub
	} else if (string_eq(name, from_js_string("return"))) {
		_t41 = bait__token__Token.key_return
	} else if (string_eq(name, from_js_string("static"))) {
		_t41 = bait__token__Token.key_static
	} else if (string_eq(name, from_js_string("struct"))) {
		_t41 = bait__token__Token.key_struct
	} else if (string_eq(name, from_js_string("true"))) {
		_t41 = bait__token__Token.key_true
	} else if (string_eq(name, from_js_string("type"))) {
		_t41 = bait__token__Token.key_type
	} else if (string_eq(name, from_js_string("typeof"))) {
		_t41 = bait__token__Token.key_typeof
	} else {
		_t41 = bait__token__Token.name
	}
	return _t41
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
	let _t42 = undefined
	if (eq(tok, bait__token__Token.plus_assign)) {
		_t42 = bait__token__Token.plus
	} else if (eq(tok, bait__token__Token.minus_assign)) {
		_t42 = bait__token__Token.minus
	} else if (eq(tok, bait__token__Token.mul_assign)) {
		_t42 = bait__token__Token.mul
	} else if (eq(tok, bait__token__Token.div_assign)) {
		_t42 = bait__token__Token.div
	} else if (eq(tok, bait__token__Token.mod_assign)) {
		_t42 = bait__token__Token.mod
	} else {
		_t42 = panic(from_js_string("invalid math assign token"))
	}
	return _t42
}

function bait__token__Token_js_repr(kind) {
	let _t43 = undefined
	if (eq(kind, bait__token__Token.key_break)) {
		_t43 = from_js_string("break")
	} else if (eq(kind, bait__token__Token.key_continue)) {
		_t43 = from_js_string("continue")
	} else if (eq(kind, bait__token__Token.key_is)) {
		_t43 = from_js_string("instanceof")
	} else if (eq(kind, bait__token__Token.mul)) {
		_t43 = from_js_string("*")
	} else if (eq(kind, bait__token__Token.div)) {
		_t43 = from_js_string("/")
	} else if (eq(kind, bait__token__Token.mod)) {
		_t43 = from_js_string("%")
	} else if (eq(kind, bait__token__Token.plus)) {
		_t43 = from_js_string("+")
	} else if (eq(kind, bait__token__Token.minus)) {
		_t43 = from_js_string("-")
	} else if (eq(kind, bait__token__Token.mul_assign)) {
		_t43 = from_js_string("*=")
	} else if (eq(kind, bait__token__Token.div_assign)) {
		_t43 = from_js_string("/=")
	} else if (eq(kind, bait__token__Token.mod_assign)) {
		_t43 = from_js_string("%=")
	} else if (eq(kind, bait__token__Token.plus_assign)) {
		_t43 = from_js_string("+=")
	} else if (eq(kind, bait__token__Token.minus_assign)) {
		_t43 = from_js_string("-=")
	} else if (eq(kind, bait__token__Token.decl_assign) || eq(kind, bait__token__Token.assign)) {
		_t43 = from_js_string("=")
	} else if (eq(kind, bait__token__Token.eq)) {
		_t43 = from_js_string("==")
	} else if (eq(kind, bait__token__Token.ne)) {
		_t43 = from_js_string("!=")
	} else if (eq(kind, bait__token__Token.lt)) {
		_t43 = from_js_string("<")
	} else if (eq(kind, bait__token__Token.gt)) {
		_t43 = from_js_string(">")
	} else if (eq(kind, bait__token__Token.le)) {
		_t43 = from_js_string("<=")
	} else if (eq(kind, bait__token__Token.ge)) {
		_t43 = from_js_string(">=")
	} else if (eq(kind, bait__token__Token.tilde)) {
		_t43 = from_js_string("~")
	} else if (eq(kind, bait__token__Token.amp)) {
		_t43 = from_js_string("&")
	} else if (eq(kind, bait__token__Token.pipe)) {
		_t43 = from_js_string("|")
	} else if (eq(kind, bait__token__Token.caret)) {
		_t43 = from_js_string("^")
	} else if (eq(kind, bait__token__Token.lshift)) {
		_t43 = from_js_string("<<")
	} else if (eq(kind, bait__token__Token.rshift)) {
		_t43 = from_js_string(">>")
	} else if (eq(kind, bait__token__Token.key_and)) {
		_t43 = from_js_string("&&")
	} else if (eq(kind, bait__token__Token.key_not)) {
		_t43 = from_js_string("!")
	} else if (eq(kind, bait__token__Token.key_or)) {
		_t43 = from_js_string("||")
	} else {
		_t43 = from_js_string("")
	}
	return _t43
}

function bait__token__Token_c_repr(kind) {
	let _t44 = undefined
	if (eq(kind, bait__token__Token.amp)) {
		_t44 = from_js_string("&")
	} else {
		_t44 = bait__token__Token_js_repr(kind)
	}
	return _t44
}

function bait__token__Token_str(kind) {
	let _t45 = undefined
	if (eq(kind, bait__token__Token.error)) {
		_t45 = from_js_string("error")
	} else if (eq(kind, bait__token__Token.eof)) {
		_t45 = from_js_string("eof")
	} else if (eq(kind, bait__token__Token.attr)) {
		_t45 = from_js_string("attr")
	} else if (eq(kind, bait__token__Token.comment)) {
		_t45 = from_js_string("comment")
	} else if (eq(kind, bait__token__Token.name)) {
		_t45 = from_js_string("name")
	} else if (eq(kind, bait__token__Token.string)) {
		_t45 = from_js_string("string")
	} else if (eq(kind, bait__token__Token.char)) {
		_t45 = from_js_string("char")
	} else if (eq(kind, bait__token__Token.float)) {
		_t45 = from_js_string("float")
	} else if (eq(kind, bait__token__Token.integer)) {
		_t45 = from_js_string("integer")
	} else if (eq(kind, bait__token__Token._last_with_val)) {
		_t45 = from_js_string("_last_with_val")
	} else if (eq(kind, bait__token__Token.dot)) {
		_t45 = from_js_string("dot")
	} else if (eq(kind, bait__token__Token.dotdot)) {
		_t45 = from_js_string("dotdot")
	} else if (eq(kind, bait__token__Token.colon)) {
		_t45 = from_js_string("colon")
	} else if (eq(kind, bait__token__Token.comma)) {
		_t45 = from_js_string("comma")
	} else if (eq(kind, bait__token__Token.semicolon)) {
		_t45 = from_js_string("semicolon")
	} else if (eq(kind, bait__token__Token.plus)) {
		_t45 = from_js_string("plus")
	} else if (eq(kind, bait__token__Token.minus)) {
		_t45 = from_js_string("minus")
	} else if (eq(kind, bait__token__Token.mul)) {
		_t45 = from_js_string("mul")
	} else if (eq(kind, bait__token__Token.div)) {
		_t45 = from_js_string("div")
	} else if (eq(kind, bait__token__Token.mod)) {
		_t45 = from_js_string("mod")
	} else if (eq(kind, bait__token__Token.assign)) {
		_t45 = from_js_string("assign")
	} else if (eq(kind, bait__token__Token.decl_assign)) {
		_t45 = from_js_string("decl_assign")
	} else if (eq(kind, bait__token__Token.plus_assign)) {
		_t45 = from_js_string("plus_assign")
	} else if (eq(kind, bait__token__Token.minus_assign)) {
		_t45 = from_js_string("minus_assign")
	} else if (eq(kind, bait__token__Token.mul_assign)) {
		_t45 = from_js_string("mul_assign")
	} else if (eq(kind, bait__token__Token.div_assign)) {
		_t45 = from_js_string("div_assign")
	} else if (eq(kind, bait__token__Token.mod_assign)) {
		_t45 = from_js_string("mod_assign")
	} else if (eq(kind, bait__token__Token.eq)) {
		_t45 = from_js_string("eq")
	} else if (eq(kind, bait__token__Token.ne)) {
		_t45 = from_js_string("ne")
	} else if (eq(kind, bait__token__Token.lt)) {
		_t45 = from_js_string("lt")
	} else if (eq(kind, bait__token__Token.gt)) {
		_t45 = from_js_string("gt")
	} else if (eq(kind, bait__token__Token.le)) {
		_t45 = from_js_string("le")
	} else if (eq(kind, bait__token__Token.ge)) {
		_t45 = from_js_string("ge")
	} else if (eq(kind, bait__token__Token.lpar)) {
		_t45 = from_js_string("lpar")
	} else if (eq(kind, bait__token__Token.rpar)) {
		_t45 = from_js_string("rpar")
	} else if (eq(kind, bait__token__Token.lsqr)) {
		_t45 = from_js_string("lsqr")
	} else if (eq(kind, bait__token__Token.rsqr)) {
		_t45 = from_js_string("rsqr")
	} else if (eq(kind, bait__token__Token.lcur)) {
		_t45 = from_js_string("lcur")
	} else if (eq(kind, bait__token__Token.rcur)) {
		_t45 = from_js_string("rcur")
	} else if (eq(kind, bait__token__Token.excl)) {
		_t45 = from_js_string("excl")
	} else if (eq(kind, bait__token__Token.tilde)) {
		_t45 = from_js_string("tilde")
	} else if (eq(kind, bait__token__Token.amp)) {
		_t45 = from_js_string("amp")
	} else if (eq(kind, bait__token__Token.pipe)) {
		_t45 = from_js_string("pipe")
	} else if (eq(kind, bait__token__Token.caret)) {
		_t45 = from_js_string("caret")
	} else if (eq(kind, bait__token__Token.lshift)) {
		_t45 = from_js_string("lshift")
	} else if (eq(kind, bait__token__Token.rshift)) {
		_t45 = from_js_string("rshift")
	} else if (eq(kind, bait__token__Token.dollar)) {
		_t45 = from_js_string("dollar")
	} else if (eq(kind, bait__token__Token.str_dollar)) {
		_t45 = from_js_string("str_dollar")
	} else if (eq(kind, bait__token__Token.hash)) {
		_t45 = from_js_string("hash")
	} else if (eq(kind, bait__token__Token.key_and)) {
		_t45 = from_js_string("key_and")
	} else if (eq(kind, bait__token__Token.key_as)) {
		_t45 = from_js_string("key_as")
	} else if (eq(kind, bait__token__Token.key_assert)) {
		_t45 = from_js_string("key_assert")
	} else if (eq(kind, bait__token__Token.key_break)) {
		_t45 = from_js_string("key_break")
	} else if (eq(kind, bait__token__Token.key_const)) {
		_t45 = from_js_string("key_const")
	} else if (eq(kind, bait__token__Token.key_continue)) {
		_t45 = from_js_string("key_continue")
	} else if (eq(kind, bait__token__Token.key_else)) {
		_t45 = from_js_string("key_else")
	} else if (eq(kind, bait__token__Token.key_enum)) {
		_t45 = from_js_string("key_enum")
	} else if (eq(kind, bait__token__Token.key_false)) {
		_t45 = from_js_string("key_false")
	} else if (eq(kind, bait__token__Token.key_for)) {
		_t45 = from_js_string("key_for")
	} else if (eq(kind, bait__token__Token.key_fun)) {
		_t45 = from_js_string("key_fun")
	} else if (eq(kind, bait__token__Token.key_global)) {
		_t45 = from_js_string("key_global")
	} else if (eq(kind, bait__token__Token.key_if)) {
		_t45 = from_js_string("key_if")
	} else if (eq(kind, bait__token__Token.key_import)) {
		_t45 = from_js_string("key_import")
	} else if (eq(kind, bait__token__Token.key_in)) {
		_t45 = from_js_string("key_in")
	} else if (eq(kind, bait__token__Token.key_interface)) {
		_t45 = from_js_string("key_interface")
	} else if (eq(kind, bait__token__Token.key_is)) {
		_t45 = from_js_string("key_is")
	} else if (eq(kind, bait__token__Token.key_match)) {
		_t45 = from_js_string("key_match")
	} else if (eq(kind, bait__token__Token.key_mut)) {
		_t45 = from_js_string("key_mut")
	} else if (eq(kind, bait__token__Token.key_not)) {
		_t45 = from_js_string("key_not")
	} else if (eq(kind, bait__token__Token.key_or)) {
		_t45 = from_js_string("key_or")
	} else if (eq(kind, bait__token__Token.key_package)) {
		_t45 = from_js_string("key_package")
	} else if (eq(kind, bait__token__Token.key_pub)) {
		_t45 = from_js_string("key_pub")
	} else if (eq(kind, bait__token__Token.key_return)) {
		_t45 = from_js_string("key_return")
	} else if (eq(kind, bait__token__Token.key_static)) {
		_t45 = from_js_string("key_static")
	} else if (eq(kind, bait__token__Token.key_struct)) {
		_t45 = from_js_string("key_struct")
	} else if (eq(kind, bait__token__Token.key_true)) {
		_t45 = from_js_string("key_true")
	} else if (eq(kind, bait__token__Token.key_type)) {
		_t45 = from_js_string("key_type")
	} else if (eq(kind, bait__token__Token.key_typeof)) {
		_t45 = from_js_string("key_typeof")
	}
	return _t45
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

function Array_bait__errors__Message_print(msgs) {
	for (let _t46 = 0; _t46 < msgs.length; _t46++) {
		const msg = Array_get(msgs, _t46)
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

function bait__errors__err(path, pos, msg) {
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
	let _t50 = undefined
	if (eq(k, bait__errors__Kind.info)) {
		_t50 = term__color__magenta(title)
	} else if (eq(k, bait__errors__Kind.warning)) {
		_t50 = term__color__yellow(title)
	} else if (eq(k, bait__errors__Kind.error)) {
		_t50 = term__color__red(title)
	}
	return _t50
}


const bait__preference__Backend = {
	js: 0,
	c: 1,
}
const bait__preference__OperatingSystem = {
	linux: 0,
	windows: 1,
}
function bait__preference__Prefs({ command = from_js_string(""), out_name = from_js_string(""), args = new bait_Array({ data: [], length: 0 }), user_args = new bait_Array({ data: [], length: 0 }), build_options = new bait_Array({ data: [], length: 0 }), should_run = false, is_verbose = false, show_timings = false, backend = 0, os = 0, is_test = false, is_script = false, is_library = false, keep_exe = false, cc = from_js_string("cc"), hide_warnings = false, warn_is_error = false }) {
	this.command = command
	this.out_name = out_name
	this.args = args
	this.user_args = user_args
	this.build_options = build_options
	this.should_run = should_run
	this.is_verbose = is_verbose
	this.show_timings = show_timings
	this.backend = backend
	this.os = os
	this.is_test = is_test
	this.is_script = is_script
	this.is_library = is_library
	this.keep_exe = keep_exe
	this.cc = cc
	this.hide_warnings = hide_warnings
	this.warn_is_error = warn_is_error
}
function bait__preference__parse_args(args) {
	let p = new bait__preference__Prefs({ backend: bait__preference__Backend.js, os: bait__preference__os_from_string(os__platform()) })
	if (eq(args.length, 0)) {
		p.command = from_js_string("help")
		return p
	}
	let after_double_dash = false
	for (let i = 0; i32(i < args.length); i += 1) {
		const arg = Array_get(args, i)
		if (string_eq(arg, from_js_string("-b")) || string_eq(arg, from_js_string("--backend"))) {
			i += 1
			p.backend = bait__preference__backend_from_string(Array_get(args, i))
			Array_push(p.build_options, arg)
			Array_push(p.build_options, Array_get(args, i))
		} else if (string_eq(arg, from_js_string("-os")) || string_eq(arg, from_js_string("--os"))) {
			i += 1
			p.os = bait__preference__os_from_string(Array_get(args, i))
			Array_push(p.build_options, arg)
			Array_push(p.build_options, Array_get(args, i))
		} else if (string_eq(arg, from_js_string("-o")) || string_eq(arg, from_js_string("--out"))) {
			i += 1
			p.out_name = Array_get(args, i)
			Array_push(p.build_options, arg)
			Array_push(p.build_options, p.out_name)
		} else if (string_eq(arg, from_js_string("-cc")) || string_eq(arg, from_js_string("--cc"))) {
			i += 1
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
	let _t61 = undefined
	if (string_eq(s, from_js_string("js"))) {
		_t61 = bait__preference__Backend.js
	} else if (string_eq(s, from_js_string("c"))) {
		_t61 = bait__preference__Backend.c
	} else {
		_t61 = panic(from_js_string(`Invalid backend: ${s.str}`))
	}
	return _t61
}

function bait__preference__os_from_string(s) {
	let _t62 = undefined
	if (string_eq(s, from_js_string("linux"))) {
		_t62 = bait__preference__OperatingSystem.linux
	} else if (string_eq(s, from_js_string("win")) || string_eq(s, from_js_string("windows"))) {
		_t62 = bait__preference__OperatingSystem.windows
	} else {
		_t62 = panic(from_js_string(`Invalid OS: ${s.str}`))
	}
	return _t62
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
function bait__ast__Block({ stmts = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.stmts = stmts
	this.pos = pos
}
function bait__ast__ConstDecl({ name = from_js_string(""), expr = new bait__ast__InvalidExpr({}), pos = new bait__token__Pos({}), lang = 0, typ = 0 }) {
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
function bait__ast__ForInLoop({ expr_type = 0, val_type = 0, label = from_js_string(""), idxvar = undefined, valvar = new bait__ast__Ident({}), expr = undefined, stmts = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}) }) {
	this.expr_type = expr_type
	this.val_type = val_type
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
function bait__ast__FunDecl({ is_pub = false, lang = 0, name = from_js_string(""), key = from_js_string(""), params = new bait_Array({ data: [], length: 0 }), return_type = 0, is_test = false, attrs = new bait_Array({ data: [], length: 0 }), pos = new bait__token__Pos({}), typ = 0, is_method = false, noreturn = false, stmts = new bait_Array({ data: [], length: 0 }), generic_names = new bait_Array({ data: [], length: 0 }) }) {
	this.is_pub = is_pub
	this.lang = lang
	this.name = name
	this.key = key
	this.params = params
	this.return_type = return_type
	this.is_test = is_test
	this.attrs = attrs
	this.pos = pos
	this.typ = typ
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
function bait__ast__FunDecl_is_main(fn) {
	return !fn.is_method && string_eq(fn.name, from_js_string("main"))
}

function bait__ast__LoopControlStmt({ kind = 0, label = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.kind = kind
	this.label = label
	this.pos = pos
}
function bait__ast__StaticDecl({ typ = 0, name = from_js_string(""), expr = undefined, pos = new bait__token__Pos({}) }) {
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
function bait__ast__StructField({ name = from_js_string(""), typ = 0, expr = new bait__ast__InvalidExpr({}), pos = new bait__token__Pos({}), is_mut = false, is_pub = false, is_global = false, attrs = new bait_Array({ data: [], length: 0 }) }) {
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
function bait__ast__ArrayInit({ typ = 0, elem_type = 0, exprs = new bait_Array({ data: [], length: 0 }), length_expr = new bait__ast__InvalidExpr({}), cap_expr = new bait__ast__InvalidExpr({}), pos = new bait__token__Pos({}) }) {
	this.typ = typ
	this.elem_type = elem_type
	this.exprs = exprs
	this.length_expr = length_expr
	this.cap_expr = cap_expr
	this.pos = pos
}
function bait__ast__AsCast({ expr_type = 0, expr = undefined, bait_target = 0, pos = new bait__token__Pos({}) }) {
	this.expr_type = expr_type
	this.expr = expr
	this.target = bait_target
	this.pos = pos
}
function bait__ast__BlankIdent({ pos = new bait__token__Pos({}) }) {
	this.pos = pos
}
function bait__ast__BoolLiteral({ val = false, pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
function bait__ast__CallExpr({ lang = 0, pkg = from_js_string(""), name = from_js_string(""), return_type = 0, left_type = 0, left = new bait__ast__InvalidExpr({}), concrete_types = new bait_Array({ data: [], length: 0 }), is_field = false, noreturn = false, args = new bait_Array({ data: [], length: 0 }), or_block = new bait__ast__OrBlock({}), is_method = false, pos = new bait__token__Pos({}) }) {
	this.lang = lang
	this.pkg = pkg
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
	this.pos = pos
}
function bait__ast__CallExpr_full_name(node) {
	if (eq(node.pkg.length, 0)) {
		return node.name
	}
	return string_add(string_add(node.pkg, from_js_string(".")), node.name)
}

function bait__ast__CallArg({ typ = 0, expr = undefined, is_mut = false }) {
	this.typ = typ
	this.expr = expr
	this.is_mut = is_mut
}
const bait__ast__OrKind = {
	none: 0,
	block: 1,
	prop: 2,
}
function bait__ast__OrBlock({ kind = 0, stmts = new bait_Array({ data: [], length: 0 }), uid = from_js_string("") }) {
	this.kind = kind
	this.stmts = stmts
	this.uid = uid
}
function bait__ast__CharLiteral({ val = from_js_string(""), pos = new bait__token__Pos({}) }) {
	this.val = val
	this.pos = pos
}
function bait__ast__ComptimeVar({ kind = 0, pos = new bait__token__Pos({}) }) {
	this.kind = kind
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
function bait__ast__Ident({ name = from_js_string(""), pkg = from_js_string(""), is_mut = false, pos = new bait__token__Pos({}), lang = 0 }) {
	this.name = name
	this.pkg = pkg
	this.is_mut = is_mut
	this.pos = pos
	this.lang = lang
}
function bait__ast__Ident_full_name(node) {
	if (eq(node.pkg.length, 0)) {
		return node.name
	}
	return string_add(string_add(node.pkg, from_js_string(".")), node.name)
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
function bait__ast__InfixExpr({ left_type = 0, right_type = 0, op = 0, right = undefined, left = undefined, is_match = false, pos = new bait__token__Pos({}) }) {
	this.left_type = left_type
	this.right_type = right_type
	this.op = op
	this.right = right
	this.left = left
	this.is_match = is_match
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
function bait__ast__RangeExpr({ low = undefined, high = undefined, pos = new bait__token__Pos({}) }) {
	this.low = low
	this.high = high
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
function bait__ast__TmpVar({ }) {
}
function bait__ast__TypeOf({ typ = 0, expr = undefined, pos = new bait__token__Pos({}) }) {
	this.typ = typ
	this.expr = expr
	this.pos = pos
}
function bait__ast__Void({ }) {
}
function bait__ast__InvalidExpr({ pos = new bait__token__Pos({}) }) {
	this.pos = pos
}
function bait__ast__InvalidStmt({ pos = new bait__token__Pos({}) }) {
	this.pos = pos
}
function bait__ast__Import({ name = from_js_string(""), alias = from_js_string(""), lang = 0, pos = new bait__token__Pos({}) }) {
	this.name = name
	this.alias = alias
	this.lang = lang
	this.pos = pos
}
function bait__ast__File({ infos = new bait_Array({ data: [], length: 0 }), warnings = new bait_Array({ data: [], length: 0 }), errors = new bait_Array({ data: [], length: 0 }), generic_funs = new bait_Array({ data: [], length: 0 }), path = from_js_string(""), lang = 0, pkg_name = from_js_string(""), imports = new bait_Array({ data: [], length: 0 }), stmts = new bait_Array({ data: [], length: 0 }) }) {
	this.infos = infos
	this.warnings = warnings
	this.errors = errors
	this.generic_funs = generic_funs
	this.path = path
	this.lang = lang
	this.pkg_name = pkg_name
	this.imports = imports
	this.stmts = stmts
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

function bait__ast__path_to_lang(p) {
	if (string_ends_with(p, from_js_string(".js.bt"))) {
		return bait__ast__Language.js
	}
	if (string_ends_with(p, from_js_string(".c.bt"))) {
		return bait__ast__Language.c
	}
	return bait__ast__Language.bait
}

function bait__ast__Language_str(l) {
	let _t74 = undefined
	if (eq(l, bait__ast__Language.bait)) {
		_t74 = from_js_string("bait")
	} else if (eq(l, bait__ast__Language.c)) {
		_t74 = from_js_string("C")
	} else if (eq(l, bait__ast__Language.js)) {
		_t74 = from_js_string("JS")
	}
	return _t74
}

function bait__ast__Language_ext(l) {
	let _t75 = undefined
	if (eq(l, bait__ast__Language.bait)) {
		_t75 = from_js_string("bt")
	} else if (eq(l, bait__ast__Language.c)) {
		_t75 = from_js_string("c")
	} else if (eq(l, bait__ast__Language.js)) {
		_t75 = from_js_string("js")
	}
	return _t75
}


function bait__ast__Expr_repr(e) {
	let _t76 = undefined
	if (e instanceof bait__ast__AnonFun) {
		_t76 = from_js_string("anon_fun")
	} else if (e instanceof bait__ast__ArrayInit) {
		_t76 = from_js_string("[]XX")
	} else if (e instanceof bait__ast__AsCast) {
		_t76 = string_add(bait__ast__Expr_repr(e.expr), from_js_string(" as XX"))
	} else if (e instanceof bait__ast__BlankIdent) {
		_t76 = from_js_string("_")
	} else if (e instanceof bait__ast__BoolLiteral) {
		_t76 = bait__ast__BoolLiteral_str(e, 0)
	} else if (e instanceof bait__ast__CallExpr) {
		_t76 = string_add(bait__ast__CallExpr_full_name(e), from_js_string("()"))
	} else if (e instanceof bait__ast__CharLiteral) {
		_t76 = e.val
	} else if (e instanceof bait__ast__ComptimeVar) {
		_t76 = bait__token__ComptimeVar_str(e.kind, 0)
	} else if (e instanceof bait__ast__EnumVal) {
		_t76 = e.val
	} else if (e instanceof bait__ast__FloatLiteral) {
		_t76 = e.val
	} else if (e instanceof bait__ast__HashExpr) {
		_t76 = from_js_string("#XX")
	} else if (e instanceof bait__ast__Ident) {
		_t76 = bait__ast__Ident_full_name(e)
	} else if (e instanceof bait__ast__IfMatch) {
		_t76 = from_js_string("if/match")
	} else if (e instanceof bait__ast__IndexExpr) {
		_t76 = string_add(string_add(string_add(bait__ast__Expr_repr(e.left), from_js_string("[")), bait__ast__Expr_repr(e.index)), from_js_string("]"))
	} else if (e instanceof bait__ast__InfixExpr) {
		_t76 = string_add(string_add(string_add(string_add(bait__ast__Expr_repr(e.left), from_js_string(" ")), bait__token__Token_js_repr(e.op)), from_js_string(" ")), bait__ast__Expr_repr(e.right))
	} else if (e instanceof bait__ast__IntegerLiteral) {
		_t76 = e.val
	} else if (e instanceof bait__ast__MapInit) {
		_t76 = from_js_string("map[xx]yy")
	} else if (e instanceof bait__ast__ParExpr) {
		_t76 = string_add(string_add(from_js_string("("), bait__ast__Expr_repr(e.expr)), from_js_string(")"))
	} else if (e instanceof bait__ast__PrefixExpr) {
		_t76 = string_add(bait__token__Token_js_repr(e.op), bait__ast__Expr_repr(e.right))
	} else if (e instanceof bait__ast__RangeExpr) {
		_t76 = from_js_string("range")
	} else if (e instanceof bait__ast__SelectorExpr) {
		_t76 = string_add(string_add(bait__ast__Expr_repr(e.expr), from_js_string(".")), e.field_name)
	} else if (e instanceof bait__ast__StringLiteral) {
		_t76 = e.val
	} else if (e instanceof bait__ast__StringInterLiteral) {
		_t76 = from_js_string("string interpolation")
	} else if (e instanceof bait__ast__StructInit) {
		_t76 = string_add(e.name, from_js_string("{..}"))
	} else if (e instanceof bait__ast__TmpVar) {
		_t76 = from_js_string("TmpVar")
	} else if (e instanceof bait__ast__TypeOf) {
		_t76 = string_add(from_js_string("typeof "), bait__ast__Expr_repr(e.expr))
	} else if (e instanceof bait__ast__Void) {
		_t76 = from_js_string("void")
	} else if (e instanceof bait__ast__InvalidExpr) {
		_t76 = from_js_string("InvalidExpr")
	}
	return _t76
}


function bait__ast__Table_fun_decl_signature(t, node) {
	const sym = bait__ast__Table_get_sym(t, node.typ)
	const info = sym.info
	return bait__ast__Table_fun_signature(t, info.param_types, info.return_type)
}

function bait__ast__Table_fun_signature(t, params, return_type) {
	let param_strs = new bait_Array({ data: Array.from({ length: params.length }, (v, i) => from_js_string("")), length: params.length })
	for (let i = 0; i < params.length; i++) {
		const p = Array_get(params, i)
		Array_set(param_strs, i, bait__ast__Table_type_name(t, p))
	}
	const ret = bait__ast__Table_type_name(t, return_type)
	return string_add(string_add(string_add(from_js_string("fun ("), Array_string_join(param_strs, from_js_string(", "))), from_js_string(") ")), ret)
}

function bait__ast__Table_type_decl_signature(t, node) {
	const sym = bait__ast__Table_get_sym(t, node.typ)
	if (eq(sym.kind, bait__ast__TypeKind.alias_type)) {
		return from_js_string(`type ${bait__ast__Table_type_name(t, sym.parent).str}`)
	}
	if (eq(sym.kind, bait__ast__TypeKind.sum_type)) {
		const info = sym.info
		let var_strs = new bait_Array({ data: Array.from({ length: info.variants.length }, (v, i) => from_js_string("")), length: info.variants.length })
		for (let i = 0; i < info.variants.length; i++) {
			const bait_var = Array_get(info.variants, i)
			Array_set(var_strs, i, bait__ast__Table_type_name(t, bait_var))
		}
		return string_add(from_js_string("type "), Array_string_join(var_strs, from_js_string(" | ")))
	}
	if (eq(sym.kind, bait__ast__TypeKind.fun_)) {
		const info = sym.info
		return string_add(from_js_string("type "), bait__ast__Table_fun_signature(t, info.param_types, info.return_type))
	}
	return from_js_string("type")
}


function bait__ast__Table({ type_idxs = new bait_Map({ data: new Map([]), length: 0 }), type_symbols = new bait_Array({ data: [], length: 0 }), needed_equality_funs = new bait_Array({ data: [], length: 0 }), needed_str_funs = new bait_Array({ data: [], length: 0 }), generic_fun_types = new bait_Map({ data: new Map([]), length: 0 }) }) {
	this.type_idxs = type_idxs
	this.type_symbols = type_symbols
	this.needed_equality_funs = needed_equality_funs
	this.needed_str_funs = needed_str_funs
	this.generic_fun_types = generic_fun_types
}
function bait__ast__new_table() {
	let t = new bait__ast__Table({})
	bait__ast__Table_register_builtins(t)
	return t
}

function bait__ast__Table_get_idx(t, name) {
	return Map_get_set(t.type_idxs, name, 0)
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
	let _t81 = undefined
	if (eq(sym.kind, bait__ast__TypeKind.result)) {
		_t81 = sym.parent
	} else {
		_t81 = typ
	}
	return _t81
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
	if (Array_contains_Array_bait__ast__Type(Map_get_set(t.generic_fun_types, key, new bait_Array({ data: [], length: 0 })), concrete)) {
		return false
	}
	Array_push(Map_get_set(t.generic_fun_types, key, new bait_Array({ data: [], length: 0 })), concrete)
	return true
}

function bait__ast__Table_type_name(t, typ) {
	const amps = string_repeat(from_js_string("&"), bait__ast__Type_get_nr_amp(typ))
	return string_add(amps, bait__ast__Table_get_sym(t, typ).mix_name)
}

function bait__ast__Table_register_sym(t, sym) {
	const idx = bait__ast__Table_get_idx(t, sym.mix_name)
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
	Map_set(t.type_idxs, sym.mix_name, new_idx)
	return new_idx
}

function bait__ast__Table_find_or_register_array(t, elem_type) {
	const elem_sym = bait__ast__Table_get_sym(t, elem_type)
	const name = string_add(from_js_string("[]"), elem_sym.mix_name)
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.array, mix_name: name, pkg: elem_sym.pkg, parent: bait__ast__ARRAY_TYPE, info: new bait__ast__ArrayInfo({ elem_type: elem_type }) }))
}

function bait__ast__Table_find_or_register_map(t, key_type, val_type) {
	const key_sym = bait__ast__Table_get_sym(t, key_type)
	const val_sym = bait__ast__Table_get_sym(t, val_type)
	const name = from_js_string(`map[${key_sym.mix_name.str}]${val_sym.mix_name.str}`)
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.map, mix_name: name, parent: bait__ast__MAP_TYPE, info: new bait__ast__MapInfo({ key_type: key_type, val_type: val_type }) }))
}

function bait__ast__Table_find_or_register_fun(t, param_types, return_type, alias) {
	const name = bait__ast__Table_fun_signature(t, param_types, return_type)
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.fun_, mix_name: name, info: new bait__ast__FunInfo({ is_alias: alias, param_types: param_types, return_type: return_type }) }))
}

function bait__ast__Table_find_type_or_add_placeholder(t, name, pkg) {
	const idx = bait__ast__Table_get_idx(t, name)
	if (idx > 0) {
		return idx
	}
	return bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.placeholder, mix_name: name, pkg: pkg }))
}

function bait__ast__Table_get_method(t, sym, name) {
	let s = sym
	while (true) {
		for (let _t91 = 0; _t91 < s.methods.length; _t91++) {
			const m = Array_get(s.methods, _t91)
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

function bait__ast__Table_get_overload(t, sym, op) {
	let s = sym
	while (true) {
		if (Map_contains(s.overloads, op)) {
			return Map_get_set(s.overloads, op, new bait__ast__FunDecl({}))
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
	for (let _t95 = 0; _t95 < info.param_types.length; _t95++) {
		const typ = Array_get(info.param_types, _t95)
		Array_push(p, new bait__ast__Param({ typ: typ }))
	}
	return p
}


function bait__ast__Type(val) { return val }
const bait__ast__PLACEHOLDER_TYPE = bait__ast__new_type(0)
const bait__ast__ERROR_TYPE = bait__ast__new_type(1)
const bait__ast__VOID_TYPE = bait__ast__new_type(2)
const bait__ast__I8_TYPE = bait__ast__new_type(3)
const bait__ast__I16_TYPE = bait__ast__new_type(4)
const bait__ast__I32_TYPE = bait__ast__new_type(5)
const bait__ast__I64_TYPE = bait__ast__new_type(6)
const bait__ast__U8_TYPE = bait__ast__new_type(7)
const bait__ast__U16_TYPE = bait__ast__new_type(8)
const bait__ast__U32_TYPE = bait__ast__new_type(9)
const bait__ast__U64_TYPE = bait__ast__new_type(10)
const bait__ast__F32_TYPE = bait__ast__new_type(11)
const bait__ast__F64_TYPE = bait__ast__new_type(12)
const bait__ast__BOOL_TYPE = bait__ast__new_type(13)
const bait__ast__STRING_TYPE = bait__ast__new_type(14)
const bait__ast__ARRAY_TYPE = bait__ast__new_type(15)
const bait__ast__MAP_TYPE = bait__ast__new_type(16)
const bait__ast__ANY_TYPE = bait__ast__new_type(17)
const bait__ast__USER_TYPES_SPACE = 18
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
function bait__ast__TypeSymbol({ pkg = from_js_string(""), mix_name = from_js_string(""), kind = 0, methods = new bait_Array({ data: [], length: 0 }), parent = 0, overloads = new bait_Map({ data: new Map([]), length: 0 }), is_pub = false, info = new bait__ast__EmptyInfo({}) }) {
	this.pkg = pkg
	this.mix_name = mix_name
	this.kind = kind
	this.methods = methods
	this.parent = parent
	this.overloads = overloads
	this.is_pub = is_pub
	this.info = info
}
function bait__ast__TypeSymbol_full_name(sym) {
	return sym.mix_name
}

function bait__ast__TypeSymbol_find_field(sym, name, t) {
	if (eq(sym.kind, bait__ast__TypeKind.generic_inst)) {
		return bait__ast__TypeSymbol_find_field(bait__ast__Table_unwrap_generic(t, sym), name, t)
	}
	if (sym.info instanceof bait__ast__StructInfo) {
		const info = sym.info
		for (let _t97 = 0; _t97 < info.fields.length; _t97++) {
			const f = Array_get(info.fields, _t97)
			if (string_eq(f.name, name)) {
				return f
			}
		}
	}
	if (Array_contains_bait__ast__Type(bait__ast__BUILTIN_STRUCT_TYPES, sym.parent)) {
		const parent_sym = bait__ast__Table_get_sym(t, sym.parent)
		return bait__ast__TypeSymbol_find_field(parent_sym, name, t)
	}
	return new bait__ast__StructField({ typ: bait__ast__ERROR_TYPE })
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
	_t101 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("_") }))
	_t102 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("_err") }))
	_t103 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("void") }))
	_t104 = bait__ast__Table_register_num(t, from_js_string("i8"))
	_t105 = bait__ast__Table_register_num(t, from_js_string("i16"))
	_t106 = bait__ast__Table_register_num(t, from_js_string("i32"))
	_t107 = bait__ast__Table_register_num(t, from_js_string("i64"))
	_t108 = bait__ast__Table_register_num(t, from_js_string("u8"))
	_t109 = bait__ast__Table_register_num(t, from_js_string("u16"))
	_t110 = bait__ast__Table_register_num(t, from_js_string("u32"))
	_t111 = bait__ast__Table_register_num(t, from_js_string("u64"))
	_t112 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("f32") }))
	_t113 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("f64") }))
	_t114 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("bool") }))
	_t115 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("string"), kind: bait__ast__TypeKind.string }))
	_t116 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("Array"), kind: bait__ast__TypeKind.array }))
	_t117 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("Map"), kind: bait__ast__TypeKind.map }))
	_t118 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: from_js_string("any") }))
}

function bait__ast__Table_register_num(t, name) {
	_t119 = bait__ast__Table_register_sym(t, new bait__ast__TypeSymbol({ mix_name: name, kind: bait__ast__TypeKind.number, is_pub: true }))
}


function bait__context__GenContext({ has_test_begin = false, has_test_end = false, test_fun_names = new bait_Array({ data: [], length: 0 }) }) {
	this.has_test_begin = has_test_begin
	this.has_test_end = has_test_end
	this.test_fun_names = test_fun_names
}

function bait__context__Scope({ parent = null, objects = new bait_Map({ data: new Map([]), length: 0 }), redefined_syms = new bait_Array({ data: [], length: 0 }) }) {
	this.parent = parent
	this.objects = objects
	this.redefined_syms = redefined_syms
}
function bait__context__ScopeObject({ kind = 0, typ = 0, is_pub = false, is_mut = false, pkg = from_js_string(""), expr = new bait__ast__Void({}), noreturn = false, return_type = 0, params = new bait_Array({ data: [], length: 0 }), attrs = new bait_Array({ data: [], length: 0 }), generic_names = new bait_Array({ data: [], length: 0 }), key = from_js_string("") }) {
	this.kind = kind
	this.typ = typ
	this.is_pub = is_pub
	this.is_mut = is_mut
	this.pkg = pkg
	this.expr = expr
	this.noreturn = noreturn
	this.return_type = return_type
	this.params = params
	this.attrs = attrs
	this.generic_names = generic_names
	this.key = key
}
const bait__context__ObjectKind = {
	unknown: 0,
	variable: 1,
	constant: 2,
	function: 3,
	package_: 4,
	label: 5,
	static_: 6,
	type_: 7,
}
function bait__context__Scope_register(s, name, obj) {
	Map_set(s.objects, name, obj)
}

function bait__context__Scope_register_unique(s, name, obj) {
	if (bait__context__Scope_is_known(s, name)) {
		Array_push(s.redefined_syms, name)
		return 
	}
	Map_set(s.objects, name, obj)
}

function bait__context__Scope_get(s, name) {
	if (Map_contains(s.objects, name)) {
		return Map_get_set(s.objects, name, new bait__context__ScopeObject({}))
	}
	return new bait__context__ScopeObject({ kind: bait__context__ObjectKind.unknown })
}

function bait__context__Scope_get_parent(s, name) {
	if (Map_contains(s.objects, name)) {
		return Map_get_set(s.objects, name, new bait__context__ScopeObject({}))
	}
	if (!eq(s.parent, 0)) {
		return bait__context__Scope_get_parent(s.parent, name)
	}
	return new bait__context__ScopeObject({ kind: bait__context__ObjectKind.unknown })
}

function bait__context__Scope_update_type(s, name, typ) {
	const obj = bait__context__Scope_get_parent(s, name)
	Map_set(s.objects, name, new bait__context__ScopeObject({ typ: typ, kind: obj.kind, is_pub: obj.is_pub, is_mut: obj.is_mut, pkg: obj.pkg }))
}

function bait__context__Scope_is_known(s, name) {
	const obj = bait__context__Scope_get_parent(s, name)
	return !eq(obj.kind, bait__context__ObjectKind.unknown)
}

function bait__context__Scope_expect_unknown(s, name) {
	const obj = bait__context__Scope_get_parent(s, name)
	if (eq(obj.kind, bait__context__ObjectKind.unknown)) {
		return new Result({})
	}
	if (eq(obj.kind, bait__context__ObjectKind.package_)) {
		return error(from_js_string(`cannot shadow import \`${name.str}\``))
	}
	return error(from_js_string(`redefinition of \`${name.str}\``))
}

function bait__context__Scope_get_unique_redefinitions(s) {
	let unique_redefs = new bait_Array({ data: [], length: 0 })
	for (let _t125 = 0; _t125 < s.redefined_syms.length; _t125++) {
		const name = Array_get(s.redefined_syms, _t125)
		if (!Array_contains_string(unique_redefs, name)) {
			Array_push(unique_redefs, name)
		}
	}
	return unique_redefs
}


function bait__context__SemanticContext({ scopes = new bait_Map({ data: new Map([]), length: 0 }) }) {
	this.scopes = scopes
}
function bait__context__SemanticContext_obtain_root_scope(ctx, pkg) {
	return bait__context__SemanticContext_obtain_scope(ctx, pkg, 0)
}

function bait__context__SemanticContext_obtain_pkg_scope(ctx, pkg_name) {
	const builtin_scope = bait__context__SemanticContext_obtain_root_scope(ctx, from_js_string("builtin"))
	const pkg_scope = bait__context__SemanticContext_obtain_scope(ctx, pkg_name, builtin_scope)
	return pkg_scope
}

function bait__context__SemanticContext_obtain_scope(ctx, pkg, parent) {
	if (Map_contains(ctx.scopes, pkg)) {
		return Map_get_set(ctx.scopes, pkg, null)
	}
	const s = new bait__context__Scope({ parent: parent })
	Map_set(ctx.scopes, pkg, s)
	return s
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
		l.pos += 1
	}
	l.pos += 1
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
	l.pos += 1
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
		l.pos += 1
		bait__lexer__Lexer_name_val(l)
		return bait__token__Token.hash
	}
	if (eq(c, u8("@"))) {
		l.pos += 1
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
		if (eq(string_get(l.text, l.pos), u8("."))) {
			l.pos += 1
			return bait__token__Token.dotdot
		}
		return bait__token__Token.dot
	} else if (eq(c, u8(","))) {
		return bait__token__Token.comma
	} else if (eq(c, u8("+"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.plus_assign
		}
		return bait__token__Token.plus
	} else if (eq(c, u8("-"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.minus_assign
		}
		return bait__token__Token.minus
	} else if (eq(c, u8("*"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.mul_assign
		}
		return bait__token__Token.mul
	} else if (eq(c, u8("/"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.div_assign
		}
		return bait__token__Token.div
	} else if (eq(c, u8("%"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.mod_assign
		}
		return bait__token__Token.mod
	} else if (eq(c, u8("="))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.eq
		}
		return bait__token__Token.assign
	} else if (eq(c, u8(":"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.decl_assign
		}
		return bait__token__Token.colon
	} else if (eq(c, u8("!"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.ne
		}
		return bait__token__Token.excl
	} else if (eq(c, u8("<"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.le
		}
		if (eq(string_get(l.text, l.pos), u8("<"))) {
			l.pos += 1
			return bait__token__Token.lshift
		}
		return bait__token__Token.lt
	} else if (eq(c, u8(">"))) {
		if (eq(string_get(l.text, l.pos), u8("="))) {
			l.pos += 1
			return bait__token__Token.ge
		}
		if (eq(string_get(l.text, l.pos), u8(">"))) {
			l.pos += 1
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
		l.pos += 1
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
		l.pos += 1
		if (eq(c, quote)) {
			l.val = string_substr(l.text, l.start, i32(l.pos - 1))
			return bait__token__Token.string
		}
		if (eq(c, u8("\n"))) {
			bait__lexer__Lexer_save_line(l)
		} else if (eq(c, u8("\\"))) {
			l.pos += 1
		} else if (!is_foreign && eq(c, u8("$")) && eq(string_get(l.text, l.pos), u8("{"))) {
			l.is_str_interpol = true
			l.is_str_dollar = true
			l.str_quote = quote
			l.pos -= 1
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
			l.pos += 1
			bait__lexer__Lexer_inc_line(l)
		} else if (eq(c, u8(" ")) || eq(c, u8("\t")) || eq(c, u8("\r"))) {
			l.pos += 1
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
		if (eq(string_get(l.text, i32(l.pos + 1)), u8("."))) {
			l.val = string_substr(l.text, l.start, l.pos)
			return bait__token__Token.integer
		}
		if (!is_dec) {
			l.val = from_js_string("floats must be decimal numbers (base 10) [L0022]")
			return bait__token__Token.error
		}
		l.pos += 1
		bait__lexer__Lexer_advance_dec_number(l)
		l.val = string_substr(l.text, l.start, l.pos)
		if (string_ends_with(l.val, from_js_string("."))) {
			l.val = from_js_string(`float should have a digit after decimal point, e.g. ${l.val.str}0 [L0024]`)
			return bait__token__Token.error
		}
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
		l.pos += 1
	}
}

function bait__lexer__Lexer_advance_bin_number(l) {
	l.pos += 1
	while (i32(l.pos < l.text.length) && u8_is_bin_digit(string_get(l.text, l.pos))) {
		l.pos += 1
	}
}

function bait__lexer__Lexer_advance_oct_number(l) {
	l.pos += 1
	while (i32(l.pos < l.text.length) && u8_is_oct_digit(string_get(l.text, l.pos))) {
		l.pos += 1
	}
}

function bait__lexer__Lexer_advance_hex_number(l) {
	l.pos += 1
	while (i32(l.pos < l.text.length) && u8_is_hex_digit(string_get(l.text, l.pos))) {
		l.pos += 1
	}
}


function bait__parser__Parser_expr(p, precedence) {
	let _r37_249 = bait__parser__Parser_single_expr(p)
	if (_r37_249.is_error) {
		return _r37_249
	}
	let node = _r37_249.data
	while (precedence < bait__token__Token_precedence(p.tok)) {
		if (eq(p.tok, bait__token__Token.dot)) {
			let _r37_336 = bait__parser__Parser_dot_expr(p, node)
			if (_r37_336.is_error) {
				return _r37_336
			}
			node = _r37_336.data
		} else if (eq(p.tok, bait__token__Token.dotdot)) {
			let _r37_397 = bait__parser__Parser_range_expr(p, node)
			if (_r37_397.is_error) {
				return _r37_397
			}
			node = _r37_397.data
		} else if (eq(p.tok, bait__token__Token.lsqr) && eq(p.pos.line, p.prev_pos.line)) {
			let _r37_546 = bait__parser__Parser_index_expr(p, node)
			if (_r37_546.is_error) {
				return _r37_546
			}
			node = _r37_546.data
		} else if (eq(p.tok, bait__token__Token.key_as)) {
			let _r37_604 = bait__parser__Parser_as_cast(p, node)
			if (_r37_604.is_error) {
				return _r37_604
			}
			node = _r37_604.data
		} else if (bait__token__Token_is_infix(p.tok)) {
			let _r37_665 = bait__parser__Parser_infix_expr(p, node)
			if (_r37_665.is_error) {
				return _r37_665
			}
			node = _r37_665.data
		} else {
			return new Result({ data: node })
		}
	}
	return new Result({ data: node })
}

function bait__parser__Parser_single_expr(p) {
	if (eq(p.tok, bait__token__Token.hash)) {
		let _r37_809 = bait__parser__Parser_hash_expr(p)
		if (_r37_809.is_error) {
			return _r37_809
		}
		return new Result({ data: _r37_809.data })
	} else if (eq(p.tok, bait__token__Token.char)) {
		return new Result({ data: bait__parser__Parser_char_literal(p) })
	} else if (eq(p.tok, bait__token__Token.dollar)) {
		let _r37_895 = bait__parser__Parser_comptime_expr(p)
		if (_r37_895.is_error) {
			return _r37_895
		}
		return new Result({ data: _r37_895.data })
	} else if (eq(p.tok, bait__token__Token.dot)) {
		let _r37_937 = bait__parser__Parser_enum_val(p, false)
		if (_r37_937.is_error) {
			return _r37_937
		}
		return new Result({ data: _r37_937.data })
	} else if (eq(p.tok, bait__token__Token.dotdot)) {
		let _r37_1001 = bait__parser__Parser_range_expr(p, new bait__ast__Void({}))
		if (_r37_1001.is_error) {
			return _r37_1001
		}
		return new Result({ data: _r37_1001.data })
	} else if (eq(p.tok, bait__token__Token.float)) {
		return new Result({ data: bait__parser__Parser_float_literal(p) })
	} else if (eq(p.tok, bait__token__Token.integer)) {
		return new Result({ data: bait__parser__Parser_integer_literal(p) })
	} else if (eq(p.tok, bait__token__Token.lsqr)) {
		let _r37_1131 = bait__parser__Parser_array_init(p)
		if (_r37_1131.is_error) {
			return _r37_1131
		}
		return new Result({ data: _r37_1131.data })
	} else if (eq(p.tok, bait__token__Token.lpar)) {
		let _r37_1169 = bait__parser__Parser_par_expr(p)
		if (_r37_1169.is_error) {
			return _r37_1169
		}
		return new Result({ data: _r37_1169.data })
	} else if (eq(p.tok, bait__token__Token.name)) {
		let _r37_1213 = bait__parser__Parser_name_expr(p, bait__ast__Language.bait)
		if (_r37_1213.is_error) {
			return _r37_1213
		}
		return new Result({ data: _r37_1213.data })
	} else if (eq(p.tok, bait__token__Token.string)) {
		let _r37_1264 = bait__parser__Parser_string_literal(p, bait__ast__Language.bait)
		if (_r37_1264.is_error) {
			return _r37_1264
		}
		return new Result({ data: _r37_1264.data })
	} else if (eq(p.tok, bait__token__Token.key_fun)) {
		let _r37_1305 = bait__parser__Parser_anon_fun(p)
		if (_r37_1305.is_error) {
			return _r37_1305
		}
		return new Result({ data: _r37_1305.data })
	} else if (eq(p.tok, bait__token__Token.key_false) || eq(p.tok, bait__token__Token.key_true)) {
		return new Result({ data: bait__parser__Parser_bool_literal(p) })
	} else if (eq(p.tok, bait__token__Token.key_if)) {
		let _r37_1406 = bait__parser__Parser_if_match(p, true)
		if (_r37_1406.is_error) {
			return _r37_1406
		}
		return new Result({ data: _r37_1406.data })
	} else if (eq(p.tok, bait__token__Token.key_match)) {
		let _r37_1461 = bait__parser__Parser_match_as_if_expr(p, true)
		if (_r37_1461.is_error) {
			return _r37_1461
		}
		return new Result({ data: _r37_1461.data })
	} else if (eq(p.tok, bait__token__Token.key_mut)) {
		let _r37_1504 = bait__parser__Parser_ident(p, bait__ast__Language.bait)
		if (_r37_1504.is_error) {
			return _r37_1504
		}
		return new Result({ data: _r37_1504.data })
	} else if (eq(p.tok, bait__token__Token.amp) || eq(p.tok, bait__token__Token.key_not) || eq(p.tok, bait__token__Token.minus) || eq(p.tok, bait__token__Token.mul) || eq(p.tok, bait__token__Token.tilde)) {
		let _r37_1576 = bait__parser__Parser_prefix_expr(p)
		if (_r37_1576.is_error) {
			return _r37_1576
		}
		return new Result({ data: _r37_1576.data })
	} else if (eq(p.tok, bait__token__Token.key_typeof)) {
		let _r37_1623 = bait__parser__Parser_typeof_expr(p)
		if (_r37_1623.is_error) {
			return _r37_1623
		}
		return new Result({ data: _r37_1623.data })
	} else if (eq(p.tok, bait__token__Token.error)) {
		return error(p.val)
	} else {
		let msg = from_js_string(`invalid expression: kind = ${bait__token__Token_str(p.tok).str}`)
		if (i32(p.val.length > 0)) {
			msg = string_add(msg, from_js_string(`, val = ${p.val.str}`))
		}
		return error(msg)
	}
}

function bait__parser__Parser_expr_list(p) {
	let exprs = new bait_Array({ data: [], length: 0 })
	while (true) {
		let _r37_1925 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r37_1925.is_error) {
			return _r37_1925
		}
		Array_push(exprs, _r37_1925.data)
		if (!eq(p.tok, bait__token__Token.comma)) {
			break
		}
		bait__parser__Parser_next(p)
	}
	return new Result({ data: exprs })
}

function bait__parser__Parser_array_init(p) {
	const pos = p.pos
	let _r37_2104 = bait__parser__Parser_check(p, bait__token__Token.lsqr)
	if (_r37_2104.is_error) {
		return _r37_2104
	}
_r37_2104.data
	if (eq(p.tok, bait__token__Token.rsqr)) {
		bait__parser__Parser_next(p)
		let _r37_2196 = bait__parser__Parser_parse_type(p)
		if (_r37_2196.is_error) {
			const err = _r37_2196.msg
			_r37_2196.data = bait__ast__PLACEHOLDER_TYPE
		}
		const elem_type = _r37_2196.data
		const typ = bait__ast__Table_find_or_register_array(p.table, elem_type)
		let length_expr = new bait__ast__InvalidExpr({})
		let cap_expr = new bait__ast__InvalidExpr({})
		if (eq(p.tok, bait__token__Token.lcur)) {
			bait__parser__Parser_next(p)
			while (!eq(p.tok, bait__token__Token.rcur)) {
				let _r37_2495 = bait__parser__Parser_check_name(p)
				if (_r37_2495.is_error) {
					return _r37_2495
				}
				const key = _r37_2495.data
				let _r37_2520 = bait__parser__Parser_check(p, bait__token__Token.assign)
				if (_r37_2520.is_error) {
					return _r37_2520
				}
_r37_2520.data
				let _r37_2548 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
				if (_r37_2548.is_error) {
					return _r37_2548
				}
				const expr = _r37_2548.data
				if (string_eq(key, from_js_string("length"))) {
					length_expr = expr
				} else if (string_eq(key, from_js_string("cap"))) {
					cap_expr = expr
				} else {
					return error(from_js_string(`invalid array init field: ${key.str}`))
				}
			}
			let _r37_2741 = bait__parser__Parser_check(p, bait__token__Token.rcur)
			if (_r37_2741.is_error) {
				return _r37_2741
			}
_r37_2741.data
		}
		return new Result({ data: new bait__ast__ArrayInit({ typ: typ, elem_type: elem_type, length_expr: length_expr, cap_expr: cap_expr, pos: pos }) })
	}
	let exprs = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rsqr)) {
		let _r37_2994 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r37_2994.is_error) {
			return _r37_2994
		}
		Array_push(exprs, _r37_2994.data)
		if (eq(p.tok, bait__token__Token.comma)) {
			bait__parser__Parser_next(p)
		}
	}
	let _r37_3056 = bait__parser__Parser_check(p, bait__token__Token.rsqr)
	if (_r37_3056.is_error) {
		return _r37_3056
	}
_r37_3056.data
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new Result({ data: new bait__ast__ArrayInit({ exprs: exprs, pos: pos }) })
}

function bait__parser__Parser_as_cast(p, left) {
	const pos = p.pos
	let _r37_3227 = bait__parser__Parser_check(p, bait__token__Token.key_as)
	if (_r37_3227.is_error) {
		return _r37_3227
	}
_r37_3227.data
	let _r37_3254 = bait__parser__Parser_parse_type(p)
	if (_r37_3254.is_error) {
		return _r37_3254
	}
	const bait_target = _r37_3254.data
	return new Result({ data: new bait__ast__AsCast({ bait_target: bait_target, expr: left, pos: pos }) })
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
		let _r37_3719 = bait__parser__Parser_if_match(p, false)
		if (_r37_3719.is_error) {
			return _r37_3719
		}
		return new Result({ data: _r37_3719.data })
	}
	let _r37_3748 = bait__parser__Parser_comptime_var(p)
	if (_r37_3748.is_error) {
		return _r37_3748
	}
	return new Result({ data: _r37_3748.data })
}

function bait__parser__Parser_comptime_var(p) {
	const pos = p.pos
	bait__parser__Parser_next(p)
	let _r37_3856 = bait__parser__Parser_check_name(p)
	if (_r37_3856.is_error) {
		return _r37_3856
	}
	const name = _r37_3856.data
	const kind = bait__token__comptime_var_from_string(name)
	if (eq(kind, bait__token__ComptimeVar.unknown)) {
		return error(from_js_string(`invalid comptime var \`$${name.str}\``))
	}
	return new Result({ data: new bait__ast__ComptimeVar({ kind: kind, pos: pos }) })
}

function bait__parser__Parser_dot_expr(p, left) {
	const pos = p.pos
	let _r37_4155 = bait__parser__Parser_check(p, bait__token__Token.dot)
	if (_r37_4155.is_error) {
		return _r37_4155
	}
_r37_4155.data
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.lpar)) {
		let _r37_4208 = bait__parser__Parser_method_call(p, left)
		if (_r37_4208.is_error) {
			return _r37_4208
		}
		return new Result({ data: _r37_4208.data })
	}
	let _r37_4242 = bait__parser__Parser_check_name(p)
	if (_r37_4242.is_error) {
		return _r37_4242
	}
	const name = _r37_4242.data
	return new Result({ data: new bait__ast__SelectorExpr({ expr: left, field_name: name, pos: pos }) })
}

function bait__parser__Parser_enum_val(p, has_name) {
	const pos = p.pos
	let name = from_js_string("")
	if (has_name) {
		let _r37_4444 = bait__parser__Parser_check_name(p)
		if (_r37_4444.is_error) {
			return _r37_4444
		}
		name = _r37_4444.data
		if (i32(p.expr_pkg.length > 0)) {
			name = bait__parser__Parser_prepend_expr_pkg(p, name)
		} else {
			name = bait__parser__Parser_prepend_pkg(p, name)
		}
	}
	let _r37_4572 = bait__parser__Parser_check(p, bait__token__Token.dot)
	if (_r37_4572.is_error) {
		return _r37_4572
	}
_r37_4572.data
	let _r37_4599 = bait__parser__Parser_check_name(p)
	if (_r37_4599.is_error) {
		return _r37_4599
	}
	const val = _r37_4599.data
	return new Result({ data: new bait__ast__EnumVal({ name: name, val: val, pos: pos }) })
}

function bait__parser__Parser_hash_expr(p) {
	let _r37_4727 = bait__parser__Parser_parse_lang(p)
	if (_r37_4727.is_error) {
		return _r37_4727
	}
	const lang = _r37_4727.data
	if (!eq(p.tok, bait__token__Token.string)) {
		if (eq(lang, bait__ast__Language.js)) {
			p.expr_pkg = from_js_string("JS")
		} else if (eq(lang, bait__ast__Language.c)) {
			p.expr_pkg = from_js_string("C")
		}
		let _r37_4866 = bait__parser__Parser_name_expr(p, lang)
		if (_r37_4866.is_error) {
			return _r37_4866
		}
		return new Result({ data: _r37_4866.data })
	}
	let _r37_4908 = bait__parser__Parser_string_literal(p, bait__ast__Language.bait)
	if (_r37_4908.is_error) {
		return _r37_4908
	}
	const str_node = _r37_4908.data
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
	let _r37_5212 = bait__parser__Parser_check_name(p)
	if (_r37_5212.is_error) {
		return _r37_5212
	}
	const name = _r37_5212.data
	return new Result({ data: new bait__ast__Ident({ name: name, pkg: bait__parser__Parser_get_expr_pkg(p), is_mut: is_mut, pos: pos, lang: lang }) })
}

function bait__parser__Parser_index_expr(p, left) {
	const pos = p.pos
	let _r37_5412 = bait__parser__Parser_check(p, bait__token__Token.lsqr)
	if (_r37_5412.is_error) {
		return _r37_5412
	}
_r37_5412.data
	let _r37_5435 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r37_5435.is_error) {
		return _r37_5435
	}
	const index = _r37_5435.data
	let _r37_5452 = bait__parser__Parser_check(p, bait__token__Token.rsqr)
	if (_r37_5452.is_error) {
		return _r37_5452
	}
_r37_5452.data
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new Result({ data: new bait__ast__IndexExpr({ left: left, index: index, pos: pos }) })
}

function bait__parser__Parser_infix_expr(p, left) {
	const pos = p.pos
	const op_tok = p.tok
	bait__parser__Parser_next(p)
	let _r37_5690 = bait__parser__Parser_expr(p, bait__token__Token_precedence(op_tok))
	if (_r37_5690.is_error) {
		return _r37_5690
	}
	const right = _r37_5690.data
	return new Result({ data: new bait__ast__InfixExpr({ left: left, right: right, op: op_tok, pos: pos }) })
}

function bait__parser__Parser_map_init(p) {
	const pos = p.pos
	bait__parser__Parser_next(p)
	if (eq(p.tok, bait__token__Token.lsqr)) {
		let _r37_5898 = bait__parser__Parser_parse_map_type(p)
		if (_r37_5898.is_error) {
			return _r37_5898
		}
		const map_type = _r37_5898.data
		return new Result({ data: new bait__ast__MapInit({ typ: map_type, pos: pos }) })
	}
	let keys = new bait_Array({ data: [], length: 0 })
	let vals = new bait_Array({ data: [], length: 0 })
	let _r37_6019 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_r37_6019.is_error) {
		return _r37_6019
	}
_r37_6019.data
	while (!eq(p.tok, bait__token__Token.rcur)) {
		let _r37_6066 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r37_6066.is_error) {
			return _r37_6066
		}
		Array_push(keys, _r37_6066.data)
		let _r37_6092 = bait__parser__Parser_check(p, bait__token__Token.colon)
		if (_r37_6092.is_error) {
			return _r37_6092
		}
_r37_6092.data
		let _r37_6115 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r37_6115.is_error) {
			return _r37_6115
		}
		Array_push(vals, _r37_6115.data)
	}
	bait__parser__Parser_next(p)
	return new Result({ data: new bait__ast__MapInit({ keys: keys, vals: vals, pos: pos }) })
}

function bait__parser__Parser_name_expr(p, lang) {
	if (string_eq(p.val, from_js_string("_"))) {
		const pos = p.pos
		bait__parser__Parser_next(p)
		return new Result({ data: new bait__ast__BlankIdent({ pos: pos }) })
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
		if (eq(lang, bait__ast__Language.js)) {
			let _r37_6432 = bait__parser__Parser_check_name(p)
			if (_r37_6432.is_error) {
				return _r37_6432
			}
			p.expr_pkg = string_add(p.expr_pkg, string_add(from_js_string("."), _r37_6432.data))
			let _r37_6449 = bait__parser__Parser_check(p, bait__token__Token.dot)
			if (_r37_6449.is_error) {
				return _r37_6449
			}
_r37_6449.data
		} else if (Map_contains(p.import_aliases, p.val)) {
			p.expr_pkg = Map_get_set(p.import_aliases, p.val, from_js_string(""))
			bait__parser__Parser_next(p)
			bait__parser__Parser_next(p)
		}
	}
	if (string_eq(p.val, from_js_string("map"))) {
		let _r37_6611 = bait__parser__Parser_map_init(p)
		if (_r37_6611.is_error) {
			return _r37_6611
		}
		return new Result({ data: _r37_6611.data })
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.lpar)) {
		let _r37_6666 = bait__parser__Parser_fun_call(p, lang)
		if (_r37_6666.is_error) {
			return _r37_6666
		}
		return new Result({ data: _r37_6666.data })
	}
	const capitalised = u8_is_upper(string_get(p.val, 0)) && !string_is_upper(p.val)
	if (p.is_struct_possible && (eq(bait__parser__Parser_peek(p), bait__token__Token.lcur) || eq(bait__parser__Parser_peek(p), bait__token__Token.lsqr))) {
		if (capitalised || Array_contains_string(new bait_Array({ data: [from_js_string("string")], length: 1 }), p.val)) {
			let _r37_6922 = bait__parser__Parser_struct_init(p)
			if (_r37_6922.is_error) {
				return _r37_6922
			}
			return new Result({ data: _r37_6922.data })
		}
	}
	if (capitalised && eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
		let _r37_6995 = bait__parser__Parser_enum_val(p, true)
		if (_r37_6995.is_error) {
			return _r37_6995
		}
		return new Result({ data: _r37_6995.data })
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.string) && string_eq(p.val, from_js_string("js"))) {
		bait__parser__Parser_next(p)
		let _r37_7086 = bait__parser__Parser_string_literal(p, bait__ast__Language.js)
		if (_r37_7086.is_error) {
			return _r37_7086
		}
		return new Result({ data: _r37_7086.data })
	}
	let _r37_7112 = bait__parser__Parser_ident(p, lang)
	if (_r37_7112.is_error) {
		return _r37_7112
	}
	return new Result({ data: _r37_7112.data })
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
	let _r37_7483 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r37_7483.is_error) {
		return _r37_7483
	}
	const expr = _r37_7483.data
	let _r37_7505 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_r37_7505.is_error) {
		return _r37_7505
	}
_r37_7505.data
	return new Result({ data: new bait__ast__ParExpr({ expr: expr, pos: pos }) })
}

function bait__parser__Parser_prefix_expr(p) {
	const pos = p.pos
	const op = p.tok
	bait__parser__Parser_next(p)
	let _r37_7672 = bait__parser__Parser_expr(p, bait__token__Precedence.prefix)
	if (_r37_7672.is_error) {
		return _r37_7672
	}
	const right = _r37_7672.data
	return new Result({ data: new bait__ast__PrefixExpr({ op: op, right: right, pos: pos }) })
}

function bait__parser__Parser_range_expr(p, low) {
	const pos = p.pos
	let _r37_7832 = bait__parser__Parser_check(p, bait__token__Token.dotdot)
	if (_r37_7832.is_error) {
		return _r37_7832
	}
_r37_7832.data
	let _t196 = undefined
	if (eq(p.tok, bait__token__Token.rsqr)) {
		_t196 = new bait__ast__Void({})
	} else {
			let _r37_7906 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r37_7906.is_error) {
			return _r37_7906
		}
		_t196 = _r37_7906.data
	}
	const high = _t196
	return new Result({ data: new bait__ast__RangeExpr({ low: low, high: high, pos: pos }) })
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
		let _r37_8388 = bait__parser__Parser_check(p, bait__token__Token.lcur)
		if (_r37_8388.is_error) {
			return _r37_8388
		}
_r37_8388.data
		let _r37_8411 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r37_8411.is_error) {
			return _r37_8411
		}
		Array_push(exprs, _r37_8411.data)
	}
	return new Result({ data: new bait__ast__StringInterLiteral({ vals: vals, exprs: exprs, pos: pos }) })
}

function bait__parser__Parser_typeof_expr(p) {
	const pos = p.pos
	let _r37_8581 = bait__parser__Parser_check(p, bait__token__Token.key_typeof)
	if (_r37_8581.is_error) {
		return _r37_8581
	}
_r37_8581.data
	let _r37_8601 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_r37_8601.is_error) {
		return _r37_8601
	}
_r37_8601.data
	let _r37_8624 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r37_8624.is_error) {
		return _r37_8624
	}
	const expr = _r37_8624.data
	let _r37_8646 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_r37_8646.is_error) {
		return _r37_8646
	}
_r37_8646.data
	return new Result({ data: new bait__ast__TypeOf({ expr: expr, pos: pos }) })
}


function bait__parser__Parser_for_loop(p, label) {
	const pos = p.pos
	bait__parser__Parser_next(p)
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.decl_assign)) {
		let _r38_302 = bait__parser__Parser_for_classic_loop(p, label, pos)
		if (_r38_302.is_error) {
			return _r38_302
		}
		return new Result({ data: _r38_302.data })
	}
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_in) || eq(bait__parser__Parser_peek(p), bait__token__Token.comma) || eq(p.tok, bait__token__Token.key_mut)) {
		let _r38_411 = bait__parser__Parser_for_in_loop(p, label, pos)
		if (_r38_411.is_error) {
			return _r38_411
		}
		return new Result({ data: _r38_411.data })
	}
	p.is_struct_possible = false
	let _r38_471 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r38_471.is_error) {
		return _r38_471
	}
	const cond = _r38_471.data
	p.is_struct_possible = true
	let _r38_534 = bait__parser__Parser_parse_block(p)
	if (_r38_534.is_error) {
		return _r38_534
	}
	const stmts = _r38_534.data
	return new Result({ data: new bait__ast__ForLoop({ label: label, cond: cond, stmts: stmts, pos: pos }) })
}

function bait__parser__Parser_for_classic_loop(p, label, pos) {
	p.is_for_init = true
	let _r38_749 = bait__parser__Parser_assign_stmt(p)
	if (_r38_749.is_error) {
		return _r38_749
	}
	const init = _r38_749.data
	p.is_for_init = false
	let _r38_797 = bait__parser__Parser_check(p, bait__token__Token.semicolon)
	if (_r38_797.is_error) {
		return _r38_797
	}
_r38_797.data
	let _r38_820 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r38_820.is_error) {
		return _r38_820
	}
	const cond = _r38_820.data
	let _r38_844 = bait__parser__Parser_check(p, bait__token__Token.semicolon)
	if (_r38_844.is_error) {
		return _r38_844
	}
_r38_844.data
	let _r38_865 = bait__parser__Parser_stmt(p)
	if (_r38_865.is_error) {
		return _r38_865
	}
	const inc = _r38_865.data
	let _r38_894 = bait__parser__Parser_parse_block(p)
	if (_r38_894.is_error) {
		return _r38_894
	}
	const stmts = _r38_894.data
	return new Result({ data: new bait__ast__ForClassicLoop({ label: label, init: init, cond: cond, inc: inc, stmts: stmts, pos: pos }) })
}

function bait__parser__Parser_for_in_loop(p, label, pos) {
	let idxvar = new bait__ast__TmpVar({})
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.comma)) {
		let _r38_1198 = bait__parser__Parser_check_name(p)
		if (_r38_1198.is_error) {
			return _r38_1198
		}
		idxvar = new bait__ast__Ident({ name: _r38_1198.data })
		bait__parser__Parser_next(p)
	}
	let is_mut = false
	if (eq(p.tok, bait__token__Token.key_mut)) {
		is_mut = true
		bait__parser__Parser_next(p)
	}
	let _r38_1348 = bait__parser__Parser_check_name(p)
	if (_r38_1348.is_error) {
		return _r38_1348
	}
	let valvar = new bait__ast__Ident({ name: _r38_1348.data, is_mut: is_mut })
	let _r38_1383 = bait__parser__Parser_check(p, bait__token__Token.key_in)
	if (_r38_1383.is_error) {
		return _r38_1383
	}
_r38_1383.data
	p.is_struct_possible = false
	let _r38_1439 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r38_1439.is_error) {
		return _r38_1439
	}
	const expr = _r38_1439.data
	p.is_struct_possible = true
	let _r38_1502 = bait__parser__Parser_parse_block(p)
	if (_r38_1502.is_error) {
		return _r38_1502
	}
	const stmts = _r38_1502.data
	return new Result({ data: new bait__ast__ForInLoop({ label: label, idxvar: idxvar, valvar: valvar, expr: expr, stmts: stmts, pos: pos }) })
}


function bait__parser__Parser_fun_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	let _r39_260 = bait__parser__Parser_check(p, bait__token__Token.key_fun)
	if (_r39_260.is_error) {
		return _r39_260
	}
_r39_260.data
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
		let _r39_566 = bait__parser__Parser_check_name(p)
		if (_r39_566.is_error) {
			return _r39_566
		}
		const rec_name = _r39_566.data
		let _r39_599 = bait__parser__Parser_parse_type(p)
		if (_r39_599.is_error) {
			return _r39_599
		}
		let rec_type = _r39_599.data
		if (is_mut) {
			rec_type = bait__ast__Type_set_nr_amp(rec_type, 1)
		}
		Array_push(params, new bait__ast__Param({ is_mut: is_mut, name: rec_name, typ: rec_type }))
		let _r39_757 = bait__parser__Parser_check(p, bait__token__Token.rpar)
		if (_r39_757.is_error) {
			return _r39_757
		}
_r39_757.data
	}
	let _r39_791 = bait__parser__Parser_parse_ffi_pkg(p)
	if (_r39_791.is_error) {
		return _r39_791
	}
	const ffi = _r39_791.data
	lang = ffi.lang
	let key = from_js_string("")
	if (!eq(lang, bait__ast__Language.bait)) {
		key = string_add(ffi.pkg, from_js_string("."))
	}
	let _r39_925 = bait__parser__Parser_check_name(p)
	if (_r39_925.is_error) {
		return _r39_925
	}
	const name = _r39_925.data
	key = string_add(key, name)
	const is_test = string_starts_with(name, from_js_string("test_"))
	if (is_method) {
		key = from_js_string(`${i32_str(Array_get(params, 0).typ).str}.${name.str}`)
	} else if (eq(lang, bait__ast__Language.bait)) {
		key = bait__parser__Parser_prepend_pkg(p, key)
	}
	let _r39_1150 = bait__parser__Parser_generic_type_names(p)
	if (_r39_1150.is_error) {
		return _r39_1150
	}
	const generic_names = _r39_1150.data
	let _r39_1172 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_r39_1172.is_error) {
		return _r39_1172
	}
_r39_1172.data
	let _r39_1199 = bait__parser__Parser_fun_params(p)
	if (_r39_1199.is_error) {
		return _r39_1199
	}
	Array_push_many(params, _r39_1199.data)
	let _r39_1222 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_r39_1222.is_error) {
		return _r39_1222
	}
_r39_1222.data
	let return_type = bait__ast__VOID_TYPE
	if (!eq(p.tok, bait__token__Token.lcur) && eq(pos.line, p.pos.line)) {
		let _r39_1334 = bait__parser__Parser_parse_type(p)
		if (_r39_1334.is_error) {
			return _r39_1334
		}
		return_type = _r39_1334.data
	}
	let node = new bait__ast__FunDecl({ is_test: is_test, is_pub: is_pub, name: name, key: key, generic_names: generic_names, params: params, return_type: return_type, noreturn: Array_bait__ast__Attribute_has(p.attributes, from_js_string("noreturn")), attrs: p.attributes, lang: lang, pos: pos })
	if (is_method) {
		const sym = bait__ast__Table_get_sym(p.table, Array_get(params, 0).typ)
		if (eq(lang, bait__ast__Language.bait) && bait__ast__TypeSymbol_has_method(sym, name)) {
			return error(from_js_string(`Method "${name.str}" already exists on type "${sym.mix_name.str}"`))
		}
		Array_push(sym.methods, node)
	} else {
		let param_types = new bait_Array({ data: [], length: 0 })
		for (let _t210 = 0; _t210 < params.length; _t210++) {
			const param = Array_get(params, _t210)
			Array_push(param_types, param.typ)
		}
		node.typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type, false)
		if (eq(lang, bait__ast__Language.bait)) {
			bait__context__Scope_register_unique(p.pkg_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.function, typ: node.typ, pkg: p.pkg_name, is_pub: is_pub, noreturn: Array_bait__ast__Attribute_has(p.attributes, from_js_string("noreturn")), return_type: return_type, params: params, attrs: p.attributes, generic_names: generic_names, key: key }))
		} else {
			const ffi_scope = bait__context__SemanticContext_obtain_root_scope(p.sema_ctx, ffi.pkg)
			bait__context__Scope_register(ffi_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.function, is_pub: true, return_type: return_type, params: params, key: key }))
		}
	}
	p.attributes = new bait_Array({ data: [], length: 0 })
	if (eq(lang, bait__ast__Language.bait)) {
		let _r39_2706 = bait__parser__Parser_parse_block(p)
		if (_r39_2706.is_error) {
			return _r39_2706
		}
		node.stmts = _r39_2706.data
	}
	node.is_method = is_method
	return new Result({ data: node })
}

function bait__parser__Parser_anon_fun(p) {
	const pos = p.pos
	let _r39_2832 = bait__parser__Parser_check(p, bait__token__Token.key_fun)
	if (_r39_2832.is_error) {
		return _r39_2832
	}
_r39_2832.data
	let _r39_2854 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_r39_2854.is_error) {
		return _r39_2854
	}
_r39_2854.data
	let _r39_2876 = bait__parser__Parser_fun_params(p)
	if (_r39_2876.is_error) {
		return _r39_2876
	}
	const params = _r39_2876.data
	let _r39_2895 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_r39_2895.is_error) {
		return _r39_2895
	}
_r39_2895.data
	let return_type = bait__ast__VOID_TYPE
	if (!eq(p.tok, bait__token__Token.lcur)) {
		let _r39_2980 = bait__parser__Parser_parse_type(p)
		if (_r39_2980.is_error) {
			return _r39_2980
		}
		return_type = _r39_2980.data
	}
	let param_types = new bait_Array({ data: [], length: 0 })
	for (let _t213 = 0; _t213 < params.length; _t213++) {
		const param = Array_get(params, _t213)
		Array_push(param_types, param.typ)
	}
	const typ = bait__ast__Table_find_or_register_fun(p.table, param_types, return_type, true)
	let _r39_3171 = bait__parser__Parser_parse_block(p)
	if (_r39_3171.is_error) {
		return _r39_3171
	}
	const stmts = _r39_3171.data
	return new Result({ data: new bait__ast__AnonFun({ decl: new bait__ast__FunDecl({ name: from_js_string(`_anon_${i32_str(p.file_uid).str}_${i32_str(bait__lexer__Lexer_offset(p.lexer)).str}`), params: params, return_type: return_type, stmts: stmts }), typ: typ, pos: pos }) })
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
		let _r39_3620 = bait__parser__Parser_check_name(p)
		if (_r39_3620.is_error) {
			return _r39_3620
		}
		let _r39_3645 = bait__parser__Parser_parse_type(p)
		if (_r39_3645.is_error) {
			return _r39_3645
		}
		const param = new bait__ast__Param({ is_mut: is_mut, name: _r39_3620.data, typ: _r39_3645.data, pos: pos })
		Array_push(params, param)
		if (!eq(p.tok, bait__token__Token.rpar)) {
			let _r39_3721 = bait__parser__Parser_check(p, bait__token__Token.comma)
			if (_r39_3721.is_error) {
				return _r39_3721
			}
_r39_3721.data
		}
	}
	return new Result({ data: params })
}

function bait__parser__Parser_fun_call(p, lang) {
	const pos = p.pos
	let _r39_3848 = bait__parser__Parser_check_name(p)
	if (_r39_3848.is_error) {
		return _r39_3848
	}
	const name = _r39_3848.data
	const pkg = bait__parser__Parser_get_expr_pkg(p)
	let _r39_3891 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_r39_3891.is_error) {
		return _r39_3891
	}
_r39_3891.data
	let _r39_3912 = bait__parser__Parser_call_args(p)
	if (_r39_3912.is_error) {
		return _r39_3912
	}
	const args = _r39_3912.data
	let _r39_3937 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_r39_3937.is_error) {
		return _r39_3937
	}
_r39_3937.data
	let _r39_3963 = bait__parser__Parser_or_block(p)
	if (_r39_3963.is_error) {
		return _r39_3963
	}
	const or_block = _r39_3963.data
	return new Result({ data: new bait__ast__CallExpr({ pkg: pkg, name: name, args: args, or_block: or_block, pos: pos, lang: lang }) })
}

function bait__parser__Parser_method_call(p, left) {
	const pos = p.pos
	let _r39_4175 = bait__parser__Parser_check_name(p)
	if (_r39_4175.is_error) {
		return _r39_4175
	}
	const name = _r39_4175.data
	let _r39_4195 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_r39_4195.is_error) {
		return _r39_4195
	}
_r39_4195.data
	let _r39_4216 = bait__parser__Parser_call_args(p)
	if (_r39_4216.is_error) {
		return _r39_4216
	}
	const args = _r39_4216.data
	let _r39_4241 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_r39_4241.is_error) {
		return _r39_4241
	}
_r39_4241.data
	let _r39_4267 = bait__parser__Parser_or_block(p)
	if (_r39_4267.is_error) {
		return _r39_4267
	}
	const or_block = _r39_4267.data
	return new Result({ data: new bait__ast__CallExpr({ is_method: true, left: left, name: name, args: args, or_block: or_block, pos: pos }) })
}

function bait__parser__Parser_call_args(p) {
	let args = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rpar)) {
		const is_mut = eq(p.tok, bait__token__Token.key_mut)
		let _r39_4649 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r39_4649.is_error) {
			return _r39_4649
		}
		Array_push(args, new bait__ast__CallArg({ is_mut: is_mut, expr: _r39_4649.data }))
		if (!eq(p.tok, bait__token__Token.rpar)) {
			if (eq(p.tok, bait__token__Token.eof)) {
				break
			}
			let _r39_4733 = bait__parser__Parser_check(p, bait__token__Token.comma)
			if (_r39_4733.is_error) {
				return _r39_4733
			}
_r39_4733.data
		}
	}
	return new Result({ data: args })
}

function bait__parser__Parser_or_block(p) {
	if (eq(p.tok, bait__token__Token.excl)) {
		bait__parser__Parser_next(p)
		return new Result({ data: new bait__ast__OrBlock({ kind: bait__ast__OrKind.prop, uid: from_js_string(`_r${i32_str(p.file_uid).str}_${i32_str(bait__lexer__Lexer_offset(p.lexer)).str}`) }) })
	}
	if (eq(p.tok, bait__token__Token.key_or) && eq(bait__parser__Parser_peek(p), bait__token__Token.lcur)) {
		bait__parser__Parser_next(p)
		let _r39_5049 = bait__parser__Parser_parse_block(p)
		if (_r39_5049.is_error) {
			return _r39_5049
		}
		const stmts = _r39_5049.data
		return new Result({ data: new bait__ast__OrBlock({ kind: bait__ast__OrKind.block, stmts: stmts, uid: from_js_string(`_r${i32_str(p.file_uid).str}_${i32_str(bait__lexer__Lexer_offset(p.lexer)).str}`) }) })
	}
	return new Result({ data: new bait__ast__OrBlock({ kind: bait__ast__OrKind.none }) })
}


function bait__parser__Parser_if_match(p, is_expr) {
	const pos = p.pos
	const is_comptime = eq(p.tok, bait__token__Token.dollar)
	let branches = new bait_Array({ data: [], length: 0 })
	let has_else = false
	while (true) {
		const bpos = p.pos
		if (is_comptime) {
			let _r40_384 = bait__parser__Parser_check(p, bait__token__Token.dollar)
			if (_r40_384.is_error) {
				return _r40_384
			}
_r40_384.data
		}
		if (eq(p.tok, bait__token__Token.key_else)) {
			bait__parser__Parser_next(p)
			if (eq(p.tok, bait__token__Token.lcur)) {
				has_else = true
				let _r40_525 = bait__parser__Parser_parse_block(p)
				if (_r40_525.is_error) {
					return _r40_525
				}
				const stmts = _r40_525.data
				Array_push(branches, new bait__ast__IfBranch({ cond: new bait__ast__InvalidExpr({}), stmts: stmts, pos: bpos }))
				break
			}
			if (is_comptime) {
				let _r40_679 = bait__parser__Parser_check(p, bait__token__Token.dollar)
				if (_r40_679.is_error) {
					return _r40_679
				}
_r40_679.data
			}
		}
		let _r40_733 = bait__parser__Parser_check(p, bait__token__Token.key_if)
		if (_r40_733.is_error) {
			return _r40_733
		}
_r40_733.data
		p.is_struct_possible = false
		let _r40_791 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r40_791.is_error) {
			return _r40_791
		}
		const cond = _r40_791.data
		p.is_struct_possible = true
		let _r40_857 = bait__parser__Parser_parse_block(p)
		if (_r40_857.is_error) {
			return _r40_857
		}
		const stmts = _r40_857.data
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
	let _r40_1323 = bait__parser__Parser_check(p, bait__token__Token.key_match)
	if (_r40_1323.is_error) {
		return _r40_1323
	}
_r40_1323.data
	p.is_struct_possible = false
	let _r40_1384 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r40_1384.is_error) {
		return _r40_1384
	}
	const cond_left = _r40_1384.data
	p.is_struct_possible = true
	let _r40_1433 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_r40_1433.is_error) {
		return _r40_1433
	}
_r40_1433.data
	while (!eq(p.tok, bait__token__Token.rcur)) {
		const bpos = p.pos
		if (eq(p.tok, bait__token__Token.key_else)) {
			bait__parser__Parser_next(p)
			has_else = true
			let _r40_1565 = bait__parser__Parser_parse_block(p)
			if (_r40_1565.is_error) {
				return _r40_1565
			}
			const stmts = _r40_1565.data
			Array_push(branches, new bait__ast__IfBranch({ cond: new bait__ast__InvalidExpr({}), stmts: stmts, pos: bpos }))
			break
		}
		p.is_struct_possible = false
		let _r40_1733 = bait__parser__Parser_expr_list(p)
		if (_r40_1733.is_error) {
			return _r40_1733
		}
		const right_conds = _r40_1733.data
		p.is_struct_possible = true
		let _r40_1799 = bait__parser__Parser_parse_block(p)
		if (_r40_1799.is_error) {
			return _r40_1799
		}
		const stmts = _r40_1799.data
		Array_push(branches, new bait__ast__IfBranch({ cond: bait__parser__Parser_cond_list_to_infix(p, cond_left, right_conds, bpos), stmts: stmts, pos: bpos }))
	}
	let _r40_1945 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_r40_1945.is_error) {
		return _r40_1945
	}
_r40_1945.data
	return new Result({ data: new bait__ast__IfMatch({ is_expr: is_expr, is_match: true, has_else: has_else, branches: branches, pos: pos }) })
}

function bait__parser__Parser_cond_list_to_infix(p, left, right_conds, pos) {
	let cond = new bait__ast__InfixExpr({ op: bait__token__Token.eq, left: left, right: Array_last(right_conds), is_match: true, pos: pos })
	for (let i = i32(right_conds.length - 2); i32(i >= 0); i -= 1) {
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
	let _r41_681 = bait__parser__Parser_check(p, bait__token__Token.key_as)
	if (_r41_681.is_error) {
		return _r41_681
	}
_r41_681.data
	let _r41_706 = bait__parser__Parser_parse_lang(p)
	if (_r41_706.is_error) {
		return _r41_706
	}
	const lang = _r41_706.data
	let alias = from_js_string("")
	if (eq(lang, bait__ast__Language.js)) {
		let _r41_779 = bait__parser__Parser_check_name(p)
		if (_r41_779.is_error) {
			return _r41_779
		}
		alias = bait__ast__Language_prepend_to(lang, _r41_779.data)
	} else if (eq(lang, bait__ast__Language.c)) {
		let _r41_828 = bait__parser__Parser_check_name(p)
		if (_r41_828.is_error) {
			return _r41_828
		}
		_t229 = _r41_828.data
	}
	return new Result({ data: new bait__ast__Import({ name: name, alias: alias, lang: lang, pos: pos }) })
}

function bait__parser__Parser_bait_import(p, pos) {
	let _r41_1043 = bait__parser__Parser_check_name(p)
	if (_r41_1043.is_error) {
		return _r41_1043
	}
	let name_parts = new bait_Array({ data: [_r41_1043.data], length: 1 })
	while (eq(p.tok, bait__token__Token.dot)) {
		bait__parser__Parser_next(p)
		let _r41_1110 = bait__parser__Parser_check_name(p)
		if (_r41_1110.is_error) {
			return _r41_1110
		}
		Array_push(name_parts, _r41_1110.data)
	}
	const name = Array_string_join(name_parts, from_js_string("."))
	let alias = Array_last(name_parts)
	if (eq(p.tok, bait__token__Token.key_as)) {
		bait__parser__Parser_next(p)
		let _r41_1274 = bait__parser__Parser_check_name(p)
		if (_r41_1274.is_error) {
			return _r41_1274
		}
		alias = _r41_1274.data
	}
	return new Result({ data: new bait__ast__Import({ name: name, alias: alias, pos: pos }) })
}

function bait__parser__Parser_import_stmts(p) {
	let imports = bait__parser__Parser_add_builtin_imports(p)
	while (eq(p.tok, bait__token__Token.key_import)) {
		const pos = p.pos
		bait__parser__Parser_next(p)
		let _t231 = undefined
		if (eq(p.tok, bait__token__Token.string)) {
					let _r41_1548 = bait__parser__Parser_foreign_import(p, pos)
			if (_r41_1548.is_error) {
				return _r41_1548
			}
			_t231 = _r41_1548.data
		} else {
					let _r41_1577 = bait__parser__Parser_bait_import(p, pos)
			if (_r41_1577.is_error) {
				return _r41_1577
			}
			_t231 = _r41_1577.data
		}
		let imp = _t231
		Map_set(p.import_aliases, imp.alias, imp.name)
		Array_push(imports, imp)
	}
	return new Result({ data: imports })
}


function bait__parser__Parser({ pref = new bait__preference__Prefs({}), path = from_js_string(""), file_uid = 0, eofs = 0, tok = 0, next_tok = 0, val = from_js_string(""), prev_pos = new bait__token__Pos({}), pos = new bait__token__Pos({}), pkg_name = from_js_string(""), pkg_scope = 0, import_aliases = new bait_Map({ data: new Map([]), length: 0 }), attributes = new bait_Array({ data: [], length: 0 }), expr_pkg = from_js_string(""), is_for_init = false, is_struct_possible = false, table = new bait__ast__Table({}), sema_ctx = null, lexer = new bait__lexer__Lexer({}), infos = new bait_Array({ data: [], length: 0 }), warnings = new bait_Array({ data: [], length: 0 }) }) {
	this.pref = pref
	this.path = path
	this.file_uid = file_uid
	this.eofs = eofs
	this.tok = tok
	this.next_tok = next_tok
	this.val = val
	this.prev_pos = prev_pos
	this.pos = pos
	this.pkg_name = pkg_name
	this.pkg_scope = pkg_scope
	this.import_aliases = import_aliases
	this.attributes = attributes
	this.expr_pkg = expr_pkg
	this.is_for_init = is_for_init
	this.is_struct_possible = is_struct_possible
	this.table = table
	this.sema_ctx = sema_ctx
	this.lexer = lexer
	this.infos = infos
	this.warnings = warnings
}
function bait__parser__new(table, sema_ctx, pref) {
	return new bait__parser__Parser({ table: table, sema_ctx: sema_ctx, pref: pref })
}

function bait__parser__new_default() {
	return bait__parser__new(bait__ast__new_table(), new bait__context__SemanticContext({}), new bait__preference__Prefs({}))
}

function bait__parser__Parser_init(p, text, path, expected_pkg) {
	bait__lexer__Lexer_init(p.lexer, text, bait__lexer__CommentMode.discard)
	p.path = path
	p.file_uid += 1
	p.pkg_name = expected_pkg
	p.eofs = 0
	p.import_aliases = new bait_Map({ data: new Map([]), length: 0 })
	p.expr_pkg = from_js_string("")
	p.is_for_init = false
	p.is_struct_possible = true
	p.attributes = new bait_Array({ data: [], length: 0 })
	p.infos = new bait_Array({ data: [], length: 0 })
	p.warnings = new bait_Array({ data: [], length: 0 })
	bait__parser__Parser_next(p)
}

function bait__parser__Parser_parse(p) {
	let _r42_1563 = bait__parser__Parser_parse_result(p)
	if (_r42_1563.is_error) {
		const err = _r42_1563.msg
		_r42_1563.data = bait__parser__Parser_file_error(p, err)
	}
	return _r42_1563.data
}

function bait__parser__Parser_parse_result(p) {
	let _r42_1640 = bait__parser__Parser_parse_attributes(p)
	if (_r42_1640.is_error) {
		return _r42_1640
	}
_r42_1640.data
	let _r42_1719 = bait__parser__Parser_package_decl(p)
	if (_r42_1719.is_error) {
		return _r42_1719
	}
	p.pkg_name = _r42_1719.data
	if (eq(p.pkg_name.length, 0)) {
		return new Result({ data: new bait__ast__File({ infos: p.infos }) })
	}
	if (!p.pref.is_test && string_eq(p.pkg_name, from_js_string("builtin")) && string_ends_with(p.path, from_js_string("assert.bt"))) {
		return new Result({ data: new bait__ast__File({ pkg_name: p.pkg_name, path: p.path }) })
	}
	p.pkg_scope = bait__context__SemanticContext_obtain_pkg_scope(p.sema_ctx, p.pkg_name)
	let _r42_2082 = bait__parser__Parser_import_stmts(p)
	if (_r42_2082.is_error) {
		return _r42_2082
	}
	const imports = _r42_2082.data
	let stmts = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.eof)) {
		let _r42_2155 = bait__parser__Parser_parse_attributes(p)
		if (_r42_2155.is_error) {
			return _r42_2155
		}
_r42_2155.data
		let _r42_2180 = bait__parser__Parser_toplevel_stmt(p)
		if (_r42_2180.is_error) {
			return _r42_2180
		}
		Array_push(stmts, _r42_2180.data)
	}
	return new Result({ data: new bait__ast__File({ path: p.path, lang: bait__ast__path_to_lang(p.path), pkg_name: p.pkg_name, imports: imports, stmts: stmts, infos: p.infos, warnings: p.warnings }) })
}

function bait__parser__Parser_package_decl(p) {
	if (!eq(p.tok, bait__token__Token.key_package)) {
		return new Result({ data: from_js_string("main") })
	}
	bait__parser__Parser_next(p)
	let _r42_2542 = bait__parser__Parser_check_name(p)
	if (_r42_2542.is_error) {
		return _r42_2542
	}
	const name = _r42_2542.data
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
			let _r42_3173 = bait__parser__Parser_check(p, bait__token__Token.string)
			if (_r42_3173.is_error) {
				return _r42_3173
			}
_r42_3173.data
			let _r42_3191 = bait__parser__Parser_check(p, bait__token__Token.rpar)
			if (_r42_3191.is_error) {
				return _r42_3191
			}
_r42_3191.data
		}
		Array_push(p.attributes, new bait__ast__Attribute({ name: name, value: value, pos: pos }))
	}
	return new Result({})
}

function bait__parser__Parser_parse_block(p) {
	let _r42_3352 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_r42_3352.is_error) {
		return _r42_3352
	}
_r42_3352.data
	let stmts = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rcur) && !eq(p.tok, bait__token__Token.eof)) {
		let _r42_3436 = bait__parser__Parser_stmt(p)
		if (_r42_3436.is_error) {
			return _r42_3436
		}
		Array_push(stmts, _r42_3436.data)
	}
	let _r42_3464 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_r42_3464.is_error) {
		return _r42_3464
	}
_r42_3464.data
	return new Result({ data: stmts })
}

function bait__parser__Parser_skip(p, tok) {
	if (eq(p.tok, tok)) {
		bait__parser__Parser_next(p)
	}
}

function bait__parser__Parser_check(p, expected) {
	if (!eq(p.tok, expected)) {
		return error(from_js_string(`unexpected ${bait__token__Token_str(p.tok).str}, expecting ${bait__token__Token_str(expected).str}`))
	}
	bait__parser__Parser_next(p)
	return new Result({})
}

function bait__parser__Parser_check_name(p) {
	const val = p.val
	let _r42_3786 = bait__parser__Parser_check(p, bait__token__Token.name)
	if (_r42_3786.is_error) {
		return _r42_3786
	}
_r42_3786.data
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
	let _r42_4057 = bait__parser__Parser_check(p, bait__token__Token.dot)
	if (_r42_4057.is_error) {
		return _r42_4057
	}
_r42_4057.data
	return new Result({ data: lang })
}

function bait__parser__FFIRes({ lang = 0, pkg = from_js_string("") }) {
	this.lang = lang
	this.pkg = pkg
}
function bait__parser__Parser_parse_ffi_pkg(p) {
	if (!eq(p.tok, bait__token__Token.hash)) {
		return new Result({ data: new bait__parser__FFIRes({ lang: bait__ast__Language.bait }) })
	}
	let r = new bait__parser__FFIRes({})
	let _r42_4304 = bait__parser__Parser_parse_lang(p)
	if (_r42_4304.is_error) {
		return _r42_4304
	}
	r.lang = _r42_4304.data
	r.pkg = bait__ast__Language_str(r.lang)
	if (eq(r.lang, bait__ast__Language.js) && eq(bait__parser__Parser_peek(p), bait__token__Token.dot)) {
		let _r42_4462 = bait__parser__Parser_check_name(p)
		if (_r42_4462.is_error) {
			return _r42_4462
		}
		r.pkg = string_add(r.pkg, string_add(from_js_string("."), _r42_4462.data))
		bait__parser__Parser_next(p)
	}
	return new Result({ data: r })
}

function bait__parser__Parser_prepend_pkg(p, val) {
	if (string_eq(p.pkg_name, from_js_string("builtin")) || string_eq(p.pkg_name, from_js_string("main"))) {
		return val
	}
	return string_add(string_add(p.pkg_name, from_js_string(".")), val)
}

function bait__parser__Parser_get_expr_pkg(p) {
	const pkg = p.expr_pkg
	p.expr_pkg = from_js_string("")
	return pkg
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
	p.prev_pos = p.pos
	p.pos = bait__lexer__Lexer_pos(p.lexer)
}

function bait__parser__Parser_peek(p) {
	if (eq(p.next_tok, bait__token__Token.error)) {
		p.next_tok = bait__lexer__Lexer_next(p.lexer)
	}
	return p.next_tok
}

function bait__parser__Parser_file_error(p, msg) {
	return new bait__ast__File({ path: p.path, pkg_name: p.pkg_name, infos: p.infos, warnings: p.warnings, errors: new bait_Array({ data: [bait__parser__Parser_to_error(p, msg)], length: 1 }) })
}

function bait__parser__Parser_info(p, msg) {
	Array_push(p.infos, new bait__errors__Message({ kind: bait__errors__Kind.info, path: p.path, pos: p.pos, title: from_js_string("info"), msg: msg }))
}

function bait__parser__Parser_warn(p, msg) {
	Array_push(p.warnings, new bait__errors__Message({ kind: bait__errors__Kind.warning, path: p.path, pos: p.pos, title: from_js_string("warning"), msg: msg }))
}

function bait__parser__Parser_to_error(p, msg) {
	return new bait__errors__Message({ kind: bait__errors__Kind.error, path: p.path, pos: p.pos, title: from_js_string("error"), msg: msg })
}


function bait__parser__Parser_toplevel_stmt(p) {
	let _t249 = undefined
	if (eq(p.tok, bait__token__Token.key_pub)) {
			let _r43_266 = bait__parser__Parser_pub_stmt(p)
		if (_r43_266.is_error) {
			return _r43_266
		}
		_t249 = _r43_266.data
	} else if (eq(p.tok, bait__token__Token.hash)) {
			let _r43_293 = bait__parser__Parser_expr_stmt(p)
		if (_r43_293.is_error) {
			return _r43_293
		}
		_t249 = _r43_293.data
	} else if (eq(p.tok, bait__token__Token.key_const)) {
			let _r43_325 = bait__parser__Parser_const_decl(p)
		if (_r43_325.is_error) {
			return _r43_325
		}
		_t249 = _r43_325.data
	} else if (eq(p.tok, bait__token__Token.key_enum)) {
			let _r43_355 = bait__parser__Parser_enum_decl(p)
		if (_r43_355.is_error) {
			return _r43_355
		}
		_t249 = _r43_355.data
	} else if (eq(p.tok, bait__token__Token.key_fun)) {
			let _r43_383 = bait__parser__Parser_fun_decl(p)
		if (_r43_383.is_error) {
			return _r43_383
		}
		_t249 = _r43_383.data
	} else if (eq(p.tok, bait__token__Token.key_interface)) {
			let _r43_423 = bait__parser__Parser_interface_decl(p)
		if (_r43_423.is_error) {
			return _r43_423
		}
		_t249 = _r43_423.data
	} else if (eq(p.tok, bait__token__Token.key_static)) {
			let _r43_458 = bait__parser__Parser_static_decl(p)
		if (_r43_458.is_error) {
			return _r43_458
		}
		_t249 = _r43_458.data
	} else if (eq(p.tok, bait__token__Token.key_struct)) {
			let _r43_492 = bait__parser__Parser_struct_decl(p)
		if (_r43_492.is_error) {
			return _r43_492
		}
		_t249 = _r43_492.data
	} else if (eq(p.tok, bait__token__Token.key_type)) {
			let _r43_522 = bait__parser__Parser_type_decl(p)
		if (_r43_522.is_error) {
			return _r43_522
		}
		_t249 = _r43_522.data
	} else {
			let _r43_559 = bait__parser__Parser_script_mode_or_error(p)
		if (_r43_559.is_error) {
			return _r43_559
		}
		_t249 = _r43_559.data
	}
	return new Result({ data: _t249 })
}

function bait__parser__Parser_pub_stmt(p) {
	let _t250 = undefined
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_const)) {
			let _r43_664 = bait__parser__Parser_const_decl(p)
		if (_r43_664.is_error) {
			return _r43_664
		}
		_t250 = _r43_664.data
	} else if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_enum)) {
			let _r43_694 = bait__parser__Parser_enum_decl(p)
		if (_r43_694.is_error) {
			return _r43_694
		}
		_t250 = _r43_694.data
	} else if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_fun)) {
			let _r43_722 = bait__parser__Parser_fun_decl(p)
		if (_r43_722.is_error) {
			return _r43_722
		}
		_t250 = _r43_722.data
	} else if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_interface)) {
			let _r43_762 = bait__parser__Parser_interface_decl(p)
		if (_r43_762.is_error) {
			return _r43_762
		}
		_t250 = _r43_762.data
	} else if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_static)) {
			let _r43_797 = bait__parser__Parser_static_decl(p)
		if (_r43_797.is_error) {
			return _r43_797
		}
		_t250 = _r43_797.data
	} else if (eq(bait__parser__Parser_peek(p), bait__token__Token.key_struct)) {
			let _r43_831 = bait__parser__Parser_struct_decl(p)
		if (_r43_831.is_error) {
			return _r43_831
		}
		_t250 = _r43_831.data
	} else {
		_t250 = error(from_js_string(`cannot use pub keyword before ${bait__token__Token_str(bait__parser__Parser_peek(p)).str}`))
	}
	return new Result({ data: _t250 })
}

function bait__parser__Parser_script_mode_or_error(p) {
	if (string_eq(p.pkg_name, from_js_string("main"))) {
		let _r43_1013 = bait__parser__Parser_script_mode_main(p)
		if (_r43_1013.is_error) {
			return _r43_1013
		}
		return new Result({ data: _r43_1013.data })
	}
	return error(from_js_string(`bad toplevel token: kind = ${bait__token__Token_str(p.tok).str}, val = ${p.val.str}`))
}

function bait__parser__Parser_script_mode_main(p) {
	if (!p.pref.is_script) {
		bait__parser__Parser_warn(p, from_js_string("declare the main function or use the --script option"))
	}
	let stmts = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.eof)) {
		let _r43_1305 = bait__parser__Parser_stmt(p)
		if (_r43_1305.is_error) {
			return _r43_1305
		}
		Array_push(stmts, _r43_1305.data)
	}
	let node = new bait__ast__FunDecl({ name: from_js_string("main"), return_type: bait__ast__VOID_TYPE })
	node.stmts = stmts
	return new Result({ data: node })
}

function bait__parser__Parser_stmt(p) {
	let _t253 = undefined
	if (eq(p.tok, bait__token__Token.lcur)) {
			let _r43_1508 = bait__parser__Parser_block_stmt(p)
		if (_r43_1508.is_error) {
			return _r43_1508
		}
		_t253 = _r43_1508.data
	} else if (eq(p.tok, bait__token__Token.name)) {
			let _r43_1540 = bait__parser__Parser_stmt_with_name(p)
		if (_r43_1540.is_error) {
			return _r43_1540
		}
		_t253 = _r43_1540.data
	} else if (eq(p.tok, bait__token__Token.key_assert)) {
			let _r43_1575 = bait__parser__Parser_assert_stmt(p)
		if (_r43_1575.is_error) {
			return _r43_1575
		}
		_t253 = _r43_1575.data
	} else if (eq(p.tok, bait__token__Token.key_break) || eq(p.tok, bait__token__Token.key_continue)) {
			let _r43_1630 = bait__parser__Parser_loop_control_stmt(p)
		if (_r43_1630.is_error) {
			return _r43_1630
		}
		_t253 = _r43_1630.data
	} else if (eq(p.tok, bait__token__Token.key_for)) {
			let _r43_1661 = bait__parser__Parser_for_loop(p, from_js_string(""))
		if (_r43_1661.is_error) {
			return _r43_1661
		}
		_t253 = _r43_1661.data
	} else if (eq(p.tok, bait__token__Token.key_if)) {
			let _r43_1694 = bait__parser__Parser_if_match(p, false)
		if (_r43_1694.is_error) {
			return _r43_1694
		}
		_t253 = _r43_1694.data
	} else if (eq(p.tok, bait__token__Token.key_match)) {
			let _r43_1738 = bait__parser__Parser_match_as_if_expr(p, false)
		if (_r43_1738.is_error) {
			return _r43_1738
		}
		_t253 = _r43_1738.data
	} else if (eq(p.tok, bait__token__Token.key_mut)) {
			let _r43_1770 = bait__parser__Parser_assign_stmt(p)
		if (_r43_1770.is_error) {
			return _r43_1770
		}
		_t253 = _r43_1770.data
	} else if (eq(p.tok, bait__token__Token.key_return)) {
			let _r43_1805 = bait__parser__Parser_return_stmt(p)
		if (_r43_1805.is_error) {
			return _r43_1805
		}
		_t253 = _r43_1805.data
	} else {
			let _r43_1830 = bait__parser__Parser_expr_stmt(p)
		if (_r43_1830.is_error) {
			return _r43_1830
		}
		_t253 = _r43_1830.data
	}
	return new Result({ data: _t253 })
}

function bait__parser__Parser_stmt_with_name(p) {
	if (eq(bait__parser__Parser_peek(p), bait__token__Token.colon)) {
		const label = p.val
		bait__parser__Parser_next(p)
		bait__parser__Parser_next(p)
		let _r43_1993 = bait__parser__Parser_for_loop(p, label)
		if (_r43_1993.is_error) {
			return _r43_1993
		}
		return new Result({ data: _r43_1993.data })
	}
	let _r43_2035 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r43_2035.is_error) {
		return _r43_2035
	}
	const left = _r43_2035.data
	if (bait__token__Token_is_assign(p.tok)) {
		let _r43_2096 = bait__parser__Parser_partial_assign_stmt(p, left)
		if (_r43_2096.is_error) {
			return _r43_2096
		}
		return new Result({ data: _r43_2096.data })
	}
	return new Result({ data: new bait__ast__ExprStmt({ expr: left }) })
}

function bait__parser__Parser_assert_stmt(p) {
	bait__parser__Parser_next(p)
	const pos = p.pos
	let _r43_2257 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r43_2257.is_error) {
		return _r43_2257
	}
	const expr = _r43_2257.data
	return new Result({ data: new bait__ast__AssertStmt({ expr: expr, pos: pos }) })
}

function bait__parser__Parser_assign_stmt(p) {
	let _r43_2390 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r43_2390.is_error) {
		return _r43_2390
	}
	const left = _r43_2390.data
	let _r43_2421 = bait__parser__Parser_partial_assign_stmt(p, left)
	if (_r43_2421.is_error) {
		return _r43_2421
	}
	return new Result({ data: _r43_2421.data })
}

function bait__parser__Parser_partial_assign_stmt(p, left) {
	let op = p.tok
	bait__parser__Parser_next(p)
	let _r43_2561 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r43_2561.is_error) {
		return _r43_2561
	}
	let right = _r43_2561.data
	return new Result({ data: new bait__ast__AssignStmt({ op: op, left: left, right: right, pos: (left).pos }) })
}

function bait__parser__Parser_block_stmt(p) {
	const pos = p.pos
	let _r43_2755 = bait__parser__Parser_parse_block(p)
	if (_r43_2755.is_error) {
		return _r43_2755
	}
	const stmts = _r43_2755.data
	return new Result({ data: new bait__ast__Block({ stmts: stmts, pos: pos }) })
}

function bait__parser__Parser_const_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	let _r43_2954 = bait__parser__Parser_parse_ffi_pkg(p)
	if (_r43_2954.is_error) {
		return _r43_2954
	}
	const ffi = _r43_2954.data
	let _r43_2977 = bait__parser__Parser_check_name(p)
	if (_r43_2977.is_error) {
		return _r43_2977
	}
	const name = _r43_2977.data
	let _r43_3003 = bait__parser__Parser_check(p, bait__token__Token.decl_assign)
	if (_r43_3003.is_error) {
		return _r43_3003
	}
_r43_3003.data
	if (!eq(ffi.lang, bait__ast__Language.bait)) {
		let _r43_3061 = bait__parser__Parser_parse_type(p)
		if (_r43_3061.is_error) {
			return _r43_3061
		}
		const typ = _r43_3061.data
		const ffi_scope = bait__context__SemanticContext_obtain_root_scope(p.sema_ctx, ffi.pkg)
		bait__context__Scope_register(ffi_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.constant, pkg: ffi.pkg, typ: typ, is_pub: true }))
		return new Result({ data: new bait__ast__ConstDecl({ name: name, typ: typ, pos: pos, lang: ffi.lang }) })
	}
	let _r43_3445 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r43_3445.is_error) {
		return _r43_3445
	}
	const expr = _r43_3445.data
	bait__context__Scope_register_unique(p.pkg_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.constant, pkg: p.pkg_name, is_pub: is_pub, expr: expr, typ: bait__ast__VOID_TYPE }))
	return new Result({ data: new bait__ast__ConstDecl({ name: name, expr: expr, pos: pos, lang: ffi.lang }) })
}

function bait__parser__Parser_loop_control_stmt(p) {
	const pos = p.pos
	const kind = p.tok
	bait__parser__Parser_next(p)
	let _t257 = undefined
	if (eq(p.tok, bait__token__Token.semicolon)) {
		_t257 = from_js_string("")
	} else {
			let _r43_3848 = bait__parser__Parser_check_name(p)
		if (_r43_3848.is_error) {
			return _r43_3848
		}
		_t257 = _r43_3848.data
	}
	const label = _t257
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new Result({ data: new bait__ast__LoopControlStmt({ kind: kind, label: label, pos: pos }) })
}

function bait__parser__Parser_expr_stmt(p) {
	let _r43_4026 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r43_4026.is_error) {
		return _r43_4026
	}
	const expr = _r43_4026.data
	return new Result({ data: new bait__ast__ExprStmt({ expr: expr }) })
}

function bait__parser__Parser_enum_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	let _r43_4186 = bait__parser__Parser_parse_lang(p)
	if (_r43_4186.is_error) {
		return _r43_4186
	}
	const lang = _r43_4186.data
	let _r43_4216 = bait__parser__Parser_check_name(p)
	if (_r43_4216.is_error) {
		return _r43_4216
	}
	let name = _r43_4216.data
	let _t258 = undefined
	if (eq(lang, bait__ast__Language.bait)) {
		_t258 = bait__parser__Parser_prepend_pkg(p, name)
	} else {
		_t258 = bait__ast__Language_prepend_to(lang, name)
	}
	name = _t258
	let _r43_4313 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_r43_4313.is_error) {
		return _r43_4313
	}
_r43_4313.data
	let variants = new bait_Array({ data: [], length: 0 })
	let fields = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rcur)) {
		const fpos = p.pos
		let _r43_4436 = bait__parser__Parser_check_name(p)
		if (_r43_4436.is_error) {
			return _r43_4436
		}
		const fname = _r43_4436.data
		let expr = new bait__ast__InvalidExpr({})
		if (eq(p.tok, bait__token__Token.decl_assign)) {
			bait__parser__Parser_next(p)
			let _r43_4547 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
			if (_r43_4547.is_error) {
				return _r43_4547
			}
			expr = _r43_4547.data
		}
		Array_push(variants, fname)
		Array_push(fields, new bait__ast__EnumField({ name: fname, expr: expr, pos: fpos }))
	}
	let _r43_4675 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_r43_4675.is_error) {
		return _r43_4675
	}
_r43_4675.data
	const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ mix_name: name, is_pub: is_pub, pkg: p.pkg_name, kind: bait__ast__TypeKind.enum_, info: new bait__ast__EnumInfo({ vals: variants }) }))
	bait__context__Scope_register_unique(p.pkg_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.type_, typ: typ }))
	return new Result({ data: new bait__ast__EnumDecl({ lang: lang, name: name, fields: fields, pos: pos }) })
}

function bait__parser__Parser_static_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	let _r43_5129 = bait__parser__Parser_check(p, bait__token__Token.key_static)
	if (_r43_5129.is_error) {
		return _r43_5129
	}
_r43_5129.data
	let _r43_5151 = bait__parser__Parser_check_name(p)
	if (_r43_5151.is_error) {
		return _r43_5151
	}
	const name = _r43_5151.data
	let _r43_5178 = bait__parser__Parser_check(p, bait__token__Token.decl_assign)
	if (_r43_5178.is_error) {
		return _r43_5178
	}
_r43_5178.data
	let _r43_5202 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r43_5202.is_error) {
		return _r43_5202
	}
	const expr = _r43_5202.data
	bait__context__Scope_register_unique(p.pkg_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.static_, pkg: p.pkg_name, is_pub: is_pub, is_mut: true, expr: expr, typ: bait__ast__VOID_TYPE }))
	return new Result({ data: new bait__ast__StaticDecl({ name: name, expr: expr, pos: pos }) })
}

function bait__parser__Parser_interface_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	let _r43_5564 = bait__parser__Parser_check(p, bait__token__Token.key_interface)
	if (_r43_5564.is_error) {
		return _r43_5564
	}
_r43_5564.data
	let _r43_5588 = bait__parser__Parser_parse_lang(p)
	if (_r43_5588.is_error) {
		return _r43_5588
	}
	const lang = _r43_5588.data
	let _r43_5629 = bait__parser__Parser_check_name(p)
	if (_r43_5629.is_error) {
		return _r43_5629
	}
	let name = bait__ast__Language_prepend_to(lang, _r43_5629.data)
	if (!eq(lang, bait__ast__Language.bait) && eq(p.tok, bait__token__Token.dot)) {
		name = string_add(name, from_js_string("."))
		bait__parser__Parser_next(p)
		let _r43_5721 = bait__parser__Parser_check_name(p)
		if (_r43_5721.is_error) {
			return _r43_5721
		}
		name = string_add(name, _r43_5721.data)
	}
	let tsym = new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.interface_, mix_name: name, is_pub: is_pub, pkg: p.pkg_name })
	const typ = bait__ast__Table_register_sym(p.table, tsym)
	let methods = new bait_Array({ data: [], length: 0 })
	let fields = new bait_Array({ data: [], length: 0 })
	let _r43_6055 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_r43_6055.is_error) {
		return _r43_6055
	}
_r43_6055.data
	while (!eq(p.tok, bait__token__Token.rcur)) {
		const f_is_pub = eq(p.tok, bait__token__Token.key_pub)
		if (f_is_pub) {
			bait__parser__Parser_next(p)
		}
		const f_is_mut = eq(p.tok, bait__token__Token.key_mut)
		if (f_is_mut) {
			bait__parser__Parser_next(p)
		}
		const f_is_global = eq(p.tok, bait__token__Token.key_global)
		if (f_is_global) {
			if (f_is_pub || f_is_mut) {
				return error(from_js_string("unexpected `global`"))
			}
			bait__parser__Parser_next(p)
		}
		let _r43_6380 = bait__parser__Parser_check_name(p)
		if (_r43_6380.is_error) {
			return _r43_6380
		}
		const fname = _r43_6380.data
		if (eq(p.tok, bait__token__Token.lpar)) {
			let _r43_6448 = bait__parser__Parser_interface_method(p, fname, typ)
			if (_r43_6448.is_error) {
				return _r43_6448
			}
			const m = _r43_6448.data
			Array_push(methods, m)
			Array_push(tsym.methods, m)
			continue
		}
		let _r43_6579 = bait__parser__Parser_parse_type(p)
		if (_r43_6579.is_error) {
			return _r43_6579
		}
		Array_push(fields, new bait__ast__StructField({ name: fname, typ: _r43_6579.data, is_mut: f_is_mut || f_is_global, is_pub: f_is_pub || f_is_global, is_global: f_is_global }))
	}
	bait__parser__Parser_next(p)
	tsym.info = new bait__ast__StructInfo({ fields: fields })
	return new Result({ data: new bait__ast__InterfaceDecl({ lang: lang, name: name, typ: typ, methods: methods, fields: fields, pos: pos }) })
}

function bait__parser__Parser_interface_method(p, name, rec_type) {
	let _r43_7024 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_r43_7024.is_error) {
		return _r43_7024
	}
_r43_7024.data
	let params = new bait_Array({ data: [new bait__ast__Param({ name: from_js_string("_"), typ: rec_type })], length: 1 })
	let _r43_7115 = bait__parser__Parser_fun_params(p)
	if (_r43_7115.is_error) {
		return _r43_7115
	}
	Array_push_many(params, _r43_7115.data)
	const par_line = p.pos.line
	let _r43_7161 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_r43_7161.is_error) {
		return _r43_7161
	}
_r43_7161.data
	let return_type = bait__ast__VOID_TYPE
	if (eq(p.pos.line, par_line)) {
		let _r43_7254 = bait__parser__Parser_parse_type(p)
		if (_r43_7254.is_error) {
			return _r43_7254
		}
		return_type = _r43_7254.data
	}
	return new Result({ data: new bait__ast__FunDecl({ lang: bait__ast__Language.js, name: name, params: params, return_type: return_type, is_pub: true, is_method: true }) })
}

function bait__parser__Parser_return_stmt(p) {
	const pos = p.pos
	let _r43_7481 = bait__parser__Parser_check(p, bait__token__Token.key_return)
	if (_r43_7481.is_error) {
		return _r43_7481
	}
_r43_7481.data
	let expr = new bait__ast__Void({})
	if (!eq(p.tok, bait__token__Token.semicolon)) {
		let _r43_7567 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r43_7567.is_error) {
			return _r43_7567
		}
		expr = _r43_7567.data
	}
	bait__parser__Parser_skip(p, bait__token__Token.semicolon)
	return new Result({ data: new bait__ast__ReturnStmt({ expr: expr, pos: pos }) })
}

function bait__parser__Parser_type_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	bait__parser__Parser_next(p)
	let _r43_7770 = bait__parser__Parser_parse_lang(p)
	if (_r43_7770.is_error) {
		return _r43_7770
	}
	const lang = _r43_7770.data
	let _r43_7798 = bait__parser__Parser_check_name(p)
	if (_r43_7798.is_error) {
		return _r43_7798
	}
	let name = _r43_7798.data
	if (eq(lang, bait__ast__Language.bait)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	} else {
		name = bait__ast__Language_prepend_to(lang, name)
	}
	let _r43_7925 = bait__parser__Parser_check(p, bait__token__Token.decl_assign)
	if (_r43_7925.is_error) {
		return _r43_7925
	}
_r43_7925.data
	const is_fun_type = eq(p.tok, bait__token__Token.key_fun)
	let variants = new bait_Array({ data: [], length: 0 })
	let _r43_8006 = bait__parser__Parser_parse_type(p)
	if (_r43_8006.is_error) {
		return _r43_8006
	}
	Array_push(variants, _r43_8006.data)
	if (is_fun_type) {
		const sym = bait__ast__Table_get_sym(p.table, Array_get(variants, 0))
		const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.fun_, mix_name: name, is_pub: is_pub, pkg: p.pkg_name, info: sym.info }))
		bait__context__Scope_register_unique(p.pkg_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.type_, typ: typ }))
		return new Result({ data: new bait__ast__TypeDecl({ lang: lang, name: name, typ: typ, pos: pos }) })
	}
	if (!eq(p.tok, bait__token__Token.pipe)) {
		const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.alias_type, mix_name: name, parent: Array_get(variants, 0), is_pub: is_pub, pkg: p.pkg_name }))
		bait__context__Scope_register_unique(p.pkg_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.type_, typ: typ }))
		return new Result({ data: new bait__ast__TypeDecl({ lang: lang, name: name, typ: typ, pos: pos }) })
	}
	while (eq(p.tok, bait__token__Token.pipe)) {
		bait__parser__Parser_next(p)
		let _r43_8855 = bait__parser__Parser_parse_type(p)
		if (_r43_8855.is_error) {
			return _r43_8855
		}
		Array_push(variants, _r43_8855.data)
	}
	const typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.sum_type, mix_name: name, is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__SumTypeInfo({ variants: variants }) }))
	bait__context__Scope_register_unique(p.pkg_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.type_, typ: typ }))
	return new Result({ data: new bait__ast__TypeDecl({ lang: lang, name: name, typ: typ, pos: pos }) })
}


function bait__parser__Parser_struct_decl(p) {
	const pos = p.pos
	const is_pub = bait__parser__Parser_check_pub(p)
	let _r44_288 = bait__parser__Parser_check(p, bait__token__Token.key_struct)
	if (_r44_288.is_error) {
		return _r44_288
	}
_r44_288.data
	let _r44_312 = bait__parser__Parser_parse_lang(p)
	if (_r44_312.is_error) {
		return _r44_312
	}
	const lang = _r44_312.data
	let _r44_340 = bait__parser__Parser_check_name(p)
	if (_r44_340.is_error) {
		return _r44_340
	}
	let name = _r44_340.data
	if (!eq(lang, bait__ast__Language.bait)) {
		name = bait__ast__Language_prepend_to(lang, name)
	}
	let _r44_439 = bait__parser__Parser_generic_type_names(p)
	if (_r44_439.is_error) {
		return _r44_439
	}
	const generic_names = _r44_439.data
	let fields = new bait_Array({ data: [], length: 0 })
	let _r44_490 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_r44_490.is_error) {
		return _r44_490
	}
_r44_490.data
	while (!eq(p.tok, bait__token__Token.rcur)) {
		const f_is_pub = eq(p.tok, bait__token__Token.key_pub)
		if (f_is_pub) {
			bait__parser__Parser_next(p)
		}
		const f_is_mut = eq(p.tok, bait__token__Token.key_mut)
		if (f_is_mut) {
			bait__parser__Parser_next(p)
		}
		const f_is_global = eq(p.tok, bait__token__Token.key_global)
		if (f_is_global) {
			if (f_is_pub || f_is_mut) {
				return error(from_js_string("unexpected `global`"))
			}
			bait__parser__Parser_next(p)
		}
		let _r44_816 = bait__parser__Parser_parse_attributes(p)
		if (_r44_816.is_error) {
			return _r44_816
		}
_r44_816.data
		let _r44_876 = bait__parser__Parser_struct_decl_field(p, f_is_mut, f_is_pub, f_is_global)
		if (_r44_876.is_error) {
			return _r44_876
		}
		Array_push(fields, _r44_876.data)
	}
	let _r44_903 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_r44_903.is_error) {
		return _r44_903
	}
_r44_903.data
	const tsym = new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.struct_, mix_name: bait__parser__Parser_prepend_pkg(p, name), is_pub: is_pub, pkg: p.pkg_name, info: new bait__ast__StructInfo({ fields: fields, generic_names: generic_names }) })
	const typ = bait__ast__Table_register_sym(p.table, tsym)
	bait__context__Scope_register_unique(p.pkg_scope, name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.type_, typ: typ }))
	return new Result({ data: new bait__ast__StructDecl({ lang: lang, pkg_prefix: bait__parser__Parser_prepend_pkg(p, from_js_string("")), name: name, typ: typ, fields: fields, generic_names: generic_names, pos: pos }) })
}

function bait__parser__Parser_struct_decl_field(p, is_mut, is_pub, is_global) {
	const pos = p.pos
	let _r44_1528 = bait__parser__Parser_check_name(p)
	if (_r44_1528.is_error) {
		return _r44_1528
	}
	const fname = _r44_1528.data
	let _r44_1552 = bait__parser__Parser_parse_type(p)
	if (_r44_1552.is_error) {
		return _r44_1552
	}
	const ftyp = _r44_1552.data
	let expr = new bait__ast__InvalidExpr({})
	if (eq(p.tok, bait__token__Token.decl_assign)) {
		bait__parser__Parser_next(p)
		let _r44_1658 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
		if (_r44_1658.is_error) {
			return _r44_1658
		}
		expr = _r44_1658.data
	}
	const field = new bait__ast__StructField({ name: fname, typ: ftyp, expr: expr, pos: pos, is_mut: is_mut || is_global, is_pub: is_pub || is_global, is_global: is_global, attrs: p.attributes })
	p.attributes = new bait_Array({ data: [], length: 0 })
	return new Result({ data: field })
}

function bait__parser__Parser_struct_init(p) {
	const pos = p.pos
	const name = p.val
	let _r44_2021 = bait__parser__Parser_parse_type(p)
	if (_r44_2021.is_error) {
		return _r44_2021
	}
	let typ = _r44_2021.data
	let _r44_2048 = bait__parser__Parser_concrete_types(p)
	if (_r44_2048.is_error) {
		return _r44_2048
	}
	const conc_types = _r44_2048.data
	if (i32(conc_types.length > 0)) {
		const parent = bait__ast__Table_get_sym(p.table, typ)
		typ = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.generic_inst, parent: typ, pkg: parent.pkg, info: new bait__ast__GenericInst({ concrete_types: conc_types }) }))
	}
	let _r44_2305 = bait__parser__Parser_check(p, bait__token__Token.lcur)
	if (_r44_2305.is_error) {
		return _r44_2305
	}
_r44_2305.data
	let fields = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rcur)) {
		let _r44_2397 = bait__parser__Parser_struct_init_field(p)
		if (_r44_2397.is_error) {
			return _r44_2397
		}
		Array_push(fields, _r44_2397.data)
	}
	let _r44_2426 = bait__parser__Parser_check(p, bait__token__Token.rcur)
	if (_r44_2426.is_error) {
		return _r44_2426
	}
_r44_2426.data
	return new Result({ data: new bait__ast__StructInit({ name: name, typ: typ, fields: fields, pos: pos, concrete_types: conc_types }) })
}

function bait__parser__Parser_struct_init_field(p) {
	const pos = p.pos
	let _r44_2638 = bait__parser__Parser_check_name(p)
	if (_r44_2638.is_error) {
		return _r44_2638
	}
	const name = _r44_2638.data
	let _r44_2660 = bait__parser__Parser_check(p, bait__token__Token.assign)
	if (_r44_2660.is_error) {
		return _r44_2660
	}
_r44_2660.data
	let _r44_2689 = bait__parser__Parser_expr(p, bait__token__Precedence.lowest)
	if (_r44_2689.is_error) {
		return _r44_2689
	}
	const expr = _r44_2689.data
	return new Result({ data: new bait__ast__StructInitField({ name: name, expr: expr, pos: pos }) })
}


function bait__parser__Parser_parse_type(p) {
	if (eq(p.tok, bait__token__Token.excl)) {
		bait__parser__Parser_next(p)
		if (eq(p.tok, bait__token__Token.lcur)) {
			return new Result({ data: bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.result, mix_name: from_js_string("Result[void]"), parent: bait__ast__VOID_TYPE })) })
		}
		let _r45_429 = bait__parser__Parser_parse_type(p)
		if (_r45_429.is_error) {
			return _r45_429
		}
		const typ = _r45_429.data
		const tsym = bait__ast__Table_get_sym(p.table, typ)
		return new Result({ data: bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ kind: bait__ast__TypeKind.result, mix_name: string_add(string_add(from_js_string("Result["), tsym.mix_name), from_js_string("]")), parent: typ })) })
	}
	let nr_amp = 0
	while (eq(p.tok, bait__token__Token.amp)) {
		bait__parser__Parser_next(p)
		nr_amp += 1
	}
	if (eq(p.tok, bait__token__Token.lsqr)) {
		bait__parser__Parser_next(p)
		let _r45_743 = bait__parser__Parser_check(p, bait__token__Token.rsqr)
		if (_r45_743.is_error) {
			return _r45_743
		}
_r45_743.data
		let _r45_798 = bait__parser__Parser_parse_type(p)
		if (_r45_798.is_error) {
			const err = _r45_798.msg
			_r45_798.data = bait__ast__PLACEHOLDER_TYPE
		}
		const elem_type = _r45_798.data
		return new Result({ data: bait__ast__Table_find_or_register_array(p.table, elem_type) })
	}
	if (eq(p.tok, bait__token__Token.key_fun)) {
		let _r45_918 = bait__parser__Parser_parse_fun_type(p)
		if (_r45_918.is_error) {
			return _r45_918
		}
		return new Result({ data: _r45_918.data })
	}
	if (string_eq(p.val, from_js_string("map"))) {
		bait__parser__Parser_next(p)
		let _r45_996 = bait__parser__Parser_parse_map_type(p)
		if (_r45_996.is_error) {
			return _r45_996
		}
		return new Result({ data: _r45_996.data })
	}
	if (eq(p.tok, bait__token__Token.semicolon)) {
		bait__parser__Parser_next(p)
		return new Result({ data: bait__ast__PLACEHOLDER_TYPE })
	}
	let _r45_1184 = bait__parser__Parser_parse_lang(p)
	if (_r45_1184.is_error) {
		return _r45_1184
	}
	const lang = _r45_1184.data
	let _r45_1220 = bait__parser__Parser_parse_name_type(p, lang)
	if (_r45_1220.is_error) {
		return _r45_1220
	}
	let typ = _r45_1220.data
	if (i32(nr_amp > 0)) {
		typ = bait__ast__Type_set_nr_amp(typ, nr_amp)
	}
	return new Result({ data: typ })
}

function bait__parser__Parser_parse_name_type(p, lang) {
	let _r45_1394 = bait__parser__Parser_check_name(p)
	if (_r45_1394.is_error) {
		return _r45_1394
	}
	let name = bait__ast__Language_prepend_to(lang, _r45_1394.data)
	if (eq(p.tok, bait__token__Token.dot)) {
		if (eq(lang, bait__ast__Language.js)) {
			bait__parser__Parser_next(p)
			let _r45_1529 = bait__parser__Parser_check_name(p)
			if (_r45_1529.is_error) {
				return _r45_1529
			}
			name = string_add(name, string_add(from_js_string("."), _r45_1529.data))
		} else {
			const pkg = Map_get_set(p.import_aliases, name, from_js_string(""))
			bait__parser__Parser_next(p)
			let _r45_1623 = bait__parser__Parser_check_name(p)
			if (_r45_1623.is_error) {
				return _r45_1623
			}
			name = string_add(string_add(pkg, from_js_string(".")), _r45_1623.data)
		}
	} else if (i32(p.expr_pkg.length > 0)) {
		name = bait__parser__Parser_prepend_expr_pkg(p, name)
	} else if (!string_contains(name, from_js_string(".")) && !Map_contains(p.table.type_idxs, name)) {
		name = bait__parser__Parser_prepend_pkg(p, name)
	}
	let _t287 = undefined
	if (string_eq(name, from_js_string("i8"))) {
		_t287 = bait__ast__I8_TYPE
	} else if (string_eq(name, from_js_string("i16"))) {
		_t287 = bait__ast__I16_TYPE
	} else if (string_eq(name, from_js_string("i32"))) {
		_t287 = bait__ast__I32_TYPE
	} else if (string_eq(name, from_js_string("i64"))) {
		_t287 = bait__ast__I64_TYPE
	} else if (string_eq(name, from_js_string("u8"))) {
		_t287 = bait__ast__U8_TYPE
	} else if (string_eq(name, from_js_string("u16"))) {
		_t287 = bait__ast__U16_TYPE
	} else if (string_eq(name, from_js_string("u32"))) {
		_t287 = bait__ast__U32_TYPE
	} else if (string_eq(name, from_js_string("u64"))) {
		_t287 = bait__ast__U64_TYPE
	} else if (string_eq(name, from_js_string("f32"))) {
		_t287 = bait__ast__F32_TYPE
	} else if (string_eq(name, from_js_string("f64"))) {
		_t287 = bait__ast__F64_TYPE
	} else if (string_eq(name, from_js_string("bool"))) {
		_t287 = bait__ast__BOOL_TYPE
	} else if (string_eq(name, from_js_string("string"))) {
		_t287 = bait__ast__STRING_TYPE
	} else if (string_eq(name, from_js_string("any"))) {
		_t287 = bait__ast__ANY_TYPE
	} else {
		_t287 = bait__ast__Table_find_type_or_add_placeholder(p.table, name, p.pkg_name)
	}
	return new Result({ data: _t287 })
}

function bait__parser__Parser_parse_fun_type(p) {
	bait__parser__Parser_next(p)
	let _r45_2324 = bait__parser__Parser_check(p, bait__token__Token.lpar)
	if (_r45_2324.is_error) {
		return _r45_2324
	}
_r45_2324.data
	let param_types = new bait_Array({ data: [], length: 0 })
	while (!eq(p.tok, bait__token__Token.rpar)) {
		let _r45_2446 = bait__parser__Parser_check_name(p)
		if (_r45_2446.is_error) {
			return _r45_2446
		}
		_t288 = _r45_2446.data
		let _r45_2479 = bait__parser__Parser_parse_type(p)
		if (_r45_2479.is_error) {
			return _r45_2479
		}
		const typ = _r45_2479.data
		Array_push(param_types, typ)
		if (!eq(p.tok, bait__token__Token.rpar)) {
			let _r45_2534 = bait__parser__Parser_check(p, bait__token__Token.comma)
			if (_r45_2534.is_error) {
				return _r45_2534
			}
_r45_2534.data
		}
	}
	const par_line = p.pos.line
	let _r45_2583 = bait__parser__Parser_check(p, bait__token__Token.rpar)
	if (_r45_2583.is_error) {
		return _r45_2583
	}
_r45_2583.data
	let return_type = bait__ast__VOID_TYPE
	if (eq(p.pos.line, par_line)) {
		let _r45_2676 = bait__parser__Parser_parse_type(p)
		if (_r45_2676.is_error) {
			return _r45_2676
		}
		return_type = _r45_2676.data
	}
	return new Result({ data: bait__ast__Table_find_or_register_fun(p.table, param_types, return_type, true) })
}

function bait__parser__Parser_parse_map_type(p) {
	if (eq(p.tok, bait__token__Token.rpar) && string_eq(p.pkg_name, from_js_string("builtin"))) {
		return new Result({ data: bait__ast__MAP_TYPE })
	}
	let _r45_2897 = bait__parser__Parser_check(p, bait__token__Token.lsqr)
	if (_r45_2897.is_error) {
		return _r45_2897
	}
_r45_2897.data
	let _r45_2920 = bait__parser__Parser_parse_type(p)
	if (_r45_2920.is_error) {
		return _r45_2920
	}
	const key_type = _r45_2920.data
	if (!eq(key_type, bait__ast__STRING_TYPE)) {
		return error(from_js_string("map key type must be string"))
	}
	let _r45_3026 = bait__parser__Parser_check(p, bait__token__Token.rsqr)
	if (_r45_3026.is_error) {
		return _r45_3026
	}
_r45_3026.data
	let _r45_3053 = bait__parser__Parser_parse_type(p)
	if (_r45_3053.is_error) {
		return _r45_3053
	}
	const val_type = _r45_3053.data
	return new Result({ data: bait__ast__Table_find_or_register_map(p.table, key_type, val_type) })
}

function bait__parser__Parser_generic_type_names(p) {
	if (!eq(p.tok, bait__token__Token.lsqr)) {
		return new Result({ data: new bait_Array({ data: [], length: 0 }) })
	}
	bait__parser__Parser_next(p)
	let names = new bait_Array({ data: [], length: 0 })
	while (true) {
		let _r45_3270 = bait__parser__Parser_check_name(p)
		if (_r45_3270.is_error) {
			return _r45_3270
		}
		const name = _r45_3270.data
		if (i32(name.length > 1)) {
			return error(from_js_string("generic types names have to be exactly one character"))
		}
		if (!u8_is_upper(string_get(name, 0))) {
			return error(from_js_string("generic type names have to be capital letters"))
		}
		Array_push(names, name)
		const idx = bait__ast__Table_get_idx(p.table, name)
		if (eq(idx, 0)) {
			_t297 = bait__ast__Table_register_sym(p.table, new bait__ast__TypeSymbol({ mix_name: name, kind: bait__ast__TypeKind.generic, is_pub: true }))
		}
		if (eq(p.tok, bait__token__Token.rsqr)) {
			break
		}
		let _r45_3700 = bait__parser__Parser_check(p, bait__token__Token.comma)
		if (_r45_3700.is_error) {
			return _r45_3700
		}
_r45_3700.data
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
		let _r45_3901 = bait__parser__Parser_parse_type(p)
		if (_r45_3901.is_error) {
			return _r45_3901
		}
		Array_push(types, _r45_3901.data)
		if (!eq(p.tok, bait__token__Token.rsqr)) {
			let _r45_3948 = bait__parser__Parser_check(p, bait__token__Token.comma)
			if (_r45_3948.is_error) {
				return _r45_3948
			}
_r45_3948.data
		}
	}
	bait__parser__Parser_next(p)
	return new Result({ data: types })
}


function bait__checker__Checker_decl_assign(c, node) {
	if (node.left instanceof bait__ast__BlankIdent) {
		_t302 = bait__checker__Checker_decl_right_side(c, node)
		return 
	}
	if (!(node.left instanceof bait__ast__Ident)) {
		bait__checker__Checker_error(c, from_js_string("cannot declare a variable with a non-identifier"), node.pos)
		return 
	}
	const left = node.left
	let _r46_660 = bait__context__Scope_expect_unknown(c.scope, left.name)
	if (_r46_660.is_error) {
		const err = _r46_660.msg
		bait__checker__Checker_error(c, err, node.pos)
		return 
	}
_r46_660.data
	if (i32(left.name.length > 1) && eq(string_get(left.name, 0), u8("_"))) {
		bait__checker__Checker_error(c, from_js_string(`variable \`${left.name.str}\` cannot start with \`_\``), node.pos)
		return 
	}
	const typ = bait__checker__Checker_decl_right_side(c, node)
	bait__context__Scope_register(c.scope, left.name, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.variable, typ: typ, is_mut: left.is_mut }))
	_t305 = bait__checker__Checker_expr(c, node.left)
}

function bait__checker__Checker_decl_right_side(c, node) {
	let _r46_1131 = bait__checker__Checker_non_void_expr(c, node.right)
	if (_r46_1131.is_error) {
		const err = _r46_1131.msg
		return bait__ast__ERROR_TYPE
	}
	const typ = _r46_1131.data
	node.left_type = typ
	node.right_type = typ
	return typ
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
	if (eq(node.left_type, bait__ast__ERROR_TYPE) || eq(node.right_type, bait__ast__ERROR_TYPE)) {
		return 
	}
	if (node.left instanceof bait__ast__BlankIdent) {
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
		if (!bait__checker__Checker_expect_field_mutable(c, left)) {
			return 
		}
		while (left.expr instanceof bait__ast__SelectorExpr) {
			left = left.expr
			if (!bait__checker__Checker_expect_field_mutable(c, left)) {
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


const bait__checker__AttrValue = {
	none: 0,
	optional: 1,
	required: 2,
}
const bait__checker__FUN_ATTRS = new bait_Map({ data: new Map([[from_js_string("deprecated").str, bait__checker__AttrValue.optional], [from_js_string("deprecated_after").str, bait__checker__AttrValue.required], [from_js_string("export").str, bait__checker__AttrValue.required], [from_js_string("noreturn").str, bait__checker__AttrValue.none], [from_js_string("overload").str, bait__checker__AttrValue.required]]), length: 5 })
const bait__checker__STRUCT_FIELD_ATTRS = new bait_Map({ data: new Map([[from_js_string("required").str, bait__checker__AttrValue.none]]), length: 1 })
function bait__checker__Checker_check_attribute(c, attr, known_list) {
	if (!Map_contains(known_list, attr.name)) {
		bait__checker__Checker_warn(c, from_js_string(`unknown attribute "${attr.name.str}"`), attr.pos)
		return false
	}
	const val_req = Map_get_set(known_list, attr.name, 0)
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
	for (let _t318 = 0; _t318 < node.attrs.length; _t318++) {
		const attr = Array_get(node.attrs, _t318)
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
	if (Map_contains(rec_sym.overloads, attr.value)) {
		bait__checker__Checker_error(c, from_js_string(`"${attr.value.str}" was overloaded twice for type "${rec_sym.mix_name.str}"`), attr.pos)
		return 
	}
	Map_set(rec_sym.overloads, attr.value, node)
	if (is_math_overload) {
		Map_set(rec_sym.overloads, from_js_string(`${attr.value.str}=`), node)
	} else if (string_eq(attr.value, from_js_string("=="))) {
		Map_set(rec_sym.overloads, from_js_string("!="), node)
	}
}

function bait__checker__Checker_attr_export(c, attr) {
	if (Array_contains_string(c.export_names, attr.value)) {
		bait__checker__Checker_error(c, from_js_string(`@export name "${attr.value.str}" is already used`), attr.pos)
		return 
	}
	Array_push(c.export_names, attr.value)
}

function bait__checker__Checker_check_fun_attrs_on_call(c, call, attrs) {
	let is_deprecated = false
	let depr_attr = new bait__ast__Attribute({})
	let depr_date_attr = new bait__ast__Attribute({})
	for (let _t326 = 0; _t326 < attrs.length; _t326++) {
		const attr = Array_get(attrs, _t326)
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
		let depr_message = from_js_string(`function "${bait__ast__CallExpr_full_name(call).str}" `)
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
	for (let _t331 = 0; _t331 < node.fields.length; _t331++) {
		const field = Array_get(node.fields, _t331)
		for (let _t331 = 0; _t331 < field.attrs.length; _t331++) {
			const attr = Array_get(field.attrs, _t331)
			if (!bait__checker__Checker_check_attribute(c, attr, bait__checker__STRUCT_FIELD_ATTRS)) {
				continue
			}
			if (string_eq(attr.name, from_js_string("required")) && !(field.expr instanceof bait__ast__InvalidExpr)) {
				bait__checker__Checker_error(c, from_js_string("@required on field with default value is redundant"), attr.pos)
			}
		}
	}
}


function bait__checker__Checker({ prefs = new bait__preference__Prefs({}), table = new bait__ast__Table({}), sema_ctx = null, gen_ctx = null, files = new bait_Array({ data: [], length: 0 }), file = new bait__ast__File({}), scope = new bait__context__Scope({}), path = from_js_string(""), pkg = from_js_string(""), pkg_alias = from_js_string(""), has_main_pkg_files = false, has_main_fun = false, cur_fun = new bait__ast__FunDecl({}), cur_concrete_types = new bait_Array({ data: [], length: 0 }), need_generic_resolve = false, cur_generic_names = new bait_Array({ data: [], length: 0 }), expected_type = 0, expecting_expr = false, is_index = false, is_lhs_assign = false, is_if_match_expr = false, is_sumtype_match = false, is_or_block = false, is_loop = false, returns = false, export_names = new bait_Array({ data: [], length: 0 }), infos = new bait_Array({ data: [], length: 0 }), warnings = new bait_Array({ data: [], length: 0 }), errors = new bait_Array({ data: [], length: 0 }) }) {
	this.prefs = prefs
	this.table = table
	this.sema_ctx = sema_ctx
	this.gen_ctx = gen_ctx
	this.files = files
	this.file = file
	this.scope = scope
	this.path = path
	this.pkg = pkg
	this.pkg_alias = pkg_alias
	this.has_main_pkg_files = has_main_pkg_files
	this.has_main_fun = has_main_fun
	this.cur_fun = cur_fun
	this.cur_concrete_types = cur_concrete_types
	this.need_generic_resolve = need_generic_resolve
	this.cur_generic_names = cur_generic_names
	this.expected_type = expected_type
	this.expecting_expr = expecting_expr
	this.is_index = is_index
	this.is_lhs_assign = is_lhs_assign
	this.is_if_match_expr = is_if_match_expr
	this.is_sumtype_match = is_sumtype_match
	this.is_or_block = is_or_block
	this.is_loop = is_loop
	this.returns = returns
	this.export_names = export_names
	this.infos = infos
	this.warnings = warnings
	this.errors = errors
}
function bait__checker__Checker_check_files(c, files) {
	c.files = files
	for (let _t333 = 0; _t333 < files.length; _t333++) {
		let f = Array_get(files, _t333)
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
		for (let _t333 = 0; _t333 < files.length; _t333++) {
			const f = Array_get(files, _t333)
			if (eq(f.generic_funs.length, 0)) {
				continue
			}
			bait__checker__Checker_change_file(c, f)
			bait__checker__Checker_resolve_generics_funs(c)
		}
		resolve_runs += 1
	}
	if (c.prefs.is_test) {
		bait__checker__Checker_change_file(c, Array_last(files))
		if (eq(c.gen_ctx.test_fun_names.length, 0)) {
			bait__checker__Checker_generic_error(c, from_js_string(`${c.path.str} contains no tests`))
			return 
		}
		return 
	}
	if (c.prefs.is_library || c.prefs.is_script) {
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
	c.pkg = file.pkg_name
	c.pkg_alias = string_all_after_last(file.pkg_name, from_js_string("."))
	c.scope = new bait__context__Scope({ parent: Map_get_set(c.sema_ctx.scopes, c.pkg, null) })
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
	for (let _t339 = 0; _t339 < imports.length; _t339++) {
		const imp = Array_get(imports, _t339)
		if (!eq(imp.lang, bait__ast__Language.bait) && !eq(c.file.lang, imp.lang)) {
			bait__checker__Checker_warn(c, from_js_string(`${bait__ast__Language_str(imp.lang).str} imports should be in .${bait__ast__Language_ext(imp.lang).str}.bt files`), imp.pos)
		}
		if (eq(imp.lang, bait__ast__Language.c)) {
			continue
		}
		bait__context__Scope_register_unique(c.scope, imp.alias, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.package_ }))
	}
	bait__checker__Checker_check_scope_redefs(c, c.scope)
}

function bait__checker__Checker_open_scope(c) {
	c.scope = new bait__context__Scope({ parent: c.scope })
}

function bait__checker__Checker_close_scope(c) {
	c.scope = c.scope.parent
}

function bait__checker__Checker_find_in_scope(c, name, pkg) {
	if (i32(pkg.length > 0)) {
		return bait__context__Scope_get(Map_get_set(c.sema_ctx.scopes, pkg, null), name)
	}
	return bait__context__Scope_get_parent(c.scope, name)
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
	return bait__ast__STRING_TYPE
}

function bait__checker__Checker_comptime_if_condition(c, node) {
	if (node instanceof bait__ast__Ident) {
		if (string_eq(node.name, from_js_string("C"))) {
			return eq(c.prefs.backend, bait__preference__Backend.c)
		} else if (string_eq(node.name, from_js_string("JS"))) {
			return eq(c.prefs.backend, bait__preference__Backend.js)
		} else if (string_eq(node.name, from_js_string("LINUX"))) {
			return eq(c.prefs.os, bait__preference__OperatingSystem.linux)
		} else if (string_eq(node.name, from_js_string("WINDOWS"))) {
			return eq(c.prefs.os, bait__preference__OperatingSystem.windows)
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
	let _t345 = undefined
	if (expr instanceof bait__ast__AnonFun) {
		_t345 = bait__checker__Checker_anon_fun(c, expr)
	} else if (expr instanceof bait__ast__ArrayInit) {
		_t345 = bait__checker__Checker_array_init(c, expr)
	} else if (expr instanceof bait__ast__AsCast) {
		_t345 = bait__checker__Checker_as_cast(c, expr)
	} else if (expr instanceof bait__ast__BlankIdent) {
		_t345 = bait__checker__Checker_blank_ident(c, expr)
	} else if (expr instanceof bait__ast__BoolLiteral) {
		_t345 = bait__ast__BOOL_TYPE
	} else if (expr instanceof bait__ast__CallExpr) {
		_t345 = bait__checker__Checker_call_expr(c, expr)
	} else if (expr instanceof bait__ast__CharLiteral) {
		_t345 = bait__ast__U8_TYPE
	} else if (expr instanceof bait__ast__ComptimeVar) {
		_t345 = bait__checker__Checker_comptime_var(c, expr)
	} else if (expr instanceof bait__ast__EnumVal) {
		_t345 = bait__checker__Checker_enum_val(c, expr)
	} else if (expr instanceof bait__ast__FloatLiteral) {
		_t345 = bait__ast__F64_TYPE
	} else if (expr instanceof bait__ast__HashExpr) {
		_t345 = bait__checker__Checker_hash_expr(c, expr)
	} else if (expr instanceof bait__ast__Ident) {
		_t345 = bait__checker__Checker_ident(c, expr)
	} else if (expr instanceof bait__ast__IfMatch) {
		_t345 = bait__checker__Checker_if_match(c, expr)
	} else if (expr instanceof bait__ast__IndexExpr) {
		_t345 = bait__checker__Checker_index_expr(c, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		_t345 = bait__checker__Checker_infix_expr(c, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
		_t345 = bait__checker__Checker_integer_literal(c, expr)
	} else if (expr instanceof bait__ast__MapInit) {
		_t345 = bait__checker__Checker_map_init(c, expr)
	} else if (expr instanceof bait__ast__ParExpr) {
		_t345 = bait__checker__Checker_par_expr(c, expr)
	} else if (expr instanceof bait__ast__PrefixExpr) {
		_t345 = bait__checker__Checker_prefix_expr(c, expr)
	} else if (expr instanceof bait__ast__RangeExpr) {
		_t345 = bait__checker__Checker_range_expr(c, expr)
	} else if (expr instanceof bait__ast__SelectorExpr) {
		_t345 = bait__checker__Checker_selector_expr(c, expr)
	} else if (expr instanceof bait__ast__StringLiteral) {
		_t345 = bait__checker__Checker_string_literal(c, expr)
	} else if (expr instanceof bait__ast__StringInterLiteral) {
		_t345 = bait__checker__Checker_string_inter_literal(c, expr)
	} else if (expr instanceof bait__ast__StructInit) {
		_t345 = bait__checker__Checker_struct_init(c, expr)
	} else if (expr instanceof bait__ast__TmpVar) {
		_t345 = bait__ast__PLACEHOLDER_TYPE
	} else if (expr instanceof bait__ast__TypeOf) {
		_t345 = bait__checker__Checker_type_of(c, expr)
	} else if (expr instanceof bait__ast__Void) {
		_t345 = bait__ast__VOID_TYPE
	} else if (expr instanceof bait__ast__InvalidExpr) {
		_t345 = panic(from_js_string(`unexpected InvalidExpr at ${bait__token__Pos_str(expr.pos).str}`))
	}
	const t = _t345
	c.expected_type = expected_save
	return t
}

function bait__checker__Checker_non_void_expr(c, expr) {
	const typ = bait__checker__Checker_expr(c, expr)
	if (eq(typ, bait__ast__ERROR_TYPE)) {
		return error(from_js_string(""))
	}
	if (eq(typ, bait__ast__VOID_TYPE)) {
		bait__checker__Checker_error(c, from_js_string("expected non-void expression"), (expr).pos)
		return error(from_js_string(""))
	}
	return new Result({ data: typ })
}

function bait__checker__Checker_array_init(c, node) {
	if (eq(node.exprs.length, 0)) {
		if (eq(node.elem_type, bait__ast__PLACEHOLDER_TYPE)) {
			if (eq(c.expected_type, bait__ast__VOID_TYPE)) {
				bait__checker__Checker_error(c, from_js_string("cannot infer type of empty array"), node.pos)
				return bait__ast__ERROR_TYPE
			}
			node.typ = c.expected_type
			return node.typ
		}
		if (!(node.length_expr instanceof bait__ast__InvalidExpr)) {
			const typ = bait__checker__Checker_expr(c, node.length_expr)
			if (!bait__checker__Checker_check_types(c, typ, bait__ast__I32_TYPE)) {
				bait__checker__Checker_error(c, from_js_string(`expected i32, got ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
			}
		}
		if (!(node.cap_expr instanceof bait__ast__InvalidExpr)) {
			const typ = bait__checker__Checker_expr(c, node.cap_expr)
			if (!bait__checker__Checker_check_types(c, typ, bait__ast__I32_TYPE)) {
				bait__checker__Checker_error(c, from_js_string(`expected i32, got ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
			}
		}
		return node.typ
	}
	for (let i = 0; i < node.exprs.length; i++) {
		let e = Array_get(node.exprs, i)
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
		bait__context__Scope_update_type(c.scope, bait__ast__Ident_full_name(expr), node.target)
	}
	return node.target
}

function bait__checker__Checker_blank_ident(c, node) {
	if (!c.is_lhs_assign) {
		bait__checker__Checker_error(c, from_js_string("`_` is only usable for assignment"), node.pos)
	}
	return bait__ast__VOID_TYPE
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
		return bait__ast__ERROR_TYPE
	}
	if (!eq(sym.kind, bait__ast__TypeKind.enum_)) {
		bait__checker__Checker_error(c, from_js_string(`expected type is not an enum, got ${sym.mix_name.str}`), node.pos)
		return bait__ast__ERROR_TYPE
	}
	if (!sym.is_pub && string_contains(sym.mix_name, from_js_string(".")) && !string_eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`enum ${sym.mix_name.str} is private`), node.pos)
		return bait__ast__ERROR_TYPE
	}
	const info = sym.info
	if (!Array_contains_string(info.vals, node.val)) {
		bait__checker__Checker_error(c, from_js_string(`enum ${sym.mix_name.str} has no value ${node.val.str}`), node.pos)
		return bait__ast__ERROR_TYPE
	}
	node.name = sym.mix_name
	return node.typ
}

function bait__checker__Checker_hash_expr(c, node) {
	if (!eq(node.lang, c.file.lang)) {
		bait__checker__Checker_warn(c, from_js_string(`${bait__ast__Language_str(node.lang).str} code should be in .${bait__ast__Language_ext(node.lang).str}.bt files`), node.pos)
	}
	return bait__ast__VOID_TYPE
}

function bait__checker__Checker_ident(c, node) {
	let obj = bait__checker__Checker_find_in_scope(c, node.name, node.pkg)
	if (eq(obj.typ, bait__ast__PLACEHOLDER_TYPE)) {
		if (string_eq(node.name, c.pkg_alias)) {
			bait__checker__Checker_error(c, from_js_string(`unnecessary package prefix \`${c.pkg_alias.str}\``), node.pos)
			return bait__ast__ERROR_TYPE
		}
		bait__checker__Checker_error(c, from_js_string(`undefined ident \`${bait__ast__Ident_full_name(node).str}\``), node.pos)
		return bait__ast__ERROR_TYPE
	}
	if (eq(obj.kind, bait__context__ObjectKind.constant) || eq(obj.kind, bait__context__ObjectKind.static_)) {
		if (!obj.is_pub && !string_eq(obj.pkg, c.pkg)) {
			let _t371 = undefined
			if (eq(obj.kind, bait__context__ObjectKind.constant)) {
				_t371 = from_js_string("const")
			} else {
				_t371 = from_js_string("static")
			}
			const key = _t371
			bait__checker__Checker_error(c, from_js_string(`${key.str} \`${bait__ast__Ident_full_name(node).str}\` is private`), node.pos)
		}
		if (eq(obj.typ, bait__ast__VOID_TYPE)) {
			obj.typ = bait__checker__Checker_expr(c, obj.expr)
		}
		if (string_eq(node.pkg, from_js_string(""))) {
			node.pkg = obj.pkg
		}
	}
	node.is_mut = obj.is_mut
	return obj.typ
}

function bait__checker__Checker_integer_literal(c, node) {
	if (!c.is_index && bait__ast__Type_is_int(c.expected_type)) {
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
		let key = Array_get(node.keys, i)
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
	if (eq(typ, bait__ast__ERROR_TYPE)) {
		return typ
	}
	const sym = bait__ast__Table_get_sym(c.table, typ)
	if (eq(node.op, bait__token__Token.minus) && !eq(sym.kind, bait__ast__TypeKind.number)) {
		bait__checker__Checker_error(c, from_js_string(`cannot negate ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
		return bait__ast__ERROR_TYPE
	}
	if (eq(node.op, bait__token__Token.key_not) && !eq(typ, bait__ast__BOOL_TYPE)) {
		bait__checker__Checker_error(c, from_js_string(`cannot use \`not\` on ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
		return bait__ast__ERROR_TYPE
	}
	if (eq(node.op, bait__token__Token.mul)) {
		if (eq(bait__ast__Type_get_nr_amp(typ), 0)) {
			bait__checker__Checker_error(c, from_js_string(`cannot dereference ${bait__ast__Table_type_name(c.table, typ).str}`), node.pos)
			return bait__ast__ERROR_TYPE
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
	if (eq(node.expr_type, bait__ast__ERROR_TYPE)) {
		return bait__ast__ERROR_TYPE
	}
	const gen_sym = bait__ast__Table_get_sym(c.table, node.expr_type)
	const sym = bait__ast__Table_get_final_sym(c.table, bait__ast__Table_unwrap_generic(c.table, gen_sym))
	if (Array_contains_bait__ast__TypeKind(new bait_Array({ data: [bait__ast__TypeKind.struct_, bait__ast__TypeKind.interface_, bait__ast__TypeKind.array, bait__ast__TypeKind.string, bait__ast__TypeKind.map], length: 5 }), sym.kind)) {
		const field = bait__ast__TypeSymbol_find_field(sym, node.field_name, c.table)
		if (eq(field.name.length, 0)) {
			bait__checker__Checker_error(c, from_js_string(`${sym.mix_name.str} has no field ${node.field_name.str}`), node.pos)
			return bait__ast__ERROR_TYPE
		}
		if (!field.is_pub && !string_eq(sym.pkg, c.pkg)) {
			bait__checker__Checker_error(c, from_js_string(`field ${sym.mix_name.str}.${node.field_name.str} is private`), node.pos)
		}
		const fsym = bait__ast__Table_get_sym(c.table, field.typ)
		if (eq(fsym.kind, bait__ast__TypeKind.generic)) {
			const gen_info = gen_sym.info
			const info = sym.info
			return Array_get(gen_info.concrete_types, Array_index_string(info.generic_names, fsym.mix_name))
		}
		return field.typ
	}
	if (eq(sym.kind, bait__ast__TypeKind.sum_type)) {
		bait__checker__Checker_error(c, from_js_string(`cast to the variant before accessing field of sumtype ${sym.mix_name.str}`), node.pos)
		return bait__ast__VOID_TYPE
	}
	bait__checker__Checker_error(c, from_js_string(`cannot select from ${bait__ast__Table_type_name(c.table, node.expr_type).str}`), node.pos)
	return bait__ast__ERROR_TYPE
}

function bait__checker__Checker_string_literal(c, node) {
	return bait__ast__STRING_TYPE
}

function bait__checker__Checker_string_inter_literal(c, node) {
	for (let _t391 = 0; _t391 < node.exprs.length; _t391++) {
		let e = Array_get(node.exprs, _t391)
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
		if (node.is_test) {
			Array_push(c.gen_ctx.test_fun_names, node.name)
		} else if (c.prefs.is_test) {
			if (string_eq(node.name, from_js_string("testsuite_begin"))) {
				c.gen_ctx.has_test_begin = true
			} else if (string_eq(node.name, from_js_string("testsuite_end"))) {
				c.gen_ctx.has_test_end = true
			}
		}
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
	for (let _t401 = 0; _t401 < params.length; _t401++) {
		const p = Array_get(params, _t401)
		let _r51_2557 = bait__context__Scope_expect_unknown(c.scope, p.name)
		if (_r51_2557.is_error) {
			const err = _r51_2557.msg
			bait__checker__Checker_error(c, err, p.pos)
			continue
		}
_r51_2557.data
		const sym = bait__ast__Table_get_sym(c.table, p.typ)
		if (!bait__checker__Checker_does_type_exist(c, sym, p.pos)) {
			continue
		}
		if (eq(sym.kind, bait__ast__TypeKind.fun_)) {
			const info = sym.info
			bait__context__Scope_register(c.scope, p.name, new bait__context__ScopeObject({ typ: p.typ, kind: bait__context__ObjectKind.function, pkg: c.pkg, return_type: info.return_type, params: bait__ast__FunInfo_to_params(info) }))
		} else {
			bait__context__Scope_register(c.scope, p.name, new bait__context__ScopeObject({ typ: p.typ, is_mut: p.is_mut, kind: bait__context__ObjectKind.variable }))
		}
	}
}

function bait__checker__Checker_check_main_fun(c, stmts) {
	for (let _t403 = 0; _t403 < stmts.length; _t403++) {
		const stmt = Array_get(stmts, _t403)
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
	const obj = bait__checker__Checker_find_in_scope(c, node.name, node.pkg)
	if (!eq(obj.kind, bait__context__ObjectKind.function)) {
		bait__checker__Checker_error(c, from_js_string(`unknown function ${bait__ast__CallExpr_full_name(node).str}`), node.pos)
		return bait__ast__ERROR_TYPE
	}
	if (eq(node.pkg.length, 0) && !string_eq(obj.pkg, from_js_string("main")) && !string_eq(obj.pkg, from_js_string("builtin"))) {
		node.pkg = obj.pkg
	}
	if (!obj.is_pub && !string_eq(obj.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`function \`${bait__ast__CallExpr_full_name(node).str}\` is private`), node.pos)
	}
	node.noreturn = obj.noreturn
	node.return_type = obj.return_type
	bait__checker__Checker_check_fun_attrs_on_call(c, node, obj.attrs)
	if (!eq(node.args.length, obj.params.length)) {
		bait__checker__Checker_error(c, from_js_string(`expected ${i32_str(obj.params.length).str} arguments but got ${i32_str(node.args.length).str}`), node.pos)
		return node.return_type
	}
	if (string_eq(node.name, from_js_string("println")) || string_eq(node.name, from_js_string("eprintln")) || string_eq(node.name, from_js_string("print")) || string_eq(node.name, from_js_string("eprint"))) {
		let _r51_4321 = bait__checker__Checker_non_void_expr(c, Array_get(node.args, 0).expr)
		if (_r51_4321.is_error) {
			const err = _r51_4321.msg
			_r51_4321.data = bait__ast__ERROR_TYPE
		}
		Array_get(node.args, 0).typ = _r51_4321.data
		return bait__ast__VOID_TYPE
	}
	bait__checker__Checker_call_args(c, node, 0, obj.generic_names, obj.params)
	bait__checker__Checker_or_block(c, node)
	bait__checker__Checker_set_conc_types(c, node, obj.generic_names, obj.key)
	if (string_eq(node.name, from_js_string("error"))) {
		node.return_type = c.cur_fun.return_type
	}
	return node.return_type
}

function bait__checker__Checker_method_call(c, node) {
	const left_expr_type = bait__checker__Checker_expr(c, node.left)
	if (eq(left_expr_type, bait__ast__ERROR_TYPE)) {
		return bait__ast__ERROR_TYPE
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
				if (!eq(field_sym.kind, bait__ast__TypeKind.fun_)) {
					bait__checker__Checker_error(c, from_js_string(`struct field \`${field.name.str}\` is not a method`), node.pos)
					return bait__ast__ERROR_TYPE
				}
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
		bait__checker__Checker_error(c, from_js_string(`method ${node.name.str} not found on type ${left_sym.mix_name.str}`), node.pos)
		return bait__ast__ERROR_TYPE
	}
	if (!def.is_pub && !string_eq(left_sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`method ${def.name.str} is private`), node.pos)
	}
	node.lang = def.lang
	node.noreturn = def.noreturn
	node.return_type = def.return_type
	node.left_type = left_expr_type
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
		} else if (i32(bait__ast__Type_get_nr_amp(Array_get(def.params, 0).typ) < bait__ast__Type_get_nr_amp(left_expr_type))) {
			node.left = new bait__ast__PrefixExpr({ op: bait__token__Token.mul, right: node.left })
			node.left_type = bait__ast__Type_set_nr_amp(node.left_type, 0)
		}
	}
	bait__checker__Checker_check_fun_attrs_on_call(c, node, def.attrs)
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
	bait__checker__Checker_call_args(c, node, arg_offset, def.generic_names, def.params)
	if (eq(left_sym.kind, bait__ast__TypeKind.array) && Array_contains_string(new bait_Array({ data: [from_js_string("filter"), from_js_string("reverse"), from_js_string("slice"), from_js_string("copy"), from_js_string("from_js_arr")], length: 5 }), node.name)) {
		return left_expr_type
	}
	if (eq(left_sym.kind, bait__ast__TypeKind.array) && string_eq(node.name, from_js_string("last"))) {
		return (left_sym.info).elem_type
	}
	bait__checker__Checker_or_block(c, node)
	bait__checker__Checker_set_conc_types(c, node, def.generic_names, def.key)
	return node.return_type
}

function bait__checker__Checker_set_conc_types(c, node, generic_names, key) {
	if (eq(node.concrete_types.length, 0)) {
		return 
	}
	c.need_generic_resolve = bait__ast__Table_register_concrete(c.table, key, node.concrete_types) || c.need_generic_resolve
	const ret_sym = bait__ast__Table_get_sym(c.table, node.return_type)
	if (eq(ret_sym.kind, bait__ast__TypeKind.generic)) {
		const idx = Array_index_string(generic_names, ret_sym.mix_name)
		node.return_type = Array_get(node.concrete_types, idx)
	}
}

function bait__checker__Checker_call_args(c, node, poffset, generic_names, params) {
	const should_resolve_generics = !eq(generic_names.length, node.concrete_types.length)
	let save_as_concrete = false
	for (let i = 0; i < node.args.length; i++) {
		let arg = Array_get(node.args, i)
		const param = Array_get(params, i32(i + poffset))
		let param_type = param.typ
		const psym = bait__ast__Table_get_sym(c.table, param_type)
		if (should_resolve_generics && eq(psym.kind, bait__ast__TypeKind.generic)) {
			const gi = Array_index_string(generic_names, psym.mix_name)
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
		if (eq(arg.typ, bait__ast__ERROR_TYPE) || (eq(arg.typ, bait__ast__VOID_TYPE) && !(arg.expr instanceof bait__ast__CallExpr))) {
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
					bait__checker__Checker_warn(c, from_js_string(`unnecessary \`mut\` for argument \`${expr.name.str}\``), expr.pos)
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
			bait__checker__Checker_error(c, from_js_string(`\`${node.name.str}()\` does not return a result, it cannot have an \`or {}\` block OR \`!\``), node.pos)
		}
		return 
	}
	if (eq(node.or_block.kind, bait__ast__OrKind.none)) {
		bait__checker__Checker_error(c, from_js_string(`\`${node.name.str}()\` returns a result, it requires an \`or {}\` block OR propagation \`!\``), node.pos)
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
	bait__checker__Checker_open_scope(c)
	bait__context__Scope_register(c.scope, from_js_string("err"), new bait__context__ScopeObject({ kind: bait__context__ObjectKind.variable, typ: bait__ast__STRING_TYPE }))
	const last_stmt_type = bait__checker__Checker_stmts_with_return(c, node.or_block.stmts, node.return_type)
	bait__checker__Checker_close_scope(c)
	c.is_or_block = false
	if (eq(last_stmt_type, bait__ast__ERROR_TYPE)) {
		return 
	}
	if (!bait__checker__Checker_check_types(c, last_stmt_type, ret_sym.parent)) {
		if (bait__checker__has_toplevel_return(node.or_block.stmts)) {
			return 
		}
		const msg = from_js_string(`\`or\` bock must:
  - Provide a default value of type \`${bait__ast__Table_type_name(c.table, ret_sym.parent).str}\`, OR
  - Change the control-flow (return/continue/break), OR
  - Call a @noreturn function`)
		bait__checker__Checker_error(c, msg, node.pos)
	}
}

function bait__checker__Checker_resolve_generics_funs(c) {
	for (let _t451 = 0; _t451 < c.file.generic_funs.length; _t451++) {
		let fn = Array_get(c.file.generic_funs, _t451)
		const gtypes = Map_get_set(c.table.generic_fun_types, fn.key, new bait_Array({ data: [], length: 0 }))
		for (let _t451 = 0; _t451 < gtypes.length; _t451++) {
			const concrete = Array_get(gtypes, _t451)
			c.cur_concrete_types = concrete
			bait__checker__Checker_fun_instance(c, fn)
		}
	}
}


function bait__checker__Checker_if_match(c, node) {
	const was_if_match_expr = c.is_if_match_expr
	if (c.is_if_match_expr) {
		node.is_expr = true
	}
	if (node.is_expr) {
		c.is_if_match_expr = true
		node.typ = c.expected_type
	}
	let cond_sym = new bait__ast__TypeSymbol({})
	let sumtype_match = false
	if (node.is_match) {
		let _t455 = undefined
		if (node.has_else) {
			_t455 = 2
		} else {
			_t455 = 1
		}
		const min_branches = _t455
		if (i32(node.branches.length < min_branches)) {
			bait__checker__Checker_error(c, from_js_string("match needs at least one non-else branch"), node.pos)
			return bait__ast__ERROR_TYPE
		}
		const cond_type = bait__checker__Checker_expr(c, (Array_get(node.branches, 0).cond).left)
		cond_sym = bait__ast__Table_get_sym(c.table, cond_type)
		sumtype_match = eq(cond_sym.kind, bait__ast__TypeKind.sum_type)
	}
	let branch_exprs = new bait_Array({ data: [], length: 0 })
	let nr_branches_return = 0
	for (let i = 0; i < node.branches.length; i++) {
		const branch = Array_get(node.branches, i)
		bait__checker__Checker_open_scope(c)
		c.is_sumtype_match = sumtype_match
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
				if (!c.is_sumtype_match && !eq(cond_type, bait__ast__BOOL_TYPE) && !eq(cond_type, bait__ast__ERROR_TYPE)) {
					bait__checker__Checker_error(c, from_js_string(`expected \`bool\`, got \`${bait__ast__Table_type_name(c.table, cond_type).str}\``), node.pos)
				}
			}
		} else if (node.is_comptime) {
			node.ct_eval_branch = i
		}
		c.is_sumtype_match = false
		if (node.is_expr) {
			const last_type = bait__checker__Checker_stmts_with_return(c, branch.stmts, node.typ)
			bait__checker__Checker_close_scope(c)
			if (eq(last_type, bait__ast__ERROR_TYPE)) {
				continue
			}
			if (eq(branch.stmts.length, 0)) {
				bait__checker__Checker_error(c, from_js_string("branch does not return a value"), branch.pos)
				continue
			}
			const last = Array_last(branch.stmts)
			if (bait__checker__is_noreturn(last)) {
				continue
			}
			if (bait__checker__Checker_stmt_returns(c, last)) {
				nr_branches_return += 1
			} else {
				bait__checker__Checker_error(c, from_js_string("branch does not return a value"), branch.pos)
				continue
			}
			if (eq(node.typ, bait__ast__VOID_TYPE)) {
				node.typ = last_type
			} else if (!bait__checker__Checker_check_types(c, last_type, node.typ)) {
				bait__checker__Checker_error(c, from_js_string(`branch returns ${bait__ast__Table_type_name(c.table, last_type).str}, expected ${bait__ast__Table_type_name(c.table, node.typ).str}`), branch.pos)
			}
		} else {
			bait__checker__Checker_stmts(c, branch.stmts)
			bait__checker__Checker_close_scope(c)
			if (bait__checker__has_toplevel_return(branch.stmts)) {
				nr_branches_return += 1
			}
		}
		if (node.is_comptime && i32(node.ct_eval_branch >= 0)) {
			break
		}
	}
	if (node.is_match) {
		bait__checker__Checker_check_exhaustive_match(c, cond_sym.info, branch_exprs, node)
	}
	c.returns = eq(nr_branches_return, node.branches.length)
	c.is_if_match_expr = was_if_match_expr
	return node.typ
}

function bait__checker__Checker_check_exhaustive_match(c, info, branch_exprs, node) {
	let is_exhaustive = true
	let unhandled = new bait_Array({ data: [], length: 0 })
	if (info instanceof bait__ast__EnumInfo) {
		for (let _t472 = 0; _t472 < info.vals.length; _t472++) {
			const val = Array_get(info.vals, _t472)
			if (!Array_contains_string(branch_exprs, val)) {
				is_exhaustive = false
				Array_push(unhandled, val)
			}
		}
	} else if (info instanceof bait__ast__SumTypeInfo) {
		for (let _t473 = 0; _t473 < info.variants.length; _t473++) {
			const typ = Array_get(info.variants, _t473)
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


function bait__checker__Checker_index_expr(c, node) {
	node.left_type = bait__checker__Checker_expr(c, node.left)
	const was_index = c.is_index
	c.is_index = true
	const idx_type = bait__checker__Checker_expr(c, node.index)
	c.is_index = was_index
	const sym = bait__ast__Table_get_sym(c.table, node.left_type)
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		if (node.index instanceof bait__ast__RangeExpr) {
			if (c.is_lhs_assign) {
				bait__checker__Checker_error(c, from_js_string("cannot assign to array slice"), node.pos)
				return bait__ast__ERROR_TYPE
			}
			return node.left_type
		}
		bait__checker__Checker_check_int_index(c, idx_type, node.pos)
		const info = sym.info
		return info.elem_type
	}
	if (node.index instanceof bait__ast__RangeExpr) {
		bait__checker__Checker_error(c, from_js_string("slicing is only supported for arrays"), node.pos)
		return bait__ast__ERROR_TYPE
	}
	if (eq(sym.kind, bait__ast__TypeKind.map)) {
		if (eq(idx_type, bait__ast__ERROR_TYPE)) {
			return bait__ast__ERROR_TYPE
		}
		const info = sym.info
		if (!eq(idx_type, info.key_type)) {
			bait__checker__Checker_error(c, from_js_string(`invalid map index \`${bait__ast__Table_type_name(c.table, idx_type).str}\`, expected \`${bait__ast__Table_type_name(c.table, info.key_type).str}\``), node.pos)
			return bait__ast__ERROR_TYPE
		}
		return info.val_type
	}
	if (eq(sym.kind, bait__ast__TypeKind.string)) {
		if (c.is_lhs_assign) {
			bait__checker__Checker_error(c, from_js_string("cannot assign to string index"), node.pos)
			return bait__ast__ERROR_TYPE
		}
		bait__checker__Checker_check_int_index(c, idx_type, node.pos)
		return bait__ast__U8_TYPE
	}
	return node.left_type
}

function bait__checker__Checker_range_expr(c, node) {
	if (!c.is_index) {
		bait__checker__Checker_error(c, from_js_string("range expression is only allowed for indexing"), node.pos)
		return bait__ast__ERROR_TYPE
	}
	if (!(node.low instanceof bait__ast__Void)) {
		const lt = bait__checker__Checker_expr(c, node.low)
		bait__checker__Checker_check_int_index(c, lt, node.pos)
	}
	if (!(node.high instanceof bait__ast__Void)) {
		const ht = bait__checker__Checker_expr(c, node.high)
		bait__checker__Checker_check_int_index(c, ht, node.pos)
	}
	return bait__ast__VOID_TYPE
}

function bait__checker__Checker_check_int_index(c, typ, pos) {
	if (eq(typ, bait__ast__ERROR_TYPE)) {
		return 
	}
	if (!bait__checker__Checker_check_types(c, typ, bait__ast__I32_TYPE)) {
		bait__checker__Checker_error(c, from_js_string(`non-integer index \`${bait__ast__Table_type_name(c.table, typ).str}\``), pos)
	}
}


function bait__checker__Checker_infix_expr(c, node) {
	node.left_type = bait__checker__Checker_expr(c, node.left)
	if (eq(node.left_type, bait__ast__ERROR_TYPE)) {
		return bait__ast__ERROR_TYPE
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
	if (eq(node.right_type, bait__ast__ERROR_TYPE)) {
		return bait__ast__ERROR_TYPE
	}
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
		node.right = new bait__ast__AsCast({ expr: node.right, bait_target: node.left_type })
	}
	if (bait__token__Token_is_compare(node.op)) {
		return bait__ast__BOOL_TYPE
	}
	const lsym = bait__ast__Table_get_sym(c.table, node.left_type)
	const overload = bait__ast__Table_get_overload(c.table, lsym, bait__token__Token_js_repr(node.op))
	if (i32(overload.name.length > 0)) {
		return overload.return_type
	}
	return node.left_type
}

function bait__checker__Checker_is_sumtype_variant_infix(c, node) {
	let right = node.right
	if (string_eq(right.pkg, from_js_string("")) && !string_eq(c.pkg, from_js_string("main")) && !string_eq(c.pkg, from_js_string("builtin"))) {
		right.pkg = c.pkg
	}
	node.right_type = bait__ast__Table_get_idx(c.table, bait__ast__Ident_full_name(right))
	if (node.left instanceof bait__ast__Ident) {
		const left = node.left
		bait__context__Scope_update_type(c.scope, bait__ast__Ident_full_name(left), node.right_type)
		return bait__ast__BOOL_TYPE
	}
	if (node.left instanceof bait__ast__SelectorExpr) {
		const left = node.left
		const name = string_add(string_add(bait__ast__Ident_full_name((left.expr)), from_js_string(".")), left.field_name)
		bait__context__Scope_update_type(c.scope, name, node.right_type)
		return bait__ast__BOOL_TYPE
	}
	return bait__ast__BOOL_TYPE
}


function bait__checker__Checker_expect_mutable(c, e) {
	if (e instanceof bait__ast__Ident) {
		if (!e.is_mut) {
			bait__checker__Checker_error(c, from_js_string(`\`${bait__ast__Ident_full_name(e).str}\` is immutable`), e.pos)
		}
		return 
	}
	if (e instanceof bait__ast__SelectorExpr) {
		bait__checker__Checker_expect_mutable(c, e.expr)
		_t507 = bait__checker__Checker_expect_field_mutable(c, e)
	}
}

function bait__checker__Checker_expect_field_mutable(c, left) {
	const sym = bait__ast__Table_get_sym(c.table, left.expr_type)
	const field = bait__ast__TypeSymbol_find_field(sym, left.field_name, c.table)
	if ((!field.is_mut || !string_eq(sym.pkg, c.pkg)) && !field.is_global) {
		bait__checker__Checker_error(c, from_js_string(`field \`${sym.mix_name.str}.${left.field_name.str}\` is immutable`), left.pos)
		return false
	}
	return true
}


function bait__checker__Checker_toplevel_redefinitions(c) {
	const _t509 = Map_keys(c.sema_ctx.scopes)
	for (let _t510 = 0; _t510 < _t509.length; _t510++) {
		const pkg = Array_get(_t509, _t510)
		const scope = Map_get_set(c.sema_ctx.scopes, pkg, null)
		c.pkg = pkg
		bait__checker__Checker_check_scope_redefs(c, scope)
	}
}

function bait__checker__Checker_check_scope_redefs(c, scope) {
	const redefined_syms = bait__context__Scope_get_unique_redefinitions(scope)
	for (let _t510 = 0; _t510 < redefined_syms.length; _t510++) {
		const redef = Array_get(redefined_syms, _t510)
		bait__checker__Checker_generic_error(c, from_js_string(`redefinition of \`${redef.str}\``))
		bait__checker__Checker_add_conflicts(c, redef)
	}
}

function bait__checker__Checker_add_conflicts(c, name) {
	for (let _t510 = 0; _t510 < c.files.length; _t510++) {
		const file = Array_get(c.files, _t510)
		if (!string_eq(file.pkg_name, c.pkg) && !string_eq(file.pkg_name, from_js_string("builtin"))) {
			continue
		}
		for (let _t511 = 0; _t511 < file.imports.length; _t511++) {
			const imp = Array_get(file.imports, _t511)
			if (string_eq(imp.alias, name)) {
				bait__checker__Checker_conflict_err(c, file.path, imp.pos, from_js_string(`import ${imp.name.str}`))
			}
		}
		for (let _t512 = 0; _t512 < file.stmts.length; _t512++) {
			const stmt = Array_get(file.stmts, _t512)
			if (bait__checker__is_redef(name, stmt)) {
				bait__checker__Checker_conflict_err(c, file.path, (stmt).pos, bait__checker__Checker_get_signature(c, stmt))
			}
		}
	}
}

function bait__checker__Checker_conflict_err(c, path, pos, signature) {
	Array_push(c.errors, new bait__errors__Message({ kind: bait__errors__Kind.info, path: path, pos: pos, title: from_js_string("conflict"), msg: signature }))
}

function bait__checker__Checker_get_signature(c, s) {
	let stmt = s
	if (stmt instanceof bait__ast__ConstDecl) {
		bait__checker__Checker_const_decl(c, stmt)
		const typ = bait__ast__Table_type_name(c.table, stmt.typ)
		return from_js_string(`const ${typ.str}`)
	} else if (stmt instanceof bait__ast__EnumDecl) {
		return from_js_string("enum")
	} else if (stmt instanceof bait__ast__FunDecl) {
		return bait__ast__Table_fun_decl_signature(c.table, stmt)
	} else if (stmt instanceof bait__ast__StaticDecl) {
		bait__checker__Checker_static_decl(c, stmt)
		const typ = bait__ast__Table_type_name(c.table, stmt.typ)
		return from_js_string(`static ${typ.str}`)
	} else if (stmt instanceof bait__ast__StructDecl) {
		return from_js_string("struct")
	} else if (stmt instanceof bait__ast__TypeDecl) {
		return bait__ast__Table_type_decl_signature(c.table, stmt)
	} else {
	}
	return from_js_string("")
}

function bait__checker__is_redef(name, stmt) {
	let _t515 = undefined
	if (stmt instanceof bait__ast__ConstDecl) {
		_t515 = string_eq(stmt.name, name)
	} else if (stmt instanceof bait__ast__EnumDecl) {
		_t515 = string_eq(stmt.name, name)
	} else if (stmt instanceof bait__ast__FunDecl) {
		_t515 = eq(stmt.lang, bait__ast__Language.bait) && string_eq(stmt.name, name)
	} else if (stmt instanceof bait__ast__StaticDecl) {
		_t515 = string_eq(stmt.name, name)
	} else if (stmt instanceof bait__ast__StructDecl) {
		_t515 = string_eq(stmt.name, name)
	} else if (stmt instanceof bait__ast__TypeDecl) {
		_t515 = string_eq(stmt.name, name)
	} else {
		_t515 = false
	}
	return _t515
}


function bait__checker__Checker_return_stmt(c, node) {
	c.expected_type = bait__ast__Table_unwrap_result(c.table, c.cur_fun.return_type)
	const expr_type = bait__checker__Checker_expr(c, node.expr)
	if (!bait__checker__Checker_check_types(c, expr_type, c.cur_fun.return_type)) {
		let msg = from_js_string("")
		if (eq(c.cur_fun.return_type, bait__ast__VOID_TYPE)) {
			msg = from_js_string(`function \`${c.cur_fun.name.str}\` should return nothing`)
		} else {
			msg = from_js_string(`expected return value of type ${bait__ast__Table_type_name(c.table, c.cur_fun.return_type).str}`)
		}
		if (expr_type > bait__ast__VOID_TYPE) {
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

function bait__checker__Checker_stmts_with_return(c, stmts, expected) {
	for (let i = 0; i32(i < i32(stmts.length - 1)); i += 1) {
		bait__checker__Checker_stmt(c, Array_get(stmts, i))
	}
	if (eq(stmts.length, 0)) {
		return bait__ast__VOID_TYPE
	}
	const was_expecting_expr = c.expecting_expr
	c.expecting_expr = true
	c.expected_type = expected
	let last = Array_get(stmts, i32(stmts.length - 1))
	bait__checker__Checker_stmt(c, last)
	c.expecting_expr = was_expecting_expr
	let _t523 = undefined
	if (last instanceof bait__ast__ExprStmt) {
		_t523 = last.typ
	} else if (last instanceof bait__ast__IfMatch) {
		_t523 = last.typ
	} else {
		_t523 = bait__ast__VOID_TYPE
	}
	return _t523
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
	for (let _t525 = 0; _t525 < stmts.length; _t525++) {
		const stmt = Array_get(stmts, _t525)
		if (stmt instanceof bait__ast__ReturnStmt) {
			return true
		}
		if (bait__checker__is_noreturn(stmt)) {
			return true
		}
	}
	return false
}

function bait__checker__is_noreturn(stmt) {
	if (stmt instanceof bait__ast__ExprStmt) {
		const expr = stmt.expr
		let _t529 = undefined
		if (expr instanceof bait__ast__CallExpr) {
			_t529 = expr.noreturn
		} else {
			_t529 = false
		}
		return _t529
	}
	if (stmt instanceof bait__ast__LoopControlStmt) {
		return true
	}
	return false
}


function bait__checker__Checker_stmts(c, stmts) {
	for (let _t530 = 0; _t530 < stmts.length; _t530++) {
		let stmt = Array_get(stmts, _t530)
		bait__checker__Checker_stmt(c, stmt)
	}
}

function bait__checker__Checker_stmt(c, stmt) {
	if (stmt instanceof bait__ast__AssertStmt) {
		bait__checker__Checker_assert_stmt(c, stmt)
	} else if (stmt instanceof bait__ast__AssignStmt) {
		bait__checker__Checker_assign_stmt(c, stmt)
	} else if (stmt instanceof bait__ast__Block) {
		bait__checker__Checker_block(c, stmt)
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
	} else if (stmt instanceof bait__ast__StaticDecl) {
		bait__checker__Checker_static_decl(c, stmt)
	} else if (stmt instanceof bait__ast__IfMatch) {
		_t532 = bait__checker__Checker_if_match(c, stmt)
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
		bait__checker__Checker_error(c, from_js_string(`unexpected stmt: ${bait__ast__InvalidStmt_str(s, 0).str}`), s.pos)
	}
	c.expected_type = bait__ast__VOID_TYPE
}

function bait__checker__Checker_assert_stmt(c, node) {
	const typ = bait__checker__Checker_expr(c, node.expr)
	if (!bait__checker__Checker_check_types(c, typ, bait__ast__BOOL_TYPE)) {
		bait__checker__Checker_error(c, from_js_string("assert must be of type bool"), node.pos)
	}
}

function bait__checker__Checker_block(c, node) {
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_stmts(c, node.stmts)
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_const_decl(c, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return 
	}
	let _r58_1621 = bait__checker__Checker_non_void_expr(c, node.expr)
	if (_r58_1621.is_error) {
		const err = _r58_1621.msg
		return 
	}
	node.typ = _r58_1621.data
	bait__context__Scope_update_type(Map_get_set(c.sema_ctx.scopes, c.pkg, null), node.name, node.typ)
}

function bait__checker__Checker_expr_stmt(c, node) {
	let expr = node.expr
	node.typ = bait__checker__Checker_expr(c, expr)
	if (c.expecting_expr) {
		return 
	}
	if (expr instanceof bait__ast__CallExpr) {
		if (expr.return_type > bait__ast__VOID_TYPE) {
			bait__checker__Checker_warn(c, from_js_string(`use \`_ = ${bait__ast__CallExpr_full_name(expr).str}()\` to explicitly ignore the return value`), expr.pos)
		}
		return 
	}
	if (c.is_if_match_expr || c.is_or_block || expr instanceof bait__ast__IfMatch || expr instanceof bait__ast__HashExpr) {
		return 
	}
	const e = expr
	bait__checker__Checker_warn(c, from_js_string("expression evaluated but not used"), e.pos)
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
		let field = Array_get(node.fields, i)
		for (let j = 0; i32(j < i); j += 1) {
			if (string_eq(field.name, Array_get(node.fields, j).name)) {
				bait__checker__Checker_error(c, from_js_string(`duplicate field name ${field.name.str}`), field.pos)
				continue outer
			}
		}
		if (field.expr instanceof bait__ast__InvalidExpr) {
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
	if (bait__context__Scope_is_known(c.scope, label)) {
		bait__checker__Checker_error(c, from_js_string(`redefinition of "${label.str}"`), pos)
		return 
	}
	bait__context__Scope_register(c.scope, label, new bait__context__ScopeObject({ kind: bait__context__ObjectKind.label }))
}

function bait__checker__Checker_for_loop(c, node) {
	bait__checker__Checker_open_scope(c)
	bait__checker__Checker_register_label(c, node.label, node.pos)
	_t547 = bait__checker__Checker_expr(c, node.cond)
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
	_t548 = bait__checker__Checker_expr(c, node.cond)
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
	let idx_type = bait__ast__I32_TYPE
	if (eq(sym.kind, bait__ast__TypeKind.array)) {
		node.val_type = (sym.info).elem_type
	} else if (eq(sym.kind, bait__ast__TypeKind.map)) {
		if (node.idxvar instanceof bait__ast__TmpVar) {
			bait__checker__Checker_error(c, from_js_string("iterate a map using `for key, val in mymap {}`"), node.pos)
		}
		const info = sym.info
		idx_type = info.key_type
		node.val_type = info.val_type
	} else if (eq(sym.kind, bait__ast__TypeKind.string)) {
		node.val_type = bait__ast__U8_TYPE
	} else {
		bait__checker__Checker_error(c, from_js_string(`cannot iterate over ${sym.mix_name.str}`), node.pos)
	}
	if (node.idxvar instanceof bait__ast__Ident) {
		const idxvar = node.idxvar
		bait__context__Scope_register(c.scope, idxvar.name, new bait__context__ScopeObject({ typ: idx_type }))
	}
	bait__context__Scope_register(c.scope, node.valvar.name, new bait__context__ScopeObject({ typ: node.val_type, is_mut: node.valvar.is_mut }))
	if (node.valvar.is_mut) {
		bait__checker__Checker_expect_mutable(c, node.expr)
	}
	const loop_safe = c.is_loop
	c.is_loop = true
	bait__checker__Checker_stmts(c, node.stmts)
	c.is_loop = loop_safe
	bait__checker__Checker_close_scope(c)
}

function bait__checker__Checker_static_decl(c, node) {
	let _r58_5162 = bait__checker__Checker_non_void_expr(c, node.expr)
	if (_r58_5162.is_error) {
		const err = _r58_5162.msg
		return 
	}
	node.typ = _r58_5162.data
	bait__context__Scope_update_type(Map_get_set(c.sema_ctx.scopes, c.pkg, null), node.name, node.typ)
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
	const obj = bait__context__Scope_get_parent(c.scope, node.label)
	if (!eq(obj.kind, bait__context__ObjectKind.label)) {
		bait__checker__Checker_error(c, from_js_string(`label "${node.label.str}" not found`), node.pos)
	}
}

function bait__checker__Checker_type_decl(c, node) {
}


function bait__checker__Checker_struct_decl(c, node) {
	const prev_generic_names = c.cur_generic_names
	c.cur_generic_names = node.generic_names
	if (!u8_is_upper(string_get(node.name, 0)) && !string_eq(node.name, from_js_string("string"))) {
		bait__checker__Checker_warn(c, from_js_string(`struct name \`${node.name.str}\` must start with a capital letter`), node.pos)
	}
	outer: for (let i = 0; i < node.fields.length; i++) {
		const field = Array_get(node.fields, i)
		let should_continue = false
		for (let j = 0; i32(j < i); j += 1) {
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
		if (field.expr instanceof bait__ast__InvalidExpr) {
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
		return bait__ast__ERROR_TYPE
	}
	if (!sym.is_pub && string_contains(sym.mix_name, from_js_string(".")) && !string_eq(sym.pkg, c.pkg)) {
		bait__checker__Checker_error(c, from_js_string(`struct ${sym.mix_name.str} is private`), node.pos)
		return bait__ast__ERROR_TYPE
	}
	bait__checker__Checker_check_init_field_values(c, node, sym.info)
	node.name = sym.mix_name
	for (let _t562 = 0; _t562 < node.fields.length; _t562++) {
		const field = Array_get(node.fields, _t562)
		const def = bait__ast__TypeSymbol_find_field(sym, field.name, c.table)
		if (eq(def.name.length, 0)) {
			bait__checker__Checker_error(c, from_js_string(`struct ${sym.mix_name.str} has no field ${field.name.str}`), node.pos)
		}
		c.expected_type = def.typ
		const expr_type = bait__checker__Checker_expr(c, field.expr)
		if (eq(def.typ, bait__ast__ERROR_TYPE) || eq(expr_type, bait__ast__ERROR_TYPE)) {
			continue
		}
		if (!bait__checker__Checker_check_types(c, expr_type, def.typ)) {
			bait__checker__Checker_error(c, from_js_string(`cannot assign to field ${field.name.str}: expected ${bait__ast__Table_type_name(c.table, def.typ).str}, got ${bait__ast__Table_type_name(c.table, expr_type).str} `), node.pos)
		}
	}
	return node.typ
}

function bait__checker__Checker_check_init_field_values(c, init, info) {
	for (let _t565 = 0; _t565 < info.fields.length; _t565++) {
		const def_field = Array_get(info.fields, _t565)
		let is_required = i32(bait__ast__Type_get_nr_amp(def_field.typ) > 0)
		if (!is_required) {
			const def_sym = bait__ast__Table_get_sym(c.table, def_field.typ)
			is_required = eq(def_sym.kind, bait__ast__TypeKind.sum_type) || eq(def_sym.kind, bait__ast__TypeKind.fun_)
		}
		if (!is_required) {
			for (let _t567 = 0; _t567 < def_field.attrs.length; _t567++) {
				const attr = Array_get(def_field.attrs, _t567)
				if (string_eq(attr.name, from_js_string("required"))) {
					is_required = true
				}
			}
		}
		if (!is_required) {
			continue
		}
		if (!(def_field.expr instanceof bait__ast__InvalidExpr)) {
			continue
		}
		let is_present = false
		for (let _t570 = 0; _t570 < init.fields.length; _t570++) {
			const inited = Array_get(init.fields, _t570)
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
	if (eq(bait__ast__Type_idx(expected), bait__ast__VOID_TYPE) && i32(bait__ast__Type_get_nr_amp(expected) >= 1) && i32(bait__ast__Type_get_nr_amp(got) >= 1)) {
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
		if (string_eq(exp_sym.mix_name, from_js_string("Array")) || string_eq(got_sym.mix_name, from_js_string("Array"))) {
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
	if ((eq(sym.kind, bait__ast__TypeKind.placeholder) && !string_eq(sym.mix_name, from_js_string("_"))) || (eq(sym.kind, bait__ast__TypeKind.generic) && !(Array_contains_string(c.cur_generic_names, sym.mix_name)))) {
		bait__checker__Checker_error(c, from_js_string(`unknown type ${sym.mix_name.str}`), pos)
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
		for (let _t595 = 0; _t595 < info.variants.length; _t595++) {
			const variant = Array_get(info.variants, _t595)
			const var_sym = bait__ast__Table_get_sym(c.table, variant)
			if (!bait__checker__Checker_does_type_exist(c, var_sym, pos)) {
				return false
			}
		}
		return true
	}
	if (eq(sym.kind, bait__ast__TypeKind.fun_)) {
		const info = sym.info
		for (let _t597 = 0; _t597 < info.param_types.length; _t597++) {
			const param_type = Array_get(info.param_types, _t597)
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
	bait__checker__Checker_error(c, from_js_string(`type ${sym.mix_name.str} is private`), pos)
	return false
}


function bait__util__escape__char(s, esc_char) {
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

function bait__util__escape__linebreak(s) {
	let _t603 = undefined
	if (string_eq(os__platform(), from_js_string("windows"))) {
		_t603 = string_replace(s, from_js_string("\r\n"), from_js_string("\\r\\n"))
	} else {
		_t603 = string_replace(s, from_js_string("\n"), from_js_string("\\n"))
	}
	return _t603
}

function bait__util__escape__shell(s) {
	return bait__util__escape__char(s, u8("\`"))
}


let _t604 = undefined
if (string_eq(os__platform(), from_js_string("windows"))) {
	_t604 = from_js_string("\\r\\n")
} else {
	_t604 = from_js_string("\\n")
}
const bait__gen__js__LB = _t604
function bait__gen__js__Gen_get_str_fun(g, typ) {
	Array_push(g.table.needed_str_funs, typ)
	const sym = bait__ast__Table_get_sym(g.table, typ)
	return bait__gen__js__js_esc(from_js_string(`${sym.mix_name.str}_str`))
}

function bait__gen__js__Gen_generate_str_fun(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (Array_contains_bait__ast__Type(g.generated_str_funs, typ)) {
		return 
	}
	if (bait__ast__TypeSymbol_has_method(sym, from_js_string("str"))) {
		return 
	}
	Array_push(g.generated_str_funs, typ)
	const name = bait__gen__js__js_esc(from_js_string(`${sym.mix_name.str}_str`))
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
	let s = "${sym.mix_name.str}{"\n`))
		if (i32(info.fields.length > 0)) {
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\ts += "${bait__gen__js__LB.str}"\n`))
		}
		for (let _t609 = 0; _t609 < info.fields.length; _t609++) {
			const field = Array_get(info.fields, _t609)
			if (eq(typ, field.typ)) {
				g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\ts += space + "  ${field.name.str} = ${sym.mix_name.str}{...}${bait__gen__js__LB.str}"\n`))
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
		for (let _t613 = 0; _t613 < info.variants.length; _t613++) {
			const bait_var = Array_get(info.variants, _t613)
			const var_sym = bait__ast__Table_get_sym(g.table, bait_var)
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\tif (it instanceof ${bait__gen__js__js_esc(var_sym.mix_name).str}) {
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
		for (let _t614 = 0; _t614 < info.vals.length; _t614++) {
			const val = Array_get(info.vals, _t614)
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`\t\tcase ${bait__gen__js__js_esc(sym.mix_name).str}.${val.str}: return from_js_string("${val.str}")\n`))
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
	bait__errors__generic_error(from_js_string(`cannot convert ${sym.mix_name.str} to string`))
	exit(1)
}


function bait__gen__js__Gen_comptime_var(g, node) {
	bait__gen__js__Gen_write(g, from_js_string("from_js_string(\""))
	bait__gen__js__Gen_write(g, bait__gen__js__Gen_get_comptime_val(g, node.kind, node.pos))
	bait__gen__js__Gen_write(g, from_js_string("\")"))
}

function bait__gen__js__Gen_get_comptime_val(g, kind, pos) {
	let _t616 = undefined
	if (eq(kind, bait__token__ComptimeVar.pkg)) {
		_t616 = g.pkg
	} else if (eq(kind, bait__token__ComptimeVar.abs_file)) {
		_t616 = string_replace(os__abs_path(g.path), from_js_string("\\"), from_js_string("\\\\"))
	} else if (eq(kind, bait__token__ComptimeVar.file)) {
		_t616 = string_replace(g.path, from_js_string("\\"), from_js_string("\\\\"))
	} else if (eq(kind, bait__token__ComptimeVar.dir)) {
		_t616 = os__dir(bait__gen__js__Gen_get_comptime_val(g, bait__token__ComptimeVar.abs_file, pos))
	} else if (eq(kind, bait__token__ComptimeVar.line)) {
		_t616 = i32_str(pos.line)
	} else if (eq(kind, bait__token__ComptimeVar.file_line)) {
			const file = bait__gen__js__Gen_get_comptime_val(g, bait__token__ComptimeVar.file, pos)
		const line = bait__gen__js__Gen_get_comptime_val(g, bait__token__ComptimeVar.line, pos)
		_t616 = from_js_string(`${file.str}:${line.str}`)
	} else if (eq(kind, bait__token__ComptimeVar.fun_)) {
		_t616 = g.cur_fun.name
	} else if (eq(kind, bait__token__ComptimeVar.baitexe)) {
		_t616 = bait__gen__js__Gen_comptime_baitexe(g)
	} else if (eq(kind, bait__token__ComptimeVar.baitdir)) {
		_t616 = bait__gen__js__Gen_comptime_baitdir(g)
	} else if (eq(kind, bait__token__ComptimeVar.baithash)) {
		_t616 = bait__gen__js__Gen_comptime_baithash(g)
	} else if (eq(kind, bait__token__ComptimeVar.unknown)) {
		_t616 = panic(from_js_string("this should never happen"))
	}
	return _t616
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
	} else if (expr instanceof bait__ast__BlankIdent) {
		bait__gen__js__Gen_write(g, bait__gen__js__Gen_new_temp_var(g))
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
	} else if (expr instanceof bait__ast__RangeExpr) {
		panic(from_js_string("cannot gen RangeExpr"))
	} else if (expr instanceof bait__ast__SelectorExpr) {
		bait__gen__js__Gen_selector_expr(g, expr)
	} else if (expr instanceof bait__ast__StringLiteral) {
		bait__gen__js__Gen_string_literal(g, expr)
	} else if (expr instanceof bait__ast__StringInterLiteral) {
		bait__gen__js__Gen_string_inter_literal(g, expr)
	} else if (expr instanceof bait__ast__StructInit) {
		bait__gen__js__Gen_struct_init(g, expr)
	} else if (expr instanceof bait__ast__TmpVar) {
		bait__gen__js__Gen_tmp_var(g)
	} else if (expr instanceof bait__ast__TypeOf) {
		bait__gen__js__Gen_type_of(g, expr)
	} else if (expr instanceof bait__ast__Void) {
	} else if (expr instanceof bait__ast__InvalidExpr) {
		panic(from_js_string("unexpected InvalidExpr"))
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
	if (node.length_expr instanceof bait__ast__InvalidExpr) {
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
	bait__gen__js__Gen_write(g, bait__util__escape__char(node.val, u8("\"")))
	bait__gen__js__Gen_write(g, from_js_string("\")"))
}

function bait__gen__js__Gen_enum_val(g, node) {
	bait__gen__js__Gen_write(g, string_add(string_add(bait__gen__js__js_esc(node.name), from_js_string(".")), node.val))
}

function bait__gen__js__Gen_float_literal(g, node) {
	bait__gen__js__Gen_write(g, node.val)
}

function bait__gen__js__Gen_hash_expr(g, node) {
	bait__gen__js__Gen_write(g, node.val)
}

function bait__gen__js__Gen_ident(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		bait__gen__js__Gen_write(g, bait__ast__Ident_full_name(node))
		return 
	}
	bait__gen__js__Gen_write(g, bait__gen__js__js_esc(bait__ast__Ident_full_name(node)))
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
	const overload = bait__ast__Table_get_overload(g.table, lsym, bait__token__Token_js_repr(node.op))
	if (i32(overload.name.length > 0)) {
		const final_lsym = bait__ast__Table_get_sym(g.table, Array_get(overload.params, 0).typ)
		if (eq(node.op, bait__token__Token.ne)) {
			bait__gen__js__Gen_write(g, from_js_string("!"))
		}
		bait__gen__js__Gen_write(g, bait__gen__js__js_name(string_add(string_add(final_lsym.mix_name, from_js_string("_")), overload.name)))
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
		bait__gen__js__Gen_write(g, from_js_string(`${lsym.mix_name.str}(`))
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
	const val = bait__util__escape__char(bait__util__escape__linebreak(node.val), u8("\""))
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
		bait__gen__js__Gen_write(g, bait__util__escape__char(val, u8("\`")))
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
	bait__gen__js__Gen_write(g, string_add(string_add(string_add(from_js_string("from_js_string(\""), amp), sym.mix_name), from_js_string("\")")))
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
		let name = bait__gen__js__js_esc(final_sym.mix_name)
		bait__gen__js__Gen_write(g, from_js_string(`${name.str}_str(`))
		bait__gen__js__Gen_expr(g, expr)
		bait__gen__js__Gen_write(g, from_js_string(")"))
		return 
	}
	if (eq(sym.kind, bait__ast__TypeKind.generic)) {
		bait__gen__js__Gen_expr_to_string(g, expr, Map_get_set(g.cur_concrete_types, sym.mix_name, 0))
		return 
	}
	const name = bait__gen__js__Gen_get_str_fun(g, typ)
	bait__gen__js__Gen_write(g, from_js_string(`${name.str}(`))
	bait__gen__js__Gen_expr(g, expr)
	bait__gen__js__Gen_write(g, from_js_string(", 0)"))
}


function bait__gen__js__Gen_fun_decl(g, node) {
	if (i32(node.generic_names.length > 0) && eq(g.cur_concrete_types.length, 0)) {
		const gtypes = Map_get_set(g.table.generic_fun_types, node.key, new bait_Array({ data: [], length: 0 }))
		for (let _t648 = 0; _t648 < gtypes.length; _t648++) {
			const conc_types = Array_get(gtypes, _t648)
			for (let i = 0; i < node.generic_names.length; i++) {
				const gn = Array_get(node.generic_names, i)
				Map_set(g.cur_concrete_types, gn, Array_get(conc_types, i))
			}
			bait__gen__js__Gen_fun_decl(g, node)
			Map_clear(g.cur_concrete_types)
		}
		return 
	}
	g.cur_fun = node
	bait__gen__js__Gen_write(g, from_js_string("function "))
	let name = from_js_string("")
	if (node.is_method) {
		const sym = bait__ast__Table_get_sym(g.table, Array_get(node.params, 0).typ)
		name = bait__gen__js__js_esc(string_add(string_add(sym.mix_name, from_js_string("_")), node.name))
	} else {
		if (string_eq(g.pkg, from_js_string("main")) || string_eq(g.pkg, from_js_string("builtin")) || node.is_test) {
			name = bait__gen__js__js_esc(node.name)
		} else {
			name = bait__gen__js__js_name(string_add(string_add(g.pkg, from_js_string(".")), node.name))
		}
	}
	if (i32(g.cur_concrete_types.length > 0)) {
		name = bait__gen__js__Gen_get_concrete_name(g, name, Map_values(g.cur_concrete_types))
	}
	bait__gen__js__Gen_write(g, from_js_string(`${name.str}(`))
	bait__gen__js__Gen_fun_params(g, node.params)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	const export_attr = Array_bait__ast__Attribute_find_attr(node.attrs, from_js_string("export"))
	if (!string_eq(export_attr.name, from_js_string(""))) {
		bait__gen__js__Gen_writeln(g, from_js_string(`module.exports.${export_attr.value.str} = ${name.str}`))
	}
	bait__gen__js__Gen_writeln(g, from_js_string(""))
}

function bait__gen__js__Gen_fun_params(g, params) {
	for (let i = 0; i < params.length; i++) {
		const p = Array_get(params, i)
		bait__gen__js__Gen_write(g, bait__gen__js__js_esc(p.name))
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
	bait__gen__js__Gen_write(g, from_js_string(`let ${node.or_block.uid.str} = `))
	bait__gen__js__Gen_call_expr_no_or(g, node)
	bait__gen__js__Gen_writeln(g, from_js_string(""))
	bait__gen__js__Gen_writeln(g, from_js_string(`if (${node.or_block.uid.str}.is_error) {`))
	if (eq(node.or_block.kind, bait__ast__OrKind.block)) {
		bait__gen__js__Gen_stmts(g, node.or_block.stmts)
	} else {
		if (bait__ast__FunDecl_is_main(g.cur_fun)) {
			bait__gen__js__Gen_writeln(g, from_js_string(`\tpanic(${node.or_block.uid.str}.msg)`))
		} else {
			bait__gen__js__Gen_writeln(g, from_js_string(`\treturn ${node.or_block.uid.str}`))
		}
	}
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
	bait__gen__js__Gen_save_stmt_offset(g)
	g.empty_line = false
	bait__gen__js__Gen_write(g, from_js_string(`${cut.str}${node.or_block.uid.str}.data`))
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
	let name = bait__ast__CallExpr_full_name(node)
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
		name = bait__gen__js__js_name(string_add(string_add(sym.mix_name, from_js_string("_")), node.name))
	} else if (eq(node.lang, bait__ast__Language.bait)) {
		name = bait__gen__js__js_esc(name)
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
	for (let i = 1; i32(i < node.args.length); i += 1) {
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
				_t674 = bait__gen__js__Gen_cut_before(g, u8("\n"))
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
function bait__gen__js__Gen({ pref = new bait__preference__Prefs({}), table = new bait__ast__Table({}), path = from_js_string(""), pkg = from_js_string(""), type_defs_out = from_js_string(""), global_out = from_js_string(""), fun_decls_out = from_js_string(""), out = from_js_string(""), indent = 0, empty_line = false, stmt_offsets = new bait_Array({ data: [], length: 0 }), foreign_imports = new bait_Map({ data: new Map([]), length: 0 }), generated_str_funs = new bait_Array({ data: [], length: 0 }), tmp_counter = 0, cur_concrete_types = new bait_Map({ data: new Map([]), length: 0 }), cur_fun = new bait__ast__FunDecl({}), is_for_loop_head = false, is_lhs_assign = false, is_array_map_set = false, baitexe = from_js_string(""), baitdir = from_js_string(""), baithash = from_js_string("") }) {
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
	this.baitexe = baitexe
	this.baitdir = baitdir
	this.baithash = baithash
}
function bait__gen__js__gen(files, table, pref) {
	let g = new bait__gen__js__Gen({ pref: pref, table: table, indent: -1, empty_line: true, tmp_counter: -1 })
	for (let _t676 = 0; _t676 < files.length; _t676++) {
		const file = Array_get(files, _t676)
		g.path = file.path
		g.pkg = file.pkg_name
		bait__gen__js__Gen_process_imports(g, file.imports)
		bait__gen__js__Gen_stmts(g, file.stmts)
		g.out = string_add(g.out, from_js_string("\n"))
	}
	if (!pref.is_library) {
		bait__gen__js__Gen_main_call(g)
	}
	for (let _t677 = 0; _t677 < g.table.needed_str_funs.length; _t677++) {
		const typ = Array_get(g.table.needed_str_funs, _t677)
		bait__gen__js__Gen_generate_str_fun(g, typ)
	}
	return string_add(string_add(string_add(string_add(string_add(bait__gen__js__Gen_headers(g), g.type_defs_out), g.global_out), from_js_string("\n")), g.fun_decls_out), g.out)
}

function bait__gen__js__Gen_process_imports(g, imports) {
	for (let _t677 = 0; _t677 < imports.length; _t677++) {
		const imp = Array_get(imports, _t677)
		if (eq(imp.lang, bait__ast__Language.bait) || Map_contains(g.foreign_imports, imp.alias)) {
			continue
		}
		Map_set(g.foreign_imports, imp.alias, imp.name)
	}
}

function bait__gen__js__Gen_headers(g) {
	let headers = from_js_string("const JS = {}\n")
	const _t679 = Map_keys(g.foreign_imports)
	for (let _t680 = 0; _t680 < _t679.length; _t680++) {
		const alias = Array_get(_t679, _t680)
		const name = Map_get_set(g.foreign_imports, alias, from_js_string(""))
		headers = string_add(headers, from_js_string(`${alias.str} = require("${name.str}")\n`))
	}
	return string_add(headers, from_js_string("\n"))
}

function bait__gen__js__Gen_tmp_var(g) {
	bait__gen__js__Gen_write(g, from_js_string(`_t${i32_str(g.tmp_counter).str}`))
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

function bait__gen__js__Gen_cut_back_to(g, pos) {
	const cut = string_substr(g.out, pos, g.out.length)
	g.out = string_substr(g.out, 0, pos)
	return cut
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

function bait__gen__js__Gen_cut_before_any(g, chars) {
	for (let i = i32(g.out.length - 1); i32(i >= 0); i -= 1) {
		for (let _t682 = 0; _t682 < chars.length; _t682++) {
			const c = string_get(chars, _t682)
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
		if (i32(bait__ast__Type_get_nr_amp(typ) > 0)) {
			bait__gen__js__Gen_write(g, from_js_string("null"))
			return 
		}
		const sym = bait__ast__Table_get_sym(g.table, typ)
		if (eq(sym.kind, bait__ast__TypeKind.array)) {
			bait__gen__js__Gen_array_init(g, new bait__ast__ArrayInit({ exprs: new bait_Array({ data: [], length: 0 }) }))
		} else if (eq(sym.kind, bait__ast__TypeKind.map)) {
			bait__gen__js__Gen_map_init(g, new bait__ast__MapInit({ keys: new bait_Array({ data: [], length: 0 }) }))
		} else if (eq(sym.kind, bait__ast__TypeKind.struct_)) {
			bait__gen__js__Gen_write(g, from_js_string(`new ${bait__gen__js__js_esc(sym.mix_name).str}({})`))
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
	for (let _t686 = 0; _t686 < concrete_types.length; _t686++) {
		const t = Array_get(concrete_types, _t686)
		full_name = string_add(full_name, string_add(from_js_string("_"), bait__ast__Table_get_sym(g.table, t).mix_name))
	}
	return bait__gen__js__js_esc(full_name)
}

function bait__gen__js__Gen_concrete_sym(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (!eq(sym.kind, bait__ast__TypeKind.generic) || eq(g.cur_concrete_types.length, 0)) {
		return sym
	}
	return bait__ast__Table_get_sym(g.table, Map_get_set(g.cur_concrete_types, sym.mix_name, 0))
}

function bait__gen__js__js_name(n) {
	return string_replace(string_replace(string_replace(string_replace(n, from_js_string("."), from_js_string("__")), from_js_string("[]"), from_js_string("Array_")), from_js_string("["), from_js_string("_")), from_js_string("]"), from_js_string("_"))
}

function bait__gen__js__js_esc(n) {
	const name = bait__gen__js__js_name(n)
	if (Array_contains_string(bait__gen__js__JS_RESERVED, name)) {
		return from_js_string(`bait_${name.str}`)
	}
	return name
}


function bait__gen__js__Gen_stmts(g, stmts) {
	bait__gen__js__Gen_save_stmt_offset(g)
	g.indent += 1
	for (let _t688 = 0; _t688 < stmts.length; _t688++) {
		const stmt = Array_get(stmts, _t688)
		bait__gen__js__Gen_stmt(g, stmt)
	}
	g.indent -= 1
}

function bait__gen__js__Gen_stmt(g, stmt) {
	if (stmt instanceof bait__ast__AssertStmt) {
		bait__gen__js__Gen_assert_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__AssignStmt) {
		bait__gen__js__Gen_assign_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__Block) {
		bait__gen__js__Gen_block(g, stmt)
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
	} else if (stmt instanceof bait__ast__StaticDecl) {
		bait__gen__js__Gen_static_decl(g, stmt)
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
	} else if (stmt instanceof bait__ast__Void) {
	} else {
		panic(from_js_string(`cannot gen ${bait__ast__Stmt_str(stmt, 0).str}`))
	}
}

function bait__gen__js__Gen_assert_stmt(g, node) {
	if (node.expr instanceof bait__ast__InfixExpr) {
		bait__gen__js__Gen_assert_infix(g, node)
		return 
	}
	bait__gen__js__Gen_write(g, from_js_string("if ("))
	bait__gen__js__Gen_expr(g, node.expr)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_writeln(g, from_js_string("\tTestRunner_pass(builtin__test_runner)"))
	bait__gen__js__Gen_writeln(g, from_js_string("} else {"))
	bait__gen__js__Gen_write(g, from_js_string(`\tTestRunner_fail(builtin__test_runner, ${i32_str(node.pos.line).str}, from_js_string("assert `))
	bait__gen__js__Gen_assert_side_src(g, node.expr)
	bait__gen__js__Gen_writeln(g, from_js_string("\"))"))
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_assert_infix(g, node) {
	const expr = node.expr
	const tmpl = bait__gen__js__Gen_new_temp_var(g)
	const tmpr = bait__gen__js__Gen_new_temp_var(g)
	bait__gen__js__Gen_write(g, from_js_string(`const ${tmpl.str} = `))
	bait__gen__js__Gen_expr(g, expr.left)
	bait__gen__js__Gen_writeln(g, from_js_string(""))
	bait__gen__js__Gen_write(g, from_js_string(`const ${tmpr.str} = `))
	bait__gen__js__Gen_expr(g, expr.right)
	bait__gen__js__Gen_writeln(g, from_js_string(""))
	const new_infix = new bait__ast__InfixExpr({ left: new bait__ast__Ident({ name: tmpl }), left_type: expr.left_type, op: expr.op, right: new bait__ast__Ident({ name: tmpr }), right_type: expr.right_type })
	bait__gen__js__Gen_write(g, from_js_string("if ("))
	bait__gen__js__Gen_expr(g, new_infix)
	bait__gen__js__Gen_writeln(g, from_js_string(") {"))
	bait__gen__js__Gen_writeln(g, from_js_string("\tTestRunner_pass(builtin__test_runner)"))
	bait__gen__js__Gen_writeln(g, from_js_string("} else {"))
	bait__gen__js__Gen_write(g, from_js_string(`\tTestRunner_fail_infix(builtin__test_runner, ${i32_str(node.pos.line).str}, from_js_string("assert `))
	bait__gen__js__Gen_assert_side_src(g, expr.left)
	bait__gen__js__Gen_write(g, from_js_string(` ${bait__token__Token_js_repr(expr.op).str} `))
	bait__gen__js__Gen_assert_side_src(g, expr.right)
	bait__gen__js__Gen_write(g, from_js_string("\"), "))
	bait__gen__js__Gen_expr_to_string(g, new_infix.left, expr.left_type)
	bait__gen__js__Gen_write(g, from_js_string(", "))
	bait__gen__js__Gen_expr_to_string(g, new_infix.right, expr.right_type)
	bait__gen__js__Gen_writeln(g, from_js_string(")"))
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_assert_side_src(g, node) {
	if (node instanceof bait__ast__BoolLiteral) {
		bait__gen__js__Gen_bool_literal(g, node)
	} else if (node instanceof bait__ast__IntegerLiteral) {
		bait__gen__js__Gen_integer_literal(g, node)
	} else if (node instanceof bait__ast__StringLiteral) {
		bait__gen__js__Gen_write(g, from_js_string("'"))
		bait__gen__js__Gen_write(g, bait__util__escape__linebreak(node.val))
		bait__gen__js__Gen_write(g, from_js_string("'"))
	} else if (node instanceof bait__ast__CharLiteral) {
		bait__gen__js__Gen_write(g, from_js_string("`"))
		bait__gen__js__Gen_write(g, node.val)
		bait__gen__js__Gen_write(g, from_js_string("`"))
	} else if (node instanceof bait__ast__ArrayInit) {
		bait__gen__js__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = Array_get(node.exprs, i)
			bait__gen__js__Gen_assert_side_src(g, expr)
			if (i32(i < i32(node.exprs.length - 1))) {
				bait__gen__js__Gen_write(g, from_js_string(", "))
			}
		}
		bait__gen__js__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__Ident) {
		bait__gen__js__Gen_write(g, bait__ast__Ident_full_name(node))
	} else if (node instanceof bait__ast__ArrayInit) {
		bait__gen__js__Gen_write(g, from_js_string("["))
		for (let i = 0; i < node.exprs.length; i++) {
			const expr = Array_get(node.exprs, i)
			bait__gen__js__Gen_assert_side_src(g, expr)
			if (i32(i < i32(node.exprs.length - 1))) {
				bait__gen__js__Gen_write(g, from_js_string(", "))
			}
		}
		bait__gen__js__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__IndexExpr) {
		bait__gen__js__Gen_assert_side_src(g, node.left)
		bait__gen__js__Gen_write(g, from_js_string("["))
		bait__gen__js__Gen_assert_side_src(g, node.index)
		bait__gen__js__Gen_write(g, from_js_string("]"))
	} else if (node instanceof bait__ast__SelectorExpr) {
		bait__gen__js__Gen_assert_side_src(g, node.expr)
		bait__gen__js__Gen_write(g, from_js_string(`.${node.field_name.str}`))
	} else if (node instanceof bait__ast__ComptimeVar) {
		bait__gen__js__Gen_write(g, from_js_string("$"))
		bait__gen__js__Gen_write(g, bait__token__ComptimeVar_str(node.kind, 0))
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
	if (Map_contains(lsym.overloads, bait__token__Token_js_repr(node.op))) {
		bait__gen__js__Gen_write(g, from_js_string(" = "))
		const overload = Map_get_set(lsym.overloads, bait__token__Token_js_repr(node.op), new bait__ast__FunDecl({}))
		bait__gen__js__Gen_write(g, bait__gen__js__js_esc(string_add(string_add(lsym.mix_name, from_js_string("_")), overload.name)))
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

function bait__gen__js__Gen_block(g, node) {
	bait__gen__js__Gen_save_stmt_offset(g)
	bait__gen__js__Gen_writeln(g, from_js_string("{"))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_const_decl(g, node) {
	const pkg = bait__gen__js__js_name(g.pkg)
	const name = bait__gen__js__js_name(node.name)
	bait__gen__js__Gen_save_stmt_offset(g)
	bait__gen__js__Gen_write(g, from_js_string(`const ${pkg.str}__${name.str} = `))
	bait__gen__js__Gen_expr(g, node.expr)
	bait__gen__js__Gen_writeln(g, from_js_string(""))
}

function bait__gen__js__Gen_enum_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return 
	}
	bait__gen__js__Gen_writeln(g, string_add(string_add(from_js_string("const "), bait__gen__js__js_esc(node.name)), from_js_string(" = {")))
	g.indent += 1
	for (let _t700 = 0; _t700 < node.fields.length; _t700++) {
		const field = Array_get(node.fields, _t700)
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
	const sym = bait__ast__Table_get_sym(g.table, node.expr_type)
	if (eq(sym.kind, bait__ast__TypeKind.map)) {
		bait__gen__js__Gen_for_in_map(g, node)
		return 
	}
	const i = bait__gen__js__Gen_expr_string(g, node.idxvar)
	const container = bait__gen__js__Gen_expr_string(g, node.expr)
	bait__gen__js__Gen_writeln(g, from_js_string(`for (let ${i.str} = 0; ${i.str} < ${container.str}.length; ${i.str}++) {`))
	const val_name = bait__gen__js__js_esc(node.valvar.name)
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_for_in_map(g, node) {
	const container = bait__gen__js__Gen_expr_string(g, node.expr)
	const keys_var = bait__gen__js__Gen_new_temp_var(g)
	bait__gen__js__Gen_writeln(g, from_js_string(`const ${keys_var.str} = Map_keys(${container.str})`))
	const i = bait__gen__js__Gen_new_temp_var(g)
	const idxvar = bait__gen__js__Gen_expr_string(g, node.idxvar)
	bait__gen__js__Gen_writeln(g, from_js_string(`for (let ${i.str} = 0; ${i.str} < ${keys_var.str}.length; ${i.str}++) {`))
	bait__gen__js__Gen_writeln(g, from_js_string(`\tconst ${idxvar.str} = Array_get(${keys_var.str}, ${i.str})`))
	bait__gen__js__Gen_stmts(g, node.stmts)
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_static_decl(g, node) {
	const name = bait__gen__js__js_name(node.name)
	const pkg = bait__gen__js__js_name(g.pkg)
	const expr = bait__gen__js__Gen_expr_string(g, node.expr)
	g.global_out = string_add(g.global_out, from_js_string(`var ${pkg.str}__${name.str} = ${expr.str}\n`))
}

function bait__gen__js__Gen_interface_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return 
	}
	bait__errors__err(g.path, node.pos, from_js_string("Bait interfaces are not yet supported"))
	exit(1)
}

function bait__gen__js__Gen_return_stmt(g, node) {
	bait__gen__js__Gen_save_stmt_offset(g)
	bait__gen__js__Gen_write(g, from_js_string("return"))
	if (!(node.expr instanceof bait__ast__InvalidExpr)) {
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
	bait__gen__js__Gen_write(g, bait__gen__js__js_esc(node.name))
	bait__gen__js__Gen_writeln(g, from_js_string("(val) { return val }"))
}


function bait__gen__js__Gen_struct_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return 
	}
	bait__gen__js__Gen_write(g, from_js_string("function "))
	const jsname = bait__gen__js__js_esc(string_add(node.pkg_prefix, node.name))
	bait__gen__js__Gen_write(g, jsname)
	bait__gen__js__Gen_write(g, from_js_string("({ "))
	for (let i = 0; i < node.fields.length; i++) {
		const field = Array_get(node.fields, i)
		bait__gen__js__Gen_write(g, from_js_string(`${bait__gen__js__js_esc(field.name).str} = `))
		if (eq(node.typ, field.typ)) {
			bait__gen__js__Gen_write(g, from_js_string("this"))
		} else if (!(field.expr instanceof bait__ast__InvalidExpr)) {
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
	for (let _t710 = 0; _t710 < node.fields.length; _t710++) {
		const field = Array_get(node.fields, _t710)
		bait__gen__js__Gen_writeln(g, from_js_string(`this.${field.name.str} = ${bait__gen__js__js_esc(field.name).str}`))
	}
	g.indent -= 1
	bait__gen__js__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__js__Gen_struct_init(g, node) {
	bait__gen__js__Gen_write(g, string_add(string_add(from_js_string("new "), bait__gen__js__js_esc(node.name)), from_js_string("({")))
	if (eq(node.fields.length, 0)) {
		bait__gen__js__Gen_write(g, from_js_string("})"))
		return 
	}
	bait__gen__js__Gen_write(g, from_js_string(" "))
	for (let i = 0; i < node.fields.length; i++) {
		const field = Array_get(node.fields, i)
		bait__gen__js__Gen_write(g, from_js_string(`${bait__gen__js__js_esc(field.name).str}: `))
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
	bait__gen__c__Gen_writeln(g, from_js_string("\tTestRunner_pass(&builtin__test_runner);"))
	bait__gen__c__Gen_writeln(g, from_js_string("} else {"))
	if (node.expr instanceof bait__ast__InfixExpr) {
		const expr = node.expr
		bait__gen__c__Gen_write(g, from_js_string(`\tTestRunner_fail_infix(&builtin__test_runner, ${i32_str(node.pos.line).str}, from_c_string("assert `))
		bait__gen__c__Gen_assert_side_expr(g, expr.left)
		bait__gen__c__Gen_write(g, from_js_string(` ${bait__token__Token_js_repr(expr.op).str} `))
		bait__gen__c__Gen_assert_side_expr(g, expr.right)
		bait__gen__c__Gen_write(g, from_js_string("\"), "))
		bait__gen__c__Gen_expr_to_string(g, expr.left, expr.left_type)
		bait__gen__c__Gen_write(g, from_js_string(", "))
		bait__gen__c__Gen_expr_to_string(g, expr.right, expr.right_type)
		bait__gen__c__Gen_writeln(g, from_js_string(");"))
	} else {
		bait__gen__c__Gen_write(g, from_js_string(`\tTestRunner_fail(&builtin__test_runner, ${i32_str(node.pos.line).str}, from_c_string("assert `))
		bait__gen__c__Gen_assert_side_expr(g, node.expr)
		bait__gen__c__Gen_writeln(g, from_js_string("\"));"))
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
		bait__gen__c__Gen_write(g, bait__util__escape__linebreak(node.val))
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
		bait__gen__c__Gen_write(g, bait__ast__Ident_full_name(node))
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
		bait__gen__c__Gen_write(g, bait__token__ComptimeVar_str(node.kind, 0))
	} else {
		bait__gen__c__Gen_write(g, from_js_string("UNHANDLED EXPR"))
	}
}


let _t717 = undefined
if (string_eq(os__platform(), from_js_string("windows"))) {
	_t717 = from_js_string("\\r\\n")
} else {
	_t717 = from_js_string("\\n")
}
const bait__gen__c__LB = _t717
function bait__gen__c__Gen_get_str_fun(g, typ) {
	Array_push(g.table.needed_str_funs, typ)
	const sym = bait__ast__Table_get_sym(g.table, typ)
	return bait__gen__c__c_esc(from_js_string(`${sym.mix_name.str}_str`))
}

function bait__gen__c__Gen_generate_str_fun(g, typ) {
	const sym = bait__ast__Table_get_sym(g.table, typ)
	if (Array_contains_bait__ast__Type(g.generated_str_funs, typ)) {
		return 
	}
	if (bait__ast__TypeSymbol_has_method(sym, from_js_string("str"))) {
		return 
	}
	Array_push(g.generated_str_funs, typ)
	const sname = bait__gen__c__c_esc(sym.mix_name)
	const fname = string_add(sname, from_js_string("_str"))
	if (eq(sym.kind, bait__ast__TypeKind.struct_)) {
		const info = sym.info
		g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(`string ${fname.str}(${sname.str} it);`))
		g.auto_funs_out = string_add(g.auto_funs_out, from_js_string(`string ${fname.str}(${sname.str} it) {
	int indent = 0;
	string space = string_repeat(from_c_string(" "), indent * 2);
	strings__Builder b = strings__new_builder(100);
	strings__Builder_write(&b, space);
	strings__Builder_write(&b, from_c_string("${sym.mix_name.str}{"));\n`))
		if (i32(info.fields.length > 0)) {
			g.auto_funs_out = string_add(g.auto_funs_out, from_js_string(`\tstrings__Builder_write(&b, from_c_string("${bait__gen__c__LB.str}"));\n`))
		}
		for (let _t721 = 0; _t721 < info.fields.length; _t721++) {
			const field = Array_get(info.fields, _t721)
			if (eq(typ, field.typ)) {
				g.auto_funs_out = string_add(g.auto_funs_out, from_js_string(`\tstrings__Builder_write(&b, space);
	strings__Builder_write(&b, from_c_string("  ${field.name.str} = ${sym.mix_name.str}{...}${bait__gen__c__LB.str}"));\n`))
				continue
			}
			const str_fun_name = bait__gen__c__Gen_get_str_fun(g, field.typ)
			g.auto_funs_out = string_add(g.auto_funs_out, from_js_string(`\tstrings__Builder_write(&b, space);
	strings__Builder_write(&b, from_c_string("  ${field.name.str} = "));
	string val = ${str_fun_name.str}(it.${field.name.str});
	strings__Builder_write(&b, val);
	strings__Builder_write(&b, from_c_string("${bait__gen__c__LB.str}"));\n`))
		}
		g.auto_funs_out = string_add(g.auto_funs_out, from_js_string("\tstrings__Builder_write(&b, space);\n	strings__Builder_write_u8(&b, \'}\');\n	return strings__Builder_str(b);\n}\n\n"))
		return 
	}
	bait__errors__generic_error(from_js_string(`cannot convert ${sym.mix_name.str} to string`))
	exit(1)
}


const bait__gen__c__C_RESERVED = new bait_Array({ data: [from_js_string("auto"), from_js_string("break"), from_js_string("case"), from_js_string("char"), from_js_string("const"), from_js_string("continue"), from_js_string("default"), from_js_string("do"), from_js_string("double"), from_js_string("else"), from_js_string("enum"), from_js_string("extern"), from_js_string("float"), from_js_string("for"), from_js_string("goto"), from_js_string("if"), from_js_string("inline"), from_js_string("int"), from_js_string("long"), from_js_string("register"), from_js_string("restrict"), from_js_string("return"), from_js_string("short"), from_js_string("signed"), from_js_string("sizeof"), from_js_string("static"), from_js_string("struct"), from_js_string("switch"), from_js_string("typedef"), from_js_string("union"), from_js_string("unsigned"), from_js_string("void"), from_js_string("volatile"), from_js_string("while"), from_js_string("main"), from_js_string("exit"), from_js_string("DIR")], length: 37 })
function bait__gen__c__Gen({ pref = new bait__preference__Prefs({}), table = new bait__ast__Table({}), path = from_js_string(""), pkg = from_js_string(""), main_inits_out = from_js_string(""), type_defs_out = from_js_string("// Type definitions\n"), fun_decls_out = from_js_string("// Function declarations\n"), type_impls_out = from_js_string("// Type implementations\n"), auto_funs_out = from_js_string("// Generated functions\n"), globals_out = from_js_string("// Static variables\n"), out = from_js_string("// Main code\n"), indent = -1, empty_line = true, stmt_offsets = new bait_Array({ data: [], length: 0 }), foreign_imports = new bait_Array({ data: [], length: 0 }), generated_eq_funs = new bait_Array({ data: [], length: 0 }), generated_str_funs = new bait_Array({ data: [], length: 0 }), tmp_counter = 0, cur_concrete_types = new bait_Map({ data: new Map([]), length: 0 }), cur_fun = new bait__ast__FunDecl({}), is_lhs_assign = false, is_array_map_set = false, is_for_loop_head = false, baitexe = from_js_string(""), baitdir = from_js_string(""), baithash = from_js_string("") }) {
	this.pref = pref
	this.table = table
	this.path = path
	this.pkg = pkg
	this.main_inits_out = main_inits_out
	this.type_defs_out = type_defs_out
	this.fun_decls_out = fun_decls_out
	this.type_impls_out = type_impls_out
	this.auto_funs_out = auto_funs_out
	this.globals_out = globals_out
	this.out = out
	this.indent = indent
	this.empty_line = empty_line
	this.stmt_offsets = stmt_offsets
	this.foreign_imports = foreign_imports
	this.generated_eq_funs = generated_eq_funs
	this.generated_str_funs = generated_str_funs
	this.tmp_counter = tmp_counter
	this.cur_concrete_types = cur_concrete_types
	this.cur_fun = cur_fun
	this.is_lhs_assign = is_lhs_assign
	this.is_array_map_set = is_array_map_set
	this.is_for_loop_head = is_for_loop_head
	this.baitexe = baitexe
	this.baitdir = baitdir
	this.baithash = baithash
}
function bait__gen__c__gen(files, table, pref) {
	let g = new bait__gen__c__Gen({ pref: pref, table: table })
	bait__gen__c__Gen_write_types(g)
	bait__gen__c__Gen_gen_equality_funs(g)
	for (let _t722 = 0; _t722 < files.length; _t722++) {
		const file = Array_get(files, _t722)
		g.path = file.path
		g.pkg = file.pkg_name
		bait__gen__c__Gen_process_imports(g, file.imports)
		bait__gen__c__Gen_stmts(g, file.stmts)
		g.out = string_add(g.out, from_js_string("\n"))
	}
	if (!g.pref.is_library) {
		bait__gen__c__Gen_c_main(g)
	}
	for (let _t723 = 0; _t723 < g.table.needed_str_funs.length; _t723++) {
		const typ = Array_get(g.table.needed_str_funs, _t723)
		bait__gen__c__Gen_generate_str_fun(g, typ)
	}
	return string_add(string_add(string_add(string_add(string_add(string_add(string_add(bait__gen__c__Gen_headers(g), g.type_defs_out), g.fun_decls_out), g.type_impls_out), g.auto_funs_out), g.globals_out), from_js_string("\n")), g.out)
}

function bait__gen__c__Gen_process_imports(g, imports) {
	for (let _t723 = 0; _t723 < imports.length; _t723++) {
		const imp = Array_get(imports, _t723)
		if (eq(imp.lang, bait__ast__Language.bait) || Array_contains_string(g.foreign_imports, imp.name)) {
			continue
		}
		Array_push(g.foreign_imports, imp.name)
	}
}

function bait__gen__c__Gen_headers(g) {
	let headers = from_js_string("// Headers and includes\n")
	for (let _t724 = 0; _t724 < g.foreign_imports.length; _t724++) {
		const name = Array_get(g.foreign_imports, _t724)
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

function bait__gen__c__Gen_get_concrete_name(g, name, concrete_types) {
	let full_name = name
	for (let _t724 = 0; _t724 < concrete_types.length; _t724++) {
		const t = Array_get(concrete_types, _t724)
		full_name = string_add(full_name, string_add(from_js_string("_"), bait__ast__Table_get_sym(g.table, t).mix_name))
	}
	return bait__gen__c__c_esc(full_name)
}

function bait__gen__c__Gen_tmp_var(g) {
	bait__gen__c__Gen_write(g, from_js_string(`_t${i32_str(g.tmp_counter).str}`))
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

function bait__gen__c__Gen_cut_before(g, to) {
	for (let i = i32(g.out.length - 1); i32(i >= 0); i -= 1) {
		if (eq(string_get(g.out, i), to)) {
			let cut = string_substr(g.out, i32(i + 1), g.out.length)
			g.out = string_substr(g.out, 0, i)
			return cut
		}
	}
	return g.out
}

function bait__gen__c__Gen_cut_before_any(g, chars) {
	for (let i = i32(g.out.length - 1); i32(i >= 0); i -= 1) {
		for (let _t726 = 0; _t726 < chars.length; _t726++) {
			const c = string_get(chars, _t726)
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
	return string_replace(string_replace(n, from_js_string("."), from_js_string("__")), from_js_string("[]"), from_js_string("Array_"))
}

function bait__gen__c__c_esc(n) {
	const name = bait__gen__c__c_name(n)
	if (Array_contains_string(bait__gen__c__C_RESERVED, name)) {
		return from_js_string(`bait_${name.str}`)
	}
	return name
}


function bait__gen__c__Gen_comptime_var(g, node) {
	bait__gen__c__Gen_write(g, from_js_string("from_c_string(\""))
	bait__gen__c__Gen_write(g, bait__gen__c__Gen_get_comptime_val(g, node.kind, node.pos))
	bait__gen__c__Gen_write(g, from_js_string("\")"))
}

function bait__gen__c__Gen_get_comptime_val(g, kind, pos) {
	let _t729 = undefined
	if (eq(kind, bait__token__ComptimeVar.pkg)) {
		_t729 = g.pkg
	} else if (eq(kind, bait__token__ComptimeVar.abs_file)) {
		_t729 = string_replace(os__abs_path(g.path), from_js_string("\\"), from_js_string("\\\\"))
	} else if (eq(kind, bait__token__ComptimeVar.file)) {
		_t729 = string_replace(g.path, from_js_string("\\"), from_js_string("\\\\"))
	} else if (eq(kind, bait__token__ComptimeVar.dir)) {
		_t729 = os__dir(bait__gen__c__Gen_get_comptime_val(g, bait__token__ComptimeVar.abs_file, pos))
	} else if (eq(kind, bait__token__ComptimeVar.line)) {
		_t729 = i32_str(pos.line)
	} else if (eq(kind, bait__token__ComptimeVar.file_line)) {
			const file = bait__gen__c__Gen_get_comptime_val(g, bait__token__ComptimeVar.file, pos)
		const line = bait__gen__c__Gen_get_comptime_val(g, bait__token__ComptimeVar.line, pos)
		_t729 = from_js_string(`${file.str}:${line.str}`)
	} else if (eq(kind, bait__token__ComptimeVar.fun_)) {
		_t729 = g.cur_fun.name
	} else if (eq(kind, bait__token__ComptimeVar.baitexe)) {
		_t729 = bait__gen__c__Gen_comptime_baitexe(g)
	} else if (eq(kind, bait__token__ComptimeVar.baitdir)) {
		_t729 = bait__gen__c__Gen_comptime_baitdir(g)
	} else if (eq(kind, bait__token__ComptimeVar.baithash)) {
		_t729 = bait__gen__c__Gen_comptime_baithash(g)
	} else if (eq(kind, bait__token__ComptimeVar.unknown)) {
		_t729 = panic(from_js_string("this should never happen"))
	}
	return _t729
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
	for (let _t732 = 0; _t732 < g.table.needed_equality_funs.length; _t732++) {
		const typ = Array_get(g.table.needed_equality_funs, _t732)
		_t733 = bait__gen__c__Gen_equality_fun(g, typ)
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
	if (Map_contains(sym.overloads, from_js_string("=="))) {
		return from_js_string("")
	}
	if (eq(sym.kind, bait__ast__TypeKind.generic)) {
		return from_js_string("")
	}
	bait__errors__generic_error(from_js_string(`cannot generate equality function for type ${sym.mix_name.str}`))
	exit(1)
}


function bait__gen__c__Gen_expr(g, expr) {
	if (expr instanceof bait__ast__AnonFun) {
		bait__gen__c__Gen_anon_fun(g, expr)
	} else if (expr instanceof bait__ast__ArrayInit) {
		bait__gen__c__Gen_array_init(g, expr)
	} else if (expr instanceof bait__ast__AsCast) {
		bait__gen__c__Gen_as_cast(g, expr)
	} else if (expr instanceof bait__ast__BlankIdent) {
		bait__gen__c__Gen_write(g, from_js_string("_"))
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
	} else if (expr instanceof bait__ast__RangeExpr) {
		panic(from_js_string("ranges not implemented"))
	} else if (expr instanceof bait__ast__SelectorExpr) {
		bait__gen__c__Gen_selector_expr(g, expr)
	} else if (expr instanceof bait__ast__StringLiteral) {
		bait__gen__c__Gen_string_literal(g, expr)
	} else if (expr instanceof bait__ast__StringInterLiteral) {
		bait__gen__c__Gen_string_inter_literal(g, expr)
	} else if (expr instanceof bait__ast__StructInit) {
		bait__gen__c__Gen_struct_init(g, expr)
	} else if (expr instanceof bait__ast__TmpVar) {
		bait__gen__c__Gen_tmp_var(g)
	} else if (expr instanceof bait__ast__TypeOf) {
		bait__gen__c__Gen_type_of(g, expr)
	} else if (expr instanceof bait__ast__Void) {
	} else if (expr instanceof bait__ast__InvalidExpr) {
		panic(from_js_string("unexpected InvalidExpr"))
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
		if (node.length_expr instanceof bait__ast__InvalidExpr) {
			bait__gen__c__Gen_write(g, from_js_string("0, "))
		} else {
			bait__gen__c__Gen_expr(g, node.length_expr)
			bait__gen__c__Gen_write(g, from_js_string(", "))
		}
		if (node.cap_expr instanceof bait__ast__InvalidExpr) {
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
	for (let _t741 = 0; _t741 < node.exprs.length; _t741++) {
		const expr = Array_get(node.exprs, _t741)
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

function bait__gen__c__Gen_char_literal(g, node) {
	const val = bait__util__escape__char(node.val, u8("'"))
	bait__gen__c__Gen_write(g, from_js_string(`'${val.str}'`))
}

function bait__gen__c__Gen_enum_val(g, node) {
	bait__gen__c__Gen_write(g, bait__gen__c__c_esc(node.val))
}

function bait__gen__c__Gen_hash_expr(g, node) {
	bait__gen__c__Gen_write(g, node.val)
}

function bait__gen__c__Gen_ident(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		bait__gen__c__Gen_write(g, node.name)
		return 
	}
	bait__gen__c__Gen_write(g, bait__gen__c__c_esc(bait__ast__Ident_full_name(node)))
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
	if (Map_contains(lsym.overloads, bait__token__Token_c_repr(node.op))) {
		const overload = Map_get_set(lsym.overloads, bait__token__Token_c_repr(node.op), new bait__ast__FunDecl({}))
		if (eq(node.op, bait__token__Token.ne)) {
			bait__gen__c__Gen_write(g, from_js_string("!"))
		}
		bait__gen__c__Gen_write(g, bait__gen__c__c_esc(string_add(string_add(lsym.mix_name, from_js_string("_")), overload.name)))
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
	const val = bait__util__escape__char(string_replace(node.val, from_js_string("\n"), from_js_string("\\n")), u8("\""))
	bait__gen__c__Gen_write(g, from_js_string("from_c_string(\""))
	bait__gen__c__Gen_write(g, val)
	bait__gen__c__Gen_write(g, from_js_string("\")"))
}

function bait__gen__c__Gen_string_inter_literal(g, node) {
	const len = i32(node.vals.length + node.exprs.length)
	bait__gen__c__Gen_write(g, from_js_string(`interpolate(new_array_from_c(${i32_str(len).str}, ${i32_str(len).str}, sizeof(string), (string[${i32_str(len).str}]){`))
	for (let i = 0; i < node.vals.length; i++) {
		const val = Array_get(node.vals, i)
		const esc_val = bait__util__escape__char(string_replace(val, from_js_string("\n"), from_js_string("\\n")), u8("\""))
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
	for (let _t752 = 0; _t752 < node.fields.length; _t752++) {
		const field = Array_get(node.fields, _t752)
		Array_push(inited_fields, field.name)
	}
	const info = bait__ast__Table_get_sym(g.table, node.typ).info
	for (let i = 0; i < info.fields.length; i++) {
		const field = Array_get(info.fields, i)
		const name = bait__gen__c__c_esc(field.name)
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
	bait__gen__c__Gen_write(g, string_add(string_add(string_add(from_js_string("from_c_string(\""), amp), sym.mix_name), from_js_string("\")")))
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
		let name = bait__gen__c__c_esc(final_sym.mix_name)
		bait__gen__c__Gen_write(g, from_js_string(`${name.str}_str(`))
		bait__gen__c__Gen_expr(g, expr)
		bait__gen__c__Gen_write(g, from_js_string(")"))
		return 
	}
	if (eq(sym.kind, bait__ast__TypeKind.generic)) {
		bait__gen__c__Gen_expr_to_string(g, expr, Map_get_set(g.cur_concrete_types, sym.mix_name, 0))
		return 
	}
	const name = bait__gen__c__Gen_get_str_fun(g, typ)
	bait__gen__c__Gen_write(g, from_js_string(`${name.str}(`))
	bait__gen__c__Gen_expr(g, expr)
	bait__gen__c__Gen_write(g, from_js_string(")"))
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
	if (i32(node.generic_names.length > 0) && eq(g.cur_concrete_types.length, 0)) {
		const gtypes = Map_get_set(g.table.generic_fun_types, node.key, new bait_Array({ data: [], length: 0 }))
		for (let _t759 = 0; _t759 < gtypes.length; _t759++) {
			const conc_types = Array_get(gtypes, _t759)
			for (let i = 0; i < node.generic_names.length; i++) {
				const gn = Array_get(node.generic_names, i)
				Map_set(g.cur_concrete_types, gn, Array_get(conc_types, i))
			}
			bait__gen__c__Gen_fun_decl(g, node)
			Map_clear(g.cur_concrete_types)
		}
		return 
	}
	g.cur_fun = node
	const type_str = bait__gen__c__Gen_typ(g, node.return_type)
	let name = from_js_string("")
	if (node.is_method) {
		const sym = bait__ast__Table_get_sym(g.table, Array_get(node.params, 0).typ)
		name = bait__gen__c__c_name(string_add(string_add(sym.mix_name, from_js_string("_")), node.name))
	} else {
		if (string_eq(g.pkg, from_js_string("main")) || string_eq(g.pkg, from_js_string("builtin")) || node.is_test) {
			name = bait__gen__c__c_esc(node.name)
		} else {
			name = bait__gen__c__c_name(string_add(string_add(g.pkg, from_js_string(".")), node.name))
		}
	}
	if (i32(g.cur_concrete_types.length > 0)) {
		name = bait__gen__c__Gen_get_concrete_name(g, name, Map_values(g.cur_concrete_types))
	}
	const s = from_js_string(`${type_str.str} ${name.str}(`)
	g.fun_decls_out = string_add(g.fun_decls_out, s)
	bait__gen__c__Gen_write(g, s)
	bait__gen__c__Gen_fun_params(g, node.params)
	g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(");\n"))
	bait__gen__c__Gen_writeln(g, from_js_string(") {"))
	bait__gen__c__Gen_stmts(g, node.stmts)
	bait__gen__c__Gen_writeln(g, from_js_string("}\n"))
}

function bait__gen__c__Gen_fun_params(g, params) {
	for (let i = 0; i < params.length; i++) {
		const p = Array_get(params, i)
		const s = string_add(string_add(bait__gen__c__Gen_typ(g, p.typ), from_js_string(" ")), bait__gen__c__c_esc(p.name))
		g.fun_decls_out = string_add(g.fun_decls_out, s)
		bait__gen__c__Gen_write(g, s)
		if (i32(i < i32(params.length - 1))) {
			g.fun_decls_out = string_add(g.fun_decls_out, from_js_string(", "))
			bait__gen__c__Gen_write(g, from_js_string(", "))
		}
	}
}

function bait__gen__c__Gen_call_expr(g, node) {
	if (node.is_field) {
		bait__gen__c__Gen_expr(g, node.left)
		if (i32(bait__ast__Type_get_nr_amp(node.left_type) > 0)) {
			bait__gen__c__Gen_write(g, from_js_string("->"))
		} else {
			bait__gen__c__Gen_write(g, from_js_string("."))
		}
		bait__gen__c__Gen_write(g, node.name)
		bait__gen__c__Gen_write(g, from_js_string("("))
		bait__gen__c__Gen_call_args(g, node.args)
		bait__gen__c__Gen_write(g, from_js_string(")"))
		return 
	}
	let name = bait__gen__c__c_esc(bait__ast__CallExpr_full_name(node))
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
		name = bait__gen__c__c_name(string_add(string_add(sym.mix_name, from_js_string("_")), node.name))
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
				_t786 = bait__gen__c__Gen_cut_before(g, u8("\n"))
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
	g.indent += 1
	for (let _t788 = 0; _t788 < stmts.length; _t788++) {
		const stmt = Array_get(stmts, _t788)
		bait__gen__c__Gen_stmt(g, stmt)
	}
	g.indent -= 1
}

function bait__gen__c__Gen_stmt(g, stmt) {
	if (stmt instanceof bait__ast__AssertStmt) {
		bait__gen__c__Gen_assert_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__AssignStmt) {
		bait__gen__c__Gen_assign_stmt(g, stmt)
	} else if (stmt instanceof bait__ast__Block) {
		bait__gen__c__Gen_block(g, stmt)
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
	} else if (stmt instanceof bait__ast__StaticDecl) {
		bait__gen__c__Gen_static_decl(g, stmt)
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
	} else if (stmt instanceof bait__ast__Void) {
	} else if (stmt instanceof bait__ast__InvalidStmt) {
		panic(from_js_string("unexpected InvalidStmt"))
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
	if (Map_contains(lsym.overloads, bait__token__Token_c_repr(node.op))) {
		bait__gen__c__Gen_write(g, from_js_string(" = "))
		const overload = Map_get_set(lsym.overloads, bait__token__Token_c_repr(node.op), new bait__ast__FunDecl({}))
		bait__gen__c__Gen_write(g, bait__gen__c__c_esc(string_add(string_add(lsym.mix_name, from_js_string("_")), overload.name)))
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

function bait__gen__c__Gen_block(g, node) {
	bait__gen__c__Gen_save_stmt_offset(g)
	bait__gen__c__Gen_writeln(g, from_js_string("{"))
	bait__gen__c__Gen_stmts(g, node.stmts)
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__c__Gen_const_decl(g, node) {
	const pkg = bait__gen__c__c_name(g.pkg)
	const name = bait__gen__c__c_name(node.name)
	const full_name = string_add(string_add(pkg, from_js_string("__")), name)
	const val = bait__gen__c__Gen_expr_string(g, node.expr)
	if (node.expr instanceof bait__ast__ArrayInit || node.expr instanceof bait__ast__CallExpr || node.expr instanceof bait__ast__MapInit) {
		const typ = bait__gen__c__Gen_typ(g, node.typ)
		g.type_defs_out = string_add(g.type_defs_out, from_js_string(`${typ.str} ${full_name.str};\n`))
		g.main_inits_out = string_add(g.main_inits_out, from_js_string(`\t${full_name.str} = ${val.str};\n`))
	} else {
		g.type_impls_out = string_add(g.type_impls_out, from_js_string(`#define ${full_name.str} ${val.str}\n`))
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
	const sym = bait__ast__Table_get_sym(g.table, node.expr_type)
	const i = bait__gen__c__Gen_expr_string(g, node.idxvar)
	const container = bait__gen__c__Gen_expr_string(g, node.expr)
	bait__gen__c__Gen_writeln(g, from_js_string(`for (i32 ${i.str} = 0; ${i.str} < ${container.str}.length; ${i.str}++) {`))
	bait__gen__c__Gen_stmts(g, node.stmts)
	bait__gen__c__Gen_writeln(g, from_js_string("}"))
}

function bait__gen__c__Gen_loop_control_stmt(g, node) {
	bait__gen__c__Gen_writeln(g, string_add(bait__token__Token_c_repr(node.kind), from_js_string(";")))
}

function bait__gen__c__Gen_static_decl(g, node) {
	const name = bait__gen__c__c_name(node.name)
	const pkg = bait__gen__c__c_name(g.pkg)
	const expr = bait__gen__c__Gen_expr_string(g, node.expr)
	const typ = bait__gen__c__Gen_typ(g, node.typ)
	g.globals_out = string_add(g.globals_out, from_js_string(`${typ.str} ${pkg.str}__${name.str} = ${expr.str};\n`))
}

function bait__gen__c__Gen_interface_decl(g, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return 
	}
	bait__errors__err(g.path, node.pos, from_js_string("Bait interfaces are not yet supported"))
	exit(1)
}

function bait__gen__c__Gen_return_stmt(g, node) {
	bait__gen__c__Gen_save_stmt_offset(g)
	bait__gen__c__Gen_write(g, from_js_string("return"))
	if (!(node.expr instanceof bait__ast__InvalidExpr)) {
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
	return bait__ast__Table_get_sym(g.table, Map_get_set(g.cur_concrete_types, sym.mix_name, 0))
}

function bait__gen__c__Gen_typ(g, typ) {
	const sym = bait__gen__c__Gen_concrete_sym(g, typ)
	const name = string_replace(string_replace(string_replace(sym.mix_name, from_js_string("[]"), from_js_string("Array_")), from_js_string("C."), from_js_string("")), from_js_string("."), from_js_string("__"))
	const ptrs = string_repeat(from_js_string("*"), bait__ast__Type_get_nr_amp(typ))
	let _t800 = undefined
	if (eq(sym.kind, bait__ast__TypeKind.enum_)) {
		_t800 = from_js_string("enum ")
	} else {
		_t800 = from_js_string("")
	}
	const prefix = _t800
	return string_add(string_add(prefix, name), ptrs)
}

function bait__gen__c__Gen_write_types(g) {
	for (let _t800 = 0; _t800 < g.table.type_symbols.length; _t800++) {
		const sym = Array_get(g.table.type_symbols, _t800)
		if (string_starts_with(sym.mix_name, from_js_string("C."))) {
			continue
		}
		const cname = bait__gen__c__c_esc(sym.mix_name)
		if (sym.info instanceof bait__ast__StructInfo) {
			const info = sym.info
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(`typedef struct ${cname.str} ${cname.str};\n`))
			g.type_impls_out = string_add(g.type_impls_out, from_js_string(`struct ${cname.str} {\n`))
			for (let _t802 = 0; _t802 < info.fields.length; _t802++) {
				const field = Array_get(info.fields, _t802)
				const type_str = bait__gen__c__Gen_typ(g, field.typ)
				const field_name = bait__gen__c__c_esc(field.name)
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
			const ccname = string_replace(string_replace(string_replace(string_replace(cname, from_js_string(" "), from_js_string("_")), from_js_string("("), from_js_string("_")), from_js_string(")"), from_js_string("_")), from_js_string(","), from_js_string(""))
			g.type_defs_out = string_add(g.type_defs_out, from_js_string(`typedef ${bait__gen__c__Gen_typ(g, info.return_type).str} (*${ccname.str})(`))
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
			for (let _t804 = 0; _t804 < info.vals.length; _t804++) {
				const val = Array_get(info.vals, _t804)
				g.type_defs_out = string_add(g.type_defs_out, from_js_string(`\t${bait__gen__c__c_esc(val).str},\n`))
			}
			g.type_defs_out = string_add(g.type_defs_out, from_js_string("};\n"))
		}
	}
}


function bait__transformer__Transformer_gen_test_main(t) {
	let test_main = new bait__ast__FunDecl({ name: from_js_string("main") })
	if (t.gen_ctx.has_test_begin) {
		Array_push(test_main.stmts, new bait__ast__ExprStmt({ expr: new bait__ast__CallExpr({ name: from_js_string("testsuite_begin") }) }))
	}
	const esc_path = string_replace(t.path, from_js_string("\\"), from_js_string("\\\\"))
	Array_push(test_main.stmts, new bait__ast__AssignStmt({ op: bait__token__Token.assign, left: new bait__ast__SelectorExpr({ expr: new bait__ast__Ident({ name: from_js_string("builtin__test_runner") }), field_name: from_js_string("file") }), right: new bait__ast__StringLiteral({ val: esc_path }) }))
	for (let _t805 = 0; _t805 < t.gen_ctx.test_fun_names.length; _t805++) {
		const name = Array_get(t.gen_ctx.test_fun_names, _t805)
		Array_push(test_main.stmts, new bait__ast__AssignStmt({ op: bait__token__Token.assign, left: new bait__ast__SelectorExpr({ expr: new bait__ast__Ident({ name: from_js_string("builtin__test_runner") }), field_name: from_js_string("fun_name") }), right: new bait__ast__StringLiteral({ val: name }) }))
		Array_push(test_main.stmts, new bait__ast__ExprStmt({ expr: new bait__ast__CallExpr({ name: name }) }))
	}
	if (t.gen_ctx.has_test_end) {
		Array_push(test_main.stmts, new bait__ast__ExprStmt({ expr: new bait__ast__CallExpr({ name: from_js_string("testsuite_end") }) }))
	}
	Array_push(test_main.stmts, new bait__ast__ExprStmt({ expr: new bait__ast__CallExpr({ name: from_js_string("exit"), args: new bait_Array({ data: [new bait__ast__CallArg({ expr: new bait__ast__HashExpr({ val: from_js_string("TestRunner_exit_code(builtin__test_runner)") }) })], length: 1 }) }) }))
	return new bait__ast__File({ pkg_name: from_js_string("main"), stmts: new bait_Array({ data: [test_main], length: 1 }) })
}


function bait__transformer__Transformer({ prefs = new bait__preference__Prefs({}), gen_ctx = null, path = from_js_string("") }) {
	this.prefs = prefs
	this.gen_ctx = gen_ctx
	this.path = path
}
function bait__transformer__Transformer_transform_files(t, files) {
	for (let _t806 = 0; _t806 < files.length; _t806++) {
		let file = Array_get(files, _t806)
		t.path = file.path
		bait__transformer__Transformer_stmts(t, file.stmts)
	}
	if (t.prefs.is_test) {
		Array_push(files, bait__transformer__Transformer_gen_test_main(t))
	}
}

function bait__transformer__Transformer_stmts(t, stmts) {
	for (let i = 0; i32(i < stmts.length); i += 1) {
		Array_set(stmts, i, bait__transformer__Transformer_stmt(t, Array_get(stmts, i)))
	}
}

function bait__transformer__Transformer_stmt(t, stmt) {
	if (stmt instanceof bait__ast__AssertStmt) {
		return bait__transformer__Transformer_assert_stmt(t, stmt)
	} else if (stmt instanceof bait__ast__AssignStmt) {
		return bait__transformer__Transformer_assign_stmt(t, stmt)
	} else if (stmt instanceof bait__ast__Block) {
		bait__transformer__Transformer_stmts(t, stmt.stmts)
	} else if (stmt instanceof bait__ast__ConstDecl) {
		return bait__transformer__Transformer_const_decl(t, stmt)
	} else if (stmt instanceof bait__ast__ExprStmt) {
		stmt.expr = bait__transformer__Transformer_expr(t, stmt.expr)
	} else if (stmt instanceof bait__ast__EnumDecl) {
	} else if (stmt instanceof bait__ast__ForLoop) {
		bait__transformer__Transformer_for_loop(t, stmt)
	} else if (stmt instanceof bait__ast__ForClassicLoop) {
		bait__transformer__Transformer_for_classic_loop(t, stmt)
	} else if (stmt instanceof bait__ast__ForInLoop) {
		return bait__transformer__Transformer_for_in_loop(t, stmt)
	} else if (stmt instanceof bait__ast__FunDecl) {
		return bait__transformer__Transformer_fun_decl(t, stmt)
	} else if (stmt instanceof bait__ast__StaticDecl) {
	} else if (stmt instanceof bait__ast__IfMatch) {
		bait__transformer__Transformer_if_match(t, stmt)
	} else if (stmt instanceof bait__ast__InterfaceDecl) {
	} else if (stmt instanceof bait__ast__LoopControlStmt) {
	} else if (stmt instanceof bait__ast__ReturnStmt) {
		bait__transformer__Transformer_return_stmt(t, stmt)
	} else if (stmt instanceof bait__ast__StructDecl) {
	} else if (stmt instanceof bait__ast__TypeDecl) {
	} else if (stmt instanceof bait__ast__Void) {
	} else if (stmt instanceof bait__ast__InvalidStmt) {
	}
	return stmt
}

function bait__transformer__Transformer_expr(t, expr) {
	if (expr instanceof bait__ast__AnonFun) {
	} else if (expr instanceof bait__ast__ArrayInit) {
	} else if (expr instanceof bait__ast__AsCast) {
	} else if (expr instanceof bait__ast__BlankIdent) {
	} else if (expr instanceof bait__ast__BoolLiteral) {
	} else if (expr instanceof bait__ast__CallExpr) {
		bait__transformer__Transformer_call_expr(t, expr)
	} else if (expr instanceof bait__ast__CharLiteral) {
	} else if (expr instanceof bait__ast__ComptimeVar) {
	} else if (expr instanceof bait__ast__EnumVal) {
	} else if (expr instanceof bait__ast__FloatLiteral) {
	} else if (expr instanceof bait__ast__HashExpr) {
	} else if (expr instanceof bait__ast__Ident) {
	} else if (expr instanceof bait__ast__IfMatch) {
		bait__transformer__Transformer_if_match(t, expr)
	} else if (expr instanceof bait__ast__IndexExpr) {
		return bait__transformer__Transformer_index_expr(t, expr)
	} else if (expr instanceof bait__ast__InfixExpr) {
		bait__transformer__Transformer_infix_expr(t, expr)
	} else if (expr instanceof bait__ast__IntegerLiteral) {
	} else if (expr instanceof bait__ast__MapInit) {
	} else if (expr instanceof bait__ast__ParExpr) {
	} else if (expr instanceof bait__ast__PrefixExpr) {
	} else if (expr instanceof bait__ast__RangeExpr) {
	} else if (expr instanceof bait__ast__SelectorExpr) {
	} else if (expr instanceof bait__ast__StringLiteral) {
	} else if (expr instanceof bait__ast__StringInterLiteral) {
	} else if (expr instanceof bait__ast__StructInit) {
	} else if (expr instanceof bait__ast__TmpVar) {
	} else if (expr instanceof bait__ast__TypeOf) {
	} else if (expr instanceof bait__ast__Void) {
	} else if (expr instanceof bait__ast__InvalidExpr) {
	}
	return expr
}

function bait__transformer__Transformer_assert_stmt(t, node) {
	node.expr = bait__transformer__Transformer_expr(t, node.expr)
	if (!t.prefs.is_test) {
		return new bait__ast__IfMatch({ branches: new bait_Array({ data: [new bait__ast__IfBranch({ cond: new bait__ast__PrefixExpr({ op: bait__token__Token.key_not, right: node.expr }), stmts: new bait_Array({ data: [new bait__ast__ExprStmt({ expr: new bait__ast__CallExpr({ name: from_js_string("panic"), args: new bait_Array({ data: [new bait__ast__CallArg({ expr: new bait__ast__StringLiteral({ val: from_js_string("assert failed") }) })], length: 1 }) }) })], length: 1 }) })], length: 1 }) })
	}
	return node
}

function bait__transformer__Transformer_assign_stmt(t, node) {
	if (eq(t.prefs.backend, bait__preference__Backend.js) && eq(node.op, bait__token__Token.div_assign)) {
		node.op = bait__token__Token.assign
		node.right = new bait__ast__InfixExpr({ op: bait__token__Token.div, left_type: node.left_type, left: node.left, right: node.right })
	}
	node.left = bait__transformer__Transformer_expr(t, node.left)
	node.right = bait__transformer__Transformer_expr(t, node.right)
	if (eq(t.prefs.backend, bait__preference__Backend.c) && node.left instanceof bait__ast__BlankIdent) {
		node.op = bait__token__Token.decl_assign
		return new bait__ast__Block({ stmts: new bait_Array({ data: [node], length: 1 }) })
	}
	return node
}

function bait__transformer__Transformer_const_decl(t, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return new bait__ast__Void({})
	}
	return node
}

function bait__transformer__Transformer_for_loop(t, node) {
	bait__transformer__Transformer_stmts(t, node.stmts)
}

function bait__transformer__Transformer_for_classic_loop(t, node) {
	_t814 = bait__transformer__Transformer_stmt(t, node.init)
	_t815 = bait__transformer__Transformer_stmt(t, node.inc)
	bait__transformer__Transformer_stmts(t, node.stmts)
}

function bait__transformer__Transformer_for_in_loop(t, node) {
	const val_decl = new bait__ast__AssignStmt({ op: bait__token__Token.decl_assign, right_type: node.val_type, left: node.valvar, right: new bait__ast__IndexExpr({ left_type: node.expr_type, left: node.expr, index: node.idxvar }) })
	Array_insert(node.stmts, 0, val_decl)
	bait__transformer__Transformer_stmts(t, node.stmts)
	return node
}

function bait__transformer__Transformer_fun_decl(t, node) {
	if (!eq(node.lang, bait__ast__Language.bait)) {
		return new bait__ast__Void({})
	}
	bait__transformer__Transformer_stmts(t, node.stmts)
	return node
}

function bait__transformer__Transformer_if_match(t, node) {
	for (let _t816 = 0; _t816 < node.branches.length; _t816++) {
		let branch = Array_get(node.branches, _t816)
		_t817 = bait__transformer__Transformer_expr(t, branch.cond)
		bait__transformer__Transformer_stmts(t, branch.stmts)
	}
}

function bait__transformer__Transformer_return_stmt(t, node) {
	_t818 = bait__transformer__Transformer_expr(t, node.expr)
}

function bait__transformer__Transformer_call_expr(t, node) {
	_t819 = bait__transformer__Transformer_expr(t, node.left)
	for (let _t819 = 0; _t819 < node.args.length; _t819++) {
		let arg = Array_get(node.args, _t819)
		arg.expr = bait__transformer__Transformer_expr(t, arg.expr)
	}
	if (eq(node.or_block.kind, bait__ast__OrKind.block)) {
		const err_decl = new bait__ast__AssignStmt({ op: bait__token__Token.decl_assign, left: new bait__ast__Ident({ name: from_js_string("err") }), right: new bait__ast__SelectorExpr({ expr: new bait__ast__Ident({ name: node.or_block.uid }), field_name: from_js_string("msg") }) })
		Array_insert(node.or_block.stmts, 0, err_decl)
		if (Array_last(node.or_block.stmts) instanceof bait__ast__ExprStmt) {
			const idx = i32(node.or_block.stmts.length - 1)
			Array_set(node.or_block.stmts, idx, new bait__ast__AssignStmt({ op: bait__token__Token.assign, left: new bait__ast__SelectorExpr({ expr: new bait__ast__Ident({ name: node.or_block.uid }), field_name: from_js_string("data") }), right: (Array_get(node.or_block.stmts, idx)).expr }))
		}
		bait__transformer__Transformer_stmts(t, node.or_block.stmts)
	}
}

function bait__transformer__Transformer_index_expr(t, node) {
	if (node.index instanceof bait__ast__RangeExpr) {
		const idx = bait__transformer__Transformer_range_expr_on_left(t, node.index, node.left)
		return new bait__ast__CallExpr({ is_method: true, left: node.left, left_type: bait__ast__ARRAY_TYPE, return_type: bait__ast__ARRAY_TYPE, name: from_js_string("slice"), args: new bait_Array({ data: [new bait__ast__CallArg({ expr: idx.low, typ: bait__ast__I32_TYPE }), new bait__ast__CallArg({ expr: idx.high, typ: bait__ast__I32_TYPE })], length: 2 }) })
	}
	return node
}

function bait__transformer__Transformer_infix_expr(t, node) {
	node.left = bait__transformer__Transformer_expr(t, node.left)
	node.right = bait__transformer__Transformer_expr(t, node.right)
}

function bait__transformer__Transformer_range_expr_on_left(t, node, left) {
	if (node.low instanceof bait__ast__Void) {
		node.low = new bait__ast__IntegerLiteral({ val: from_js_string("0") })
	}
	if (node.high instanceof bait__ast__Void) {
		node.high = new bait__ast__SelectorExpr({ expr: left, field_name: from_js_string("length") })
	}
	return node
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
	w.elapsed += u64(w.end - BigInt(w.start))
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


function bait__util__timers__Timers({ watches = new bait_Map({ data: new Map([]), length: 0 }), show = true }) {
	this.watches = watches
	this.show = show
}
function bait__util__timers__Timers_start(t, name) {
	time__Stopwatch_start(Map_get_set(t.watches, name, new time__Stopwatch({})))
}

function bait__util__timers__Timers_show(t, name) {
	if (!t.show) {
		return 
	}
	println(from_js_string(`${name.str}: ${u64_str(time__Stopwatch_elapsed(Map_get_set(t.watches, name, new time__Stopwatch({})))).str}ms`))
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
	for (let _t826 = 0; _t826 < all_files.length; _t826++) {
		const f = Array_get(all_files, _t826)
		if (bait__preference__Prefs_should_compile_file(b.prefs, f)) {
			Array_push(files, os__join_path(dir, new bait_Array({ data: [f], length: 1 })))
		}
	}
	if (eq(files.length, 0)) {
		return error(from_js_string(`\`${dir.str}\` contains no .bt files`))
	}
	return new Result({ data: files })
}

function bait__builder__Builder_get_builtin_files(b) {
	const builtin_path = bait__builder__Builder_resolve_import(b, from_js_string(""), from_js_string("builtin"))
	let _r17_1059 = bait__builder__Builder_bait_files_in_dir(b, builtin_path)
	if (_r17_1059.is_error) {
		const err = _r17_1059.msg
		_r17_1059.data = panic(err)
	}
	return _r17_1059.data
}

function bait__builder__Builder_collect_user_files(b, path) {
	if (string_ends_with(path, from_js_string(".bt"))) {
		return new Result({ data: new bait_Array({ data: [path], length: 1 }) })
	}
	let _r17_1257 = bait__builder__Builder_bait_files_in_dir(b, path)
	if (_r17_1257.is_error) {
		return _r17_1257
	}
	return new Result({ data: _r17_1257.data })
}

function bait__builder__Builder_parse_file(b, path, pkg) {
	const text = os__read_file(path)
	bait__parser__Parser_init(b.parser, text, path, pkg)
	return bait__parser__Parser_parse(b.parser)
}

function bait__builder__compile(prefs) {
	let sema_ctx = new bait__context__SemanticContext({})
	let b = new bait__builder__Builder({ prefs: prefs, parser: bait__parser__new(bait__ast__new_table(), sema_ctx, prefs) })
	let paths = bait__builder__Builder_get_builtin_files(b)
	let _r17_1766 = bait__builder__Builder_collect_user_files(b, prefs.command)
	if (_r17_1766.is_error) {
		const err = _r17_1766.msg
		bait__errors__generic_error(err)
		return 1
	}
	Array_push_many(paths, _r17_1766.data)
	bait__util__timers__start(from_js_string("PARSE"))
	let ast_files = new bait_Array({ data: [], length: 0 })
	for (let _t829 = 0; _t829 < paths.length; _t829++) {
		const p = Array_get(paths, _t829)
		Array_push(ast_files, bait__builder__Builder_parse_file(b, p, from_js_string("")))
	}
	Array_push(b.parsed_pkgs, from_js_string("builtin"))
	const root_pkg = Array_last(ast_files).pkg_name
	for (let i = 0; i32(i < ast_files.length); i += 1) {
		const file = Array_get(ast_files, i)
		for (let _t829 = 0; _t829 < file.imports.length; _t829++) {
			const imp = Array_get(file.imports, _t829)
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
			let _r17_2786 = bait__builder__Builder_bait_files_in_dir(b, import_dir)
			if (_r17_2786.is_error) {
				const err = _r17_2786.msg
				bait__errors__generic_error(from_js_string(`package \`${imp.name.str}\` contains no .bt files`))
				continue
			}
			const imp_paths = _r17_2786.data
			let nr_newly_parsed = 0
			for (let _t832 = 0; _t832 < imp_paths.length; _t832++) {
				const p = Array_get(imp_paths, _t832)
				const parsed_file = bait__builder__Builder_parse_file(b, p, imp.name)
				if (eq(parsed_file.path.length, 0)) {
					bait__builder__Builder_print_infos(b, parsed_file.infos)
					continue
				}
				nr_newly_parsed += 1
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
	b.checker = new bait__checker__Checker({ prefs: b.prefs, table: b.parser.table, sema_ctx: sema_ctx, gen_ctx: new bait__context__GenContext({}), files: b.parsed_files })
	bait__checker__Checker_toplevel_redefinitions(b.checker)
	if (i32(b.checker.errors.length > 0)) {
		for (let _t836 = 0; _t836 < b.checker.errors.length; _t836++) {
			const err = Array_get(b.checker.errors, _t836)
			bait__errors__Message_print(err)
		}
		return 1
	}
	bait__util__timers__start(from_js_string("DEPGRAPH"))
	let deps = new bait_Map({ data: new Map([]), length: 0 })
	for (let _t836 = 0; _t836 < ast_files.length; _t836++) {
		const f = Array_get(ast_files, _t836)
		for (let _t836 = 0; _t836 < f.imports.length; _t836++) {
			const imp = Array_get(f.imports, _t836)
			if (!eq(imp.lang, bait__ast__Language.bait)) {
				continue
			}
			Array_push(Map_get_set(deps, f.pkg_name, new bait_Array({ data: [], length: 0 })), imp.name)
		}
	}
	let looked = new bait_Array({ data: [], length: 0 })
	let pkg_order = new bait_Array({ data: [], length: 0 })
	bait__builder__order_pkgs(pkg_order, root_pkg, deps, looked)
	let sorted_files = new bait_Array({ data: [], length: 0 })
	for (let _t837 = 0; _t837 < pkg_order.length; _t837++) {
		const pkg = Array_get(pkg_order, _t837)
		for (let _t837 = 0; _t837 < ast_files.length; _t837++) {
			const f = Array_get(ast_files, _t837)
			if (string_eq(f.pkg_name, pkg)) {
				Array_push(sorted_files, f)
			}
		}
	}
	bait__util__timers__show(from_js_string("DEPGRAPH"))
	bait__util__timers__start(from_js_string("CHECK"))
	b.parsed_files = sorted_files
	bait__checker__Checker_check_files(b.checker, b.parsed_files)
	bait__util__timers__show(from_js_string("CHECK"))
	if (bait__builder__Builder_print_errors_and_warnings(b, false)) {
		return 1
	}
	bait__util__timers__start(from_js_string("TRANSFORM"))
	let trans = new bait__transformer__Transformer({ prefs: b.prefs, gen_ctx: b.checker.gen_ctx })
	bait__transformer__Transformer_transform_files(trans, b.parsed_files)
	bait__util__timers__show(from_js_string("TRANSFORM"))
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
	if (eq(b.prefs.os, bait__preference__OperatingSystem.windows)) {
		b.prefs.out_name = string_add(b.prefs.out_name, from_js_string(".exe"))
	} else if (os__exists_dir(b.prefs.out_name)) {
		b.prefs.out_name = string_add(b.prefs.out_name, from_js_string(".bin"))
	}
	bait__builder__ensure_dir_exists(os__dir(b.prefs.out_name))
	if (string_ends_with(b.prefs.out_name, from_js_string(".c"))) {
		os__write_file(b.prefs.out_name, res)
		return 0
	}
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
	for (let _t850 = 0; _t850 < infos.length; _t850++) {
		const info = Array_get(infos, _t850)
		bait__errors__Message_print(info)
	}
}

function bait__builder__Builder_print_errors_and_warnings(b, parser_errs) {
	let nr_warns = 0
	let nr_errors = 0
	for (let _t850 = 0; _t850 < b.parsed_files.length; _t850++) {
		const f = Array_get(b.parsed_files, _t850)
		nr_warns += f.warnings.length
		nr_errors += f.errors.length
		bait__builder__Builder_print_infos(b, f.infos)
		if (b.prefs.warn_is_error) {
			for (let _t851 = 0; _t851 < f.warnings.length; _t851++) {
				const warn = Array_get(f.warnings, _t851)
				bait__errors__err(warn.path, warn.pos, warn.msg)
			}
		} else if (!b.prefs.hide_warnings) {
			for (let _t851 = 0; _t851 < f.warnings.length; _t851++) {
				const warn = Array_get(f.warnings, _t851)
				bait__errors__Message_print(warn)
			}
		}
		for (let _t851 = 0; _t851 < f.errors.length; _t851++) {
			const err = Array_get(f.errors, _t851)
			bait__errors__Message_print(err)
			if (parser_errs) {
				return true
			}
		}
	}
	nr_errors += b.checker.errors.length
	for (let _t852 = 0; _t852 < b.checker.errors.length; _t852++) {
		const err = Array_get(b.checker.errors, _t852)
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
	for (let _t857 = 0; _t857 < Map_get_set(deps, pkg, new bait_Array({ data: [], length: 0 })).length; _t857++) {
		const d = Array_get(Map_get_set(deps, pkg, new bait_Array({ data: [], length: 0 })), _t857)
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
	for (let _t860 = 0; _t860 < prefs.args.length; _t860++) {
		const a = Array_get(prefs.args, _t860)
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


const bait__util__VERSION = from_js_string("0.0.8")
const bait__util__FULL_VERSION = from_js_string(`${bait__util__VERSION.str} ${from_js_string("252dfdb").str}`)

const bait__util__tools__TOOLS = new bait_Array({ data: [from_js_string("ast"), from_js_string("init"), from_js_string("self"), from_js_string("up"), from_js_string("symlink"), from_js_string("doctor"), from_js_string("help"), from_js_string("test-all"), from_js_string("build-examples"), from_js_string("build-tools"), from_js_string("check-md")], length: 11 })
function bait__util__tools__is_tool(name) {
	return Array_contains_string(bait__util__tools__TOOLS, name)
}

const bait__util__tools__VERBOSE = Array_contains_string(os__ARGS, from_js_string("--verbose")) || Array_contains_string(os__ARGS, from_js_string("-v"))
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


function main() {
	const args = os__user_args()
	bait__util__timers__start(from_js_string("PREFS"))
	let prefs = bait__preference__parse_args(args)
	bait__util__timers__set_show(prefs.show_timings)
	bait__util__timers__show(from_js_string("PREFS"))
	if (bait__util__tools__is_tool(prefs.command)) {
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
