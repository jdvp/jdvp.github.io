if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'animosaic'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'animosaic'.");
}
if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
  throw new Error("Error loading module 'animosaic'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'animosaic'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'animosaic'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'animosaic'.");
}
var animosaic = function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$kotlinx_coroutines_core) {
  'use strict';
  var JsonConfiguration = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.JsonConfiguration;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  var Exception = Kotlin.kotlin.Exception;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashMapSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.LinkedHashMapSerializer;
  var L86400000 = Kotlin.Long.fromInt(86400000);
  var L604800000 = Kotlin.Long.fromInt(604800000);
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var throwCCE = Kotlin.throwCCE;
  var hashCode = Kotlin.hashCode;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var toString = Kotlin.toString;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var awaitAll = $module$kotlinx_coroutines_core.kotlinx.coroutines.awaitAll_60afti$;
  var coroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.coroutineScope_awg8ri$;
  var numberToInt = Kotlin.numberToInt;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toShort = Kotlin.toShort;
  var lastIndexOf = Kotlin.kotlin.text.lastIndexOf_l5u8uk$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.NullableSerializer;
  var equals = Kotlin.equals;
  var LinkedHashSetSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.LinkedHashSetSerializer;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ArrayListSerializer;
  var EnumDescriptor = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.EnumDescriptor;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Pair = Kotlin.kotlin.Pair;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var Random = Kotlin.kotlin.random.Random;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var Array_0 = Array;
  MosaicStatus.prototype = Object.create(Enum.prototype);
  MosaicStatus.prototype.constructor = MosaicStatus;
  UserStatus.prototype = Object.create(Enum.prototype);
  UserStatus.prototype.constructor = UserStatus;
  function Cache() {
    Cache_instance = this;
    this.ONE_DAY_MILLIS_0 = L86400000;
    this.ONE_WEEK_MILLIS_0 = L604800000;
    this.RESPONSE_CACHE = LinkedHashMap_init();
  }
  Cache.prototype.getUser_61zpoe$ = function (key) {
    return this.getWithExpiration_0(key, User$Companion_getInstance().serializer());
  };
  Cache.prototype.setUser_1kpnv$ = function (user) {
    if (user.watchedAnime.isEmpty() && user.status === UserStatus$COMPLETE_getInstance()) {
      localStorage.removeItem(user.username);
      return;
    }
    this.setWithExpiration_0(user.username, user, User$Companion_getInstance().serializer(), this.ONE_DAY_MILLIS_0);
  };
  Cache.prototype.getImage_61zpoe$ = function (key) {
    return this.getWithExpiration_0(key, Pixel$Companion_getInstance().serializer());
  };
  Cache.prototype.setImage_wpgvlk$ = function (key, value) {
    this.setWithExpiration_0(key, value, Pixel$Companion_getInstance().serializer(), this.ONE_WEEK_MILLIS_0);
  };
  Cache.prototype.setWithExpiration_0 = function (key, value, serializer, expiration) {
    var json = new Json(JsonConfiguration.Companion.Stable.copy_u5l5z3$(void 0, false));
    var valueString = json.toJson_tf03ej$(serializer, value).toString();
    var item = new Cache$CacheItem(valueString, Kotlin.Long.fromNumber((new Date()).getTime()).add(expiration));
    var cacheValue = json.toJson_tf03ej$(Cache$CacheItem$Companion_getInstance().serializer(), item).toString();
    localStorage[key] = cacheValue;
  };
  Cache.prototype.getWithExpiration_0 = function (key, serializer) {
    var tmp$;
    tmp$ = localStorage[key];
    if (tmp$ == null) {
      return null;
    }
    var cachedString = tmp$;
    try {
      var json = new Json(JsonConfiguration.Companion.Stable.copy_u5l5z3$(void 0, false));
      var cacheItem = json.parse_awif5v$(Cache$CacheItem$Companion_getInstance().serializer(), cachedString);
      if ((new Date()).getTime() > cacheItem.expiration.toNumber()) {
        localStorage.removeItem(key);
        return null;
      }
      return json.parse_awif5v$(serializer, cacheItem.value);
    }
     catch (ignored) {
      if (!Kotlin.isType(ignored, Exception))
        throw ignored;
    }
    return null;
  };
  function Cache$CacheItem(value, expiration) {
    Cache$CacheItem$Companion_getInstance();
    this.value = value;
    this.expiration = expiration;
  }
  function Cache$CacheItem$Companion() {
    Cache$CacheItem$Companion_instance = this;
  }
  Cache$CacheItem$Companion.prototype.serializer = function () {
    return Cache$CacheItem$$serializer_getInstance();
  };
  Cache$CacheItem$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Cache$CacheItem$Companion_instance = null;
  function Cache$CacheItem$Companion_getInstance() {
    if (Cache$CacheItem$Companion_instance === null) {
      new Cache$CacheItem$Companion();
    }
    return Cache$CacheItem$Companion_instance;
  }
  function Cache$CacheItem$$serializer() {
    this.descriptor_zccgwe$_0 = new SerialClassDescImpl('Cache.CacheItem', this);
    this.descriptor.addElement_ivxn3r$('value', false);
    this.descriptor.addElement_ivxn3r$('expiration', false);
    Cache$CacheItem$$serializer_instance = this;
  }
  Object.defineProperty(Cache$CacheItem$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_zccgwe$_0;
    }
  });
  Cache$CacheItem$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.value);
    output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.expiration);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Cache$CacheItem$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Cache$Cache$CacheItem_init(bitMask0, local0, local1, null);
  };
  Cache$CacheItem$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.LongSerializer];
  };
  Cache$CacheItem$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Cache$CacheItem$$serializer_instance = null;
  function Cache$CacheItem$$serializer_getInstance() {
    if (Cache$CacheItem$$serializer_instance === null) {
      new Cache$CacheItem$$serializer();
    }
    return Cache$CacheItem$$serializer_instance;
  }
  function Cache$Cache$CacheItem_init(seen1, value, expiration, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Cache$CacheItem.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('value');
    else
      $this.value = value;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('expiration');
    else
      $this.expiration = expiration;
    return $this;
  }
  Cache$CacheItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CacheItem',
    interfaces: []
  };
  Cache$CacheItem.prototype.component1 = function () {
    return this.value;
  };
  Cache$CacheItem.prototype.component2 = function () {
    return this.expiration;
  };
  Cache$CacheItem.prototype.copy_4wgjuj$ = function (value, expiration) {
    return new Cache$CacheItem(value === void 0 ? this.value : value, expiration === void 0 ? this.expiration : expiration);
  };
  Cache$CacheItem.prototype.toString = function () {
    return 'CacheItem(value=' + Kotlin.toString(this.value) + (', expiration=' + Kotlin.toString(this.expiration)) + ')';
  };
  Cache$CacheItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.expiration) | 0;
    return result;
  };
  Cache$CacheItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.expiration, other.expiration)))));
  };
  function Cache$UserMap(map) {
    Cache$UserMap$Companion_getInstance();
    this.map = map;
  }
  function Cache$UserMap$Companion() {
    Cache$UserMap$Companion_instance = this;
  }
  Cache$UserMap$Companion.prototype.serializer = function () {
    return Cache$UserMap$$serializer_getInstance();
  };
  Cache$UserMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Cache$UserMap$Companion_instance = null;
  function Cache$UserMap$Companion_getInstance() {
    if (Cache$UserMap$Companion_instance === null) {
      new Cache$UserMap$Companion();
    }
    return Cache$UserMap$Companion_instance;
  }
  function Cache$UserMap$$serializer() {
    this.descriptor_hnr3hm$_0 = new SerialClassDescImpl('Cache.UserMap', this);
    this.descriptor.addElement_ivxn3r$('map', false);
    Cache$UserMap$$serializer_instance = this;
  }
  Object.defineProperty(Cache$UserMap$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_hnr3hm$_0;
    }
  });
  Cache$UserMap$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new LinkedHashMapSerializer(internal.StringSerializer, User$$serializer_getInstance()), obj.map);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Cache$UserMap$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new LinkedHashMapSerializer(internal.StringSerializer, User$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new LinkedHashMapSerializer(internal.StringSerializer, User$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Cache$Cache$UserMap_init(bitMask0, local0, null);
  };
  Cache$UserMap$$serializer.prototype.childSerializers = function () {
    return [new LinkedHashMapSerializer(internal.StringSerializer, User$$serializer_getInstance())];
  };
  Cache$UserMap$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Cache$UserMap$$serializer_instance = null;
  function Cache$UserMap$$serializer_getInstance() {
    if (Cache$UserMap$$serializer_instance === null) {
      new Cache$UserMap$$serializer();
    }
    return Cache$UserMap$$serializer_instance;
  }
  function Cache$Cache$UserMap_init(seen1, map, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Cache$UserMap.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('map');
    else
      $this.map = map;
    return $this;
  }
  Cache$UserMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserMap',
    interfaces: []
  };
  Cache$UserMap.prototype.component1 = function () {
    return this.map;
  };
  Cache$UserMap.prototype.copy_bpya9n$ = function (map) {
    return new Cache$UserMap(map === void 0 ? this.map : map);
  };
  Cache$UserMap.prototype.toString = function () {
    return 'UserMap(map=' + Kotlin.toString(this.map) + ')';
  };
  Cache$UserMap.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  Cache$UserMap.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
  };
  function Cache$ImageMap(map) {
    Cache$ImageMap$Companion_getInstance();
    this.map = map;
  }
  function Cache$ImageMap$Companion() {
    Cache$ImageMap$Companion_instance = this;
  }
  Cache$ImageMap$Companion.prototype.serializer = function () {
    return Cache$ImageMap$$serializer_getInstance();
  };
  Cache$ImageMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Cache$ImageMap$Companion_instance = null;
  function Cache$ImageMap$Companion_getInstance() {
    if (Cache$ImageMap$Companion_instance === null) {
      new Cache$ImageMap$Companion();
    }
    return Cache$ImageMap$Companion_instance;
  }
  function Cache$ImageMap$$serializer() {
    this.descriptor_vfi632$_0 = new SerialClassDescImpl('Cache.ImageMap', this);
    this.descriptor.addElement_ivxn3r$('map', false);
    Cache$ImageMap$$serializer_instance = this;
  }
  Object.defineProperty(Cache$ImageMap$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_vfi632$_0;
    }
  });
  Cache$ImageMap$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new LinkedHashMapSerializer(internal.StringSerializer, Pixel$$serializer_getInstance()), obj.map);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Cache$ImageMap$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new LinkedHashMapSerializer(internal.StringSerializer, Pixel$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new LinkedHashMapSerializer(internal.StringSerializer, Pixel$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Cache$Cache$ImageMap_init(bitMask0, local0, null);
  };
  Cache$ImageMap$$serializer.prototype.childSerializers = function () {
    return [new LinkedHashMapSerializer(internal.StringSerializer, Pixel$$serializer_getInstance())];
  };
  Cache$ImageMap$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Cache$ImageMap$$serializer_instance = null;
  function Cache$ImageMap$$serializer_getInstance() {
    if (Cache$ImageMap$$serializer_instance === null) {
      new Cache$ImageMap$$serializer();
    }
    return Cache$ImageMap$$serializer_instance;
  }
  function Cache$Cache$ImageMap_init(seen1, map, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Cache$ImageMap.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('map');
    else
      $this.map = map;
    return $this;
  }
  Cache$ImageMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageMap',
    interfaces: []
  };
  Cache$ImageMap.prototype.component1 = function () {
    return this.map;
  };
  Cache$ImageMap.prototype.copy_apcq2i$ = function (map) {
    return new Cache$ImageMap(map === void 0 ? this.map : map);
  };
  Cache$ImageMap.prototype.toString = function () {
    return 'ImageMap(map=' + Kotlin.toString(this.map) + ')';
  };
  Cache$ImageMap.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  Cache$ImageMap.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
  };
  Cache.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Cache',
    interfaces: []
  };
  var Cache_instance = null;
  function Cache_getInstance() {
    if (Cache_instance === null) {
      new Cache();
    }
    return Cache_instance;
  }
  var latestMosaic;
  var inputImageCanvas;
  function Coroutine$createMosaic$lambda(closure$file_0, closure$mosaicWidth_0, closure$requestId_0, closure$username_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$closure$mosaicWidth = closure$mosaicWidth_0;
    this.local$closure$requestId = closure$requestId_0;
    this.local$closure$username = closure$username_0;
  }
  Coroutine$createMosaic$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createMosaic$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createMosaic$lambda.prototype.constructor = Coroutine$createMosaic$lambda;
  Coroutine$createMosaic$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(getCanvasFromFile(this.local$closure$file, this.local$closure$mosaicWidth), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var inputImage = this.result_0;
            inputImageCanvas = inputImage;
            var response = new MosaicStatusResponse(this.local$closure$requestId);
            updateMosaicStatus(response);
            this.state_0 = 3;
            this.result_0 = createMosaic_0(inputImage, this.local$closure$username, response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function createMosaic$lambda(closure$file_0, closure$mosaicWidth_0, closure$requestId_0, closure$username_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$createMosaic$lambda(closure$file_0, closure$mosaicWidth_0, closure$requestId_0, closure$username_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function createMosaic() {
    var tmp$, tmp$_0;
    var username = typeof (tmp$ = getInputUsername()) === 'string' ? tmp$ : throwCCE();
    var file = Kotlin.isType(tmp$_0 = getInputImage(), File) ? tmp$_0 : throwCCE();
    var requestId = username + hashCode(file);
    var mosaicWidth = 50;
    launch(coroutines.GlobalScope, void 0, void 0, createMosaic$lambda(file, mosaicWidth, requestId, username));
  }
  function getLatest() {
    var $receiver = latestMosaic != null ? latestMosaic : emptyList();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(copyToArray(item));
    }
    return copyToArray(destination);
  }
  function Coroutine$createMosaic(inputImage_0, user_0, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$startTime = void 0;
    this.local$inputImage = inputImage_0;
    this.local$user = user_0;
    this.local$response = response_0;
  }
  Coroutine$createMosaic.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createMosaic.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createMosaic.prototype.constructor = Coroutine$createMosaic;
  Coroutine$createMosaic.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = getUserInformation(this.local$user, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var userInfo = this.result_0;
            this.local$response.status = MosaicStatus$CREATING_MOSAIC_getInstance();
            updateMosaicStatus(this.local$response);
            this.local$startTime = (new Date()).getTime();
            println('CREATING MOSAIC');
            this.state_0 = 3;
            this.result_0 = Mosaic_getInstance().createMosaicFromTiles_7x6b9z$(this.local$inputImage, toList(userInfo.watchedAnime), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var mosaic = this.result_0;
            println('CREATING MOSAIC FINISH : Took ' + ((new Date()).getTime() - this.local$startTime) + ' millis');
            this.local$response.status = MosaicStatus$COMPLETE_getInstance();
            this.local$response.mosaic = mosaic;
            latestMosaic = mosaic;
            updateMosaicStatus(this.local$response);
            notifyMosaicComplete();
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function createMosaic_0(inputImage_0, user_0, response_0, continuation_0, suspended) {
    var instance = new Coroutine$createMosaic(inputImage_0, user_0, response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function updateMosaicStatus(response) {
    var $receiver = Cache_getInstance().RESPONSE_CACHE;
    var key = response.id;
    $receiver.put_xwzc9p$(key, response);
  }
  function getUserInformation(user, continuation) {
    var tmp$;
    println('getUserInformation');
    if ((tmp$ = Cache_getInstance().getUser_61zpoe$(user)) != null) {
      if (tmp$.status === UserStatus$COMPLETE_getInstance()) {
        return tmp$;
      }
    }
    var newUser = new User(user, UserStatus$LOADING_USER_DATA_getInstance(), emptySet());
    Cache_getInstance().setUser_1kpnv$(newUser);
    return loadUserProfileFromJsonApi(user, continuation);
  }
  function loadUserProfileFromJsonApi$lambda$lambda$lambda(closure$resolve) {
    return function () {
      closure$resolve(true);
      return Unit;
    };
  }
  function loadUserProfileFromJsonApi$lambda$lambda(closure$page) {
    return function (resolve, f) {
      window.setTimeout(loadUserProfileFromJsonApi$lambda$lambda$lambda(resolve), 500 * closure$page | 0);
      return Unit;
    };
  }
  function Coroutine$loadUserProfileFromJsonApi$lambda(closure$user_0, page_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$user = closure$user_0;
    this.local$page = page_0;
  }
  Coroutine$loadUserProfileFromJsonApi$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadUserProfileFromJsonApi$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadUserProfileFromJsonApi$lambda.prototype.constructor = Coroutine$loadUserProfileFromJsonApi$lambda;
  Coroutine$loadUserProfileFromJsonApi$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println(this.local$page.toString() + ' : Sleeping at ' + (new Date()).getTime());
            this.state_0 = 2;
            this.result_0 = await_0(new Promise(loadUserProfileFromJsonApi$lambda$lambda(this.local$page)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            println(this.local$page.toString() + ' : Awoke at ' + (new Date()).getTime());
            this.state_0 = 3;
            this.result_0 = makeJikanRequest(this.local$closure$user, this.local$page, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function loadUserProfileFromJsonApi$lambda(closure$user_0) {
    return function (page_0, continuation_0, suspended) {
      var instance = new Coroutine$loadUserProfileFromJsonApi$lambda(closure$user_0, page_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$loadUserProfileFromJsonApi(user_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$startTime = void 0;
    this.local$user = user_0;
  }
  Coroutine$loadUserProfileFromJsonApi.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadUserProfileFromJsonApi.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadUserProfileFromJsonApi.prototype.constructor = Coroutine$loadUserProfileFromJsonApi;
  Coroutine$loadUserProfileFromJsonApi.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println('Generating anime list for ' + this.local$user + ' using Jikan API');
            this.local$startTime = (new Date()).getTime();
            this.state_0 = 2;
            this.result_0 = pmap(toList(until(1, 4)), loadUserProfileFromJsonApi$lambda(this.local$user), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tiles = distinct(flatten(this.result_0));
            println('JIKAN finished, user ' + this.local$user + ' has ' + tiles.size + ' anime. Took ' + ((new Date()).getTime() - this.local$startTime) + ' milliseconds.');
            println('JIKAN ' + tiles);
            var newUser = new User(this.local$user, UserStatus$COMPLETE_getInstance(), toSet(tiles));
            Cache_getInstance().setUser_1kpnv$(newUser);
            return newUser;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function loadUserProfileFromJsonApi(user_0, continuation_0, suspended) {
    var instance = new Coroutine$loadUserProfileFromJsonApi(user_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$makeJikanRequest$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$makeJikanRequest$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$makeJikanRequest$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$makeJikanRequest$lambda.prototype.constructor = Coroutine$makeJikanRequest$lambda;
  Coroutine$makeJikanRequest$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.image_url == null) {
              return null;
            }

            return new TileItem('https://myanimelist.net/anime/' + toString(this.local$it.mal_id), getLargeImageUrl(this.local$it.image_url));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function makeJikanRequest$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$makeJikanRequest$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$makeJikanRequest(username_0, pageNumber_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$startTime = void 0;
    this.local$jikanListResponse = void 0;
    this.local$username = username_0;
    this.local$pageNumber = pageNumber_0;
  }
  Coroutine$makeJikanRequest.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$makeJikanRequest.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$makeJikanRequest.prototype.constructor = Coroutine$makeJikanRequest;
  Coroutine$makeJikanRequest.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$startTime = (new Date()).getTime();
            this.state_0 = 2;
            this.result_0 = loadAnimeList(this.local$username, this.local$pageNumber, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$jikanListResponse = this.result_0;
            var timeTaken = (new Date()).getTime() - this.local$startTime;
            println('page ' + this.local$pageNumber + ' took ' + timeTaken + ' millis!');
            if (this.local$jikanListResponse == null || this.local$jikanListResponse.isEmpty()) {
              return emptyList();
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var destination = ArrayList_init_0();
            var tmp$;
            tmp$ = this.local$jikanListResponse.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              if (element.watching_status !== 6)
                destination.add_11rb$(element);
            }

            this.state_0 = 4;
            this.result_0 = pmap(destination, makeJikanRequest$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return filterNotNull(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function makeJikanRequest(username_0, pageNumber_0, continuation_0, suspended) {
    var instance = new Coroutine$makeJikanRequest(username_0, pageNumber_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$pmap$lambda$lambda$lambda(closure$f_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$f = closure$f_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$pmap$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$pmap$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$pmap$lambda$lambda$lambda.prototype.constructor = Coroutine$pmap$lambda$lambda$lambda;
  Coroutine$pmap$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$f(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function pmap$lambda$lambda$lambda(closure$f_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$pmap$lambda$lambda$lambda(closure$f_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$pmap$lambda(closure$f_0, this$pmap_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$f = closure$f_0;
    this.local$this$pmap = this$pmap_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$pmap$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$pmap$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$pmap$lambda.prototype.constructor = Coroutine$pmap$lambda;
  Coroutine$pmap$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$this$pmap;
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(async(this.local$$receiver, void 0, void 0, pmap$lambda$lambda$lambda(this.local$closure$f, item)));
            }

            this.state_0 = 2;
            this.result_0 = awaitAll(destination, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function pmap$lambda(closure$f_0, this$pmap_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$pmap$lambda(closure$f_0, this$pmap_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function pmap($receiver, f, continuation) {
    return coroutineScope(pmap$lambda(f, $receiver), continuation);
  }
  function getCanvasFromFile$lambda$lambda(closure$image, closure$width, closure$canvas, closure$resolve) {
    return function (it) {
      var aspectRatio = closure$image.height / closure$image.width;
      println('image width ' + closure$image.width);
      println('image height ' + closure$image.height);
      var imageHeight = closure$width * 0.75 * aspectRatio;
      closure$image.style.width = closure$width.toString() + 'px';
      closure$image.style.height = imageHeight.toString() + 'px';
      closure$canvas.drawImage(closure$image, 0.0, 0.0, closure$width, imageHeight);
      var returnedImage = new TileImage(closure$image.width, closure$image.height, closure$canvas);
      closure$image.width = closure$width;
      closure$image.height = numberToInt(imageHeight);
      closure$resolve(returnedImage);
      return Unit;
    };
  }
  function getCanvasFromFile$lambda(closure$file, closure$width) {
    return function (resolve, f) {
      var tmp$, tmp$_0;
      var canvas = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE()).getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
      var fileUrl = URL.createObjectURL(closure$file);
      var image = new Image();
      image.onload = getCanvasFromFile$lambda$lambda(image, closure$width, canvas, resolve);
      image.src = fileUrl;
      ensureNotNull(document.getElementById('imageItem')).appendChild(image);
      return Unit;
    };
  }
  function getCanvasFromFile(file, width) {
    return new Promise(getCanvasFromFile$lambda(file, width));
  }
  function loadAnimeList$lambda$lambda(closure$xmlHttp, closure$resolve) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$resolve(closure$xmlHttp.responseText);
      }
       else {
        closure$resolve('{"anime":[]}');
      }
      return Unit;
    };
  }
  function loadAnimeList$lambda$lambda_0(closure$pageNumber, closure$resolve) {
    return function (it) {
      println('is error for page ' + closure$pageNumber + '!!');
      closure$resolve('{"anime":[]}');
      return Unit;
    };
  }
  function loadAnimeList$lambda(closure$username, closure$pageNumber) {
    return function (resolve, reject) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', 'https://api.jikan.moe/v3/user/' + closure$username + '/animelist/all/' + closure$pageNumber);
      xmlHttp.onload = loadAnimeList$lambda$lambda(xmlHttp, resolve);
      xmlHttp.onerror = loadAnimeList$lambda$lambda_0(closure$pageNumber, resolve);
      xmlHttp.send();
      return Unit;
    };
  }
  function Coroutine$loadAnimeList(username_0, pageNumber_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$username = username_0;
    this.local$pageNumber = pageNumber_0;
  }
  Coroutine$loadAnimeList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadAnimeList.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadAnimeList.prototype.constructor = Coroutine$loadAnimeList;
  Coroutine$loadAnimeList.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var promise = new Promise(loadAnimeList$lambda(this.local$username, this.local$pageNumber));
            this.state_0 = 2;
            this.result_0 = await_0(promise, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            var json = new Json(JsonConfiguration.Companion.Stable.copy_u5l5z3$(void 0, false));
            var ktResponse = json.parse_awif5v$(JikanListResponse$Companion_getInstance().serializer(), response);
            return (tmp$ = ktResponse.anime) != null ? tmp$ : emptyList();
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function loadAnimeList(username_0, pageNumber_0, continuation_0, suspended) {
    var instance = new Coroutine$loadAnimeList(username_0, pageNumber_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function getLargeImageUrl(url) {
    var index = lastIndexOf(url, '.');
    var image = url.substring(0, index) + 'l' + url.substring(index);
    var imageName = first(split(replace(image, 'https://cdn.myanimelist.net/images/anime/', ''), ['?']));
    return 'https://animosaic2.gumlet.com/' + imageName;
  }
  function sleep$lambda$lambda(closure$resolve) {
    return function () {
      closure$resolve(true);
      return Unit;
    };
  }
  function sleep$lambda(closure$millis) {
    return function (resolve, f) {
      window.setTimeout(sleep$lambda$lambda(resolve), closure$millis);
      return Unit;
    };
  }
  function Coroutine$sleep(millis_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$millis = millis_0;
  }
  Coroutine$sleep.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sleep.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sleep.prototype.constructor = Coroutine$sleep;
  Coroutine$sleep.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(new Promise(sleep$lambda(this.local$millis)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function sleep(millis_0, continuation_0, suspended) {
    var instance = new Coroutine$sleep(millis_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function TileItem(link, image) {
    TileItem$Companion_getInstance();
    if (link === void 0)
      link = null;
    if (image === void 0)
      image = null;
    this.link = link;
    this.image = image;
  }
  function TileItem$Companion() {
    TileItem$Companion_instance = this;
  }
  TileItem$Companion.prototype.serializer = function () {
    return TileItem$$serializer_getInstance();
  };
  TileItem$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TileItem$Companion_instance = null;
  function TileItem$Companion_getInstance() {
    if (TileItem$Companion_instance === null) {
      new TileItem$Companion();
    }
    return TileItem$Companion_instance;
  }
  function TileItem$$serializer() {
    this.descriptor_jrs29y$_0 = new SerialClassDescImpl('TileItem', this);
    this.descriptor.addElement_ivxn3r$('link', true);
    this.descriptor.addElement_ivxn3r$('image', true);
    TileItem$$serializer_instance = this;
  }
  Object.defineProperty(TileItem$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_jrs29y$_0;
    }
  });
  TileItem$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.link, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 0, internal.StringSerializer, obj.link);
    if (!equals(obj.image, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.StringSerializer, obj.image);
    output.endStructure_qatsm0$(this.descriptor);
  };
  TileItem$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 0, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 0, internal.StringSerializer, local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return TileItem_init(bitMask0, local0, local1, null);
  };
  TileItem$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer)];
  };
  TileItem$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var TileItem$$serializer_instance = null;
  function TileItem$$serializer_getInstance() {
    if (TileItem$$serializer_instance === null) {
      new TileItem$$serializer();
    }
    return TileItem$$serializer_instance;
  }
  function TileItem_init(seen1, link, image, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(TileItem.prototype);
    if ((seen1 & 1) === 0)
      $this.link = null;
    else
      $this.link = link;
    if ((seen1 & 2) === 0)
      $this.image = null;
    else
      $this.image = image;
    return $this;
  }
  TileItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileItem',
    interfaces: []
  };
  TileItem.prototype.component1 = function () {
    return this.link;
  };
  TileItem.prototype.component2 = function () {
    return this.image;
  };
  TileItem.prototype.copy_rkkr90$ = function (link, image) {
    return new TileItem(link === void 0 ? this.link : link, image === void 0 ? this.image : image);
  };
  TileItem.prototype.toString = function () {
    return 'TileItem(link=' + Kotlin.toString(this.link) + (', image=' + Kotlin.toString(this.image)) + ')';
  };
  TileItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    return result;
  };
  TileItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.link, other.link) && Kotlin.equals(this.image, other.image)))));
  };
  function User(username, status, watchedAnime) {
    User$Companion_getInstance();
    if (status === void 0)
      status = UserStatus$LOADING_USER_DATA_getInstance();
    if (watchedAnime === void 0) {
      watchedAnime = emptySet();
    }
    this.username = username;
    this.status = status;
    this.watchedAnime = watchedAnime;
  }
  function User$Companion() {
    User$Companion_instance = this;
  }
  User$Companion.prototype.serializer = function () {
    return User$$serializer_getInstance();
  };
  User$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var User$Companion_instance = null;
  function User$Companion_getInstance() {
    if (User$Companion_instance === null) {
      new User$Companion();
    }
    return User$Companion_instance;
  }
  function User$$serializer() {
    this.descriptor_5jv2b4$_0 = new SerialClassDescImpl('User', this);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('status', true);
    this.descriptor.addElement_ivxn3r$('watchedAnime', true);
    User$$serializer_instance = this;
  }
  Object.defineProperty(User$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_5jv2b4$_0;
    }
  });
  User$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.username);
    if (!equals(obj.status, UserStatus$LOADING_USER_DATA_getInstance()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, UserStatus$$serializer_getInstance(), obj.status);
    if (!equals(obj.watchedAnime, emptySet()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, new LinkedHashSetSerializer(TileItem$$serializer_getInstance()), obj.watchedAnime);
    output.endStructure_qatsm0$(this.descriptor);
  };
  User$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, UserStatus$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, UserStatus$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new LinkedHashSetSerializer(TileItem$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new LinkedHashSetSerializer(TileItem$$serializer_getInstance()), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return User_init(bitMask0, local0, local1, local2, null);
  };
  User$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, UserStatus$$serializer_getInstance(), new LinkedHashSetSerializer(TileItem$$serializer_getInstance())];
  };
  User$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var User$$serializer_instance = null;
  function User$$serializer_getInstance() {
    if (User$$serializer_instance === null) {
      new User$$serializer();
    }
    return User$$serializer_instance;
  }
  function User_init(seen1, username, status, watchedAnime, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(User.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('username');
    else
      $this.username = username;
    if ((seen1 & 2) === 0)
      $this.status = UserStatus$LOADING_USER_DATA_getInstance();
    else
      $this.status = status;
    if ((seen1 & 4) === 0) {
      $this.watchedAnime = emptySet();
    }
     else
      $this.watchedAnime = watchedAnime;
    return $this;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  User.prototype.component1 = function () {
    return this.username;
  };
  User.prototype.component2 = function () {
    return this.status;
  };
  User.prototype.component3 = function () {
    return this.watchedAnime;
  };
  User.prototype.copy_vh35b$ = function (username, status, watchedAnime) {
    return new User(username === void 0 ? this.username : username, status === void 0 ? this.status : status, watchedAnime === void 0 ? this.watchedAnime : watchedAnime);
  };
  User.prototype.toString = function () {
    return 'User(username=' + Kotlin.toString(this.username) + (', status=' + Kotlin.toString(this.status)) + (', watchedAnime=' + Kotlin.toString(this.watchedAnime)) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    result = result * 31 + Kotlin.hashCode(this.watchedAnime) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.watchedAnime, other.watchedAnime)))));
  };
  function MosaicStatusResponse(id, status, mosaic) {
    MosaicStatusResponse$Companion_getInstance();
    if (status === void 0)
      status = MosaicStatus$LOADING_USER_DATA_getInstance();
    if (mosaic === void 0)
      mosaic = null;
    this.id = id;
    this.status = status;
    this.mosaic = mosaic;
  }
  function MosaicStatusResponse$Companion() {
    MosaicStatusResponse$Companion_instance = this;
  }
  MosaicStatusResponse$Companion.prototype.serializer = function () {
    return MosaicStatusResponse$$serializer_getInstance();
  };
  MosaicStatusResponse$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MosaicStatusResponse$Companion_instance = null;
  function MosaicStatusResponse$Companion_getInstance() {
    if (MosaicStatusResponse$Companion_instance === null) {
      new MosaicStatusResponse$Companion();
    }
    return MosaicStatusResponse$Companion_instance;
  }
  function MosaicStatusResponse$$serializer() {
    this.descriptor_iz1wwu$_0 = new SerialClassDescImpl('MosaicStatusResponse', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('status', true);
    this.descriptor.addElement_ivxn3r$('mosaic', true);
    MosaicStatusResponse$$serializer_instance = this;
  }
  Object.defineProperty(MosaicStatusResponse$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_iz1wwu$_0;
    }
  });
  MosaicStatusResponse$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    if (!equals(obj.status, MosaicStatus$LOADING_USER_DATA_getInstance()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, MosaicStatus$$serializer_getInstance(), obj.status);
    if (!equals(obj.mosaic, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, new ArrayListSerializer(new ArrayListSerializer(TileItem$$serializer_getInstance())), obj.mosaic);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MosaicStatusResponse$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, MosaicStatus$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, MosaicStatus$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, new ArrayListSerializer(new ArrayListSerializer(TileItem$$serializer_getInstance()))) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, new ArrayListSerializer(new ArrayListSerializer(TileItem$$serializer_getInstance())), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MosaicStatusResponse_init(bitMask0, local0, local1, local2, null);
  };
  MosaicStatusResponse$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, MosaicStatus$$serializer_getInstance(), new NullableSerializer(new ArrayListSerializer(new ArrayListSerializer(TileItem$$serializer_getInstance())))];
  };
  MosaicStatusResponse$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MosaicStatusResponse$$serializer_instance = null;
  function MosaicStatusResponse$$serializer_getInstance() {
    if (MosaicStatusResponse$$serializer_instance === null) {
      new MosaicStatusResponse$$serializer();
    }
    return MosaicStatusResponse$$serializer_instance;
  }
  function MosaicStatusResponse_init(seen1, id, status, mosaic, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MosaicStatusResponse.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      $this.status = MosaicStatus$LOADING_USER_DATA_getInstance();
    else
      $this.status = status;
    if ((seen1 & 4) === 0)
      $this.mosaic = null;
    else
      $this.mosaic = mosaic;
    return $this;
  }
  MosaicStatusResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MosaicStatusResponse',
    interfaces: []
  };
  MosaicStatusResponse.prototype.component1 = function () {
    return this.id;
  };
  MosaicStatusResponse.prototype.component2 = function () {
    return this.status;
  };
  MosaicStatusResponse.prototype.component3 = function () {
    return this.mosaic;
  };
  MosaicStatusResponse.prototype.copy_jkwlvg$ = function (id, status, mosaic) {
    return new MosaicStatusResponse(id === void 0 ? this.id : id, status === void 0 ? this.status : status, mosaic === void 0 ? this.mosaic : mosaic);
  };
  MosaicStatusResponse.prototype.toString = function () {
    return 'MosaicStatusResponse(id=' + Kotlin.toString(this.id) + (', status=' + Kotlin.toString(this.status)) + (', mosaic=' + Kotlin.toString(this.mosaic)) + ')';
  };
  MosaicStatusResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    result = result * 31 + Kotlin.hashCode(this.mosaic) | 0;
    return result;
  };
  MosaicStatusResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.mosaic, other.mosaic)))));
  };
  function MosaicStatus(name, ordinal) {
    MosaicStatus$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MosaicStatus_initFields() {
    MosaicStatus_initFields = function () {
    };
    MosaicStatus$LOADING_USER_DATA_instance = new MosaicStatus('LOADING_USER_DATA', 0);
    MosaicStatus$CREATING_MOSAIC_instance = new MosaicStatus('CREATING_MOSAIC', 1);
    MosaicStatus$COMPLETE_instance = new MosaicStatus('COMPLETE', 2);
    MosaicStatus$Companion_getInstance();
  }
  var MosaicStatus$LOADING_USER_DATA_instance;
  function MosaicStatus$LOADING_USER_DATA_getInstance() {
    MosaicStatus_initFields();
    return MosaicStatus$LOADING_USER_DATA_instance;
  }
  var MosaicStatus$CREATING_MOSAIC_instance;
  function MosaicStatus$CREATING_MOSAIC_getInstance() {
    MosaicStatus_initFields();
    return MosaicStatus$CREATING_MOSAIC_instance;
  }
  var MosaicStatus$COMPLETE_instance;
  function MosaicStatus$COMPLETE_getInstance() {
    MosaicStatus_initFields();
    return MosaicStatus$COMPLETE_instance;
  }
  function MosaicStatus$Companion() {
    MosaicStatus$Companion_instance = this;
  }
  MosaicStatus$Companion.prototype.serializer = function () {
    return MosaicStatus$$serializer_getInstance();
  };
  MosaicStatus$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MosaicStatus$Companion_instance = null;
  function MosaicStatus$Companion_getInstance() {
    if (MosaicStatus$Companion_instance === null) {
      new MosaicStatus$Companion();
    }
    return MosaicStatus$Companion_instance;
  }
  function MosaicStatus$$serializer() {
    this.descriptor_dwfm0v$_0 = new EnumDescriptor('MosaicStatus');
    this.descriptor.addElement_ivxn3r$('LOADING_USER_DATA');
    this.descriptor.addElement_ivxn3r$('CREATING_MOSAIC');
    this.descriptor.addElement_ivxn3r$('COMPLETE');
    MosaicStatus$$serializer_instance = this;
  }
  Object.defineProperty(MosaicStatus$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_dwfm0v$_0;
    }
  });
  MosaicStatus$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeEnum_3zr2iy$(this.descriptor, obj.ordinal);
  };
  MosaicStatus$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return MosaicStatus$values()[decoder.decodeEnum_qatsm0$(this.descriptor)];
  };
  MosaicStatus$$serializer.prototype.childSerializers = function () {
    return [];
  };
  MosaicStatus$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MosaicStatus$$serializer_instance = null;
  function MosaicStatus$$serializer_getInstance() {
    if (MosaicStatus$$serializer_instance === null) {
      new MosaicStatus$$serializer();
    }
    return MosaicStatus$$serializer_instance;
  }
  MosaicStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MosaicStatus',
    interfaces: [Enum]
  };
  function MosaicStatus$values() {
    return [MosaicStatus$LOADING_USER_DATA_getInstance(), MosaicStatus$CREATING_MOSAIC_getInstance(), MosaicStatus$COMPLETE_getInstance()];
  }
  MosaicStatus.values = MosaicStatus$values;
  function MosaicStatus$valueOf(name) {
    switch (name) {
      case 'LOADING_USER_DATA':
        return MosaicStatus$LOADING_USER_DATA_getInstance();
      case 'CREATING_MOSAIC':
        return MosaicStatus$CREATING_MOSAIC_getInstance();
      case 'COMPLETE':
        return MosaicStatus$COMPLETE_getInstance();
      default:throwISE('No enum constant MosaicStatus.' + name);
    }
  }
  MosaicStatus.valueOf_61zpoe$ = MosaicStatus$valueOf;
  function UserStatus(name, ordinal) {
    UserStatus$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UserStatus_initFields() {
    UserStatus_initFields = function () {
    };
    UserStatus$LOADING_USER_DATA_instance = new UserStatus('LOADING_USER_DATA', 0);
    UserStatus$COMPLETE_instance = new UserStatus('COMPLETE', 1);
    UserStatus$Companion_getInstance();
  }
  var UserStatus$LOADING_USER_DATA_instance;
  function UserStatus$LOADING_USER_DATA_getInstance() {
    UserStatus_initFields();
    return UserStatus$LOADING_USER_DATA_instance;
  }
  var UserStatus$COMPLETE_instance;
  function UserStatus$COMPLETE_getInstance() {
    UserStatus_initFields();
    return UserStatus$COMPLETE_instance;
  }
  function UserStatus$Companion() {
    UserStatus$Companion_instance = this;
  }
  UserStatus$Companion.prototype.serializer = function () {
    return UserStatus$$serializer_getInstance();
  };
  UserStatus$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UserStatus$Companion_instance = null;
  function UserStatus$Companion_getInstance() {
    if (UserStatus$Companion_instance === null) {
      new UserStatus$Companion();
    }
    return UserStatus$Companion_instance;
  }
  function UserStatus$$serializer() {
    this.descriptor_209v7m$_0 = new EnumDescriptor('UserStatus');
    this.descriptor.addElement_ivxn3r$('LOADING_USER_DATA');
    this.descriptor.addElement_ivxn3r$('COMPLETE');
    UserStatus$$serializer_instance = this;
  }
  Object.defineProperty(UserStatus$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_209v7m$_0;
    }
  });
  UserStatus$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeEnum_3zr2iy$(this.descriptor, obj.ordinal);
  };
  UserStatus$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return UserStatus$values()[decoder.decodeEnum_qatsm0$(this.descriptor)];
  };
  UserStatus$$serializer.prototype.childSerializers = function () {
    return [];
  };
  UserStatus$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var UserStatus$$serializer_instance = null;
  function UserStatus$$serializer_getInstance() {
    if (UserStatus$$serializer_instance === null) {
      new UserStatus$$serializer();
    }
    return UserStatus$$serializer_instance;
  }
  UserStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserStatus',
    interfaces: [Enum]
  };
  function UserStatus$values() {
    return [UserStatus$LOADING_USER_DATA_getInstance(), UserStatus$COMPLETE_getInstance()];
  }
  UserStatus.values = UserStatus$values;
  function UserStatus$valueOf(name) {
    switch (name) {
      case 'LOADING_USER_DATA':
        return UserStatus$LOADING_USER_DATA_getInstance();
      case 'COMPLETE':
        return UserStatus$COMPLETE_getInstance();
      default:throwISE('No enum constant UserStatus.' + name);
    }
  }
  UserStatus.valueOf_61zpoe$ = UserStatus$valueOf;
  function JikanListResponse(anime) {
    JikanListResponse$Companion_getInstance();
    this.anime = anime;
  }
  function JikanListResponse$Companion() {
    JikanListResponse$Companion_instance = this;
  }
  JikanListResponse$Companion.prototype.serializer = function () {
    return JikanListResponse$$serializer_getInstance();
  };
  JikanListResponse$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JikanListResponse$Companion_instance = null;
  function JikanListResponse$Companion_getInstance() {
    if (JikanListResponse$Companion_instance === null) {
      new JikanListResponse$Companion();
    }
    return JikanListResponse$Companion_instance;
  }
  function JikanListResponse$$serializer() {
    this.descriptor_3vwo1v$_0 = new SerialClassDescImpl('JikanListResponse', this);
    this.descriptor.addElement_ivxn3r$('anime', false);
    JikanListResponse$$serializer_instance = this;
  }
  Object.defineProperty(JikanListResponse$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_3vwo1v$_0;
    }
  });
  JikanListResponse$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 0, new ArrayListSerializer(JikanAnime$$serializer_getInstance()), obj.anime);
    output.endStructure_qatsm0$(this.descriptor);
  };
  JikanListResponse$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 0, new ArrayListSerializer(JikanAnime$$serializer_getInstance())) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 0, new ArrayListSerializer(JikanAnime$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return JikanListResponse_init(bitMask0, local0, null);
  };
  JikanListResponse$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(new ArrayListSerializer(JikanAnime$$serializer_getInstance()))];
  };
  JikanListResponse$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var JikanListResponse$$serializer_instance = null;
  function JikanListResponse$$serializer_getInstance() {
    if (JikanListResponse$$serializer_instance === null) {
      new JikanListResponse$$serializer();
    }
    return JikanListResponse$$serializer_instance;
  }
  function JikanListResponse_init(seen1, anime, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(JikanListResponse.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('anime');
    else
      $this.anime = anime;
    return $this;
  }
  JikanListResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JikanListResponse',
    interfaces: []
  };
  JikanListResponse.prototype.component1 = function () {
    return this.anime;
  };
  JikanListResponse.prototype.copy_30s7sh$ = function (anime) {
    return new JikanListResponse(anime === void 0 ? this.anime : anime);
  };
  JikanListResponse.prototype.toString = function () {
    return 'JikanListResponse(anime=' + Kotlin.toString(this.anime) + ')';
  };
  JikanListResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.anime) | 0;
    return result;
  };
  JikanListResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.anime, other.anime))));
  };
  function JikanAnime(mal_id, image_url, watching_status) {
    JikanAnime$Companion_getInstance();
    if (watching_status === void 0)
      watching_status = 6;
    this.mal_id = mal_id;
    this.image_url = image_url;
    this.watching_status = watching_status;
  }
  function JikanAnime$Companion() {
    JikanAnime$Companion_instance = this;
  }
  JikanAnime$Companion.prototype.serializer = function () {
    return JikanAnime$$serializer_getInstance();
  };
  JikanAnime$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JikanAnime$Companion_instance = null;
  function JikanAnime$Companion_getInstance() {
    if (JikanAnime$Companion_instance === null) {
      new JikanAnime$Companion();
    }
    return JikanAnime$Companion_instance;
  }
  function JikanAnime$$serializer() {
    this.descriptor_rprue8$_0 = new SerialClassDescImpl('JikanAnime', this);
    this.descriptor.addElement_ivxn3r$('mal_id', false);
    this.descriptor.addElement_ivxn3r$('image_url', false);
    this.descriptor.addElement_ivxn3r$('watching_status', true);
    JikanAnime$$serializer_instance = this;
  }
  Object.defineProperty(JikanAnime$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_rprue8$_0;
    }
  });
  JikanAnime$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 0, internal.StringSerializer, obj.mal_id);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.StringSerializer, obj.image_url);
    if (!equals(obj.watching_status, 6) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeIntElement_4wpqag$(this.descriptor, 2, obj.watching_status);
    output.endStructure_qatsm0$(this.descriptor);
  };
  JikanAnime$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 0, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 0, internal.StringSerializer, local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeIntElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return JikanAnime_init(bitMask0, local0, local1, local2, null);
  };
  JikanAnime$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer), internal.IntSerializer];
  };
  JikanAnime$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var JikanAnime$$serializer_instance = null;
  function JikanAnime$$serializer_getInstance() {
    if (JikanAnime$$serializer_instance === null) {
      new JikanAnime$$serializer();
    }
    return JikanAnime$$serializer_instance;
  }
  function JikanAnime_init(seen1, mal_id, image_url, watching_status, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(JikanAnime.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('mal_id');
    else
      $this.mal_id = mal_id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('image_url');
    else
      $this.image_url = image_url;
    if ((seen1 & 4) === 0)
      $this.watching_status = 6;
    else
      $this.watching_status = watching_status;
    return $this;
  }
  JikanAnime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JikanAnime',
    interfaces: []
  };
  JikanAnime.prototype.component1 = function () {
    return this.mal_id;
  };
  JikanAnime.prototype.component2 = function () {
    return this.image_url;
  };
  JikanAnime.prototype.component3 = function () {
    return this.watching_status;
  };
  JikanAnime.prototype.copy_7ovtaa$ = function (mal_id, image_url, watching_status) {
    return new JikanAnime(mal_id === void 0 ? this.mal_id : mal_id, image_url === void 0 ? this.image_url : image_url, watching_status === void 0 ? this.watching_status : watching_status);
  };
  JikanAnime.prototype.toString = function () {
    return 'JikanAnime(mal_id=' + Kotlin.toString(this.mal_id) + (', image_url=' + Kotlin.toString(this.image_url)) + (', watching_status=' + Kotlin.toString(this.watching_status)) + ')';
  };
  JikanAnime.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mal_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.image_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.watching_status) | 0;
    return result;
  };
  JikanAnime.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.mal_id, other.mal_id) && Kotlin.equals(this.image_url, other.image_url) && Kotlin.equals(this.watching_status, other.watching_status)))));
  };
  function Grid() {
    this.map = HashMap_init();
  }
  Grid.prototype.set_vq7693$ = function (a, b, c) {
    var $receiver = this.map;
    var key = new Pair(a, b);
    $receiver.put_xwzc9p$(key, c);
  };
  Grid.prototype.get_vux9f0$ = function (a, b) {
    return this.map.get_11rb$(new Pair(a, b));
  };
  Grid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Grid',
    interfaces: []
  };
  function Pixel(red, blue, green, alpha) {
    Pixel$Companion_getInstance();
    if (red === void 0)
      red = 0;
    if (blue === void 0)
      blue = 0;
    if (green === void 0)
      green = 0;
    if (alpha === void 0)
      alpha = 255;
    this.red = red;
    this.blue = blue;
    this.green = green;
    this.alpha = alpha;
  }
  Pixel.prototype.getDiff_19x4km$ = function (candidate) {
    return abs(this.red - candidate.red | 0) + abs(this.green - candidate.green | 0) + abs(this.blue - candidate.blue | 0) | 0;
  };
  function Pixel$Companion() {
    Pixel$Companion_instance = this;
  }
  Pixel$Companion.prototype.serializer = function () {
    return Pixel$$serializer_getInstance();
  };
  Pixel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Pixel$Companion_instance = null;
  function Pixel$Companion_getInstance() {
    if (Pixel$Companion_instance === null) {
      new Pixel$Companion();
    }
    return Pixel$Companion_instance;
  }
  function Pixel$$serializer() {
    this.descriptor_cjx4wl$_0 = new SerialClassDescImpl('Pixel', this);
    this.descriptor.addElement_ivxn3r$('red', true);
    this.descriptor.addElement_ivxn3r$('blue', true);
    this.descriptor.addElement_ivxn3r$('green', true);
    this.descriptor.addElement_ivxn3r$('alpha', true);
    Pixel$$serializer_instance = this;
  }
  Object.defineProperty(Pixel$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_cjx4wl$_0;
    }
  });
  Pixel$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.red, 0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeIntElement_4wpqag$(this.descriptor, 0, obj.red);
    if (!equals(obj.blue, 0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.blue);
    if (!equals(obj.green, 0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeIntElement_4wpqag$(this.descriptor, 2, obj.green);
    if (!equals(obj.alpha, 255) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeIntElement_4wpqag$(this.descriptor, 3, obj.alpha);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Pixel$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeIntElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeIntElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeIntElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Pixel_init(bitMask0, local0, local1, local2, local3, null);
  };
  Pixel$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer, internal.IntSerializer, internal.IntSerializer];
  };
  Pixel$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Pixel$$serializer_instance = null;
  function Pixel$$serializer_getInstance() {
    if (Pixel$$serializer_instance === null) {
      new Pixel$$serializer();
    }
    return Pixel$$serializer_instance;
  }
  function Pixel_init(seen1, red, blue, green, alpha, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Pixel.prototype);
    if ((seen1 & 1) === 0)
      $this.red = 0;
    else
      $this.red = red;
    if ((seen1 & 2) === 0)
      $this.blue = 0;
    else
      $this.blue = blue;
    if ((seen1 & 4) === 0)
      $this.green = 0;
    else
      $this.green = green;
    if ((seen1 & 8) === 0)
      $this.alpha = 255;
    else
      $this.alpha = alpha;
    return $this;
  }
  Pixel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pixel',
    interfaces: []
  };
  Pixel.prototype.component1 = function () {
    return this.red;
  };
  Pixel.prototype.component2 = function () {
    return this.blue;
  };
  Pixel.prototype.component3 = function () {
    return this.green;
  };
  Pixel.prototype.component4 = function () {
    return this.alpha;
  };
  Pixel.prototype.copy_tjonv8$ = function (red, blue, green, alpha) {
    return new Pixel(red === void 0 ? this.red : red, blue === void 0 ? this.blue : blue, green === void 0 ? this.green : green, alpha === void 0 ? this.alpha : alpha);
  };
  Pixel.prototype.toString = function () {
    return 'Pixel(red=' + Kotlin.toString(this.red) + (', blue=' + Kotlin.toString(this.blue)) + (', green=' + Kotlin.toString(this.green)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  Pixel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  Pixel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  var pixelDataBlah;
  function TileImage(width, height, canvas) {
    if (canvas === void 0)
      canvas = null;
    this.width = width;
    this.height = height;
    this.pixels = new Grid();
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (canvas != null) {
      tmp$ = this.width;
      for (var i = 0; i < tmp$; i++) {
        tmp$_0 = this.height;
        for (var j = 0; j < tmp$_0; j++) {
          var data = canvas.getImageData(i, j, 1.0, 1.0).data;
          tmp$_1 = data[0];
          tmp$_2 = data[1];
          this.pixels.set_vq7693$(i, j, new Pixel(tmp$_1, data[2], tmp$_2, data[3]));
        }
      }
    }
  }
  TileImage.prototype.getSubImage_tjonv8$ = function (x, y, w, h) {
    var subImage = new TileImage(w, h);
    for (var i = 0; i < w; i++) {
      for (var j = 0; j < h; j++) {
        subImage.pixels.set_vq7693$(i, j, ensureNotNull(this.pixels.get_vux9f0$(i + x | 0, j + y | 0)));
      }
    }
    return subImage;
  };
  TileImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileImage',
    interfaces: []
  };
  function Mosaic() {
    Mosaic_instance = this;
  }
  function Coroutine$Mosaic$createMosaicFromTiles$lambda(this$Mosaic_0, tile_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$this$Mosaic = this$Mosaic_0;
    this.local$tmp$ = void 0;
    this.local$tileImageUrl = void 0;
    this.local$imageUrl = void 0;
    this.local$pixel = void 0;
    this.local$tile = tile_0;
  }
  Coroutine$Mosaic$createMosaicFromTiles$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Mosaic$createMosaicFromTiles$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Mosaic$createMosaicFromTiles$lambda.prototype.constructor = Coroutine$Mosaic$createMosaicFromTiles$lambda;
  Coroutine$Mosaic$createMosaicFromTiles$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$tile.image;
            if (this.local$tmp$ == null) {
              return null;
            }
             else {
              this.state_0 = 1;
              continue;
            }

          case 1:
            this.local$tileImageUrl = this.local$tmp$;
            this.local$imageUrl = this.local$tileImageUrl + '?w=1';
            this.exceptionState_0 = 5;
            this.local$pixel = Cache_getInstance().getImage_61zpoe$(this.local$tileImageUrl);
            if (this.local$pixel == null) {
              this.state_0 = 2;
              this.result_0 = await_0(this.local$this$Mosaic.getCanvasFromFile_0(this.local$imageUrl), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 2:
            var tileImage = this.result_0;
            this.local$pixel = tileImage.pixels.get_vux9f0$(0, 0);
            if (this.local$pixel != null) {
              Cache_getInstance().setImage_wpgvlk$(this.local$tileImageUrl, this.local$pixel);
            }

            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$pixel == null) {
              return null;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            return new Pair(this.local$pixel, this.local$tile);
          case 5:
            this.exceptionState_0 = 8;
            var exception = this.exception_0;
            if (Kotlin.isType(exception, Exception)) {
              println('Error ' + exception);
              println(this.local$imageUrl);
              return null;
            }
             else {
              throw exception;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            return;
          case 8:
            throw this.exception_0;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Mosaic$createMosaicFromTiles$lambda(this$Mosaic_0) {
    return function (tile_0, continuation_0, suspended) {
      var instance = new Coroutine$Mosaic$createMosaicFromTiles$lambda(this$Mosaic_0, tile_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Mosaic$createMosaicFromTiles$lambda_0(closure$images_0, this$Mosaic_0, entry_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$images = closure$images_0;
    this.local$this$Mosaic = this$Mosaic_0;
    this.local$entry = entry_0;
  }
  Coroutine$Mosaic$createMosaicFromTiles$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Mosaic$createMosaicFromTiles$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Mosaic$createMosaicFromTiles$lambda_0.prototype.constructor = Coroutine$Mosaic$createMosaicFromTiles$lambda_0;
  Coroutine$Mosaic$createMosaicFromTiles$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Pair(new Pair(this.local$entry.key.first, this.local$entry.key.second), this.local$this$Mosaic.getBestFitTile_0(this.local$entry.value, this.local$closure$images));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Mosaic$createMosaicFromTiles$lambda_0(closure$images_0, this$Mosaic_0) {
    return function (entry_0, continuation_0, suspended) {
      var instance = new Coroutine$Mosaic$createMosaicFromTiles$lambda_0(closure$images_0, this$Mosaic_0, entry_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$createMosaicFromTiles_7x6b9z$($this, input_0, tiles_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$newGrid = void 0;
    this.local$input = input_0;
    this.local$tiles = tiles_0;
  }
  Coroutine$createMosaicFromTiles_7x6b9z$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createMosaicFromTiles_7x6b9z$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createMosaicFromTiles_7x6b9z$.prototype.constructor = Coroutine$createMosaicFromTiles_7x6b9z$;
  Coroutine$createMosaicFromTiles_7x6b9z$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println('MOSAIC STATUS : Downloading images');
            this.state_0 = 2;
            this.result_0 = pmap(take(shuffled(this.local$tiles), 1000), Mosaic$createMosaicFromTiles$lambda(this.$this), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var images = filterNotNull(this.result_0);
            println('MOSAIC STATUS : Getting best fit tiles');
            this.local$newGrid = new Grid();
            this.state_0 = 3;
            this.result_0 = pmap(this.local$input.pixels.map.entries, Mosaic$createMosaicFromTiles$lambda_0(images, this.$this), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var tmp$;
            tmp$ = this.result_0.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              this.local$newGrid.set_vq7693$(element.first.first, element.first.second, element.second);
            }

            this.state_0 = 4;
            this.result_0 = toListList(this.local$newGrid, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Mosaic.prototype.createMosaicFromTiles_7x6b9z$ = function (input_0, tiles_0, continuation_0, suspended) {
    var instance = new Coroutine$createMosaicFromTiles_7x6b9z$(this, input_0, tiles_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Mosaic$getCanvasFromFile$lambda$lambda(closure$canvas, closure$image, closure$resolve) {
    return function (it) {
      closure$canvas.drawImage(closure$image, 0.0, 0.0, 1.0, 1.0);
      var returnedImage = new TileImage(closure$image.width, closure$image.height, closure$canvas);
      closure$resolve(returnedImage);
      return Unit;
    };
  }
  function Mosaic$getCanvasFromFile$lambda(closure$url) {
    return function (resolve, f) {
      var tmp$, tmp$_0;
      var canvas = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE()).getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
      var image = new Image();
      image.crossOrigin = 'Anonymous';
      image.onload = Mosaic$getCanvasFromFile$lambda$lambda(canvas, image, resolve);
      image.src = closure$url;
      return Unit;
    };
  }
  Mosaic.prototype.getCanvasFromFile_0 = function (url) {
    return new Promise(Mosaic$getCanvasFromFile$lambda(url));
  };
  Mosaic.prototype.getBestFitTile_0 = function (target, tiles) {
    var tmp$, tmp$_0;
    var destination = ArrayList_init(collectionSizeOrDefault(tiles, 10));
    var tmp$_1;
    tmp$_1 = tiles.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination.add_11rb$;
      var score = 765 - target.getDiff_19x4km$(item.first) | 0;
      var fuzzy = Random.Default.nextDouble_14dthe$(0.25) - 0.125;
      score = numberToInt(score + score * fuzzy);
      tmp$_2.call(destination, new Pair(score, item.second));
    }
    var maxBy$result;
    maxBy$break: do {
      var iterator = destination.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }
      var maxValue = maxElem.first;
      do {
        var e = iterator.next();
        var v = e.first;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    return (tmp$_0 = (tmp$ = maxBy$result) != null ? tmp$.second : null) != null ? tmp$_0 : new TileItem();
  };
  Mosaic.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Mosaic',
    interfaces: []
  };
  var Mosaic_instance = null;
  function Mosaic_getInstance() {
    if (Mosaic_instance === null) {
      new Mosaic();
    }
    return Mosaic_instance;
  }
  function Coroutine$toListList$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$toListList$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toListList$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toListList$lambda.prototype.constructor = Coroutine$toListList$lambda;
  Coroutine$toListList$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = toList_0(this.local$it);
            var destination = ArrayList_init_0();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              if (element.link != null && element.image != null)
                destination.add_11rb$(element);
            }

            return destination;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toListList$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$toListList$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$toListList($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toListList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toListList.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toListList.prototype.constructor = Coroutine$toListList;
  Coroutine$toListList.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$$receiver.map.keys;
            var maxBy$result;
            maxBy$break: do {
              var iterator = $receiver.iterator();
              if (!iterator.hasNext()) {
                maxBy$result = null;
                break maxBy$break;
              }
              var maxElem = iterator.next();
              if (!iterator.hasNext()) {
                maxBy$result = maxElem;
                break maxBy$break;
              }
              var maxValue = maxElem.first;
              do {
                var e_0 = iterator.next();
                var v = e_0.first;
                if (Kotlin.compareTo(maxValue, v) < 0) {
                  maxElem = e_0;
                  maxValue = v;
                }
              }
               while (iterator.hasNext());
              maxBy$result = maxElem;
            }
             while (false);
            var maxX = ensureNotNull(maxBy$result).first;
            var $receiver_0 = this.local$$receiver.map.keys;
            var maxBy$result_0;
            maxBy$break: do {
              var iterator_0 = $receiver_0.iterator();
              if (!iterator_0.hasNext()) {
                maxBy$result_0 = null;
                break maxBy$break;
              }
              var maxElem_0 = iterator_0.next();
              if (!iterator_0.hasNext()) {
                maxBy$result_0 = maxElem_0;
                break maxBy$break;
              }
              var maxValue_0 = maxElem_0.second;
              do {
                var e_1 = iterator_0.next();
                var v_0 = e_1.second;
                if (Kotlin.compareTo(maxValue_0, v_0) < 0) {
                  maxElem_0 = e_1;
                  maxValue_0 = v_0;
                }
              }
               while (iterator_0.hasNext());
              maxBy$result_0 = maxElem_0;
            }
             while (false);
            var maxY = ensureNotNull(maxBy$result_0).second;
            var array = Array_0(maxY + 1 | 0);
            var tmp$;
            tmp$ = array.length - 1 | 0;
            for (var i = 0; i <= tmp$; i++) {
              var array_0 = Array_0(maxX + 1 | 0);
              var tmp$_0;
              tmp$_0 = array_0.length - 1 | 0;
              for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
                array_0[i_0] = new TileItem();
              }
              array[i] = array_0;
            }

            var output = array;
            var tmp$_1;
            tmp$_1 = this.local$$receiver.map.entries.iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              var key = element.key;
              var value = element.value;
              output[key.second][key.first] = value;
            }

            this.state_0 = 2;
            this.result_0 = pmap(toList_0(output), toListList$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_1 = this.result_0;
            var destination = ArrayList_init_0();
            var tmp$_2;
            tmp$_2 = $receiver_1.iterator();
            while (tmp$_2.hasNext()) {
              var element_0 = tmp$_2.next();
              if (!element_0.isEmpty())
                destination.add_11rb$(element_0);
            }

            return destination;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toListList($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$toListList($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  Object.defineProperty(_, 'Cache', {
    get: Cache_getInstance
  });
  Object.defineProperty(_, 'inputImageCanvas', {
    get: function () {
      return inputImageCanvas;
    },
    set: function (value) {
      inputImageCanvas = value;
    }
  });
  _.createMosaic = createMosaic;
  _.getLatest = getLatest;
  _.pmap_7en38t$ = pmap;
  Object.defineProperty(TileItem, 'Companion', {
    get: TileItem$Companion_getInstance
  });
  Object.defineProperty(TileItem, '$serializer', {
    get: TileItem$$serializer_getInstance
  });
  _.TileItem_init_2u6d5w$ = TileItem_init;
  _.TileItem = TileItem;
  Object.defineProperty(User, 'Companion', {
    get: User$Companion_getInstance
  });
  Object.defineProperty(User, '$serializer', {
    get: User$$serializer_getInstance
  });
  _.User_init_l12ir2$ = User_init;
  _.User = User;
  Object.defineProperty(MosaicStatusResponse, 'Companion', {
    get: MosaicStatusResponse$Companion_getInstance
  });
  Object.defineProperty(MosaicStatusResponse, '$serializer', {
    get: MosaicStatusResponse$$serializer_getInstance
  });
  _.MosaicStatusResponse_init_41bcum$ = MosaicStatusResponse_init;
  _.MosaicStatusResponse = MosaicStatusResponse;
  Object.defineProperty(MosaicStatus, 'LOADING_USER_DATA', {
    get: MosaicStatus$LOADING_USER_DATA_getInstance
  });
  Object.defineProperty(MosaicStatus, 'CREATING_MOSAIC', {
    get: MosaicStatus$CREATING_MOSAIC_getInstance
  });
  Object.defineProperty(MosaicStatus, 'COMPLETE', {
    get: MosaicStatus$COMPLETE_getInstance
  });
  Object.defineProperty(MosaicStatus, 'Companion', {
    get: MosaicStatus$Companion_getInstance
  });
  Object.defineProperty(MosaicStatus, '$serializer', {
    get: MosaicStatus$$serializer_getInstance
  });
  _.MosaicStatus = MosaicStatus;
  Object.defineProperty(UserStatus, 'LOADING_USER_DATA', {
    get: UserStatus$LOADING_USER_DATA_getInstance
  });
  Object.defineProperty(UserStatus, 'COMPLETE', {
    get: UserStatus$COMPLETE_getInstance
  });
  Object.defineProperty(UserStatus, 'Companion', {
    get: UserStatus$Companion_getInstance
  });
  Object.defineProperty(UserStatus, '$serializer', {
    get: UserStatus$$serializer_getInstance
  });
  _.UserStatus = UserStatus;
  Object.defineProperty(JikanListResponse, 'Companion', {
    get: JikanListResponse$Companion_getInstance
  });
  Object.defineProperty(JikanListResponse, '$serializer', {
    get: JikanListResponse$$serializer_getInstance
  });
  _.JikanListResponse_init_iumm75$ = JikanListResponse_init;
  _.JikanListResponse = JikanListResponse;
  Object.defineProperty(JikanAnime, 'Companion', {
    get: JikanAnime$Companion_getInstance
  });
  Object.defineProperty(JikanAnime, '$serializer', {
    get: JikanAnime$$serializer_getInstance
  });
  _.JikanAnime_init_lcsqw6$ = JikanAnime_init;
  _.JikanAnime = JikanAnime;
  _.Grid = Grid;
  Object.defineProperty(Pixel, 'Companion', {
    get: Pixel$Companion_getInstance
  });
  Object.defineProperty(Pixel, '$serializer', {
    get: Pixel$$serializer_getInstance
  });
  _.Pixel_init_qbyruk$ = Pixel_init;
  _.Pixel = Pixel;
  Object.defineProperty(_, 'pixelDataBlah', {
    get: function () {
      return pixelDataBlah;
    },
    set: function (value) {
      pixelDataBlah = value;
    }
  });
  _.TileImage = TileImage;
  Object.defineProperty(_, 'Mosaic', {
    get: Mosaic_getInstance
  });
  Cache$CacheItem$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Cache$UserMap$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Cache$ImageMap$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  TileItem$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  User$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MosaicStatusResponse$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MosaicStatus$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  UserStatus$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  JikanListResponse$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  JikanAnime$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Pixel$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  latestMosaic = null;
  inputImageCanvas = null;
  pixelDataBlah = null;
  Kotlin.defineModule('animosaic', _);
  return _;
}(typeof animosaic === 'undefined' ? {} : animosaic, kotlin, this['kotlinx-serialization-kotlinx-serialization-runtime'], this['kotlinx-coroutines-core']);
