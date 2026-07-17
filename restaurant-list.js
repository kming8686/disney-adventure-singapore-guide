window.restaurantSourceRestaurants=[// ⭐ 4일차 (5/17) 디너 — 전 식당 공통 메뉴 (Day 4 특별)
  { name: "4일차 디너 (전 식당 공통 메뉴)", deck: '본인 그룹', type: 'Rotational', zone: '—', desc: "마지막날 특별 모든 로테이션 식당이 같은 특별 디너 메뉴 제공 · 물리적 장소는 그룹별 배정 · 클릭해서 메뉴 상세보기", sched: '마지막날 특별 디너', menuKey: 'animators_palate_day4' },
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