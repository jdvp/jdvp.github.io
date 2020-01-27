(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-runtime'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-runtime'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-runtime'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-runtime'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var getKClass = Kotlin.getKClass;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toBoxedChar = Kotlin.toBoxedChar;
  var throwCCE = Kotlin.throwCCE;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Map = Kotlin.kotlin.collections.Map;
  var contentToString = Kotlin.arrayToString;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var toString = Kotlin.toString;
  var List = Kotlin.kotlin.collections.List;
  var equals = Kotlin.equals;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var HashSet = Kotlin.kotlin.collections.HashSet;
  var Set = Kotlin.kotlin.collections.Set;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var LinkedHashSet = Kotlin.kotlin.collections.LinkedHashSet;
  var HashMap = Kotlin.kotlin.collections.HashMap;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var LinkedHashMap = Kotlin.kotlin.collections.LinkedHashMap;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var Pair = Kotlin.kotlin.Pair;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var kotlin = Kotlin.kotlin;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var toByte = Kotlin.toByte;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  var toShort = Kotlin.toShort;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var L2147483648 = new Kotlin.Long(-2147483648, 0);
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var toChar = Kotlin.toChar;
  var Any = Object;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var hashCode = Kotlin.hashCode;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_mqih57$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var HashSet_init_0 = Kotlin.kotlin.collections.HashSet_init_mqih57$;
  var LinkedHashMap_init_1 = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var HashMap_init_0 = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var LinkedHashSet_init_0 = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var unboxChar = Kotlin.unboxChar;
  var copyOf_5 = Kotlin.kotlin.collections.copyOf_gtcw5h$;
  var copyOf_6 = Kotlin.kotlin.collections.copyOf_1qu12l$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var Char = Kotlin.BoxedChar;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var Long = Kotlin.Long;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var PrimitiveClasses$byteClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteClass;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var String_0 = Kotlin.kotlin.text.String_8chfmy$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var toByte_0 = Kotlin.kotlin.text.toByte_pdl1vz$;
  var toShort_0 = Kotlin.kotlin.text.toShort_pdl1vz$;
  var single = Kotlin.kotlin.text.single_gw00vp$;
  var isFinite = Kotlin.kotlin.isFinite_81szk$;
  var isFinite_0 = Kotlin.kotlin.isFinite_yrwdxr$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var HashSet_init_1 = Kotlin.kotlin.collections.HashSet_init_ww73n8$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var throwUPAE = Kotlin.throwUPAE;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var L_128 = Kotlin.Long.fromInt(-128);
  var L0 = Kotlin.Long.ZERO;
  var L127 = Kotlin.Long.fromInt(127);
  var L128 = Kotlin.Long.fromInt(128);
  var L_1 = Kotlin.Long.NEG_ONE;
  var Exception = Kotlin.kotlin.Exception;
  var get_indices_0 = Kotlin.kotlin.text.get_indices_gw00vp$;
  var L9007199254740991 = new Kotlin.Long(-1, 2097151);
  var Math_0 = Math;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  UpdateMode.prototype = Object.create(Enum.prototype);
  UpdateMode.prototype.constructor = UpdateMode;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  PrimitiveKind$INT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$INT.prototype.constructor = PrimitiveKind$INT;
  PrimitiveKind$UNIT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$UNIT.prototype.constructor = PrimitiveKind$UNIT;
  PrimitiveKind$BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$BOOLEAN.prototype.constructor = PrimitiveKind$BOOLEAN;
  PrimitiveKind$BYTE.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$BYTE.prototype.constructor = PrimitiveKind$BYTE;
  PrimitiveKind$SHORT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$SHORT.prototype.constructor = PrimitiveKind$SHORT;
  PrimitiveKind$LONG.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$LONG.prototype.constructor = PrimitiveKind$LONG;
  PrimitiveKind$FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$FLOAT.prototype.constructor = PrimitiveKind$FLOAT;
  PrimitiveKind$DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$DOUBLE.prototype.constructor = PrimitiveKind$DOUBLE;
  PrimitiveKind$CHAR.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$CHAR.prototype.constructor = PrimitiveKind$CHAR;
  PrimitiveKind$STRING.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$STRING.prototype.constructor = PrimitiveKind$STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  StructureKind$CLASS.prototype = Object.create(StructureKind.prototype);
  StructureKind$CLASS.prototype.constructor = StructureKind$CLASS;
  StructureKind$LIST.prototype = Object.create(StructureKind.prototype);
  StructureKind$LIST.prototype.constructor = StructureKind$LIST;
  StructureKind$MAP.prototype = Object.create(StructureKind.prototype);
  StructureKind$MAP.prototype.constructor = StructureKind$MAP;
  UnionKind.prototype = Object.create(SerialKind.prototype);
  UnionKind.prototype.constructor = UnionKind;
  UnionKind$OBJECT.prototype = Object.create(UnionKind.prototype);
  UnionKind$OBJECT.prototype.constructor = UnionKind$OBJECT;
  UnionKind$ENUM_KIND.prototype = Object.create(UnionKind.prototype);
  UnionKind$ENUM_KIND.prototype.constructor = UnionKind$ENUM_KIND;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  PolymorphicKind$SEALED.prototype = Object.create(PolymorphicKind.prototype);
  PolymorphicKind$SEALED.prototype.constructor = PolymorphicKind$SEALED;
  PolymorphicKind$OPEN.prototype = Object.create(PolymorphicKind.prototype);
  PolymorphicKind$OPEN.prototype.constructor = PolymorphicKind$OPEN;
  SerializationException.prototype = Object.create(RuntimeException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  UpdateNotSupportedException.prototype = Object.create(SerializationException.prototype);
  UpdateNotSupportedException.prototype.constructor = UpdateNotSupportedException;
  NamedValueEncoder.prototype = Object.create(TaggedEncoder.prototype);
  NamedValueEncoder.prototype.constructor = NamedValueEncoder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  PolymorphicClassDescriptor.prototype = Object.create(SerialClassDescImpl.prototype);
  PolymorphicClassDescriptor.prototype.constructor = PolymorphicClassDescriptor;
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  NamedListClassDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  NamedListClassDescriptor.prototype.constructor = NamedListClassDescriptor;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  NamedMapClassDescriptor.prototype = Object.create(MapLikeDescriptor.prototype);
  NamedMapClassDescriptor.prototype.constructor = NamedMapClassDescriptor;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  ListLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  ListLikeSerializer.prototype.constructor = ListLikeSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  ArrayListSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  LinkedHashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  HashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  EnumDescriptor.prototype = Object.create(SerialClassDescImpl.prototype);
  EnumDescriptor.prototype.constructor = EnumDescriptor;
  IntDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  IntDescriptor.prototype.constructor = IntDescriptor;
  UnitDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  UnitDescriptor.prototype.constructor = UnitDescriptor;
  BooleanDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  BooleanDescriptor.prototype.constructor = BooleanDescriptor;
  ByteDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  ByteDescriptor.prototype.constructor = ByteDescriptor;
  ShortDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  ShortDescriptor.prototype.constructor = ShortDescriptor;
  LongDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  LongDescriptor.prototype.constructor = LongDescriptor;
  FloatDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  FloatDescriptor.prototype.constructor = FloatDescriptor;
  DoubleDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  DoubleDescriptor.prototype.constructor = DoubleDescriptor;
  CharDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  CharDescriptor.prototype.constructor = CharDescriptor;
  StringDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  StringDescriptor.prototype.constructor = StringDescriptor;
  SerialClassDescImpl$MissingDescriptorException.prototype = Object.create(SerializationException.prototype);
  SerialClassDescImpl$MissingDescriptorException.prototype.constructor = SerialClassDescImpl$MissingDescriptorException;
  MapEntrySerializer.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer.prototype.constructor = MapEntrySerializer;
  MapEntryClassDesc.prototype = Object.create(SerialClassDescImpl.prototype);
  MapEntryClassDesc.prototype.constructor = MapEntryClassDesc;
  Json.prototype = Object.create(AbstractSerialFormat.prototype);
  Json.prototype.constructor = Json;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonElementSerializer$descriptor$ObjectLiteral.prototype = Object.create(SerialClassDescImpl.prototype);
  JsonElementSerializer$descriptor$ObjectLiteral.prototype.constructor = JsonElementSerializer$descriptor$ObjectLiteral;
  JsonPrimitiveSerializer$JsonPrimitiveDescriptor.prototype = Object.create(SerialClassDescImpl.prototype);
  JsonPrimitiveSerializer$JsonPrimitiveDescriptor.prototype.constructor = JsonPrimitiveSerializer$JsonPrimitiveDescriptor;
  JsonNullSerializer$JsonNullDescriptor.prototype = Object.create(SerialClassDescImpl.prototype);
  JsonNullSerializer$JsonNullDescriptor.prototype.constructor = JsonNullSerializer$JsonNullDescriptor;
  JsonLiteralSerializer$JsonLiteralDescriptor.prototype = Object.create(SerialClassDescImpl.prototype);
  JsonLiteralSerializer$JsonLiteralDescriptor.prototype.constructor = JsonLiteralSerializer$JsonLiteralDescriptor;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  StreamingJsonInput.prototype = Object.create(ElementValueDecoder.prototype);
  StreamingJsonInput.prototype.constructor = StreamingJsonInput;
  StreamingJsonOutput.prototype = Object.create(ElementValueEncoder.prototype);
  StreamingJsonOutput.prototype.constructor = StreamingJsonOutput;
  AbstractJsonTreeInput.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeInput.prototype.constructor = AbstractJsonTreeInput;
  JsonPrimitiveInput.prototype = Object.create(AbstractJsonTreeInput.prototype);
  JsonPrimitiveInput.prototype.constructor = JsonPrimitiveInput;
  JsonTreeInput.prototype = Object.create(AbstractJsonTreeInput.prototype);
  JsonTreeInput.prototype.constructor = JsonTreeInput;
  JsonTreeMapInput.prototype = Object.create(JsonTreeInput.prototype);
  JsonTreeMapInput.prototype.constructor = JsonTreeMapInput;
  JsonTreeListInput.prototype = Object.create(AbstractJsonTreeInput.prototype);
  JsonTreeListInput.prototype.constructor = JsonTreeListInput;
  AbstractJsonTreeOutput.prototype = Object.create(NamedValueEncoder.prototype);
  AbstractJsonTreeOutput.prototype.constructor = AbstractJsonTreeOutput;
  JsonPrimitiveOutput.prototype = Object.create(AbstractJsonTreeOutput.prototype);
  JsonPrimitiveOutput.prototype.constructor = JsonPrimitiveOutput;
  JsonTreeOutput.prototype = Object.create(AbstractJsonTreeOutput.prototype);
  JsonTreeOutput.prototype.constructor = JsonTreeOutput;
  JsonTreeMapOutput.prototype = Object.create(JsonTreeOutput.prototype);
  JsonTreeMapOutput.prototype.constructor = JsonTreeMapOutput;
  JsonTreeListOutput.prototype = Object.create(AbstractJsonTreeOutput.prototype);
  JsonTreeListOutput.prototype.constructor = JsonTreeListOutput;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  SerializerAlreadyRegisteredException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializerAlreadyRegisteredException.prototype.constructor = SerializerAlreadyRegisteredException;
  var ByteOrder$LITTLE_ENDIAN_instance;
  var ByteOrder$BIG_ENDIAN_instance;
  function Encoder() {
  }
  Encoder.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    serializer.serialize_awe97i$(this, value);
  };
  Encoder.prototype.encodeNullableSerializableValue_f4686g$ = function (serializer, value) {
    if (value == null) {
      this.encodeNull();
    }
     else {
      this.encodeNotNullMark();
      this.encodeSerializableValue_tf03ej$(serializer, value);
    }
  };
  Encoder.prototype.beginCollection_gly1x5$ = function (desc, collectionSize, typeParams) {
    return this.beginStructure_r0sa6z$(desc, typeParams.slice());
  };
  Encoder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Encoder', interfaces: []};
  function CompositeEncoder() {
  }
  CompositeEncoder.prototype.endStructure_qatsm0$ = function (desc) {
  };
  CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$ = function (desc, index) {
    return true;
  };
  CompositeEncoder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CompositeEncoder', interfaces: []};
  function Decoder() {
  }
  Decoder.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return deserializer.deserialize_nts5qn$(this);
  };
  Decoder.prototype.decodeNullableSerializableValue_aae3ea$ = function (deserializer) {
    return this.decodeNotNullMark() ? this.decodeSerializableValue_w63s0f$(deserializer) : this.decodeNull();
  };
  Decoder.prototype.updateSerializableValue_19c8k5$ = function (deserializer, old) {
    var tmp$;
    switch (this.updateMode.name) {
      case 'BANNED':
        throw new UpdateNotSupportedException(deserializer.descriptor.name);
      case 'OVERWRITE':
        tmp$ = this.decodeSerializableValue_w63s0f$(deserializer);
        break;
      case 'UPDATE':
        tmp$ = deserializer.patch_mynpiu$(this, old);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Decoder.prototype.updateNullableSerializableValue_exmlbs$ = function (deserializer, old) {
    var tmp$;
    if (this.updateMode === UpdateMode$BANNED_getInstance())
      throw new UpdateNotSupportedException(deserializer.descriptor.name);
    else if (this.updateMode === UpdateMode$OVERWRITE_getInstance() || old == null)
      tmp$ = this.decodeNullableSerializableValue_aae3ea$(deserializer);
    else if (this.decodeNotNullMark())
      tmp$ = deserializer.patch_mynpiu$(this, old);
    else {
      this.decodeNull();
      tmp$ = old;
    }
    return tmp$;
  };
  Decoder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Decoder', interfaces: []};
  function CompositeDecoder() {
    CompositeDecoder$Companion_getInstance();
  }
  CompositeDecoder.prototype.endStructure_qatsm0$ = function (desc) {
  };
  function CompositeDecoder$Companion() {
    CompositeDecoder$Companion_instance = this;
    this.READ_DONE = -1;
    this.READ_ALL = -2;
    this.UNKNOWN_NAME = -3;
  }
  CompositeDecoder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var CompositeDecoder$Companion_instance = null;
  function CompositeDecoder$Companion_getInstance() {
    if (CompositeDecoder$Companion_instance === null) {
      new CompositeDecoder$Companion();
    }
    return CompositeDecoder$Companion_instance;
  }
  CompositeDecoder.prototype.decodeCollectionSize_qatsm0$ = function (desc) {
    return -1;
  };
  CompositeDecoder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CompositeDecoder', interfaces: []};
  function ContextSerializer(serializableClass) {
    this.serializableClass_0 = serializableClass;
    this.descriptor_f98ejb$_0 = new ContextSerializer$descriptor$ObjectLiteral('CONTEXT');
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.prototype.getEntityAnnotations = function () {
    return emptyList();
  };
  SerialDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return emptyList();
  };
  Object.defineProperty(SerialDescriptor.prototype, 'elementsCount', {get: function () {
    return 0;
  }});
  SerialDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    throw new NotImplementedError_init();
  };
  Object.defineProperty(SerialDescriptor.prototype, 'isNullable', {get: function () {
    return false;
  }});
  SerialDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return false;
  };
  SerialDescriptor.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SerialDescriptor', interfaces: []};
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SerializationStrategy', interfaces: []};
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'DeserializationStrategy', interfaces: []};
  function UpdateMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UpdateMode_initFields() {
    UpdateMode_initFields = function () {
    };
    UpdateMode$BANNED_instance = new UpdateMode('BANNED', 0);
    UpdateMode$OVERWRITE_instance = new UpdateMode('OVERWRITE', 1);
    UpdateMode$UPDATE_instance = new UpdateMode('UPDATE', 2);
  }
  var UpdateMode$BANNED_instance;
  function UpdateMode$BANNED_getInstance() {
    UpdateMode_initFields();
    return UpdateMode$BANNED_instance;
  }
  var UpdateMode$OVERWRITE_instance;
  function UpdateMode$OVERWRITE_getInstance() {
    UpdateMode_initFields();
    return UpdateMode$OVERWRITE_instance;
  }
  var UpdateMode$UPDATE_instance;
  function UpdateMode$UPDATE_getInstance() {
    UpdateMode_initFields();
    return UpdateMode$UPDATE_instance;
  }
  UpdateMode.$metadata$ = {kind: Kind_CLASS, simpleName: 'UpdateMode', interfaces: [Enum]};
  function UpdateMode$values() {
    return [UpdateMode$BANNED_getInstance(), UpdateMode$OVERWRITE_getInstance(), UpdateMode$UPDATE_getInstance()];
  }
  UpdateMode.values = UpdateMode$values;
  function UpdateMode$valueOf(name) {
    switch (name) {
      case 'BANNED':
        return UpdateMode$BANNED_getInstance();
      case 'OVERWRITE':
        return UpdateMode$OVERWRITE_getInstance();
      case 'UPDATE':
        return UpdateMode$UPDATE_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.UpdateMode.' + name);
    }
  }
  UpdateMode.valueOf_61zpoe$ = UpdateMode$valueOf;
  function KSerializer() {
  }
  KSerializer.prototype.patch_mynpiu$ = function (decoder, old) {
    throw new UpdateNotSupportedException(this.descriptor.name);
  };
  KSerializer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'KSerializer', interfaces: [DeserializationStrategy, SerializationStrategy]};
  function encode_0($receiver, strategy, obj) {
    $receiver.encodeSerializableValue_tf03ej$(strategy, obj);
  }
  function decode_0($receiver, deserializer) {
    return $receiver.decodeSerializableValue_w63s0f$(deserializer);
  }
  var deprecationText;
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(simpleName_0(Kotlin.getKClassFromExpression(this)));
  };
  SerialKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerialKind', interfaces: []};
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function PrimitiveKind$INT() {
    PrimitiveKind$INT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$INT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'INT', interfaces: [PrimitiveKind]};
  var PrimitiveKind$INT_instance = null;
  function PrimitiveKind$INT_getInstance() {
    if (PrimitiveKind$INT_instance === null) {
      new PrimitiveKind$INT();
    }
    return PrimitiveKind$INT_instance;
  }
  function PrimitiveKind$UNIT() {
    PrimitiveKind$UNIT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$UNIT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UNIT', interfaces: [PrimitiveKind]};
  var PrimitiveKind$UNIT_instance = null;
  function PrimitiveKind$UNIT_getInstance() {
    if (PrimitiveKind$UNIT_instance === null) {
      new PrimitiveKind$UNIT();
    }
    return PrimitiveKind$UNIT_instance;
  }
  function PrimitiveKind$BOOLEAN() {
    PrimitiveKind$BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$BOOLEAN.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BOOLEAN', interfaces: [PrimitiveKind]};
  var PrimitiveKind$BOOLEAN_instance = null;
  function PrimitiveKind$BOOLEAN_getInstance() {
    if (PrimitiveKind$BOOLEAN_instance === null) {
      new PrimitiveKind$BOOLEAN();
    }
    return PrimitiveKind$BOOLEAN_instance;
  }
  function PrimitiveKind$BYTE() {
    PrimitiveKind$BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$BYTE.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BYTE', interfaces: [PrimitiveKind]};
  var PrimitiveKind$BYTE_instance = null;
  function PrimitiveKind$BYTE_getInstance() {
    if (PrimitiveKind$BYTE_instance === null) {
      new PrimitiveKind$BYTE();
    }
    return PrimitiveKind$BYTE_instance;
  }
  function PrimitiveKind$SHORT() {
    PrimitiveKind$SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$SHORT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'SHORT', interfaces: [PrimitiveKind]};
  var PrimitiveKind$SHORT_instance = null;
  function PrimitiveKind$SHORT_getInstance() {
    if (PrimitiveKind$SHORT_instance === null) {
      new PrimitiveKind$SHORT();
    }
    return PrimitiveKind$SHORT_instance;
  }
  function PrimitiveKind$LONG() {
    PrimitiveKind$LONG_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$LONG.$metadata$ = {kind: Kind_OBJECT, simpleName: 'LONG', interfaces: [PrimitiveKind]};
  var PrimitiveKind$LONG_instance = null;
  function PrimitiveKind$LONG_getInstance() {
    if (PrimitiveKind$LONG_instance === null) {
      new PrimitiveKind$LONG();
    }
    return PrimitiveKind$LONG_instance;
  }
  function PrimitiveKind$FLOAT() {
    PrimitiveKind$FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$FLOAT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FLOAT', interfaces: [PrimitiveKind]};
  var PrimitiveKind$FLOAT_instance = null;
  function PrimitiveKind$FLOAT_getInstance() {
    if (PrimitiveKind$FLOAT_instance === null) {
      new PrimitiveKind$FLOAT();
    }
    return PrimitiveKind$FLOAT_instance;
  }
  function PrimitiveKind$DOUBLE() {
    PrimitiveKind$DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$DOUBLE.$metadata$ = {kind: Kind_OBJECT, simpleName: 'DOUBLE', interfaces: [PrimitiveKind]};
  var PrimitiveKind$DOUBLE_instance = null;
  function PrimitiveKind$DOUBLE_getInstance() {
    if (PrimitiveKind$DOUBLE_instance === null) {
      new PrimitiveKind$DOUBLE();
    }
    return PrimitiveKind$DOUBLE_instance;
  }
  function PrimitiveKind$CHAR() {
    PrimitiveKind$CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$CHAR.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CHAR', interfaces: [PrimitiveKind]};
  var PrimitiveKind$CHAR_instance = null;
  function PrimitiveKind$CHAR_getInstance() {
    if (PrimitiveKind$CHAR_instance === null) {
      new PrimitiveKind$CHAR();
    }
    return PrimitiveKind$CHAR_instance;
  }
  function PrimitiveKind$STRING() {
    PrimitiveKind$STRING_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$STRING.$metadata$ = {kind: Kind_OBJECT, simpleName: 'STRING', interfaces: [PrimitiveKind]};
  var PrimitiveKind$STRING_instance = null;
  function PrimitiveKind$STRING_getInstance() {
    if (PrimitiveKind$STRING_instance === null) {
      new PrimitiveKind$STRING();
    }
    return PrimitiveKind$STRING_instance;
  }
  PrimitiveKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'PrimitiveKind', interfaces: [SerialKind]};
  function StructureKind() {
    SerialKind.call(this);
  }
  function StructureKind$CLASS() {
    StructureKind$CLASS_instance = this;
    StructureKind.call(this);
  }
  StructureKind$CLASS.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CLASS', interfaces: [StructureKind]};
  var StructureKind$CLASS_instance = null;
  function StructureKind$CLASS_getInstance() {
    if (StructureKind$CLASS_instance === null) {
      new StructureKind$CLASS();
    }
    return StructureKind$CLASS_instance;
  }
  function StructureKind$LIST() {
    StructureKind$LIST_instance = this;
    StructureKind.call(this);
  }
  StructureKind$LIST.$metadata$ = {kind: Kind_OBJECT, simpleName: 'LIST', interfaces: [StructureKind]};
  var StructureKind$LIST_instance = null;
  function StructureKind$LIST_getInstance() {
    if (StructureKind$LIST_instance === null) {
      new StructureKind$LIST();
    }
    return StructureKind$LIST_instance;
  }
  function StructureKind$MAP() {
    StructureKind$MAP_instance = this;
    StructureKind.call(this);
  }
  StructureKind$MAP.$metadata$ = {kind: Kind_OBJECT, simpleName: 'MAP', interfaces: [StructureKind]};
  var StructureKind$MAP_instance = null;
  function StructureKind$MAP_getInstance() {
    if (StructureKind$MAP_instance === null) {
      new StructureKind$MAP();
    }
    return StructureKind$MAP_instance;
  }
  StructureKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructureKind', interfaces: [SerialKind]};
  function UnionKind() {
    UnionKind$Companion_getInstance();
    SerialKind.call(this);
  }
  function UnionKind$OBJECT() {
    UnionKind$OBJECT_instance = this;
    UnionKind.call(this);
  }
  UnionKind$OBJECT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OBJECT', interfaces: [UnionKind]};
  var UnionKind$OBJECT_instance = null;
  function UnionKind$OBJECT_getInstance() {
    if (UnionKind$OBJECT_instance === null) {
      new UnionKind$OBJECT();
    }
    return UnionKind$OBJECT_instance;
  }
  function UnionKind$ENUM_KIND() {
    UnionKind$ENUM_KIND_instance = this;
    UnionKind.call(this);
  }
  UnionKind$ENUM_KIND.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ENUM_KIND', interfaces: [UnionKind]};
  var UnionKind$ENUM_KIND_instance = null;
  function UnionKind$ENUM_KIND_getInstance() {
    if (UnionKind$ENUM_KIND_instance === null) {
      new UnionKind$ENUM_KIND();
    }
    return UnionKind$ENUM_KIND_instance;
  }
  function UnionKind$Companion() {
    UnionKind$Companion_instance = this;
    this.POLYMORPHIC = PolymorphicKind$OPEN_getInstance();
    this.SEALED = PolymorphicKind$SEALED_getInstance();
  }
  UnionKind$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var UnionKind$Companion_instance = null;
  function UnionKind$Companion_getInstance() {
    if (UnionKind$Companion_instance === null) {
      new UnionKind$Companion();
    }
    return UnionKind$Companion_instance;
  }
  UnionKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnionKind', interfaces: [SerialKind]};
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function PolymorphicKind$SEALED() {
    PolymorphicKind$SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  PolymorphicKind$SEALED.$metadata$ = {kind: Kind_OBJECT, simpleName: 'SEALED', interfaces: [PolymorphicKind]};
  var PolymorphicKind$SEALED_instance = null;
  function PolymorphicKind$SEALED_getInstance() {
    if (PolymorphicKind$SEALED_instance === null) {
      new PolymorphicKind$SEALED();
    }
    return PolymorphicKind$SEALED_instance;
  }
  function PolymorphicKind$OPEN() {
    PolymorphicKind$OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  PolymorphicKind$OPEN.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OPEN', interfaces: [PolymorphicKind]};
  var PolymorphicKind$OPEN_instance = null;
  function PolymorphicKind$OPEN_getInstance() {
    if (PolymorphicKind$OPEN_instance === null) {
      new PolymorphicKind$OPEN();
    }
    return PolymorphicKind$OPEN_instance;
  }
  PolymorphicKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'PolymorphicKind', interfaces: [SerialKind]};
  function ElementValueEncoder() {
  }
  Object.defineProperty(ElementValueEncoder.prototype, 'context', {get: function () {
    return EmptyModule_getInstance();
  }});
  ElementValueEncoder.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    return this;
  };
  ElementValueEncoder.prototype.encodeElement_3zr2iy$ = function (desc, index) {
    return true;
  };
  ElementValueEncoder.prototype.encodeNotNullMark = function () {
  };
  ElementValueEncoder.prototype.encodeValue_za3rmp$ = function (value) {
    throw new SerializationException('Non-serializable ' + Kotlin.getKClassFromExpression(value) + ' is not supported by ' + Kotlin.getKClassFromExpression(this) + ' encoder');
  };
  ElementValueEncoder.prototype.encodeNull = function () {
    throw new SerializationException('null is not supported');
  };
  ElementValueEncoder.prototype.encodeUnit = function () {
    var encoder = this.beginStructure_r0sa6z$(UnitSerializer_getInstance().descriptor, []);
    encoder.endStructure_qatsm0$(UnitSerializer_getInstance().descriptor);
  };
  ElementValueEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeValue_za3rmp$(toBoxedChar(value));
  };
  ElementValueEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeEnum_3zr2iy$ = function (enumDescription, ordinal) {
    this.encodeValue_za3rmp$(ordinal);
  };
  ElementValueEncoder.prototype.encodeNonSerializableElement_4wpkd1$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeUnitElement_3zr2iy$ = function (desc, index) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeUnit();
  };
  ElementValueEncoder.prototype.encodeBooleanElement_w1b0nl$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeBoolean_6taknv$(value);
  };
  ElementValueEncoder.prototype.encodeByteElement_a3tadb$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeByte_s8j3t7$(value);
  };
  ElementValueEncoder.prototype.encodeShortElement_tet9k5$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeShort_mq22fl$(value);
  };
  ElementValueEncoder.prototype.encodeIntElement_4wpqag$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeInt_za3lpa$(value);
  };
  ElementValueEncoder.prototype.encodeLongElement_a3zgoj$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeLong_s8cxhz$(value);
  };
  ElementValueEncoder.prototype.encodeFloatElement_t7qhdx$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeFloat_mx4ult$(value);
  };
  ElementValueEncoder.prototype.encodeDoubleElement_imzr5k$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeDouble_14dthe$(value);
  };
  ElementValueEncoder.prototype.encodeCharElement_a3tkb1$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeChar_s8itvh$(value);
  };
  ElementValueEncoder.prototype.encodeStringElement_bgm7zs$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeString_61zpoe$(value);
  };
  ElementValueEncoder.prototype.encodeSerializableElement_blecud$ = function (desc, index, serializer, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeSerializableValue_tf03ej$(serializer, value);
  };
  ElementValueEncoder.prototype.encodeNullableSerializableElement_orpvvi$ = function (desc, index, serializer, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeNullableSerializableValue_f4686g$(serializer, value);
  };
  ElementValueEncoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'ElementValueEncoder', interfaces: [CompositeEncoder, Encoder]};
  function ElementValueDecoder() {
    this.updateMode_fmb1ae$_0 = UpdateMode$UPDATE_getInstance();
  }
  Object.defineProperty(ElementValueDecoder.prototype, 'context', {get: function () {
    return EmptyModule_getInstance();
  }});
  Object.defineProperty(ElementValueDecoder.prototype, 'updateMode', {get: function () {
    return this.updateMode_fmb1ae$_0;
  }});
  ElementValueDecoder.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    return -2;
  };
  ElementValueDecoder.prototype.decodeNotNullMark = function () {
    return true;
  };
  ElementValueDecoder.prototype.decodeNull = function () {
    return null;
  };
  ElementValueDecoder.prototype.decodeValue = function () {
    throw new SerializationException(Kotlin.getKClassFromExpression(this).toString() + " can't retrieve untyped values");
  };
  ElementValueDecoder.prototype.decodeUnit = function () {
    var reader = this.beginStructure_r0sa6z$(UnitSerializer_getInstance().descriptor, []);
    reader.endStructure_qatsm0$(UnitSerializer_getInstance().descriptor);
  };
  ElementValueDecoder.prototype.decodeBoolean = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'boolean' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeByte = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeShort = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeInt = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeLong = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.decodeValue(), Kotlin.Long) ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeFloat = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeDouble = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeChar = function () {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.decodeValue()) ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeString = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'string' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeEnum_qatsm0$ = function (enumDescription) {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    return this;
  };
  ElementValueDecoder.prototype.decodeUnitElement_3zr2iy$ = function (desc, index) {
    this.decodeUnit();
  };
  ElementValueDecoder.prototype.decodeBooleanElement_3zr2iy$ = function (desc, index) {
    return this.decodeBoolean();
  };
  ElementValueDecoder.prototype.decodeByteElement_3zr2iy$ = function (desc, index) {
    return this.decodeByte();
  };
  ElementValueDecoder.prototype.decodeShortElement_3zr2iy$ = function (desc, index) {
    return this.decodeShort();
  };
  ElementValueDecoder.prototype.decodeIntElement_3zr2iy$ = function (desc, index) {
    return this.decodeInt();
  };
  ElementValueDecoder.prototype.decodeLongElement_3zr2iy$ = function (desc, index) {
    return this.decodeLong();
  };
  ElementValueDecoder.prototype.decodeFloatElement_3zr2iy$ = function (desc, index) {
    return this.decodeFloat();
  };
  ElementValueDecoder.prototype.decodeDoubleElement_3zr2iy$ = function (desc, index) {
    return this.decodeDouble();
  };
  ElementValueDecoder.prototype.decodeCharElement_3zr2iy$ = function (desc, index) {
    return this.decodeChar();
  };
  ElementValueDecoder.prototype.decodeStringElement_3zr2iy$ = function (desc, index) {
    return this.decodeString();
  };
  ElementValueDecoder.prototype.decodeSerializableElement_s44l7r$ = function (desc, index, deserializer) {
    return this.decodeSerializableValue_w63s0f$(deserializer);
  };
  ElementValueDecoder.prototype.decodeNullableSerializableElement_cwlm4k$ = function (desc, index, deserializer) {
    return this.decodeNullableSerializableValue_aae3ea$(deserializer);
  };
  ElementValueDecoder.prototype.updateSerializableElement_ehubvl$ = function (desc, index, deserializer, old) {
    return this.updateSerializableValue_19c8k5$(deserializer, old);
  };
  ElementValueDecoder.prototype.updateNullableSerializableElement_u33s02$ = function (desc, index, deserializer, old) {
    return this.updateNullableSerializableValue_exmlbs$(deserializer, old);
  };
  ElementValueDecoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'ElementValueDecoder', interfaces: [CompositeDecoder, Decoder]};
  function SerializationException(message, cause) {
    if (cause === void 0)
      cause = null;
    RuntimeException.call(this, message, cause);
    this.name = 'SerializationException';
  }
  SerializationException.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerializationException', interfaces: [RuntimeException]};
  function MissingFieldException(fieldName) {
    SerializationException.call(this, "Field '" + fieldName + "' is required, but it was missing");
    this.name = 'MissingFieldException';
  }
  MissingFieldException.$metadata$ = {kind: Kind_CLASS, simpleName: 'MissingFieldException', interfaces: [SerializationException]};
  function UnknownFieldException(index) {
    SerializationException.call(this, 'Unknown field for index ' + index);
    this.name = 'UnknownFieldException';
  }
  UnknownFieldException.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnknownFieldException', interfaces: [SerializationException]};
  function UpdateNotSupportedException(className) {
    SerializationException.call(this, 'Update is not supported for ' + className);
    this.name = 'UpdateNotSupportedException';
  }
  UpdateNotSupportedException.$metadata$ = {kind: Kind_CLASS, simpleName: 'UpdateNotSupportedException', interfaces: [SerializationException]};
  var Mapper$Companion_instance = null;
  function serializer($receiver) {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = compiledSerializer($receiver)) != null ? tmp$ : defaultSerializer($receiver);
    if (tmp$_0 == null) {
      throw new SerializationException("Can't locate argument-less serializer for " + $receiver + '. For generic classes, such as lists, please provide serializer explicitly.');
    }
    return tmp$_0;
  }
  function PolymorphicClassDescriptor() {
    PolymorphicClassDescriptor_instance = this;
    SerialClassDescImpl.call(this, 'kotlin.Any');
    this.kind_r25cte$_0 = PolymorphicKind$OPEN_getInstance();
    this.addElement_ivxn3r$('class');
    this.addElement_ivxn3r$('value');
  }
  Object.defineProperty(PolymorphicClassDescriptor.prototype, 'kind', {get: function () {
    return this.kind_r25cte$_0;
  }});
  PolymorphicClassDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'PolymorphicClassDescriptor', interfaces: [SerialClassDescImpl]};
  var PolymorphicClassDescriptor_instance = null;
  function PolymorphicClassDescriptor_getInstance() {
    if (PolymorphicClassDescriptor_instance === null) {
      new PolymorphicClassDescriptor();
    }
    return PolymorphicClassDescriptor_instance;
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_x5jvam$_0 = baseClass;
    this.descriptor_nog3ww$_0 = PolymorphicClassDescriptor_getInstance();
  }
  Object.defineProperty(PolymorphicSerializer.prototype, 'baseClass', {get: function () {
    return this.baseClass_x5jvam$_0;
  }});
  Object.defineProperty(PolymorphicSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_nog3ww$_0;
  }});
  PolymorphicSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'PolymorphicSerializer', interfaces: [AbstractPolymorphicSerializer]};
  var INSTALL_DEPRECATION_TEXT;
  function SerialFormat() {
  }
  SerialFormat.prototype.install_stpyu4$ = function (module_0) {
  };
  SerialFormat.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SerialFormat', interfaces: []};
  function AbstractSerialFormat(context) {
    this.context_fzkcjb$_0 = context;
  }
  Object.defineProperty(AbstractSerialFormat.prototype, 'context', {get: function () {
    return this.context_fzkcjb$_0;
  }});
  AbstractSerialFormat.prototype.install_stpyu4$ = function (module_0) {
    throw new NotImplementedError_init(INSTALL_DEPRECATION_TEXT);
  };
  AbstractSerialFormat.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractSerialFormat', interfaces: [SerialFormat]};
  function BinaryFormat() {
  }
  function StringFormat() {
  }
  StringFormat.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StringFormat', interfaces: [SerialFormat]};
  function elementDescriptors($receiver) {
    var size = $receiver.elementsCount;
    var list = ArrayList_init(size);
    for (var index = 0; index < size; index++) {
      list.add_11rb$($receiver.getElementDescriptor_za3lpa$(index));
    }
    return list;
  }
  function elementNames($receiver) {
    var size = $receiver.elementsCount;
    var list = ArrayList_init(size);
    for (var index = 0; index < size; index++) {
      list.add_11rb$($receiver.getElementName_za3lpa$(index));
    }
    return list;
  }
  function getElementIndexOrThrow($receiver, name) {
    var i = $receiver.getElementIndex_61zpoe$(name);
    if (i === -3)
      throw new SerializationException($receiver.name + " does not contain element with name '" + name + "'");
    return i;
  }
  function TaggedEncoder() {
    this.tagStack_s9w57d$_0 = ArrayList_init_0();
  }
  Object.defineProperty(TaggedEncoder.prototype, 'context', {get: function () {
    return EmptyModule_getInstance();
  }});
  TaggedEncoder.prototype.encodeTaggedValue_dpg7wc$ = function (tag, value) {
    throw new SerializationException('Non-serializable ' + Kotlin.getKClassFromExpression(value) + ' is not supported by ' + Kotlin.getKClassFromExpression(this) + ' encoder');
  };
  TaggedEncoder.prototype.encodeTaggedNotNullMark_11rb$ = function (tag) {
  };
  TaggedEncoder.prototype.encodeTaggedNull_11rb$ = function (tag) {
    throw new SerializationException('null is not supported');
  };
  TaggedEncoder.prototype.encodeTaggedUnit_11rb$ = function (tag) {
    this.encodeTaggedValue_dpg7wc$(tag, Unit);
  };
  TaggedEncoder.prototype.encodeTaggedInt_dpg1yx$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedByte_19qe40$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedShort_veccj0$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedLong_19wkf8$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedFloat_vlf4p8$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedDouble_e37ph5$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedBoolean_iuyhfk$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedChar_19qo1q$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, toBoxedChar(value));
  };
  TaggedEncoder.prototype.encodeTaggedString_l9l8mx$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedEnum_v153v3$ = function (tag, enumDescription, ordinal) {
    this.encodeTaggedValue_dpg7wc$(tag, ordinal);
  };
  TaggedEncoder.prototype.encodeElement_3zr2iy$ = function (desc, index) {
    var tag = this.getTag_m47q6f$(desc, index);
    var shouldWriteElement = this.shouldWriteElement_a5qihn$(desc, tag, index);
    if (shouldWriteElement) {
      this.pushTag_11rb$(tag);
    }
    return shouldWriteElement;
  };
  TaggedEncoder.prototype.shouldWriteElement_a5qihn$ = function (desc, tag, index) {
    return true;
  };
  TaggedEncoder.prototype.encodeNotNullMark = function () {
    this.encodeTaggedNotNullMark_11rb$(this.currentTag);
  };
  TaggedEncoder.prototype.encodeNull = function () {
    this.encodeTaggedNull_11rb$(this.popTag());
  };
  TaggedEncoder.prototype.encodeUnit = function () {
    this.encodeTaggedUnit_11rb$(this.popTag());
  };
  TaggedEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    this.encodeTaggedBoolean_iuyhfk$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    this.encodeTaggedByte_19qe40$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    this.encodeTaggedShort_veccj0$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    this.encodeTaggedInt_dpg1yx$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    this.encodeTaggedLong_19wkf8$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeTaggedFloat_vlf4p8$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    this.encodeTaggedDouble_e37ph5$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeTaggedChar_19qo1q$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.encodeTaggedString_l9l8mx$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeEnum_3zr2iy$ = function (enumDescription, ordinal) {
    this.encodeTaggedEnum_v153v3$(this.popTag(), enumDescription, ordinal);
  };
  TaggedEncoder.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    return this;
  };
  TaggedEncoder.prototype.endStructure_qatsm0$ = function (desc) {
    if (!this.tagStack_s9w57d$_0.isEmpty())
      this.popTag();
    this.endEncode_qatsm0$(desc);
  };
  TaggedEncoder.prototype.endEncode_qatsm0$ = function (desc) {
  };
  TaggedEncoder.prototype.encodeNonSerializableElement_4wpkd1$ = function (desc, index, value) {
    this.encodeTaggedValue_dpg7wc$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeUnitElement_3zr2iy$ = function (desc, index) {
    this.encodeTaggedUnit_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedEncoder.prototype.encodeBooleanElement_w1b0nl$ = function (desc, index, value) {
    this.encodeTaggedBoolean_iuyhfk$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeByteElement_a3tadb$ = function (desc, index, value) {
    this.encodeTaggedByte_19qe40$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeShortElement_tet9k5$ = function (desc, index, value) {
    this.encodeTaggedShort_veccj0$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeIntElement_4wpqag$ = function (desc, index, value) {
    this.encodeTaggedInt_dpg1yx$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeLongElement_a3zgoj$ = function (desc, index, value) {
    this.encodeTaggedLong_19wkf8$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeFloatElement_t7qhdx$ = function (desc, index, value) {
    this.encodeTaggedFloat_vlf4p8$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeDoubleElement_imzr5k$ = function (desc, index, value) {
    this.encodeTaggedDouble_e37ph5$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeCharElement_a3tkb1$ = function (desc, index, value) {
    this.encodeTaggedChar_19qo1q$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeStringElement_bgm7zs$ = function (desc, index, value) {
    this.encodeTaggedString_l9l8mx$(this.getTag_m47q6f$(desc, index), value);
  };
  TaggedEncoder.prototype.encodeSerializableElement_blecud$ = function (desc, index, serializer, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeSerializableValue_tf03ej$(serializer, value);
  };
  TaggedEncoder.prototype.encodeNullableSerializableElement_orpvvi$ = function (desc, index, serializer, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeNullableSerializableValue_f4686g$(serializer, value);
  };
  Object.defineProperty(TaggedEncoder.prototype, 'currentTag', {get: function () {
    return last(this.tagStack_s9w57d$_0);
  }});
  Object.defineProperty(TaggedEncoder.prototype, 'currentTagOrNull', {get: function () {
    return lastOrNull(this.tagStack_s9w57d$_0);
  }});
  TaggedEncoder.prototype.pushTag_11rb$ = function (name) {
    this.tagStack_s9w57d$_0.add_11rb$(name);
  };
  TaggedEncoder.prototype.popTag = function () {
    if (!this.tagStack_s9w57d$_0.isEmpty())
      return this.tagStack_s9w57d$_0.removeAt_za3lpa$(get_lastIndex(this.tagStack_s9w57d$_0));
    else
      throw new SerializationException('No tag in stack for requested element');
  };
  TaggedEncoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'TaggedEncoder', interfaces: [CompositeEncoder, Encoder]};
  function NamedValueEncoder(rootName) {
    if (rootName === void 0)
      rootName = '';
    TaggedEncoder.call(this);
    this.rootName = rootName;
  }
  NamedValueEncoder.prototype.getTag_m47q6f$ = function ($receiver, index) {
    return this.nested_61zpoe$(this.elementName_3zr2iy$($receiver, index));
  };
  NamedValueEncoder.prototype.nested_61zpoe$ = function (nestedName) {
    var tmp$;
    return this.composeName_puj7f4$((tmp$ = this.currentTagOrNull) != null ? tmp$ : this.rootName, nestedName);
  };
  NamedValueEncoder.prototype.elementName_3zr2iy$ = function (desc, index) {
    return desc.getElementName_za3lpa$(index);
  };
  NamedValueEncoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return parentName.length === 0 ? childName : parentName + '.' + childName;
  };
  NamedValueEncoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'NamedValueEncoder', interfaces: [TaggedEncoder]};
  function TaggedDecoder() {
    this.updateMode_mc39q5$_0 = UpdateMode$UPDATE_getInstance();
    this.tagStack_auon0h$_0 = ArrayList_init_0();
    this.flag_10a271$_0 = false;
  }
  Object.defineProperty(TaggedDecoder.prototype, 'context', {get: function () {
    return EmptyModule_getInstance();
  }});
  Object.defineProperty(TaggedDecoder.prototype, 'updateMode', {get: function () {
    return this.updateMode_mc39q5$_0;
  }});
  TaggedDecoder.prototype.decodeTaggedValue_11rb$ = function (tag) {
    throw new SerializationException(Kotlin.getKClassFromExpression(this).toString() + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.decodeTaggedNotNullMark_11rb$ = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.decodeTaggedNull_11rb$ = function (tag) {
    return null;
  };
  TaggedDecoder.prototype.decodeTaggedUnit_11rb$ = function (tag) {
    var tmp$;
    Kotlin.isType(tmp$ = this.decodeTaggedValue_11rb$(tag), Object.getPrototypeOf(kotlin.Unit).constructor) ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedBoolean_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'boolean' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedByte_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedShort_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedInt_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedLong_11rb$ = function (tag) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.decodeTaggedValue_11rb$(tag), Kotlin.Long) ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedFloat_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedDouble_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedChar_11rb$ = function (tag) {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.decodeTaggedValue_11rb$(tag)) ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedString_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'string' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedEnum_xicdkz$ = function (tag, enumDescription) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeNotNullMark = function () {
    return this.decodeTaggedNotNullMark_11rb$(this.currentTag);
  };
  TaggedDecoder.prototype.decodeNull = function () {
    return null;
  };
  TaggedDecoder.prototype.decodeUnit = function () {
    this.decodeTaggedUnit_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeBoolean = function () {
    return this.decodeTaggedBoolean_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeByte = function () {
    return this.decodeTaggedByte_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeShort = function () {
    return this.decodeTaggedShort_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeInt = function () {
    return this.decodeTaggedInt_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeLong = function () {
    return this.decodeTaggedLong_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeFloat = function () {
    return this.decodeTaggedFloat_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeDouble = function () {
    return this.decodeTaggedDouble_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeChar = function () {
    return this.decodeTaggedChar_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeString = function () {
    return this.decodeTaggedString_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeEnum_qatsm0$ = function (enumDescription) {
    return this.decodeTaggedEnum_xicdkz$(this.popTag(), enumDescription);
  };
  TaggedDecoder.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    return this;
  };
  TaggedDecoder.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    return -2;
  };
  TaggedDecoder.prototype.decodeUnitElement_3zr2iy$ = function (desc, index) {
    this.decodeTaggedUnit_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedDecoder.prototype.decodeBooleanElement_3zr2iy$ = function (desc, index) {
    return this.decodeTaggedBoolean_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedDecoder.prototype.decodeByteElement_3zr2iy$ = function (desc, index) {
    return this.decodeTaggedByte_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedDecoder.prototype.decodeShortElement_3zr2iy$ = function (desc, index) {
    return this.decodeTaggedShort_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedDecoder.prototype.decodeIntElement_3zr2iy$ = function (desc, index) {
    return this.decodeTaggedInt_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedDecoder.prototype.decodeLongElement_3zr2iy$ = function (desc, index) {
    return this.decodeTaggedLong_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedDecoder.prototype.decodeFloatElement_3zr2iy$ = function (desc, index) {
    return this.decodeTaggedFloat_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedDecoder.prototype.decodeDoubleElement_3zr2iy$ = function (desc, index) {
    return this.decodeTaggedDouble_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedDecoder.prototype.decodeCharElement_3zr2iy$ = function (desc, index) {
    return this.decodeTaggedChar_11rb$(this.getTag_m47q6f$(desc, index));
  };
  TaggedDecoder.prototype.decodeStringElement_3zr2iy$ = function (desc, index) {
    return this.decodeTaggedString_11rb$(this.getTag_m47q6f$(desc, index));
  };
  function TaggedDecoder$decodeSerializableElement$lambda(closure$deserializer, this$TaggedDecoder) {
    return function () {
      return this$TaggedDecoder.decodeSerializableValue_w63s0f$(closure$deserializer);
    };
  }
  TaggedDecoder.prototype.decodeSerializableElement_s44l7r$ = function (desc, index, deserializer) {
    return this.tagBlock_6d26t9$_0(this.getTag_m47q6f$(desc, index), TaggedDecoder$decodeSerializableElement$lambda(deserializer, this));
  };
  function TaggedDecoder$decodeNullableSerializableElement$lambda(closure$deserializer, this$TaggedDecoder) {
    return function () {
      return this$TaggedDecoder.decodeNullableSerializableValue_aae3ea$(closure$deserializer);
    };
  }
  TaggedDecoder.prototype.decodeNullableSerializableElement_cwlm4k$ = function (desc, index, deserializer) {
    return this.tagBlock_6d26t9$_0(this.getTag_m47q6f$(desc, index), TaggedDecoder$decodeNullableSerializableElement$lambda(deserializer, this));
  };
  function TaggedDecoder$updateSerializableElement$lambda(closure$deserializer, closure$old, this$TaggedDecoder) {
    return function () {
      return this$TaggedDecoder.updateSerializableValue_19c8k5$(closure$deserializer, closure$old);
    };
  }
  TaggedDecoder.prototype.updateSerializableElement_ehubvl$ = function (desc, index, deserializer, old) {
    return this.tagBlock_6d26t9$_0(this.getTag_m47q6f$(desc, index), TaggedDecoder$updateSerializableElement$lambda(deserializer, old, this));
  };
  function TaggedDecoder$updateNullableSerializableElement$lambda(closure$deserializer, closure$old, this$TaggedDecoder) {
    return function () {
      return this$TaggedDecoder.updateNullableSerializableValue_exmlbs$(closure$deserializer, closure$old);
    };
  }
  TaggedDecoder.prototype.updateNullableSerializableElement_u33s02$ = function (desc, index, deserializer, old) {
    return this.tagBlock_6d26t9$_0(this.getTag_m47q6f$(desc, index), TaggedDecoder$updateNullableSerializableElement$lambda(deserializer, old, this));
  };
  TaggedDecoder.prototype.tagBlock_6d26t9$_0 = function (tag, block) {
    this.pushTag_11rb$(tag);
    var r = block();
    if (!this.flag_10a271$_0) {
      this.popTag();
    }
    this.flag_10a271$_0 = false;
    return r;
  };
  Object.defineProperty(TaggedDecoder.prototype, 'currentTag', {get: function () {
    return last(this.tagStack_auon0h$_0);
  }});
  Object.defineProperty(TaggedDecoder.prototype, 'currentTagOrNull', {get: function () {
    return lastOrNull(this.tagStack_auon0h$_0);
  }});
  TaggedDecoder.prototype.pushTag_11rb$ = function (name) {
    this.tagStack_auon0h$_0.add_11rb$(name);
  };
  TaggedDecoder.prototype.popTag = function () {
    var r = this.tagStack_auon0h$_0.removeAt_za3lpa$(get_lastIndex(this.tagStack_auon0h$_0));
    this.flag_10a271$_0 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'TaggedDecoder', interfaces: [CompositeDecoder, Decoder]};
  function NamedValueDecoder(rootName) {
    if (rootName === void 0)
      rootName = '';
    TaggedDecoder.call(this);
    this.rootName = rootName;
  }
  NamedValueDecoder.prototype.getTag_m47q6f$ = function ($receiver, index) {
    return this.nested_61zpoe$(this.elementName_3zr2iy$($receiver, index));
  };
  NamedValueDecoder.prototype.nested_61zpoe$ = function (nestedName) {
    var tmp$;
    return this.composeName_puj7f4$((tmp$ = this.currentTagOrNull) != null ? tmp$ : this.rootName, nestedName);
  };
  NamedValueDecoder.prototype.elementName_3zr2iy$ = function (desc, index) {
    return desc.getElementName_za3lpa$(index);
  };
  NamedValueDecoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return parentName.length === 0 ? childName : parentName + '.' + childName;
  };
  NamedValueDecoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'NamedValueDecoder', interfaces: [TaggedDecoder]};
  var Cbor$Companion_instance = null;
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var actualSerializer = this.findPolymorphicSerializer_7kuzo6$(encoder, obj);
    var compositeEncoder = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    compositeEncoder.encodeStringElement_bgm7zs$(this.descriptor, 0, actualSerializer.descriptor.name);
    compositeEncoder.encodeSerializableElement_blecud$(this.descriptor, 1, Kotlin.isType(tmp$ = actualSerializer, KSerializer) ? tmp$ : throwCCE(), obj);
    compositeEncoder.endStructure_qatsm0$(this.descriptor);
  };
  AbstractPolymorphicSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var compositeDecoder = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    var klassName = {v: null};
    var value = null;
    mainLoop: while (true) {
      var index = compositeDecoder.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          klassName.v = compositeDecoder.decodeStringElement_3zr2iy$(this.descriptor, 0);
          var serializer = this.findPolymorphicSerializer_b69zac$(compositeDecoder, klassName.v);
          value = compositeDecoder.decodeSerializableElement_s44l7r$(this.descriptor, 1, serializer);
          break mainLoop;
        case -1:
          break mainLoop;
        case 0:
          klassName.v = compositeDecoder.decodeStringElement_3zr2iy$(this.descriptor, index);
          break;
        case 1:
          var value_0 = klassName.v;
          var requireNotNull$result;
          if (value_0 == null) {
            var message = 'Cannot read polymorphic value before its type token';
            throw IllegalArgumentException_init(message.toString());
          }
           else {
            requireNotNull$result = value_0;
          }

          klassName.v = requireNotNull$result;
          var serializer_0 = this.findPolymorphicSerializer_b69zac$(compositeDecoder, klassName.v);
          value = compositeDecoder.decodeSerializableElement_s44l7r$(this.descriptor, index, serializer_0);
          break;
        default:throw new SerializationException('Invalid index in polymorphic deserialization of ' + toString((tmp$ = klassName.v) != null ? tmp$ : 'unknown class') + ('\n' + ' Expected 0, 1, READ_ALL(-2) or READ_DONE(-1), but found ' + index));
      }
    }
    compositeDecoder.endStructure_qatsm0$(this.descriptor);
    var value_1 = value;
    var requireNotNull$result_0;
    if (value_1 == null) {
      var message_0 = 'Polymorphic value has not been read for class ' + toString(klassName.v);
      throw IllegalArgumentException_init(message_0.toString());
    }
     else {
      requireNotNull$result_0 = value_1;
    }
    return Kotlin.isType(tmp$_0 = requireNotNull$result_0, Any) ? tmp$_0 : throwCCE();
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializer_b69zac$ = function (decoder, klassName) {
    var tmp$;
    return (tmp$ = decoder.context.getPolymorphic_6xtsla$(this.baseClass, klassName)) != null ? tmp$ : throwSubtypeNotRegistered(klassName, this.baseClass);
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializer_7kuzo6$ = function (encoder, value) {
    var tmp$;
    return (tmp$ = encoder.context.getPolymorphic_b1ce0a$(this.baseClass, value)) != null ? tmp$ : throwSubtypeNotRegistered_0(Kotlin.getKClassFromExpression(value), this.baseClass);
  };
  AbstractPolymorphicSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractPolymorphicSerializer', interfaces: [KSerializer]};
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    throw new SerializationException(subClassName + ' is not registered for polymorphic serialization in the scope of ' + baseClass);
  }
  function throwSubtypeNotRegistered_0(subClass, baseClass) {
    return throwSubtypeNotRegistered(subClass.toString(), baseClass);
  }
  function ListLikeDescriptor(elementDesc) {
    this.elementDesc = elementDesc;
    this.elementsCount_axr0xc$_0 = 1;
  }
  Object.defineProperty(ListLikeDescriptor.prototype, 'kind', {get: function () {
    return StructureKind$LIST_getInstance();
  }});
  Object.defineProperty(ListLikeDescriptor.prototype, 'elementsCount', {get: function () {
    return this.elementsCount_axr0xc$_0;
  }});
  ListLikeDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = toIntOrNull(name);
    if (tmp$ == null) {
      throw IllegalArgumentException_init(name + ' is not a valid list index');
    }
    return tmp$;
  };
  ListLikeDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.elementDesc;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, ListLikeDescriptor))
      return false;
    if (equals(this.elementDesc, other.elementDesc) && equals(this.name, other.name))
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return (hashCode(this.elementDesc) * 31 | 0) + hashCode(this.name) | 0;
  };
  ListLikeDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListLikeDescriptor', interfaces: [SerialDescriptor]};
  function MapLikeDescriptor(name, keyDescriptor, valueDescriptor) {
    this.name_eko8nt$_0 = name;
    this.keyDescriptor = keyDescriptor;
    this.valueDescriptor = valueDescriptor;
    this.elementsCount_qp2ocq$_0 = 2;
  }
  Object.defineProperty(MapLikeDescriptor.prototype, 'name', {get: function () {
    return this.name_eko8nt$_0;
  }});
  Object.defineProperty(MapLikeDescriptor.prototype, 'kind', {get: function () {
    return StructureKind$MAP_getInstance();
  }});
  Object.defineProperty(MapLikeDescriptor.prototype, 'elementsCount', {get: function () {
    return this.elementsCount_qp2ocq$_0;
  }});
  MapLikeDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = toIntOrNull(name);
    if (tmp$ == null) {
      throw IllegalArgumentException_init(name + ' is not a valid map index');
    }
    return tmp$;
  };
  MapLikeDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return index % 2 === 0 ? this.keyDescriptor : this.valueDescriptor;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, MapLikeDescriptor))
      return false;
    if (!equals(this.name, other.name))
      return false;
    if (!equals(this.keyDescriptor, other.keyDescriptor))
      return false;
    if (!equals(this.valueDescriptor, other.valueDescriptor))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = hashCode(this.name);
    result = (31 * result | 0) + hashCode(this.keyDescriptor) | 0;
    result = (31 * result | 0) + hashCode(this.valueDescriptor) | 0;
    return result;
  };
  MapLikeDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MapLikeDescriptor', interfaces: [SerialDescriptor]};
  var ARRAY_NAME;
  var ARRAY_LIST_NAME;
  var LINKED_HASH_SET_NAME;
  var HASH_SET_NAME;
  var LINKED_HASH_MAP_NAME;
  var HASH_MAP_NAME;
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(ArrayListClassDesc.prototype, 'name', {get: function () {
    return ARRAY_LIST_NAME;
  }});
  ArrayListClassDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayListClassDesc', interfaces: [ListLikeDescriptor]};
  function NamedListClassDescriptor(name, elementDescriptor) {
    ListLikeDescriptor.call(this, elementDescriptor);
    this.name_3zrur7$_0 = name;
  }
  Object.defineProperty(NamedListClassDescriptor.prototype, 'name', {get: function () {
    return this.name_3zrur7$_0;
  }});
  NamedListClassDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'NamedListClassDescriptor', interfaces: [ListLikeDescriptor]};
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(LinkedHashSetClassDesc.prototype, 'name', {get: function () {
    return LINKED_HASH_SET_NAME;
  }});
  LinkedHashSetClassDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedHashSetClassDesc', interfaces: [ListLikeDescriptor]};
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(HashSetClassDesc.prototype, 'name', {get: function () {
    return HASH_SET_NAME;
  }});
  HashSetClassDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'HashSetClassDesc', interfaces: [ListLikeDescriptor]};
  function NamedMapClassDescriptor(name, keyDescriptor, valueDescriptor) {
    MapLikeDescriptor.call(this, name, keyDescriptor, valueDescriptor);
  }
  NamedMapClassDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'NamedMapClassDescriptor', interfaces: [MapLikeDescriptor]};
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, LINKED_HASH_MAP_NAME, keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedHashMapClassDesc', interfaces: [MapLikeDescriptor]};
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, HASH_MAP_NAME, keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'HashMapClassDesc', interfaces: [MapLikeDescriptor]};
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.patch_mynpiu$ = function (decoder, old) {
    var builder = this.toBuilder_wikn$(old);
    var startIndex = this.builderSize_wili$(builder);
    var compositeDecoder = decoder.beginStructure_r0sa6z$(this.descriptor, this.typeParams.slice());
    var size = this.readSize_mes5ce$_0(compositeDecoder, builder);
    mainLoop: while (true) {
      var index = compositeDecoder.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          this.readAll_uzf5cf$(compositeDecoder, builder, startIndex, size);
          break mainLoop;
        case -1:
          break mainLoop;
        default:this.readElement_ind1ny$(compositeDecoder, startIndex + index | 0, builder);
          break;
      }
    }
    compositeDecoder.endStructure_qatsm0$(this.descriptor);
    return this.toResult_wili$(builder);
  };
  AbstractCollectionSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var builder = this.builder();
    return this.patch_mynpiu$(decoder, this.toResult_wili$(builder));
  };
  AbstractCollectionSerializer.prototype.readSize_mes5ce$_0 = function (decoder, builder) {
    var size = decoder.decodeCollectionSize_qatsm0$(this.descriptor);
    this.checkCapacity_rk7bw8$(builder, size);
    return size;
  };
  AbstractCollectionSerializer.prototype.readElement_ind1ny$ = function (decoder, index, builder, checkIndex, callback$default) {
    if (checkIndex === void 0)
      checkIndex = true;
    callback$default ? callback$default(decoder, index, builder, checkIndex) : this.readElement_ind1ny$$default(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractCollectionSerializer', interfaces: [KSerializer]};
  function ListLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer_6sofm1$_0 = elementSerializer;
    this.typeParams_thbhbl$_0 = [this.elementSerializer_6sofm1$_0];
  }
  Object.defineProperty(ListLikeSerializer.prototype, 'typeParams', {get: function () {
    return this.typeParams_thbhbl$_0;
  }});
  ListLikeSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var size = this.collectionSize_wikn$(obj);
    var encoder_0 = encoder.beginCollection_gly1x5$(this.descriptor, size, this.typeParams.slice());
    var iterator = this.collectionIterator_wikn$(obj);
    for (var index = 0; index < size; index++)
      encoder_0.encodeSerializableElement_blecud$(this.descriptor, index, this.elementSerializer_6sofm1$_0, iterator.next());
    encoder_0.endStructure_qatsm0$(this.descriptor);
  };
  ListLikeSerializer.prototype.readAll_uzf5cf$ = function (decoder, builder, startIndex, size) {
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init(message.toString());
    }
    for (var index = 0; index < size; index++)
      this.readElement_ind1ny$(decoder, startIndex + index | 0, builder, false);
  };
  ListLikeSerializer.prototype.readElement_ind1ny$$default = function (decoder, index, builder, checkIndex) {
    this.insert_p422l$(builder, index, decoder.decodeSerializableElement_s44l7r$(this.descriptor, index, this.elementSerializer_6sofm1$_0));
  };
  ListLikeSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListLikeSerializer', interfaces: [AbstractCollectionSerializer]};
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer = keySerializer;
    this.valueSerializer = valueSerializer;
    this.typeParams_jdi5pn$_0 = [this.keySerializer, this.valueSerializer];
  }
  Object.defineProperty(MapLikeSerializer.prototype, 'typeParams', {get: function () {
    return this.typeParams_jdi5pn$_0;
  }});
  MapLikeSerializer.prototype.readAll_uzf5cf$ = function (decoder, builder, startIndex, size) {
    var tmp$;
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init(message.toString());
    }
    tmp$ = size * 2 | 0;
    for (var index = 0; index < tmp$; index += 2)
      this.readElement_ind1ny$(decoder, startIndex + index | 0, builder, false);
  };
  MapLikeSerializer.prototype.readElement_ind1ny$$default = function (decoder, index, builder, checkIndex) {
    var tmp$, tmp$_0;
    var key = decoder.decodeSerializableElement_s44l7r$(this.descriptor, index, this.keySerializer);
    if (checkIndex) {
      var $receiver = decoder.decodeElementIndex_qatsm0$(this.descriptor);
      if (!($receiver === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + $receiver;
        throw IllegalArgumentException_init(message.toString());
      }
      tmp$ = $receiver;
    }
     else {
      tmp$ = index + 1 | 0;
    }
    var vIndex = tmp$;
    if (builder.containsKey_11rb$(key) && !Kotlin.isType(this.valueSerializer.descriptor.kind, PrimitiveKind)) {
      tmp$_0 = decoder.updateSerializableElement_ehubvl$(this.descriptor, vIndex, this.valueSerializer, getValue(builder, key));
    }
     else {
      tmp$_0 = decoder.decodeSerializableElement_s44l7r$(this.descriptor, vIndex, this.valueSerializer);
    }
    var value = tmp$_0;
    builder.put_xwzc9p$(key, value);
  };
  MapLikeSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var size = this.collectionSize_wikn$(obj);
    var encoder_0 = encoder.beginCollection_gly1x5$(this.descriptor, size, this.typeParams.slice());
    var iterator = this.collectionIterator_wikn$(obj);
    var index = {v: 0};
    while (iterator.hasNext()) {
      var element = iterator.next();
      var k = element.key;
      var v = element.value;
      var tmp$, tmp$_0;
      encoder_0.encodeSerializableElement_blecud$(this.descriptor, (tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$), this.keySerializer, k);
      encoder_0.encodeSerializableElement_blecud$(this.descriptor, (tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), this.valueSerializer, v);
    }
    encoder_0.endStructure_qatsm0$(this.descriptor);
  };
  MapLikeSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'MapLikeSerializer', interfaces: [AbstractCollectionSerializer]};
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element);
    this.descriptor_7uwoa2$_0 = new ArrayListClassDesc(element.descriptor);
  }
  Object.defineProperty(ArrayListSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_7uwoa2$_0;
  }});
  ArrayListSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  ArrayListSerializer.prototype.builder = function () {
    return ArrayList_init_0();
  };
  ArrayListSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  ArrayListSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, ArrayList) ? tmp$ : null) != null ? tmp$_0 : ArrayList_init_1($receiver);
  };
  ArrayListSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  ArrayListSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_wxm5ur$(index, element);
  };
  ArrayListSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayListSerializer', interfaces: [ListLikeSerializer]};
  function LinkedHashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.descriptor_vnfc7m$_0 = new LinkedHashSetClassDesc(eSerializer.descriptor);
  }
  Object.defineProperty(LinkedHashSetSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_vnfc7m$_0;
  }});
  LinkedHashSetSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashSetSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  LinkedHashSetSerializer.prototype.builder = function () {
    return LinkedHashSet_init_0();
  };
  LinkedHashSetSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashSetSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  LinkedHashSetSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, LinkedHashSet) ? tmp$ : null) != null ? tmp$_0 : LinkedHashSet_init($receiver);
  };
  LinkedHashSetSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  LinkedHashSetSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_11rb$(element);
  };
  LinkedHashSetSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedHashSetSerializer', interfaces: [ListLikeSerializer]};
  function HashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.descriptor_yqpz47$_0 = new HashSetClassDesc(eSerializer.descriptor);
  }
  Object.defineProperty(HashSetSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_yqpz47$_0;
  }});
  HashSetSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  HashSetSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  HashSetSerializer.prototype.builder = function () {
    return HashSet_init();
  };
  HashSetSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  HashSetSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  HashSetSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, HashSet) ? tmp$ : null) != null ? tmp$_0 : HashSet_init_0($receiver);
  };
  HashSetSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  HashSetSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_11rb$(element);
  };
  HashSetSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'HashSetSerializer', interfaces: [ListLikeSerializer]};
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_pixp0o$_0 = new LinkedHashMapClassDesc(kSerializer.descriptor, vSerializer.descriptor);
  }
  Object.defineProperty(LinkedHashMapSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_pixp0o$_0;
  }});
  LinkedHashMapSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashMapSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.entries.iterator();
  };
  LinkedHashMapSerializer.prototype.builder = function () {
    return LinkedHashMap_init();
  };
  LinkedHashMapSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashMapSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  LinkedHashMapSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, LinkedHashMap) ? tmp$ : null) != null ? tmp$_0 : LinkedHashMap_init_1($receiver);
  };
  LinkedHashMapSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_fbr58l$ = function ($receiver, index, key, value) {
    $receiver.put_xwzc9p$(key, value);
  };
  LinkedHashMapSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedHashMapSerializer', interfaces: [MapLikeSerializer]};
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_kvyydd$_0 = new HashMapClassDesc(kSerializer.descriptor, vSerializer.descriptor);
  }
  Object.defineProperty(HashMapSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_kvyydd$_0;
  }});
  HashMapSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  HashMapSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.entries.iterator();
  };
  HashMapSerializer.prototype.builder = function () {
    return HashMap_init();
  };
  HashMapSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  HashMapSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  HashMapSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, HashMap) ? tmp$ : null) != null ? tmp$_0 : HashMap_init_0($receiver);
  };
  HashMapSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  HashMapSerializer.prototype.insertKeyValuePair_fbr58l$ = function ($receiver, index, key, value) {
    $receiver.put_xwzc9p$(key, value);
  };
  HashMapSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'HashMapSerializer', interfaces: [MapLikeSerializer]};
  function EnumDescriptor(name, values) {
    if (values === void 0) {
      values = [];
    }
    SerialClassDescImpl.call(this, name);
    this.kind_8antlo$_0 = UnionKind$ENUM_KIND_getInstance();
    var $receiver = values;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.addElement_ivxn3r$(element);
    }
  }
  Object.defineProperty(EnumDescriptor.prototype, 'kind', {get: function () {
    return this.kind_8antlo$_0;
  }});
  EnumDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this;
  };
  EnumDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!Kotlin.isType(other, SerialDescriptor))
      return false;
    if (other.kind !== UnionKind$ENUM_KIND_getInstance())
      return false;
    if (!equals(this.name, other.name))
      return false;
    if (!equals(elementNames(this), elementNames(other)))
      return false;
    return true;
  };
  EnumDescriptor.prototype.toString = function () {
    return joinToString(elementNames(this), ', ', this.name + '(', ')');
  };
  EnumDescriptor.prototype.hashCode = function () {
    var result = SerialClassDescImpl.prototype.hashCode.call(this);
    result = (31 * result | 0) + hashCode(this.name) | 0;
    result = (31 * result | 0) + hashCode(elementNames(this)) | 0;
    return result;
  };
  EnumDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'EnumDescriptor', interfaces: [SerialClassDescImpl]};
  function CommonEnumSerializer(serialName, values, valuesNames) {
    this.values = values;
    this.descriptor_j2zgdl$_0 = new EnumDescriptor(serialName, valuesNames);
  }
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'GeneratedSerializer', interfaces: [KSerializer]};
  function LongAsStringSerializer() {
    LongAsStringSerializer_instance = this;
    this.descriptor_9ax8ui$_0 = StringDescriptor_getInstance();
  }
  var LongAsStringSerializer_instance = null;
  function get_nullable($receiver) {
    var tmp$;
    return $receiver.descriptor.isNullable ? Kotlin.isType(tmp$ = $receiver, KSerializer) ? tmp$ : throwCCE() : new NullableSerializer($receiver);
  }
  function NullableSerializer(serializer) {
    this.serializer_0 = serializer;
    this.descriptor_kbvl2k$_0 = new NullableSerializer$SerialDescriptorForNullable(this.serializer_0.descriptor);
  }
  Object.defineProperty(NullableSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_kbvl2k$_0;
  }});
  NullableSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    if (obj != null) {
      encoder.encodeNotNullMark();
      encoder.encodeSerializableValue_tf03ej$(this.serializer_0, obj);
    }
     else {
      encoder.encodeNull();
    }
  };
  NullableSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeNotNullMark() ? decoder.decodeSerializableValue_w63s0f$(this.serializer_0) : decoder.decodeNull();
  };
  NullableSerializer.prototype.patch_mynpiu$ = function (decoder, old) {
    var tmp$;
    if (old == null)
      tmp$ = this.deserialize_nts5qn$(decoder);
    else if (decoder.decodeNotNullMark())
      tmp$ = decoder.updateSerializableValue_19c8k5$(this.serializer_0, old);
    else {
      decoder.decodeNull();
      tmp$ = old;
    }
    return tmp$;
  };
  function NullableSerializer$SerialDescriptorForNullable(original) {
    this.original_0 = original;
  }
  Object.defineProperty(NullableSerializer$SerialDescriptorForNullable.prototype, 'isNullable', {get: function () {
    return true;
  }});
  NullableSerializer$SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, NullableSerializer$SerialDescriptorForNullable))
      return false;
    if (!equals(this.original_0, other.original_0))
      return false;
    return true;
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.hashCode = function () {
    return hashCode(this.original_0) * 31 | 0;
  };
  Object.defineProperty(NullableSerializer$SerialDescriptorForNullable.prototype, 'elementsCount', {get: function () {
    return this.original_0.elementsCount;
  }});
  Object.defineProperty(NullableSerializer$SerialDescriptorForNullable.prototype, 'kind', {get: function () {
    return this.original_0.kind;
  }});
  Object.defineProperty(NullableSerializer$SerialDescriptorForNullable.prototype, 'name', {get: function () {
    return this.original_0.name;
  }});
  NullableSerializer$SerialDescriptorForNullable.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.original_0.getElementAnnotations_za3lpa$(index);
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.original_0.getElementDescriptor_za3lpa$(index);
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.original_0.getElementIndex_61zpoe$(name);
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.getElementName_za3lpa$ = function (index) {
    return this.original_0.getElementName_za3lpa$(index);
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.getEntityAnnotations = function () {
    return this.original_0.getEntityAnnotations();
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.original_0.isElementOptional_za3lpa$(index);
  };
  NullableSerializer$SerialDescriptorForNullable.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerialDescriptorForNullable', interfaces: [SerialDescriptor]};
  NullableSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'NullableSerializer', interfaces: [KSerializer]};
  function ObjectSerializer(serialName, objectInstance) {
    this.objectInstance_0 = objectInstance;
    this.descriptor_uhy216$_0 = new ObjectDescriptor(serialName);
  }
  var INITIAL_SIZE;
  var ByteArraySerializer_instance = null;
  var ShortArraySerializer_instance = null;
  var IntArraySerializer_instance = null;
  var LongArraySerializer_instance = null;
  var FloatArraySerializer_instance = null;
  var DoubleArraySerializer_instance = null;
  var CharArraySerializer_instance = null;
  var BooleanArraySerializer_instance = null;
  function PrimitiveDescriptor(name, kind) {
    this.name_r9ht6j$_0 = name;
    this.kind_r7zk0i$_0 = kind;
  }
  Object.defineProperty(PrimitiveDescriptor.prototype, 'name', {get: function () {
    return this.name_r9ht6j$_0;
  }});
  Object.defineProperty(PrimitiveDescriptor.prototype, 'kind', {get: function () {
    return this.kind_r7zk0i$_0;
  }});
  PrimitiveDescriptor.prototype.error_b6z6t6$_0 = function () {
    throw IllegalStateException_init('Primitives does not have elements');
  };
  PrimitiveDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return this.error_b6z6t6$_0();
  };
  PrimitiveDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.error_b6z6t6$_0();
  };
  PrimitiveDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.error_b6z6t6$_0();
  };
  PrimitiveDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.error_b6z6t6$_0();
  };
  PrimitiveDescriptor.prototype.toString = function () {
    return this.name;
  };
  PrimitiveDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'PrimitiveDescriptor', interfaces: [SerialDescriptor]};
  function IntDescriptor() {
    IntDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Int', PrimitiveKind$INT_getInstance());
  }
  IntDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'IntDescriptor', interfaces: [PrimitiveDescriptor]};
  var IntDescriptor_instance = null;
  function IntDescriptor_getInstance() {
    if (IntDescriptor_instance === null) {
      new IntDescriptor();
    }
    return IntDescriptor_instance;
  }
  function UnitDescriptor() {
    UnitDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Unit', PrimitiveKind$UNIT_getInstance());
  }
  UnitDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UnitDescriptor', interfaces: [PrimitiveDescriptor]};
  var UnitDescriptor_instance = null;
  function UnitDescriptor_getInstance() {
    if (UnitDescriptor_instance === null) {
      new UnitDescriptor();
    }
    return UnitDescriptor_instance;
  }
  function BooleanDescriptor() {
    BooleanDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Boolean', PrimitiveKind$BOOLEAN_getInstance());
  }
  BooleanDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BooleanDescriptor', interfaces: [PrimitiveDescriptor]};
  var BooleanDescriptor_instance = null;
  function BooleanDescriptor_getInstance() {
    if (BooleanDescriptor_instance === null) {
      new BooleanDescriptor();
    }
    return BooleanDescriptor_instance;
  }
  function ByteDescriptor() {
    ByteDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Byte', PrimitiveKind$BYTE_getInstance());
  }
  ByteDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ByteDescriptor', interfaces: [PrimitiveDescriptor]};
  var ByteDescriptor_instance = null;
  function ByteDescriptor_getInstance() {
    if (ByteDescriptor_instance === null) {
      new ByteDescriptor();
    }
    return ByteDescriptor_instance;
  }
  function ShortDescriptor() {
    ShortDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Short', PrimitiveKind$SHORT_getInstance());
  }
  ShortDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ShortDescriptor', interfaces: [PrimitiveDescriptor]};
  var ShortDescriptor_instance = null;
  function ShortDescriptor_getInstance() {
    if (ShortDescriptor_instance === null) {
      new ShortDescriptor();
    }
    return ShortDescriptor_instance;
  }
  function LongDescriptor() {
    LongDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Long', PrimitiveKind$LONG_getInstance());
  }
  LongDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'LongDescriptor', interfaces: [PrimitiveDescriptor]};
  var LongDescriptor_instance = null;
  function LongDescriptor_getInstance() {
    if (LongDescriptor_instance === null) {
      new LongDescriptor();
    }
    return LongDescriptor_instance;
  }
  function FloatDescriptor() {
    FloatDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Float', PrimitiveKind$FLOAT_getInstance());
  }
  FloatDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FloatDescriptor', interfaces: [PrimitiveDescriptor]};
  var FloatDescriptor_instance = null;
  function FloatDescriptor_getInstance() {
    if (FloatDescriptor_instance === null) {
      new FloatDescriptor();
    }
    return FloatDescriptor_instance;
  }
  function DoubleDescriptor() {
    DoubleDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Double', PrimitiveKind$DOUBLE_getInstance());
  }
  DoubleDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'DoubleDescriptor', interfaces: [PrimitiveDescriptor]};
  var DoubleDescriptor_instance = null;
  function DoubleDescriptor_getInstance() {
    if (DoubleDescriptor_instance === null) {
      new DoubleDescriptor();
    }
    return DoubleDescriptor_instance;
  }
  function CharDescriptor() {
    CharDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Char', PrimitiveKind$CHAR_getInstance());
  }
  CharDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CharDescriptor', interfaces: [PrimitiveDescriptor]};
  var CharDescriptor_instance = null;
  function CharDescriptor_getInstance() {
    if (CharDescriptor_instance === null) {
      new CharDescriptor();
    }
    return CharDescriptor_instance;
  }
  function StringDescriptor() {
    StringDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.String', PrimitiveKind$STRING_getInstance());
  }
  StringDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StringDescriptor', interfaces: [PrimitiveDescriptor]};
  var StringDescriptor_instance = null;
  function StringDescriptor_getInstance() {
    if (StringDescriptor_instance === null) {
      new StringDescriptor();
    }
    return StringDescriptor_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.descriptor_gvvi5t$_0 = UnitDescriptor_getInstance();
  }
  Object.defineProperty(UnitSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_gvvi5t$_0;
  }});
  UnitSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeUnit();
  };
  UnitSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    decoder.decodeUnit();
  };
  UnitSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UnitSerializer', interfaces: [KSerializer]};
  var UnitSerializer_instance = null;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance === null) {
      new UnitSerializer();
    }
    return UnitSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_vdtvaz$_0 = BooleanDescriptor_getInstance();
  }
  Object.defineProperty(BooleanSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_vdtvaz$_0;
  }});
  BooleanSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeBoolean_6taknv$(obj);
  };
  BooleanSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeBoolean();
  };
  BooleanSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BooleanSerializer', interfaces: [KSerializer]};
  var BooleanSerializer_instance = null;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance === null) {
      new BooleanSerializer();
    }
    return BooleanSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_f6vlf1$_0 = ByteDescriptor_getInstance();
  }
  Object.defineProperty(ByteSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_f6vlf1$_0;
  }});
  ByteSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeByte_s8j3t7$(obj);
  };
  ByteSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeByte();
  };
  ByteSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ByteSerializer', interfaces: [KSerializer]};
  var ByteSerializer_instance = null;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance === null) {
      new ByteSerializer();
    }
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_yvjeup$_0 = ShortDescriptor_getInstance();
  }
  Object.defineProperty(ShortSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_yvjeup$_0;
  }});
  ShortSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeShort_mq22fl$(obj);
  };
  ShortSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeShort();
  };
  ShortSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ShortSerializer', interfaces: [KSerializer]};
  var ShortSerializer_instance = null;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance === null) {
      new ShortSerializer();
    }
    return ShortSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_xrjflq$_0 = IntDescriptor_getInstance();
  }
  Object.defineProperty(IntSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_xrjflq$_0;
  }});
  IntSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeInt_za3lpa$(obj);
  };
  IntSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeInt();
  };
  IntSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'IntSerializer', interfaces: [KSerializer]};
  var IntSerializer_instance = null;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance === null) {
      new IntSerializer();
    }
    return IntSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_q4z687$_0 = LongDescriptor_getInstance();
  }
  Object.defineProperty(LongSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_q4z687$_0;
  }});
  LongSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeLong_s8cxhz$(obj);
  };
  LongSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeLong();
  };
  LongSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'LongSerializer', interfaces: [KSerializer]};
  var LongSerializer_instance = null;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance === null) {
      new LongSerializer();
    }
    return LongSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_7mw1sh$_0 = FloatDescriptor_getInstance();
  }
  Object.defineProperty(FloatSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_7mw1sh$_0;
  }});
  FloatSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeFloat_mx4ult$(obj);
  };
  FloatSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeFloat();
  };
  FloatSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FloatSerializer', interfaces: [KSerializer]};
  var FloatSerializer_instance = null;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance === null) {
      new FloatSerializer();
    }
    return FloatSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_2hn2sc$_0 = DoubleDescriptor_getInstance();
  }
  Object.defineProperty(DoubleSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_2hn2sc$_0;
  }});
  DoubleSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeDouble_14dthe$(obj);
  };
  DoubleSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeDouble();
  };
  DoubleSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'DoubleSerializer', interfaces: [KSerializer]};
  var DoubleSerializer_instance = null;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance === null) {
      new DoubleSerializer();
    }
    return DoubleSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_5mpy8x$_0 = CharDescriptor_getInstance();
  }
  Object.defineProperty(CharSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_5mpy8x$_0;
  }});
  CharSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeChar_s8itvh$(obj);
  };
  CharSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeChar();
  };
  CharSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CharSerializer', interfaces: [KSerializer]};
  var CharSerializer_instance = null;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance === null) {
      new CharSerializer();
    }
    return CharSerializer_instance;
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_sum718$_0 = StringDescriptor_getInstance();
  }
  Object.defineProperty(StringSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_sum718$_0;
  }});
  StringSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeString_61zpoe$(obj);
  };
  StringSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return decoder.decodeString();
  };
  StringSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StringSerializer', interfaces: [KSerializer]};
  var StringSerializer_instance = null;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance === null) {
      new StringSerializer();
    }
    return StringSerializer_instance;
  }
  function defaultSerializer($receiver) {
    var tmp$, tmp$_0;
    if (equals($receiver, PrimitiveClasses$stringClass))
      tmp$ = StringSerializer_getInstance();
    else if (equals($receiver, getKClass(Char)))
      tmp$ = CharSerializer_getInstance();
    else if (equals($receiver, PrimitiveClasses$doubleClass))
      tmp$ = DoubleSerializer_getInstance();
    else if (equals($receiver, PrimitiveClasses$floatClass))
      tmp$ = FloatSerializer_getInstance();
    else if (equals($receiver, getKClass(Long)))
      tmp$ = LongSerializer_getInstance();
    else if (equals($receiver, PrimitiveClasses$intClass))
      tmp$ = IntSerializer_getInstance();
    else if (equals($receiver, PrimitiveClasses$shortClass))
      tmp$ = ShortSerializer_getInstance();
    else if (equals($receiver, PrimitiveClasses$byteClass))
      tmp$ = ByteSerializer_getInstance();
    else if (equals($receiver, PrimitiveClasses$booleanClass))
      tmp$ = BooleanSerializer_getInstance();
    else if (equals($receiver, getKClass(Object.getPrototypeOf(kotlin.Unit).constructor)))
      tmp$ = UnitSerializer_getInstance();
    else
      tmp$ = null;
    return (tmp$_0 = tmp$) == null || Kotlin.isType(tmp$_0, KSerializer) ? tmp$_0 : throwCCE();
  }
  function SerialClassDescImpl(name, generatedSerializer) {
    if (generatedSerializer === void 0)
      generatedSerializer = null;
    this.name_l5inc6$_0 = name;
    this.generatedSerializer_1vyey6$_0 = generatedSerializer;
    this.names_gh1kah$_0 = ArrayList_init_0();
    this.annotations_4jiga3$_0 = ArrayList_init_0();
    this.classAnnotations_3clm9z$_0 = ArrayList_init_0();
    this.flags_k3kfa0$_0 = Kotlin.booleanArray(4);
    this.descriptors_ve6swl$_0 = ArrayList_init_0();
    this.indices_jm5tq0$_7drv5o$_0 = lazy(SerialClassDescImpl$indices$lambda(this));
  }
  Object.defineProperty(SerialClassDescImpl.prototype, 'name', {get: function () {
    return this.name_l5inc6$_0;
  }});
  Object.defineProperty(SerialClassDescImpl.prototype, 'kind', {get: function () {
    return StructureKind$CLASS_getInstance();
  }});
  Object.defineProperty(SerialClassDescImpl.prototype, 'elementsCount', {get: function () {
    return this.annotations_4jiga3$_0.size;
  }});
  Object.defineProperty(SerialClassDescImpl.prototype, 'indices_jm5tq0$_0', {get: function () {
    return this.indices_jm5tq0$_7drv5o$_0.value;
  }});
  SerialClassDescImpl.prototype.addElement_ivxn3r$ = function (name, isOptional) {
    if (isOptional === void 0)
      isOptional = false;
    this.names_gh1kah$_0.add_11rb$(name);
    var idx = this.names_gh1kah$_0.size - 1 | 0;
    this.ensureFlagsCapacity_qhtrim$_0(idx);
    this.flags_k3kfa0$_0[idx] = isOptional;
    this.annotations_4jiga3$_0.add_11rb$(ArrayList_init_0());
  };
  SerialClassDescImpl.prototype.pushAnnotation_yj921w$ = function (a) {
    last(this.annotations_4jiga3$_0).add_11rb$(a);
  };
  SerialClassDescImpl.prototype.pushClassAnnotation_yj921w$ = function (a) {
    this.classAnnotations_3clm9z$_0.add_11rb$(a);
  };
  SerialClassDescImpl.prototype.pushDescriptor_qatsm0$ = function (desc) {
    this.descriptors_ve6swl$_0.add_11rb$(desc);
  };
  SerialClassDescImpl.prototype.getElementDescriptor_za3lpa$ = function (index) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.generatedSerializer_1vyey6$_0) != null ? tmp$.childSerializers() : null) != null ? getOrNull(tmp$_0, index) : null) != null ? tmp$_1.descriptor : null) != null ? tmp$_2 : getOrNull_0(this.descriptors_ve6swl$_0, index);
    if (tmp$_3 == null) {
      throw new SerialClassDescImpl$MissingDescriptorException(index, this);
    }
    return tmp$_3;
  };
  SerialClassDescImpl.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.flags_k3kfa0$_0[index];
  };
  SerialClassDescImpl.prototype.getEntityAnnotations = function () {
    return this.classAnnotations_3clm9z$_0;
  };
  SerialClassDescImpl.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.annotations_4jiga3$_0.get_za3lpa$(index);
  };
  SerialClassDescImpl.prototype.getElementName_za3lpa$ = function (index) {
    return this.names_gh1kah$_0.get_za3lpa$(index);
  };
  SerialClassDescImpl.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.indices_jm5tq0$_0.get_11rb$(name)) != null ? tmp$ : -3;
  };
  SerialClassDescImpl.prototype.ensureFlagsCapacity_qhtrim$_0 = function (i) {
    if (this.flags_k3kfa0$_0.length <= i)
      this.flags_k3kfa0$_0 = copyOf_6(this.flags_k3kfa0$_0, this.flags_k3kfa0$_0.length * 2 | 0);
  };
  SerialClassDescImpl.prototype.buildIndices_585r2k$_0 = function () {
    var tmp$;
    var indices = HashMap_init();
    tmp$ = this.names_gh1kah$_0.size;
    for (var i = 0; i < tmp$; i++) {
      var key = this.names_gh1kah$_0.get_za3lpa$(i);
      indices.put_xwzc9p$(key, i);
    }
    return indices;
  };
  SerialClassDescImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, SerialClassDescImpl))
      return false;
    if (!equals(this.name, other.name))
      return false;
    if (!equals(elementDescriptors(this), elementDescriptors(other)))
      return false;
    return true;
  };
  SerialClassDescImpl.prototype.hashCode = function () {
    var result = hashCode(this.name);
    result = (31 * result | 0) + hashCode(elementDescriptors(this)) | 0;
    return result;
  };
  function SerialClassDescImpl$toString$lambda(this$SerialClassDescImpl) {
    return function (it) {
      return it.key + ': ' + this$SerialClassDescImpl.getElementDescriptor_za3lpa$(it.value).name;
    };
  }
  SerialClassDescImpl.prototype.toString = function () {
    return joinToString(this.indices_jm5tq0$_0.entries, ', ', this.name + '(', ')', void 0, void 0, SerialClassDescImpl$toString$lambda(this));
  };
  function SerialClassDescImpl$MissingDescriptorException(index, origin) {
    SerializationException.call(this, 'Element descriptor at index ' + index + ' has not been found in ' + origin.name);
    this.name = 'SerialClassDescImpl$MissingDescriptorException';
  }
  SerialClassDescImpl$MissingDescriptorException.$metadata$ = {kind: Kind_CLASS, simpleName: 'MissingDescriptorException', interfaces: [SerializationException]};
  function SerialClassDescImpl$indices$lambda(this$SerialClassDescImpl) {
    return function () {
      return this$SerialClassDescImpl.buildIndices_585r2k$_0();
    };
  }
  SerialClassDescImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerialClassDescImpl', interfaces: [SerialDescriptor]};
  var KEY_INDEX;
  var VALUE_INDEX;
  function KeyValueSerializer(kSerializer, vSerializer) {
    this.kSerializer = kSerializer;
    this.vSerializer = vSerializer;
  }
  KeyValueSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var encoder_0 = encoder.beginStructure_r0sa6z$(this.descriptor, [this.kSerializer, this.vSerializer]);
    encoder_0.encodeSerializableElement_blecud$(this.descriptor, 0, this.kSerializer, this.get_key_wili$(obj));
    encoder_0.encodeSerializableElement_blecud$(this.descriptor, 1, this.vSerializer, this.get_value_wili$(obj));
    encoder_0.endStructure_qatsm0$(this.descriptor);
  };
  KeyValueSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$, tmp$_0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, [this.kSerializer, this.vSerializer]);
    var kSet = false;
    var vSet = false;
    var k = null;
    var v = null;
    mainLoop: while (true) {
      switch (input.decodeElementIndex_qatsm0$(this.descriptor)) {
        case -2:
          k = this.readKey_ej6kb6$(input);
          kSet = true;
          v = this.readValue_gqyu7$(input, k, kSet);
          vSet = true;
          break mainLoop;
        case -1:
          break mainLoop;
        case 0:
          k = this.readKey_ej6kb6$(input);
          kSet = true;
          break;
        case 1:
          v = this.readValue_gqyu7$(input, k, kSet);
          vSet = true;
          break;
        default:throw new SerializationException('Invalid index');
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    if (!kSet)
      throw new SerializationException('Required key is missing');
    if (!vSet)
      throw new SerializationException('Required value is missing');
    return this.toResult_xwzc9p$((tmp$ = k) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = v) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  KeyValueSerializer.prototype.readKey_ej6kb6$ = function (decoder) {
    return decoder.decodeSerializableElement_s44l7r$(this.descriptor, 0, this.kSerializer);
  };
  KeyValueSerializer.prototype.readValue_gqyu7$ = function (decoder, k, kSet) {
    return decoder.decodeSerializableElement_s44l7r$(this.descriptor, 1, this.vSerializer);
  };
  KeyValueSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'KeyValueSerializer', interfaces: [KSerializer]};
  function MapEntrySerializer(kSerializer, vSerializer) {
    KeyValueSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_cnmk75$_0 = MapEntryClassDesc_getInstance();
  }
  Object.defineProperty(MapEntrySerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_cnmk75$_0;
  }});
  MapEntrySerializer.prototype.toResult_xwzc9p$ = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer.prototype.get_key_wili$ = function ($receiver) {
    return $receiver.key;
  };
  MapEntrySerializer.prototype.get_value_wili$ = function ($receiver) {
    return $receiver.value;
  };
  MapEntrySerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'MapEntrySerializer', interfaces: [KeyValueSerializer]};
  function MapEntry(key, value) {
    this.key_qf615j$_0 = key;
    this.value_x17797$_0 = value;
  }
  Object.defineProperty(MapEntry.prototype, 'key', {get: function () {
    return this.key_qf615j$_0;
  }});
  Object.defineProperty(MapEntry.prototype, 'value', {get: function () {
    return this.value_x17797$_0;
  }});
  MapEntry.$metadata$ = {kind: Kind_CLASS, simpleName: 'MapEntry', interfaces: [Map$Entry]};
  MapEntry.prototype.component1 = function () {
    return this.key;
  };
  MapEntry.prototype.component2 = function () {
    return this.value;
  };
  MapEntry.prototype.copy_xwzc9p$ = function (key, value) {
    return new MapEntry(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  function MapEntryClassDesc() {
    MapEntryClassDesc_instance = this;
    SerialClassDescImpl.call(this, 'kotlin.collections.Map.Entry');
    this.kind_6o02kx$_0 = StructureKind$MAP_getInstance();
    this.addElement_ivxn3r$('key');
    this.addElement_ivxn3r$('value');
  }
  Object.defineProperty(MapEntryClassDesc.prototype, 'kind', {get: function () {
    return this.kind_6o02kx$_0;
  }});
  MapEntryClassDesc.$metadata$ = {kind: Kind_OBJECT, simpleName: 'MapEntryClassDesc', interfaces: [SerialClassDescImpl]};
  var MapEntryClassDesc_instance = null;
  function MapEntryClassDesc_getInstance() {
    if (MapEntryClassDesc_instance === null) {
      new MapEntryClassDesc();
    }
    return MapEntryClassDesc_instance;
  }
  var PairClassDesc_instance = null;
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    this.aSerializer_0 = aSerializer;
    this.bSerializer_0 = bSerializer;
    this.cSerializer_0 = cSerializer;
    this.descriptor_73a6vr$_0 = TripleSerializer$TripleDesc_getInstance();
  }
  var TripleSerializer$TripleDesc_instance = null;
  var HexConverter_instance = null;
  function Json(configuration, context) {
    Json$Companion_getInstance();
    if (configuration === void 0)
      configuration = JsonConfiguration$Companion_getInstance().Stable;
    if (context === void 0)
      context = EmptyModule_getInstance();
    AbstractSerialFormat.call(this, plus(context, defaultJsonModule));
    this.configuration_8be2vx$ = configuration;
  }
  Json.prototype.stringify_tf03ej$ = function (serializer, obj) {
    var result = StringBuilder_init_0();
    var encoder = StreamingJsonOutput_init(result, this, WriteMode$OBJ_getInstance(), Kotlin.newArray(WriteMode$values().length, null));
    encode_0(encoder, serializer, obj);
    return result.toString();
  };
  Json.prototype.toJson_tf03ej$ = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  Json.prototype.toJson_issdgt$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.json.Json.toJson_issdgt$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var getContextualOrDefault = _.kotlinx.serialization.modules.getContextualOrDefault_6za9kt$;
    return function (T_0, isT, value) {
      return this.toJson_tf03ej$(getContextualOrDefault(this.context, getKClass(T_0)), value);
    };
  }));
  Json.prototype.parse_awif5v$ = function (deserializer, string) {
    var reader = new JsonReader(string);
    var input = new StreamingJsonInput(this, WriteMode$OBJ_getInstance(), reader);
    var result = decode_0(input, deserializer);
    if (!reader.isDone) {
      throw IllegalStateException_init(('Reader has not consumed the whole input: ' + reader).toString());
    }
    return result;
  };
  Json.prototype.parseJson_61zpoe$ = function (string) {
    return this.parse_awif5v$(JsonElementSerializer_getInstance(), string);
  };
  Json.prototype.fromJson_htt2tq$ = function (deserializer, json) {
    return readJson(this, json, deserializer);
  };
  Json.prototype.fromJson_65rf1y$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.json.Json.fromJson_65rf1y$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var getContextualOrDefault = _.kotlinx.serialization.modules.getContextualOrDefault_6za9kt$;
    return function (T_0, isT, tree) {
      return this.fromJson_htt2tq$(getContextualOrDefault(this.context, getKClass(T_0)), tree);
    };
  }));
  function Json$Companion() {
    Json$Companion_instance = this;
    this.plain = new Json(new JsonConfiguration(void 0, void 0, void 0, void 0, void 0, void 0, true));
    this.unquoted = new Json(new JsonConfiguration(void 0, void 0, true, void 0, void 0, void 0, true));
    this.indented = new Json(new JsonConfiguration(void 0, void 0, void 0, void 0, true, void 0, true));
    this.nonstrict = new Json(new JsonConfiguration(void 0, false, void 0, void 0, void 0, void 0, true));
  }
  Json$Companion.prototype.install_stpyu4$ = function (module_0) {
    throw IllegalStateException_init('You should not install anything to global instance');
  };
  Object.defineProperty(Json$Companion.prototype, 'context', {get: function () {
    return this.plain.context;
  }});
  Json$Companion.prototype.stringify_tf03ej$ = function (serializer, obj) {
    return this.plain.stringify_tf03ej$(serializer, obj);
  };
  Json$Companion.prototype.parse_awif5v$ = function (deserializer, string) {
    return this.plain.parse_awif5v$(deserializer, string);
  };
  Json$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [StringFormat]};
  var Json$Companion_instance = null;
  function Json$Companion_getInstance() {
    if (Json$Companion_instance === null) {
      new Json$Companion();
    }
    return Json$Companion_instance;
  }
  Json.$metadata$ = {kind: Kind_CLASS, simpleName: 'Json', interfaces: [StringFormat, AbstractSerialFormat]};
  var defaultJsonModule;
  function JsonConfiguration(encodeDefaults, strictMode, unquoted, allowStructuredMapKeys, prettyPrint, indent, useArrayPolymorphism, classDiscriminator, updateMode) {
    JsonConfiguration$Companion_getInstance();
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    if (strictMode === void 0)
      strictMode = true;
    if (unquoted === void 0)
      unquoted = false;
    if (allowStructuredMapKeys === void 0)
      allowStructuredMapKeys = false;
    if (prettyPrint === void 0)
      prettyPrint = false;
    if (indent === void 0)
      indent = JsonConfiguration$Companion_getInstance().defaultIndent_0;
    if (useArrayPolymorphism === void 0)
      useArrayPolymorphism = false;
    if (classDiscriminator === void 0)
      classDiscriminator = JsonConfiguration$Companion_getInstance().defaultDiscriminator_0;
    if (updateMode === void 0)
      updateMode = UpdateMode$OVERWRITE_getInstance();
    this.encodeDefaults_8be2vx$ = encodeDefaults;
    this.strictMode_8be2vx$ = strictMode;
    this.unquoted_8be2vx$ = unquoted;
    this.allowStructuredMapKeys_8be2vx$ = allowStructuredMapKeys;
    this.prettyPrint_8be2vx$ = prettyPrint;
    this.indent_8be2vx$ = indent;
    this.useArrayPolymorphism_8be2vx$ = useArrayPolymorphism;
    this.classDiscriminator_8be2vx$ = classDiscriminator;
    this.updateMode_8be2vx$ = updateMode;
    if (this.useArrayPolymorphism_8be2vx$) {
      if (!equals(this.classDiscriminator_8be2vx$, JsonConfiguration$Companion_getInstance().defaultDiscriminator_0)) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init(message.toString());
      }
    }
    if (!this.prettyPrint_8be2vx$) {
      if (!equals(this.indent_8be2vx$, JsonConfiguration$Companion_getInstance().defaultIndent_0)) {
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init(message_0.toString());
      }
    }
  }
  function JsonConfiguration$Companion() {
    JsonConfiguration$Companion_instance = this;
    this.defaultIndent_0 = '    ';
    this.defaultDiscriminator_0 = 'type';
    this.Default = new JsonConfiguration();
    this.Stable = new JsonConfiguration(true, true, false, true, false, this.defaultIndent_0, false, this.defaultDiscriminator_0);
  }
  JsonConfiguration$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var JsonConfiguration$Companion_instance = null;
  function JsonConfiguration$Companion_getInstance() {
    if (JsonConfiguration$Companion_instance === null) {
      new JsonConfiguration$Companion();
    }
    return JsonConfiguration$Companion_instance;
  }
  JsonConfiguration.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonConfiguration', interfaces: []};
  JsonConfiguration.prototype.component1_8be2vx$ = function () {
    return this.encodeDefaults_8be2vx$;
  };
  JsonConfiguration.prototype.component2_8be2vx$ = function () {
    return this.strictMode_8be2vx$;
  };
  JsonConfiguration.prototype.component3_8be2vx$ = function () {
    return this.unquoted_8be2vx$;
  };
  JsonConfiguration.prototype.component4_8be2vx$ = function () {
    return this.allowStructuredMapKeys_8be2vx$;
  };
  JsonConfiguration.prototype.component5_8be2vx$ = function () {
    return this.prettyPrint_8be2vx$;
  };
  JsonConfiguration.prototype.component6_8be2vx$ = function () {
    return this.indent_8be2vx$;
  };
  JsonConfiguration.prototype.component7_8be2vx$ = function () {
    return this.useArrayPolymorphism_8be2vx$;
  };
  JsonConfiguration.prototype.component8_8be2vx$ = function () {
    return this.classDiscriminator_8be2vx$;
  };
  JsonConfiguration.prototype.component9_8be2vx$ = function () {
    return this.updateMode_8be2vx$;
  };
  JsonConfiguration.prototype.copy_u5l5z3$ = function (encodeDefaults, strictMode, unquoted, allowStructuredMapKeys, prettyPrint, indent, useArrayPolymorphism, classDiscriminator, updateMode) {
    return new JsonConfiguration(encodeDefaults === void 0 ? this.encodeDefaults_8be2vx$ : encodeDefaults, strictMode === void 0 ? this.strictMode_8be2vx$ : strictMode, unquoted === void 0 ? this.unquoted_8be2vx$ : unquoted, allowStructuredMapKeys === void 0 ? this.allowStructuredMapKeys_8be2vx$ : allowStructuredMapKeys, prettyPrint === void 0 ? this.prettyPrint_8be2vx$ : prettyPrint, indent === void 0 ? this.indent_8be2vx$ : indent, useArrayPolymorphism === void 0 ? this.useArrayPolymorphism_8be2vx$ : useArrayPolymorphism, classDiscriminator === void 0 ? this.classDiscriminator_8be2vx$ : classDiscriminator, updateMode === void 0 ? this.updateMode_8be2vx$ : updateMode);
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + Kotlin.toString(this.encodeDefaults_8be2vx$) + (', strictMode=' + Kotlin.toString(this.strictMode_8be2vx$)) + (', unquoted=' + Kotlin.toString(this.unquoted_8be2vx$)) + (', allowStructuredMapKeys=' + Kotlin.toString(this.allowStructuredMapKeys_8be2vx$)) + (', prettyPrint=' + Kotlin.toString(this.prettyPrint_8be2vx$)) + (', indent=' + Kotlin.toString(this.indent_8be2vx$)) + (', useArrayPolymorphism=' + Kotlin.toString(this.useArrayPolymorphism_8be2vx$)) + (', classDiscriminator=' + Kotlin.toString(this.classDiscriminator_8be2vx$)) + (', updateMode=' + Kotlin.toString(this.updateMode_8be2vx$)) + ')';
  };
  JsonConfiguration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.encodeDefaults_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.strictMode_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.unquoted_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.allowStructuredMapKeys_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.prettyPrint_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.indent_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.useArrayPolymorphism_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.classDiscriminator_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.updateMode_8be2vx$) | 0;
    return result;
  };
  JsonConfiguration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.encodeDefaults_8be2vx$, other.encodeDefaults_8be2vx$) && Kotlin.equals(this.strictMode_8be2vx$, other.strictMode_8be2vx$) && Kotlin.equals(this.unquoted_8be2vx$, other.unquoted_8be2vx$) && Kotlin.equals(this.allowStructuredMapKeys_8be2vx$, other.allowStructuredMapKeys_8be2vx$) && Kotlin.equals(this.prettyPrint_8be2vx$, other.prettyPrint_8be2vx$) && Kotlin.equals(this.indent_8be2vx$, other.indent_8be2vx$) && Kotlin.equals(this.useArrayPolymorphism_8be2vx$, other.useArrayPolymorphism_8be2vx$) && Kotlin.equals(this.classDiscriminator_8be2vx$, other.classDiscriminator_8be2vx$) && Kotlin.equals(this.updateMode_8be2vx$, other.updateMode_8be2vx$)))));
  };
  function JsonElement() {
    JsonElement$Companion_getInstance();
  }
  Object.defineProperty(JsonElement.prototype, 'primitive', {get: function () {
    return this.error_azfyan$_0('JsonLiteral');
  }});
  Object.defineProperty(JsonElement.prototype, 'jsonObject', {get: function () {
    return this.error_azfyan$_0('JsonObject');
  }});
  Object.defineProperty(JsonElement.prototype, 'jsonArray', {get: function () {
    return this.error_azfyan$_0('JsonArray');
  }});
  Object.defineProperty(JsonElement.prototype, 'jsonNull', {get: function () {
    return this.error_azfyan$_0('JsonPrimitive');
  }});
  Object.defineProperty(JsonElement.prototype, 'isNull', {get: function () {
    return this === JsonNull_getInstance();
  }});
  JsonElement.prototype.error_azfyan$_0 = function (element) {
    throw new JsonException('Element ' + Kotlin.getKClassFromExpression(this) + ' is not a ' + element);
  };
  function JsonElement$Companion() {
    JsonElement$Companion_instance = this;
  }
  JsonElement$Companion.prototype.serializer = function () {
    return JsonElementSerializer_getInstance();
  };
  JsonElement$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var JsonElement$Companion_instance = null;
  function JsonElement$Companion_getInstance() {
    if (JsonElement$Companion_instance === null) {
      new JsonElement$Companion();
    }
    return JsonElement$Companion_instance;
  }
  JsonElement.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonElement', interfaces: []};
  function JsonPrimitive() {
    JsonPrimitive$Companion_getInstance();
    JsonElement.call(this);
    this.primitive_awfpe5$_0 = this;
  }
  Object.defineProperty(JsonPrimitive.prototype, 'primitive', {get: function () {
    return this.primitive_awfpe5$_0;
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'int', {get: function () {
    return toInt(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'intOrNull', {get: function () {
    return toIntOrNull(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'long', {get: function () {
    return toLong(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'longOrNull', {get: function () {
    return toLongOrNull(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'double', {get: function () {
    return toDouble(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'doubleOrNull', {get: function () {
    return toDoubleOrNull(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'float', {get: function () {
    return toDouble(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'floatOrNull', {get: function () {
    return toDoubleOrNull(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'boolean', {get: function () {
    return toBooleanStrict(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'booleanOrNull', {get: function () {
    return toBooleanStrictOrNull(this.content);
  }});
  JsonPrimitive.prototype.toString = function () {
    return this.content;
  };
  function JsonPrimitive$Companion() {
    JsonPrimitive$Companion_instance = this;
  }
  JsonPrimitive$Companion.prototype.serializer = function () {
    return JsonPrimitiveSerializer_getInstance();
  };
  JsonPrimitive$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var JsonPrimitive$Companion_instance = null;
  function JsonPrimitive$Companion_getInstance() {
    if (JsonPrimitive$Companion_instance === null) {
      new JsonPrimitive$Companion();
    }
    return JsonPrimitive$Companion_instance;
  }
  JsonPrimitive.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonPrimitive', interfaces: [JsonElement]};
  function JsonLiteral(body, isString) {
    JsonLiteral$Companion_getInstance();
    JsonPrimitive.call(this);
    this.body = body;
    this.isString = isString;
    this.content_prrjtz$_0 = this.body.toString();
    this.contentOrNull_mx86gf$_0 = this.content;
  }
  Object.defineProperty(JsonLiteral.prototype, 'content', {get: function () {
    return this.content_prrjtz$_0;
  }});
  Object.defineProperty(JsonLiteral.prototype, 'contentOrNull', {get: function () {
    return this.contentOrNull_mx86gf$_0;
  }});
  JsonLiteral.prototype.toString = function () {
    var tmp$;
    if (this.isString) {
      var $receiver = StringBuilder_init_0();
      printQuoted($receiver, this.content);
      tmp$ = $receiver.toString();
    }
     else
      tmp$ = this.content;
    return tmp$;
  };
  JsonLiteral.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, JsonLiteral) ? tmp$_0 : throwCCE();
    if (this.isString !== other.isString)
      return false;
    if (!equals(this.content, other.content))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = hashCode(this.isString);
    result = (31 * result | 0) + hashCode(this.content) | 0;
    return result;
  };
  function JsonLiteral$Companion() {
    JsonLiteral$Companion_instance = this;
  }
  JsonLiteral$Companion.prototype.serializer = function () {
    return JsonLiteralSerializer_getInstance();
  };
  JsonLiteral$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var JsonLiteral$Companion_instance = null;
  function JsonLiteral$Companion_getInstance() {
    if (JsonLiteral$Companion_instance === null) {
      new JsonLiteral$Companion();
    }
    return JsonLiteral$Companion_instance;
  }
  JsonLiteral.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonLiteral', interfaces: [JsonPrimitive]};
  function JsonLiteral_init(number, $this) {
    $this = $this || Object.create(JsonLiteral.prototype);
    JsonLiteral.call($this, number, false);
    return $this;
  }
  function JsonLiteral_init_0(boolean, $this) {
    $this = $this || Object.create(JsonLiteral.prototype);
    JsonLiteral.call($this, boolean, false);
    return $this;
  }
  function JsonLiteral_init_1(string, $this) {
    $this = $this || Object.create(JsonLiteral.prototype);
    JsonLiteral.call($this, string, true);
    return $this;
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.jsonNull_c8yjib$_0 = this;
    this.content_w1vkof$_0 = 'null';
    this.contentOrNull_egvcud$_0 = null;
  }
  Object.defineProperty(JsonNull.prototype, 'jsonNull', {get: function () {
    return this.jsonNull_c8yjib$_0;
  }});
  Object.defineProperty(JsonNull.prototype, 'content', {get: function () {
    return this.content_w1vkof$_0;
  }});
  Object.defineProperty(JsonNull.prototype, 'contentOrNull', {get: function () {
    return this.contentOrNull_egvcud$_0;
  }});
  JsonNull.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonNull', interfaces: [JsonPrimitive]};
  var JsonNull_instance = null;
  function JsonNull_getInstance() {
    if (JsonNull_instance === null) {
      new JsonNull();
    }
    return JsonNull_instance;
  }
  function JsonObject(content) {
    JsonObject$Companion_getInstance();
    JsonElement.call(this);
    this.content = content;
    this.jsonObject_js4yrn$_0 = this;
  }
  Object.defineProperty(JsonObject.prototype, 'jsonObject', {get: function () {
    return this.jsonObject_js4yrn$_0;
  }});
  JsonObject.prototype.getPrimitive_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = getValue(this, key), JsonPrimitive) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, 'JsonPrimitive');
  };
  JsonObject.prototype.getObject_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = getValue(this, key), JsonObject) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, 'JsonObject');
  };
  JsonObject.prototype.getArray_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = getValue(this, key), JsonArray) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, 'JsonArray');
  };
  JsonObject.prototype.getPrimitiveOrNull_61zpoe$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.content.get_11rb$(key), JsonPrimitive) ? tmp$ : null;
  };
  JsonObject.prototype.getObjectOrNull_61zpoe$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.content.get_11rb$(key), JsonObject) ? tmp$ : null;
  };
  JsonObject.prototype.getArrayOrNull_61zpoe$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.content.get_11rb$(key), JsonArray) ? tmp$ : null;
  };
  JsonObject.prototype.getAs_j069p3$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.json.JsonObject.getAs_j069p3$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var unexpectedJson = _.kotlinx.serialization.json.unexpectedJson_puj7f4$;
    return function (J_0, isJ, key) {
      var tmp$, tmp$_0;
      return (tmp$_0 = isJ(tmp$ = this.get_11rb$(key)) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, getKClass(J_0).toString());
    };
  }));
  JsonObject.prototype.getAsOrNull_j069p3$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.json.JsonObject.getAsOrNull_j069p3$', function (J_0, isJ, key) {
    var tmp$;
    return isJ(tmp$ = this.content.get_11rb$(key)) ? tmp$ : null;
  });
  function JsonObject$toString$lambda(f) {
    var k = f.key;
    var v = f.value;
    return '"' + k + '"' + ':' + v;
  }
  JsonObject.prototype.toString = function () {
    return joinToString(this.content.entries, ',', '{', '}', void 0, void 0, JsonObject$toString$lambda);
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.content, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.content);
  };
  function JsonObject$Companion() {
    JsonObject$Companion_instance = this;
  }
  JsonObject$Companion.prototype.serializer = function () {
    return JsonObjectSerializer_getInstance();
  };
  JsonObject$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var JsonObject$Companion_instance = null;
  function JsonObject$Companion_getInstance() {
    if (JsonObject$Companion_instance === null) {
      new JsonObject$Companion();
    }
    return JsonObject$Companion_instance;
  }
  Object.defineProperty(JsonObject.prototype, 'entries', {get: function () {
    return this.content.entries;
  }});
  Object.defineProperty(JsonObject.prototype, 'keys', {get: function () {
    return this.content.keys;
  }});
  Object.defineProperty(JsonObject.prototype, 'size', {get: function () {
    return this.content.size;
  }});
  Object.defineProperty(JsonObject.prototype, 'values', {get: function () {
    return this.content.values;
  }});
  JsonObject.prototype.containsKey_11rb$ = function (key) {
    return this.content.containsKey_11rb$(key);
  };
  JsonObject.prototype.containsValue_11rc$ = function (value) {
    return this.content.containsValue_11rc$(value);
  };
  JsonObject.prototype.get_11rb$ = function (key) {
    return this.content.get_11rb$(key);
  };
  JsonObject.prototype.isEmpty = function () {
    return this.content.isEmpty();
  };
  JsonObject.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonObject', interfaces: [Map, JsonElement]};
  JsonObject.prototype.component1 = function () {
    return this.content;
  };
  JsonObject.prototype.copy_fnd918$ = function (content) {
    return new JsonObject(content === void 0 ? this.content : content);
  };
  function JsonArray(content) {
    JsonArray$Companion_getInstance();
    JsonElement.call(this);
    this.content = content;
    this.jsonArray_u1gsrt$_0 = this;
  }
  Object.defineProperty(JsonArray.prototype, 'jsonArray', {get: function () {
    return this.jsonArray_u1gsrt$_0;
  }});
  JsonArray.prototype.getPrimitive_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.content.get_za3lpa$(index), JsonPrimitive) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, 'JsonPrimitive');
  };
  JsonArray.prototype.getObject_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.content.get_za3lpa$(index), JsonObject) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, 'JsonObject');
  };
  JsonArray.prototype.getArray_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.content.get_za3lpa$(index), JsonArray) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, 'JsonArray');
  };
  JsonArray.prototype.getPrimitiveOrNull_za3lpa$ = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = getOrNull_0(this.content, index), JsonPrimitive) ? tmp$ : null;
  };
  JsonArray.prototype.getObjectOrNull_za3lpa$ = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = getOrNull_0(this.content, index), JsonObject) ? tmp$ : null;
  };
  JsonArray.prototype.getArrayOrNull_za3lpa$ = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = getOrNull_0(this.content, index), JsonArray) ? tmp$ : null;
  };
  JsonArray.prototype.getAs_n86q5$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.json.JsonArray.getAs_n86q5$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var unexpectedJson = _.kotlinx.serialization.json.unexpectedJson_puj7f4$;
    return function (J_0, isJ, index) {
      var tmp$, tmp$_0;
      return (tmp$_0 = isJ(tmp$ = this.content.get_za3lpa$(index)) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, getKClass(J_0).toString());
    };
  }));
  JsonArray.prototype.getAsOrNull_n86q5$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.json.JsonArray.getAsOrNull_n86q5$', wrapFunction(function () {
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    return function (J_0, isJ, index) {
      var tmp$;
      return isJ(tmp$ = getOrNull(this.content, index)) ? tmp$ : null;
    };
  }));
  JsonArray.prototype.toString = function () {
    return joinToString(this.content, ',', '[', ']');
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.content, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.content);
  };
  function JsonArray$Companion() {
    JsonArray$Companion_instance = this;
  }
  JsonArray$Companion.prototype.serializer = function () {
    return JsonArraySerializer_getInstance();
  };
  JsonArray$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var JsonArray$Companion_instance = null;
  function JsonArray$Companion_getInstance() {
    if (JsonArray$Companion_instance === null) {
      new JsonArray$Companion();
    }
    return JsonArray$Companion_instance;
  }
  Object.defineProperty(JsonArray.prototype, 'size', {get: function () {
    return this.content.size;
  }});
  JsonArray.prototype.contains_11rb$ = function (element) {
    return this.content.contains_11rb$(element);
  };
  JsonArray.prototype.containsAll_brywnq$ = function (elements) {
    return this.content.containsAll_brywnq$(elements);
  };
  JsonArray.prototype.get_za3lpa$ = function (index) {
    return this.content.get_za3lpa$(index);
  };
  JsonArray.prototype.indexOf_11rb$ = function (element) {
    return this.content.indexOf_11rb$(element);
  };
  JsonArray.prototype.isEmpty = function () {
    return this.content.isEmpty();
  };
  JsonArray.prototype.iterator = function () {
    return this.content.iterator();
  };
  JsonArray.prototype.lastIndexOf_11rb$ = function (element) {
    return this.content.lastIndexOf_11rb$(element);
  };
  JsonArray.prototype.listIterator = function () {
    return this.content.listIterator();
  };
  JsonArray.prototype.listIterator_za3lpa$ = function (index) {
    return this.content.listIterator_za3lpa$(index);
  };
  JsonArray.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.content.subList_vux9f0$(fromIndex, toIndex);
  };
  JsonArray.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonArray', interfaces: [List, JsonElement]};
  JsonArray.prototype.component1 = function () {
    return this.content;
  };
  JsonArray.prototype.copy_adp4jc$ = function (content) {
    return new JsonArray(content === void 0 ? this.content : content);
  };
  function unexpectedJson(key, expected) {
    throw new JsonException('Element ' + key + ' is not a ' + expected);
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    this.descriptor_u8kpse$_0 = new JsonElementSerializer$descriptor$ObjectLiteral('JsonElementSerializer');
  }
  Object.defineProperty(JsonElementSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_u8kpse$_0;
  }});
  JsonElementSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    verify(encoder);
    if (Kotlin.isType(obj, JsonPrimitive))
      encoder.encodeSerializableValue_tf03ej$(JsonPrimitiveSerializer_getInstance(), obj);
    else if (Kotlin.isType(obj, JsonObject))
      encoder.encodeSerializableValue_tf03ej$(JsonObjectSerializer_getInstance(), obj);
    else if (Kotlin.isType(obj, JsonArray))
      encoder.encodeSerializableValue_tf03ej$(JsonArraySerializer_getInstance(), obj);
  };
  JsonElementSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var tmp$;
    verify_0(decoder);
    var input = Kotlin.isType(tmp$ = decoder, JsonInput) ? tmp$ : throwCCE();
    return input.decodeJson();
  };
  function JsonElementSerializer$descriptor$ObjectLiteral(name, generatedSerializer) {
    SerialClassDescImpl.call(this, name, generatedSerializer);
  }
  Object.defineProperty(JsonElementSerializer$descriptor$ObjectLiteral.prototype, 'kind', {get: function () {
    return PolymorphicKind$SEALED_getInstance();
  }});
  JsonElementSerializer$descriptor$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SerialClassDescImpl]};
  JsonElementSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonElementSerializer', interfaces: [KSerializer]};
  var JsonElementSerializer_instance = null;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance === null) {
      new JsonElementSerializer();
    }
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
  }
  Object.defineProperty(JsonPrimitiveSerializer.prototype, 'descriptor', {get: function () {
    return JsonPrimitiveSerializer$JsonPrimitiveDescriptor_getInstance();
  }});
  JsonPrimitiveSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$, tmp$_0;
    verify(encoder);
    if (Kotlin.isType(obj, JsonNull)) {
      tmp$_0 = encoder.encodeSerializableValue_tf03ej$(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    }
     else {
      tmp$_0 = encoder.encodeSerializableValue_tf03ej$(JsonLiteralSerializer_getInstance(), Kotlin.isType(tmp$ = obj, JsonLiteral) ? tmp$ : throwCCE());
    }
    return tmp$_0;
  };
  JsonPrimitiveSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    verify_0(decoder);
    return decoder.decodeNotNullMark() ? JsonPrimitive_2(decoder.decodeString()) : decoder.decodeSerializableValue_w63s0f$(JsonNullSerializer_getInstance());
  };
  function JsonPrimitiveSerializer$JsonPrimitiveDescriptor() {
    JsonPrimitiveSerializer$JsonPrimitiveDescriptor_instance = this;
    SerialClassDescImpl.call(this, 'JsonPrimitive');
  }
  Object.defineProperty(JsonPrimitiveSerializer$JsonPrimitiveDescriptor.prototype, 'kind', {get: function () {
    return PrimitiveKind$STRING_getInstance();
  }});
  JsonPrimitiveSerializer$JsonPrimitiveDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonPrimitiveDescriptor', interfaces: [SerialClassDescImpl]};
  var JsonPrimitiveSerializer$JsonPrimitiveDescriptor_instance = null;
  function JsonPrimitiveSerializer$JsonPrimitiveDescriptor_getInstance() {
    if (JsonPrimitiveSerializer$JsonPrimitiveDescriptor_instance === null) {
      new JsonPrimitiveSerializer$JsonPrimitiveDescriptor();
    }
    return JsonPrimitiveSerializer$JsonPrimitiveDescriptor_instance;
  }
  JsonPrimitiveSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonPrimitiveSerializer', interfaces: [KSerializer]};
  var JsonPrimitiveSerializer_instance = null;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance === null) {
      new JsonPrimitiveSerializer();
    }
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
  }
  Object.defineProperty(JsonNullSerializer.prototype, 'descriptor', {get: function () {
    return JsonNullSerializer$JsonNullDescriptor_getInstance();
  }});
  JsonNullSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    verify(encoder);
    encoder.encodeNull();
  };
  JsonNullSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    verify_0(decoder);
    decoder.decodeNull();
    return JsonNull_getInstance();
  };
  function JsonNullSerializer$JsonNullDescriptor() {
    JsonNullSerializer$JsonNullDescriptor_instance = this;
    SerialClassDescImpl.call(this, 'JsonNull');
  }
  Object.defineProperty(JsonNullSerializer$JsonNullDescriptor.prototype, 'kind', {get: function () {
    return UnionKind$ENUM_KIND_getInstance();
  }});
  JsonNullSerializer$JsonNullDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonNullDescriptor', interfaces: [SerialClassDescImpl]};
  var JsonNullSerializer$JsonNullDescriptor_instance = null;
  function JsonNullSerializer$JsonNullDescriptor_getInstance() {
    if (JsonNullSerializer$JsonNullDescriptor_instance === null) {
      new JsonNullSerializer$JsonNullDescriptor();
    }
    return JsonNullSerializer$JsonNullDescriptor_instance;
  }
  JsonNullSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonNullSerializer', interfaces: [KSerializer]};
  var JsonNullSerializer_instance = null;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance === null) {
      new JsonNullSerializer();
    }
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
  }
  Object.defineProperty(JsonLiteralSerializer.prototype, 'descriptor', {get: function () {
    return JsonLiteralSerializer$JsonLiteralDescriptor_getInstance();
  }});
  JsonLiteralSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    verify(encoder);
    if (obj.isString) {
      return encoder.encodeString_61zpoe$(obj.content);
    }
    var long = obj.longOrNull;
    if (long != null) {
      return encoder.encodeLong_s8cxhz$(long);
    }
    var double = obj.doubleOrNull;
    if (double != null) {
      return encoder.encodeDouble_14dthe$(double);
    }
    var boolean = obj.booleanOrNull;
    if (boolean != null) {
      return encoder.encodeBoolean_6taknv$(boolean);
    }
    encoder.encodeString_61zpoe$(obj.content);
  };
  JsonLiteralSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    verify_0(decoder);
    return JsonLiteral_init_1(decoder.decodeString());
  };
  function JsonLiteralSerializer$JsonLiteralDescriptor() {
    JsonLiteralSerializer$JsonLiteralDescriptor_instance = this;
    SerialClassDescImpl.call(this, 'JsonLiteral');
  }
  Object.defineProperty(JsonLiteralSerializer$JsonLiteralDescriptor.prototype, 'kind', {get: function () {
    return PrimitiveKind$STRING_getInstance();
  }});
  JsonLiteralSerializer$JsonLiteralDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonLiteralDescriptor', interfaces: [SerialClassDescImpl]};
  var JsonLiteralSerializer$JsonLiteralDescriptor_instance = null;
  function JsonLiteralSerializer$JsonLiteralDescriptor_getInstance() {
    if (JsonLiteralSerializer$JsonLiteralDescriptor_instance === null) {
      new JsonLiteralSerializer$JsonLiteralDescriptor();
    }
    return JsonLiteralSerializer$JsonLiteralDescriptor_instance;
  }
  JsonLiteralSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonLiteralSerializer', interfaces: [KSerializer]};
  var JsonLiteralSerializer_instance = null;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance === null) {
      new JsonLiteralSerializer();
    }
    return JsonLiteralSerializer_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.descriptor_a992tj$_0 = new NamedMapClassDescriptor('JsonObject', StringSerializer_getInstance().descriptor, JsonElementSerializer_getInstance().descriptor);
  }
  Object.defineProperty(JsonObjectSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_a992tj$_0;
  }});
  JsonObjectSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    verify(encoder);
    (new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance())).serialize_awe97i$(encoder, obj.content);
  };
  JsonObjectSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    verify_0(decoder);
    return new JsonObject((new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance())).deserialize_nts5qn$(decoder));
  };
  JsonObjectSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonObjectSerializer', interfaces: [KSerializer]};
  var JsonObjectSerializer_instance = null;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance === null) {
      new JsonObjectSerializer();
    }
    return JsonObjectSerializer_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.descriptor_935ivj$_0 = new NamedListClassDescriptor('JsonArray', JsonElementSerializer_getInstance().descriptor);
  }
  Object.defineProperty(JsonArraySerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_935ivj$_0;
  }});
  JsonArraySerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    verify(encoder);
    (new ArrayListSerializer(JsonElementSerializer_getInstance())).serialize_awe97i$(encoder, obj);
  };
  JsonArraySerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    verify_0(decoder);
    return new JsonArray((new ArrayListSerializer(JsonElementSerializer_getInstance())).deserialize_nts5qn$(decoder));
  };
  JsonArraySerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonArraySerializer', interfaces: [KSerializer]};
  var JsonArraySerializer_instance = null;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance === null) {
      new JsonArraySerializer();
    }
    return JsonArraySerializer_instance;
  }
  function verify(encoder) {
    if (!Kotlin.isType(encoder, JsonOutput)) {
      throw IllegalStateException_init('Json element serializer can be used only by Json format'.toString());
    }
  }
  function verify_0(decoder) {
    if (!Kotlin.isType(decoder, JsonInput)) {
      throw IllegalStateException_init('Json element serializer can be used only by Json format'.toString());
    }
  }
  function JsonPrimitive_2(value) {
    if (value == null)
      return JsonNull_getInstance();
    return JsonLiteral_init_1(value);
  }
  function get_content($receiver) {
    return $receiver.primitive.content;
  }
  function InvalidFloatingPoint(value, type) {
    return new JsonEncodingException(value.toString() + ' is not a valid ' + type + ' as per JSON specification. ' + 'You can disable strict mode to serialize such values');
  }
  function InvalidFloatingPoint_0(value, key, type) {
    return new JsonEncodingException(value.toString() + ' with key ' + key + ' is not a valid ' + type + ' as per JSON specification. ' + 'You can disable strict mode to serialize such values');
  }
  function jsonUnknownKeyException(position, key) {
    return new JsonDecodingException(position, 'Strict JSON encountered unknown key: ' + key + '\n' + 'You can disable strict mode to skip unknown keys');
  }
  function JsonMapInvalidKeyKind(keyDescriptor) {
    return new JsonException('Value of type ' + keyDescriptor.name + " can't be used in json as map key. " + ('It should have either primitive or enum kind, but its kind is ' + keyDescriptor.kind + '.' + '\n') + "You can convert such maps to arrays [key1, value1, key2, value2,...] with 'allowStructuredMapKeys' flag in JsonConfiguration.");
  }
  function JsonException(message) {
    SerializationException.call(this, message);
    this.name = 'JsonException';
  }
  JsonException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonException', interfaces: [SerializationException]};
  function JsonDecodingException(position, message) {
    JsonException.call(this, 'Invalid JSON at ' + position + ': ' + message);
    this.name = 'JsonDecodingException';
  }
  JsonDecodingException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonDecodingException', interfaces: [JsonException]};
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    this.name = 'JsonEncodingException';
  }
  JsonEncodingException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonEncodingException', interfaces: [JsonException]};
  function JsonInput() {
  }
  JsonInput.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'JsonInput', interfaces: [CompositeDecoder, Decoder]};
  function JsonOutput() {
  }
  JsonOutput.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'JsonOutput', interfaces: [CompositeEncoder, Encoder]};
  function JsonParser(reader) {
    this.reader_0 = reader;
  }
  JsonParser.prototype.readObject_0 = function () {
    var $this = this.reader_0;
    if ($this.tokenClass !== TC_BEGIN_OBJ) {
      toBoxedChar(toChar($this.tokenClass));
      $this.fail_bm4lxs$('Expected start of the object', $this.tokenPosition_0);
    }
    this.reader_0.nextToken();
    var $this_0 = this.reader_0;
    var condition = this.reader_0.tokenClass !== TC_COMMA;
    var position = this.reader_0.currentPosition;
    if (!condition) {
      $this_0.fail_bm4lxs$('Unexpected leading comma', position);
    }
    var result = LinkedHashMap_init();
    var valueExpected = false;
    while (this.reader_0.canBeginValue) {
      valueExpected = false;
      var key = this.reader_0.takeString();
      var $this_1 = this.reader_0;
      if ($this_1.tokenClass !== TC_COLON) {
        toBoxedChar(toChar($this_1.tokenClass));
        $this_1.fail_bm4lxs$("Expected ':'", $this_1.tokenPosition_0);
      }
      this.reader_0.nextToken();
      var element = this.read();
      result.put_xwzc9p$(key, element);
      if (this.reader_0.tokenClass !== TC_COMMA) {
        var $this_2 = this.reader_0;
        if ($this_2.tokenClass !== TC_END_OBJ) {
          toBoxedChar(toChar($this_2.tokenClass));
          $this_2.fail_bm4lxs$('Expected end of the object or comma', $this_2.tokenPosition_0);
        }
      }
       else {
        valueExpected = true;
        this.reader_0.nextToken();
      }
    }
    var $this_3 = this.reader_0;
    var condition_0 = !valueExpected && this.reader_0.tokenClass === TC_END_OBJ;
    var position_0 = this.reader_0.currentPosition;
    if (!condition_0) {
      $this_3.fail_bm4lxs$('Expected end of the object', position_0);
    }
    this.reader_0.nextToken();
    return new JsonObject(result);
  };
  JsonParser.prototype.readValue_0 = function (isString) {
    var str = this.reader_0.takeString();
    return new JsonLiteral(str, isString);
  };
  JsonParser.prototype.readArray_0 = function () {
    var $this = this.reader_0;
    if ($this.tokenClass !== TC_BEGIN_LIST) {
      toBoxedChar(toChar($this.tokenClass));
      $this.fail_bm4lxs$('Expected start of the array', $this.tokenPosition_0);
    }
    this.reader_0.nextToken();
    var $this_0 = this.reader_0;
    var condition = this.reader_0.tokenClass !== TC_COMMA;
    var position = this.reader_0.currentPosition;
    if (!condition) {
      $this_0.fail_bm4lxs$('Unexpected leading comma', position);
    }
    var result = ArrayList_init_0();
    var valueExpected = false;
    while (this.reader_0.canBeginValue) {
      valueExpected = false;
      var element = this.read();
      result.add_11rb$(element);
      if (this.reader_0.tokenClass !== TC_COMMA) {
        var $this_1 = this.reader_0;
        if ($this_1.tokenClass !== TC_END_LIST) {
          toBoxedChar(toChar($this_1.tokenClass));
          $this_1.fail_bm4lxs$('Expected end of the array or comma', $this_1.tokenPosition_0);
        }
      }
       else {
        valueExpected = true;
        this.reader_0.nextToken();
      }
    }
    var $this_2 = this.reader_0;
    var condition_0 = !valueExpected;
    var position_0 = this.reader_0.currentPosition;
    if (!condition_0) {
      $this_2.fail_bm4lxs$('Unexpected trailing comma', position_0);
    }
    this.reader_0.nextToken();
    return new JsonArray(result);
  };
  JsonParser.prototype.read = function () {
    var tmp$;
    if (!this.reader_0.canBeginValue)
      this.reader_0.fail_bm4lxs$("Can't begin reading value from here");
    switch (this.reader_0.tokenClass) {
      case 10:
        var $receiver = JsonNull_getInstance();
        this.reader_0.nextToken();
        tmp$ = $receiver;
        break;
      case 1:
        tmp$ = this.readValue_0(true);
        break;
      case 0:
        tmp$ = this.readValue_0(false);
        break;
      case 6:
        tmp$ = this.readObject_0();
        break;
      case 8:
        tmp$ = this.readArray_0();
        break;
      default:tmp$ = this.reader_0.fail_bm4lxs$("Can't begin reading element, unexpected token");
        break;
    }
    return tmp$;
  };
  JsonParser.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonParser', interfaces: []};
  var NULL;
  var COMMA;
  var COLON;
  var BEGIN_OBJ;
  var END_OBJ;
  var BEGIN_LIST;
  var END_LIST;
  var STRING;
  var STRING_ESC;
  var INVALID;
  var UNICODE_ESC;
  var TC_OTHER;
  var TC_STRING;
  var TC_STRING_ESC;
  var TC_WS;
  var TC_COMMA;
  var TC_COLON;
  var TC_BEGIN_OBJ;
  var TC_END_OBJ;
  var TC_BEGIN_LIST;
  var TC_END_LIST;
  var TC_NULL;
  var TC_INVALID;
  var TC_EOF;
  var CTC_MAX;
  var ESC2C_MAX;
  var C2TC;
  function EscapeCharMappings() {
    EscapeCharMappings_instance = this;
    this.ESCAPE_2_CHAR = Kotlin.charArray(117);
    for (var i = 0; i <= 31; i++) {
      this.initC2ESC_0(i, UNICODE_ESC);
    }
    this.initC2ESC_0(8, 98);
    this.initC2ESC_0(9, 116);
    this.initC2ESC_0(10, 110);
    this.initC2ESC_0(12, 102);
    this.initC2ESC_0(13, 114);
    this.initC2ESC_1(47, 47);
    this.initC2ESC_1(STRING, STRING);
    this.initC2ESC_1(STRING_ESC, STRING_ESC);
  }
  EscapeCharMappings.prototype.initC2ESC_0 = function (c, esc) {
    if (esc !== UNICODE_ESC)
      this.ESCAPE_2_CHAR[esc | 0] = toChar(c);
  };
  EscapeCharMappings.prototype.initC2ESC_1 = function (c, esc) {
    this.initC2ESC_0(c | 0, esc);
  };
  EscapeCharMappings.$metadata$ = {kind: Kind_OBJECT, simpleName: 'EscapeCharMappings', interfaces: []};
  var EscapeCharMappings_instance = null;
  function EscapeCharMappings_getInstance() {
    if (EscapeCharMappings_instance === null) {
      new EscapeCharMappings();
    }
    return EscapeCharMappings_instance;
  }
  function initC2TC($receiver, c, cl) {
    $receiver[c] = cl;
  }
  function initC2TC_0($receiver, c, cl) {
    initC2TC($receiver, c | 0, cl);
  }
  function charToTokenClass(c) {
    return (c | 0) < 126 ? C2TC[c | 0] : TC_OTHER;
  }
  function escapeToChar(c) {
    return unboxChar(c < 117 ? EscapeCharMappings_getInstance().ESCAPE_2_CHAR[c] : INVALID);
  }
  function JsonReader(source) {
    this.source_0 = source;
    this.currentPosition = 0;
    this.tokenClass = TC_EOF;
    this.tokenPosition_0 = 0;
    this.offset_0 = -1;
    this.length_0 = 0;
    this.buf_0 = Kotlin.charArray(16);
    this.nextToken();
  }
  Object.defineProperty(JsonReader.prototype, 'isDone', {get: function () {
    return this.tokenClass === TC_EOF;
  }});
  Object.defineProperty(JsonReader.prototype, 'canBeginValue', {get: function () {
    switch (this.tokenClass) {
      case 8:
      case 6:
      case 0:
      case 1:
      case 10:
        return true;
      default:return false;
    }
  }});
  JsonReader.prototype.requireTokenClass_mvfnf3$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.json.internal.JsonReader.requireTokenClass_mvfnf3$', wrapFunction(function () {
    var toChar = Kotlin.toChar;
    var toBoxedChar = Kotlin.toBoxedChar;
    return function (expected, errorMessage) {
      if (this.tokenClass !== expected)
        this.fail_bm4lxs$(errorMessage(toBoxedChar(toChar(this.tokenClass))), this.tokenPosition_0);
    };
  }));
  JsonReader.prototype.takeString = function () {
    if (this.tokenClass !== TC_OTHER && this.tokenClass !== TC_STRING)
      this.fail_bm4lxs$('Expected string or non-null literal', this.tokenPosition_0);
    var tmp$;
    if (this.offset_0 < 0)
      tmp$ = String_0(this.buf_0, 0, this.length_0);
    else {
      var $receiver = this.source_0;
      var startIndex = this.offset_0;
      var endIndex = this.offset_0 + this.length_0 | 0;
      tmp$ = $receiver.substring(startIndex, endIndex);
    }
    var prevStr = tmp$;
    this.nextToken();
    return prevStr;
  };
  JsonReader.prototype.append_0 = function (ch) {
    var tmp$;
    if (this.length_0 >= this.buf_0.length)
      this.buf_0 = copyOf_5(this.buf_0, 2 * this.buf_0.length | 0);
    this.buf_0[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = ch;
  };
  JsonReader.prototype.appendRange_0 = function (source, fromIndex, toIndex) {
    var addLen = toIndex - fromIndex | 0;
    var oldLen = this.length_0;
    var newLen = oldLen + addLen | 0;
    if (newLen > this.buf_0.length)
      this.buf_0 = copyOf_5(this.buf_0, coerceAtLeast(newLen, 2 * this.buf_0.length | 0));
    for (var i = 0; i < addLen; i++)
      this.buf_0[oldLen + i | 0] = source.charCodeAt(fromIndex + i | 0);
    this.length_0 = this.length_0 + addLen | 0;
  };
  JsonReader.prototype.nextToken = function () {
    var source = this.source_0;
    var currentPosition = this.currentPosition;
    while (currentPosition < source.length) {
      var ch = source.charCodeAt(currentPosition);
      var tc = charToTokenClass(ch);
      switch (tc) {
        case 3:
          currentPosition = currentPosition + 1 | 0;
          break;
        case 0:
          this.nextLiteral_0(source, currentPosition);
          return;
        case 1:
          this.nextString_0(source, currentPosition);
          return;
        default:this.tokenPosition_0 = currentPosition;
          this.tokenClass = tc;
          this.currentPosition = currentPosition + 1 | 0;
          return;
      }
    }
    this.tokenPosition_0 = currentPosition;
    this.tokenClass = TC_EOF;
  };
  JsonReader.prototype.nextLiteral_0 = function (source, startPos) {
    this.tokenPosition_0 = startPos;
    this.offset_0 = startPos;
    var currentPosition = startPos;
    while (currentPosition < source.length && charToTokenClass(source.charCodeAt(currentPosition)) === TC_OTHER) {
      currentPosition = currentPosition + 1 | 0;
    }
    this.currentPosition = currentPosition;
    this.length_0 = currentPosition - this.offset_0 | 0;
    this.tokenClass = rangeEquals(source, this.offset_0, this.length_0, NULL) ? TC_NULL : TC_OTHER;
  };
  JsonReader.prototype.nextString_0 = function (source, startPosition) {
    this.tokenPosition_0 = startPosition;
    this.length_0 = 0;
    var currentPosition = startPosition + 1 | 0;
    var lastPosition = currentPosition;
    var length = source.length;
    while (source.charCodeAt(currentPosition) !== STRING) {
      if (currentPosition >= length)
        this.fail_bm4lxs$('Unexpected EOF', currentPosition);
      if (source.charCodeAt(currentPosition) === STRING_ESC) {
        this.appendRange_0(source, lastPosition, currentPosition);
        var newPosition = this.appendEsc_0(source, currentPosition + 1 | 0);
        currentPosition = newPosition;
        lastPosition = newPosition;
      }
       else {
        currentPosition = currentPosition + 1 | 0;
      }
    }
    if (lastPosition === (startPosition + 1 | 0)) {
      this.offset_0 = lastPosition;
      this.length_0 = currentPosition - lastPosition | 0;
    }
     else {
      this.appendRange_0(source, lastPosition, currentPosition);
      this.offset_0 = -1;
    }
    this.currentPosition = currentPosition + 1 | 0;
    this.tokenClass = TC_STRING;
  };
  JsonReader.prototype.appendEsc_0 = function (source, startPosition) {
    var tmp$;
    var currentPosition = startPosition;
    var condition = currentPosition < source.length;
    var position = currentPosition;
    if (!condition) {
      this.fail_bm4lxs$('Unexpected EOF after escape character', position);
    }
    var currentChar = source.charCodeAt((tmp$ = currentPosition, currentPosition = tmp$ + 1 | 0, tmp$));
    if (currentChar === UNICODE_ESC) {
      return this.appendHex_0(source, currentPosition);
    }
    var c = escapeToChar(currentChar | 0);
    var condition_0 = c !== INVALID;
    var position_0 = currentPosition;
    if (!condition_0) {
      this.fail_bm4lxs$("Invalid escaped char '" + String.fromCharCode(currentChar) + "'", position_0);
    }
    this.append_0(c);
    return currentPosition;
  };
  JsonReader.prototype.appendHex_0 = function (source, startPos) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var curPos = startPos;
    this.append_0(toChar((this.fromHexChar_0(source, (tmp$ = curPos, curPos = tmp$ + 1 | 0, tmp$)) << 12) + (this.fromHexChar_0(source, (tmp$_0 = curPos, curPos = tmp$_0 + 1 | 0, tmp$_0)) << 8) + (this.fromHexChar_0(source, (tmp$_1 = curPos, curPos = tmp$_1 + 1 | 0, tmp$_1)) << 4) + this.fromHexChar_0(source, (tmp$_2 = curPos, curPos = tmp$_2 + 1 | 0, tmp$_2)) | 0));
    return curPos;
  };
  JsonReader.prototype.skipElement = function () {
    if (this.tokenClass !== TC_BEGIN_OBJ && this.tokenClass !== TC_BEGIN_LIST) {
      this.nextToken();
      return;
    }
    var tokenStack = ArrayList_init_0();
    do {
      switch (this.tokenClass) {
        case 8:
        case 6:
          tokenStack.add_11rb$(this.tokenClass);
          break;
        case 9:
          if (last(tokenStack) !== TC_BEGIN_LIST)
            throw new JsonDecodingException(this.currentPosition, 'found ] instead of }');
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
        case 7:
          if (last(tokenStack) !== TC_BEGIN_OBJ)
            throw new JsonDecodingException(this.currentPosition, 'found } instead of ]');
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
      }
      this.nextToken();
      var isNotEmpty$result;
      isNotEmpty$result = !tokenStack.isEmpty();
    }
     while (isNotEmpty$result);
  };
  JsonReader.prototype.toString = function () {
    return "JsonReader(source='" + this.source_0 + "', currentPosition=" + this.currentPosition + ', tokenClass=' + this.tokenClass + ', tokenPosition=' + this.tokenPosition_0 + ', offset=' + this.offset_0 + ')';
  };
  JsonReader.prototype.fail_bm4lxs$ = function (message, position) {
    if (position === void 0)
      position = this.currentPosition;
    throw new JsonDecodingException(position, message);
  };
  JsonReader.prototype.require_wqn2ds$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.json.internal.JsonReader.require_wqn2ds$', function (condition, position, message) {
    if (position === void 0)
      position = this.currentPosition;
    if (!condition)
      this.fail_bm4lxs$(message(), position);
  });
  JsonReader.prototype.fromHexChar_0 = function (source, currentPosition) {
    var tmp$;
    if (!(currentPosition < source.length)) {
      this.fail_bm4lxs$('Unexpected EOF during unicode escape', currentPosition);
    }
    var curChar = source.charCodeAt(currentPosition);
    if ((new CharRange(48, 57)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 48 | 0;
    else if ((new CharRange(97, 102)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 97 + 10 | 0;
    else if ((new CharRange(65, 70)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 65 + 10 | 0;
    else
      tmp$ = this.fail_bm4lxs$("Invalid toHexChar char '" + String.fromCharCode(curChar) + "' in unicode escape");
    return tmp$;
  };
  JsonReader.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonReader', interfaces: []};
  function rangeEquals(source, start, length, str) {
    var n = str.length;
    if (length !== n)
      return false;
    for (var i = 0; i < n; i++)
      if (source.charCodeAt(start + i | 0) !== str.charCodeAt(i))
        return false;
    return true;
  }
  function checkKind(kind) {
    if (Kotlin.isType(kind, UnionKind$ENUM_KIND)) {
      throw IllegalStateException_init("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonConfiguration.useArrayPolymorphism' instead".toString());
    }
    if (Kotlin.isType(kind, PrimitiveKind)) {
      throw IllegalStateException_init("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonConfiguration.useArrayPolymorphism' instead".toString());
    }
    if (Kotlin.isType(kind, PolymorphicKind)) {
      throw IllegalStateException_init('Actual serializer for polymorphic cannot be polymorphic itself'.toString());
    }
  }
  function decodeSerializableValuePolymorphic($receiver, deserializer) {
    var tmp$, tmp$_0;
    if (!Kotlin.isType(deserializer, AbstractPolymorphicSerializer) || $receiver.json.configuration_8be2vx$.useArrayPolymorphism_8be2vx$) {
      return deserializer.deserialize_nts5qn$($receiver);
    }
    var obj = $receiver.decodeJson();
    var tmp$_1;
    if (!Kotlin.isType(obj, JsonObject)) {
      var message = 'Expected ' + getKClass(JsonObject) + ' but found ' + Kotlin.getKClassFromExpression(obj);
      throw IllegalStateException_init(message.toString());
    }
    var jsonTree = Kotlin.isType(tmp$_1 = obj, JsonObject) ? tmp$_1 : throwCCE();
    var type = get_content(getValue(jsonTree, $receiver.json.configuration_8be2vx$.classDiscriminator_8be2vx$));
    (Kotlin.isType(tmp$ = jsonTree.content, MutableMap) ? tmp$ : throwCCE()).remove_11rb$($receiver.json.configuration_8be2vx$.classDiscriminator_8be2vx$);
    var actualSerializer = Kotlin.isType(tmp$_0 = deserializer.findPolymorphicSerializer_b69zac$($receiver, type), KSerializer) ? tmp$_0 : throwCCE();
    return readJson($receiver.json, jsonTree, actualSerializer);
  }
  function StreamingJsonInput(json, mode, reader) {
    ElementValueDecoder.call(this);
    this.json_2ev5c4$_0 = json;
    this.mode_0 = mode;
    this.reader_8be2vx$ = reader;
    this.context_nemf95$_0 = this.json.context;
    this.currentIndex_0 = -1;
    this.configuration_0 = this.json.configuration_8be2vx$;
  }
  Object.defineProperty(StreamingJsonInput.prototype, 'json', {get: function () {
    return this.json_2ev5c4$_0;
  }});
  Object.defineProperty(StreamingJsonInput.prototype, 'context', {get: function () {
    return this.context_nemf95$_0;
  }});
  StreamingJsonInput.prototype.decodeJson = function () {
    return (new JsonParser(this.reader_8be2vx$)).read();
  };
  Object.defineProperty(StreamingJsonInput.prototype, 'updateMode', {get: function () {
    return this.configuration_0.updateMode_8be2vx$;
  }});
  StreamingJsonInput.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  StreamingJsonInput.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    var tmp$;
    var newMode = switchMode(this.json, desc);
    if (unboxChar(newMode.begin) !== INVALID) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== newMode.beginTc) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$("Expected '" + String.fromCharCode(unboxChar(newMode.begin)) + ', kind: ' + desc.kind + "'", $this.tokenPosition_0);
      }
      this.reader_8be2vx$.nextToken();
    }
    switch (newMode.name) {
      case 'LIST':
      case 'MAP':
      case 'POLY_OBJ':
        tmp$ = new StreamingJsonInput(this.json, newMode, this.reader_8be2vx$);
        break;
      default:tmp$ = this.mode_0 === newMode ? this : new StreamingJsonInput(this.json, newMode, this.reader_8be2vx$);
        break;
    }
    return tmp$;
  };
  StreamingJsonInput.prototype.endStructure_qatsm0$ = function (desc) {
    if (unboxChar(this.mode_0.end) !== INVALID) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== this.mode_0.endTc) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$("Expected '" + String.fromCharCode(unboxChar(this.mode_0.end)) + "'", $this.tokenPosition_0);
      }
      this.reader_8be2vx$.nextToken();
    }
  };
  StreamingJsonInput.prototype.decodeNotNullMark = function () {
    return this.reader_8be2vx$.tokenClass !== TC_NULL;
  };
  StreamingJsonInput.prototype.decodeNull = function () {
    var $this = this.reader_8be2vx$;
    if ($this.tokenClass !== TC_NULL) {
      toBoxedChar(toChar($this.tokenClass));
      $this.fail_bm4lxs$("Expected 'null' literal", $this.tokenPosition_0);
    }
    this.reader_8be2vx$.nextToken();
    return null;
  };
  StreamingJsonInput.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    var tmp$;
    var tokenClass = this.reader_8be2vx$.tokenClass;
    if (tokenClass === TC_COMMA) {
      var $this = this.reader_8be2vx$;
      var condition = this.currentIndex_0 !== -1;
      var position = this.reader_8be2vx$.currentPosition;
      if (!condition) {
        $this.fail_bm4lxs$('Unexpected leading comma', position);
      }
      this.reader_8be2vx$.nextToken();
    }
    switch (this.mode_0.name) {
      case 'LIST':
        tmp$ = this.decodeListIndex_0(tokenClass);
        break;
      case 'MAP':
        tmp$ = this.decodeMapIndex_0(tokenClass);
        break;
      case 'POLY_OBJ':
        switch (this.currentIndex_0 = this.currentIndex_0 + 1 | 0, this.currentIndex_0) {
          case 0:
            tmp$ = 0;
            break;
          case 1:
            tmp$ = 1;
            break;
          default:tmp$ = -1;
            break;
        }

        break;
      default:tmp$ = this.decodeObjectIndex_0(tokenClass, desc);
        break;
    }
    return tmp$;
  };
  StreamingJsonInput.prototype.decodeMapIndex_0 = function (tokenClass) {
    var tmp$;
    if (tokenClass !== TC_COMMA && this.currentIndex_0 % 2 === 1) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== TC_END_OBJ) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$('Expected end of the object or comma', $this.tokenPosition_0);
      }
    }
    if (this.currentIndex_0 % 2 === 0) {
      var $this_0 = this.reader_8be2vx$;
      if ($this_0.tokenClass !== TC_COLON) {
        toBoxedChar(toChar($this_0.tokenClass));
        $this_0.fail_bm4lxs$("Expected ':' after the key", $this_0.tokenPosition_0);
      }
      this.reader_8be2vx$.nextToken();
    }
    if (!this.reader_8be2vx$.canBeginValue) {
      var $this_1 = this.reader_8be2vx$;
      var condition = tokenClass !== TC_COMMA;
      var position;
      position = $this_1.currentPosition;
      if (!condition) {
        $this_1.fail_bm4lxs$('Unexpected trailing comma', position);
      }
      tmp$ = -1;
    }
     else {
      tmp$ = (this.currentIndex_0 = this.currentIndex_0 + 1 | 0, this.currentIndex_0);
    }
    return tmp$;
  };
  StreamingJsonInput.prototype.decodeObjectIndex_0 = function (tokenClass, desc) {
    if (tokenClass === TC_COMMA && !this.reader_8be2vx$.canBeginValue) {
      this.reader_8be2vx$.fail_bm4lxs$('Unexpected trailing comma');
    }
    while (this.reader_8be2vx$.canBeginValue) {
      this.currentIndex_0 = this.currentIndex_0 + 1 | 0;
      var key = this.reader_8be2vx$.takeString();
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== TC_COLON) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$("Expected ':'", $this.tokenPosition_0);
      }
      this.reader_8be2vx$.nextToken();
      var index = desc.getElementIndex_61zpoe$(key);
      if (index !== -3) {
        return index;
      }
      if (this.configuration_0.strictMode_8be2vx$)
        this.reader_8be2vx$.fail_bm4lxs$('Encountered an unknown key ' + key);
      else
        this.reader_8be2vx$.skipElement();
      if (this.reader_8be2vx$.tokenClass === TC_COMMA) {
        this.reader_8be2vx$.nextToken();
        var $this_0 = this.reader_8be2vx$;
        var condition = this.reader_8be2vx$.canBeginValue;
        var position = this.reader_8be2vx$.currentPosition;
        if (!condition) {
          $this_0.fail_bm4lxs$('Unexpected trailing comma', position);
        }
      }
    }
    return -1;
  };
  StreamingJsonInput.prototype.decodeListIndex_0 = function (tokenClass) {
    var tmp$;
    if (tokenClass !== TC_COMMA && this.currentIndex_0 !== -1) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== TC_END_LIST) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$('Expected end of the array or comma', $this.tokenPosition_0);
      }
    }
    if (!this.reader_8be2vx$.canBeginValue) {
      var $this_0 = this.reader_8be2vx$;
      var condition = tokenClass !== TC_COMMA;
      var position;
      position = $this_0.currentPosition;
      if (!condition) {
        $this_0.fail_bm4lxs$('Unexpected trailing comma', position);
      }
      tmp$ = -1;
    }
     else {
      tmp$ = (this.currentIndex_0 = this.currentIndex_0 + 1 | 0, this.currentIndex_0);
    }
    return tmp$;
  };
  StreamingJsonInput.prototype.decodeBoolean = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    return this.configuration_0.strictMode_8be2vx$ ? toBooleanStrict($receiver) : toBoolean($receiver);
  };
  StreamingJsonInput.prototype.decodeByte = function () {
    return toByte_0(this.reader_8be2vx$.takeString());
  };
  StreamingJsonInput.prototype.decodeShort = function () {
    return toShort_0(this.reader_8be2vx$.takeString());
  };
  StreamingJsonInput.prototype.decodeInt = function () {
    return toInt(this.reader_8be2vx$.takeString());
  };
  StreamingJsonInput.prototype.decodeLong = function () {
    return toLong(this.reader_8be2vx$.takeString());
  };
  StreamingJsonInput.prototype.decodeFloat = function () {
    return toDouble(this.reader_8be2vx$.takeString());
  };
  StreamingJsonInput.prototype.decodeDouble = function () {
    return toDouble(this.reader_8be2vx$.takeString());
  };
  StreamingJsonInput.prototype.decodeChar = function () {
    return toBoxedChar(single(this.reader_8be2vx$.takeString()));
  };
  StreamingJsonInput.prototype.decodeString = function () {
    return this.reader_8be2vx$.takeString();
  };
  StreamingJsonInput.prototype.decodeEnum_qatsm0$ = function (enumDescription) {
    return getElementIndexOrThrow(enumDescription, this.reader_8be2vx$.takeString());
  };
  StreamingJsonInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'StreamingJsonInput', interfaces: [ElementValueDecoder, JsonInput]};
  function StreamingJsonOutput(composer, json, mode, modeReuseCache) {
    ElementValueEncoder.call(this);
    this.composer_0 = composer;
    this.json_lpdodt$_0 = json;
    this.mode_0 = mode;
    this.modeReuseCache_0 = modeReuseCache;
    this.context_41jdqm$_0 = this.json.context;
    this.configuration_0 = this.json.configuration_8be2vx$;
    this.forceQuoting_0 = false;
    this.writePolymorphic_0 = false;
    var i = this.mode_0.ordinal;
    if (this.modeReuseCache_0[i] !== null || this.modeReuseCache_0[i] !== this)
      this.modeReuseCache_0[i] = this;
  }
  Object.defineProperty(StreamingJsonOutput.prototype, 'json', {get: function () {
    return this.json_lpdodt$_0;
  }});
  Object.defineProperty(StreamingJsonOutput.prototype, 'context', {get: function () {
    return this.context_41jdqm$_0;
  }});
  StreamingJsonOutput.prototype.encodeJson_qiw0cd$ = function (element) {
    this.encodeSerializableValue_tf03ej$(JsonElementSerializer_getInstance(), element);
  };
  StreamingJsonOutput.prototype.shouldEncodeElementDefault_3zr2iy$ = function (desc, index) {
    return this.configuration_0.encodeDefaults_8be2vx$;
  };
  StreamingJsonOutput.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    encodePolymorphically$break: do {
      var tmp$, tmp$_0, tmp$_1;
      if (!Kotlin.isType(serializer, AbstractPolymorphicSerializer) || this.json.configuration_8be2vx$.useArrayPolymorphism_8be2vx$) {
        serializer.serialize_awe97i$(this, value);
        break encodePolymorphically$break;
      }
      Kotlin.isType(tmp$ = serializer, AbstractPolymorphicSerializer) ? tmp$ : throwCCE();
      var actualSerializer = Kotlin.isType(tmp$_1 = serializer.findPolymorphicSerializer_7kuzo6$(this, Kotlin.isType(tmp$_0 = value, Any) ? tmp$_0 : throwCCE()), KSerializer) ? tmp$_1 : throwCCE();
      var kind = actualSerializer.descriptor.kind;
      checkKind(kind);
      this.writePolymorphic_0 = true;
      actualSerializer.serialize_awe97i$(this, value);
    }
     while (false);
  };
  StreamingJsonOutput.prototype.encodeTypeInfo_0 = function (descriptor) {
    this.composer_0.nextItem();
    this.encodeString_61zpoe$(this.configuration_0.classDiscriminator_8be2vx$);
    this.composer_0.print_s8itvh$(COLON);
    this.composer_0.space();
    this.encodeString_61zpoe$(descriptor.name);
  };
  StreamingJsonOutput.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    var tmp$;
    var newMode = switchMode(this.json, desc);
    if (unboxChar(newMode.begin) !== INVALID) {
      this.composer_0.print_s8itvh$(unboxChar(newMode.begin));
      this.composer_0.indent();
    }
    if (this.writePolymorphic_0) {
      this.writePolymorphic_0 = false;
      this.encodeTypeInfo_0(desc);
    }
    if (this.mode_0 === newMode) {
      return this;
    }
    return (tmp$ = this.modeReuseCache_0[newMode.ordinal]) != null ? tmp$ : new StreamingJsonOutput(this.composer_0, this.json, newMode, this.modeReuseCache_0);
  };
  StreamingJsonOutput.prototype.endStructure_qatsm0$ = function (desc) {
    if (unboxChar(this.mode_0.end) !== INVALID) {
      this.composer_0.unIndent();
      this.composer_0.nextItem();
      this.composer_0.print_s8itvh$(unboxChar(this.mode_0.end));
    }
  };
  StreamingJsonOutput.prototype.encodeElement_3zr2iy$ = function (desc, index) {
    var tmp$;
    switch (this.mode_0.name) {
      case 'LIST':
        if (!this.composer_0.writingFirst)
          this.composer_0.print_s8itvh$(COMMA);
        this.composer_0.nextItem();
        break;
      case 'MAP':
        if (!this.composer_0.writingFirst) {
          if (index % 2 === 0) {
            this.composer_0.print_s8itvh$(COMMA);
            this.composer_0.nextItem();
            tmp$ = true;
          }
           else {
            this.composer_0.print_s8itvh$(COLON);
            this.composer_0.space();
            tmp$ = false;
          }
          this.forceQuoting_0 = tmp$;
        }
         else {
          this.forceQuoting_0 = true;
          this.composer_0.nextItem();
        }

        break;
      case 'POLY_OBJ':
        if (index === 0)
          this.forceQuoting_0 = true;
        if (index === 1) {
          this.composer_0.print_s8itvh$(COMMA);
          this.composer_0.space();
          this.forceQuoting_0 = false;
        }

        break;
      default:if (!this.composer_0.writingFirst)
          this.composer_0.print_s8itvh$(COMMA);
        this.composer_0.nextItem();
        this.encodeString_61zpoe$(desc.getElementName_za3lpa$(index));
        this.composer_0.print_s8itvh$(COLON);
        this.composer_0.space();
        break;
    }
    return true;
  };
  StreamingJsonOutput.prototype.encodeNull = function () {
    this.composer_0.print_61zpoe$(NULL);
  };
  StreamingJsonOutput.prototype.encodeBoolean_6taknv$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_6taknv$(value);
  };
  StreamingJsonOutput.prototype.encodeByte_s8j3t7$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_s8j3t7$(value);
  };
  StreamingJsonOutput.prototype.encodeShort_mq22fl$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_mq22fl$(value);
  };
  StreamingJsonOutput.prototype.encodeInt_za3lpa$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_za3lpa$(value);
  };
  StreamingJsonOutput.prototype.encodeLong_s8cxhz$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_s8cxhz$(value);
  };
  StreamingJsonOutput.prototype.encodeFloat_mx4ult$ = function (value) {
    if (this.configuration_0.strictMode_8be2vx$ && !isFinite(value)) {
      throw InvalidFloatingPoint(value, 'float');
    }
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_mx4ult$(value);
  };
  StreamingJsonOutput.prototype.encodeDouble_14dthe$ = function (value) {
    if (this.configuration_0.strictMode_8be2vx$ && !isFinite_0(value)) {
      throw InvalidFloatingPoint(value, 'double');
    }
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_14dthe$(value);
  };
  StreamingJsonOutput.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeString_61zpoe$(String.fromCharCode(value));
  };
  StreamingJsonOutput.prototype.encodeString_61zpoe$ = function (value) {
    if (this.configuration_0.unquoted_8be2vx$ && !shouldBeQuoted(value)) {
      this.composer_0.print_61zpoe$(value);
    }
     else {
      this.composer_0.printQuoted_61zpoe$(value);
    }
  };
  StreamingJsonOutput.prototype.encodeEnum_3zr2iy$ = function (enumDescription, ordinal) {
    this.encodeString_61zpoe$(enumDescription.getElementName_za3lpa$(ordinal));
  };
  StreamingJsonOutput.prototype.encodeValue_za3rmp$ = function (value) {
    if (this.configuration_0.strictMode_8be2vx$)
      ElementValueEncoder.prototype.encodeValue_za3rmp$.call(this, value);
    else
      this.encodeString_61zpoe$(value.toString());
  };
  function StreamingJsonOutput$Composer(sb, json) {
    this.sb_8be2vx$ = sb;
    this.json_0 = json;
    this.level_0 = 0;
    this.writingFirst_uw5fqz$_0 = true;
  }
  Object.defineProperty(StreamingJsonOutput$Composer.prototype, 'writingFirst', {get: function () {
    return this.writingFirst_uw5fqz$_0;
  }, set: function (writingFirst) {
    this.writingFirst_uw5fqz$_0 = writingFirst;
  }});
  StreamingJsonOutput$Composer.prototype.indent = function () {
    this.writingFirst = true;
    this.level_0 = this.level_0 + 1 | 0;
  };
  StreamingJsonOutput$Composer.prototype.unIndent = function () {
    this.level_0 = this.level_0 - 1 | 0;
  };
  StreamingJsonOutput$Composer.prototype.nextItem = function () {
    this.writingFirst = false;
    if (this.json_0.configuration_8be2vx$.prettyPrint_8be2vx$) {
      this.print_61zpoe$('\n');
      var times = this.level_0;
      for (var index = 0; index < times; index++) {
        this.print_61zpoe$(this.json_0.configuration_8be2vx$.indent_8be2vx$);
      }
    }
  };
  StreamingJsonOutput$Composer.prototype.space = function () {
    if (this.json_0.configuration_8be2vx$.prettyPrint_8be2vx$)
      this.print_s8itvh$(32);
  };
  StreamingJsonOutput$Composer.prototype.print_s8itvh$ = function (v) {
    return this.sb_8be2vx$.append_s8itvh$(v);
  };
  StreamingJsonOutput$Composer.prototype.print_61zpoe$ = function (v) {
    return this.sb_8be2vx$.append_gw00v9$(v);
  };
  StreamingJsonOutput$Composer.prototype.print_mx4ult$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonOutput$Composer.prototype.print_14dthe$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonOutput$Composer.prototype.print_s8j3t7$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonOutput$Composer.prototype.print_mq22fl$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonOutput$Composer.prototype.print_za3lpa$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonOutput$Composer.prototype.print_s8cxhz$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonOutput$Composer.prototype.print_6taknv$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonOutput$Composer.prototype.printQuoted_61zpoe$ = function (value) {
    printQuoted(this.sb_8be2vx$, value);
  };
  StreamingJsonOutput$Composer.$metadata$ = {kind: Kind_CLASS, simpleName: 'Composer', interfaces: []};
  StreamingJsonOutput.$metadata$ = {kind: Kind_CLASS, simpleName: 'StreamingJsonOutput', interfaces: [ElementValueEncoder, JsonOutput]};
  function StreamingJsonOutput_init(output, json, mode, modeReuseCache, $this) {
    $this = $this || Object.create(StreamingJsonOutput.prototype);
    StreamingJsonOutput.call($this, new StreamingJsonOutput$Composer(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function toHexChar(i) {
    var d = i & 15;
    return d < 10 ? toChar(d + 48 | 0) : toChar(d - 10 + 97 | 0);
  }
  var ESCAPE_CHARS;
  function printQuoted($receiver, value) {
    var tmp$;
    $receiver.append_s8itvh$(STRING);
    var lastPos = 0;
    var length = value.length;
    for (var i = 0; i < length; i++) {
      var c = value.charCodeAt(i) | 0;
      if (c >= ESCAPE_CHARS.length)
        continue;
      tmp$ = ESCAPE_CHARS[c];
      if (tmp$ == null) {
        continue;
      }
      var esc = tmp$;
      $receiver.append_ezbsdh$(value, lastPos, i);
      $receiver.append_gw00v9$(esc);
      lastPos = i + 1 | 0;
    }
    $receiver.append_ezbsdh$(value, lastPos, length);
    $receiver.append_s8itvh$(STRING);
  }
  function toBooleanStrict($receiver) {
    var tmp$;
    tmp$ = toBooleanStrictOrNull($receiver);
    if (tmp$ == null) {
      throw IllegalStateException_init($receiver + ' does not represent a Boolean');
    }
    return tmp$;
  }
  function toBooleanStrictOrNull($receiver) {
    if (equals_0($receiver, 'true', true))
      return true;
    else if (equals_0($receiver, 'false', true))
      return false;
    else
      return null;
  }
  function shouldBeQuoted(str) {
    var tmp$;
    if (equals(str, NULL))
      return true;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      if (charToTokenClass(ch) !== TC_OTHER)
        return true;
    }
    return false;
  }
  function readJson($receiver, element, deserializer) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(element, JsonObject))
      tmp$_0 = new JsonTreeInput($receiver, element);
    else if (Kotlin.isType(element, JsonArray))
      tmp$_0 = new JsonTreeListInput($receiver, element);
    else if (Kotlin.isType(element, JsonLiteral) || equals(element, JsonNull_getInstance())) {
      tmp$_0 = new JsonPrimitiveInput($receiver, Kotlin.isType(tmp$ = element, JsonPrimitive) ? tmp$ : throwCCE());
    }
     else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    var input = tmp$_0;
    return decode_0(input, deserializer);
  }
  function AbstractJsonTreeInput(json, obj) {
    NamedValueDecoder.call(this);
    this.json_sa61ty$_0 = json;
    this.obj_gyc2sv$_0 = obj;
    this.configuration_0 = this.json.configuration_8be2vx$;
  }
  Object.defineProperty(AbstractJsonTreeInput.prototype, 'json', {get: function () {
    return this.json_sa61ty$_0;
  }});
  Object.defineProperty(AbstractJsonTreeInput.prototype, 'obj', {get: function () {
    return this.obj_gyc2sv$_0;
  }});
  Object.defineProperty(AbstractJsonTreeInput.prototype, 'context', {get: function () {
    return this.json.context;
  }});
  AbstractJsonTreeInput.prototype.currentObject_0 = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.currentTagOrNull) != null ? this.currentElement_61zpoe$(tmp$) : null) != null ? tmp$_0 : this.obj;
  };
  AbstractJsonTreeInput.prototype.decodeJson = function () {
    return this.currentObject_0();
  };
  Object.defineProperty(AbstractJsonTreeInput.prototype, 'updateMode', {get: function () {
    return this.configuration_0.updateMode_8be2vx$;
  }});
  AbstractJsonTreeInput.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeInput.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeInput.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    var tmp$, tmp$_0;
    var currentObject = this.currentObject_0();
    tmp$ = desc.kind;
    if (equals(tmp$, StructureKind$LIST_getInstance()) || Kotlin.isType(tmp$, PolymorphicKind)) {
      var tmp$_1 = this.json;
      var tmp$_2;
      if (!Kotlin.isType(currentObject, JsonArray)) {
        var message = 'Expected ' + getKClass(JsonArray) + ' but found ' + Kotlin.getKClassFromExpression(currentObject);
        throw IllegalStateException_init(message.toString());
      }
      tmp$_0 = new JsonTreeListInput(tmp$_1, Kotlin.isType(tmp$_2 = currentObject, JsonArray) ? tmp$_2 : throwCCE());
    }
     else if (equals(tmp$, StructureKind$MAP_getInstance())) {
      var $receiver = this.json;
      var tmp$_3;
      var keyDescriptor = desc.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, UnionKind.ENUM_KIND)) {
        var tmp$_4 = this.json;
        var tmp$_5;
        if (!Kotlin.isType(currentObject, JsonObject)) {
          var message_0 = 'Expected ' + getKClass(JsonObject) + ' but found ' + Kotlin.getKClassFromExpression(currentObject);
          throw IllegalStateException_init(message_0.toString());
        }
        tmp$_3 = new JsonTreeMapInput(tmp$_4, Kotlin.isType(tmp$_5 = currentObject, JsonObject) ? tmp$_5 : throwCCE());
      }
       else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys_8be2vx$) {
        var tmp$_6 = this.json;
        var tmp$_7;
        if (!Kotlin.isType(currentObject, JsonArray)) {
          var message_1 = 'Expected ' + getKClass(JsonArray) + ' but found ' + Kotlin.getKClassFromExpression(currentObject);
          throw IllegalStateException_init(message_1.toString());
        }
        tmp$_3 = new JsonTreeListInput(tmp$_6, Kotlin.isType(tmp$_7 = currentObject, JsonArray) ? tmp$_7 : throwCCE());
      }
       else {
        throw JsonMapInvalidKeyKind(keyDescriptor);
      }
      tmp$_0 = tmp$_3;
    }
     else {
      var tmp$_8 = this.json;
      var tmp$_9;
      if (!Kotlin.isType(currentObject, JsonObject)) {
        var message_2 = 'Expected ' + getKClass(JsonObject) + ' but found ' + Kotlin.getKClassFromExpression(currentObject);
        throw IllegalStateException_init(message_2.toString());
      }
      tmp$_0 = new JsonTreeInput(tmp$_8, Kotlin.isType(tmp$_9 = currentObject, JsonObject) ? tmp$_9 : throwCCE());
    }
    return tmp$_0;
  };
  AbstractJsonTreeInput.prototype.getValue_61zpoe$ = function (tag) {
    var tmp$, tmp$_0;
    var currentElement = this.currentElement_61zpoe$(tag);
    tmp$_0 = Kotlin.isType(tmp$ = currentElement, JsonPrimitive) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw new JsonDecodingException(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement);
    }
    return tmp$_0;
  };
  AbstractJsonTreeInput.prototype.decodeTaggedChar_11rb$ = function (tag) {
    var tmp$;
    var o = this.getValue_61zpoe$(tag);
    if (o.content.length === 1)
      tmp$ = o.content.charCodeAt(0);
    else
      throw new SerializationException(o.toString() + " can't be represented as Char");
    return toBoxedChar(tmp$);
  };
  AbstractJsonTreeInput.prototype.decodeTaggedEnum_xicdkz$ = function (tag, enumDescription) {
    return getElementIndexOrThrow(enumDescription, this.getValue_61zpoe$(tag).content);
  };
  AbstractJsonTreeInput.prototype.decodeTaggedNull_11rb$ = function (tag) {
    return null;
  };
  AbstractJsonTreeInput.prototype.decodeTaggedNotNullMark_11rb$ = function (tag) {
    return this.currentElement_61zpoe$(tag) !== JsonNull_getInstance();
  };
  AbstractJsonTreeInput.prototype.decodeTaggedUnit_11rb$ = function (tag) {
    return;
  };
  AbstractJsonTreeInput.prototype.decodeTaggedBoolean_11rb$ = function (tag) {
    return this.getValue_61zpoe$(tag).boolean;
  };
  AbstractJsonTreeInput.prototype.decodeTaggedByte_11rb$ = function (tag) {
    return toByte(this.getValue_61zpoe$(tag).int);
  };
  AbstractJsonTreeInput.prototype.decodeTaggedShort_11rb$ = function (tag) {
    return toShort(this.getValue_61zpoe$(tag).int);
  };
  AbstractJsonTreeInput.prototype.decodeTaggedInt_11rb$ = function (tag) {
    return this.getValue_61zpoe$(tag).int;
  };
  AbstractJsonTreeInput.prototype.decodeTaggedLong_11rb$ = function (tag) {
    return this.getValue_61zpoe$(tag).long;
  };
  AbstractJsonTreeInput.prototype.decodeTaggedFloat_11rb$ = function (tag) {
    return this.getValue_61zpoe$(tag).float;
  };
  AbstractJsonTreeInput.prototype.decodeTaggedDouble_11rb$ = function (tag) {
    return this.getValue_61zpoe$(tag).double;
  };
  AbstractJsonTreeInput.prototype.decodeTaggedString_11rb$ = function (tag) {
    return this.getValue_61zpoe$(tag).content;
  };
  AbstractJsonTreeInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractJsonTreeInput', interfaces: [JsonInput, NamedValueDecoder]};
  function JsonPrimitiveInput(json, obj) {
    AbstractJsonTreeInput.call(this, json, obj);
    this.obj_dqj0pm$_0 = obj;
    this.pushTag_11rb$(PRIMITIVE_TAG);
  }
  Object.defineProperty(JsonPrimitiveInput.prototype, 'obj', {get: function () {
    return this.obj_dqj0pm$_0;
  }});
  JsonPrimitiveInput.prototype.currentElement_61zpoe$ = function (tag) {
    if (!(tag === PRIMITIVE_TAG)) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init(message.toString());
    }
    return this.obj;
  };
  JsonPrimitiveInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonPrimitiveInput', interfaces: [AbstractJsonTreeInput]};
  function JsonTreeInput(json, obj) {
    AbstractJsonTreeInput.call(this, json, obj);
    this.obj_piko0j$_0 = obj;
    this.position_0 = 0;
  }
  Object.defineProperty(JsonTreeInput.prototype, 'obj', {get: function () {
    return this.obj_piko0j$_0;
  }});
  JsonTreeInput.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    var tmp$;
    while (this.position_0 < desc.elementsCount) {
      var name = this.getTag_m47q6f$(desc, (tmp$ = this.position_0, this.position_0 = tmp$ + 1 | 0, tmp$));
      var $receiver = this.obj;
      var tmp$_0;
      if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(name)) {
        return this.position_0 - 1 | 0;
      }
    }
    return -1;
  };
  JsonTreeInput.prototype.currentElement_61zpoe$ = function (tag) {
    return getValue(this.obj, tag);
  };
  JsonTreeInput.prototype.endStructure_qatsm0$ = function (desc) {
    var tmp$, tmp$_0;
    if (!this.configuration_0.strictMode_8be2vx$ || Kotlin.isType(desc, PolymorphicClassDescriptor))
      return;
    var names = HashSet_init_1(desc.elementsCount);
    tmp$ = desc.elementsCount;
    for (var i = 0; i < tmp$; i++) {
      var element = desc.getElementName_za3lpa$(i);
      names.add_11rb$(element);
    }
    tmp$_0 = this.obj.keys.iterator();
    while (tmp$_0.hasNext()) {
      var key = tmp$_0.next();
      if (!names.contains_11rb$(key))
        throw jsonUnknownKeyException(-1, key);
    }
  };
  JsonTreeInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonTreeInput', interfaces: [AbstractJsonTreeInput]};
  function JsonTreeMapInput(json, obj) {
    JsonTreeInput.call(this, json, obj);
    this.obj_reg7od$_0 = obj;
    this.keys_0 = toList(this.obj.keys);
    this.size_0 = this.keys_0.size * 2 | 0;
    this.position_1 = -1;
  }
  Object.defineProperty(JsonTreeMapInput.prototype, 'obj', {get: function () {
    return this.obj_reg7od$_0;
  }});
  JsonTreeMapInput.prototype.elementName_3zr2iy$ = function (desc, index) {
    var i = index / 2 | 0;
    return this.keys_0.get_za3lpa$(i);
  };
  JsonTreeMapInput.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    while (this.position_1 < (this.size_0 - 1 | 0)) {
      this.position_1 = this.position_1 + 1 | 0;
      return this.position_1;
    }
    return -1;
  };
  JsonTreeMapInput.prototype.currentElement_61zpoe$ = function (tag) {
    return this.position_1 % 2 === 0 ? JsonLiteral_init_1(tag) : getValue(this.obj, tag);
  };
  JsonTreeMapInput.prototype.endStructure_qatsm0$ = function (desc) {
  };
  JsonTreeMapInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonTreeMapInput', interfaces: [JsonTreeInput]};
  function JsonTreeListInput(json, obj) {
    AbstractJsonTreeInput.call(this, json, obj);
    this.obj_el7e51$_0 = obj;
    this.size_0 = this.obj.content.size;
    this.currentIndex_0 = -1;
  }
  Object.defineProperty(JsonTreeListInput.prototype, 'obj', {get: function () {
    return this.obj_el7e51$_0;
  }});
  JsonTreeListInput.prototype.elementName_3zr2iy$ = function (desc, index) {
    return index.toString();
  };
  JsonTreeListInput.prototype.currentElement_61zpoe$ = function (tag) {
    return this.obj.get_za3lpa$(toInt(tag));
  };
  JsonTreeListInput.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    while (this.currentIndex_0 < (this.size_0 - 1 | 0)) {
      this.currentIndex_0 = this.currentIndex_0 + 1 | 0;
      return this.currentIndex_0;
    }
    return -1;
  };
  JsonTreeListInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonTreeListInput', interfaces: [AbstractJsonTreeInput]};
  function writeJson$lambda(closure$result) {
    return function (it) {
      closure$result.v = it;
      return Unit;
    };
  }
  function writeJson($receiver, value, serializer) {
    var result = {v: null};
    var encoder = new JsonTreeOutput($receiver, writeJson$lambda(result));
    encode_0(encoder, serializer, value);
    return result.v == null ? throwUPAE('result') : result.v;
  }
  function AbstractJsonTreeOutput(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.json_138ar7$_0 = json;
    this.nodeConsumer = nodeConsumer;
    this.configuration_0 = this.json.configuration_8be2vx$;
    this.writePolymorphic_0 = false;
  }
  Object.defineProperty(AbstractJsonTreeOutput.prototype, 'json', {get: function () {
    return this.json_138ar7$_0;
  }});
  Object.defineProperty(AbstractJsonTreeOutput.prototype, 'context', {get: function () {
    return this.json.context;
  }});
  AbstractJsonTreeOutput.prototype.encodeJson_qiw0cd$ = function (element) {
    this.encodeSerializableValue_tf03ej$(JsonElementSerializer_getInstance(), element);
  };
  AbstractJsonTreeOutput.prototype.shouldEncodeElementDefault_3zr2iy$ = function (desc, index) {
    return this.configuration_0.encodeDefaults_8be2vx$;
  };
  AbstractJsonTreeOutput.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedNull_11rb$ = function (tag) {
    this.putElement_zafu29$(tag, JsonNull_getInstance());
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedInt_dpg1yx$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonLiteral_init(value));
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedByte_19qe40$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonLiteral_init(value));
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedShort_veccj0$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonLiteral_init(value));
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedLong_19wkf8$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonLiteral_init(value));
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedFloat_vlf4p8$ = function (tag, value) {
    if (this.configuration_0.strictMode_8be2vx$ && !isFinite(value)) {
      throw InvalidFloatingPoint_0(value, tag, 'float');
    }
    this.putElement_zafu29$(tag, JsonLiteral_init(value));
  };
  AbstractJsonTreeOutput.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    if (this.currentTagOrNull != null || (!Kotlin.isType(serializer.descriptor.kind, PrimitiveKind) && serializer.descriptor.kind !== UnionKind$ENUM_KIND_getInstance())) {
      encodePolymorphically$break: do {
        var tmp$, tmp$_0, tmp$_1;
        if (!Kotlin.isType(serializer, AbstractPolymorphicSerializer) || this.json.configuration_8be2vx$.useArrayPolymorphism_8be2vx$) {
          serializer.serialize_awe97i$(this, value);
          break encodePolymorphically$break;
        }
        Kotlin.isType(tmp$ = serializer, AbstractPolymorphicSerializer) ? tmp$ : throwCCE();
        var actualSerializer = Kotlin.isType(tmp$_1 = serializer.findPolymorphicSerializer_7kuzo6$(this, Kotlin.isType(tmp$_0 = value, Any) ? tmp$_0 : throwCCE()), KSerializer) ? tmp$_1 : throwCCE();
        var kind = actualSerializer.descriptor.kind;
        checkKind(kind);
        this.writePolymorphic_0 = true;
        actualSerializer.serialize_awe97i$(this, value);
      }
       while (false);
    }
     else {
      var $receiver = new JsonPrimitiveOutput(this.json, this.nodeConsumer);
      $receiver.encodeSerializableValue_tf03ej$(serializer, value);
      $receiver.endEncode_qatsm0$(serializer.descriptor);
    }
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedDouble_e37ph5$ = function (tag, value) {
    if (this.configuration_0.strictMode_8be2vx$ && !isFinite_0(value)) {
      throw InvalidFloatingPoint_0(value, tag, 'double');
    }
    this.putElement_zafu29$(tag, JsonLiteral_init(value));
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedBoolean_iuyhfk$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonLiteral_init_0(value));
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedChar_19qo1q$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonLiteral_init_1(String.fromCharCode(value)));
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedString_l9l8mx$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonLiteral_init_1(value));
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedEnum_v153v3$ = function (tag, enumDescription, ordinal) {
    this.putElement_zafu29$(tag, JsonLiteral_init_1(enumDescription.getElementName_za3lpa$(ordinal)));
  };
  AbstractJsonTreeOutput.prototype.encodeTaggedValue_dpg7wc$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonLiteral_init_1(value.toString()));
  };
  function AbstractJsonTreeOutput$beginStructure$lambda(this$AbstractJsonTreeOutput) {
    return function (node) {
      this$AbstractJsonTreeOutput.putElement_zafu29$(this$AbstractJsonTreeOutput.currentTag, node);
      return Unit;
    };
  }
  AbstractJsonTreeOutput.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    var tmp$, tmp$_0;
    var consumer = this.currentTagOrNull == null ? this.nodeConsumer : AbstractJsonTreeOutput$beginStructure$lambda(this);
    tmp$ = desc.kind;
    if (equals(tmp$, StructureKind$LIST_getInstance()) || Kotlin.isType(tmp$, PolymorphicKind))
      tmp$_0 = new JsonTreeListOutput(this.json, consumer);
    else if (equals(tmp$, StructureKind$MAP_getInstance())) {
      var $receiver = this.json;
      var tmp$_1;
      var keyDescriptor = desc.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, UnionKind.ENUM_KIND)) {
        tmp$_1 = new JsonTreeMapOutput(this.json, consumer);
      }
       else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys_8be2vx$) {
        tmp$_1 = new JsonTreeListOutput(this.json, consumer);
      }
       else {
        throw JsonMapInvalidKeyKind(keyDescriptor);
      }
      tmp$_0 = tmp$_1;
    }
     else
      tmp$_0 = new JsonTreeOutput(this.json, consumer);
    var encoder = tmp$_0;
    if (this.writePolymorphic_0) {
      this.writePolymorphic_0 = false;
      encoder.putElement_zafu29$(this.configuration_0.classDiscriminator_8be2vx$, JsonPrimitive_2(desc.name));
    }
    return encoder;
  };
  AbstractJsonTreeOutput.prototype.endEncode_qatsm0$ = function (desc) {
    this.nodeConsumer(this.getCurrent());
  };
  AbstractJsonTreeOutput.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractJsonTreeOutput', interfaces: [JsonOutput, NamedValueEncoder]};
  var PRIMITIVE_TAG;
  function JsonPrimitiveOutput(json, nodeConsumer) {
    AbstractJsonTreeOutput.call(this, json, nodeConsumer);
    this.content_0 = null;
    this.pushTag_11rb$(PRIMITIVE_TAG);
  }
  JsonPrimitiveOutput.prototype.putElement_zafu29$ = function (key, element) {
    if (!(key === PRIMITIVE_TAG)) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(this.content_0 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init(message_0.toString());
    }
    this.content_0 = element;
  };
  JsonPrimitiveOutput.prototype.getCurrent = function () {
    var value = this.content_0;
    var requireNotNull$result;
    if (value == null) {
      var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
      throw IllegalArgumentException_init(message.toString());
    }
     else {
      requireNotNull$result = value;
    }
    return requireNotNull$result;
  };
  JsonPrimitiveOutput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonPrimitiveOutput', interfaces: [AbstractJsonTreeOutput]};
  function JsonTreeOutput(json, nodeConsumer) {
    AbstractJsonTreeOutput.call(this, json, nodeConsumer);
    this.content_0 = LinkedHashMap_init();
  }
  JsonTreeOutput.prototype.putElement_zafu29$ = function (key, element) {
    this.content_0.put_xwzc9p$(key, element);
  };
  JsonTreeOutput.prototype.getCurrent = function () {
    return new JsonObject(this.content_0);
  };
  JsonTreeOutput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonTreeOutput', interfaces: [AbstractJsonTreeOutput]};
  function JsonTreeMapOutput(json, nodeConsumer) {
    JsonTreeOutput.call(this, json, nodeConsumer);
    this.tag_5cp6c7$_0 = this.tag_5cp6c7$_0;
  }
  Object.defineProperty(JsonTreeMapOutput.prototype, 'tag_0', {get: function () {
    if (this.tag_5cp6c7$_0 == null)
      return throwUPAE('tag');
    return this.tag_5cp6c7$_0;
  }, set: function (tag) {
    this.tag_5cp6c7$_0 = tag;
  }});
  JsonTreeMapOutput.prototype.putElement_zafu29$ = function (key, element) {
    var tmp$;
    var idx = toInt(key);
    if (idx % 2 === 0) {
      if (Kotlin.isType(element, JsonPrimitive))
        tmp$ = element.content;
      else if (Kotlin.isType(element, JsonObject))
        throw JsonMapInvalidKeyKind(JsonObjectSerializer_getInstance().descriptor);
      else if (Kotlin.isType(element, JsonArray))
        throw JsonMapInvalidKeyKind(JsonArraySerializer_getInstance().descriptor);
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      this.tag_0 = tmp$;
    }
     else {
      var $receiver = this.content_0;
      var key_0 = this.tag_0;
      $receiver.put_xwzc9p$(key_0, element);
    }
  };
  JsonTreeMapOutput.prototype.getCurrent = function () {
    return new JsonObject(this.content_0);
  };
  JsonTreeMapOutput.prototype.shouldWriteElement_a5qihn$ = function (desc, tag, index) {
    return true;
  };
  JsonTreeMapOutput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonTreeMapOutput', interfaces: [JsonTreeOutput]};
  function JsonTreeListOutput(json, nodeConsumer) {
    AbstractJsonTreeOutput.call(this, json, nodeConsumer);
    this.array_0 = ArrayList_init_0();
  }
  JsonTreeListOutput.prototype.elementName_3zr2iy$ = function (desc, index) {
    return index.toString();
  };
  JsonTreeListOutput.prototype.shouldWriteElement_a5qihn$ = function (desc, tag, index) {
    return true;
  };
  JsonTreeListOutput.prototype.putElement_zafu29$ = function (key, element) {
    var idx = toInt(key);
    this.array_0.add_wxm5ur$(idx, element);
  };
  JsonTreeListOutput.prototype.getCurrent = function () {
    return new JsonArray(this.array_0);
  };
  JsonTreeListOutput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonTreeListOutput', interfaces: [AbstractJsonTreeOutput]};
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this);
    this.begin = toBoxedChar(begin);
    this.end = toBoxedChar(end);
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.beginTc = charToTokenClass(unboxChar(this.begin));
    this.endTc = charToTokenClass(unboxChar(this.end));
  }
  function WriteMode_initFields() {
    WriteMode_initFields = function () {
    };
    WriteMode$OBJ_instance = new WriteMode('OBJ', 0, BEGIN_OBJ, END_OBJ);
    WriteMode$LIST_instance = new WriteMode('LIST', 1, BEGIN_LIST, END_LIST);
    WriteMode$MAP_instance = new WriteMode('MAP', 2, BEGIN_OBJ, END_OBJ);
    WriteMode$POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, BEGIN_LIST, END_LIST);
  }
  var WriteMode$OBJ_instance;
  function WriteMode$OBJ_getInstance() {
    WriteMode_initFields();
    return WriteMode$OBJ_instance;
  }
  var WriteMode$LIST_instance;
  function WriteMode$LIST_getInstance() {
    WriteMode_initFields();
    return WriteMode$LIST_instance;
  }
  var WriteMode$MAP_instance;
  function WriteMode$MAP_getInstance() {
    WriteMode_initFields();
    return WriteMode$MAP_instance;
  }
  var WriteMode$POLY_OBJ_instance;
  function WriteMode$POLY_OBJ_getInstance() {
    WriteMode_initFields();
    return WriteMode$POLY_OBJ_instance;
  }
  WriteMode.$metadata$ = {kind: Kind_CLASS, simpleName: 'WriteMode', interfaces: [Enum]};
  function WriteMode$values() {
    return [WriteMode$OBJ_getInstance(), WriteMode$LIST_getInstance(), WriteMode$MAP_getInstance(), WriteMode$POLY_OBJ_getInstance()];
  }
  WriteMode.values = WriteMode$values;
  function WriteMode$valueOf(name) {
    switch (name) {
      case 'OBJ':
        return WriteMode$OBJ_getInstance();
      case 'LIST':
        return WriteMode$LIST_getInstance();
      case 'MAP':
        return WriteMode$MAP_getInstance();
      case 'POLY_OBJ':
        return WriteMode$POLY_OBJ_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.json.internal.WriteMode.' + name);
    }
  }
  WriteMode.valueOf_61zpoe$ = WriteMode$valueOf;
  function switchMode($receiver, desc) {
    var tmp$;
    tmp$ = desc.kind;
    if (Kotlin.isType(tmp$, PolymorphicKind))
      return WriteMode$POLY_OBJ_getInstance();
    else if (equals(tmp$, StructureKind$LIST_getInstance()))
      return WriteMode$LIST_getInstance();
    else if (equals(tmp$, StructureKind$MAP_getInstance())) {
      var tmp$_0;
      var keyDescriptor = desc.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, UnionKind.ENUM_KIND)) {
        tmp$_0 = WriteMode$MAP_getInstance();
      }
       else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys_8be2vx$) {
        tmp$_0 = WriteMode$LIST_getInstance();
      }
       else {
        throw JsonMapInvalidKeyKind(keyDescriptor);
      }
      return tmp$_0;
    }
     else
      return WriteMode$OBJ_getInstance();
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    if (baseSerializer === void 0)
      baseSerializer = null;
    this.baseClass_0 = baseClass;
    this.baseSerializer_0 = baseSerializer;
    this.subclasses_0 = ArrayList_init_0();
  }
  PolymorphicModuleBuilder.prototype.buildTo_5224ah$ = function (module_0) {
    if (this.baseSerializer_0 != null)
      module_0.registerPolymorphicSerializer_yca12w$(this.baseClass_0, this.baseClass_0, this.baseSerializer_0);
    var tmp$;
    tmp$ = this.subclasses_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var kclass = element.component1(), serializer = element.component2();
      var tmp$_0, tmp$_1;
      module_0.registerPolymorphicSerializer_yca12w$(this.baseClass_0, Kotlin.isType(tmp$_0 = kclass, KClass) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = serializer, KSerializer) ? tmp$_1 : throwCCE());
    }
  };
  PolymorphicModuleBuilder.prototype.addSubclass_g8f9ns$ = function (subclass, serializer) {
    this.subclasses_0.add_11rb$(to(subclass, serializer));
  };
  PolymorphicModuleBuilder.prototype.addSubclass_97auzv$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.modules.PolymorphicModuleBuilder.addSubclass_97auzv$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, serializer) {
      this.addSubclass_g8f9ns$(getKClass(T_0), serializer);
    };
  }));
  PolymorphicModuleBuilder.prototype.addSubclass_n8yg2x$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.modules.PolymorphicModuleBuilder.addSubclass_n8yg2x$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var serializer = _.kotlinx.serialization.serializer_1yb8b7$;
    return function (T_0, isT) {
      this.addSubclass_g8f9ns$(getKClass(T_0), serializer(getKClass(T_0)));
    };
  }));
  PolymorphicModuleBuilder.prototype.with_kmpi2j$ = function ($receiver, serializer) {
    this.addSubclass_g8f9ns$($receiver, serializer);
  };
  PolymorphicModuleBuilder.prototype.changeBase_a3p3f0$ = function (newBaseClass, newBaseClassSerializer) {
    if (newBaseClassSerializer === void 0)
      newBaseClassSerializer = null;
    var newModule = new PolymorphicModuleBuilder(newBaseClass, newBaseClassSerializer);
    if (this.baseSerializer_0 != null) {
      var tmp$, tmp$_0;
      newModule.addSubclass_g8f9ns$(Kotlin.isType(tmp$ = this.baseClass_0, KClass) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.baseSerializer_0, KSerializer) ? tmp$_0 : throwCCE());
    }
    var tmp$_1;
    tmp$_1 = this.subclasses_0.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var k = element.component1(), v = element.component2();
      var tmp$_2, tmp$_3;
      newModule.addSubclass_g8f9ns$(Kotlin.isType(tmp$_2 = k, KClass) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = v, KSerializer) ? tmp$_3 : throwCCE());
    }
    return newModule;
  };
  PolymorphicModuleBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'PolymorphicModuleBuilder', interfaces: []};
  function SerialModule() {
  }
  SerialModule.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SerialModule', interfaces: []};
  function EmptyModule() {
    EmptyModule_instance = this;
  }
  EmptyModule.prototype.getContextual_lmshww$ = function (kclass) {
    return null;
  };
  EmptyModule.prototype.getPolymorphic_b1ce0a$ = function (baseClass, value) {
    return null;
  };
  EmptyModule.prototype.getPolymorphic_6xtsla$ = function (baseClass, serializedClassName) {
    return null;
  };
  EmptyModule.prototype.dumpTo_247rdd$ = function (collector) {
  };
  EmptyModule.$metadata$ = {kind: Kind_OBJECT, simpleName: 'EmptyModule', interfaces: [SerialModule]};
  var EmptyModule_instance = null;
  function EmptyModule_getInstance() {
    if (EmptyModule_instance === null) {
      new EmptyModule();
    }
    return EmptyModule_instance;
  }
  function serializersModuleOf$lambda_0(closure$map) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$map.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var kclass = element.key;
        var serializer = element.value;
        var tmp$_0, tmp$_1;
        $receiver.contextual_cfhkba$(Kotlin.isType(tmp$_0 = kclass, KClass) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = serializer, KSerializer) ? tmp$_1 : throwCCE());
      }
      return Unit;
    };
  }
  function serializersModuleOf_0(map) {
    return SerializersModule(serializersModuleOf$lambda_0(map));
  }
  function SerializersModule(buildAction) {
    var builder = new SerializersModuleBuilder(new SerialModuleImpl());
    buildAction(builder);
    return builder.impl_8be2vx$;
  }
  function SerializersModuleBuilder(impl) {
    this.impl_8be2vx$ = impl;
  }
  SerializersModuleBuilder.prototype.contextual_cfhkba$ = function (kClass, serializer) {
    this.impl_8be2vx$.registerSerializer_z3bkzg$(kClass, serializer);
  };
  SerializersModuleBuilder.prototype.polymorphic_kfyidi$ = function (baseClass, actualClass, actualSerializer) {
    this.impl_8be2vx$.registerPolymorphicSerializer_yca12w$(baseClass, actualClass, actualSerializer);
  };
  SerializersModuleBuilder.prototype.include_stpyu4$ = function (other) {
    other.dumpTo_247rdd$(this);
  };
  function SerializersModuleBuilder$polymorphic$lambda($receiver) {
    return Unit;
  }
  SerializersModuleBuilder.prototype.polymorphic_v5citj$ = function (baseClass, baseSerializer, buildAction) {
    if (baseSerializer === void 0)
      baseSerializer = null;
    if (buildAction === void 0)
      buildAction = SerializersModuleBuilder$polymorphic$lambda;
    var builder = new PolymorphicModuleBuilder(baseClass, baseSerializer);
    buildAction(builder);
    builder.buildTo_5224ah$(this.impl_8be2vx$);
  };
  SerializersModuleBuilder.prototype.polymorphic_czluys$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-runtime.kotlinx.serialization.modules.SerializersModuleBuilder.polymorphic_czluys$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getKClass = Kotlin.getKClass;
    function SerializersModuleBuilder$polymorphic$lambda($receiver) {
      return Unit;
    }
    return function (Base_0, isBase, baseSerializer, buildAction) {
      if (baseSerializer === void 0)
        baseSerializer = null;
      if (buildAction === void 0)
        buildAction = SerializersModuleBuilder$polymorphic$lambda;
      this.polymorphic_v5citj$(getKClass(Base_0), baseSerializer, buildAction);
    };
  }));
  function SerializersModuleBuilder$polymorphic$lambda_0($receiver) {
    return Unit;
  }
  SerializersModuleBuilder.prototype.polymorphic_myr6su$ = function (baseClass, baseClasses, buildAction) {
    if (buildAction === void 0)
      buildAction = SerializersModuleBuilder$polymorphic$lambda_0;
    var tmp$, tmp$_0, tmp$_1;
    var builder = new PolymorphicModuleBuilder(Kotlin.isType(tmp$ = baseClass, KClass) ? tmp$ : throwCCE(), null);
    buildAction(builder);
    builder.buildTo_5224ah$(this.impl_8be2vx$);
    for (tmp$_0 = 0; tmp$_0 !== baseClasses.length; ++tmp$_0) {
      var base = baseClasses[tmp$_0];
      builder.changeBase_a3p3f0$(Kotlin.isType(tmp$_1 = base, KClass) ? tmp$_1 : throwCCE(), null).buildTo_5224ah$(this.impl_8be2vx$);
    }
  };
  SerializersModuleBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerializersModuleBuilder', interfaces: [SerialModuleCollector]};
  function SerialModuleCollector() {
  }
  SerialModuleCollector.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SerialModuleCollector', interfaces: []};
  function getContextualOrDefault($receiver, klass) {
    var tmp$;
    return (tmp$ = $receiver.getContextual_lmshww$(klass)) != null ? tmp$ : serializer(klass);
  }
  function plus$lambda(this$plus, closure$other) {
    return function ($receiver) {
      $receiver.include_stpyu4$(this$plus);
      $receiver.include_stpyu4$(closure$other);
      return Unit;
    };
  }
  function plus($receiver, other) {
    return SerializersModule(plus$lambda($receiver, other));
  }
  function SerialModuleImpl() {
    this.classMap_0 = HashMap_init();
    this.polyMap_0 = HashMap_init();
    this.inverseClassNameMap_0 = HashMap_init();
  }
  SerialModuleImpl.prototype.registerSerializer_z3bkzg$ = function (forClass, serializer, allowOverwrite) {
    if (allowOverwrite === void 0)
      allowOverwrite = false;
    var tmp$ = !allowOverwrite;
    if (tmp$) {
      var $receiver = this.classMap_0;
      var tmp$_0;
      tmp$ = (Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(forClass);
    }
    if (tmp$)
      throw SerializerAlreadyRegisteredException_init_0(forClass);
    this.classMap_0.put_xwzc9p$(forClass, serializer);
  };
  SerialModuleImpl.prototype.registerPolymorphicSerializer_yca12w$ = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    if (allowOverwrite === void 0)
      allowOverwrite = false;
    var name = concreteSerializer.descriptor.name;
    var $receiver = this.polyMap_0;
    var tmp$;
    var value = $receiver.get_11rb$(baseClass);
    if (value == null) {
      var answer = HashMap_init();
      $receiver.put_xwzc9p$(baseClass, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var baseClassMap = tmp$;
    var tmp$_0 = !allowOverwrite;
    if (tmp$_0) {
      var tmp$_1;
      tmp$_0 = (Kotlin.isType(tmp$_1 = baseClassMap, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(concreteClass);
    }
    if (tmp$_0)
      throw SerializerAlreadyRegisteredException_init(baseClass, concreteClass);
    baseClassMap.put_xwzc9p$(concreteClass, concreteSerializer);
    var $receiver_0 = this.inverseClassNameMap_0;
    var tmp$_2;
    var value_0 = $receiver_0.get_11rb$(baseClass);
    if (value_0 == null) {
      var answer_0 = HashMap_init();
      $receiver_0.put_xwzc9p$(baseClass, answer_0);
      tmp$_2 = answer_0;
    }
     else {
      tmp$_2 = value_0;
    }
    tmp$_2.put_xwzc9p$(name, concreteSerializer);
  };
  SerialModuleImpl.prototype.getPolymorphic_b1ce0a$ = function (baseClass, value) {
    var tmp$, tmp$_0, tmp$_1;
    if (!isInstanceOf(value, baseClass))
      return null;
    if ((tmp$ = (baseClass != null ? baseClass.equals(PrimitiveClasses$anyClass) : null) ? StandardSubtypesOfAny_getInstance().getSubclassSerializer_kcmwxo$(value) : null) != null) {
      var tmp$_2;
      return Kotlin.isType(tmp$_2 = tmp$, KSerializer) ? tmp$_2 : throwCCE();
    }
    return Kotlin.isType(tmp$_1 = (tmp$_0 = this.polyMap_0.get_11rb$(baseClass)) != null ? tmp$_0.get_11rb$(Kotlin.getKClassFromExpression(value)) : null, KSerializer) ? tmp$_1 : null;
  };
  SerialModuleImpl.prototype.getPolymorphic_6xtsla$ = function (baseClass, serializedClassName) {
    var tmp$, tmp$_0, tmp$_1;
    if ((tmp$ = (baseClass != null ? baseClass.equals(PrimitiveClasses$anyClass) : null) ? StandardSubtypesOfAny_getInstance().getDefaultDeserializer_y4putb$(serializedClassName) : null) != null) {
      var tmp$_2;
      return Kotlin.isType(tmp$_2 = tmp$, KSerializer) ? tmp$_2 : throwCCE();
    }
    return Kotlin.isType(tmp$_1 = (tmp$_0 = this.inverseClassNameMap_0.get_11rb$(baseClass)) != null ? tmp$_0.get_11rb$(serializedClassName) : null, KSerializer) ? tmp$_1 : null;
  };
  SerialModuleImpl.prototype.getContextual_lmshww$ = function (kclass) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.classMap_0.get_11rb$(kclass), KSerializer) ? tmp$ : null;
  };
  SerialModuleImpl.prototype.dumpTo_247rdd$ = function (collector) {
    var tmp$;
    tmp$ = this.classMap_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var kclass = element.key;
      var serial = element.value;
      var tmp$_0, tmp$_1;
      collector.contextual_cfhkba$(Kotlin.isType(tmp$_0 = kclass, KClass) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = serial, KSerializer) ? tmp$_1 : throwCCE());
    }
    var tmp$_2;
    tmp$_2 = this.polyMap_0.entries.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var baseClass = element_0.key;
      var classMap = element_0.value;
      var tmp$_3;
      tmp$_3 = classMap.entries.iterator();
      while (tmp$_3.hasNext()) {
        var element_1 = tmp$_3.next();
        var actualClass = element_1.key;
        var serializer = element_1.value;
        var tmp$_4, tmp$_5, tmp$_6;
        collector.polymorphic_kfyidi$(Kotlin.isType(tmp$_4 = baseClass, KClass) ? tmp$_4 : throwCCE(), Kotlin.isType(tmp$_5 = actualClass, KClass) ? tmp$_5 : throwCCE(), Kotlin.isType(tmp$_6 = serializer, KSerializer) ? tmp$_6 : throwCCE());
      }
    }
  };
  SerialModuleImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerialModuleImpl', interfaces: [SerialModule]};
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init(msg, this);
    this.name = 'SerializerAlreadyRegisteredException';
  }
  SerializerAlreadyRegisteredException.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerializerAlreadyRegisteredException', interfaces: [IllegalArgumentException]};
  function SerializerAlreadyRegisteredException_init(baseClass, concreteClass, $this) {
    $this = $this || Object.create(SerializerAlreadyRegisteredException.prototype);
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + concreteClass + ' already registered in the scope of ' + baseClass);
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_0(forClass, $this) {
    $this = $this || Object.create(SerializerAlreadyRegisteredException.prototype);
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + forClass + ' already registered in this module');
    return $this;
  }
  function StandardSubtypesOfAny() {
    StandardSubtypesOfAny_instance = this;
    this.map_0 = mapOf([to(getKClass(List), new ArrayListSerializer(get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)))), to(getKClass(LinkedHashSet), new LinkedHashSetSerializer(get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)))), to(getKClass(HashSet), new HashSetSerializer(get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)))), to(getKClass(Set), new LinkedHashSetSerializer(get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)))), to(getKClass(LinkedHashMap), new LinkedHashMapSerializer(get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)), get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)))), to(getKClass(HashMap), new HashMapSerializer(get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)), get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)))), to(getKClass(Map), new LinkedHashMapSerializer(get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)), get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)))), to(getKClass(Map$Entry), new MapEntrySerializer(get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)), get_nullable(new PolymorphicSerializer(PrimitiveClasses$anyClass)))), to(PrimitiveClasses$stringClass, StringSerializer_getInstance()), to(getKClass(Char), CharSerializer_getInstance()), to(PrimitiveClasses$intClass, IntSerializer_getInstance()), to(PrimitiveClasses$byteClass, ByteSerializer_getInstance()), to(PrimitiveClasses$shortClass, ShortSerializer_getInstance()), to(getKClass(Long), LongSerializer_getInstance()), to(PrimitiveClasses$doubleClass, DoubleSerializer_getInstance()), to(PrimitiveClasses$floatClass, FloatSerializer_getInstance()), to(PrimitiveClasses$booleanClass, BooleanSerializer_getInstance()), to(getKClass(Object.getPrototypeOf(kotlin.Unit).constructor), UnitSerializer_getInstance())]);
    var $receiver = this.map_0;
    var destination = LinkedHashMap_init_0(mapCapacity($receiver.size));
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = destination.put_xwzc9p$;
      var s = element.value;
      tmp$_0.call(destination, s.descriptor.name, element.value);
    }
    this.deserializingMap_0 = destination;
  }
  StandardSubtypesOfAny.prototype.getSubclassSerializer_kcmwxo$ = function (objectToCheck) {
    var tmp$;
    tmp$ = this.map_0.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
      if (isInstanceOf(objectToCheck, k))
        return v;
    }
    return null;
  };
  StandardSubtypesOfAny.prototype.getDefaultDeserializer_y4putb$ = function (serializedClassName) {
    return this.deserializingMap_0.get_11rb$(serializedClassName);
  };
  StandardSubtypesOfAny.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StandardSubtypesOfAny', interfaces: []};
  var StandardSubtypesOfAny_instance = null;
  function StandardSubtypesOfAny_getInstance() {
    if (StandardSubtypesOfAny_instance === null) {
      new StandardSubtypesOfAny();
    }
    return StandardSubtypesOfAny_instance;
  }
  var ProtoBuf$Varint_instance = null;
  var ProtoBuf$Companion_instance = null;
  var ProtoNumberType$DEFAULT_instance;
  var ProtoNumberType$SIGNED_instance;
  var ProtoNumberType$FIXED_instance;
  var ByteBuffer$Companion_instance = null;
  var InputStream$Companion_instance = null;
  var MAX_SAFE_INTEGER;
  function compiledSerializer($receiver) {
    var tmp$, tmp$_0;
    return Kotlin.isType(tmp$_0 = (tmp$ = get_js($receiver).Companion) != null ? tmp$.serializer() : null, KSerializer) ? tmp$_0 : null;
  }
  function isInstanceOf($receiver, kclass) {
    return kclass.isInstance_s8jyv4$($receiver);
  }
  function simpleName_0($receiver) {
    return $receiver.simpleName;
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$serialization = package$kotlinx.serialization || (package$kotlinx.serialization = {});
  package$serialization.Encoder = Encoder;
  package$serialization.CompositeEncoder = CompositeEncoder;
  package$serialization.Decoder = Decoder;
  Object.defineProperty(CompositeDecoder, 'Companion', {get: CompositeDecoder$Companion_getInstance});
  package$serialization.CompositeDecoder = CompositeDecoder;
  package$serialization.ContextSerializer = ContextSerializer;
  package$serialization.SerialDescriptor = SerialDescriptor;
  package$serialization.SerializationStrategy = SerializationStrategy;
  package$serialization.DeserializationStrategy = DeserializationStrategy;
  Object.defineProperty(UpdateMode, 'BANNED', {get: UpdateMode$BANNED_getInstance});
  Object.defineProperty(UpdateMode, 'OVERWRITE', {get: UpdateMode$OVERWRITE_getInstance});
  Object.defineProperty(UpdateMode, 'UPDATE', {get: UpdateMode$UPDATE_getInstance});
  package$serialization.UpdateMode = UpdateMode;
  package$serialization.KSerializer = KSerializer;
  package$serialization.serializer_1yb8b7$ = serializer;
  package$serialization.encode_dt3ugd$ = encode_0;
  package$serialization.decode_cmswi7$ = decode_0;
  package$serialization.SerialKind = SerialKind;
  Object.defineProperty(PrimitiveKind, 'INT', {get: PrimitiveKind$INT_getInstance});
  Object.defineProperty(PrimitiveKind, 'UNIT', {get: PrimitiveKind$UNIT_getInstance});
  Object.defineProperty(PrimitiveKind, 'BOOLEAN', {get: PrimitiveKind$BOOLEAN_getInstance});
  Object.defineProperty(PrimitiveKind, 'BYTE', {get: PrimitiveKind$BYTE_getInstance});
  Object.defineProperty(PrimitiveKind, 'SHORT', {get: PrimitiveKind$SHORT_getInstance});
  Object.defineProperty(PrimitiveKind, 'LONG', {get: PrimitiveKind$LONG_getInstance});
  Object.defineProperty(PrimitiveKind, 'FLOAT', {get: PrimitiveKind$FLOAT_getInstance});
  Object.defineProperty(PrimitiveKind, 'DOUBLE', {get: PrimitiveKind$DOUBLE_getInstance});
  Object.defineProperty(PrimitiveKind, 'CHAR', {get: PrimitiveKind$CHAR_getInstance});
  Object.defineProperty(PrimitiveKind, 'STRING', {get: PrimitiveKind$STRING_getInstance});
  package$serialization.PrimitiveKind = PrimitiveKind;
  Object.defineProperty(StructureKind, 'CLASS', {get: StructureKind$CLASS_getInstance});
  Object.defineProperty(StructureKind, 'LIST', {get: StructureKind$LIST_getInstance});
  Object.defineProperty(StructureKind, 'MAP', {get: StructureKind$MAP_getInstance});
  package$serialization.StructureKind = StructureKind;
  Object.defineProperty(UnionKind, 'OBJECT', {get: UnionKind$OBJECT_getInstance});
  Object.defineProperty(UnionKind, 'ENUM_KIND', {get: UnionKind$ENUM_KIND_getInstance});
  Object.defineProperty(UnionKind, 'Companion', {get: UnionKind$Companion_getInstance});
  package$serialization.UnionKind = UnionKind;
  Object.defineProperty(PolymorphicKind, 'SEALED', {get: PolymorphicKind$SEALED_getInstance});
  Object.defineProperty(PolymorphicKind, 'OPEN', {get: PolymorphicKind$OPEN_getInstance});
  package$serialization.PolymorphicKind = PolymorphicKind;
  package$serialization.ElementValueEncoder = ElementValueEncoder;
  package$serialization.ElementValueDecoder = ElementValueDecoder;
  package$serialization.SerializationException = SerializationException;
  package$serialization.MissingFieldException = MissingFieldException;
  package$serialization.UnknownFieldException = UnknownFieldException;
  package$serialization.UpdateNotSupportedException = UpdateNotSupportedException;
  var package$modules = package$serialization.modules || (package$serialization.modules = {});
  package$modules.getContextualOrDefault_6za9kt$ = getContextualOrDefault;
  Object.defineProperty(package$serialization, 'PolymorphicClassDescriptor', {get: PolymorphicClassDescriptor_getInstance});
  package$serialization.PolymorphicSerializer = PolymorphicSerializer;
  package$serialization.SerialFormat = SerialFormat;
  package$serialization.AbstractSerialFormat = AbstractSerialFormat;
  package$serialization.BinaryFormat = BinaryFormat;
  package$serialization.StringFormat = StringFormat;
  var package$internal = package$serialization.internal || (package$serialization.internal = {});
  package$serialization.elementDescriptors_xzf193$ = elementDescriptors;
  package$serialization.elementNames_xzf193$ = elementNames;
  package$serialization.getElementIndexOrThrow_27vawp$ = getElementIndexOrThrow;
  package$serialization.TaggedEncoder = TaggedEncoder;
  package$serialization.NamedValueEncoder = NamedValueEncoder;
  package$serialization.TaggedDecoder = TaggedDecoder;
  package$serialization.NamedValueDecoder = NamedValueDecoder;
  package$internal.AbstractPolymorphicSerializer = AbstractPolymorphicSerializer;
  package$internal.ListLikeDescriptor = ListLikeDescriptor;
  package$internal.MapLikeDescriptor = MapLikeDescriptor;
  package$internal.ArrayListClassDesc = ArrayListClassDesc;
  package$internal.NamedListClassDescriptor = NamedListClassDescriptor;
  package$internal.LinkedHashSetClassDesc = LinkedHashSetClassDesc;
  package$internal.HashSetClassDesc = HashSetClassDesc;
  package$internal.NamedMapClassDescriptor = NamedMapClassDescriptor;
  package$internal.LinkedHashMapClassDesc = LinkedHashMapClassDesc;
  package$internal.HashMapClassDesc = HashMapClassDesc;
  package$internal.AbstractCollectionSerializer = AbstractCollectionSerializer;
  package$internal.ListLikeSerializer = ListLikeSerializer;
  package$internal.MapLikeSerializer = MapLikeSerializer;
  package$internal.ArrayListSerializer = ArrayListSerializer;
  package$internal.LinkedHashSetSerializer = LinkedHashSetSerializer;
  package$internal.HashSetSerializer = HashSetSerializer;
  package$internal.LinkedHashMapSerializer = LinkedHashMapSerializer;
  package$internal.HashMapSerializer = HashMapSerializer;
  package$internal.EnumDescriptor = EnumDescriptor;
  package$internal.CommonEnumSerializer = CommonEnumSerializer;
  package$internal.GeneratedSerializer = GeneratedSerializer;
  package$internal.get_nullable_2418p6$ = get_nullable;
  package$internal.NullableSerializer = NullableSerializer;
  package$internal.ObjectSerializer = ObjectSerializer;
  package$internal.PrimitiveDescriptor = PrimitiveDescriptor;
  Object.defineProperty(package$internal, 'IntDescriptor', {get: IntDescriptor_getInstance});
  Object.defineProperty(package$internal, 'UnitDescriptor', {get: UnitDescriptor_getInstance});
  Object.defineProperty(package$internal, 'BooleanDescriptor', {get: BooleanDescriptor_getInstance});
  Object.defineProperty(package$internal, 'ByteDescriptor', {get: ByteDescriptor_getInstance});
  Object.defineProperty(package$internal, 'ShortDescriptor', {get: ShortDescriptor_getInstance});
  Object.defineProperty(package$internal, 'LongDescriptor', {get: LongDescriptor_getInstance});
  Object.defineProperty(package$internal, 'FloatDescriptor', {get: FloatDescriptor_getInstance});
  Object.defineProperty(package$internal, 'DoubleDescriptor', {get: DoubleDescriptor_getInstance});
  Object.defineProperty(package$internal, 'CharDescriptor', {get: CharDescriptor_getInstance});
  Object.defineProperty(package$internal, 'StringDescriptor', {get: StringDescriptor_getInstance});
  Object.defineProperty(package$internal, 'UnitSerializer', {get: UnitSerializer_getInstance});
  Object.defineProperty(package$internal, 'BooleanSerializer', {get: BooleanSerializer_getInstance});
  Object.defineProperty(package$internal, 'ByteSerializer', {get: ByteSerializer_getInstance});
  Object.defineProperty(package$internal, 'ShortSerializer', {get: ShortSerializer_getInstance});
  Object.defineProperty(package$internal, 'IntSerializer', {get: IntSerializer_getInstance});
  Object.defineProperty(package$internal, 'LongSerializer', {get: LongSerializer_getInstance});
  Object.defineProperty(package$internal, 'FloatSerializer', {get: FloatSerializer_getInstance});
  Object.defineProperty(package$internal, 'DoubleSerializer', {get: DoubleSerializer_getInstance});
  Object.defineProperty(package$internal, 'CharSerializer', {get: CharSerializer_getInstance});
  Object.defineProperty(package$internal, 'StringSerializer', {get: StringSerializer_getInstance});
  package$internal.defaultSerializer_1yb8b7$ = defaultSerializer;
  package$internal.SerialClassDescImpl = SerialClassDescImpl;
  package$internal.KeyValueSerializer = KeyValueSerializer;
  package$internal.MapEntrySerializer = MapEntrySerializer;
  package$internal.MapEntry = MapEntry;
  Object.defineProperty(package$internal, 'MapEntryClassDesc', {get: MapEntryClassDesc_getInstance});
  package$internal.TripleSerializer = TripleSerializer;
  Object.defineProperty(Json, 'Companion', {get: Json$Companion_getInstance});
  var package$json = package$serialization.json || (package$serialization.json = {});
  package$json.Json = Json;
  Object.defineProperty(JsonConfiguration, 'Companion', {get: JsonConfiguration$Companion_getInstance});
  package$json.JsonConfiguration = JsonConfiguration;
  Object.defineProperty(JsonElement, 'Companion', {get: JsonElement$Companion_getInstance});
  package$json.JsonElement = JsonElement;
  Object.defineProperty(JsonPrimitive, 'Companion', {get: JsonPrimitive$Companion_getInstance});
  package$json.JsonPrimitive = JsonPrimitive;
  Object.defineProperty(JsonLiteral, 'Companion', {get: JsonLiteral$Companion_getInstance});
  package$json.JsonLiteral_init_3p81yu$ = JsonLiteral_init;
  package$json.JsonLiteral_init_6taknv$ = JsonLiteral_init_0;
  package$json.JsonLiteral_init_61zpoe$ = JsonLiteral_init_1;
  package$json.JsonLiteral = JsonLiteral;
  Object.defineProperty(package$json, 'JsonNull', {get: JsonNull_getInstance});
  package$json.unexpectedJson_puj7f4$ = unexpectedJson;
  Object.defineProperty(JsonObject, 'Companion', {get: JsonObject$Companion_getInstance});
  package$json.JsonObject = JsonObject;
  Object.defineProperty(JsonArray, 'Companion', {get: JsonArray$Companion_getInstance});
  package$json.JsonArray = JsonArray;
  Object.defineProperty(package$json, 'JsonElementSerializer', {get: JsonElementSerializer_getInstance});
  Object.defineProperty(package$json, 'JsonPrimitiveSerializer', {get: JsonPrimitiveSerializer_getInstance});
  Object.defineProperty(package$json, 'JsonNullSerializer', {get: JsonNullSerializer_getInstance});
  Object.defineProperty(package$json, 'JsonLiteralSerializer', {get: JsonLiteralSerializer_getInstance});
  Object.defineProperty(package$json, 'JsonObjectSerializer', {get: JsonObjectSerializer_getInstance});
  Object.defineProperty(package$json, 'JsonArraySerializer', {get: JsonArraySerializer_getInstance});
  package$json.JsonPrimitive_pdl1vj$ = JsonPrimitive_2;
  package$json.get_content_u3sd3g$ = get_content;
  package$json.InvalidFloatingPoint_qwibp1$ = InvalidFloatingPoint;
  package$json.InvalidFloatingPoint_x0xb19$ = InvalidFloatingPoint_0;
  package$json.jsonUnknownKeyException_f0n09d$ = jsonUnknownKeyException;
  package$json.JsonMapInvalidKeyKind_4b8fhx$ = JsonMapInvalidKeyKind;
  package$json.JsonException = JsonException;
  package$json.JsonDecodingException = JsonDecodingException;
  package$json.JsonEncodingException = JsonEncodingException;
  package$json.JsonInput = JsonInput;
  package$json.JsonOutput = JsonOutput;
  var package$internal_0 = package$json.internal || (package$json.internal = {});
  package$internal_0.JsonParser = JsonParser;
  Object.defineProperty(package$internal_0, 'EscapeCharMappings', {get: EscapeCharMappings_getInstance});
  package$internal_0.charToTokenClass_8e8zqy$ = charToTokenClass;
  package$internal_0.escapeToChar_kcn2v3$ = escapeToChar;
  package$internal_0.JsonReader = JsonReader;
  package$internal_0.checkKind_y7bnyb$ = checkKind;
  package$internal_0.decodeSerializableValuePolymorphic_ojldma$ = decodeSerializableValuePolymorphic;
  package$internal_0.StreamingJsonInput = StreamingJsonInput;
  StreamingJsonOutput.Composer = StreamingJsonOutput$Composer;
  package$internal_0.StreamingJsonOutput_init_ek5ogp$ = StreamingJsonOutput_init;
  package$internal_0.StreamingJsonOutput = StreamingJsonOutput;
  package$internal_0.printQuoted_jigvc$ = printQuoted;
  package$internal_0.toBooleanStrict_7efafi$ = toBooleanStrict;
  package$internal_0.toBooleanStrictOrNull_7efafi$ = toBooleanStrictOrNull;
  package$internal_0.shouldBeQuoted_y4putb$ = shouldBeQuoted;
  package$internal_0.readJson_ijhaef$ = readJson;
  package$internal_0.writeJson_4dixew$ = writeJson;
  Object.defineProperty(WriteMode, 'OBJ', {get: WriteMode$OBJ_getInstance});
  Object.defineProperty(WriteMode, 'LIST', {get: WriteMode$LIST_getInstance});
  Object.defineProperty(WriteMode, 'MAP', {get: WriteMode$MAP_getInstance});
  Object.defineProperty(WriteMode, 'POLY_OBJ', {get: WriteMode$POLY_OBJ_getInstance});
  package$internal_0.WriteMode = WriteMode;
  package$internal_0.switchMode_2zz6bv$ = switchMode;
  package$modules.PolymorphicModuleBuilder = PolymorphicModuleBuilder;
  package$modules.SerialModule = SerialModule;
  Object.defineProperty(package$modules, 'EmptyModule', {get: EmptyModule_getInstance});
  package$modules.serializersModuleOf_azm104$ = serializersModuleOf_0;
  package$modules.SerializersModule_q4tcel$ = SerializersModule;
  package$modules.SerializersModuleBuilder = SerializersModuleBuilder;
  package$modules.SerialModuleCollector = SerialModuleCollector;
  package$modules.plus_7n7cf$ = plus;
  package$modules.SerialModuleImpl = SerialModuleImpl;
  package$modules.SerializerAlreadyRegisteredException_init_gfgaic$ = SerializerAlreadyRegisteredException_init;
  package$modules.SerializerAlreadyRegisteredException_init_xo1ogr$ = SerializerAlreadyRegisteredException_init_0;
  package$modules.SerializerAlreadyRegisteredException = SerializerAlreadyRegisteredException;
  Object.defineProperty(package$modules, 'StandardSubtypesOfAny', {get: StandardSubtypesOfAny_getInstance});
  package$serialization.compiledSerializer_1yb8b7$ = compiledSerializer;
  package$serialization.isInstanceOf_ofcvxk$ = isInstanceOf;
  package$serialization.simpleName_beh9s$ = simpleName_0;
  Object.defineProperty(SerialClassDescImpl.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  ContextSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ElementValueEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  ElementValueEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  ElementValueEncoder.prototype.beginCollection_gly1x5$ = Encoder.prototype.beginCollection_gly1x5$;
  ElementValueEncoder.prototype.endStructure_qatsm0$ = CompositeEncoder.prototype.endStructure_qatsm0$;
  ElementValueEncoder.prototype.shouldEncodeElementDefault_3zr2iy$ = CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$;
  ElementValueDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  ElementValueDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  ElementValueDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  ElementValueDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  ElementValueDecoder.prototype.endStructure_qatsm0$ = CompositeDecoder.prototype.endStructure_qatsm0$;
  ElementValueDecoder.prototype.decodeCollectionSize_qatsm0$ = CompositeDecoder.prototype.decodeCollectionSize_qatsm0$;
  TaggedEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  TaggedEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  TaggedEncoder.prototype.beginCollection_gly1x5$ = Encoder.prototype.beginCollection_gly1x5$;
  TaggedEncoder.prototype.shouldEncodeElementDefault_3zr2iy$ = CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$;
  TaggedDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  TaggedDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  TaggedDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  TaggedDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  TaggedDecoder.prototype.endStructure_qatsm0$ = CompositeDecoder.prototype.endStructure_qatsm0$;
  TaggedDecoder.prototype.decodeCollectionSize_qatsm0$ = CompositeDecoder.prototype.decodeCollectionSize_qatsm0$;
  AbstractPolymorphicSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  BinaryFormat.prototype.install_stpyu4$ = SerialFormat.prototype.install_stpyu4$;
  StringFormat.prototype.install_stpyu4$ = SerialFormat.prototype.install_stpyu4$;
  ListLikeDescriptor.prototype.getEntityAnnotations = SerialDescriptor.prototype.getEntityAnnotations;
  ListLikeDescriptor.prototype.getElementAnnotations_za3lpa$ = SerialDescriptor.prototype.getElementAnnotations_za3lpa$;
  Object.defineProperty(ListLikeDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  ListLikeDescriptor.prototype.isElementOptional_za3lpa$ = SerialDescriptor.prototype.isElementOptional_za3lpa$;
  MapLikeDescriptor.prototype.getEntityAnnotations = SerialDescriptor.prototype.getEntityAnnotations;
  MapLikeDescriptor.prototype.getElementAnnotations_za3lpa$ = SerialDescriptor.prototype.getElementAnnotations_za3lpa$;
  Object.defineProperty(MapLikeDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  MapLikeDescriptor.prototype.isElementOptional_za3lpa$ = SerialDescriptor.prototype.isElementOptional_za3lpa$;
  CommonEnumSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  GeneratedSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  LongAsStringSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ObjectSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PrimitiveDescriptor.prototype.getEntityAnnotations = SerialDescriptor.prototype.getEntityAnnotations;
  PrimitiveDescriptor.prototype.getElementAnnotations_za3lpa$ = SerialDescriptor.prototype.getElementAnnotations_za3lpa$;
  Object.defineProperty(PrimitiveDescriptor.prototype, 'elementsCount', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'elementsCount'));
  Object.defineProperty(PrimitiveDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  UnitSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  BooleanSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ByteSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ShortSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  IntSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  LongSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  FloatSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  DoubleSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  CharSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  StringSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  KeyValueSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  TripleSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  JsonElementSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  JsonPrimitiveSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  JsonNullSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  JsonLiteralSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  JsonObjectSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  JsonArraySerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  JsonInput.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  JsonInput.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  JsonInput.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  JsonInput.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  JsonInput.prototype.endStructure_qatsm0$ = CompositeDecoder.prototype.endStructure_qatsm0$;
  JsonInput.prototype.decodeCollectionSize_qatsm0$ = CompositeDecoder.prototype.decodeCollectionSize_qatsm0$;
  JsonOutput.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  JsonOutput.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  JsonOutput.prototype.beginCollection_gly1x5$ = Encoder.prototype.beginCollection_gly1x5$;
  JsonOutput.prototype.endStructure_qatsm0$ = CompositeEncoder.prototype.endStructure_qatsm0$;
  JsonOutput.prototype.shouldEncodeElementDefault_3zr2iy$ = CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$;
  StreamingJsonInput.prototype.decodeNullableSerializableValue_aae3ea$ = JsonInput.prototype.decodeNullableSerializableValue_aae3ea$;
  StreamingJsonInput.prototype.updateSerializableValue_19c8k5$ = JsonInput.prototype.updateSerializableValue_19c8k5$;
  StreamingJsonInput.prototype.updateNullableSerializableValue_exmlbs$ = JsonInput.prototype.updateNullableSerializableValue_exmlbs$;
  StreamingJsonInput.prototype.decodeCollectionSize_qatsm0$ = JsonInput.prototype.decodeCollectionSize_qatsm0$;
  StreamingJsonOutput.prototype.encodeNullableSerializableValue_f4686g$ = JsonOutput.prototype.encodeNullableSerializableValue_f4686g$;
  StreamingJsonOutput.prototype.beginCollection_gly1x5$ = JsonOutput.prototype.beginCollection_gly1x5$;
  deprecationText = 'Obsolete name from the preview version of library.';
  INSTALL_DEPRECATION_TEXT = 'Install is no longer supported, module can be added to format only in constructor';
  ARRAY_NAME = 'kotlin.Array';
  ARRAY_LIST_NAME = 'kotlin.collections.ArrayList';
  LINKED_HASH_SET_NAME = 'kotlin.collections.LinkedHashSet';
  HASH_SET_NAME = 'kotlin.collections.HashSet';
  LINKED_HASH_MAP_NAME = 'kotlin.collections.LinkedHashMap';
  HASH_MAP_NAME = 'kotlin.collections.HashMap';
  INITIAL_SIZE = 10;
  KEY_INDEX = 0;
  VALUE_INDEX = 1;
  defaultJsonModule = serializersModuleOf_0(mapOf([to(getKClass(JsonElement), JsonElementSerializer_getInstance()), to(getKClass(JsonPrimitive), JsonPrimitiveSerializer_getInstance()), to(getKClass(JsonLiteral), JsonLiteralSerializer_getInstance()), to(getKClass(JsonNull), JsonNullSerializer_getInstance()), to(getKClass(JsonObject), JsonObjectSerializer_getInstance()), to(getKClass(JsonArray), JsonArraySerializer_getInstance())]));
  NULL = 'null';
  COMMA = 44;
  COLON = 58;
  BEGIN_OBJ = 123;
  END_OBJ = 125;
  BEGIN_LIST = 91;
  END_LIST = 93;
  STRING = 34;
  STRING_ESC = 92;
  INVALID = toChar(0);
  UNICODE_ESC = 117;
  TC_OTHER = 0;
  TC_STRING = 1;
  TC_STRING_ESC = 2;
  TC_WS = 3;
  TC_COMMA = 4;
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_NULL = 10;
  TC_INVALID = 11;
  TC_EOF = 12;
  CTC_MAX = 126;
  ESC2C_MAX = 117;
  var $receiver = new Int8Array(126);
  for (var i = 0; i <= 32; i++) {
    initC2TC($receiver, i, TC_INVALID);
  }
  initC2TC($receiver, 9, TC_WS);
  initC2TC($receiver, 10, TC_WS);
  initC2TC($receiver, 13, TC_WS);
  initC2TC($receiver, 32, TC_WS);
  initC2TC_0($receiver, COMMA, TC_COMMA);
  initC2TC_0($receiver, COLON, TC_COLON);
  initC2TC_0($receiver, BEGIN_OBJ, TC_BEGIN_OBJ);
  initC2TC_0($receiver, END_OBJ, TC_END_OBJ);
  initC2TC_0($receiver, BEGIN_LIST, TC_BEGIN_LIST);
  initC2TC_0($receiver, END_LIST, TC_END_LIST);
  initC2TC_0($receiver, STRING, TC_STRING);
  initC2TC_0($receiver, STRING_ESC, TC_STRING_ESC);
  C2TC = $receiver;
  var $receiver_0 = Kotlin.newArray(128, null);
  for (var c = 0; c <= 31; c++) {
    var c1 = toHexChar(c >> 12);
    var c2 = toHexChar(c >> 8);
    var c3 = toHexChar(c >> 4);
    var c4 = toHexChar(c);
    $receiver_0[c] = '\\' + 'u' + String.fromCharCode(c1) + String.fromCharCode(c2) + String.fromCharCode(c3) + String.fromCharCode(c4);
  }
  $receiver_0[34] = '\\"';
  $receiver_0[92] = '\\\\';
  $receiver_0[9] = '\\t';
  $receiver_0[8] = '\\b';
  $receiver_0[10] = '\\n';
  $receiver_0[13] = '\\r';
  $receiver_0[12] = '\\f';
  ESCAPE_CHARS = $receiver_0;
  PRIMITIVE_TAG = 'primitive';
  MAX_SAFE_INTEGER = L9007199254740991.toNumber();
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-runtime.js.map
