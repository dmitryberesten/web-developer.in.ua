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
];
