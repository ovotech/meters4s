Index.PACKAGES = {"com" : [], "com.ovoenergy" : [], "com.ovoenergy.meters4s" : [{"name" : "com.ovoenergy.meters4s.MetricsConfig", "shortDescription" : "", "members_case class" : [{"member" : "com.ovoenergy.meters4s.MetricsConfig#<init>", "error" : "unsupported entity"}, {"label" : "tags", "tail" : ": Map[String, String]", "member" : "com.ovoenergy.meters4s.MetricsConfig.tags", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#tags:Map[String,String]", "kind" : "val"}, {"label" : "prefix", "tail" : ": String", "member" : "com.ovoenergy.meters4s.MetricsConfig.prefix", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#prefix:String", "kind" : "val"}, {"label" : "productElementNames", "tail" : "(): Iterator[String]", "member" : "scala.Product.productElementNames", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#productElementNames:Iterator[String]", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#wait():Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#notify():Unit", "kind" : "final def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#clone():Object", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/ovoenergy\/meters4s\/MetricsConfig.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "case class" : "com\/ovoenergy\/meters4s\/MetricsConfig.html", "kind" : "case class"}, {"name" : "com.ovoenergy.meters4s.Reporter", "object" : "com\/ovoenergy\/meters4s\/Reporter$.html", "members_object" : [{"label" : "fromRegistry", "tail" : "(mx: MeterRegistry, config: MetricsConfig)(arg0: Concurrent[F]): F[Reporter[F]]", "member" : "com.ovoenergy.meters4s.Reporter.fromRegistry", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#fromRegistry[F[_]](mx:io.micrometer.core.instrument.MeterRegistry,config:com.ovoenergy.meters4s.MetricsConfig)(implicitevidence$2:cats.effect.Concurrent[F]):F[com.ovoenergy.meters4s.Reporter[F]]", "kind" : "def"}, {"label" : "createSimple", "tail" : "(c: MetricsConfig)(arg0: Concurrent[F]): F[Reporter[F]]", "member" : "com.ovoenergy.meters4s.Reporter.createSimple", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#createSimple[F[_]](c:com.ovoenergy.meters4s.MetricsConfig)(implicitevidence$1:cats.effect.Concurrent[F]):F[com.ovoenergy.meters4s.Reporter[F]]", "kind" : "def"}, {"label" : "apply", "tail" : "(ev: Reporter[F]): Reporter[F]", "member" : "com.ovoenergy.meters4s.Reporter.apply", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#apply[F[_]](implicitev:com.ovoenergy.meters4s.Reporter[F]):com.ovoenergy.meters4s.Reporter[F]", "kind" : "def"}, {"label" : "Gauge", "tail" : "", "member" : "com.ovoenergy.meters4s.Reporter.Gauge", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#Gauge[F[_]]extendsAnyRef", "kind" : "trait"}, {"label" : "Timer", "tail" : "", "member" : "com.ovoenergy.meters4s.Reporter.Timer", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#Timer[F[_]]extendsAnyRef", "kind" : "trait"}, {"label" : "Counter", "tail" : "", "member" : "com.ovoenergy.meters4s.Reporter.Counter", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#Counter[F[_]]extendsAnyRef", "kind" : "trait"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#wait():Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/ovoenergy\/meters4s\/Reporter$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "trait" : "com\/ovoenergy\/meters4s\/Reporter.html", "kind" : "trait", "members_trait" : [{"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/ovoenergy\/meters4s\/Reporter.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#wait():Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}, {"label" : "gauge", "tail" : "(name: String, tags: Map[String, String]): F[Gauge[F]]", "member" : "com.ovoenergy.meters4s.Reporter.gauge", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#gauge(name:String,tags:Map[String,String]):F[com.ovoenergy.meters4s.Reporter.Gauge[F]]", "kind" : "abstract def"}, {"label" : "timer", "tail" : "(name: String, tags: Map[String, String]): F[Timer[F]]", "member" : "com.ovoenergy.meters4s.Reporter.timer", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#timer(name:String,tags:Map[String,String]):F[com.ovoenergy.meters4s.Reporter.Timer[F]]", "kind" : "abstract def"}, {"label" : "counter", "tail" : "(name: String, tags: Map[String, String]): F[Counter[F]]", "member" : "com.ovoenergy.meters4s.Reporter.counter", "link" : "com\/ovoenergy\/meters4s\/Reporter.html#counter(name:String,tags:Map[String,String]):F[com.ovoenergy.meters4s.Reporter.Counter[F]]", "kind" : "abstract def"}], "shortDescription" : ""}]};