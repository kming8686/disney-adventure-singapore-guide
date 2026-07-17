window.restaurantSourceRestaurants=[// ⭐ 4일차 (5/17) 디너 — 전 식당 공통 메뉴 (Day 4 특별)
  { name: "4일차 디너 (전 식당 공통 메뉴)", deck: '본인 그룹', type: 'Rotational', zone: '—', desc: "5/17 (Day 4) 모든 로테이션 식당이 같은 특별 디너 메뉴 제공 · 물리적 장소는 그룹별 배정 · 클릭해서 메뉴 상세보기", sched: '5/17 18:00', menuKey: 'animators_palate_day4' },
  // ===== Rotational Dinner (디너만) =====
  { name: "Animator's Palate", deck: 5, type: 'Rotational', zone: 'AFT', desc: '디즈니 애니메이션 팔레트 테마 · Deck 5 AFT · 디너 only · 한국식 BBQ 바오 / 락사 / 팬-시어 스캘롭 등 · 클릭해서 메뉴 상세보기', sched: 'Dinner', menuKey: 'animators_palate' },
  { name: "Animator's Table (Dinner)", deck: 9, type: 'Rotational', zone: 'AFT', desc: 'ink-and-paint 테마 · 저녁 plated 코스 · 메뉴는 Animator\'s Palate 와 동일 · Deck 9 Aft · 클릭해서 메뉴 상세보기', sched: 'Dinner', menuKey: 'animators_palate' },
  { name: 'Enchanted Summer Restaurant (Dinner)', deck: 6, type: 'Rotational', zone: 'MID', desc: 'Tangled + Frozen 테마 · Maximus/Olaf dining halls · 저녁 plated · 메뉴 Pixar Market 와 동일 Asian fusion · 클릭해서 메뉴 상세보기', sched: 'Dinner', menuKey: 'pixar_market' },
  { name: "Navigators Club (Dinner)", deck: 6, type: 'Rotational', zone: 'AFT', desc: "Captains Table 테마 · 캐릭터 다이닝 · 저녁 plated 코스 ⛵ · 클릭해서 메뉴 상세보기", sched: 'Dinner', menuKey: 'navigators_club_dinner' },
  { name: 'Hollywood Spotlight Club', deck: 8, type: 'Rotational', zone: 'AFT', desc: '할리우드 무대 테마 · 엔터테인먼트 다이닝 · 디너 메뉴 · 클릭해서 메뉴 상세보기', sched: 'Dinner', menuKey: 'hollywood_spotlight_club' },
  { name: 'Pixar Market Restaurant (Dinner)', deck: 17, type: 'Rotational', zone: 'AFT', desc: '픽사 테마 · 저녁 plated 풀코스 🎬 · 클릭해서 메뉴 상세보기', sched: 'Dinner', menuKey: 'pixar_market' },
  // ===== À la carte 아침/런치 (Rotational 식당의 plated 식사) =====
  { name: "Animator's Table (Breakfast)", deck: 9, type: '알라카르테', zone: 'AFT', desc: 'ink-and-paint 테마 · 아침 plated · Pancakes / Belgian Waffle / Eggs / Congee / Masala Dosa · Deck 9 Aft · 클릭해서 메뉴 상세보기', sched: 'Breakfast', menuKey: 'animators_table_breakfast' },
  { name: "Animator's Table (Lunch)", deck: 9, type: '알라카르테', zone: 'AFT', desc: 'ink-and-paint 테마 · Burger / Steak Frites / Hainanese / Niçoise · 점심 plated · Deck 9 Aft · 클릭해서 메뉴 상세보기', sched: 'Lunch', menuKey: 'animators_table_lunch' },
  { name: "Navigator's Club (Breakfast)", deck: 6, type: '알라카르테', zone: 'AFT', desc: "Captain's Table 테마 · 캐릭터 다이닝 (미키/미니/도널드) · 아침 plated · Pancakes/Waffle/Eggs/Masala Dosa · Deck 6 Aft · 클릭해서 메뉴 상세보기", sched: 'Breakfast', menuKey: 'navigators_club_breakfast' },
  { name: "Navigators Club (Lunch)", deck: 6, type: '알라카르테', zone: 'AFT', desc: "Captains Table 테마 · 점심 ⛵ · 클릭해서 메뉴 상세보기", sched: 'Lunch', menuKey: 'navigators_club_lunch' },
  // ===== Buffet (아침 + 점심) — 식당당 1 카드 =====
  { name: 'Pixar Market (Buffet)', deck: 17, type: 'Buffet', zone: 'AFT', desc: '픽사 테마 buffet · 아침 + 점심 🎬 · Deck 17 AFT', sched: '아침 / 점심' },
  { name: 'Enchanted Summer (Buffet)', deck: 6, type: 'Buffet', zone: 'MID', desc: 'Tangled + Frozen 테마 buffet · 아침 + 점심 (12:00-14:30) · Deck 6 MID', sched: '아침 / 점심' },
  // Casual / Themed
  { name: "Mowgli's Eatery", deck: 10, type: 'Casual', zone: 'MID', desc: '정글북 테마 Indian · Build Your Own Bowl (Tandoori Chicken/Lamb/Butter Chicken/Kerala Fish Curry/Veg Momos) · Snack 11-18, 22-24 · Deck 10 · 클릭해서 메뉴 상세보기', sched: '5/17 12:00', menuKey: 'mowgli_eatery' },
  { name: "Gramma Tala's Kitchen", deck: 10, type: 'Casual', zone: 'MID', desc: 'Moana 할머니의 퍼시픽 요리 · Build Your Own Bowl (Hainanese/Huli-Huli/Black Pepper Beef) · Snack 11-18, 22-24 · 클릭해서 메뉴 상세보기', sched: '5/15 08:30', menuKey: 'gramma_tala_kitchen' },
  { name: "Stitch's Ohana Grill", deck: 10, type: 'Casual', zone: 'AFT', desc: 'Lilo & Stitch 테마 · 한식fusion 버거/그릴 (Gochujang/Huli-Huli/Impossible) · Deck 10 · 클릭해서 메뉴 상세보기', sched: '5/15 12:00', menuKey: 'stitch_ohana_grill' },
  { name: 'Cosmic Kebabs', deck: 10, type: 'Casual', zone: 'AFT', desc: 'Ms Marvel 테마 · Halal · Build Your Own Bowl (Kebabs/Shawarma/Falafel) · Deck 10 · 클릭해서 메뉴 상세보기', sched: '5/16 12:00', menuKey: 'cosmic_kebabs' },
  { name: "Mike & Sulley's Flavors of Asia", deck: 10, type: 'Casual', zone: 'AFT', desc: '몬스터 주식회사 테마 아시안 퓨전' },
  { name: 'Pizza Planet', deck: 17, type: 'Casual', zone: 'MID', desc: 'Toy Story Pizza Planet 테마 · 슬라이스 by slice (Four Cheese / Pepperoni) · Deck 10 · 클릭해서 메뉴 상세보기', sched: '5/15-5/17 스낵', menuKey: 'pizza_planet' },
  // Fine Dining (adult)
  { name: 'Palo Trattoria', deck: 10, type: 'Fine Dining', zone: 'AFT', desc: '성인 전용 이탈리안 파인다이닝 · 예약 필수 · 추가 요금' },
  // Room Service (객실)
  { name: 'Room Service (24h)', deck: '객실', type: 'Room Service', desc: '24시간 객실 룸서비스 · 무료 (특정 item 제외) 🛎 · 클릭해서 메뉴 상세보기', menuKey: 'room_service' },
  // Lounges / Bars
  { name: 'Marvel Style Studio', deck: 6, type: 'Activity', zone: 'AFT', desc: 'Marvel 캐릭터 다이닝/만남 venue · Deck 6 Aft' },
  { name: 'Palo Café ($)', deck: 10, type: 'Cafe', zone: 'AFT', desc: '성인 전용 이탈리안 카페 · 추가 요금 · Deck 10 Aft · 07:00-23:00', sched: '07:00-23:00' },
  { name: 'Spellbound (Lounge)', deck: 6, type: 'Lounge', zone: 'MID', desc: '디즈니 마법 테마 라운지 · Deck 6 Midship · 05:30-22:00' },
  { name: 'Bounce and Hops (Bar)', deck: 17, type: 'Bar', zone: 'MID', desc: 'Bounce and Hops bar/lounge · Deck 17 MID' },
  { name: "Tiana's Bayou Lounge", deck: 5, type: 'Lounge', zone: 'MID', desc: '공주와 개구리 테마 라운지' },
  { name: 'Royal Court Lounge', deck: 6, type: 'Lounge', zone: 'MID', desc: 'Town Square 중앙 라운지' },
  { name: 'Buccaneer Bar', deck: 6, type: 'Bar', zone: 'MID', desc: '해적 테마 바' },
  { name: 'D Lounge', deck: 7, type: 'Lounge', zone: 'MID', desc: '패밀리 라운지 · 다양한 쇼' },
  { name: 'Bewitching Boba & Brews ($)', deck: 10, type: 'Bar', zone: 'AFT', desc: '마법 테마 맥주 바 · Deck 10 AFT' },
  { name: 'Wayfinder Bar', deck: 10, type: 'Bar', zone: 'AFT', desc: 'Moana 테마 바' },
  { name: 'Garden Bar', deck: 11, type: 'Bar', zone: 'AFT', desc: 'Imagination Garden 옆 야외 바 · 객실 근처!' },
  { name: 'Taverna Portorosso', deck: 11, type: 'Bar', zone: 'MID', desc: 'Luca 테마 바 · 이탈리안 소도시 컨셉' },
  { name: 'Infinity Bar', deck: 18, type: 'Bar', zone: 'AFT', desc: 'Infinity Pool 옆' },
  // Cafes / Snacks
  { name: 'TWG Tea ($)', deck: 7, type: 'Cafe', zone: 'MID', desc: '싱가포르 프리미엄 티 · 유료' },
  { name: 'Bacha Coffee ($)', deck: 7, type: 'Cafe', zone: 'MID', desc: '모로코 프리미엄 커피 · 유료' },
  { name: 'Alley Cat Café', deck: 7, type: 'Cafe', zone: 'AFT', desc: 'San Fransokyo Street 거리 카페' },
  { name: "Wheezy's Freezies", deck: 17, type: 'Snack', zone: 'MID', desc: '아이스크림 · 디저트' },
  { name: 'Market Bar', deck: 17, type: 'Snack', zone: 'MID', desc: '풀사이드 스낵 & 음료' }
];
window.restaurantSourceMenus={
  animators_palate: {
    name: "Animator's Palate",
    theme: '디즈니 애니메이션 팔레트 테마 🎬',
    interactive: '게스트가 디지털 placemat 에 캐릭터 그림 → 식당 벽 화면에 애니메이션 등장 · 디너 only',
    deck: '5 AFT',
    sched: 'Dinner (TBD)',
    adult: {
      'Small Plates': [
        { name: 'Korean BBQ Beef Steamed Bao', desc: '소갈비 찐빵 · 고추장-호이신 · 절임 오이', emoji: '🥟' },
        { name: 'Rice Noodle Salad', desc: '다이콘/당근/콘페이스/칠리/코리앤더 · agave-lime', emoji: '🥗' },
        { name: 'Dragon Roll', desc: '참다랑어 · 신선 장어 · 아보카도 · 우나기 소스', emoji: '🍣' },
        { name: 'Chicken Satay', desc: '코코넛라이스 · 오이 · 케찹마니스 · 로스트 피넛', emoji: '🍢' },
        { name: 'Hearts of Palm', desc: '실란트로/라임/오이/벨페퍼 · 시트러스 드레싱 · 팝콘', emoji: '🌴' },
        { name: 'Romaine Heart Caesar Salad', desc: '체리토마토 · 파마산-레지아노 · 치아바타 크루통', emoji: '🥬' },
        { name: 'Wonton Soup', desc: '부드러운 치킨 만두 · 닭국물 · 생강 · 나파배추', emoji: '🍜' },
        { name: 'Molokai Corn & Taro Chowder', desc: '잘게 썬 옥수수 · 슬라이스 쪽파', emoji: '🌽' },
      ],
      'Entrées': [
        { name: 'Laksa Lemak ⭐', desc: '새우 · 타우 폭 · 락사 잎 · 칠리 (싱가폴 시그니처)', emoji: '🍤', sig: true },
        { name: 'Murgh Makhani Butter Chicken', desc: '가람 마살라 · 고수 · 자스민 라이스 · 파라타 · 라이타', emoji: '🍛' },
        { name: 'Pan-seared Pacific Scallops', desc: '트러플 크레미니 버섯 리조또 · 헤이즐넛 · 아루굴라-레몬 오일', emoji: '🐚' },
        { name: 'Tofu Poke', desc: '두부/타마리/오이/적양배추/래디시/브라운라이스/와사비-레몬', emoji: '🥗' },
        { name: 'Pan-seared Branzino Filet', desc: '회향/카넬리니 빈/체리뇰라 올리브/스위트 페퍼/유콘 감자 · 사프란 브로스', emoji: '🐟' },
        { name: 'Carved Slow-roasted Rosemary Beef Striploin', desc: '디종 허니 파스닙 매시 · 버터 그린빈 · 카베르네-타임 주스', emoji: '🥩' },
        { name: 'Chettinad Vegetable Kurma', desc: '카다멈/시나몬/칠리/캐슈/코코넛 크림 · 자스민 라이스 · 파라타', emoji: '🥥' },
        { name: 'Honey Soy-roasted Duck & Papaya Salad', desc: '무/양배추/파프리카/쪽파 · 미소-진저 드레싱', emoji: '🦆' },
        { name: 'Hainanese Chicken Rice ⭐', desc: '진간장 · 진저-갈릭 · 칠리 소스 (싱가폴 시그니처)', emoji: '🍗', sig: true },
        { name: 'Banana Leaf Steamed Filet of Salmon', desc: '찐 흰밥 · 청경채', emoji: '🐟' },
      ],
      'Bread Selection': [
        { name: 'Spring Onion Cheese / Soft White / Whole Wheat Roll', desc: '브레드 선택 (실 메뉴)', emoji: '🥖' },
      ],
      'Desserts': [
        { name: 'Almond-Pear Tart', desc: '포치드 페어 · 아몬드 프랑지판 · 맛차 소일 · 바닐라 아이스크림', emoji: '🍐' },
        { name: 'Salted Caramel Cheesecake', desc: '바닐라 치즈케이크 · 둘세 데 레체 글레이즈 · 피넛버터 라이스 크리스프', emoji: '🍰' },
        { name: 'Chocolate Decadence', desc: '비터 초콜릿 크렘 · 트러플 크렘 · 헤이즐넛 시폰', emoji: '🍫' },
      ],
      'Ice Cream Sundae': [
        { name: 'Cookies n Cream Sundae', desc: "Cookies n Cream Ice Cream · Chocolate Wafer Cookies · Chocolate Fudge Sauce · 휘핑크림", emoji: '🍨' },
      ],
      'No Sugar Added Dessert': [
        { name: 'Cappuccino Mousse', desc: '카푸치노 크렘 · 라즈베리 쿨리 (무설탕)', emoji: '☕' },
      ],
    },
    kids: {
      'Starters': [
        { name: 'Creamed Potato Soup', desc: '당근 · 셀러리', emoji: '🥣' },
        { name: 'Garden Salad', desc: '혼합 야채 · 당근 · 오이 · 드레싱 선택', emoji: '🥗' },
      ],
      'Entrées': [
        { name: 'Chicken Katsu', desc: '오이 스틱 · 코코넛 라이스 · 돈가스 소스 · (사이드: 자스민라이스/프렌치프라이/맥앤치즈/야채 선택)', emoji: '🍱' },
        { name: 'Crisp Vegetable Spring Rolls', desc: '호이신 디핑 소스 · (사이드: 자스민라이스/프렌치프라이/맥앤치즈/야채 선택)', emoji: '🥢' },
        { name: 'Hawaiian Barbecue Chicken Pizza', desc: '하와이안 BBQ 치킨 피자 · (사이드: 자스민라이스/프렌치프라이/맥앤치즈/야채 선택)', emoji: '🍕' },
        { name: 'Mini Cheeseburger', desc: '브리오슈 번 · (사이드: 자스민라이스/프렌치프라이/맥앤치즈/야채 선택)', emoji: '🍔' },
      ],
      'Disney Check Meal (건강 옵션)': [
        { name: 'Grilled Chicken ⭐', desc: '진저-스캘리언 라이스 · 베이비 복초이 · 망고 사고 · 저지방 우유/물', emoji: '🍗', sig: true },
        { name: 'Whole Wheat Spaghetti Pasta', desc: '메가 터키 미트볼 · 마리나라 · 샐러드 · 사과 슬라이스 · 저지방 우유/물', emoji: '🍝' },
      ],
      'Sweet Finish': [
        { name: 'Chocolate Dome', desc: '초콜릿 무스 · 딸기 컴포트 · 초콜릿 브라우니', emoji: '🍫' },
        { name: 'Assorted Ice Cream', desc: '아이스크림 선택', emoji: '🍦' },
      ],
    },
    babyTips: [
      '🍗 Hainanese Chicken — 닭+밥 plain 가능 (sauce 빼달라고)',
      '🐟 Banana Leaf Steamed Salmon — 자연 plain (steam)',
      '🥗 Tofu Poke — 두부+밥 plain (소스 빼면)',
      '🍜 Wonton Soup — 닭국물 plain (소금 빼면)',
      '👨‍🍳 영어 주문: "Could you grill it plain for our baby — no salt, no seasoning, please?"',
    ],
    // 후기 사진 (실 사진 — Disney 공식 / wdwnt / disneyfoodblog 등)
    photos: {
      restaurant: 'https://disneycruise.disney.go.com/content/dam/wdpro-assets/dcl/cruise-ships/disney-adventure/restaurants/animators-palate-restaurant/animators-palate-restaurant-16x9.jpg',
    },
  },
  // ⭐ 4일차 (5/17) Animator's Palate 마지막날 특별 디너 — Navigator 앱 캡처 실데이터 (2026-05-17)
  // 로테이션 시 표시되는 일반 animators_palate 메뉴와 다른 별도 메뉴.
  // Adult 메뉴 = Navigator 앱서 아직 캡처 안됨 (추가 가능).
  animators_palate_day4: {
    name: "⭐ 4일차 디너 · Animator's Palate (마지막날 특별)",
    theme: '🎬 5/17 마지막날 특별 디너 · Navigator 앱 실데이터',
    deck: '5 AFT',
    sched: '5/17 18:00',
    adult: {
      'Small Plates': [
        { name: 'Seared Vegetable Dumplings', desc: 'Shredded Bok Choy · Edamame Beans · Soy-Black Vinegar Drizzle (시어드 야채만두 · 청경채/에다마메/소이-블랙 비니거)', emoji: '🥟' },
        { name: 'Pickled Gulf Shrimp', desc: 'Satsuma Orange Salad · Confit Red Onions · Baby Spinach · Frisée (피클드 새우 · 오렌지샐러드/콩피 양파/스피니치)', emoji: '🦐' },
        { name: 'Cucumber Garden Roll', desc: 'Carrots · Bell Peppers · Zucchini · Cilantro · White Shoyu-Lemon Dressing (오이 가든 롤 · 화이트쇼유-레몬 드레싱)', emoji: '🥒' },
        { name: 'Vegetable Samosa', desc: 'Potato · Peas · Garlic · Cumin · Ginger · Tamarind · Mint Chutney (야채 사모사 · 민트처트니)', emoji: '🥟' },
        { name: 'Dill and Meyer Lemon-marinated Shrimp', desc: 'Minneola · English Cucumber · Crème Fraîche · Salmon Caviar (딜+레몬 마리네이드 새우 · 살몬캐비어)', emoji: '🦐' },
        { name: 'Watermelon, Orange, Daikon Radish Salad', desc: 'Endive · Avocado · Lime-Demerara Sugar Dressing (수박+오렌지+무 샐러드 · 라임 데메라라 드레싱)', emoji: '🍉' },
        { name: 'Chilled Mango Soup', desc: 'Passion Fruit · Ginger · Coconut (망고 수프 · 패션푸르트/생강/코코넛)', emoji: '🥭' },
        { name: 'Carrot and Cilantro Soup', desc: 'Banana Bread Croutons (당근+고수 수프 · 바나나브레드 크루통)', emoji: '🥕' },
      ],
      'Bread Selection': [
        { name: 'Bread Rolls', desc: 'Garlic / Soft White / Whole Wheat Rolls (마늘 / 화이트 / 통밀 롤)', emoji: '🥖' },
      ],
      'Entrées': [
        { name: 'Hong Kong Wonton (Contains Pork)', desc: 'Chicken Wontons · Chicken Bone Broth · Char Siu · Egg Noodles · Seasonal Greens (홍콩 원톤 · 차슈/계란면 · 돼지 함유)', emoji: '🍜' },
        { name: 'Chicken Katsu', desc: 'Chicken Breast · Steamed Rice · Kare Raisu · Tonkatsu Sauce (치킨 가츠 · 카레라이스 · 돈가스 소스)', emoji: '🍱' },
        { name: 'Chungdi Malai Shrimp Curry', desc: 'Turmeric · Cumin · Coconut-Garam Masala · Paratha · Basmati Rice · Lime (말라이 새우 커리 · 코코넛 가람마살라)', emoji: '🍛' },
        { name: 'Shiitake and Tofu Udon', desc: 'Udon Noodles · Baby Bok Choy · Green Onions · Kombu · Oyster Mushrooms · Miso Shiitake Broth (시이타케+두부 우동 · 미소 국물)', emoji: '🍜' },
        { name: 'Grilled Tuna Steak', desc: 'Black Bean Muneta · Queso Fresco · Crisp Cassava · Roasted Corn Chipotle Salsa (그릴드 참치 스테이크 · 옥수수 치폴레 살사)', emoji: '🐟' },
        { name: 'Ginger-Teriyaki Dusted Angus Beef Tenderloin ⭐', desc: 'Wasabi Mashed Potatoes · Bok Choy · Tamarind Barbecue Reduction (앵거스 비프 텐더로인 · 와사비 매시드 포테이토)', emoji: '🥩', sig: true },
        { name: 'Paneer Jalfrezi', desc: 'Paneer Cheese · Capsicum · Tomatoes · Green Chiles · Lime Leaf · Coriander · Basmati Rice · Paratha Flatbread · Raita (파니어 잘프레지 · 파라타)', emoji: '🧀' },
        { name: 'Lamb Shawarma Salad', desc: 'Slow-roasted Cumin-spiced Pulled Lamb · Iceberg + Romaine · Endive · Sumac Onions · Vine Tomatoes · Pickled Red Cabbage · Roasted Chickpeas · Cucumber · Lemon-Yogurt Dressing · Pita Bread (양고기 샤와르마 샐러드 · 피타브레드)', emoji: '🥗' },
        { name: 'Hainanese Chicken Rice ⭐', desc: 'Sweet Dark Soy Sauce · Ginger-Garlic Sauce · Chili Sauce (하이난 치킨라이스 · 다크소이/진저갈릭/칠리소스 · 싱가폴 시그니처)', emoji: '🍗', sig: true },
        { name: 'Banana Leaf Steamed Filet of Salmon', desc: 'Steamed White Rice · Bok Choy (바나나리프 스팀 살몬 · 흰밥 · 청경채)', emoji: '🐟' },
      ],
      'Desserts': [
        { name: 'Mango-Passion Fruit Crème', desc: 'Mango Compote · Coconut Macaroon Base · Guava Pâte de Fruit (망고-패션푸르트 크렘 · 코코넛 마카롱 베이스)', emoji: '🥭' },
        { name: 'Warm Banana Sticky Toffee Pudding', desc: 'Salted Caramel Sauce · Vanilla Ice Cream (따뜻한 바나나 스티키 토피 푸딩 · 솔티드 카라멜)', emoji: '🍌' },
        { name: 'Caramel-Macadamia Nut Cheesecake Tart', desc: 'Milk Chocolate Crème · Caramel Ganache (카라멜-마카다미아 치즈케이크 타르트 · 카라멜 가나슈)', emoji: '🍰' },
      ],
      'Ice Cream Sundae': [
        { name: "The Captain's Table Sundae ⭐", desc: 'Mint Chocolate Chip Ice Cream · Chocolate Sauce · Whipped Cream · Crunchy Dried Meringue (캡틴테이블 선디 · 민트초코칩 · 휘핑 · 머랭)', emoji: '🍨', sig: true },
      ],
      'No Sugar Added Dessert': [
        { name: 'Chocolate Cheesecake', desc: 'Chocolate Chiffon Cake · Chocolate Mirror Glaze (무설탕 초콜릿 치즈케이크 · 초콜릿 미러글레이즈)', emoji: '🍫' },
      ],
    },
    kids: {
      'Starters': [
        { name: 'Wonton Soup (Kids)', desc: 'Vegetable Dumplings · Light Soy-Ginger Broth (야채 만두 · 라이트 소이-진저 국물)', emoji: '🥟' },
        { name: 'Crunchy Rainbow Asian Salad', desc: 'Fresh Mixed Greens · Shredded Cabbage · Carrots · Bell Peppers · Cucumber Slices · 드레싱 선택', emoji: '🥗' },
      ],
      'Main Event': [
        { name: 'Seared Teriyaki Salmon', desc: 'Green Rice + Sweet Pineapple-Mango Salsa · 사이드 (자스민라이스/프렌치프라이/맥앤치즈/야채)', emoji: '🐟' },
        { name: 'Golden Chicken Strips', desc: 'Ranch Dressing · 사이드 (자스민라이스/프렌치프라이/맥앤치즈/야채)', emoji: '🍗' },
        { name: 'Roasted Chicken Alfredo Pizza', desc: '사이드 (자스민라이스/프렌치프라이/맥앤치즈/야채)', emoji: '🍕' },
        { name: 'Mini Cheeseburger', desc: 'On Brioche Bun · 사이드 (자스민라이스/프렌치프라이/맥앤치즈/야채)', emoji: '🍔' },
      ],
      'Disney Check Meal': [
        { name: 'Beef Tenderloin', desc: 'Coconut-scented Brown Rice · Stir-fried Snap Peas · Pineapple Parfait · Low Fat Milk/Water', emoji: '🥩' },
        { name: 'Whole Wheat Spiral Pasta', desc: 'Turkey Bolognese · Steamed Broccoli Florets · Apple Slices · Low Fat Milk/Water', emoji: '🍝' },
      ],
      'A Sweet Finish': [
        { name: 'Warm Fudge Chocolate Brownie', desc: 'Chocolate Sauce + Vanilla Ice Cream', emoji: '🍫' },
        { name: 'Selection of Assorted Ice Cream', desc: '아이스크림 선택', emoji: '🍦' },
      ],
    },
  },
  room_service: {
    name: 'Room Service (24h)',
    theme: '24시간 객실 룸서비스 🛎',
    interactive: '객실 전화 또는 Disney Cruise Line Navigator 앱으로 주문 · 대부분 메뉴 무료 (치즈 plate 등 일부 유료)',
    deck: '객실',
    sched: '24h',
    adult: {
      'Entrées': [
        { name: 'All Hands on Deck', desc: '인터내셔널 치즈 + 크래커 + 미니 베이비벨® (치즈 플레이트, 유료 가능)', emoji: '🧀' },
        { name: 'Chicken Wonton Noodle Soup', desc: '버섯 · 쪽파 · 청경채 · 오이-무 샐러드', emoji: '🍜' },
        { name: 'Rasam Indian Tomato Soup', desc: '바스마티 라이스 (인도식 시큼 토마토 수프)', emoji: '🍅' },
        { name: 'Pennette Bolognaise', desc: '페네 파스타 · 볼로네이즈 소스 · 파르미지아노-레지아노 · 마늘 크로스티니', emoji: '🍝' },
        { name: 'Grilled Angus American Cheeseburger', desc: '토스트한 브리오슈 · 아이스버그 양상추 · 비달리아 양파 · 토마토 · 딜 피클 · 야채 칩', emoji: '🍔' },
        { name: 'Crisp Breaded Chicken Tenders', desc: '큐피 유자 마요네즈 · 오이 · 간장-진저 갈릭 샐러드', emoji: '🍗' },
        { name: 'Dan-Dan Noodles', desc: '밀국수 · 다진 돼지고기 · 쓰촨 페퍼 · 갓잎 · 실파 · 오이-무 샐러드 (돼지 함유)', emoji: '🌶' },
        { name: 'Dal Makhani', desc: '슬로우쿡 렌틸 카레 · 파라타 · 오이 라이타 (인도 검은 렌틸)', emoji: '🫕' },
        { name: 'Grilled Salmon Salad', desc: '로메인 · 아이스버그 양상추 · 체리토마토 · 비달리아 양파 · 오이 · 사과-크랜베리 카샤 · 허니디종 드레싱', emoji: '🐟' },
      ],
      'Desserts': [
        { name: 'New York Cheesecake', desc: '라즈베리 가나슈 · 휘핑크림', emoji: '🍰' },
        { name: 'Chocolate Truffle Cake', desc: '초콜릿 브라우니 · 트러플 무스 · 초콜릿-헤이즐넛 스프레드', emoji: '🍫' },
      ],
    },
    babyTips: [
      '🍜 Chicken Wonton Noodle Soup — 닭국물 + 면 plain (sauce 빼면 가능)',
      '🍝 Pennette Bolognaise — 페네 plain (sauce 적게)',
      '🍔 치즈burger — patty plain (no salt, no seasoning, no cheese)',
      '🐟 Grilled Salmon — salmon fillet plain (dressing 빼고)',
      '👨‍🍳 "Could you prepare it plain for our baby — no salt, no seasoning, please?"',
    ],
  },
  animators_table_lunch: {
    name: "Animator's Table (Lunch)",
    theme: 'ink-and-paint animation 테마 🎬 · 점심',
    interactive: '점심 메뉴 — 12:00 PM ~ 1:30 PM (Deck 9 Aft)',
    deck: 9,
    sched: '5/15 12:00-13:30',
    adult: {
      'Small Plates': [
        { name: 'Steamed Chicken Siu Mai Dumplings', desc: '날치알 · 찐 야채 · 진저-갈릭 소스', emoji: '🥟' },
        { name: 'Sliced Serrano Ham (돼지 함유)', desc: 'Manchego 치즈 · 토마토 브레드', emoji: '🥓' },
        { name: 'Crisp Salmon Fish Cake', desc: '딜 · 스위트 그린 피스 · 감자 · 토마토 처트니', emoji: '🐟' },
        { name: 'Pork and Shrimp Wonton Soup (돼지 함유)', desc: '참깨 · 청경채 · 파 · 라이트 간장', emoji: '🍲' },
        { name: 'Roasted Cauliflower Soup', desc: '쿠민 향 · 구운 참깨', emoji: '🥦' },
      ],
      'Salads': [
        { name: 'Crisp Romaine Leaf and Iceberg Salad', desc: '체리 토마토 · 적양파 · 오이 · 당근 · 그릴드 닭가슴살 또는 그릴드 연어 선택', emoji: '🥗' },
        { name: 'Ahi Tuna Niçoise', desc: '하리코 베르 · 핑거링 감자 · 니수와즈 올리브 · 메추리알 · 흑후추 · 디종 머스터드 드레싱', emoji: '🐟' },
      ],
      'Burgers': [
        { name: 'The Classic Burger', desc: '앵거스 비프 · 브리오슈 번 · 아메리칸 체다 · 아이스버그 · 토마토 · 적양파 · 후렌치프라이 + 콜슬로', emoji: '🍔' },
        { name: 'Black Bean Burger', desc: '블랙빈 패티 · 감자 번 · 과카몰리 · 페퍼잭 치즈 · 파히타 페퍼 + 양파 · 고구마 프라이 (베지테리안)', emoji: '🌱' },
        { name: 'The Impossible® Cheeseburger', desc: '식물성 패티 · 브리오슈 번 · 체다 · 아이스버그 · 토마토 · 적양파 · 감자튀김 + 로스티드 갈릭 아이올리 (식물성)', emoji: '🌿' },
      ],
      "Chef's Recommendations": [
        { name: 'Steak Frites', desc: '설로인 스테이크 · 후렌치프라이 · 그릴드 토마토 · 타라곤-허브 버터', emoji: '🥩' },
        { name: 'Triple Pork Fried Rice (돼지 함유)', desc: '롱그레인 라이스 · 삼겹살 · 차슈 · 중국 소시지', emoji: '🍚' },
        { name: 'Baked Ziti Pasta', desc: '프로방살 소스 · 바질 · 시금치 · 칠리 · 파슬리 · 마늘 · 리코타 (베지테리안)', emoji: '🍝' },
        { name: 'Hainanese Chicken, Rice', desc: '단 다크 간장 · 진저-갈릭 sauce · 칠리 sauce', emoji: '🍗' },
      ],
      'Desserts': [
        { name: 'Strawberry Mille-Feuille', desc: '레이어드 퍼프 페이스트리 · 바닐라 페이스트리 크림 · 신선 딸기', emoji: '🍓' },
        { name: 'Warm Apple-Cinnamon Crêpe', desc: '그래니 스미스 사과 · Crème Pâtissière · 캐러멜 sauce · 바닐라 IC', emoji: '🥞' },
        { name: 'Italian-Style Ice Cream Sundae', desc: '헤이즐넛 젤라토 · 이태리 비스코티 · 초콜릿 sauce · 휘핑크림', emoji: '🍨' },
      ],
      'No Sugar Added Dessert': [
        { name: 'Raspberry Crème Brûlée', desc: '신선 베리 · 흑임자 머랭 (무설탕)', emoji: '🍮' },
      ],
      'For Children of All Ages': [
        { name: 'Three Cheese Pizza', desc: '모짜렐라 + 체다 + 파마산 · 스팀드 라이스 또는 후렌치프라이 + 신선 야채 사이드', emoji: '🍕' },
        { name: 'Golden Chicken Strips with Barbecue Sauce', desc: '튀긴 닭 strips + BBQ sauce + 스팀드 라이스 또는 후렌치프라이 + 신선 야채', emoji: '🍗' },
        { name: 'Chocolate Chip Cookies', desc: '바닐라 + 초콜릿 디핑 sauce', emoji: '🍪' },
      ],
      'Disney Check Meal (건강)': [
        { name: 'Grilled Beef Tenderloin', desc: '스매시드 감자 · 그린빈 · 채썬 당근 · 저지방 우유/물', emoji: '🥩' },
      ],
      'Dessert': [
        { name: 'Fresh Fruit Cup', desc: '신선 과일 컵', emoji: '🍓' },
      ],
    },

    babyTips: [
      '🍗 Hainanese Chicken, Rice — plain 닭+밥 (sauce 빼면)',
      '🥩 Grilled Beef Tenderloin (Kids) — 비프 plain',
      '🍓 Fresh Fruit Cup (Kids) — 자연 plain',
      '👨‍🍳 영어 주문: "Could you prepare it plain for our baby — no salt, no seasoning, please?"',
    ],
  },
  animators_table_breakfast: {
    name: "Animator's Table (Breakfast)",
    theme: 'ink-and-paint animation 테마 🎬 · 아침 buffet',
    interactive: '아침 메뉴 — 8:30 AM ~ 10:00 AM (Deck 9 Aft)',
    deck: 9,
    sched: '5/15 08:30-10:00',
    adult: {
      'From The Breakfast Pantry': [
        { name: 'Chilled Grapefruit', desc: '시원한 자몽', emoji: '🍊' },
        { name: 'Freshly Cut Fruit Bowl', desc: '캔탈로프 · 수박 · 허니듀 · 파인애플', emoji: '🍉' },
        { name: 'Sliced Smoked Salmon', desc: '크림치즈 · 양파 · 케이퍼 · 베이글', emoji: '🥯' },
        { name: "Nature's Muesli", desc: '그래놀라 · 오트밀 · 건포도 · 견과 · 요거트 · 우유 · 꿀', emoji: '🥣' },
        { name: 'Assorted Fruit Yogurts / Lowfat Plain Yogurt', desc: '요거트 선택', emoji: '🥛' },
      ],
      'Hot Bowls': [
        { name: 'Oatmeal', desc: '메이플 시럽 · 구운 피칸', emoji: '🥣' },
        { name: 'Congee with Youtiao', desc: '죽 · 고수 · 짠 계란 · 고지 베리 · 바삭 샬롯 · plain 또는 chicken 선택', emoji: '🍲' },
        { name: 'Kimchi Fried Rice with Sunny Side Up Fried Egg', desc: '김치볶음밥 + 반숙 계란 (한국식)', emoji: '🍳' },
        { name: 'Chicken Fried Rice with Sunny Side Up Fried Egg', desc: '치킨 볶음밥 + 반숙 계란', emoji: '🍳' },
      ],
      'Fresh From The Bakery': [
        { name: 'Bakery Selection', desc: '데니쉬 페이스트리 · 머핀 · 크루아상 · 베이글 · 도넛 · 잉글리시 머핀 · 화이트/통밀/호밀 토스트 + 잼 선택', emoji: '🥐' },
      ],
      'Breakfast Favorites': [
        { name: 'Buttermilk Pancakes', desc: '플레인 또는 초콜릿칩 · 메이플 시럽 · 휘핑 버터', emoji: '🥞' },
        { name: 'Belgian Waffle', desc: '블루베리 컴포트 · 딸기 크림', emoji: '🧇' },
        { name: 'Eggs For The Road', desc: '스크램블/프라이드/보일드 + 해시브라운 + 그릴드 치킨 소시지/그릴드 햄(돼지)/베이컨(돼지) 선택', emoji: '🍳' },
        { name: 'Omelets', desc: 'Denver(돼지) / Ham & Cheese(돼지) / Plain · 해시브라운 사이드 · 계란 대체 가능', emoji: '🧆' },
        { name: 'Southern Hash', desc: '신선 계란 + 해시브라운 + 그릴드 치킨 소시지 + 고수 + 파 + 페퍼 + 잭 치즈', emoji: '🍳' },
        { name: 'French Toast', desc: '브리오슈 · 휘핑 버터 + 시나몬 슈가', emoji: '🍞' },
        { name: 'Masala Dosa', desc: '스파이시 레드 토쿠 · 감자 마살라 · 삼바르 · 민트-고수 처트니 (남인도식)', emoji: '🥞' },
      ],
    },
    kids: {
      'For Children of All Ages': [
        { name: "Goofy's Get Up and Go", desc: '스크램블 계란 · 그릴드 치킨 소시지 · 토마토 · 다이스 감자', emoji: '🐶' },
        { name: "Captain Jack's Melon Boat", desc: '딸기 향 요거트 위 멜론 보트', emoji: '🍈' },
      ],
    },
    babyTips: [
      '🍉 Freshly Cut Fruit Bowl — 자연 과일 plain',
      '🍳 Eggs For The Road — 계란 plain (sausage/ham 빼면)',
      '🥞 Buttermilk Pancakes — plain pancake (시럽 빼면)',
      '👨‍🍳 영어 주문: "Could you prepare it plain for our baby — no salt, no seasoning, please?"',
    ],
  },
  hollywood_spotlight_club: {
    name: 'Hollywood Spotlight Club',
    theme: '할리우드 무대 테마 · 엔터테인먼트 다이닝 🎬 · 디너',
    interactive: '항해 테마 다이닝 (Deck 7) — 할리우드 영화 + Captain\'s Table dinner 메뉴 동일',
    deck: 7,
    sched: '5/17 18:00 (TBD)',
    adult: {
      'Small Plates': [
        { name: 'Sautéed Maitake Mushrooms', desc: '세사미 아티초크 퓌레 · 베이비 말라바 시금치 · 머쉬룸 다시 · 시트러스 비네그레트', emoji: '🍄' },
        { name: 'Fennel, Bartlett Pear, Tatsoi Salad', desc: '만체고 치즈 · 캔디드 월넛 · 에이지드 셰리 드레싱', emoji: '🥗' },
        { name: 'Porcini-spiced Ahi Tuna Sashimi', desc: '피클 연근 · 느타리 버섯 · 블랙 세사미 브리틀 · 와사비-유자 마요네즈', emoji: '🐟' },
        { name: 'Duck Confit Pastilla', desc: '대추야자 · 살구 · 진저 · 홍고추 · 사프란 · 라즈베리 소스', emoji: '🦆' },
        { name: 'Burrata Mozzarella + Prosciutto di Parma', desc: '크리스피 크랜베리/해바라기씨 필로 · 차드 블러드 오렌지 (돼지 함유)', emoji: '🧀' },
        { name: 'Classic Iceberg Wedge', desc: '체리 토마토 · 적양파 · 스모크 베이컨 라돈 · 메이태그 블루 치즈 (돼지 함유)', emoji: '🥬' },
        { name: 'Thai Shrimp Pumpkin Soup', desc: '코코넛 밀크 · 고수 · 레몬그라스', emoji: '🍲' },
        { name: 'Roasted Roma Tomato Soup', desc: '사워도우 퍼플 바질 크로스티니', emoji: '🍅' },
      ],
      'Bread Selection': [
        { name: 'Mini Herb Brioche / Soft White / Whole Wheat Roll', desc: '브레드 선택', emoji: '🥖' },
      ],
      'Entrées': [
        { name: 'Thai Boat Noodles ⭐', desc: '쌀국수 · 새우 · 치킨 · 타마린드-홍고추 · 피클 샬롯 · 계란 · 로스트 피넛 · 라임', emoji: '🍜', sig: true },
        { name: 'Roasted Kabocha Risotto', desc: '세이지 · 리크 · 시금치 · 토스트 헤이즐넛 (베지테리안)', emoji: '🍚' },
        { name: 'Chicken Tikka Masala', desc: '지라 라이스 · 카춤버 · 라이타 · 파라타 플랫브레드', emoji: '🍛' },
        { name: 'Cilantro-marinated Grouper Filet', desc: '터머릭 라이스 · 망고 · 라임 · 아보카도 · 적양파 · 블랙빈 살사', emoji: '🐟' },
        { name: 'Moroccan-spiced Roasted Kabocha and Calabaza', desc: '잘루크 · 가르반조콩 · 시나몬 브라운 라이스 · 쿠스쿠스 · 고수 · 아루굴라 · 피타 · 하리사 요거트', emoji: '🎃' },
        { name: 'Peppered Filet Mignon ⭐', desc: '버터 그린빈 · 핑거링 감자 해시 · 핑크 페퍼 카페오레', emoji: '🥩', sig: true },
        { name: 'Pav Bhaji Slow-cooked Vegetable Curry', desc: '터머릭 · 진저 · 쿠민 · 고수 · 레몬 · 지라 라이스 · 라이타 · 부드러운 파브 번', emoji: '🍆' },
        { name: 'Dill-marinated Shrimp Salad', desc: '포치드 새우 · 딜 · 다이스 오이 · 토마토 · 계란 · 자색 양파 · 레몬-올리브오일 · 아루굴라', emoji: '🦐' },
        { name: 'Hainanese Chicken, Rice', desc: '단 다크 간장 · 진저-갈릭 sauce · 칠리 sauce', emoji: '🍗' },
        { name: 'Banana Leaf Steamed Filet of Salmon', desc: '찐 흰밥 · 청경채', emoji: '🐟' },
      ],
      'Desserts': [
        { name: 'Chocolate Molten Cake ⭐', desc: '더블 초콜릿 소스 · 밀크 초콜릿 소일 · 맛차 아이스크림', emoji: '🍫', sig: true },
        { name: 'Ube Crème Brûlée', desc: '코코넛 비스코티', emoji: '🍮' },
        { name: 'Blueberry-Lemon Bavarian Cream', desc: '블루베리 컴포트 · 레몬 락 · 신선 베리 · 건조 라즈베리 머랭', emoji: '🫐' },
      ],
      'Ice Cream Sundae': [
        { name: 'Strawberry Shortcake Sundae', desc: '바닐라 아이스크림 · 딸기 컴포트 · 휘핑크림', emoji: '🍨' },
      ],
      'No Sugar Added Dessert': [
        { name: 'Coconut-Tapioca Pudding', desc: '망고-딸기 민트 살사', emoji: '🥥' },
      ],
    },
    kids: {
      'Starters': [
        { name: 'Roasted Creamy Tomato Soup', desc: '바삭한 치즈 트위스트', emoji: '🍅' },
        { name: 'Sweet Corn and Edamame Salad', desc: '신선 모듬 야채 · 시금치 · 스위트 콘 · 에다마메 · 드레싱 선택', emoji: '🌽' },
      ],
      'Entrées': [
        { name: 'Chicken Pot Pie', desc: '당근 · 감자 · 셀러리 · 완두콩', emoji: '🥧' },
        { name: 'Panko Crusted Cod', desc: '큐피 타르타르 소스', emoji: '🐟' },
        { name: 'Barbecue Chicken Pizza', desc: 'kids 인기 BBQ 피자', emoji: '🍕' },
        { name: 'Mini Cheeseburger', desc: '브리오슈 번 · (사이드: 자스민라이스/프렌치프라이/맥앤치즈/야채 선택)', emoji: '🍔' },
      ],
      'Disney Check Meal (건강)': [
        { name: 'Roasted Turkey Breast ⭐', desc: '퀴노아 · 단호박 · 당근 · 사과 슬라이스', emoji: '🦃', sig: true },
        { name: 'Whole Wheat Spiral Pasta ⭐', desc: '토마토 소스 · 단호박 · 주키니 · 과일 샐러드', emoji: '🍝', sig: true },
      ],
      'A Sweet Finish': [
        { name: 'Showtime Cupcake ⭐', desc: '바닐라 컵케이크 · 캐러멜 버터크림 · 캔디드 팝콘', emoji: '🧁', sig: true },
        { name: 'Selection of Assorted Ice Cream', desc: '아이스크림 선택', emoji: '🍦' },
      ],
    },
    babyTips: [
      '🍗 Hainanese Chicken — plain 닭+밥 (sauce 빼면)',
      '🐟 Banana Leaf Salmon — plain 연어 (bok choy 같이)',
      '👨‍🍳 영어 주문: "Could you prepare it plain for our baby — no salt, no seasoning, please?"',
    ],
  };