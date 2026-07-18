export type Lang = "ENG" | "简体" | "繁体" | "JPN";

// Dictionary mapping English strings to Simplified Chinese, Traditional Chinese, and Japanese.
// It excludes "Orion Residence", "Welton Group", "Orion Tower", "Orion Tower Client Relations" and "Yee" from translation as per instructions.
export const dictionary: Record<string, Record<Exclude<Lang, "ENG">, string>> = {
  // Navigation Menu
  "Overview": {
    "简体": "概述",
    "繁体": "概述",
    "JPN": "概要"
  },
  "Features": {
    "简体": "核心特色",
    "繁体": "核心特色",
    "JPN": "特徴"
  },
  "Amenities": {
    "简体": "专属设施",
    "繁体": "專屬設施",
    "JPN": "アメニティ"
  },
  "Floor Plans": {
    "简体": "户型规划",
    "繁体": "戶型規劃",
    "JPN": "フロアプラン"
  },
  "360° VR Tour": {
    "简体": "360° 全景看房",
    "繁体": "360° 全景看房",
    "JPN": "360° VRツアー"
  },
  "Gallery": {
    "简体": "实景画廊",
    "繁体": "實景畫廊",
    "JPN": "ギャラリー"
  },
  "Location": {
    "简体": "地理位置",
    "繁体": "地理位置",
    "JPN": "ロケーション"
  },
  "Private Portfolio": {
    "简体": "索取私人资料",
    "繁体": "索取私人資料",
    "JPN": "プライベート資料"
  },
  "Welton Group Presents": {
    "简体": "Welton Group 倾力打造",
    "繁体": "Welton Group 傾力打造",
    "JPN": "Welton Group 提供"
  },

  // Hero Section
  "An architectural masterpiece of 46 storeys rising in the core of Bukit Bintang, Kuala Lumpur. Designed with uncompromised craftsmanship for the distinguished elite.": {
    "简体": "傲立于吉隆坡武吉免登核心地带的46层建筑杰作。专为卓越精英倾心雕琢，致敬极致匠心。",
    "繁体": "傲立於吉隆坡武吉免登核心地帶的46層建築傑作。專為卓越精英傾心雕琢，致敬極致匠心。",
    "JPN": "クアラルンプールのブキッ・ビンタン中心部にそびえ立つ46階建ての建築の傑作。選ばれたエリートのために妥協のない職人技で設計されました。"
  },
  "Explore Floor Plans": {
    "简体": "探索户型图",
    "繁体": "探索戶型圖",
    "JPN": "間取りを見る"
  },
  "Schedule Private Tour": {
    "简体": "预约定做私享品鉴",
    "繁体": "預約定做私享品鑑",
    "JPN": "プライベートツアー予約"
  },

  // Stats Ribbon
  "Developer": {
    "简体": "开发商",
    "繁体": "開發商",
    "JPN": "開発元"
  },
  "Total Height": {
    "简体": "总高度/单位",
    "繁体": "總高度/單位",
    "JPN": "総階数 / 戸数"
  },
  "46 Storeys / 298 Units": {
    "简体": "46层 / 298个奢华单位",
    "繁体": "46層 / 298個奢華單位",
    "JPN": "46階建 / 298戸"
  },
  "Bukit Bintang, KL": {
    "简体": "吉隆坡 武吉免登",
    "繁体": "吉隆坡 武吉免登",
    "JPN": "クアラルンプール、ブキッ・ビンタン"
  },
  "Prestige Status": {
    "简体": "尊崇起价",
    "繁体": "尊崇起價",
    "JPN": "プレステージ価格"
  },
  "From RM 1.2M": {
    "简体": "120万令吉起",
    "繁体": "120萬令吉起",
    "JPN": "120万RMから"
  },

  // Overview
  "The Overview": {
    "简体": "项目概述",
    "繁体": "項目概述",
    "JPN": "概要"
  },
  "Where Celestial Prestige Meets Metropolitan Soul.": {
    "简体": "当星耀尊崇邂逅都市灵魂。",
    "繁体": "當星耀尊崇邂逅都市靈魂。",
    "JPN": "天上の名声と大都市の魂が交わる場所。"
  },
  "Orion Residence stands as a timeless modern monolith directly behind the majestic Starhill Gallery and Pavilion Kuala Lumpur. Designed with the architectural pedigree of tomorrow, it commands unblocked skyline vistas and a level of absolute privacy and service designed specifically for royal lifestyles.": {
    "简体": "Orion Residence 是一座永恒的现代丰碑，坐落于雄伟的升禧艺廊（Starhill Gallery）和柏威年广场（Pavilion Kuala Lumpur）正后方。秉承面向未来的建筑美学，坐拥无遮挡的城市天际线景观，并提供专为皇家生活方式量身定制的绝对隐私与服务。",
    "繁体": "Orion Residence 是一座永恆的現代豐碑，坐落於雄偉的升禧藝廊（Starhill Gallery）和柏威年廣場（Pavilion Kuala Lumpur）正後方。秉承面向未來的建築美學，坐擁無遮擋的城市天際線景觀，並提供專為皇家生活方式量身定制的絕對隱私與服務。",
    "JPN": "Orion Residence は、荘厳なスターヒル・ギャラリーとパビリオン・クアラルンプールの真裏に位置する、時代を超越した現代的なモノリスです。未来の建築的系譜を受け継ぎ、遮るもののないスカイラインの眺望と、ロイヤルなライフスタイルのために設計された絶対的なプライバシーとサービスを提供します。"
  },
  "From hand-selected Greek marble slabs to custom parallel German Bulthaup kitchen systems, every millimetre is curated to manifest an aesthetic of raw, understated opulence.": {
    "简体": "从手工甄选的希腊大理石板到定制的德国 Bulthaup 平行厨房系统，每一毫米的精心设计都旨在展现纯粹、低调奢华的美学境界。",
    "繁体": "從手工甄選的希臘大理石板到定制的德國 Bulthaup 平行廚房系統，每一毫米的精心設計都旨在展現純粹、低調奢華的美學境界。",
    "JPN": "厳選されたギリシャ産の大理石スラブから、ドイツのBulthaup製カスタム並行キッチンシステムに至るまで、細部にわたり、控えめながらも本物の贅沢な美学を表現するためにキュレーションされています。"
  },
  "\"We did not build another tower. We crafted a private celestial cloud above Bukit Bintang.\"": {
    "简体": "“我们并非只是建造另一座高楼，而是为武吉免登创造了一片私享的天际云霓。”",
    "繁体": "“我們並非只是建造另一座高樓，而是為武吉免登創造了一片私享的天際雲霓。”",
    "JPN": "「私たちはただタワーを建てたのではありません。ブキッ・ビンタンの上にプライベートな天空の雲を創り出したのです。」"
  },
  "— Lead Architect, Welton Design Partners": {
    "简体": "— 首席建筑师, Welton Design Partners",
    "繁体": "— 首席建築師, Welton Design Partners",
    "JPN": "— 主任建築家、Welton Design Partners"
  },
  "Show Unit Interior": {
    "简体": "样板间内饰",
    "繁体": "樣板間內飾",
    "JPN": "モデルルーム内装"
  },
  "Classic Elegance & Modern Framing": {
    "简体": "经典优雅与现代框架",
    "繁体": "經典優雅與現代框架",
    "JPN": "クラシックな優雅さとモダンな構成"
  },
  "Level 40 Oasis": {
    "简体": "40层空中绿洲",
    "繁体": "40層空中綠洲",
    "JPN": "40階のオアシス"
  },
  "Infinity Sky Pool Over Sunset KL": {
    "简体": "落日余晖下的无边际空中泳池",
    "繁体": "落日餘暉下的無邊際空中泳池",
    "JPN": "夕暮れのクアラルンプールを見渡すインフィニティスカイプール"
  },

  // Key Features
  "Bespoke Living": {
    "简体": "量身定制的高尚生活",
    "繁体": "量身定制的高尚生活",
    "JPN": "ビスポーク・リビング"
  },
  "Key Residence Features": {
    "简体": "核心住宅特色",
    "繁体": "核心住宅特色",
    "JPN": "レジデンスの主な特徴"
  },
  "Crafted with meticulous attention to detail, Orion Residence embodies uncompromised engineering and premium materials.": {
    "简体": "Orion Residence 倾注了对细节的严苛把控，完美融合了不妥协的工程技术与顶级臻选材质。",
    "繁体": "Orion Residence 傾注了對細節的嚴苛把控，完美融合了不妥協的工程技術與頂級臻選材質。",
    "JPN": "細部にまで細心の注意を払って造られた Orion Residence は、妥協のないエンジニアリングとプレミアムな素材を具現化しています。"
  },
  "Sovereign Ceiling Height": {
    "简体": "尊崇天花板高度",
    "繁体": "尊崇天花板高度",
    "JPN": "圧倒的な天井高"
  },
  "Generous 3.4-meter clear ceiling heights with customized pre-engineered ducted cooling channels and linear diffusers.": {
    "简体": "高达 3.4 米的净空高度，配备定制的预制隐藏式风管冷气管道与线性出风口。",
    "繁体": "高達 3.4 米的淨空高度，配備定制的預製隱藏式風管冷氣管道與線性出風口。",
    "JPN": "3.4メートルのゆとりある天井高。カスタム設計された先行配管ダクト空調とライン型ディフューザーを完備。"
  },
  "Acoustic Sanctuary Walls": {
    "简体": "隔音避风港墙体",
    "繁体": "隔音避風港牆體",
    "JPN": "防音サニクチュアリーウォール"
  },
  "Multi-layered drywall structures and double-glazed solar-acoustic glass shielding up to 45dB of urban frequencies.": {
    "简体": "多层石膏板结构与双层低辐射遮阳防音玻璃，可阻隔高达 45分贝 的城市喧嚣杂音。",
    "繁体": "多層石膏板結構與雙層低輻射遮陽防音玻璃，可阻隔高達 45分貝 的城市喧囂雜音。",
    "JPN": "多層ドライウォール構造と複層遮熱・防音ガラスにより、最大45dBの都市騒音を遮断します。"
  },
  "Biometric Entry Systems": {
    "简体": "生物识别门禁系统",
    "繁体": "生物識別門禁系統",
    "JPN": "生体認証エントリシステム"
  },
  "Grade-A multi-protocol access smart-locks from Samsung supporting optical vein and facial recognition vectors.": {
    "简体": "三星 Grade-A 多协议智能门锁，支持掌静脉及人脸识别多维安全验证。",
    "繁体": "三星 Grade-A 多協議智能門鎖，支持掌靜脈及人臉識別多維安全驗證。",
    "JPN": "静脈認証や顔認証ベクトルをサポートする、サムスン製のハイグレードなマルチプロトコル・スマートロック。"
  },
  "Gourmet Engineering": {
    "简体": "顶级精工厨卫",
    "繁体": "頂級精工廚衛",
    "JPN": "グルメエンジニアリング"
  },
  "German Bulthaup parallel counter joinery paired with fully integrated Gaggenau gas/induction cooking hobs.": {
    "简体": "德国 Bulthaup 并行台面橱柜，完美搭配全嵌入式 Gaggenau 燃气/电磁感应双效灶具。",
    "繁体": "德國 Bulthaup 並行檯面櫥櫃，完美搭配全嵌入式 Gaggenau 燃氣/電磁感應雙效灶具。",
    "JPN": "ドイツのBulthaup製並行カウンターと、完全に統合されたGaggenau製のガス・IHクッキングヒーター。"
  },
  "Climatic Mastery": {
    "简体": "气候大师智能环控",
    "繁体": "氣候大師智能環控",
    "JPN": "クライマティック・マスタリー"
  },
  "App-controlled variable refrigerant flow (VRF) system by Daikin with active carbon micron filters for allergen purification.": {
    "简体": "大金（Daikin）智能 app 调控变频多联机（VRF）系统，配置活性炭微米级滤网，高效净化过敏原。",
    "繁体": "大金（Daikin）智能 app 調控變頻多聯機（VRF）系統，配置活性炭微米級濾網，高效淨化過敏原。",
    "JPN": "ダイキン製のアプリ制御式可変冷媒流量（VRF）システム。アレルゲンを浄化する活性炭ミクロンフィルターを搭載。"
  },
  "Marble Masterpieces": {
    "简体": "天然大理石精工",
    "繁体": "天然大理石精工",
    "JPN": "大理石の傑作"
  },
  "Hand-finished book-matched Greek Volakas marble floors laid with zero-grouting visual seamlessness technology.": {
    "简体": "手工打磨的希腊 Volakas 奢华大理石对花拼接地板，采用尖端无缝铺贴技术呈现极致平整。",
    "繁体": "手工打磨的希臘 Volakas 奢華大理石對花拼接地板，採用尖端無縫鋪貼技術呈現極致平整。",
    "JPN": "継ぎ目を極限まで排したシームレス技術で敷き詰められた、手仕上げのギリシャ産ボラカス大理石フロア。"
  },
  "Smart Biometric Entry": {
    "简体": "智能生物识别门禁",
    "繁体": "智能生物識別門禁",
    "JPN": "スマート生体認証エントリー"
  },
  "Advanced German-engineered Häfele smart lock systems with fingerprint, mobile app, and physical key overrides.": {
    "简体": "先进的德国海福乐（Häfele）智能锁系统，支持指纹、移动端App及机械钥匙物理重置。",
    "繁体": "先进的德国海福乐（Häfele）智能锁系统，支持指纹、移动端App及机械钥匙物理重置。",
    "JPN": "指紋、モバイルアプリ、物理キーでのリセットに対応する、最先端のドイツ製Häfeleスマートロックシステム。"
  },
  "Precision Climate Control": {
    "简体": "精准温度控制",
    "繁体": "精準溫度控制",
    "JPN": "高精度温度コントロール"
  },
  "Custom Daikin VRF multi-split climate systems with embedded anti-microbial PM2.5 air filtration.": {
    "简体": "定制大金（Daikin）VRF多联式变频空调系统，内置防霉抗菌 PM2.5 空气净化滤网。",
    "繁体": "定制大金（Daikin）VRF多聯式變頻空調系統，內置防霉抗菌 PM2.5 空氣淨化濾網。",
    "JPN": "抗菌PM2.5空気清浄機能を搭載した、ダイキン製カスタムVRFマルチスプリットエアコンシステム。"
  },
  "Greek Volakas Marble": {
    "简体": "希腊 Volakas 奢华大理石",
    "繁体": "希臘 Volakas 奢華大理石",
    "JPN": "ギリシャ産ボラカス大理石"
  },
  "Living salons featuring book-matched Greek Volakas natural marble floors, hand-polished and sealed for eternity.": {
    "简体": "客厅区域铺设对花手工希腊 Volakas 天然大理石地板，经过手工打磨并进行永久性防护密封。",
    "繁体": "客廳區域鋪設對花手工希臘 Volakas 天然大理石地板，經過手工打磨並進行永久性防護密封。",
    "JPN": "手仕上げされ、耐久処理を施した、ギリシャ産ボラカス天然大理石のブックマッチフロアをリビングルームに配置。"
  },
  "Panoramic Corner Orientations": {
    "简体": "270度环阔转角朝向",
    "繁体": "270度環闊轉角朝向",
    "JPN": "270度パノラマコーナー方位"
  },
  "Optimized glass facades maximizing unblocked viewpoints toward the TRX Financial Tower and Petronas Twin Towers.": {
    "简体": "极致优化的玻璃幕墙，最大化无遮挡景观通道，直接俯瞰 TRX 金融中心和双子塔壮丽夜景。",
    "繁体": "極致優化的玻璃幕牆，最大化無遮擋景觀通道，直接俯瞰 TRX 金融中心和雙子塔壯麗夜景。",
    "JPN": "TRXフィナンシャルタワーやペトロナスツインタワーを望む、視界を遮らない最適化されたガラスファサード。"
  },

  // Interactive Blueprint
  "Interactive Space Blueprint": {
    "简体": "交互式空间蓝图",
    "繁体": "交互式空間藍圖",
    "JPN": "インタラクティブ・スペース・ブループリント"
  },
  "Virtual Blueprints": {
    "简体": "虚拟蓝图设计",
    "繁体": "虛擬藍圖設計",
    "JPN": "バーチャル・ブループリント"
  },
  "Hover or tap the pulse points to inspect custom finishings, materials, and internal structural design metrics.": {
    "简体": "悬停或点击呼吸光点，即可查看定制饰面、高端材质及内部结构设计的核心参数指标。",
    "繁体": "懸停或點擊呼吸光點，即可查看定制飾面、高端材質及內部結構設計的核心參數指標。",
    "JPN": "パルスポイントにホバーまたはタップすると、カスタム仕上げ、素材、内部構造設計の基準を確認できます。"
  },
  "Built-up": {
    "简体": "建筑面积",
    "繁体": "建築面積",
    "JPN": "専有面積"
  },
  "Dimensions": {
    "简体": "空间尺寸",
    "繁体": "空間尺寸",
    "JPN": "寸法"
  },
  "Craft Materials": {
    "简体": "精工材质",
    "繁体": "精工材質",
    "JPN": "クラフト素材"
  },

  // VR Tour Section
  "Interactive Virtual Tour": {
    "简体": "交互式全景看房",
    "繁体": "交互式全景看房",
    "JPN": "インタラクティブVRツアー"
  },
  "360° Showroom Experience": {
    "简体": "360° 实景展厅体验",
    "繁体": "360° 實景展廳體驗",
    "JPN": "360° ショールーム体験"
  },
  "Immerse yourself inside our physical sales gallery virtually. Click anywhere to interact, pan, and preview the premium finishes.": {
    "简体": "线上沉浸式步入我们的线下销售展厅。点击画面进行漫游、平移缩放并预览顶级饰面细节。",
    "繁体": "線上沉浸式步入我們的線下銷售展廳。點擊畫面進行漫遊、平移縮放並預覽頂級飾面細節。",
    "JPN": "実際の販売ギャラリーをバーチャルで体験できます。クリックして回転、移動、高品質な仕上げのプレビューが可能です。"
  },
  "Enter Immersive 360° Experience": {
    "简体": "开启沉浸式 360° 全景体验",
    "繁体": "開啟沉浸式 360° 全景體驗",
    "JPN": "インマージブ360°体験を開始"
  },
  "Open In New Tab": {
    "简体": "在新标签页中打开",
    "繁体": "在新標籤頁中打開",
    "JPN": "新しいタブで開く"
  },
  "Disable Interaction": {
    "简体": "停用交互",
    "繁体": "停用交互",
    "JPN": "操作を無効にする"
  },
  "Full Window": {
    "简体": "全屏窗口",
    "繁体": "全屏窗口",
    "JPN": "全画面表示"
  },

  // Gallery
  "Immersive Gallery": {
    "简体": "实景画廊",
    "繁体": "實景畫廊",
    "JPN": "没入型ギャラリー"
  },
  "The Crafted Estate": {
    "简体": "卓越精工豪邸",
    "繁体": "卓越精工豪邸",
    "JPN": "美の邸宅"
  },
  "Experience the spaces designed to exceed the high standards of luxury living in Southeast Asia. Filter through our premium facility spaces below.": {
    "简体": "体验旨在超越东南亚顶奢豪宅标准的极致空间。您可以通过下方选项筛选我们的高定配套设施空间。",
    "繁体": "體驗旨在超越東南亞頂奢豪宅標準的極致空間。您可以通過下方選項篩選我們的高定配套設施空間。",
    "JPN": "東南アジアにおけるラグジュアリーライフの基準を超える空間をご体験ください。以下から施設スペースを絞り込むことができます。"
  },
  "All Spaces": {
    "简体": "全部空间",
    "繁体": "全部空間",
    "JPN": "すべてのスペース"
  },
  "Architecture": {
    "简体": "建筑之美",
    "繁体": "建築之美",
    "JPN": "アーキテクチャ"
  },
  "Facilities & Amenities": {
    "简体": "配套设施与服务",
    "繁体": "配套設施與服務",
    "JPN": "施設＆アメニティ"
  },
  "Residences": {
    "简体": "奢华住宅",
    "繁体": "奢華住宅",
    "JPN": "レジデンス"
  },

  // Layouts Section
  "Luxurious Residences": {
    "简体": "尊崇奢华官邸",
    "繁体": "尊崇奢華官邸",
    "JPN": "贅を尽くした邸宅"
  },
  "Bespoke Floor Plans": {
    "简体": "高定户型规划",
    "繁体": "高定戶型規劃",
    "JPN": "ビスポーク・フロアプラン"
  },
  "Select a configuration to explore detailed blueprint specifications, floor plans, starting prices, and tailored dimensions.": {
    "简体": "选择特定的房型配置，即可探究详尽的精工规格、户型图纸、专属起售价及空间尺寸规划。",
    "繁体": "選擇特定的房型配置，即可探究詳盡的精工規格、戶型圖紙、專屬起售價及空間尺寸規劃。",
    "JPN": "仕様、間取り図、開始価格、および特別設計された寸法を確認するために構成を選択してください。"
  },
  "sq ft": {
    "简体": "平方英尺",
    "繁体": "平方英尺",
    "JPN": "平方フィート"
  },
  "sq m": {
    "简体": "平方米",
    "繁体": "平方米",
    "JPN": "㎡"
  },
  "Bedrooms": {
    "简体": "卧室",
    "繁体": "臥室",
    "JPN": "ベッドルーム"
  },
  "Bathrooms": {
    "简体": "卫浴",
    "繁体": "衛浴",
    "JPN": "バスルーム"
  },
  "Balcony Facing": {
    "简体": "阳台朝向",
    "繁体": "陽台朝向",
    "JPN": "バルコニー方位"
  },
  "Starting Price": {
    "简体": "专属起售价",
    "繁体": "專屬起售價",
    "JPN": "開始価格"
  },
  "Direction": {
    "简体": "方向",
    "繁体": "方向",
    "JPN": "方向"
  },
  "Premium Finishings & Structural Specs": {
    "简体": "顶级硬装与结构规格说明",
    "繁体": "頂級硬裝與結構規格說明",
    "JPN": "高級仕上げ＆構造仕様"
  },
  "Floor Finishes": {
    "简体": "地面饰面工艺",
    "繁体": "地面飾面工藝",
    "JPN": "床仕上げ"
  },
  "Gourmet Cooking Systems": {
    "简体": "高定厨房料理系统",
    "繁体": "高定廚房料理系統",
    "JPN": "グルメ調理システム"
  },
  "Smart Door Security": {
    "简体": "智能安全入户门禁",
    "繁体": "智能安全入戶門禁",
    "JPN": "スマートドアセキュリティ"
  },
  "Sanitary Fittings & Bathrooms": {
    "简体": "卫浴陶瓷洁具与五金件",
    "繁体": "衛浴陶瓷潔具與五金件",
    "JPN": "サニタリーフィッティング＆バス"
  },
  "Ceiling Details": {
    "简体": "吊顶及照明系统工艺",
    "繁体": "吊頂及照明系統工藝",
    "JPN": "天井詳細"
  },
  "Soundproofing Guarantee": {
    "简体": "尊享无忧隔音保证",
    "繁体": "尊享無憂隔音保證",
    "JPN": "遮音保証"
  },
  "Equipped with thick custom party walls achieving a certified acoustic rating of up to 60dB sound dampening.": {
    "简体": "配备加厚定制分户墙，达到获得认证的最高 60分贝 的极佳隔音降噪效果。",
    "繁体": "配備加厚定制分戶牆，達到獲得認證的最高 60分貝 的極佳隔音降噪效果。",
    "JPN": "最大60dBの減衰効果がある防音壁を備えています。"
  },
  "Selected Unit": {
    "简体": "已选户型",
    "繁体": "已選戶型",
    "JPN": "選択されたユニット"
  },
  "Built-up Size": {
    "简体": "套内建筑面积",
    "繁体": "套內建築面積",
    "JPN": "専有面積"
  },
  "Private Rooms": {
    "简体": "私人房间数",
    "繁体": "私人房間數",
    "JPN": "個室"
  },
  "Price Tier": {
    "简体": "价格档次",
    "繁体": "價格檔次",
    "JPN": "価格帯"
  },
  "Key Floor Assets": {
    "简体": "核心户型亮点",
    "繁体": "核心戶型亮點",
    "JPN": "フロアの主な特長"
  },
  "Check Availability for This Unit": {
    "简体": "查询此户型最新销控",
    "繁体": "查詢此戶型最新銷控",
    "JPN": "このユニットの空き状況を確認"
  },
  "Premium Layout Architecture": {
    "简体": "尊贵户型美学建构",
    "繁体": "尊貴戶型美學建構",
    "JPN": "プレミアムレイアウト設計"
  },
  "Each residential plan is constructed with dynamic core wall placements to allow broad interior layout modifications.": {
    "简体": "每一套住宅平面方案都经过创新的承重墙优化排布，以实现极富弹性的大范围内部格局改造。",
    "繁体": "每一套住宅平面方案都經過創新的承重牆優化排布，以實現極富彈性的大範圍內部格局改造。",
    "JPN": "各住戸プランは、柔軟なインテリアレイアウト変更が可能なダイナミックなコアウォール配置で構成されています。"
  },

  // Facilities Level Info
  "Celestial Lifestyle": {
    "简体": "星宇云霄生活配套",
    "繁体": "星宇雲霄生活配套",
    "JPN": "天空のライフスタイル"
  },
  "The Sovereign Facilities": {
    "简体": "君御专属配套设施",
    "繁体": "君御專屬配套設施",
    "JPN": "ソブリン・ファシリティ"
  },
  "Distributed beautifully across three signature zones, offering uncompromised security, luxury, and leisure.": {
    "简体": "精致错落排布于三大标志性楼层区域，呈献无懈可击的安全屏障、极致奢华与休闲享受。",
    "繁体": "精緻錯落排布於三大標誌性樓層區域，呈獻無懈可擊的安全屏障、極致奢華與休閒享受。",
    "JPN": "極上のセキュリティ、ラグジュアリー、レジャーを提供する、3つのシグネチャーゾーンに美しく配置されたアメニティ。"
  },
  "Level 40": {
    "简体": "第 40 层",
    "繁体": "第 40 層",
    "JPN": "40階"
  },
  "Level 10": {
    "简体": "第 10 层",
    "繁体": "第 10 層",
    "JPN": "10階"
  },
  "Ground Floor": {
    "简体": "首层大堂",
    "繁体": "首層大堂",
    "JPN": "1階グランドフロア"
  },
  "The Oasis Wellness Deck": {
    "简体": "空中康体御苑",
    "繁体": "空中康體御苑",
    "JPN": "オアシス・ウェルネスデッキ"
  },
  "Sovereign VIP Services": {
    "简体": "君御 VIP 至尊服务",
    "繁体": "君御 VIP 至尊服務",
    "JPN": "ソブリンVIPサービス"
  },

  // Location Section
  "Prime Location": {
    "简体": "核心绝佳区位",
    "繁体": "核心絕佳區位",
    "JPN": "最高峰の立地"
  },
  "The Epicenter of Bukit Bintang": {
    "简体": "武吉免登的黄金焦点",
    "繁体": "武吉免登的黃金焦點",
    "JPN": "ブキッ・ビンタンの中心地"
  },
  "Situated on Jalan Gading, Orion Residence sits quietly in absolute luxury behind Malaysia's primary fashion and lifestyle corridor.": {
    "简体": "座落于雅丁路（Jalan Gading）的 Orion Residence，低调而绝佳地隐匿于马来西亚首屈一指的时尚与潮流生活走廊后方，闹中取静。",
    "繁体": "座落於雅丁路（Jalan Gading）的 Orion Residence，低調而絕佳地隱匿於馬來西亞首屈一指的時尚與潮流生活走廊後方，鬧中取靜。",
    "JPN": "ジャラン・ガディンに位置する Orion Residence は、マレーシア屈指のファッション・ライフスタイル回廊の裏で、静謐なラグジュアリーに包まれています。"
  },
  "Location Geography": {
    "简体": "区域地脉版图",
    "繁体": "區域地脈版圖",
    "JPN": "周辺地理"
  },
  "Jalan Gading, Kuala Lumpur": {
    "简体": "吉隆坡 雅丁路",
    "繁体": "吉隆坡 雅丁路",
    "JPN": "クアラルンプール、ジャラン・ガディン"
  },
  "★ Orion Residence Site Map": {
    "简体": "★ Orion Residence 项目地块规划图",
    "繁体": "★ Orion Residence 項目地塊規劃圖",
    "JPN": "★ Orion Residence 現地案内図"
  },
  "The Neighborhood Index": {
    "简体": "周边繁华指标",
    "繁体": "周邊繁華指標",
    "JPN": "ネイバーフッド・インデックス"
  },
  "Unrivaled proximity to premium medical hubs, upscale fashion galleries, luxury hospitality chains, and direct mass transit gateways.": {
    "简体": "紧邻顶尖私立医疗机构、高奢时尚走廊、超五星级国际奢华酒店以及四通八达的城市轨道交通网络。",
    "繁体": "緊鄰頂尖私立醫療機構、高奢時尚走廊、超五星級國際奢華酒店以及四通八達的城市軌道交通網絡。",
    "JPN": "一流の医療機関、高級ファッションギャラリー、ラグジュアリーホテル、高速鉄道への優れたアクセス性。"
  },
  "Medical Excellence": {
    "简体": "卓越顶尖医疗",
    "繁体": "卓越頂尖醫療",
    "JPN": "メディカルエクセレンス"
  },
  "Transit & Mobility": {
    "简体": "快捷枢纽交通",
    "繁体": "快捷樞紐交通",
    "JPN": "交通＆アクセス"
  },
  "Luxury Retail": {
    "简体": "尊奢名品购物",
    "繁体": "尊奢名品購物",
    "JPN": "ラグジュアリーリテール"
  },

  // Contact Form
  "Private Concierge Registry": {
    "简体": "私人礼宾咨询登记",
    "繁体": "私人禮賓諮詢登記",
    "JPN": "コンシェルジュ登録"
  },
  "Enquire For Private Showcase": {
    "简体": "预约尊享私人口碑品鉴",
    "繁体": "預約尊享私人口碑品鑑",
    "JPN": "プライベートショールームのご案内"
  },
  "Submit your inquiry to secure an exclusive showroom viewing and receive the digital portfolio & investment dossier.": {
    "简体": "提交您的咨询登记，即可锁定专属样板间私人品鉴席位，并获取数字化投资白皮书与全套高清户型画册。",
    "繁体": "提交您的諮詢登記，即可鎖定專屬樣板間私人品鑑席位，並獲取數位化投資白皮書與全套高清戶型畫冊。",
    "JPN": "お問い合わせをお送りいただくことで、限定ショールームのプライベート観覧枠を確保し、デジタル資料と投資ポートフォリオをお届けします。"
  },
  "Full Name": {
    "简体": "贵宾姓名",
    "繁体": "貴賓姓名",
    "JPN": "お名前"
  },
  "Your Email": {
    "简体": "电子邮箱",
    "繁体": "電子郵箱",
    "JPN": "メールアドレス"
  },
  "Phone Number": {
    "简体": "联系电话",
    "繁体": "聯絡電話",
    "JPN": "電話番号"
  },
  "Country of Residence": {
    "简体": "常住国家/地区",
    "繁体": "常住國家/地區",
    "JPN": "居住国"
  },
  "Malaysia": {
    "简体": "马来西亚",
    "繁体": "馬來西亞",
    "JPN": "マレーシア"
  },
  "Singapore": {
    "简体": "新加坡",
    "繁体": "新加坡",
    "JPN": "シンガポール"
  },
  "China": {
    "简体": "中国大陆",
    "繁体": "中國大陸",
    "JPN": "中国"
  },
  "Hong Kong": {
    "简体": "中国香港",
    "繁体": "中國香港",
    "JPN": "香港"
  },
  "Taiwan": {
    "简体": "中国台湾",
    "繁体": "中國臺灣",
    "JPN": "台湾"
  },
  "Japan": {
    "简体": "日本",
    "繁体": "日本",
    "JPN": "日本"
  },
  "Indonesia": {
    "简体": "印度尼西亚",
    "繁体": "印度尼西亞",
    "JPN": "インドネシア"
  },
  "United Kingdom": {
    "简体": "英国",
    "繁体": "英國",
    "JPN": "イギリス"
  },
  "United States": {
    "简体": "美国",
    "繁体": "美國",
    "JPN": "アメリカ"
  },
  "Other": {
    "简体": "其他国家/地区",
    "繁体": "其他國家/地區",
    "JPN": "その他"
  },
  "Preferred Layout Variant": {
    "简体": "意向户型版本",
    "繁体": "意向戶型版本",
    "JPN": "ご希望の間取り"
  },
  "Preferred Language": {
    "简体": "首选沟通语言",
    "繁体": "首選溝通語言",
    "JPN": "ご希望の言語"
  },
  "Specific Requirements / Message": {
    "简体": "特定定制需求 / 留言信息",
    "繁体": "特定定制需求 / 留言信息",
    "JPN": "特別なご要望 / メッセージ"
  },
  "Please specify if you require translation support, investment structures details, or higher floor availability indexes.": {
    "简体": "如有任何专属细节诉求，例如专属翻译陪同、海外投资结构方案、或中高层单位销控数据，请在此留言告知。",
    "繁体": "如有任何專屬細節訴求，例如專屬翻譯陪同、海外投資結構方案、或中高層單位銷控數據，請在此留言告知。",
    "JPN": "通訳サポート、投資構成、高層階の空き状況などのご要望がございましたらご記入ください。"
  },
  "Processing VIP Request...": {
    "简体": "正在处理贵宾请求...",
    "繁体": "正在處理貴賓請求...",
    "JPN": "VIPリクエストを処理中..."
  },
  "Submit Official Inquiry": {
    "简体": "提交官方咨询登记",
    "繁体": "提交官方諮詢登記",
    "JPN": "公式問い合わせを送信"
  },

  // Form Success Page
  "VIP Request Logged": {
    "简体": "贵宾咨询申请已成功登记录入",
    "繁体": "貴賓諮詢申請已成功登記錄入",
    "JPN": "VIPリクエストを受け付けました"
  },
  "Confirmation Code": {
    "简体": "唯一确认编号",
    "繁体": "唯一確認編號",
    "JPN": "確認コード"
  },
  "What happens next?": {
    "简体": "接下来的专属服务流程：",
    "繁体": "接下來的專屬服務流程：",
    "JPN": "今後の流れ："
  },
  "1. A private client relations executive from <strong>Orion Tower Client Relations</strong> will contact you via phone or email within 2 hours to confirm your scheduled slot.": {
    "简体": "1. 我们的 <strong>Orion Tower Client Relations</strong> 私人客户关系经理将在2小时内通过电话或邮件与您取得联系，并与您确认尊享看房及专属接待时间。",
    "繁体": "1. 我們的 <strong>Orion Tower Client Relations</strong> 私人客戶關係經理將在2小時內通過電話或郵件與您取得聯繫，並與您確認尊享看房及專屬接待時間。",
    "JPN": "1. 2時間以内に <strong>Orion Tower Client Relations</strong> のプライベート担当者からお電話またはメールにて、スケジュール確定のご連絡を差し上げます。"
  },
  "2. An exclusive, digital private access portfolio featuring unit price indexes and design spec blueprints has been compiled and emailed.": {
    "简体": "2. 包含最新房源销控表、详细户型建筑蓝图的专属数字化项目手册，已整理完毕并即时发送至您的邮箱。",
    "繁体": "2. 包含最新房源銷控表、詳細戶型建築藍圖的專屬數位化項目手冊，已整理完畢並即時發送至您的郵箱。",
    "JPN": "2. 価格指標、設計青写真を含む限定デジタルポートフォリオが作成され、メールで送信されました。"
  },

  // Footer / Agent Info
  "Official Representative": {
    "简体": "官方指定授权代理",
    "繁体": "官方指定授權代理",
    "JPN": "公式代理担当者"
  },
  "Yee is a certified senior residential consultant with over 12 years of specialized focus in Kuala Lumpur's ultra-luxury property segments, catering to international buyers and multi-family offices.": {
    "简体": "Yee 是一位获得认证的资深高端住宅顾问，在吉隆坡高奢地产板块拥有超过12年的深厚经验，专门服务于高净值国际买家及家族办公室。",
    "繁体": "Yee 是一位獲得認證的資深高端住宅顧問，在吉隆坡高奢地產板塊擁有超過12年的深厚經驗，專門服務於高淨值國際買家及家族辦公室。",
    "JPN": "Yee は公認のシニアレジデンシャルコンサルタントであり、クアラルンプールの超高級不動産分野で12年以上の経験を持ち、国際的な購入者やファミリーオフィスを専門にサポートしています。"
  },
  "Certified Property Specialist": {
    "简体": "执业房产专家",
    "繁体": "執業房產專家",
    "JPN": "公認不動産スペシャリスト"
  },
  "Chat on WhatsApp": {
    "简体": "通过 WhatsApp 在线咨询",
    "繁体": "通過 WhatsApp 在線諮詢",
    "JPN": "WhatsApp でチャットする"
  },
  "Orion Tower Client Relations": {
    "简体": "Orion Tower 客户关系中心",
    "繁体": "Orion Tower 客戶關係中心",
    "JPN": "Orion Tower 顧客関係チーム"
  },
  "Welton Tower Sales Gallery, Bukit Bintang, 55100 Kuala Lumpur, Malaysia.": {
    "简体": "Welton Tower Sales Gallery, Bukit Bintang, 55100 Kuala Lumpur, Malaysia.",
    "繁体": "Welton Tower Sales Gallery, Bukit Bintang, 55100 Kuala Lumpur, Malaysia.",
    "JPN": "Welton Tower Sales Gallery, Bukit Bintang, 55100 Kuala Lumpur, Malaysia."
  },
  "DISCLAIMER": {
    "简体": "法律免责声明",
    "繁体": "法律免責聲明",
    "JPN": "免責事項"
  },
  "All illustrations, computer-generated renders, map routes, and architectural visual representations are artist's impressions only. The developer Orion Tower Sdn. Bhd. reserves the absolute right to modify specifications without prior notice, in compliance with urban planning authorities. Approved permit references and final purchase contracts govern all buyer-developer relationships.": {
    "简体": "所有插图、电脑效果图、路线地图及建筑视觉呈现形式均仅作为艺术家创作概念，不构成合同要约。开发商 Orion Tower Sdn. Bhd. 保留根据城市规划部门要求修改任何规格指标的绝对权力，恕不另行通知。一切买卖双方的法律权利与义务均以最终签署的批准销售许可证及正式买卖契约（SPA）条款为准。",
    "繁体": "所有插圖、電腦效果圖、路線地圖及建築視覺呈現形式均僅作為藝術家創作概念，不構成合同要約。開發商 Orion Tower Sdn. Bhd. 保留根據城市規劃部門要求修改任何規格指標的絕對權力，恕不另行通知。一切買賣雙方的法律權利與義務均以最終簽署的批准銷售許可證及正式買賣契約（SPA）條款為准。",
    "JPN": "すべてのイラスト、CGレンダリング、地図、および建築的表現はアーティストによるイメージです。開発者である Orion Tower Sdn. Bhd. は、都市計画当局の指示に基づき、事前の予告なく仕様を変更する絶対的な権利を留保します。承認された許可リファレンスおよび最終契約が、購入者と開発者の関係を規律します。"
  },
  "Welton Group Project © 2026. Handcrafted for Sovereign Lifestyles.": {
    "简体": "Welton Group 荣耀巨制 © 2026. 专为君御生活方式倾心雕琢。",
    "繁体": "Welton Group 榮耀巨製 © 2026. 專為君御生活方式傾心雕琢。",
    "JPN": "Welton Group プロジェクト © 2026. ロイヤルライフのために創られました。"
  },
  "Chat with Yee": {
    "简体": "与 Yee 进行私人咨询",
    "繁体": "與 Yee 進行私人諮詢",
    "JPN": "Yee とチャット"
  },
  "English": {
    "简体": "英文",
    "繁体": "英文",
    "JPN": "英語"
  },
  "Chinese (Mandarin / Cantonese)": {
    "简体": "中文 (普通话 / 粤语)",
    "繁体": "中文 (普通話 / 粵語)",
    "JPN": "中国語 (北京語 / 広東語)"
  },
  "Japanese": {
    "简体": "日语",
    "繁体": "日語",
    "JPN": "日本語"
  },
  "Malay / Indonesian": {
    "简体": "马来语 / 印尼语",
    "繁体": "馬來語 / 印尼語",
    "JPN": "マレー語 / インドネシア語"
  },
  "Other Language": {
    "简体": "其他语言",
    "繁体": "其他語言",
    "JPN": "その他の言語"
  },

  // Gallery descriptions
  "Experience the ultimate luxury lifestyle with our exclusive masterfully designed features.": {
    "简体": "体验我们独家匠心打造的绝美高端配置，奢享极致非凡的豪宅生活境界。",
    "繁体": "體驗我們獨家匠心打造的絕美高端配置，奢享極致非凡的豪宅生活境界。",
    "JPN": "卓越した設計の贅沢な設備により、究極のラグジュアリーライフをご体験ください。"
  },
  "Private sky lounge with panoramic city view.": {
    "简体": "尊享全景城市风光的私人空中酒廊。",
    "繁体": "尊享全景城市風光的私人空中酒廊。",
    "JPN": "市街のパノラマビューを望むプライベート・スカイラウンジ。"
  },
  "Custom premium finishings.": {
    "简体": "匠心定做的顶配硬装工艺与奢华细节。",
    "繁体": "匠心定做的頂配硬裝工藝與奢華細節。",
    "JPN": "カスタムメイドの高級仕上げ。"
  },
  "Sovereign arrival dropoff.": {
    "简体": "尊崇奢华的至臻落客区。",
    "繁体": "尊崇奢華的至臻落客區。",
    "JPN": "極上のエントランス車寄せ。"
  },

  // Extra headers
  "The Crafted Spaces": {
    "简体": "精雕细琢之室",
    "繁体": "精雕細琢之室",
    "JPN": "美しく構築された空間"
  },
  "Privacy Policy": {
    "简体": "隐私政策",
    "繁体": "隱私政策",
    "JPN": "プライバシーポリシー"
  },
  "Terms & Conditions": {
    "简体": "条款与条件",
    "繁体": "條款與條件",
    "JPN": "利用規約"
  },
  "Detailed Disclaimer": {
    "简体": "免责声明",
    "繁体": "免責聲明",
    "JPN": "免責事項"
  },
  "Terms of Service": {
    "简体": "使用条款",
    "繁体": "使用條款",
    "JPN": "利用規約"
  },
  "Disclaimers": {
    "简体": "免责声明",
    "繁体": "免責聲明",
    "JPN": "免責事項"
  },
  "I read and accept the": {
    "简体": "我已阅读并接受",
    "繁体": "我已閱讀並接受",
    "JPN": "私は、"
  },
  "and": {
    "简体": "及",
    "繁体": "及",
    "JPN": "および"
  },
  "and consent to Yee (REN46306) contacting me regarding Orion Residence.": {
    "简体": "并同意授权 Yee (REN46306) 就 Orion Residence 项目后续详情联系我。",
    "繁体": "並同意授權 Yee (REN46306) 就 Orion Residence 項目後續詳情聯絡我。",
    "JPN": "に同意し、Yee (REN46306) が Orion Residence に関して連絡することに同意します。"
  },
  "This is an independent marketing website managed by Yee (REN46306) under IQI Realty Sdn Bhd. It is not the official developer website of Orion Tower Sdn. Bhd.": {
    "简体": "本网站是由 Yee (REN46306, 隶属 IQI Realty Sdn Bhd 房产服务公司) 独立运营的第三方推广宣传网站，并非 Orion Tower Sdn. Bhd. 官方开发商网站。",
    "繁体": "本網站是由 Yee (REN46306, 隸屬 IQI Realty Sdn Bhd 房產服務公司) 獨立運營的第三方推廣宣傳網站，並非 Orion Tower Sdn. Bhd. 官方開發商網站。",
    "JPN": "本ウェブサイトは、IQI Realty Sdn Bhd所属のYee (REN46306)が管理・運営する独立したマーケティング代理店サイトであり、Orion Tower Sdn. Bhd.の公式デベロッパーサイトではありません。"
  },
  "All illustrative renderings, conceptual drawings, room dimensions, specifications, and layout designs on this website are approximate and intended as a general guide only. The developer reserves the right to modify any aspect at their absolute discretion.": {
    "简体": "本网站中包含的所有艺术渲染图、概念设计图、房间尺寸、建筑材料、配置要求及户型规划均为约数，仅供参考之用。开发商保留根据实际需要进行调整与修改的最终决定权。",
    "繁体": "本網站中包含的所有藝術渲染圖、概念設計圖、房間尺寸、建築材料、配置要求及戶型規劃均為約數，僅供參考之用。開發商保留根據實際需要進行調整與修改的最終決定權。",
    "JPN": "本ウェブサイトに掲載されているすべてのイメージ図、コンセプト図、間取り図、仕様、寸法、およびレイアウトデザインは、参考情報として提供されているもので、実際の完成形とは異なる場合があります。デベロッパーは、その独自の裁量により仕様をいつでも変更する権利を留保します。"
  },
  "This Privacy Policy outlines how your personal information is collected, used, and protected in accordance with the Malaysia Personal Data Protection Act (PDPA) 2010.": {
    "简体": "本隐私政策概述了我们如何根据马来西亚《2010年个人数据保护法》(PDPA) 收集、使用和保护您的个人信息。",
    "繁体": "本隱私政策概述了我們如何根據馬來西亞《2010年個人數據保護法》(PDPA) 收集、使用和保護您的個人信息。",
    "JPN": "このプライバシーポリシーは、マレーシアの2010年個人情報保護法（PDPA）に基づき、お客様の個人情報がどのように収集、使用、保護されるかについて説明します。"
  },
  "1. Information We Collect": {
    "简体": "1. 收集的信息",
    "繁体": "1. 收集的信息",
    "JPN": "1. 収集する情報"
  },
  "When you submit an inquiry through our contact forms, we collect personal identity details including your full name, email address, contact phone number, country of residence, and unit size preferences.": {
    "简体": "当您通过联系表单提交咨询时，我们会收集您的个人身份信息，包括您的姓名、电子邮件、电话号码、居住国家以及对户型尺寸的偏好。",
    "繁体": "當您通過聯絡表單提交諮詢時，我們會收集您的個人身份資訊，包括您的姓名、電子郵件、電話號碼、居住國家以及對戶型尺寸的偏好。",
    "JPN": "お問い合わせフォームから送信いただく際、氏名、メールアドレス、電話番号、居住国、およびご希望のユニットタイプを含む個人情報を収集します。"
  },
  "2. How We Use Your Data": {
    "简体": "2. 信息的使用方式",
    "繁体": "2. 信息的使用方式",
    "JPN": "2. 情報の使用目的"
  },
  "Your details are utilized strictly to respond to your registered request, share the digital access portfolio containing price indexes, and arrange scheduled private viewings. Your information is managed directly by Yee (REN46306) under IQI Realty Sdn Bhd.": {
    "简体": "您的信息仅用于回复您的咨询请求、向您发送包含价格指数的数字化专属资产包，以及安排私属看房日程。您的数据将由 IQI Realty 旗下的注册经纪人 Yee (REN46306) 妥善管理。",
    "繁体": "您的資訊僅用於回覆您的諮詢請求、向您發送包含價格指數的數位化專屬資產包，以及安排私屬看房日程。您的數據將由 IQI Realty 旗下的註冊經紀人 Yee (REN46306) 妥善管理。",
    "JPN": "ご登録いただいた情報は、お問い合わせへの回答、価格指標を含むデジタルポートフォリオの送付、および内覧スケジュールの調整のためにのみ使用されます。お客様の情報は、IQI Realty Sdn Bhd所属のYee (REN46306)が直接管理します。"
  },
  "3. Cookies & Advertising Protection": {
    "简体": "3. Cookie 与广告隐私保护",
    "繁体": "3. Cookie 與廣告隱私保護",
    "JPN": "3. クッキーと広告保護"
  },
  "This website uses cookies and similar tracking identifiers (such as Google Ads tracking tags) to analyze site traffic, personalize content, and deliver relevant advertisements. No sensitive personal data is shared with Google or third parties during this operation.": {
    "简体": "本网站使用 Cookie 和类似的跟踪标识符 (例如 Google Ads tracking 标签) 来分析网站流量、个性化内容并投放相关的广告。在此操作期间，不会向 Google 或任何第三方共享敏感的个人隐私数据。",
    "繁体": "本網站使用 Cookie 和類似的跟蹤標識符 (例如 Google Ads tracking 標籤) 來分析網站流量、個性化內容並投放相關的廣告。在此操作期間，不會向 Google 或任何第三方共享敏感的個人隱私數據。",
    "JPN": "本ウェブサイトでは、サイトトラフィックの分析、コンテンツのパーソナライズ、および適切な広告表示のためにクッキーおよびトラッキング識別子（Google広告タグ等）を使用します。このプロセスにおいて、Googleや第三者に機密な個人情報が共有されることはありません。"
  },
  "4. Third-Party Policy": {
    "简体": "4. 第三方共享声明",
    "繁体": "4. 第三方共享聲明",
    "JPN": "4. 第三方への提供について"
  },
  "We maintain a strict non-disclosure policy. We do not sell, rent, or lease customer lists or personal data logs to external marketing agencies or unauthorized third parties.": {
    "简体": "我们严格执行保密守则，绝不向任何外部营销机构、中介、或未经授权的第三方出售、出租或转让客户资料及个人信息记录。",
    "繁体": "我們嚴格執行保密守則，絕不向任何外部營銷機構、中介、或未經授權的第三方出售、出租或轉讓客戶資料及個人資訊記錄。",
    "JPN": "当窓口は厳格な非開示ポリシーを維持しています。外部のマーケティング会社や無関係の第三者に顧客リストや個人データを販売、貸出、または譲渡することはありません。"
  },
  "5. Data Access & Rights": {
    "简体": "5. 数据访问与用户权利",
    "繁体": "5. 數據訪問與用戶權利",
    "JPN": "5. 情報の管理と開示請求権"
  },
  "You retain full ownership and rights over your personal data. You may request information corrections, updates, or complete removal of your records from our system at any time by emailing shyanyeews@gmail.com.": {
    "简体": "您对您的个人信息拥有完整的掌控权。您可以随时通过发送邮件至 shyanyeews@gmail.com 申请查询、更新或完全删除您的个人信息记录。",
    "繁体": "您對您的個人資訊擁有完整的掌控權。您可以隨時通過發送郵件至 shyanyeews@gmail.com 申請查詢、更新或完全刪除您的個人資訊記錄。",
    "JPN": "お客様は、ご自身の個人データに関するすべての権利を保有します。いつでも、shyanyeews@gmail.comまで電子メールをお送りいただくことで、ご登録情報の修正、更新、または当システムからの完全削除を依頼することができます。"
  },
  "By accessing or browsing this website, you agree to comply with and be bound by the following Terms of Service governing this real estate presentation channel.": {
    "简体": "访问或浏览本网站即代表您同意遵守并受以下使用条款约束，这些条款适用于本房产营销与展示平台。",
    "繁体": "訪問或瀏覽本網站即代表您同意遵守並受以下使用條款約束，這些條款適用於本房產營銷與展示平台。",
    "JPN": "本ウェブサイトにアクセス、または閲覧することにより、本不動産紹介プラットフォームを律する以下の利用規約を遵守することに同意したものとみなされます。"
  },
  "1. Channel Status": {
    "简体": "1. 渠道性质声明",
    "繁体": "1. 渠道性質聲明",
    "JPN": "1. サイトの性格について"
  },
  "This platform acts as an independent marketing channel managed by Shyan Yee (REN46306) under IQI Realty Sdn Bhd. It is built as a portfolio presentation to introduce Orion Residence and is not the official developer website.": {
    "简体": "本展示平台是由隶属 IQI Realty Sdn Bhd 的注册置业顾问 Yee (REN46306) 独立运营维护。本站属于向潜在投资者介绍 Orion Residence 的艺术级在线画册，而非开发商的直接或官方网站。",
    "繁体": "本展示平台是由隸屬 IQI Realty Sdn Bhd 的註冊置業顧問 Yee (REN46306) 獨立運營維護。本站屬於向潛在投資者介紹 Orion Residence 的藝術級線上畫冊，而非開發商的直接或官方網站。",
    "JPN": "本プラットフォームは、IQI Realty Sdn Bhd所属のYee (REN46306)が運営する独立したマーケティングチャネルです。Orion Residenceを市場に紹介するための紹介ポートフォリオとして構築されており、公式デベロッパーのウェブサイトではありません。"
  },
  "2. Information Disclaimer": {
    "简体": "2. 规划信息免责",
    "繁体": "2. 規劃資訊免責",
    "JPN": "2. 情報提供の免責事項"
  },
  "All visual renderings, floor blueprints, dimensions, specs, amenities list, and starting pricing metrics represent conceptual designs and approximate dimensions. They do not constitute a binding legal agreement or standard property offer. The developer reserves rights to alter specs at their absolute discretion.": {
    "简体": "本站呈现的所有视觉效果图、户型图、空间尺寸、建筑用料细则、高端配套设施、起售价均属于设计概念，不构成具有法律效力的正式买卖协议或房产邀约。开发商有权根据自身计划和施工需求调整一切细节参数。",
    "繁体": "本站呈現的所有視覺效果圖、戶型圖、空間尺寸、建築用料細則、高端配套設施、起售價均屬於設計概念，不構成具有法律效力的正式買賣協議或房產邀約。開發商有權根據自身計劃和施工需求調整一切細節參數。",
    "JPN": "掲載されているすべてのヴィジュアルイメージ、間取り図、寸法、設備一覧、開始価格指標は概念デザインであり、おおよその目安です。これらは法的拘束力のある契約や正式なオファーを構成するものではありません。仕様は開発企業の裁量で変更される場合があります。"
  },
  "3. Acceptable Use": {
    "简体": "3. 合规使用规定",
    "繁体": "3. 合規使用規定",
    "JPN": "3. 適正利用について"
  },
  "You agree to provide true, accurate, and current information when submitting inquiry forms. Using automated scripts or harvesting contact channels is strictly prohibited.": {
    "简体": "您同意在提交咨询表单时提供真实、准确、完整的个人联系资料。严禁使用任何自动化脚本程序、机器人程序恶意抓取或干扰本站。",
    "繁体": "您同意在提交諮詢表單時提供真實、準確、完整的個人聯絡資料。嚴禁使用任何自動化腳本程序、機器人程序惡意抓取或干擾本站。",
    "JPN": "お問い合わせフォームに入力する際は、真実かつ正確な最新の情報を提供することに同意するものとします。自動スクリプトなどの不正アクセスツールを使用して情報を収集・干渉する行為を厳重に禁じます。"
  },
  "4. Limitation of Liability": {
    "简体": "4. 责任限度条款",
    "繁体": "4. 責任限度條款",
    "JPN": "4. 免責・損害補償の制限"
  },
  "Neither the operating agent (Yee), IQI Realty Sdn Bhd, nor Welton Group shall be liable for any direct or indirect loss, financial decisions, or damages arising from the use or inability to use materials displayed on this website.": {
    "简体": "负责本站推广的置业谈判代表 Yee、所属机构 IQI Realty Sdn Bhd、以及开发商 Welton Group，均不对因使用或无法使用本网站的内容而导致的任何形式的直接、间接损失、投资决策失误或法律责任承担赔偿。",
    "繁体": "負責本站推廣的置業談判代表 Yee、所屬機構 IQI Realty Sdn Bhd、以及開發商 Welton Group，均不對因使用或無法使用本網站的内容而導致的任何形式的直接、間接損失、投資決策失誤或法律責任承擔賠償。",
    "JPN": "指名エージェント（Yee）、IQI Realty Sdn Bhd、およびWelton Groupは、本サイトの掲載情報に依拠したこと、またはサイトを利用できなかったことによって生じた一切の直接的・間接的な損害、投資判断、損失について責任を負いません。"
  },
  "5. Governing Jurisdiction": {
    "简体": "5. 适用法律与司法管辖",
    "繁体": "5. 適用法律與司法管轄",
    "JPN": "5. 合意管轄および準拠法"
  },
  "These terms and any resulting actions shall be governed by and construed in accordance with the laws of Malaysia, and subject to the exclusive jurisdiction of the Courts of Malaysia.": {
    "简体": "本使用条款及任何相关事宜均受马来西亚法律管辖并按其解释，并且您同意提交至马来西亚当地法院，接受其专属司法管辖。",
    "繁体": "本使用條款及任何相關事宜均受馬來西亞法律管轄並按其解釋，並且您同意提交至馬來西亞當地法院，接受其專屬司法管轄。",
    "JPN": "本規約および本規約に起因する紛争についてはマレーシア法を準拠法とし、マレーシアの裁判所を第一審の専属的合意管轄裁判所とします。"
  },
  "Important Legal & Professional Disclosures for Orion Residence Digital Representation.": {
    "简体": "关于 Orion Residence 项目数字化宣传展示的核心法律与行业合规信息说明。",
    "繁体": "關於 Orion Residence 項目數位化宣傳展示的核心法律與行業合規資訊說明。",
    "JPN": "Orion Residenceのデジタル表現における、重要な法規および専門家情報開示。"
  },
  "Professional Agent Representation": {
    "简体": "专业地产代理顾问身份信息",
    "繁体": "專業地產代理顧問身份資訊",
    "JPN": "資格登録エージェント詳細"
  },
  "This digital representation is managed by Yee (Shyan Yee, REN46306), a registered Real Estate Negotiator authorized under IQI Realty Sdn Bhd (Company License: E(1)1584). IQI Realty is an appointed agency for marketing real estate developments.": {
    "简体": "本宣传网页由注册地产谈判代表 Yee (Shyan Yee, REN46306) 管理维护，其所属中介服务机构为大马著名房产经纪公司 IQI Realty Sdn Bhd (执照注册号: E(1)1584)。IQI Realty 是受委托推广该房地产项目的代理销售机构之一。",
    "繁体": "本宣傳網頁由註冊地產談判代表 Yee (Shyan Yee, REN46306) 管理維護，其所屬中介服務機構為大馬著名房產經紀公司 IQI Realty Sdn Bhd (執照註冊號: E(1)1584)。IQI Realty 是受委託推廣該房產項目的代理銷售機構之一。",
    "JPN": "このデジタル表現は、IQI Realty Sdn Bhd（ライセンス番号: E(1)1584）より公認を受けた、登録不動産エージェントのYee（Shyan Yee, REN46306）によって運営されています。IQI Realtyは、当不動産開発プロジェクトの指定販売会社です。"
  },
  "Developer Status": {
    "简体": "项目开发商主体说明",
    "繁体": "項目開發商主體說明",
    "JPN": "デベロッパーの概要"
  },
  "The official developer for the Orion Residence project is Orion Tower Sdn. Bhd. (Co. Registration: 1292635-X), an architectural project developed in Bukit Bintang by Welton Group. This platform serves as a marketing presentation and does not represent direct developer ownership of the website.": {
    "简体": "Orion Residence 项目的官方开发商主体为 Orion Tower Sdn. Bhd.（公司注册编号：1292635-X），该高档住宅是 Welton Group 集团在吉隆坡武吉免登黄金地带精心打造的建筑。本宣传平台用于市场营销与资讯推广，不代表开发商直接拥有本站点的所有权。",
    "繁体": "Orion Residence 項目的官方開發商主體為 Orion Tower Sdn. Bhd.（公司註冊編號：1292635-X），該高檔住宅是 Welton Group 集團在吉隆坡武吉免登黃金地帶精心打造的建築。本宣傳平台用於市場營銷與資訊推廣，不代表開發商直接擁有本站點的所有權。",
    "JPN": "Orion Residenceの公式開発元は、Welton Groupが武吉免登（ブキッ・ビンタン）で展開するプロジェクトを運営するOrion Tower Sdn. Bhd.（会社登録番号: 1292635-X）です。当ウェブサイトは、そのマーケティングを目的とするプロモーションメディアであり、デベロッパーの直接的な財産ではありません。"
  },
  "Artistic and Layout Variations": {
    "简体": "艺术表现与买卖协议差异",
    "繁体": "藝術表現與買賣協議差異",
    "JPN": "設計図と意匠イメージの差異"
  },
  "All visual renders, lifestyle images, perspective materials, furniture layouts, and architectural models are artist's impressions for creative reference only. Actual specifications and final details are strictly governed by the formal Sale and Purchase Agreement (SPA) executed during unit booking.": {
    "简体": "本网站中展示的所有效果图、奢享生活参考图、透视图材质、家具摆设规划及实体建筑模型均为艺术家的主观灵感渲染，仅供创造性概念参考。交楼时的实际标准、户型结构以及配置条件，均以您认购单元并与开发商正式签署的《房屋买卖协议》(SPA) 内容为最高及最终法定准则。",
    "繁体": "本網站中展示的所有效果圖、奢享生活參考圖、透視圖材質、家具擺設規劃及實體建築模型均為藝術家的主觀靈感渲染，僅供創造性概念參考。交樓時的實際標準、戶型結構以及配置條件，均以您認購單元並與開發商正式簽署的《房屋買賣協議》(SPA) 內容為最高及最終法定準則。",
    "JPN": "ウェブサイト上のすべてのイメージ、ライフスタイルの表現、素材の質感、家具の配置、および建物模型は、デザイナーによるインスピレーション画であり、参考用です。実際の引き渡し時の仕様、構造、詳細設備は、購入時に交わされる正式な不動産売買契約書（SPA）の文面にのみ厳格に拘束されます。"
  },
  "Advertising Policy Compliance": {
    "简体": "广告政策与合规声明",
    "繁体": "廣告政策與合規聲明",
    "JPN": "広告掲載基準の遵守について"
  },
  "This disclaimer is visible and designed to prevent misleading representation, ensuring visitors are fully informed of the agent-mediated marketing relationship prior to engaging or booking tours.": {
    "简体": "此项免责声明清晰可见，旨在保障诚信宣传、杜绝任何误导性陈述。通过明确说明中介营销代理关系，确保访问者在预约私人内览会或获取专属资产信息前，已充分知情相关背景。",
    "繁体": "此項免責聲明清晰可見，旨在保障誠信宣傳、杜絕任何誤導性陳述。通過明確說明中介營銷代理關係，確保訪問者在預約私人內覽會或獲取專屬資產資訊前，已充分知情相關背景。",
    "JPN": "この免責条項は、誤解を招くような表現を排除し、誠実な広告配信を行うために公開されています。訪問者様が内覧を予約されたり情報を請求されたりする前に、資格を有するエージェントが仲介するプロモーションチャネルである事実を、あらかじめ明確に伝えるものです。"
  },
  "Acknowledge": {
    "简体": "我已悉知",
    "繁体": "我已悉知",
    "JPN": "了解しました"
  }
};

/**
 * Returns translated string if dictionary has it for targetLang.
 * Otherwise returns original English string.
 */
export function translate(text: string, currentLang: Lang): string {
  if (currentLang === "ENG") {
    return text;
  }
  const key = text.trim();
  const translations = dictionary[key];
  if (translations && translations[currentLang]) {
    return translations[currentLang];
  }

  // Let's also do substring or minor match replacements for safety
  // For instance, match starting text or partials if applicable
  return text;
}
