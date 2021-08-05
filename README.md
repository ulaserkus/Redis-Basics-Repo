*_*  Redis  *_*

KEYS * => bütün  key’leri listeler.

SET [Key] [Value]=> Key’e karşılık değer set etme. 

GET [Key] => Key’e ait olan değeri getirir. 

EXISTS [Key] => Key’in var olup olmama durumunu kontrol eder(0-1)

DEL [Key] => Key’i silme işlemini gerçekleştirir. 

APPEND [Key] [Value] => Key’in değeri ile girilen değeri birleştirir.

HSET [Set Name] [Key] [Value] => HashSet oluşturup birden fazla key-value saklanabilir.

HGETALL  [Set Name]  => Baton key-value değerlerini getirir.

HGET [Set Name]  [Field] => İlgili HashSet key değerini getirir.

 SET [KEY] 123456789 EX 10 => Redis üzerinde veri 10 sn sonra silinecek.

//PUB/SUB

SUBSCRIBE [Channel] => ilgili olduğu kanalı gözlemler.

PUBLISH [Channel]  [Message] => belirtilen kanala mesajı gönderir.