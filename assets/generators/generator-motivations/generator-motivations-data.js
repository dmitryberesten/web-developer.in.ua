let quotes = [
  {
    quote: "Я вірю, що інженери врятують світ",
    source: "Джей Лено",
  },
  {
    quote: "Технологія – це те, чого не було, коли ви народилися",
    source: "Алан Кей",
  },
  {
    quote: "Технології – це всього лише інструмент",
    source: "Білл Гейтс",
  },
  {
    quote:
      "Найбільша цінність ІТ стартапу – це люди. Двері Brave завжди відкриті для тих, хто володіє двома якостями: справжнім професіоналізмом і справжньою людяністю.",
    source: "Брендан Айк",
  },
  {
    quote:
      "Я не знав, чи в мене вийде, я не знав, чи стану відомим, та я хотів створити щось корисне не лише для себе, а й для всієї ІТ-спільноти у світі.",
    source: "Соломон Хайкс",
  },
  {
    quote:
      "Я писав BitTorrent сидячи у залі в своїй невеличкій квартирі, у пошарпаних трусах та безробітний.",
    source: "Абрагам (Брем) Коен",
  },
  {
    quote:
      "Найбільший ризик – це не ризикувати. У світі, що швидко змінюється, єдина стратегія, яка гарантовано зазнає невдачі, — це не ризикувати",
    source: "Марк Цукерберг",
  },
  {
    quote: "Найважливіші успіхи досягаються, коли є ймовірність невдачі",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Кожного, хто має ініціативу, завжди критикують за те, що він їде занадто швидко, тому що завжди є хтось, хто хоче, щоб ви впали",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Питання, яке я задаю собі майже щодня: чи роблю я найважливіше, що міг би зробити?",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Мотивація — це думати, що ми є частиною чогось більшого, що ми необхідні, що ми маємо ціль, над якою працювати. Мотивація – це те, що робить нас справді щасливими",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Люди можуть бути дуже розумними або мати справді чудові здібності, але якщо вони не вірять у них та їхні ідеї, вони не будуть важко працювати для них",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Ідеї ​​повинні мати форму. Вони збуваються, коли ви над ними працюєте. Просто йдіть.",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Ми всі в цьому житті для того, щоб здійснити довгострокове бажання чи проект, все інше – це лише відволікання",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Я твердо вірю, що людей пам’ятають за те, що вони побудували. Якщо ви будуєте щось велике, не має значення, що про вас говорять в документальних фільмах, люди зберігають те, що ви побудували.",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Ми створюємо послуги не для того, щоб заробляти гроші; ми заробляємо гроші, щоб створювати кращі послуги.",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Дуже просте практичне правило для бізнесу — починати з найпростіших речей, так прийде прогрес",
    source: "Марк Цукерберг",
  },
  {
    quote: "Між дупою і диваном ніколи не пролетить долар",
    source: "Білл Гейтс",
  },
  {
    quote:
      "Чудесно святкувати свій успіх, але більш важливим є вміння виносити уроки зі своїх провалів",
    source: "Білл Гейтс",
  },
  {
    quote:
      "Штучний інтелект, енергетика і біонауки – перспективні галузі, в яких ви можете мати значний вплив. Якби я починав сьогодні, то саме в одній з цих сфер",
    source: "Білл Гейтс",
  },
  {
    quote:
      "Насолоджуйтеся тим, що ви робите і ви ніколи у своєму житті не будете працювати",
    source: "Білл Гейтс",
  },
  {
    quote:
      "Життя стає набагато веселіше, якщо підходити до всіх його викликів творчо",
    source: "Білл Гейтс",
  },
  {
    quote: "Коли вам в голову прийшла гарна ідея, дійте негайно",
    source: "Білл Гейтс",
  },
  {
    quote:
      "У мене не було своєї кімнати, я спав на підлозі у друзів, здавав пляшки з-під коли за 5 центів, щоб купити їжу, і щонеділі йшов 7 миль пішки, щоб раз на тиждень добре повечеряти в храмі кришнаїтів. Це було чудово!",
    source: "Cтів Джобс",
  },
  {
    quote:
      "Ви хочете все життя продавати підсолоджену воду чи хочете піти зі мною і спробувати змінити світ?",
    source: "Cтів Джобс",
  },
  {
    quote:
      "Може, я в дитинстві читав забагато коміксів. У коміксах завжди йдеться про порятунок світу. Мені здалося, що треба робити світ кращим, тому що протилежне не має сенсу.",
    source: "Ілон Маск",
  },
  {
    quote:
      "Зосередьте всі свої думки на роботі. Сонячні промені не горять, поки не сфокусовані.",
    source: "Олександр Грем Белл",
  },
  {
    quote:
      "Успіх — це спотикатися від невдачі до невдачі без втрати ентузіазму.",
    source: "Вінстон Черчилль",
  },
  {
    quote:
      "Зібратися разом — це початок. Триматись разом – прогрес. Працювати разом – це успіх",
    source: "Генрі Форд",
  },
  {
    quote: "Роби те, що можеш, з тим, що маєш, там, де ти є.",
    source: "Теодор Рузвельт",
  },
  {
    quote: "Успіх — це не відсутність невдачі; це наполегливість через невдачі",
    source: "Айша Тайлер",
  },
  {
    quote:
      "Життя сповнене викликів, але у мене завжди є три П: пристрасть, терпіння та наполегливість. І четверта – це піца",
    source: "Бутч Хартман",
  },
  {
    quote:
      "Справа не в тому, що я такий розумний, просто я довше займаюся проблемами",
    source: "Альберт Ейнштейн",
  },
  {
    quote:
      "Ми є те, що ми постійно робимо. Отже, досконалість — це не вчинок, а звичка",
    source: "Аристотель",
  },
  {
    quote:
      "Плекай свій розум великими думками, бо ти ніколи не підеш вище, ніж ти думаєш",
    source: "Бенджамін Дізраелі",
  },
  {
    quote:
      "Коли мені важко, я завжди нагадую собі про те, що коли я здамся - краще не стане",
    source: "Майк Тайсон",
  },
  {
    quote:
      "Справа в тому, що коли ви працюєте 24 години на добу і 7 днів на тиждень, удача приходить до вас сама.",
    source: "Арманд Хаммер",
  },
  {
    quote:
      "Краще помилитися, вклавши в помилку всю свою пристрасть, ніж несміливо уникати помилок, тремтячи від страху.",
    source: "Ден Мілман",
  },
  {
    quote:
      "Не має значення, чим ти займаєшся, – важливо, наскільки добре ти це робиш.",
    source: "Ден Мілман",
  },
  {
    quote:
      "Людина може бути генієм або мати всі необхідні навички, але якщо вона не вірить у себе, вона не викладатиметься на повну.",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Мрія не стає реальністю через магію; це потребує поту, рішучості та важкої праці",
    source: "Колін Пауелл",
  },
  {
    quote:
      "Алмази — це не що інше, як шматки вугілля, які прилипли до своїх робочих місць",
    source: "Малкольм Форбс",
  },
  {
    quote:
      "Ви можете досягти всього, до чого докладете свій розум і наполегливу роботу",
    source: "Сара Сампайо",
  },
  {
    quote:
      "Успіх — це любити себе, любити те, що ти робиш, і любити, як ти це робиш",
    source: "Майя Анджелоу",
  },
  {
    quote:
      "Успіх часто є результатом неправильного кроку в правильному напрямку",
    source: "Ел Бернштейн",
  },
  {
    quote:
      "Вірте в себе, в свої здібності та в свою винахідливість. Якщо ви не вірите в себе, ніхто інший не повинен.",
    source: "Сергій Брін, співзасновник Google",
  },
  {
    quote:
      "Не бійтесь зробити помилку. Важливо вчитися з них, вдосконалюватися і рухатися вперед.",
    source: "Джефф Безос, засновник Amazon",
  },
  {
    quote:
      "Не важливо, скільки разів ви падаєте, важливо, скільки разів ви піднімаєтесь",
    source: "Іван Санчез, програміст та блогер",
  },
  {
    quote:
      "Навчання і розвиток - ключові складові успіху в IT. Будьте постійно готові вчитися і пристосовуватися до змін.",
    source: "Майкл Браун",
  },
  {
    quote:
      "Ми тут, щоб зробити свій внесок у цей світ. А інакше навіщо ми тут?",
    source: "Стів Джобс",
  },
  {
    quote:
      "Немає такого поняття, як успішна людина, яка жодного разу не припустилася помилки. Є тільки успішні люди, які після помилки змінили свої плани, ґрунтуючись на цих самих помилках. Я, власне, один з таких хлопців.",
    source: "Стів Джобс",
  },
  {
    quote:
      "Коли мені бракувало грошей, я сідав думати, а не біг заробляти. Ідея — найдорожчий товар на світі.",
    source: "Стів Джобс",
  },
  {
    quote:
      "Якщо ви просто хочете йти швидко, ідіть самі. Але якщо хочете піти далеко, ідіть разом.",
    source: "Стів Джобс",
  },
  {
    quote:
      "Краще взяти і винайти завтрашній день, ніж переживати про те, що вчорашній був так собі.",
    source: "Стів Джобс",
  },
  {
    quote: "Невдачі не існує. Це лише зміна напрямку",
    source: "Алехандро Ходоровскі",
  },
  {
    quote:
      "За вченням буддистів, думка новачка дуже цінна - зберегти його в собі незмінною практично неможливо і майже недосяжно. Хоча чудеса трапляються",
    source: "Стів Джобс",
  },
  {
    quote:
      "Ми знаходимося тут, щоб зробити свій внесок у цей світ. А інакше навіщо ми тут?",
    source: "Стів Джобс",
  },
  {
    quote:
      "Хвала — божевільним! Бунтарям, бунтівникам, невдахам; тим, хто завжди недоречний і невпопад. Тим, хто бачить світ інакше. Вони не дотримуються правил. Сміються з підвалин. Можна цитувати їх, сперечатися з ними, прославляти або проклинати їх. Але тільки ігнорувати їх неможливо. Адже вони несуть зміни. Штурхають людство вперед. І нехай каже хтось: божевільні, ми говоримо: генії.",
    source: "Стів Джобс",
  },
  {
    quote:
      "Звичайно, існують люди, для яких гроші понад усе. Зазвичай це люди, які ніколи не стануть багатими. Тільки той досягає багатства, хто талановитий, щасливий, і не думає постійно про гроші",
    source: "Стів Джобс",
  },
  {
    quote:
      "Це завжди було однією з моїх мантр - зосередженість і простота. Просте може бути важче складного: ти повинен працювати на повну, щоб очистити свої думки і зробити все просто. Але врешті-решт воно того варте - досягнувши цього [простоти], ви зможете зрушити гори",
    source: "Стів Джобс",
  },
  {
    quote: "Працювати треба не 12 годин, а головою!",
    source: "Стів Джобс",
  },
  {
    quote:
      "Тільки наявність мети приносить життю сенс і задоволення. Це сприяє не тільки покращенню здоров'я та довголіттю, але також дає вам крапельку оптимізму у важкий час",
    source: "Стів Джобс",
  },
  {
    quote:
      "Будь чесний із самим собою, і з людьми, завжди роби все вчасно, ніколи не здавайся, йди до своїх цілей, навіть якщо все погано",
    source: "Стів Джобс",
  },
  {
    quote: "Найкращі люди ті, завдяки яким ти посміхаєшся найчастіше",
    source: "Стів Джобс",
  },
  {
    quote:
      "Ігноруйте свої помилки. Найголовніше, про що варто хвилюватися – чи робите ви те, у чому ви найкращі?",
    source: "Макс Левчин",
  },
  {
    quote:
      "Досвід нашої молодості формує те, що ми будемо робити пізніше в житті.",
    source: "Ян Кум",
  },
  {
    quote:
      "Не можна виграти, якщо ти тільки захищаєшся. Щоб виграти, потрібно йти в атаку.",
    source: "Лайт Ягамі",
  },
  {
    quote:
      "Я вважаю, що єдина сміливість, якої будь-хто з нас потребує – це сміливість йти за своїми власними мріями.",
    source: "Опра Уїнфрі",
  },
  {
    quote:
      "Пробувати – значить, на мить втратити рівновагу. Не пробувати – значить втратити себе.",
    source: "Серен К’єркегор",
  },
  {
    quote:
      "Успішні люди роблять те, що неуспішні не хочуть робити. Не прагніть, щоб було легше, прагніть, щоб було краще.",
    source: "Джим Рон",
  },
  {
    quote: "Знання – це не навичка. Навичка – це знання плюс 10 000 повторень.",
    source: "Мег Джей",
  },
  {
    quote:
      "Постарайся отримати те, що любиш. Або доведеться полюбити те, що отримав.",
    source: "Джордж Бернард Шоу",
  },
  {
    quote:
      "Здійсніть свої власні мрії, або хтось інший найме вас, щоб ви здійснили його мрії.",
    source: "Фарра Грей",
  },
  {
    quote:
      "Бездіяльність породжує занепокоєння і страх. Дія – впевненість і сміливість. Якщо ти хочеш перемогти страх, не сиди вдома і не думай про це. Встань і дій. ",
    source: "Мег Джей",
  },
  {
    quote:
      "Найважливіші рішення - це не те, що ви робите, а те, що ви вирішили не робити",
    source: "Стів Джобс",
  },
  {
    quote:
      "Якщо ти ще не знайшов того, що шукав, продовжуй пошуки. Не зупиняйся. Оскільки це стосується суті речей, ти не пропустиш моменту, коли справді знайдеш це",
    source: "Стів Джобс",
  },
  {
    quote: "Пройдений шлях і є нагорода",
    source: "Стів Джобс",
  },
  {
    quote:
      "Починай з малого, але мрій про велике. Не займайся одночасно надто багатьма речами. Займися спочатку небагатьма простими справами, і поступово переходь до складніших. І завжди думай про майбутнє",
    source: "Стів Джобс",
  },
  {
    quote:
      "Краще взяти і винайти завтрашній день, ніж перейматися тим, що вчорашній був так собі",
    source: "Стів Джобс",
  },
  {
    quote:
      "Люди можуть бути дуже розумними або мати справді чудові здібності, але якщо вони не вірять у них та їхні ідеї, вони не будуть важко працювати для них",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Ваш день буде гарним, якщо ви прокинетеся, знаючи, що побудуєте краще майбутнє. Якщо ні, у вас буде поганий день",
    source: "Ілон Маск",
  },
  {
    quote:
      "Мені подобається створювати речі, пов’язані з новими технологіями і які порушують умовності, щоб ти сказав мені: «Неймовірно! Як ти це зробив? Як ти це зробив?»",
    source: "Ілон Маск",
  },
  {
    quote:
      "Якщо щось досить важливе, навіть якщо шанси проти вас, ви повинні продовжувати намагатися",
    source: "Ілон Маск",
  },
  {
    quote:
      "Світу начхати на твоє самовідчуття і самоповагу. Світ чекає від тебе якихось досягнень, перш ніж взяти до уваги твоє почуття власної гідності.",
    source: "Білл Гейтс",
  },
  {
    quote:
      "Чудово святкувати свій успіх, але важливішим є вміння виносити уроки зі своїх провалів.",
    source: "Білл Гейтс",
  },
  {
    quote: "Інвестуйте у свою освіту",
    source: "Білл Гейтс",
  },
  {
    quote:
      "Успіх - паршивий учитель. Він змушує розумних людей думати, що вони непереможні.",
    source: "Білл Гейтс",
  },
  {
    quote:
      "Найбільший ризик – це не ризикувати. У швидко мінливому світі єдина стратегія, яка гарантовано зазнає невдачі, - це не ризикувати.",
    source: "Марк Цукерберг",
  },
  {
    quote: "Найважливіші успіхи досягаються тоді, коли є ймовірність невдачі.",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Будь-кого, хто виявляє ініціативу, завжди критикуватимуть за те, що він йде надто швидко, бо завжди є хтось, хто хоче, щоб ви впали.",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Питання, яке я ставлю собі майже щодня: чи роблю я найважливіше, що міг?",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Я не збираюся цього заперечувати, я, звичайно, думаю про гроші, але зростання - це щось набагато стратегічніше, ніж пачка рахунків.",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Мотивація - це думати, що ми є частиною чогось більшого, що ми потрібні, що у нас є мета, над якою потрібно працювати. Мотивація – ось що робить нас по-справжньому щасливими.",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Люди можуть бути дуже розумними або володіти дійсно чудовими здібностями, але якщо вони не вірять у них та їхні ідеї, вони не будуть старанно працювати для них",
    source: "Марк Цукерберг",
  },
  {
    quote:
      "Ваші яйця в кошику – це нормально, якщо ви контролюєте, що станеться з цим кошиком",
    source: "Ілон Маск",
  },
  {
    quote:
      "Наполегливість дуже важлива. Ви не повинні здаватися, якщо вас не змусять здатися",
    source: "Ілон Маск",
  },
  {
    quote:
      "Ви не повинні робити речі по-іншому, просто щоб зробити їх іншими. Вони мають бути кращими",
    source: "Ілон Маск",
  },
  {
    quote:
      "Найкращі вчителі для себе – це ми самі, хоч і не усвідомлюємо цього. Чим більше ми змушуємо себе вчитися, тим досвідченішим стаємо і сильніше підвищуємо рівень майстерності.",
    source: "Джин Хейнс",
  },
  {
    quote:
      "Ніколи не бійтеся спробувати себе у новому захопленні. Набувайте нових навичок. Поставте собі завдання щороку пробувати щось незвичайне та приємне особисто вам. Ви цього заслуговуєте",
    source: "Джин Хейнс",
  },
  {
    quote:
      "Не турбуйтеся, якщо щось не працює. Якби все працювало, вас звільнили б.",
    source: "Закон Мошера програмної інженерії",
  },
  {
    quote: "Налагодження коду це як полювання. Полювання на баги.",
    source: "Аміт Калантрі",
  },
  {
    quote:
      "Якщо ви хочете, щоб код було легко і швидко написати — зробіть його зручним для читання.",
    source: "Роберт Мартін",
  },
  {
    quote: "Працює? Не чіпай!",
    source: "Кожен програміст",
  },
  {
    quote:
      "Спочатку вчіть науку програмування та всю теорію. Далі напрацюйте свій програмістський стиль. Потім забудьте все і просто програмуйте.",
    source: "Джордж Каретт",
  },
  {
    quote:
      "Що б нового ми не створювали, ми маємо дати людям можливість переходити від старих інструментів та ідей до нових.",
    source: "Б'ярне Страуструп",
  },
];
