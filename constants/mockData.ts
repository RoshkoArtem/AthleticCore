export type Exercise = {
  id: string;
  name: string;
  muscles: string[];
  instructions: string;
  videoUrl: string;
};

export type ProgramDay = {
  day: number;
  title: string;
  exercises: Exercise[]; 
};

export type Program = {
  id: string;
  title: string;
  isIntense: boolean;
  description: string;
  img_url: string;
  equipment: string[];
  training_days: number;
  days: ProgramDay[];
};


export const PROGRAMS_DATA: Program[] = [
  {
    id: 'prog_4',
    isIntense: true,
    title: 'Фулбаді',
    description: 'Збалансована програма для гіпертрофії та розвитку сили з акцентом на верхню та нижню частини тіла.',
    img_url: 'https://thumbs.dreamstime.com/b/strong-bodybuilder-doing-exercises-dumbbells-turned-back-muscular-male-model-isolated-over-black-background-55122269.jpg',
    equipment: ['Штанга', 'Гантелі', 'Блочний тренажер', 'Кросовер', 'Лава для жиму'],
    training_days: 3,
    days: [
      {
        day: 1,
        title: 'Тренування 1',
        exercises: [
          {
            id: 'exc_full_1_1',
            name: 'Присідання зі штангою / гантелями',
            muscles: ['Квадрицепси', 'Сідниці', 'Приводячі м’язи', 'Кор'],
            instructions: 'Тримай спину рівно та опускайся до паралелі стегон з підлогою. Піднімайся через п’яти без округлення попереку. (3×8–10)',
            videoUrl: 'https://www.youtube.com/watch?v=5alpa1IikQM'
          },
          {
            id: 'exc_full_1_2',
            name: 'Жим лежачи',
            muscles: ['Великий грудний м’яз', 'Передній пучок дельт', 'Трицепси'],
            instructions: 'Опускай вагу контрольовано до грудей та не розводь лікті занадто широко. Вижимай плавно без ривків. (3×8–12)',
            videoUrl: 'https://www.youtube.com/shorts/hWbUlkb5Ms4'
          },
          {
            id: 'exc_full_1_3',
            name: 'Тяга верхнього блока',
            muscles: ['Найширші м’язи спини', 'Велика кругла мышца', 'Ромбоподібні м’язи', 'Біцепси'],
            instructions: 'Тягни перекладину до верхньої частини грудей і зводь лопатки. Не розгойдуй корпус під час руху. (3×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=JGeRYIZdojU'
          },
          {
            id: 'exc_full_1_4',
            name: 'Румунська тяга',
            muscles: ['Задня поверхня стегна', 'Сідниці', 'Розгиначі спини'],
            instructions: 'Відводь таз назад і тримай спину прямою весь рух. Опускай вагу вздовж ніг без округлення попереку. (3×8–10)',
            videoUrl: 'https://www.youtube.com/watch?v=7j-2w4-P14I'
          },
          {
            id: 'exc_full_1_5',
            name: 'Жим гантелей сидячи',
            muscles: ['Передній пучок дельт', 'Середній пучок дельт', 'Трицепси'],
            instructions: 'Жми гантелі вверх по дузі та не прогинай сильно поперек. Опускай гантелі до рівня вух контрольовано. (3×10)',
            videoUrl: 'https://www.youtube.com/watch?v=rO_iEImwHyo'
          },
          {
            id: 'exc_full_1_6',
            name: 'Згинання рук на біцепс',
            muscles: ['Біцепси', 'Плечові м’язи (брахіаліс)'],
            instructions: 'Тримай лікті біля корпусу та не розгойдуйся тілом. Піднімай і опускай вагу плавно. (2×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=6DeLZ6cbgWQ&pp=ygUURHVtYmJlbGwgQmljZXBzIEN1cmw%3D'
          },
          {
            id: 'exc_full_1_7',
            name: 'Планка',
            muscles: ['Прямий м’яз живота', 'Поперечний м’яз живота', 'Кор', 'Сідниці'],
            instructions: 'Тримай тіло рівним і напружуй прес та sідниці. Не провалюй поперек вниз. (3×30–60 сек)',
            videoUrl: 'https://www.youtube.com/watch?v=pvIjsG5Svck&t=2s&pp=ygUPcGxhbmsgaG93IHRvIGRv'
          }
        ]
      },
      {
        day: 2,
        title: 'Відпочинок',
        exercises: []
      },
      {
        day: 3,
        title: 'Відпочинок',
        exercises: []
      },
      {
        day: 4,
        title: 'Тренування 2',
        exercises: [
          {
            id: 'exc_full_2_1',
            name: 'Станова тяга',
            muscles: ['Розгиначі спини', 'Сідниці', 'Задня поверхня стегна', 'Квадрицепси', 'Найширші м’язи'],
            instructions: 'Тримай спину прямою та веди штангу близько до ніг. Піднімай вагу за рахунок ніг і тазу без ривків. (3×6–8)',
            videoUrl: 'https://www.youtube.com/watch?v=AweC3UaM14o&pp=ygUIRGVhZGxpZnQ%3D'
          },
          {
            id: 'exc_full_2_2',
            name: 'Жим гантелей на похилій лаві',
            muscles: ['Верхня частина грудних', 'Передній пучок дельт', 'Трицепси'],
            instructions: 'Опускай гантелі до грудей контрольовано та тримай лопатки зведеними. Вижимай вверх плавно без ривків. (3×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=IP4oeKh1Sd4&pp=ygUcRHVtYmJlbGwgSW5jbGluZSBDaGVzdCBQcmVzc9IHCQkECwGHKiGM7w%3D%3D'
          },
          {
            id: 'exc_full_2_3',
            name: 'Tяга гантелі в нахилі',
            muscles: ['Найширші м’язи спини', 'Ромбоподібні м’язи', 'Задня дельта'],
            instructions: 'Тягни лікоть назад і стискай лопатки у верхній точці. Не крути корпусом під час руху. (3×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=dFzUjzfih7k&pp=ygUWRHVtYmJlbGwgQmVudC1PdmVyIFJvdw%3D%3D'
          },
          {
            id: 'exc_full_2_4',
            name: 'Випади',
            muscles: ['Квадрицепси', 'Сідниці', 'Задня поверхня стегна'],
            instructions: 'Тримай корпус рівно та відштовхуйся п’ятою. Коліно передньої ноги не повинно сильно виходити вперед. (3×10 на ногу)',
            videoUrl: 'https://www.youtube.com/watch?v=lf4gJgKyLpI&pp=ygUGTHVuZ2Vz'
          },
          {
            id: 'exc_full_2_5',
            name: 'Розведення гантелей в сторони',
            muscles: ['Середній пучок дельт'],
            instructions: 'Піднімай руки до рівня плечей без ривків. Не піднімай плечі до вух. (3×12–15)',
            videoUrl: 'https://www.youtube.com/watch?v=XPPfnSEATJA&pp=ygUbRHVtYmJlbGwgU2lkZSBMYXRlcmFsIFJhaXNl'
          },
          {
            id: 'exc_full_2_6',
            name: 'Розгинання рук на трицепс',
            muscles: ['Трицепси'],
            instructions: 'Тримай лікті нерухомо та повністю розгинай руки. Опускай вагу повільно й контрольовано. (2×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=-zLyUAo1gMw&pp=ygUPVHJpY2VwIFB1c2hkb3du'
          },
          {
            id: 'exc_full_2_7',
            name: 'Скручування на прес',
            muscles: ['Прямий м’яз живота'],
            instructions: 'Піднімай верх корпусу за рахунок преса та не тягни шию руками. Виконуй рух плавно без інерції. (3×15–20)',
            videoUrl: 'https://www.youtube.com/watch?v=_M2Etme-tfE&pp=ygUIQ3J1bmNoZXM%3D'
          }
        ]
      },
      {
        day: 5,
        title: 'Відпочинок',
        exercises: []
      },
      {
        day: 6,
        title: 'Кардіо / Прес',
        exercises: [
          {
            id: 'exc_4_6_1',
            name: 'Скручування на прес',
            muscles: ['Прес'],
            instructions: 'Повільно скручуйте корпус, фокусуючись на м’язах живота. (3×15–20)',
            videoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4'
          }
        ]
      },
      {
        day: 7,
        title: 'Відпочинок',
        exercises: []
      },
    ]
  },
  {
    id: 'prog_2',
    isIntense: false,
    title: "Спліт",
    description: 'Зосередження на пресі та попереку',
    img_url: 'https://thumbs.dreamstime.com/b/handsome-power-athletic-young-man-great-physique-strong-bodybuilder-six-pack-perfect-abs-shoulders-biceps-triceps-55122268.jpg',
    equipment: ['Штанга', 'Гантелі', 'Блочний тренажер', 'Кросовер', 'Лава для жиму'],
    training_days: 4,
    days: [
      {
        day: 1,
        title: 'Груди + Тріцепс',
        exercises: [
          {
            id: 'exc_1_1',
            name: 'Жим штанги лежачи',
            muscles: ['Великий грудний м’яз', 'Передній пучок дельт', 'Трицепси'],
            instructions: 'Опускай штангу контрольовано до середини грудей та не розводь лікті занадто широко. Вижимай штангу плавно без ривків. (4×6–10)',
            videoUrl: 'https://www.youtube.com/watch?v=4Y2ZdHCOXok'
          },
          {
            id: 'exc_1_2',
            name: 'Жим гантелей на похилій лаві',
            muscles: ['Верхня частина грудних', 'Передній пучок дельт', 'Трицепси'],
            instructions: 'Тримай лопатки зведеними та опускай гантелі до рівня грудей. Вижимай вверх по дузі без ривків. (3×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=IP4oeKh1Sd4'
          },
          {
            id: 'exc_1_3',
            name: 'Зведення рук у кросовері / метелик',
            muscles: ['Грудні м’язи', 'Передній пучок дельт'],
            instructions: 'Тримай руки трохи зігнутими та зводь їх за рахунок грудних м’язів. Не роби різких рухів. (3×12–15)',
            videoUrl: 'https://www.youtube.com/watch?v=taI4XduLpTk'
          },
          {
            id: 'exc_1_4',
            name: 'Віджимання на брусах',
            muscles: ['Нижня частина грудних', 'Трицепси', 'Передній пучок дельт'],
            instructions: 'Нахили корпус трохи вперед і опускайся контрольовано. Не розводь лікті сильно в сторони. (3×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=2z8JmcrW-As'
          },
          {
            id: 'exc_1_5',
            name: 'Розгинання рук на блоці',
            muscles: ['Трицепси'],
            instructions: 'Тримай лікті нерухомо біля корпусу та повністю розгинай руки вниз. Повернення ваги роби повільно. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=-zLyUAo1gMw'
          },
          {
            id: 'exc_1_6',
            name: 'Французький жим',
            muscles: ['Трицепси'],
            instructions: 'Тримай лікті в одному положенні та опускай вагу контрольовано за голову. Не розводь лікті в сторони. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=d_KZxkY_0cM'
          }
        ]
      },
      {
        day: 2,
        title: 'Відпочинок',
        exercises: []
      },
      {
        day: 3,
        title: 'Спина + Біцепс',
        exercises: [
          {
            id: 'exc_2_1',
            name: 'Підтягування / тяга верхнього блока',
            muscles: ['Найширші м’язи спины', 'Велика кругла мышца', 'Ромбоподібні м’язи', 'Біцепси'],
            instructions: 'Тягнись грудьми до перекладини або блока та зводь лопатки. Не розгойдуй корпус. (4×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=JGeRYIZdojU'
          },
          {
            id: 'exc_2_2',
            name: 'Тяга штанги в нахилі',
            muscles: ['Найширші м’язи спины', 'Ромбоподібні м’язи', 'Задня дельта', 'Трапецієподібні м’язи'],
            instructions: 'Тримай спину рівною та тягни штангу до нижньої частини живота. Не піднімай корпус під час руху. (4×8–10)',
            videoUrl: 'https://www.youtube.com/watch?v=vT2GjY_Umpw'
          },
          {
            id: 'exc_2_3',
            name: 'Тяга горизонтального блока',
            muscles: ['Найширші м’язи спины', 'Ромбоподібні м’язи', 'Середня частина трапецій'],
            instructions: 'Тягни рукоятку до живота та стискай лопатки у кінці руху. Не округляй спину. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=GZbfZ033f74'
          },
          {
            id: 'exc_2_4',
            name: 'Румунська тяга',
            muscles: ['Задня поверхня стегна', 'Сідниці', 'Розгиначі спини'],
            instructions: 'Відводь таз назад і тримай спину прямою весь рух. Опускай вагу вздовж ніг контрольовано. (3×8–10)',
            videoUrl: 'https://www.youtube.com/watch?v=7j-2w4-P14I'
          },
          {
            id: 'exc_2_5',
            name: 'Підйом штанги на біцепс',
            muscles: ['Біцепси', 'Плечові м’язи (брахіаліс)'],
            instructions: 'Тримай лікті біля корпусу та не допомагай собі спиною. Опускай вагу повільно. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=kwG2ipFRgfo'
          },
          {
            id: 'exc_2_6',
            name: 'Молотки з гантелями',
            muscles: ['Плечопроменеві м’язи', 'Біцепси', 'Плечові м’язи'],
            instructions: 'Тримай кисті паралельно одна одній та піднімай вагу без розгойдування корпусу. Рух виконуй плавно. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=zC3nLlEvin4'
          }
        ]
      },
      {
        day: 4,
        title: 'Відпочинок',
        exercises: []
      },
      {
        day: 5,
        title: 'Ноги + Плечі',
        exercises: [
          {
            id: 'exc_3_1',
            name: 'Присідання зі штангою',
            muscles: ['Квадрицепси', 'Сідниці', 'Приводячі м’язи', 'Кор'],
            instructions: 'Тримай спину рівно та опускайся до паралелі стегон з підлогою. Піднімайся через п’яти без округлення попереку. (4×6–10)',
            videoUrl: 'https://www.youtube.com/watch?v=5alpa1IikQM'
          },
          {
            id: 'exc_3_2',
            name: 'Жим ногами',
            muscles: ['Квадрицепси', 'Сідниці', 'Задня поверхня стегна'],
            instructions: 'Не відривай таз від сидіння та опускай платформу контрольовано. Не випрямляй коліна повністю у верхній точці. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=IZxyjW7MPJQ'
          },
          {
            id: 'exc_3_3',
            name: 'Випади з гантелями',
            muscles: ['Квадрицепси', 'Сідниці', 'Задня поверхня стегна'],
            instructions: 'Тримай корпус рівно та відштовхуйся п’ятою передньої ноги. Не завалюй коліно всередину. (3×10 на ногу)',
            videoUrl: 'https://www.youtube.com/watch?v=lf4gJgKyLpI'
          },
          {
            id: 'exc_3_4',
            name: 'Жим гантелей сидячи',
            muscles: ['Передній пучок дельт', 'Середній пучок дельт', 'Трицепси'],
            instructions: 'Жми гантелі вверх по дузі та не прогинай сильно поперек. Опускай вагу контрольовано до рівня вух. (4×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=rO_iEImwHyo'
          },
          {
            id: 'exc_3_5',
            name: 'Розведення гантелей в сторони',
            muscles: ['Середній пучок дельт'],
            instructions: 'Піднімай руки до рівня плечей без ривків. Не піднімай плечі до вух. (3×12–15)',
            videoUrl: 'https://www.youtube.com/watch?v=XPPfnSEATJA'
          },
          {
            id: 'exc_3_6',
            name: 'Зворотні розведення на задню дельту',
            muscles: ['Задня дельта', 'Ромбоподібні м’язи'],
            instructions: 'Тримай корпус нерухомо та відводь руки в сторони за рахунок плечей. Не використовуй інерцію. (3×12–15)',
            videoUrl: 'https://www.youtube.com/watch?v=EA7u4Q_8HQ0'
          }
        ]
      },
      {
        day: 6,
        title: 'Відпочинок',
        exercises: []
      },
      {
        day: 7,
        title: 'Кардіо / Прес',
        exercises: [
          {
            id: 'exc_4_6_1',
            name: 'Скручування на прес',
            muscles: ['Прес'],
            instructions: 'Повільно скручуйте корпус, фокусуючись на м’язах живота. (3×15–20)',
            videoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4'
          }
        ]
      },
    ]
  },
  {
    id: 'prog_3',
    isIntense: false,
    title: 'Верх / Низ', // 3 + 1
    description: "Розтягніть і розслабте м'язи.",
    img_url: 'https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    equipment: ['Штанга', 'Гантелі', 'Блочний тренажер', 'Кросовер', 'Лава для жиму'],
    training_days: 4,
    days: [
      // Верх 1
      {
        day: 1,
        title: 'Верх 1',
        exercises: [
          {
            id: 'exc_4_1_1',
            name: 'Тяга верхнього блока',
            muscles: ['Спина', 'Найширші м’язи', 'Біцепс'],
            instructions: 'Тягни перекладину до верхньої частини грудей та зводь лопатки. Не розгойдуй корпус під час руху. (3×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=JGeRYIZdojU'
          },
          {
            id: 'exc_4_1_2',
            name: 'Тяга штанги в нахилі',
            muscles: ['Спина', 'Ромбоподібні', 'Трапеції', 'Задня дельта'],
            instructions: 'Тримай спину рівною та тягни штангу до живота. Не піднімай корпус під час виконання. (3×8–10)',
            videoUrl: 'https://www.youtube.com/watch?v=vT2GjY_Umpw'
          },
          {
            id: 'exc_4_1_3',
            name: 'Жим штанги лежачи',
            muscles: ['Груди', 'Трицепси', 'Передній пучок дельт'],
            instructions: 'Опускай штангу контрольовано до грудей та не розводь лікті широко. Вижимай плавно без ривків. (3×6–10)',
            videoUrl: 'https://www.youtube.com/watch?v=4Y2ZdHCOXok'
          },
          {
            id: 'exc_4_1_4',
            name: 'Жим гантелей на похилій лаві',
            muscles: ['Верх грудей', 'Передній пучок дельт', 'Трицепси'],
            instructions: 'Тримай лопатки зведеними та опускай гантелі контрольовано. Вижимай вверх по дузі без ривків. (3×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=IP4oeKh1Sd4'
          },
          {
            id: 'exc_4_1_5',
            name: 'Підйом штанги на біцепс',
            muscles: ['Біцепс', 'Передпліччя'],
            instructions: 'Тримай лікті біля корпусу та не розгойдуйся тілом. Опускай вагу повільно. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=kwG2ipFRgfo'
          },
          {
            id: 'exc_4_1_6',
            name: 'Молотки з гантелями',
            muscles: ['Брахіаліс', 'Біцепс', 'Передпліччя'],
            instructions: 'Тримай кисті паралельно та піднімай гантелі без інерції. Корпус має залишатись нерухомим. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=zC3nLlEvin4'
          },
          {
            id: 'exc_4_1_7',
            name: 'Розгинання рук на блоці',
            muscles: ['Трицепс'],
            instructions: 'Тримай лікті біля корпусу та повністю розгинай руки вниз. Повернення ваги виконуй повільно. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=-zLyUAo1gMw'
          },
          {
            id: 'exc_4_1_8',
            name: 'Французький жим',
            muscles: ['Трицепс', 'Довга головка трицепса'],
            instructions: 'Тримай лікті в одному положенні та опускай вагу контрольовано за голову. Не розводь лікті в сторони. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=d_KZxkY_0cM'
          }
        ]
      },
      {
        day: 2,
        title: 'Відпочинок',
        exercises: []
      },
      // Верх 2
      {
        day: 3,
        title: 'Верх 2',
        exercises: [
          {
            id: 'exc_4_4_1',
            name: 'Підтягування / тяга верхнього блока вузьким хватом',
            muscles: ['Спина', 'Найширші м’язи', 'Біцепс', 'Брахіаліс'],
            instructions: 'Тягнись грудьми до перекладини або рукоятки та зводь лопатки. Не використовуй розгойдування. (3×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=JGeRYIZdojU'
          },
          {
            id: 'exc_4_4_2',
            name: 'Тяга горизонтального блока',
            muscles: ['Спина', 'Середня частина трапецій', 'Ромбоподібні'],
            instructions: 'Тягни рукоятку до живота та стискай лопатки у кінці руху. Не округляй спину. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=GZbfZ033f74'
          },
          {
            id: 'exc_4_4_3',
            name: 'Жим гантелей лежачи',
            muscles: ['Груди', 'Трицепси', 'Передній пучок дельт'],
            instructions: 'Опускай гантелі до рівня грудей контрольовано та вижимай вверх без ривків. Не розводь лікті широко. (3×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=VmB1G1K7v94'
          },
          {
            id: 'exc_4_4_4',
            name: 'Зведення рук у кросовері',
            muscles: ['Внутрішня та нижня частина грудей'],
            instructions: 'Тримай руки трохи зігнутими та зводь їх за рахунок грудних м’язів. Не роби різких рухів. (3×12–15)',
            videoUrl: 'https://www.youtube.com/watch?v=taI4XduLpTk'
          },
          {
            id: 'exc_4_4_5',
            name: 'Згинання рук з гантелями сидячи',
            muscles: ['Біцепс', 'Супінатор передпліччя'],
            instructions: 'Тримай лікті нерухомо та піднімай вагу плавно. Не допомагай собі корпусом. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo'
          },
          {
            id: 'exc_4_4_6',
            name: 'Концентровані згинання на біцепс',
            muscles: ['Біцепс', 'Пік біцепса'],
            instructions: 'Упирай лікоть у ногу та піднімай вагу контрольовано. Повільно опускай гантель вниз. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=0AUGkch3tzc'
          },
          {
            id: 'exc_4_4_7',
            name: 'Розгинання рук через голову з гантеллю',
            muscles: ['Трицепс', 'Довга головка трицепса'],
            instructions: 'Тримай лікті близько до голови та повністю розгинай руки. Опускай вагу плавно. (3×10–12)',
            videoUrl: 'https://www.youtube.com/watch?v=_gsUck-7M74'
          },
          {
            id: 'exc_4_4_8',
            name: 'Віджимання вузьким хватом',
            muscles: ['Трицепс', 'Груди', 'Передній пучок дельт'],
            instructions: 'Тримай лікті ближче до корпусу та опускайся контрольовано. Відштовхуйся без ривків. (3×10–15)',
            videoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4'
          }
        ]
      },
      {
        day: 4,
        title: 'Відпочинок',
        exercises: []
      },
      // Низ + Плечи
      {
        day: 5,
        title: 'Низ + Плечі (Повторення)',
        exercises: [
          {
            id: 'exc_4_5_1',
            name: 'Присідання зі штангою',
            muscles: ['Квадрицепси', 'Сідниці'],
            instructions: 'Контрольований присід до паралелі. (4×6–10)',
            videoUrl: 'https://www.youtube.com/watch?v=5alpa1IikQM'
          },
          {
            id: 'exc_4_5_2',
            name: 'Румунська тяга',
            muscles: ['Задня поверхня стегна', 'Сідниці'],
            instructions: 'Фокус на розтягуванні задньої поверхні стегна. (3×8–10)',
            videoUrl: 'https://www.youtube.com/watch?v=7j-2w4-P14I'
          },
          {
            id: 'exc_4_5_3',
            name: 'Жим гантелей сидячи',
            muscles: ['Дельти'],
            instructions: 'Плавний жим вгору без ривків. (4×8–12)',
            videoUrl: 'https://www.youtube.com/watch?v=rO_iEImwHyo'
          },
          {
            id: 'exc_4_5_4',
            name: 'Розведення гантелей в сторони',
            muscles: ['Середня дельта'],
            instructions: 'Робота всередині амплітуди без інерції. (3×12–15)',
            videoUrl: 'https://www.youtube.com/watch?v=XPPfnSEATJA'
          }
        ]
      },
      // Кардио
      {
        day: 6,
        title: 'Кардіо / Прес',
        exercises: [
          {
            id: 'exc_4_6_1',
            name: 'Скручування на прес',
            muscles: ['Прес'],
            instructions: 'Повільно скручуйте корпус, фокусуючись на м’язах живота. (3×15–20)',
            videoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4'
          }
        ]
      },
      {
        day: 7,
        title: 'Відпочинок',
        exercises: []
      }
    ]
  }
];