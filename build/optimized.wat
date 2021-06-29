(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $none_=>_none (func))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $f32_=>_f32 (func (param f32) (result f32)))
 (type $f32_f32_=>_f32 (func (param f32 f32) (result f32)))
 (type $i32_=>_f32 (func (param i32) (result f32)))
 (type $i32_i32_=>_f32 (func (param i32 i32) (result f32)))
 (type $f32_=>_i32 (func (param f32) (result i32)))
 (type $f32_f32_=>_i32 (func (param f32 f32) (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (global $assembly/index/Uint8ClampedArrayID i32 (i32.const 3))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/math/rempio2f_y (mut f64) (f64.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 2784))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 19244))
 (memory $0 1)
 (data (i32.const 1036) "\bc")
 (data (i32.const 1048) "\01\00\00\00\a6\00\00\000\001\002\003\004\005\006\007\008\009\00A\00B\00C\00D\00E\00F\00G\00H\00I\00J\00K\00L\00M\00N\00O\00P\00Q\00R\00S\00T\00U\00V\00W\00X\00Y\00Z\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z\00#\00$\00%\00*\00+\00,\00-\00.\00:\00;\00=\00?\00@\00[\00]\00^\00_\00{\00|\00}\00~")
 (data (i32.const 1228) ",")
 (data (i32.const 1240) "\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1276) "<")
 (data (i32.const 1288) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1340) "<")
 (data (i32.const 1352) "\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1404) "<")
 (data (i32.const 1416) "\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data (i32.const 1532) "<")
 (data (i32.const 1544) "\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1596) ",")
 (data (i32.const 1608) "\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data (i32.const 1676) "<")
 (data (i32.const 1688) "\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1744) ")\15DNn\83\f9\a2\c0\dd4\f5\d1W\'\fcA\90C<\99\95b\dba\c5\bb\de\abcQ\fe")
 (data (i32.const 1788) "<")
 (data (i32.const 1800) "\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1856) "\be\f3\f8y\eca\f6?\190\96[\c6\fe\de\bf=\88\afJ\edq\f5?\a4\fc\d42h\0b\db\bf\b0\10\f0\f09\95\f4?{\b7\1f\n\8bA\d7\bf\85\03\b8\b0\95\c9\f3?{\cfm\1a\e9\9d\d3\bf\a5d\88\0c\19\0d\f3?1\b6\f2\f3\9b\1d\d0\bf\a0\8e\0b{\"^\f2?\f0z;\1b\1d|\c9\bf?4\1aJJ\bb\f1?\9f<\af\93\e3\f9\c2\bf\ba\e5\8a\f0X#\f1?\\\8dx\bf\cb`\b9\bf\a7\00\99A?\95\f0?\ce_G\b6\9do\aa\bf\00\00\00\00\00\00\f0?\00\00\00\00\00\00\00\00\acG\9a\fd\8c`\ee?=\f5$\9f\ca8\b3?\a0j\02\1f\b3\a4\ec?\ba\918T\a9v\c4?\e6\fcjW6 \eb?\d2\e4\c4J\0b\84\ce?-\aa\a1c\d1\c2\e9?\1ce\c6\f0E\06\d4?\edAx\03\e6\86\e8?\f8\9f\1b,\9c\8e\d8?bHS\f5\dcg\e7?\cc{\b1N\a4\e0\dc?")
 (data (i32.const 2118) "\f0?t\85\15\d3\b0\d9\ef?\0f\89\f9lX\b5\ef?Q[\12\d0\01\93\ef?{Q}<\b8r\ef?\aa\b9h1\87T\ef?8bunz8\ef?\e1\de\1f\f5\9d\1e\ef?\15\b71\n\fe\06\ef?\cb\a9:7\a7\f1\ee?\"4\12L\a6\de\ee?-\89a`\08\ce\ee?\'*6\d5\da\bf\ee?\82O\9dV+\b4\ee?)TH\dd\07\ab\ee?\85U:\b0~\a4\ee?\cd;\7ff\9e\a0\ee?t_\ec\e8u\9f\ee?\87\01\ebs\14\a1\ee?\13\ceL\99\89\a5\ee?\db\a0*B\e5\ac\ee?\e5\c5\cd\b07\b7\ee?\90\f0\a3\82\91\c4\ee?]%>\b2\03\d5\ee?\ad\d3Z\99\9f\e8\ee?G^\fb\f2v\ff\ee?\9cR\85\dd\9b\19\ef?i\90\ef\dc 7\ef?\87\a4\fb\dc\18X\ef?_\9b{3\97|\ef?\da\90\a4\a2\af\a4\ef?@En[v\d0\ef?")
 (data (i32.const 2380) "|")
 (data (i32.const 2392) "\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y")
 (data (i32.const 2508) "\1c")
 (data (i32.const 2520) "\01")
 (data (i32.const 2540) ",")
 (data (i32.const 2552) "\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 2588) "<")
 (data (i32.const 2600) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (data (i32.const 2652) "<")
 (data (i32.const 2664) "\01\00\00\00*\00\00\00O\00b\00j\00e\00c\00t\00 \00a\00l\00r\00e\00a\00d\00y\00 \00p\00i\00n\00n\00e\00d")
 (data (i32.const 2716) "<")
 (data (i32.const 2728) "\01\00\00\00(\00\00\00O\00b\00j\00e\00c\00t\00 \00i\00s\00 \00n\00o\00t\00 \00p\00i\00n\00n\00e\00d")
 (data (i32.const 2784) "\t\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 2812) "A\00\00\00\02\00\00\00$\19\00\00\00\00\00\00\04A\00\00\00\00\00\00\02\19\00\00\00\00\00\00\02\t\00\00\00\00\00\00\02A")
 (export "Uint8ClampedArrayID" (global $assembly/index/Uint8ClampedArrayID))
 (export "__new" (func $~lib/rt/itcms/__new))
 (export "__pin" (func $~lib/rt/itcms/__pin))
 (export "__unpin" (func $~lib/rt/itcms/__unpin))
 (export "__collect" (func $~lib/rt/itcms/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "memory" (memory $0))
 (export "__setArgumentsLength" (func $~setArgumentsLength))
 (export "encode" (func $export:assembly/encode/encode))
 (export "isBlurhashValid" (func $export:assembly/decode/isBlurhashValid))
 (export "decode" (func $export:assembly/decode/decode@varargs))
 (start $~start)
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  i32.const 1552
  call $~lib/rt/itcms/__visit
  i32.const 1248
  call $~lib/rt/itcms/__visit
  i32.const 2400
  call $~lib/rt/itcms/__visit
  i32.const 1360
  call $~lib/rt/itcms/__visit
  i32.const 2672
  call $~lib/rt/itcms/__visit
  i32.const 2736
  call $~lib/rt/itcms/__visit
  i32.const 1056
  call $~lib/rt/itcms/__visit
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.const 3
    i32.ne
    if
     i32.const 0
     i32.const 1424
     i32.const 159
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.const -4
  i32.and
  local.tee $1
  i32.eqz
  if
   i32.const 0
   local.get $0
   i32.const 19244
   i32.lt_u
   local.get $0
   i32.load offset=8
   select
   i32.eqz
   if
    i32.const 0
    i32.const 1424
    i32.const 127
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   return
  end
  local.get $0
  i32.load offset=8
  local.tee $0
  i32.eqz
  if
   i32.const 0
   i32.const 1424
   i32.const 131
   i32.const 16
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.store offset=8
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1424
    i32.const 147
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  global.get $~lib/rt/itcms/toSpace
  local.set $2
  local.get $0
  i32.load offset=12
  local.tee $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 2784
   i32.load
   i32.gt_u
   if
    i32.const 1552
    i32.const 1616
    i32.const 22
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 3
   i32.shl
   i32.const 2788
   i32.add
   i32.load
   i32.const 32
   i32.and
  end
  if (result i32)
   global.get $~lib/rt/itcms/white
   i32.eqz
  else
   i32.const 2
  end
  local.set $3
  local.get $2
  i32.load offset=8
  local.set $1
  local.get $0
  local.get $2
  local.get $3
  i32.or
  i32.store offset=4
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $0
  local.get $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
  local.get $2
  local.get $0
  i32.store offset=8
 )
 (func $~lib/rt/itcms/__visit (param $0 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1696
   i32.const 268
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1696
   i32.const 270
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $2
  else
   i32.const 31
   local.get $2
   i32.const 1073741820
   local.get $2
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $2
   i32.clz
   i32.sub
   local.set $3
   local.get $2
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
   local.set $3
  end
  local.get $2
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1696
   i32.const 284
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $4
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=8
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=4
  end
  local.get $1
  local.get $0
  local.get $2
  local.get $3
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.get $2
   local.get $3
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    local.tee $4
    i32.load offset=4
    i32.const -2
    local.get $2
    i32.rotl
    i32.and
    local.set $1
    local.get $4
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $3
     i32.rotl
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1696
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1696
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $4
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $3
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   i32.load
   local.set $2
  end
  local.get $3
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $1
   i32.load
   local.tee $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1696
    i32.const 221
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $3
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $3
  i32.const -4
  i32.and
  local.tee $3
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1696
   i32.const 233
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.get $4
  i32.ne
  if
   i32.const 0
   i32.const 1696
   i32.const 234
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $3
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   local.get $3
   i32.const 1073741820
   local.get $3
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 7
   i32.sub
   local.set $5
   local.get $3
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $3
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $5
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1696
   i32.const 251
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=4
  end
  local.get $0
  local.get $3
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $5
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $5
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 1696
   i32.const 377
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const -16
  i32.and
  local.get $0
  i32.load offset=1568
  local.tee $2
  if
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1696
    i32.const 384
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $2
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1696
    i32.const 397
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 1
  i32.lt_s
  if (result i32)
   i32.const 1
   local.get $0
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 19248
  i32.const 0
  i32.store
  i32.const 20816
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 19248
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $0
      local.get $1
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 19248
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 19248
  i32.const 20820
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 19248
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $folding-inner0
   block $break|0
    block $case2|0
     block $case1|0
      block $case0|0
       global.get $~lib/rt/itcms/state
       br_table $case0|0 $case1|0 $case2|0 $break|0
      end
      i32.const 1
      global.set $~lib/rt/itcms/state
      i32.const 0
      global.set $~lib/rt/itcms/visitCount
      call $~lib/rt/itcms/visitRoots
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/iter
      br $folding-inner0
     end
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.set $1
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|1
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      if
       local.get $0
       global.set $~lib/rt/itcms/iter
       local.get $1
       local.get $0
       i32.load offset=4
       i32.const 3
       i32.and
       i32.ne
       if
        local.get $0
        local.get $1
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        i32.or
        i32.store offset=4
        i32.const 0
        global.set $~lib/rt/itcms/visitCount
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
        br $folding-inner0
       end
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|1
      end
     end
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     i32.eq
     if
      global.get $~lib/memory/__stack_pointer
      local.set $0
      loop $while-continue|0
       local.get $0
       i32.const 19244
       i32.lt_u
       if
        local.get $0
        i32.load
        call $~lib/rt/itcms/__visit
        local.get $0
        i32.const 4
        i32.add
        local.set $0
        br $while-continue|0
       end
      end
      global.get $~lib/rt/itcms/iter
      i32.load offset=4
      i32.const -4
      i32.and
      local.set $0
      loop $while-continue|2
       local.get $0
       global.get $~lib/rt/itcms/toSpace
       i32.ne
       if
        local.get $1
        local.get $0
        i32.load offset=4
        i32.const 3
        i32.and
        i32.ne
        if
         local.get $0
         local.get $1
         local.get $0
         i32.load offset=4
         i32.const -4
         i32.and
         i32.or
         i32.store offset=4
         local.get $0
         i32.const 20
         i32.add
         call $~lib/rt/__visit_members
        end
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        local.set $0
        br $while-continue|2
       end
      end
      global.get $~lib/rt/itcms/fromSpace
      local.set $0
      global.get $~lib/rt/itcms/toSpace
      global.set $~lib/rt/itcms/fromSpace
      local.get $0
      global.set $~lib/rt/itcms/toSpace
      local.get $1
      global.set $~lib/rt/itcms/white
      local.get $0
      i32.load offset=4
      i32.const -4
      i32.and
      global.set $~lib/rt/itcms/iter
      i32.const 2
      global.set $~lib/rt/itcms/state
     end
     br $folding-inner0
    end
    global.get $~lib/rt/itcms/iter
    local.tee $0
    global.get $~lib/rt/itcms/toSpace
    i32.ne
    if
     local.get $0
     i32.load offset=4
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/white
     i32.eqz
     local.get $0
     i32.load offset=4
     i32.const 3
     i32.and
     i32.ne
     if
      i32.const 0
      i32.const 1424
      i32.const 228
      i32.const 20
      call $~lib/builtins/abort
      unreachable
     end
     local.get $0
     i32.const 19244
     i32.lt_u
     if
      local.get $0
      i32.const 0
      i32.store offset=4
      local.get $0
      i32.const 0
      i32.store offset=8
     else
      global.get $~lib/rt/itcms/total
      local.get $0
      i32.load
      i32.const -4
      i32.and
      i32.const 4
      i32.add
      i32.sub
      global.set $~lib/rt/itcms/total
      local.get $0
      i32.const 4
      i32.add
      local.tee $0
      i32.const 19244
      i32.ge_u
      if
       global.get $~lib/rt/tlsf/ROOT
       i32.eqz
       if
        call $~lib/rt/tlsf/initialize
       end
       global.get $~lib/rt/tlsf/ROOT
       local.get $0
       i32.const 4
       i32.sub
       local.set $1
       local.get $0
       i32.const 15
       i32.and
       i32.const 1
       local.get $0
       select
       if (result i32)
        i32.const 1
       else
        local.get $1
        i32.load
        i32.const 1
        i32.and
       end
       if
        i32.const 0
        i32.const 1696
        i32.const 559
        i32.const 3
        call $~lib/builtins/abort
        unreachable
       end
       local.get $1
       local.tee $0
       i32.load
       i32.const 1
       i32.or
       local.set $1
       local.get $0
       local.get $1
       i32.store
       local.get $0
       call $~lib/rt/tlsf/insertBlock
      end
     end
     i32.const 10
     return
    end
    global.get $~lib/rt/itcms/toSpace
    local.tee $0
    local.get $0
    i32.store offset=4
    global.get $~lib/rt/itcms/toSpace
    local.tee $0
    local.get $0
    i32.store offset=8
    i32.const 0
    global.set $~lib/rt/itcms/state
   end
   i32.const 0
   return
  end
  global.get $~lib/rt/itcms/visitCount
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   local.get $1
   i32.const 536870910
   i32.lt_u
   if
    local.get $1
    i32.const 1
    i32.const 27
    local.get $1
    i32.clz
    i32.sub
    i32.shl
    i32.add
    i32.const 1
    i32.sub
    local.set $1
   end
   local.get $1
   i32.const 31
   local.get $1
   i32.clz
   i32.sub
   local.tee $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1696
   i32.const 330
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1696
     i32.const 343
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   local.tee $2
   i32.const 1
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 2
   i32.sub
   i32.const 0
   i32.store8
   local.get $2
   i32.const 3
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 4
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   local.tee $1
   i32.const 4
   i32.sub
   i32.const 0
   i32.store
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 12
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 8
   i32.sub
   i32.const 0
   i32.store
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 28
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 24
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 20
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 16
   i32.sub
   i32.const 0
   i32.store
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 1360
   i32.const 1424
   i32.const 260
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt
    i32.const 2048
    local.set $3
    loop $do-continue|0
     local.get $3
     call $~lib/rt/itcms/step
     i32.sub
     local.set $3
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
      global.get $~lib/rt/itcms/total
      i64.extend_i32_u
      i64.const 200
      i64.mul
      i64.const 100
      i64.div_u
      i32.wrap_i64
      i32.const 1024
      i32.add
      global.set $~lib/rt/itcms/threshold
      br $__inlined_func$~lib/rt/itcms/interrupt
     end
     local.get $3
     i32.const 0
     i32.gt_s
     br_if $do-continue|0
    end
    global.get $~lib/rt/itcms/total
    local.tee $3
    local.get $3
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  local.get $0
  i32.const 16
  i32.add
  local.set $6
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $6
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1360
   i32.const 1696
   i32.const 458
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.tee $2
  local.get $6
  i32.const 12
  i32.le_u
  if (result i32)
   i32.const 12
  else
   local.get $6
   i32.const 19
   i32.add
   i32.const -16
   i32.and
   i32.const 4
   i32.sub
  end
  local.tee $3
  call $~lib/rt/tlsf/searchBlock
  local.tee $6
  i32.eqz
  if
   local.get $3
   i32.const 536870910
   i32.lt_u
   if (result i32)
    local.get $3
    i32.const 1
    i32.const 27
    local.get $3
    i32.clz
    i32.sub
    i32.shl
    i32.const 1
    i32.sub
    i32.add
   else
    local.get $3
   end
   i32.const 4
   memory.size
   local.tee $6
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   local.get $2
   i32.load offset=1568
   i32.ne
   i32.shl
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.set $5
   local.get $6
   local.get $5
   local.get $5
   local.get $6
   i32.lt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $5
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $2
   local.get $6
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $2
   local.get $3
   call $~lib/rt/tlsf/searchBlock
   local.tee $6
   i32.eqz
   if
    i32.const 0
    i32.const 1696
    i32.const 496
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $3
  local.get $6
  i32.load
  i32.const -4
  i32.and
  i32.gt_u
  if
   i32.const 0
   i32.const 1696
   i32.const 498
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.get $6
  call $~lib/rt/tlsf/removeBlock
  local.get $6
  i32.load
  local.set $5
  local.get $3
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1696
   i32.const 357
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  i32.const -4
  i32.and
  local.get $3
  i32.sub
  local.tee $4
  i32.const 16
  i32.ge_u
  if
   local.get $6
   local.get $3
   local.get $5
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $3
   local.get $6
   i32.const 4
   i32.add
   i32.add
   local.tee $3
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $2
   local.get $3
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $6
   local.get $5
   i32.const -2
   i32.and
   i32.store
   local.get $6
   i32.const 4
   i32.add
   local.tee $3
   local.get $6
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $3
   local.get $6
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $6
  local.get $1
  i32.store offset=12
  local.get $6
  local.get $0
  i32.store offset=16
  global.get $~lib/rt/itcms/fromSpace
  local.tee $3
  i32.load offset=8
  local.set $1
  local.get $6
  local.get $3
  global.get $~lib/rt/itcms/white
  i32.or
  i32.store offset=4
  local.get $6
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $6
  local.get $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
  local.get $3
  local.get $6
  i32.store offset=8
  global.get $~lib/rt/itcms/total
  local.get $6
  i32.load
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $6
  i32.const 20
  i32.add
  local.tee $1
  local.get $0
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $~lib/math/NativeMathf.cos (param $0 f32) (result f32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (local $10 f64)
  (local $11 f64)
  (local $12 f64)
  block $folding-inner0
   local.get $0
   i32.reinterpret_f32
   local.tee $2
   i32.const 31
   i32.shr_u
   local.set $9
   local.get $2
   i32.const 2147483647
   i32.and
   local.tee $1
   i32.const 1061752794
   i32.le_u
   if
    local.get $1
    i32.const 964689920
    i32.lt_u
    if
     f32.const 1
     return
    end
    local.get $0
    f64.promote_f32
    local.tee $12
    local.get $12
    f64.mul
    local.tee $11
    local.get $11
    f64.mul
    local.set $12
    br $folding-inner0
   end
   local.get $1
   i32.const 1081824209
   i32.le_u
   if
    local.get $1
    i32.const 1075235811
    i32.gt_u
    if
     local.get $0
     f64.promote_f32
     local.tee $12
     f64.const 3.141592653589793
     f64.add
     local.get $12
     f64.const 3.141592653589793
     f64.sub
     local.get $9
     select
     local.tee $12
     local.get $12
     f64.mul
     local.tee $11
     local.get $11
     f64.mul
     local.set $12
     local.get $11
     f64.const -0.499999997251031
     f64.mul
     f64.const 1
     f64.add
     local.get $12
     f64.const 0.04166662332373906
     f64.mul
     f64.add
     local.get $12
     local.get $11
     f64.mul
     local.get $11
     f64.const 2.439044879627741e-05
     f64.mul
     f64.const -0.001388676377460993
     f64.add
     f64.mul
     f64.add
     f32.demote_f64
     f32.neg
     return
    else
     local.get $9
     if (result f64)
      local.get $0
      f64.promote_f32
      f64.const 1.5707963267948966
      f64.add
      local.tee $11
      local.get $11
      f64.mul
      local.tee $10
      local.get $11
      f64.mul
     else
      f64.const 1.5707963267948966
      local.get $0
      f64.promote_f32
      f64.sub
      local.tee $11
      local.get $11
      f64.mul
      local.tee $10
      local.get $11
      f64.mul
     end
     local.set $12
     local.get $11
     local.get $12
     local.get $10
     f64.const 0.008333329385889463
     f64.mul
     f64.const -0.16666666641626524
     f64.add
     f64.mul
     f64.add
     local.get $12
     local.get $10
     local.get $10
     f64.mul
     f64.mul
     local.get $10
     f64.const 2.718311493989822e-06
     f64.mul
     f64.const -1.9839334836096632e-04
     f64.add
     f64.mul
     f64.add
     f32.demote_f64
     return
    end
    unreachable
   end
   local.get $1
   i32.const 1088565717
   i32.le_u
   if
    local.get $1
    i32.const 1085271519
    i32.gt_u
    if
     local.get $0
     f64.promote_f32
     local.tee $12
     f64.const 6.283185307179586
     f64.add
     local.get $12
     f64.const 6.283185307179586
     f64.sub
     local.get $9
     select
     local.tee $12
     local.get $12
     f64.mul
     local.tee $11
     local.get $11
     f64.mul
     local.set $12
     br $folding-inner0
    else
     local.get $9
     if (result f64)
      local.get $0
      f32.neg
      f64.promote_f32
      f64.const 4.71238898038469
      f64.sub
      local.tee $11
      local.get $11
      f64.mul
      local.tee $10
      local.get $11
      f64.mul
     else
      local.get $0
      f64.promote_f32
      f64.const 4.71238898038469
      f64.sub
      local.tee $11
      local.get $11
      f64.mul
      local.tee $10
      local.get $11
      f64.mul
     end
     local.set $12
     local.get $11
     local.get $12
     local.get $10
     f64.const 0.008333329385889463
     f64.mul
     f64.const -0.16666666641626524
     f64.add
     f64.mul
     f64.add
     local.get $12
     local.get $10
     local.get $10
     f64.mul
     f64.mul
     local.get $10
     f64.const 2.718311493989822e-06
     f64.mul
     f64.const -1.9839334836096632e-04
     f64.add
     f64.mul
     f64.add
     f32.demote_f64
     return
    end
    unreachable
   end
   local.get $1
   i32.const 2139095040
   i32.ge_u
   if
    local.get $0
    local.get $0
    f32.sub
    return
   end
   block $~lib/math/rempio2f|inlined.0 (result i32)
    local.get $1
    local.tee $2
    i32.const 1305022427
    i32.lt_u
    if
     local.get $0
     f64.promote_f32
     local.tee $12
     f64.const 0.6366197723675814
     f64.mul
     f64.nearest
     local.set $11
     local.get $12
     local.get $11
     f64.const 1.5707963109016418
     f64.mul
     f64.sub
     local.get $11
     f64.const 1.5893254773528196e-08
     f64.mul
     f64.sub
     global.set $~lib/math/rempio2f_y
     local.get $11
     i32.trunc_f64_s
     br $~lib/math/rempio2f|inlined.0
    end
    local.get $2
    i32.const 23
    i32.shr_s
    i32.const 152
    i32.sub
    local.tee $2
    i32.const 6
    i32.shr_s
    i32.const 3
    i32.shl
    i32.const 1744
    i32.add
    local.tee $4
    i64.load
    local.set $7
    local.get $4
    i64.load offset=8
    local.set $6
    local.get $2
    i32.const 63
    i32.and
    i64.extend_i32_s
    local.tee $8
    i64.const 32
    i64.gt_u
    if (result i64)
     local.get $6
     local.get $8
     i64.const 32
     i64.sub
     i64.shl
     local.get $4
     i64.load offset=16
     i64.const 96
     local.get $8
     i64.sub
     i64.shr_u
     i64.or
    else
     local.get $6
     i64.const 32
     local.get $8
     i64.sub
     i64.shr_u
    end
    local.set $3
    f64.const 8.515303950216386e-20
    local.get $0
    f64.promote_f32
    f64.copysign
    local.get $1
    i32.const 8388607
    i32.and
    i32.const 8388608
    i32.or
    i64.extend_i32_s
    local.tee $5
    local.get $7
    local.get $8
    i64.shl
    local.get $6
    i64.const 64
    local.get $8
    i64.sub
    i64.shr_u
    i64.or
    i64.mul
    local.get $3
    local.get $5
    i64.mul
    i64.const 32
    i64.shr_u
    i64.add
    local.tee $7
    i64.const 2
    i64.shl
    local.tee $5
    f64.convert_i64_s
    f64.mul
    global.set $~lib/math/rempio2f_y
    i32.const 0
    local.get $7
    i64.const 62
    i64.shr_u
    local.get $5
    i64.const 63
    i64.shr_u
    i64.add
    i32.wrap_i64
    local.tee $2
    i32.sub
    local.get $2
    local.get $9
    select
   end
   local.set $2
   global.get $~lib/math/rempio2f_y
   local.set $12
   local.get $2
   i32.const 1
   i32.and
   if (result f32)
    local.get $12
    local.get $12
    local.get $12
    f64.mul
    local.tee $11
    local.get $12
    f64.mul
    local.tee $12
    local.get $11
    f64.const 0.008333329385889463
    f64.mul
    f64.const -0.16666666641626524
    f64.add
    f64.mul
    f64.add
    local.get $12
    local.get $11
    local.get $11
    f64.mul
    f64.mul
    local.get $11
    f64.const 2.718311493989822e-06
    f64.mul
    f64.const -1.9839334836096632e-04
    f64.add
    f64.mul
    f64.add
    f32.demote_f64
   else
    local.get $12
    local.get $12
    f64.mul
    local.tee $11
    local.get $11
    f64.mul
    local.set $12
    local.get $11
    f64.const -0.499999997251031
    f64.mul
    f64.const 1
    f64.add
    local.get $12
    f64.const 0.04166662332373906
    f64.mul
    f64.add
    local.get $12
    local.get $11
    f64.mul
    local.get $11
    f64.const 2.439044879627741e-05
    f64.mul
    f64.const -0.001388676377460993
    f64.add
    f64.mul
    f64.add
    f32.demote_f64
   end
   local.tee $0
   f32.neg
   local.get $0
   local.get $2
   i32.const 1
   i32.add
   i32.const 2
   i32.and
   select
   return
  end
  local.get $11
  f64.const -0.499999997251031
  f64.mul
  f64.const 1
  f64.add
  local.get $12
  f64.const 0.04166662332373906
  f64.mul
  f64.add
  local.get $12
  local.get $11
  f64.mul
  local.get $11
  f64.const 2.439044879627741e-05
  f64.mul
  f64.const -0.001388676377460993
  f64.add
  f64.mul
  f64.add
  f32.demote_f64
 )
 (func $~lib/typedarray/Uint8ClampedArray#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.ge_u
  if
   i32.const 1552
   i32.const 1808
   i32.const 294
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=4
  i32.add
  i32.load8_u
 )
 (func $~lib/math/NativeMathf.pow (param $0 f32) (param $1 f32) (result f32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f32)
  (local $6 f64)
  (local $7 f64)
  (local $8 i32)
  (local $9 i64)
  local.get $1
  f32.abs
  f32.const 2
  f32.le
  if
   local.get $1
   f32.const 2
   f32.eq
   if
    local.get $0
    local.get $0
    f32.mul
    return
   end
   local.get $1
   f32.const 0.5
   f32.eq
   if
    local.get $0
    f32.sqrt
    f32.abs
    f32.const inf
    local.get $0
    f32.const -inf
    f32.ne
    select
    return
   end
   local.get $1
   f32.const -1
   f32.eq
   if
    f32.const 1
    local.get $0
    f32.div
    return
   end
   local.get $1
   f32.const 1
   f32.eq
   if
    local.get $0
    return
   end
   local.get $1
   f32.const 0
   f32.eq
   if
    f32.const 1
    return
   end
  end
  block $~lib/util/math/powf_lut|inlined.0
   local.get $1
   i32.reinterpret_f32
   local.tee $3
   i32.const 1
   i32.shl
   i32.const 1
   i32.sub
   i32.const -16777217
   i32.ge_u
   local.tee $4
   local.get $0
   local.tee $5
   i32.reinterpret_f32
   local.tee $2
   i32.const 8388608
   i32.sub
   i32.const 2130706432
   i32.ge_u
   i32.or
   if
    local.get $4
    if
     f32.const 1
     local.set $0
     local.get $3
     i32.const 1
     i32.shl
     i32.eqz
     br_if $~lib/util/math/powf_lut|inlined.0
     f32.const nan:0x400000
     local.set $0
     local.get $2
     i32.const 1065353216
     i32.eq
     br_if $~lib/util/math/powf_lut|inlined.0
     local.get $5
     local.get $1
     f32.add
     local.set $0
     i32.const 1
     local.get $3
     i32.const 1
     i32.shl
     i32.const -16777216
     i32.gt_u
     local.get $2
     i32.const 1
     i32.shl
     i32.const -16777216
     i32.gt_u
     select
     br_if $~lib/util/math/powf_lut|inlined.0
     f32.const nan:0x400000
     local.set $0
     local.get $2
     i32.const 1
     i32.shl
     i32.const 2130706432
     i32.eq
     br_if $~lib/util/math/powf_lut|inlined.0
     f32.const 0
     local.set $0
     local.get $3
     i32.const 31
     i32.shr_u
     i32.eqz
     local.get $2
     i32.const 1
     i32.shl
     i32.const 2130706432
     i32.lt_u
     i32.eq
     br_if $~lib/util/math/powf_lut|inlined.0
     local.get $1
     local.get $1
     f32.mul
     local.set $0
     br $~lib/util/math/powf_lut|inlined.0
    end
    local.get $2
    i32.const 1
    i32.shl
    i32.const 1
    i32.sub
    i32.const -16777217
    i32.ge_u
    if
     f32.const 1
     local.get $5
     local.get $5
     f32.mul
     local.tee $0
     f32.neg
     local.get $0
     local.get $2
     i32.const 31
     i32.shr_u
     if (result i32)
      block $~lib/util/math/checkintf|inlined.0 (result i32)
       i32.const 0
       local.get $3
       i32.const 23
       i32.shr_u
       i32.const 255
       i32.and
       local.tee $4
       i32.const 127
       i32.lt_u
       br_if $~lib/util/math/checkintf|inlined.0
       drop
       i32.const 2
       local.get $4
       i32.const 150
       i32.gt_u
       br_if $~lib/util/math/checkintf|inlined.0
       drop
       i32.const 0
       local.get $3
       i32.const 1
       i32.const 150
       local.get $4
       i32.sub
       i32.shl
       local.tee $4
       i32.const 1
       i32.sub
       i32.and
       br_if $~lib/util/math/checkintf|inlined.0
       drop
       i32.const 1
       local.get $3
       local.get $4
       i32.and
       br_if $~lib/util/math/checkintf|inlined.0
       drop
       i32.const 2
      end
      i32.const 1
      i32.eq
     else
      i32.const 0
     end
     select
     local.tee $0
     f32.div
     local.get $0
     local.get $3
     i32.const 31
     i32.shr_u
     select
     local.set $0
     br $~lib/util/math/powf_lut|inlined.0
    end
    local.get $2
    i32.const 31
    i32.shr_u
    if
     local.get $5
     local.get $5
     f32.sub
     local.tee $0
     local.get $0
     f32.div
     local.set $0
     block $~lib/util/math/checkintf|inlined.1 (result i32)
      i32.const 0
      local.get $3
      local.tee $4
      i32.const 23
      i32.shr_u
      i32.const 255
      i32.and
      local.tee $3
      i32.const 127
      i32.lt_u
      br_if $~lib/util/math/checkintf|inlined.1
      drop
      i32.const 2
      local.get $3
      i32.const 150
      i32.gt_u
      br_if $~lib/util/math/checkintf|inlined.1
      drop
      i32.const 0
      local.get $4
      i32.const 1
      i32.const 150
      local.get $3
      i32.sub
      i32.shl
      local.tee $3
      i32.const 1
      i32.sub
      i32.and
      br_if $~lib/util/math/checkintf|inlined.1
      drop
      i32.const 1
      local.get $3
      local.get $4
      i32.and
      br_if $~lib/util/math/checkintf|inlined.1
      drop
      i32.const 2
     end
     local.tee $4
     i32.eqz
     br_if $~lib/util/math/powf_lut|inlined.0
     i32.const 65536
     i32.const 0
     local.get $4
     i32.const 1
     i32.eq
     select
     local.set $8
     local.get $2
     i32.const 2147483647
     i32.and
     local.set $2
    end
    local.get $2
    i32.const 8388608
    i32.lt_u
    if (result i32)
     local.get $5
     f32.const 8388608
     f32.mul
     i32.reinterpret_f32
     i32.const 2147483647
     i32.and
     i32.const 192937984
     i32.sub
    else
     local.get $2
    end
    local.set $2
   end
   local.get $2
   local.get $2
   i32.const 1060306944
   i32.sub
   local.tee $3
   i32.const -8388608
   i32.and
   local.tee $4
   i32.sub
   f32.reinterpret_i32
   f64.promote_f32
   local.get $3
   i32.const 19
   i32.shr_u
   i32.const 15
   i32.and
   i32.const 4
   i32.shl
   i32.const 1856
   i32.add
   local.tee $3
   f64.load
   f64.mul
   f64.const 1
   f64.sub
   local.tee $6
   local.get $6
   f64.mul
   local.set $7
   local.get $1
   f64.promote_f32
   local.get $6
   f64.const 0.288457581109214
   f64.mul
   f64.const -0.36092606229713164
   f64.add
   local.get $7
   local.get $7
   f64.mul
   f64.mul
   local.get $6
   f64.const 1.4426950408774342
   f64.mul
   local.get $3
   f64.load offset=8
   local.get $4
   i32.const 23
   i32.shr_s
   f64.convert_i32_s
   f64.add
   f64.add
   local.get $6
   f64.const 0.480898481472577
   f64.mul
   f64.const -0.7213474675006291
   f64.add
   local.get $7
   f64.mul
   f64.add
   f64.add
   f64.mul
   local.tee $6
   i64.reinterpret_f64
   i64.const 47
   i64.shr_u
   i64.const 65535
   i64.and
   i64.const 32959
   i64.ge_u
   if
    local.get $6
    f64.const 127.99999995700433
    f64.gt
    if
     f32.const -1584563250285286751870879e5
     f32.const 1584563250285286751870879e5
     local.get $8
     select
     f32.const 1584563250285286751870879e5
     f32.mul
     local.set $0
     br $~lib/util/math/powf_lut|inlined.0
    end
    local.get $6
    f64.const -150
    f64.le
    if
     f32.const -2.524354896707238e-29
     f32.const 2.524354896707238e-29
     local.get $8
     select
     f32.const 2.524354896707238e-29
     f32.mul
     local.set $0
     br $~lib/util/math/powf_lut|inlined.0
    end
   end
   local.get $6
   local.get $6
   f64.const 211106232532992
   f64.add
   local.tee $7
   f64.const 211106232532992
   f64.sub
   f64.sub
   local.tee $6
   f64.const 0.6931471806916203
   f64.mul
   f64.const 1
   f64.add
   local.get $6
   f64.const 0.05550361559341535
   f64.mul
   f64.const 0.2402284522445722
   f64.add
   local.get $6
   local.get $6
   f64.mul
   f64.mul
   f64.add
   local.get $7
   i64.reinterpret_f64
   local.tee $9
   i32.wrap_i64
   i32.const 31
   i32.and
   i32.const 3
   i32.shl
   i32.const 2112
   i32.add
   i64.load
   local.get $9
   local.get $8
   i64.extend_i32_u
   i64.add
   i64.const 47
   i64.shl
   i64.add
   f64.reinterpret_i64
   f64.mul
   f32.demote_f64
   local.set $0
  end
  local.get $0
 )
 (func $assembly/utils/SRGBToLinear (param $0 i32) (result f32)
  (local $1 f32)
  local.get $0
  f32.convert_i32_s
  f32.const 255
  f32.div
  local.tee $1
  f32.const 0.040449999272823334
  f32.le
  if
   local.get $1
   f32.const 12.920000076293945
   f32.div
   return
  end
  local.get $1
  f32.const 0.054999999701976776
  f32.add
  f32.const 1.0549999475479126
  f32.div
  f32.const 2.4000000953674316
  call $~lib/math/NativeMathf.pow
 )
 (func $~lib/util/memory/memcpy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  loop $while-continue|0
   local.get $1
   i32.const 3
   i32.and
   i32.const 0
   local.get $2
   select
   if
    local.get $0
    local.tee $3
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    local.tee $4
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    local.get $4
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  i32.const 3
  i32.and
  i32.eqz
  if
   loop $while-continue|1
    local.get $2
    i32.const 16
    i32.ge_u
    if
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     local.get $1
     i32.load offset=4
     i32.store offset=4
     local.get $0
     local.get $1
     i32.load offset=8
     i32.store offset=8
     local.get $0
     local.get $1
     i32.load offset=12
     i32.store offset=12
     local.get $1
     i32.const 16
     i32.add
     local.set $1
     local.get $0
     i32.const 16
     i32.add
     local.set $0
     local.get $2
     i32.const 16
     i32.sub
     local.set $2
     br $while-continue|1
    end
   end
   local.get $2
   i32.const 8
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    local.get $1
    i32.load offset=4
    i32.store offset=4
    local.get $1
    i32.const 8
    i32.add
    local.set $1
    local.get $0
    i32.const 8
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    local.get $0
    i32.const 4
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $1
    i32.const 2
    i32.add
    local.set $1
    local.get $0
    i32.const 2
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.get $1
    i32.load8_u
    i32.store8
   end
   return
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   block $break|2
    block $case2|2
     block $case1|2
      block $case0|2
       local.get $0
       i32.const 3
       i32.and
       i32.const 1
       i32.sub
       br_table $case0|2 $case1|2 $case2|2 $break|2
      end
      local.get $1
      i32.load
      local.set $5
      local.get $0
      local.get $1
      i32.load8_u
      i32.store8
      local.get $0
      i32.const 1
      i32.add
      local.tee $0
      local.get $1
      i32.const 1
      i32.add
      local.tee $1
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $4
      i32.const 2
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 2
      i32.add
      local.set $1
      local.get $4
      local.get $3
      i32.load8_u offset=1
      i32.store8 offset=1
      local.get $2
      i32.const 3
      i32.sub
      local.set $2
      loop $while-continue|3
       local.get $2
       i32.const 17
       i32.ge_u
       if
        local.get $0
        local.get $1
        i32.load offset=1
        local.tee $3
        i32.const 8
        i32.shl
        local.get $5
        i32.const 24
        i32.shr_u
        i32.or
        i32.store
        local.get $0
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $1
        i32.load offset=5
        local.tee $3
        i32.const 8
        i32.shl
        i32.or
        i32.store offset=4
        local.get $0
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $1
        i32.load offset=9
        local.tee $3
        i32.const 8
        i32.shl
        i32.or
        i32.store offset=8
        local.get $0
        local.get $1
        i32.load offset=13
        local.tee $5
        i32.const 8
        i32.shl
        local.get $3
        i32.const 24
        i32.shr_u
        i32.or
        i32.store offset=12
        local.get $1
        i32.const 16
        i32.add
        local.set $1
        local.get $0
        i32.const 16
        i32.add
        local.set $0
        local.get $2
        i32.const 16
        i32.sub
        local.set $2
        br $while-continue|3
       end
      end
      br $break|2
     end
     local.get $1
     i32.load
     local.set $5
     local.get $0
     local.get $1
     i32.load8_u
     i32.store8
     local.get $0
     local.tee $4
     i32.const 2
     i32.add
     local.set $0
     local.get $1
     local.tee $3
     i32.const 2
     i32.add
     local.set $1
     local.get $4
     local.get $3
     i32.load8_u offset=1
     i32.store8 offset=1
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     loop $while-continue|4
      local.get $2
      i32.const 18
      i32.ge_u
      if
       local.get $0
       local.get $1
       i32.load offset=2
       local.tee $3
       i32.const 16
       i32.shl
       local.get $5
       i32.const 16
       i32.shr_u
       i32.or
       i32.store
       local.get $0
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $1
       i32.load offset=6
       local.tee $3
       i32.const 16
       i32.shl
       i32.or
       i32.store offset=4
       local.get $0
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $1
       i32.load offset=10
       local.tee $3
       i32.const 16
       i32.shl
       i32.or
       i32.store offset=8
       local.get $0
       local.get $1
       i32.load offset=14
       local.tee $5
       i32.const 16
       i32.shl
       local.get $3
       i32.const 16
       i32.shr_u
       i32.or
       i32.store offset=12
       local.get $1
       i32.const 16
       i32.add
       local.set $1
       local.get $0
       i32.const 16
       i32.add
       local.set $0
       local.get $2
       i32.const 16
       i32.sub
       local.set $2
       br $while-continue|4
      end
     end
     br $break|2
    end
    local.get $1
    i32.load
    local.set $5
    local.get $0
    local.tee $3
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    local.tee $4
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    local.get $4
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    loop $while-continue|5
     local.get $2
     i32.const 19
     i32.ge_u
     if
      local.get $0
      local.get $1
      i32.load offset=3
      local.tee $3
      i32.const 24
      i32.shl
      local.get $5
      i32.const 8
      i32.shr_u
      i32.or
      i32.store
      local.get $0
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $1
      i32.load offset=7
      local.tee $3
      i32.const 24
      i32.shl
      i32.or
      i32.store offset=4
      local.get $0
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $1
      i32.load offset=11
      local.tee $3
      i32.const 24
      i32.shl
      i32.or
      i32.store offset=8
      local.get $0
      local.get $1
      i32.load offset=15
      local.tee $5
      i32.const 24
      i32.shl
      local.get $3
      i32.const 8
      i32.shr_u
      i32.or
      i32.store offset=12
      local.get $1
      i32.const 16
      i32.add
      local.set $1
      local.get $0
      i32.const 16
      i32.add
      local.set $0
      local.get $2
      i32.const 16
      i32.sub
      local.set $2
      br $while-continue|5
     end
    end
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $4
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $4
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $4
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $4
   i32.const 2
   i32.add
   local.set $0
   local.get $1
   local.tee $3
   i32.const 2
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.load8_u offset=1
   i32.store8 offset=1
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $1
   local.get $0
   i32.sub
   local.get $4
   i32.sub
   i32.const 0
   local.get $4
   i32.const 1
   i32.shl
   i32.sub
   i32.le_u
   if
    local.get $0
    local.get $1
    local.get $4
    call $~lib/util/memory/memcpy
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 1424
   i32.const 294
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $0
   i32.load offset=4
   i32.const 3
   i32.and
   local.tee $3
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $0
    local.get $1
    local.get $2
    select
    call $~lib/rt/itcms/Object#makeGray
   else
    global.get $~lib/rt/itcms/state
    i32.const 1
    i32.eq
    i32.const 0
    local.get $3
    i32.const 3
    i32.eq
    select
    if
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $~lib/string/String.__concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  block $__inlined_func$~lib/string/String#concat
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $3
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $4
   i32.add
   local.tee $2
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 2528
    local.set $2
    br $__inlined_func$~lib/string/String#concat
   end
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store
   local.get $2
   local.get $0
   local.get $3
   call $~lib/memory/memory.copy
   local.get $2
   local.get $3
   i32.add
   local.get $1
   local.get $4
   call $~lib/memory/memory.copy
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
  end
  local.get $2
 )
 (func $~lib/staticarray/StaticArray<f32>#__get (param $0 i32) (param $1 i32) (result f32)
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 1552
   i32.const 1296
   i32.const 113
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  f32.load
 )
 (func $assembly/utils/linearToSRGB (param $0 f32) (result i32)
  (local $1 f32)
  f32.const 0
  f32.const 1
  local.get $0
  f32.min
  f32.max
  local.tee $0
  f32.const 3.1308000907301903e-03
  f32.le
  if (result f32)
   local.get $0
   f32.const 12.920000076293945
   f32.mul
   f32.const 255
   f32.mul
   f32.const 0.5
   f32.add
   local.tee $1
   f32.ceil
   local.tee $0
   local.get $0
   f32.const 1
   f32.sub
   local.get $1
   local.get $0
   f32.const 0.5
   f32.sub
   f32.ge
   select
  else
   local.get $0
   f32.const 0.4166666567325592
   call $~lib/math/NativeMathf.pow
   f32.const 1.0549999475479126
   f32.mul
   f32.const 0.054999999701976776
   f32.sub
   f32.const 255
   f32.mul
   f32.const 0.5
   f32.add
   local.tee $1
   f32.ceil
   local.tee $0
   local.get $0
   f32.const 1
   f32.sub
   local.get $1
   local.get $0
   f32.const 0.5
   f32.sub
   f32.ge
   select
  end
  i32.trunc_f32_s
 )
 (func $assembly/encode/encodeACQuant (param $0 f32) (param $1 f32) (result i32)
  f32.const 0
  f32.const 18
  local.get $0
  local.get $1
  f32.div
  local.tee $0
  f32.abs
  f32.const 0.5
  call $~lib/math/NativeMathf.pow
  local.get $0
  f32.copysign
  f32.const 9
  f32.mul
  f32.const 9.5
  f32.add
  f32.min
  f32.max
  f32.floor
  i32.trunc_f32_s
 )
 (func $~lib/typedarray/Uint8ClampedArray#__set (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.ge_u
  if
   i32.const 1552
   i32.const 1808
   i32.const 305
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=4
  i32.add
  local.get $2
  i32.const 255
  local.get $2
  i32.sub
  i32.const 31
  i32.shr_s
  i32.or
  local.get $2
  i32.const 31
  i32.shr_s
  i32.const -1
  i32.xor
  i32.and
  i32.store8
 )
 (func $~lib/rt/itcms/__pin (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $1
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 3
   i32.eq
   if
    i32.const 2672
    i32.const 1424
    i32.const 337
    i32.const 7
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/pinSpace
   local.tee $3
   i32.load offset=8
   local.set $2
   local.get $1
   local.get $3
   i32.const 3
   i32.or
   i32.store offset=4
   local.get $1
   local.get $2
   i32.store offset=8
   local.get $2
   local.get $1
   local.get $2
   i32.load offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store offset=4
   local.get $3
   local.get $1
   i32.store offset=8
  end
  local.get $0
 )
 (func $~lib/rt/itcms/__unpin (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.const 3
  i32.ne
  if
   i32.const 2736
   i32.const 1424
   i32.const 351
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/state
  i32.const 1
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
  else
   local.get $0
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/fromSpace
   local.tee $2
   i32.load offset=8
   local.set $1
   local.get $0
   local.get $2
   global.get $~lib/rt/itcms/white
   i32.or
   i32.store offset=4
   local.get $0
   local.get $1
   i32.store offset=8
   local.get $1
   local.get $0
   local.get $1
   i32.load offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store offset=4
   local.get $2
   local.get $0
   i32.store offset=8
  end
 )
 (func $~lib/rt/itcms/__collect
  global.get $~lib/rt/itcms/state
  i32.const 0
  i32.gt_s
  if
   loop $while-continue|0
    global.get $~lib/rt/itcms/state
    if
     call $~lib/rt/itcms/step
     drop
     br $while-continue|0
    end
   end
  end
  call $~lib/rt/itcms/step
  drop
  loop $while-continue|1
   global.get $~lib/rt/itcms/state
   if
    call $~lib/rt/itcms/step
    drop
    br $while-continue|1
   end
  end
  global.get $~lib/rt/itcms/total
  i64.extend_i32_u
  i64.const 200
  i64.mul
  i64.const 100
  i64.div_u
  i32.wrap_i64
  i32.const 1024
  i32.add
  global.set $~lib/rt/itcms/threshold
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $folding-inner1
   block $folding-inner0
    block $invalid
     block $~lib/array/Array<~lib/staticarray/StaticArray<f32>>
      block $~lib/staticarray/StaticArray<~lib/staticarray/StaticArray<f32>>
       block $~lib/staticarray/StaticArray<f32>
        block $~lib/string/String
         block $~lib/arraybuffer/ArrayBuffer
          local.get $0
          i32.const 8
          i32.sub
          i32.load
          br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $folding-inner1 $folding-inner1 $~lib/staticarray/StaticArray<f32> $~lib/staticarray/StaticArray<~lib/staticarray/StaticArray<f32>> $folding-inner0 $folding-inner0 $~lib/array/Array<~lib/staticarray/StaticArray<f32>> $invalid
         end
         return
        end
        return
       end
       return
      end
      local.get $0
      local.get $0
      i32.const 20
      i32.sub
      i32.load offset=16
      i32.add
      local.set $1
      loop $while-continue|0
       local.get $0
       local.get $1
       i32.lt_u
       if
        local.get $0
        i32.load
        local.tee $2
        if
         local.get $2
         call $~lib/rt/itcms/__visit
        end
        local.get $0
        i32.const 4
        i32.add
        local.set $0
        br $while-continue|0
       end
      end
      return
     end
     local.get $0
     i32.load offset=4
     local.tee $1
     local.get $0
     i32.load offset=12
     i32.const 2
     i32.shl
     i32.add
     local.set $2
     loop $while-continue|00
      local.get $1
      local.get $2
      i32.lt_u
      if
       local.get $1
       i32.load
       local.tee $3
       if
        local.get $3
        call $~lib/rt/itcms/__visit
       end
       local.get $1
       i32.const 4
       i32.add
       local.set $1
       br $while-continue|00
      end
     end
     local.get $0
     i32.load
     call $~lib/rt/itcms/__visit
     return
    end
    unreachable
   end
   local.get $0
   i32.load
   call $~lib/rt/itcms/__visit
   return
  end
  local.get $0
  i32.load
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~setArgumentsLength (param $0 i32)
  local.get $0
  global.set $~argumentsLength
 )
 (func $~start
  memory.size
  i32.const 16
  i32.shl
  i32.const 19244
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 1476
  i32.const 1472
  i32.store
  i32.const 1480
  i32.const 1472
  i32.store
  i32.const 1472
  global.set $~lib/rt/itcms/pinSpace
  i32.const 1508
  i32.const 1504
  i32.store
  i32.const 1512
  i32.const 1504
  i32.store
  i32.const 1504
  global.set $~lib/rt/itcms/toSpace
  i32.const 1652
  i32.const 1648
  i32.store
  i32.const 1656
  i32.const 1648
  i32.store
  i32.const 1648
  global.set $~lib/rt/itcms/fromSpace
 )
 (func $assembly/base83/encode83 (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store
  i32.const 2528
  local.set $6
  local.get $2
  i32.const 2528
  i32.store
  i32.const 1
  local.set $5
  loop $for-loop|0
   local.get $1
   local.get $5
   i32.ge_s
   if
    i32.const 83
    local.set $4
    i32.const 1
    local.set $2
    block $__inlined_func$~lib/math/ipow32
     local.get $1
     local.get $5
     i32.sub
     local.tee $3
     i32.const 0
     i32.le_s
     if
      local.get $3
      i32.eqz
      local.set $2
      br $__inlined_func$~lib/math/ipow32
     else
      local.get $3
      i32.const 1
      i32.eq
      if
       i32.const 83
       local.set $2
       br $__inlined_func$~lib/math/ipow32
      else
       local.get $3
       i32.const 2
       i32.eq
       if
        i32.const 6889
        local.set $2
        br $__inlined_func$~lib/math/ipow32
       else
        local.get $3
        i32.const 32
        i32.lt_s
        if
         block $case4|0
          block $case3|0
           block $case2|0
            block $case1|0
             block $case0|0
              i32.const 31
              local.get $3
              i32.clz
              i32.sub
              br_table $case4|0 $case3|0 $case2|0 $case1|0 $case0|0 $__inlined_func$~lib/math/ipow32
             end
             i32.const 83
             i32.const 1
             local.get $3
             i32.const 1
             i32.and
             select
             local.set $2
             local.get $3
             i32.const 1
             i32.shr_u
             local.set $3
             i32.const 6889
             local.set $4
            end
            local.get $2
            local.get $4
            i32.mul
            local.get $2
            local.get $3
            i32.const 1
            i32.and
            select
            local.set $2
            local.get $3
            i32.const 1
            i32.shr_u
            local.set $3
            local.get $4
            local.get $4
            i32.mul
            local.set $4
           end
           local.get $2
           local.get $4
           i32.mul
           local.get $2
           local.get $3
           i32.const 1
           i32.and
           select
           local.set $2
           local.get $3
           i32.const 1
           i32.shr_u
           local.set $3
           local.get $4
           local.get $4
           i32.mul
           local.set $4
          end
          local.get $2
          local.get $4
          i32.mul
          local.get $2
          local.get $3
          i32.const 1
          i32.and
          select
          local.set $2
          local.get $3
          i32.const 1
          i32.shr_u
          local.set $3
          local.get $4
          local.get $4
          i32.mul
          local.set $4
         end
         local.get $2
         local.get $4
         i32.mul
         local.get $2
         local.get $3
         i32.const 1
         i32.and
         select
         local.set $2
         br $__inlined_func$~lib/math/ipow32
        end
       end
      end
     end
     loop $while-continue|1
      local.get $3
      if
       local.get $2
       local.get $4
       i32.mul
       local.get $2
       local.get $3
       i32.const 1
       i32.and
       select
       local.set $2
       local.get $3
       i32.const 1
       i32.shr_u
       local.set $3
       local.get $4
       local.get $4
       i32.mul
       local.set $4
       br $while-continue|1
      end
     end
    end
    local.get $0
    local.get $2
    i32.div_s
    i32.const 83
    i32.rem_s
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.tee $3
    i32.const 1056
    i32.store offset=4
    i32.const 1056
    local.get $2
    call $~lib/string/String#charAt
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    local.get $3
    local.get $6
    local.get $2
    call $~lib/string/String.__concat
    local.tee $6
    i32.store
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $6
 )
 (func $assembly/encode/encode (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 f32)
  (local $10 f32)
  (local $11 i32)
  (local $12 f32)
  (local $13 f32)
  (local $14 f32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 f32)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner2
   global.get $~lib/memory/__stack_pointer
   i32.const 2860
   i32.lt_s
   br_if $folding-inner2
   global.get $~lib/memory/__stack_pointer
   local.tee $6
   i64.const 0
   i64.store
   local.get $6
   i64.const 0
   i64.store offset=8
   local.get $6
   i64.const 0
   i64.store offset=16
   local.get $6
   i32.const 0
   i32.store offset=24
   block $folding-inner0
    i32.const 1
    local.get $4
    i32.const 9
    i32.gt_s
    i32.const 1
    local.get $4
    i32.const 1
    i32.lt_s
    i32.const 1
    local.get $3
    i32.const 9
    i32.gt_s
    local.get $3
    i32.const 1
    i32.lt_s
    select
    select
    select
    br_if $folding-inner0
    local.get $0
    i32.load offset=8
    local.get $1
    local.get $2
    i32.mul
    i32.const 2
    i32.shl
    i32.ne
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $7
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2860
    i32.lt_s
    br_if $folding-inner2
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.store
    local.get $3
    local.get $4
    i32.mul
    local.tee $6
    i32.const 268435455
    i32.gt_u
    if
     i32.const 1248
     i32.const 1296
     i32.const 88
     i32.const 60
     call $~lib/builtins/abort
     unreachable
    end
    global.get $~lib/memory/__stack_pointer
    local.get $6
    i32.const 2
    i32.shl
    local.tee $5
    i32.const 5
    call $~lib/rt/itcms/__new
    local.tee $6
    i32.store
    local.get $6
    local.get $5
    call $~lib/memory/memory.fill
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $7
    local.get $6
    i32.store
    loop $for-loop|0
     local.get $4
     local.get $11
     i32.gt_s
     if
      i32.const 0
      local.set $7
      loop $for-loop|1
       local.get $3
       local.get $7
       i32.gt_s
       if
        f32.const 0
        local.set $10
        i32.const 0
        local.set $5
        f32.const 0
        local.set $12
        f32.const 0
        local.set $13
        global.get $~lib/memory/__stack_pointer
        local.tee $17
        i32.const 12
        i32.sub
        global.set $~lib/memory/__stack_pointer
        global.get $~lib/memory/__stack_pointer
        i32.const 2860
        i32.lt_s
        br_if $folding-inner2
        global.get $~lib/memory/__stack_pointer
        local.tee $8
        i64.const 0
        i64.store
        local.get $8
        i32.const 0
        i32.store offset=8
        local.get $1
        i32.const 2
        i32.shl
        local.set $18
        f32.const 2
        f32.const 1
        i32.const 1
        local.get $11
        local.get $7
        select
        select
        local.set $19
        loop $for-loop|00
         local.get $1
         local.get $5
         i32.gt_s
         if
          i32.const 0
          local.set $8
          loop $for-loop|11
           local.get $2
           local.get $8
           i32.gt_s
           if
            local.get $10
            local.get $19
            local.get $5
            local.get $7
            i32.mul
            f32.convert_i32_s
            f32.const 3.1415927410125732
            f32.mul
            local.get $1
            f32.convert_i32_s
            f32.div
            call $~lib/math/NativeMathf.cos
            f32.mul
            local.get $8
            local.get $11
            i32.mul
            f32.convert_i32_s
            f32.const 3.1415927410125732
            f32.mul
            local.get $2
            f32.convert_i32_s
            f32.div
            call $~lib/math/NativeMathf.cos
            f32.mul
            local.tee $14
            local.get $0
            local.get $8
            local.get $18
            i32.mul
            local.tee $15
            local.get $5
            i32.const 2
            i32.shl
            local.tee $16
            i32.add
            call $~lib/typedarray/Uint8ClampedArray#__get
            call $assembly/utils/SRGBToLinear
            f32.mul
            f32.add
            local.set $10
            local.get $12
            local.get $14
            local.get $0
            local.get $15
            local.get $16
            i32.const 1
            i32.add
            i32.add
            call $~lib/typedarray/Uint8ClampedArray#__get
            call $assembly/utils/SRGBToLinear
            f32.mul
            f32.add
            local.set $12
            local.get $13
            local.get $14
            local.get $0
            local.get $15
            local.get $16
            i32.const 2
            i32.add
            i32.add
            call $~lib/typedarray/Uint8ClampedArray#__get
            call $assembly/utils/SRGBToLinear
            f32.mul
            f32.add
            local.set $13
            local.get $8
            i32.const 1
            i32.add
            local.set $8
            br $for-loop|11
           end
          end
          local.get $5
          i32.const 1
          i32.add
          local.set $5
          br $for-loop|00
         end
        end
        global.get $~lib/memory/__stack_pointer
        i32.const 3
        i32.const 6
        call $~lib/rt/__newArray
        local.tee $5
        i32.store offset=4
        global.get $~lib/memory/__stack_pointer
        local.tee $8
        local.get $5
        i32.load offset=4
        i32.store offset=8
        local.get $5
        i32.load offset=4
        local.get $10
        f32.const 1
        local.get $1
        local.get $2
        i32.mul
        f32.convert_i32_s
        f32.div
        local.tee $10
        f32.mul
        f32.store
        local.get $5
        i32.load offset=4
        local.get $12
        local.get $10
        f32.mul
        f32.store offset=4
        local.get $5
        i32.load offset=4
        local.get $13
        local.get $10
        f32.mul
        f32.store offset=8
        local.get $8
        local.get $5
        i32.store
        local.get $5
        call $~lib/staticarray/StaticArray.fromArray<f32>
        local.set $5
        global.get $~lib/memory/__stack_pointer
        i32.const 12
        i32.add
        global.set $~lib/memory/__stack_pointer
        local.get $17
        local.get $5
        i32.store offset=4
        local.get $7
        local.get $3
        local.get $11
        i32.mul
        i32.add
        local.tee $8
        local.get $6
        i32.const 20
        i32.sub
        i32.load offset=16
        i32.const 2
        i32.shr_u
        i32.ge_u
        if
         i32.const 1552
         i32.const 1296
         i32.const 128
         i32.const 41
         call $~lib/builtins/abort
         unreachable
        end
        local.get $6
        local.get $8
        i32.const 2
        i32.shl
        i32.add
        local.get $5
        i32.store
        local.get $6
        local.get $5
        i32.const 1
        call $~lib/rt/itcms/__link
        local.get $7
        i32.const 1
        i32.add
        local.set $7
        br $for-loop|1
       end
      end
      local.get $11
      i32.const 1
      i32.add
      local.set $11
      br $for-loop|0
     end
    end
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2860
    i32.lt_s
    br_if $folding-inner2
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.store
    local.get $6
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 2
    i32.shr_u
    i32.eqz
    if
     i32.const 1552
     i32.const 1296
     i32.const 113
     i32.const 41
     call $~lib/builtins/abort
     unreachable
    end
    global.get $~lib/memory/__stack_pointer
    local.get $6
    i32.load
    local.tee $2
    i32.store
    local.get $2
    i32.eqz
    if
     i32.const 2400
     i32.const 1296
     i32.const 117
     i32.const 40
     call $~lib/builtins/abort
     unreachable
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $0
    local.get $2
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.tee $11
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2860
    i32.lt_s
    br_if $folding-inner2
    global.get $~lib/memory/__stack_pointer
    local.tee $1
    i32.const 0
    i32.store
    i32.const 1
    local.get $6
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 2
    i32.shr_u
    local.tee $0
    local.get $0
    i32.const 1
    i32.gt_s
    select
    local.set $7
    local.get $1
    local.get $0
    local.get $7
    i32.sub
    local.tee $0
    i32.const 0
    local.get $0
    i32.const 0
    i32.gt_s
    select
    local.tee $5
    i32.const 8
    call $~lib/rt/__newArray
    local.tee $1
    i32.store
    local.get $1
    i32.load offset=4
    local.set $8
    local.get $6
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    local.set $6
    i32.const 0
    local.set $0
    local.get $5
    i32.const 2
    i32.shl
    local.set $7
    loop $while-continue|0
     local.get $0
     local.get $7
     i32.lt_u
     if
      local.get $0
      local.get $8
      i32.add
      local.get $0
      local.get $6
      i32.add
      i32.load
      local.tee $5
      i32.store
      local.get $1
      local.get $5
      i32.const 1
      call $~lib/rt/itcms/__link
      local.get $0
      i32.const 4
      i32.add
      local.set $0
      br $while-continue|0
     end
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $11
    local.get $1
    i32.store offset=12
    global.get $~lib/memory/__stack_pointer
    local.get $3
    local.get $4
    i32.const 9
    i32.mul
    i32.add
    i32.const 10
    i32.sub
    i32.const 1
    call $assembly/base83/encode83
    local.tee $4
    i32.store offset=16
    local.get $1
    i32.load offset=12
    i32.const 0
    i32.gt_s
    if (result i32)
     i32.const 0
     local.set $0
     loop $for-loop|2
      local.get $0
      local.get $1
      i32.load offset=12
      i32.lt_s
      if
       local.get $1
       local.get $0
       call $~lib/array/Array<~lib/staticarray/StaticArray<f32>>#__get
       local.set $3
       global.get $~lib/memory/__stack_pointer
       local.get $3
       i32.store offset=20
       local.get $3
       i32.const 0
       call $~lib/staticarray/StaticArray<f32>#__get
       local.get $9
       f32.max
       local.set $9
       local.get $1
       local.get $0
       call $~lib/array/Array<~lib/staticarray/StaticArray<f32>>#__get
       local.set $3
       global.get $~lib/memory/__stack_pointer
       local.get $3
       i32.store offset=20
       local.get $3
       i32.const 1
       call $~lib/staticarray/StaticArray<f32>#__get
       local.get $9
       f32.max
       local.set $9
       local.get $1
       local.get $0
       call $~lib/array/Array<~lib/staticarray/StaticArray<f32>>#__get
       local.set $3
       global.get $~lib/memory/__stack_pointer
       local.get $3
       i32.store offset=20
       local.get $3
       i32.const 2
       call $~lib/staticarray/StaticArray<f32>#__get
       local.get $9
       f32.max
       local.set $9
       local.get $0
       i32.const 1
       i32.add
       local.set $0
       br $for-loop|2
      end
     end
     f32.const 0
     f32.const 82
     local.get $9
     f32.const 166
     f32.mul
     f32.const 0.5
     f32.sub
     f32.min
     f32.max
     f32.floor
     i32.trunc_f32_s
     local.tee $0
     f32.convert_i32_s
     f32.const 1
     f32.add
     f32.const 166
     f32.div
     local.set $9
     global.get $~lib/memory/__stack_pointer
     local.set $3
     local.get $0
     i32.const 1
     call $assembly/base83/encode83
    else
     f32.const 1
     local.set $9
     global.get $~lib/memory/__stack_pointer
     local.set $3
     i32.const 0
     i32.const 1
     call $assembly/base83/encode83
    end
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store offset=24
    local.get $3
    local.get $4
    local.get $0
    call $~lib/string/String.__concat
    local.tee $3
    i32.store offset=16
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.const 0
    call $~lib/staticarray/StaticArray<f32>#__get
    local.get $2
    i32.const 1
    call $~lib/staticarray/StaticArray<f32>#__get
    local.set $12
    local.get $2
    i32.const 2
    call $~lib/staticarray/StaticArray<f32>#__get
    local.set $13
    call $assembly/utils/linearToSRGB
    i32.const 16
    i32.shl
    local.get $12
    call $assembly/utils/linearToSRGB
    i32.const 8
    i32.shl
    i32.add
    local.get $13
    call $assembly/utils/linearToSRGB
    i32.add
    i32.const 4
    call $assembly/base83/encode83
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store offset=24
    local.get $3
    local.get $0
    call $~lib/string/String.__concat
    local.tee $2
    i32.store offset=16
    i32.const 0
    local.set $0
    loop $for-loop|3
     local.get $0
     local.get $1
     i32.load offset=12
     i32.lt_s
     if
      global.get $~lib/memory/__stack_pointer
      local.get $1
      local.get $0
      call $~lib/array/Array<~lib/staticarray/StaticArray<f32>>#__get
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=24
      local.get $3
      i32.const 0
      call $~lib/staticarray/StaticArray<f32>#__get
      local.get $1
      local.get $0
      call $~lib/array/Array<~lib/staticarray/StaticArray<f32>>#__get
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=24
      local.get $3
      i32.const 1
      call $~lib/staticarray/StaticArray<f32>#__get
      local.set $12
      local.get $1
      local.get $0
      call $~lib/array/Array<~lib/staticarray/StaticArray<f32>>#__get
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=24
      local.get $3
      i32.const 2
      call $~lib/staticarray/StaticArray<f32>#__get
      local.set $13
      local.get $9
      call $assembly/encode/encodeACQuant
      i32.const 361
      i32.mul
      local.get $12
      local.get $9
      call $assembly/encode/encodeACQuant
      i32.const 19
      i32.mul
      i32.add
      local.get $13
      local.get $9
      call $assembly/encode/encodeACQuant
      i32.add
      i32.const 2
      call $assembly/base83/encode83
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store offset=24
      local.get $2
      local.get $3
      call $~lib/string/String.__concat
      local.tee $2
      i32.store offset=16
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|3
     end
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 28
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $2
    return
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 28
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 0
   return
  end
  i32.const 19264
  i32.const 19312
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/base83/decode83 (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  loop $for-loop|0
   local.get $8
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    local.get $8
    call $~lib/string/String#charAt
    local.tee $4
    i32.store
    global.get $~lib/memory/__stack_pointer
    i32.const 1056
    i32.store offset=4
    block $__inlined_func$~lib/string/String#indexOf
     local.get $4
     i32.const 20
     i32.sub
     i32.load offset=16
     i32.const 1
     i32.shr_u
     local.tee $5
     i32.eqz
     if
      i32.const 0
      local.set $6
      br $__inlined_func$~lib/string/String#indexOf
     end
     i32.const 1052
     i32.load
     i32.const 1
     i32.shr_u
     local.tee $1
     i32.eqz
     if
      i32.const -1
      local.set $6
      br $__inlined_func$~lib/string/String#indexOf
     end
     i32.const 0
     local.get $1
     local.get $1
     i32.const 0
     i32.gt_s
     select
     local.set $6
     local.get $1
     local.get $5
     i32.sub
     local.set $10
     loop $for-loop|00
      local.get $6
      local.get $10
      i32.le_s
      if
       block $__inlined_func$~lib/util/string/compareImpl (result i32)
        local.get $6
        i32.const 1
        i32.shl
        i32.const 1056
        i32.add
        local.tee $7
        i32.const 7
        i32.and
        local.get $4
        local.tee $2
        i32.const 7
        i32.and
        i32.or
        i32.const 1
        local.get $5
        local.tee $1
        i32.const 4
        i32.ge_u
        select
        i32.eqz
        if
         loop $do-continue|0
          local.get $7
          i64.load
          local.get $2
          i64.load
          i64.eq
          if
           local.get $7
           i32.const 8
           i32.add
           local.set $7
           local.get $2
           i32.const 8
           i32.add
           local.set $2
           local.get $1
           i32.const 4
           i32.sub
           local.tee $1
           i32.const 4
           i32.ge_u
           br_if $do-continue|0
          end
         end
        end
        loop $while-continue|1
         local.get $1
         local.tee $3
         i32.const 1
         i32.sub
         local.set $1
         local.get $3
         if
          local.get $2
          i32.load16_u
          local.tee $3
          local.get $7
          i32.load16_u
          local.tee $11
          i32.ne
          if
           local.get $11
           local.get $3
           i32.sub
           br $__inlined_func$~lib/util/string/compareImpl
          end
          local.get $7
          i32.const 2
          i32.add
          local.set $7
          local.get $2
          i32.const 2
          i32.add
          local.set $2
          br $while-continue|1
         end
        end
        i32.const 0
       end
       i32.eqz
       br_if $__inlined_func$~lib/string/String#indexOf
       local.get $6
       i32.const 1
       i32.add
       local.set $6
       br $for-loop|00
      end
     end
     i32.const -1
     local.set $6
    end
    local.get $6
    local.get $9
    i32.const 83
    i32.mul
    i32.add
    local.set $9
    local.get $8
    i32.const 1
    i32.add
    local.set $8
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $9
 )
 (func $assembly/decode/isBlurhashValid (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.const 6
  i32.lt_u
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 0
   return
  end
  local.get $0
  i32.const 0
  call $~lib/string/String#charAt
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  call $assembly/base83/decode83
  local.tee $1
  i32.const 9
  i32.rem_s
  i32.const 1
  i32.shl
  local.get $1
  i32.const 9
  i32.div_s
  i32.add
  i32.const 7
  i32.add
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.ne
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/decode/decode (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 f32)
  (local $10 f32)
  (local $11 f32)
  (local $12 i32)
  (local $13 i32)
  (local $14 f32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 2860
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i64.const 0
   i64.store
   local.get $4
   i64.const 0
   i64.store offset=8
   local.get $4
   i32.const 0
   i32.store offset=16
   local.get $0
   call $assembly/decode/isBlurhashValid
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 20
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 0
    return
   end
   local.get $3
   i32.const 1
   i32.or
   local.set $19
   local.get $0
   i32.const 0
   call $~lib/string/String#charAt
   local.set $3
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.store
   local.get $3
   call $assembly/base83/decode83
   local.tee $4
   f32.convert_i32_s
   f32.const 9
   f32.div
   f32.floor
   i32.trunc_f32_s
   i32.const 1
   i32.add
   local.set $15
   local.get $0
   i32.const 1
   call $~lib/string/String#charAt
   local.set $3
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.store
   local.get $3
   call $assembly/base83/decode83
   i32.const 1
   i32.add
   f32.convert_i32_s
   f32.const 166
   f32.div
   local.set $11
   global.get $~lib/memory/__stack_pointer
   local.tee $8
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2860
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store
   local.get $3
   i32.const 16
   i32.const 8
   call $~lib/rt/itcms/__new
   local.tee $6
   i32.store
   local.get $6
   i32.const 0
   i32.store
   local.get $6
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $6
   i32.const 0
   i32.store offset=4
   local.get $6
   i32.const 0
   i32.store offset=8
   local.get $6
   i32.const 0
   i32.store offset=12
   local.get $15
   local.get $4
   i32.const 9
   i32.rem_s
   i32.const 1
   i32.add
   local.tee $16
   i32.mul
   local.tee $4
   i32.const 268435455
   i32.gt_u
   if
    i32.const 1248
    i32.const 2560
    i32.const 64
    i32.const 60
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.const 8
   local.get $4
   i32.const 8
   i32.gt_u
   select
   i32.const 2
   i32.shl
   local.tee $5
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store offset=4
   local.get $3
   local.get $5
   call $~lib/memory/memory.fill
   local.get $6
   local.get $3
   i32.store
   local.get $6
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $6
   local.get $3
   i32.store offset=4
   local.get $6
   local.get $5
   i32.store offset=8
   local.get $6
   local.get $4
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $8
   local.get $6
   i32.store offset=4
   loop $for-loop|0
    local.get $7
    local.get $6
    i32.load offset=12
    i32.lt_s
    if
     local.get $7
     if (result f32)
      local.get $0
      local.get $7
      i32.const 1
      i32.shl
      local.tee $3
      i32.const 4
      i32.add
      local.get $3
      i32.const 6
      i32.add
      call $~lib/string/String#substring
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store
      local.get $3
      call $assembly/base83/decode83
      local.set $4
      local.get $11
      local.get $19
      f32.convert_i32_s
      f32.mul
      local.set $9
      global.get $~lib/memory/__stack_pointer
      i32.const 12
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 2860
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      i64.const 0
      i64.store
      local.get $3
      i32.const 0
      i32.store offset=8
      local.get $4
      f32.convert_i32_s
      local.tee $10
      f32.const 361
      f32.div
      f32.floor
      i32.trunc_f32_s
      local.get $10
      f32.const 19
      f32.div
      f32.floor
      i32.trunc_f32_s
      i32.const 19
      i32.rem_s
      local.set $8
      local.get $3
      i32.const 3
      i32.const 6
      call $~lib/rt/__newArray
      local.tee $3
      i32.store offset=4
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.load offset=4
      i32.store offset=8
      f32.convert_i32_s
      f32.const 9
      f32.sub
      f32.const 9
      f32.div
      local.tee $10
      f32.abs
      f32.const 2
      call $~lib/math/NativeMathf.pow
      local.get $10
      f32.copysign
      local.get $9
      f32.mul
      local.set $10
      local.get $3
      i32.load offset=4
      local.get $10
      f32.store
      local.get $8
      f32.convert_i32_s
      f32.const 9
      f32.sub
      f32.const 9
      f32.div
      local.tee $10
      f32.abs
      f32.const 2
      call $~lib/math/NativeMathf.pow
      local.get $10
      f32.copysign
      local.get $9
      f32.mul
      local.set $10
      local.get $3
      i32.load offset=4
      local.get $10
      f32.store offset=4
      local.get $4
      i32.const 19
      i32.rem_s
      f32.convert_i32_s
      f32.const 9
      f32.sub
      f32.const 9
      f32.div
      local.tee $10
      f32.abs
      f32.const 2
      call $~lib/math/NativeMathf.pow
      local.get $10
      f32.copysign
      local.get $9
      f32.mul
     else
      local.get $0
      i32.const 2
      i32.const 6
      call $~lib/string/String#substring
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store
      local.get $3
      call $assembly/base83/decode83
      local.set $4
      global.get $~lib/memory/__stack_pointer
      i32.const 12
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 2860
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $3
      i64.const 0
      i64.store
      local.get $3
      i32.const 0
      i32.store offset=8
      local.get $3
      i32.const 3
      i32.const 6
      call $~lib/rt/__newArray
      local.tee $3
      i32.store offset=4
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.load offset=4
      i32.store offset=8
      local.get $4
      i32.const 16
      i32.shr_s
      call $assembly/utils/SRGBToLinear
      local.set $9
      local.get $3
      i32.load offset=4
      local.get $9
      f32.store
      local.get $4
      i32.const 8
      i32.shr_s
      i32.const 255
      i32.and
      call $assembly/utils/SRGBToLinear
      local.set $9
      local.get $3
      i32.load offset=4
      local.get $9
      f32.store offset=4
      local.get $4
      i32.const 255
      i32.and
      call $assembly/utils/SRGBToLinear
     end
     local.set $9
     local.get $3
     i32.load offset=4
     local.get $9
     f32.store offset=8
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.store
     local.get $3
     call $~lib/staticarray/StaticArray.fromArray<f32>
     local.set $3
     global.get $~lib/memory/__stack_pointer
     i32.const 12
     i32.add
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.store offset=8
     local.get $3
     local.set $4
     local.get $7
     local.get $6
     i32.load offset=12
     i32.ge_u
     if
      local.get $7
      i32.const 0
      i32.lt_s
      if
       i32.const 1552
       i32.const 2560
       i32.const 115
       i32.const 22
       call $~lib/builtins/abort
       unreachable
      end
      local.get $7
      i32.const 1
      i32.add
      local.tee $20
      local.tee $3
      local.get $6
      i32.load offset=8
      local.tee $12
      i32.const 2
      i32.shr_u
      i32.gt_u
      if
       local.get $3
       i32.const 268435455
       i32.gt_u
       if
        i32.const 1248
        i32.const 2560
        i32.const 17
        i32.const 48
        call $~lib/builtins/abort
        unreachable
       end
       local.get $6
       i32.load
       local.tee $17
       local.set $5
       block $__inlined_func$~lib/rt/itcms/__renew
        local.get $12
        i32.const 1
        i32.shl
        local.tee $8
        i32.const 1073741820
        local.get $8
        i32.const 1073741820
        i32.lt_u
        select
        local.tee $8
        local.get $3
        i32.const 8
        local.get $3
        i32.const 8
        i32.gt_u
        select
        i32.const 2
        i32.shl
        local.tee $3
        local.get $3
        local.get $8
        i32.lt_u
        select
        local.tee $18
        local.tee $8
        local.get $17
        i32.const 20
        i32.sub
        local.tee $13
        i32.load
        i32.const -4
        i32.and
        i32.const 16
        i32.sub
        i32.le_u
        if
         local.get $13
         local.get $8
         i32.store offset=16
         local.get $5
         local.set $3
         br $__inlined_func$~lib/rt/itcms/__renew
        end
        local.get $8
        local.get $13
        i32.load offset=12
        call $~lib/rt/itcms/__new
        local.tee $3
        local.get $5
        local.get $8
        local.get $13
        i32.load offset=16
        local.tee $5
        local.get $5
        local.get $8
        i32.gt_u
        select
        call $~lib/memory/memory.copy
       end
       local.get $3
       local.get $12
       i32.add
       local.get $18
       local.get $12
       i32.sub
       call $~lib/memory/memory.fill
       local.get $3
       local.get $17
       i32.ne
       if
        local.get $6
        local.get $3
        i32.store
        local.get $6
        local.get $3
        i32.store offset=4
        local.get $6
        local.get $3
        i32.const 0
        call $~lib/rt/itcms/__link
       end
       local.get $6
       local.get $18
       i32.store offset=8
      end
      local.get $6
      local.get $20
      i32.store offset=12
     end
     local.get $6
     i32.load offset=4
     local.get $7
     i32.const 2
     i32.shl
     i32.add
     local.get $4
     i32.store
     local.get $6
     local.get $4
     i32.const 1
     call $~lib/rt/itcms/__link
     local.get $7
     i32.const 1
     i32.add
     local.set $7
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.tee $5
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2860
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   i32.const 12
   i32.const 3
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
   local.get $2
   local.get $1
   i32.const 2
   i32.shl
   local.tee $12
   i32.mul
   local.set $3
   global.get $~lib/memory/__stack_pointer
   local.tee $7
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2860
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   local.get $0
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.const 2
    call $~lib/rt/itcms/__new
    local.tee $0
    i32.store
   end
   local.get $0
   i32.const 0
   i32.store
   local.get $0
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $3
   i32.const 1073741820
   i32.gt_u
   if
    i32.const 1248
    i32.const 2608
    i32.const 18
    i32.const 57
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $4
   i32.store offset=4
   local.get $4
   local.get $3
   call $~lib/memory/memory.fill
   local.get $0
   local.get $4
   i32.store
   local.get $0
   local.get $4
   i32.const 0
   call $~lib/rt/itcms/__link
   local.get $0
   local.get $4
   i32.store offset=4
   local.get $0
   local.get $3
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $7
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   local.get $0
   local.tee $4
   i32.store offset=12
   i32.const 0
   local.set $0
   loop $for-loop|1
    local.get $0
    local.get $2
    i32.lt_s
    if
     i32.const 0
     local.set $3
     loop $for-loop|2
      local.get $1
      local.get $3
      i32.gt_s
      if
       f32.const 0
       local.set $9
       f32.const 0
       local.set $11
       f32.const 0
       local.set $10
       i32.const 0
       local.set $5
       loop $for-loop|3
        local.get $5
        local.get $15
        i32.lt_s
        if
         i32.const 0
         local.set $7
         loop $for-loop|4
          local.get $7
          local.get $16
          i32.lt_s
          if
           local.get $3
           local.get $7
           i32.mul
           f32.convert_i32_s
           f32.const 3.1415927410125732
           f32.mul
           local.get $1
           f32.convert_i32_s
           f32.div
           call $~lib/math/NativeMathf.cos
           local.get $0
           local.get $5
           i32.mul
           f32.convert_i32_s
           f32.const 3.1415927410125732
           f32.mul
           local.get $2
           f32.convert_i32_s
           f32.div
           call $~lib/math/NativeMathf.cos
           f32.mul
           local.set $14
           global.get $~lib/memory/__stack_pointer
           local.get $6
           local.get $7
           local.get $5
           local.get $16
           i32.mul
           i32.add
           call $~lib/array/Array<~lib/staticarray/StaticArray<f32>>#__get
           local.tee $8
           i32.store offset=16
           local.get $9
           local.get $8
           i32.const 0
           call $~lib/staticarray/StaticArray<f32>#__get
           local.get $14
           f32.mul
           f32.add
           local.set $9
           local.get $11
           local.get $8
           i32.const 1
           call $~lib/staticarray/StaticArray<f32>#__get
           local.get $14
           f32.mul
           f32.add
           local.set $11
           local.get $10
           local.get $8
           i32.const 2
           call $~lib/staticarray/StaticArray<f32>#__get
           local.get $14
           f32.mul
           f32.add
           local.set $10
           local.get $7
           i32.const 1
           i32.add
           local.set $7
           br $for-loop|4
          end
         end
         local.get $5
         i32.const 1
         i32.add
         local.set $5
         br $for-loop|3
        end
       end
       local.get $4
       local.get $0
       local.get $12
       i32.mul
       local.tee $5
       local.get $3
       i32.const 2
       i32.shl
       local.tee $7
       i32.add
       local.get $9
       call $assembly/utils/linearToSRGB
       call $~lib/typedarray/Uint8ClampedArray#__set
       local.get $4
       local.get $5
       local.get $7
       i32.const 1
       i32.add
       i32.add
       local.get $11
       call $assembly/utils/linearToSRGB
       call $~lib/typedarray/Uint8ClampedArray#__set
       local.get $4
       local.get $5
       local.get $7
       i32.const 2
       i32.add
       i32.add
       local.get $10
       call $assembly/utils/linearToSRGB
       call $~lib/typedarray/Uint8ClampedArray#__set
       local.get $4
       local.get $5
       local.get $7
       i32.const 3
       i32.add
       i32.add
       i32.const 255
       call $~lib/typedarray/Uint8ClampedArray#__set
       local.get $3
       i32.const 1
       i32.add
       local.set $3
       br $for-loop|2
      end
     end
     local.get $0
     i32.const 1
     i32.add
     local.set $0
     br $for-loop|1
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 20
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 19264
  i32.const 19312
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i32.const 0
  i32.store
  local.get $2
  local.get $0
  i32.const 2
  i32.shl
  local.tee $3
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  i32.const 16
  local.get $1
  call $~lib/rt/itcms/__new
  local.tee $1
  local.get $2
  i32.store
  local.get $1
  local.get $2
  i32.const 0
  call $~lib/rt/itcms/__link
  local.get $1
  local.get $2
  i32.store offset=4
  local.get $1
  local.get $3
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/staticarray/StaticArray.fromArray<f32> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i32.const 0
  i32.store
  local.get $1
  local.get $0
  i32.load offset=12
  i32.const 2
  i32.shl
  local.tee $2
  i32.const 4
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  local.get $0
  i32.load offset=4
  local.get $2
  call $~lib/memory/memory.copy
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/string/String#charAt (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.ge_u
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 2528
   return
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 2
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  local.get $2
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  i32.load16_u
  i32.store16
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/array/Array<~lib/staticarray/StaticArray<f32>>#__get (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1552
   i32.const 2560
   i32.const 99
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $0
  i32.store
  local.get $0
  i32.eqz
  if
   i32.const 2400
   i32.const 2560
   i32.const 103
   i32.const 40
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/string/String#substring (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 0
  local.get $1
  i32.const 0
  i32.gt_s
  select
  local.tee $3
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  local.tee $1
  local.get $1
  local.get $3
  i32.gt_s
  select
  local.tee $3
  local.get $2
  i32.const 0
  local.get $2
  i32.const 0
  i32.gt_s
  select
  local.tee $2
  local.get $1
  local.get $1
  local.get $2
  i32.gt_s
  select
  local.tee $2
  local.get $2
  local.get $3
  i32.lt_s
  select
  i32.const 1
  i32.shl
  local.tee $4
  local.get $3
  local.get $2
  local.get $2
  local.get $3
  i32.gt_s
  select
  i32.const 1
  i32.shl
  local.tee $2
  i32.sub
  local.tee $3
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 2528
   return
  end
  i32.const 0
  local.get $4
  local.get $1
  i32.const 1
  i32.shl
  i32.eq
  local.get $2
  select
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   return
  end
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  local.get $1
  local.get $0
  local.get $2
  i32.add
  local.get $3
  call $~lib/memory/memory.copy
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $export:assembly/encode/encode (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  local.get $4
  call $assembly/encode/encode
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/decode/isBlurhashValid (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $assembly/decode/isBlurhashValid
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/decode/decode@varargs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2860
  i32.lt_s
  if
   i32.const 19264
   i32.const 19312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     i32.const 3
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const 0
   local.set $3
  end
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $assembly/decode/decode
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
)
