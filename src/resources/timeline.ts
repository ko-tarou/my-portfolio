// タイムラインイベントの型定義
export interface TimelineEvent {
  year: string
  title: string
  description: string
  organization?: string
  date?: string
  details?: string
  isExpanded?: boolean
}

// タブの型定義
export type TimelineTab =
  | 'activities'
  | 'events'
  | 'internships'
  | 'hackathons'
  | 'conferences'

// タブの表示設定（ナビゲーションの並び順とラベル）
export const timelineTabs: { key: TimelineTab; label: string }[] = [
  { key: 'activities', label: 'これまでの活動' },
  { key: 'events', label: 'イベント運営' },
  { key: 'internships', label: 'インターン' },
  { key: 'hackathons', label: 'ハッカソン' },
  { key: 'conferences', label: 'カンファレンス' },
]

// これまでの活動データ（コア活動：プロジェクト・リーダー経験・WRO など）
export const activitiesEvents: TimelineEvent[] = [
  {
    year: "2026",
    title: "HitoLink 技術責任者",
    description: "学生2名で立ち上げた受託開発ベンチャーの技術責任者（共同創業）",
    organization: "HitoLink",
    date: "2026年〜現在",
    details:
      "代表・星野智範とともに、学生2名で受託開発ベンチャー「HitoLink」を立ち上げ、技術責任者を務めています。「人と人をつなぎ、ビジネスに新しい価値を」をビジョンに、B2B 花卉取引プラットフォーム CompanySeller（Next.js + Go + PostgreSQL）や北山ナーセリー向けアプリなど複数プロダクトの設計・開発を主導。全プロダクト共通の標準技術スタック策定や、コーポレートサイト構築（Next.js、Lighthouse ほぼ全項目満点）も担当しました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "DevelopersHub リーダー",
    description: "BusStop を改称・再出発させたコミュニティのリーダー",
    organization: "DevelopersHub",
    date: "4月〜",
    details: "BusStop 全体リーダーを務めたのち、プロジェクトを DevelopersHub へと改称し生まれ変わらせました。現在は DevelopersHub のリーダーとして運営・企画に従事しています。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "セキプロ 副リーダー",
    description: "セキュリティ系プロジェクトの副リーダー",
    organization: "セキュリティスキルアッププロジェクト",
    date: "4月〜",
    details:
      "セキュリティプロジェクト（セキプロ）に参加し、副リーダーとして運営に携わっています。新歓をはじめとした活動の企画・運営に関わり、2027年3月まで活動予定です。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "KIT Mobile Hub 立ち上げサポート",
    description: "モバイル開発コミュニティの立ち上げに協力メンバーとして参加",
    date: "",
    details:
      "校内のモバイル開発コミュニティ「KIT Mobile Hub」の立ち上げを、協力メンバーとしてサポートしました。LT会などの活動に参加しています。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "スマプロ リーダー",
    description: "校内アプリ開発プロジェクトのリーダー",
    organization: "スマートフォンアプリ開発プロジェクト",
    date: "4月〜",
    details:
      "スマートフォンアプリ開発プロジェクト（スマプロ）のリーダーを2026年3月まで務めました。新歓・各種勉強会（Git/GitHub・React・Android・Web）・LT会・チーム開発のキックオフから発表までを企画・運営しました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "GDGoC KIT Organizer",
    description: "学生コミュニティの Organizer を担当",
    organization: "GDGoC KIT",
    date: "2025年〜2026年6月",
    details:
      "Google Developer Groups on Campus（GDGoC）KIT の Organizer を、2025年から2026年6月まで務めました。DroidKaigi.collect #26 @Kanazawa を GDGoC KIT 共催として運営するなど、地域の技術コミュニティ活動に携わりました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "DeadLine Widgetリリース",
    description: "ハッカソンの作品をリリース",
    date: "6月",
    details: "技育キャンプハッカソンに参加し、DeadLine Widgetをリリースしました。これは、締め切りを管理するためのウィジェットです。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "LogiLink開発開始",
    description: "KITHackthonで受賞",
    date: "3月",
    details: "2024物流問題の解決を目指し、SNS型プラットフォームを開発しました。それぞれをネイティブで開発中です。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "MichikusaMemoリリース",
    description: "IOSアプリ初リリース",
    date: "3月",
    details:
      "位置情報と紐付けて、メモを管理することができるアプリです。SwiftUIで実装し、リリースしました。DBのクラウド化を目指しています。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "PresentAI開発",
    description: "プレゼン資料作成アプリ",
    date: "12月",
    details:
      "プレゼン資料を作成する際に、AIが自動でサポートしてくれるアプリです。これを通し、Web開発の基礎を学びました。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "BusStop アプリ班リーダー",
    description: "プロジェクトのアプリ班リーダー（のちに全体リーダー→DevelopersHub へ）",
    organization: "BusStop",
    date: "10月〜",
    details:
      "1年次の10月に BusStop へ参加し、アプリ班リーダーとしてアプリ開発を主導しました。2年次の春には BusStop 全体のリーダーへ就任し、その後プロジェクトを DevelopersHub へと改称・再出発させました。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "プログラミング道場 参加",
    description: "プログラミングの基礎を固める学内コミュニティに参加",
    organization: "プログラミング道場",
    date: "10月〜",
    details:
      "1年次の10月からプログラミング道場に参加しています。コードを読む速さやコーディングの考え方など、プログラミングの基礎を固める活動に取り組んでいます。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "GDGoC KIT 参加",
    description: "学生技術コミュニティに参加",
    organization: "GDGoC KIT",
    date: "2024年〜",
    details:
      "1年次（2024年度）に Google Developer Groups on Campus（GDGoC）KIT に参加しました。勉強会やイベントを通して技術コミュニティ活動に触れ、のちに Organizer を務めています。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "スマプロ参加",
    description: "校内のプロジェクト活動に入学当初から参加",
    organization: "スマートフォンアプリ開発プロジェクト",
    date: "4月〜",
    details:
      "入学当初から参加し、ここで初めてアプリ開発に触れ、Androidアプリの開発を学びました。チームでの開発やコードレビューなど、エンジニアとしての基礎を学びました。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "データドリーマーズ 所属",
    description: "データサイエンス系の学内プロジェクトに所属",
    organization: "データドリーマーズ",
    date: "4月〜",
    details:
      "入学当初からデータサイエンス系の学内プロジェクト「データドリーマーズ」に所属しています。データ分析に関する活動や情報共有に取り組んでいます。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "関ヶ原プロジェクト 参加",
    description: "学内プロジェクト「関プロ」に参加",
    organization: "関ヶ原プロジェクト",
    date: "4月〜",
    details:
      "入学当初から関ヶ原プロジェクト（関プロ）に参加しています。設計から環境構築・実装まで、チームでの開発活動に取り組んでいます。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "大学入学",
    description: "金沢工業大学に入学",
    date: "4月",
    details: "情報工学を専攻し、プログラミングの基礎を学び始める",
    isExpanded: false,
  },
  {
    year: "2022",
    title: "WRO ロボット競技",
    description: "世界大会出場（最高11位）・高校で全国大会3回出場",
    details: "World Robot Olympiad（WRO）に、小学5・6年生および中学1年生のときに世界大会へ出場しました（最高順位は11位）。その後コロナ禍を経て、高校でも全国大会に3回出場しました。※タイムライン上の年（2022）は出場期間全体を表すものではないため、表示位置は要調整。",
    isExpanded: false,
  },
]

// イベント運営データ（HackIT・交流会・雑談会 など）
export const eventsEvents: TimelineEvent[] = [
  {
    year: "2026",
    title: "HackIT 2026 運営",
    description: "校内ハッカソンの2回目の開催を運営（1月準備開始・7月開催）",
    organization: "DevelopersHub",
    date: "1月〜",
    details:
      "校内 13 サークルが所属する DevelopersHub のハッカソン「HackIT」の2回目の開催に向けて、1月から準備を開始し、7月に開催しました。企画・広報・スポンサー調整などの運営に携わりました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "DevelopersHub 交流会 運営",
    description: "1〜3年生の学年横断交流会を運営",
    date: "6月",
    details: "DevelopersHub にて、1〜3年生が学年を越えて交流する会を企画・運営しました。コミュニティ内の縦のつながりを生む場づくりに取り組みました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "新入生交流イベント 運営",
    description: "新入生向けのプロジェクト紹介・勧誘イベントを運営",
    date: "4月",
    details: "新入生に向けて、学内プロジェクトの紹介や勧誘を行う交流イベントの運営に携わりました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "スマプロハッカソン 運営",
    description: "スマプロのリーダーとして校内ハッカソンを運営",
    organization: "スマートフォンアプリ開発プロジェクト",
    date: "2月",
    details: "スマプロのリーダーとして、スマプロハッカソンの企画・運営を行いました。自身もチームの一員として参加しました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "リーダー雑談会 運営",
    description: "プロジェクトリーダー同士の雑談会を運営",
    date: "1月",
    details: "各プロジェクトのリーダーが集まり交流する雑談会を運営しました。リーダー間の横のつながりを生む場づくりに取り組みました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "DroidKaigi.collect #26 @Kanazawa 運営",
    description: "GDGoC KIT 共催の地域カンファレンスを運営",
    organization: "GDGoC KIT 共催",
    date: "11月",
    details:
      "DroidKaigi.collect { #26 @Kanazawa } を GDGoC KIT 共催として運営に携わりました。地域での Android コミュニティイベントの企画・設営に関わりました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Next Kanazawa Connect 運営",
    description: "20人規模のLT会を運営（ファシリテーター＆デザイナー）",
    date: "10月",
    details:
      "NextEnd 関連イベントとして、20人規模のLT会「Next Kanazawa Connect」を開催しました。ファシリテーター兼デザイナーとして、当日の進行と会のデザインを担いました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "HackIT 運営",
    description: "校内ハッカソン運営",
    organization: "DevelopersHub",
    date: "8月",
    details: "校内 13 サークルが所属する DevelopersHub にて、3 日間開催のハッカソン「HackIT」を運営しました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "スマプロ 勉強会・LT会 運営",
    description: "リーダーとして年間の勉強会・LT会を運営",
    organization: "スマートフォンアプリ開発プロジェクト",
    date: "通年",
    details:
      "スマプロのリーダーとして、新歓・Git/GitHub 勉強会・React ハンズオン・Android 勉強会・Web 勉強会、各種 LT 会（自己紹介LT・研修LT・全学期LT・夏休みLT・就活LT）、チーム開発のキックオフから発表までを年間を通して企画・運営しました。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "スマプロハッカソン 運営補助",
    description: "先輩代の運営を手伝いつつ、参加者としても活動",
    organization: "スマートフォンアプリ開発プロジェクト",
    date: "11月",
    details:
      "DMM をスポンサーに迎えたスマプロハッカソン（2〜4人 × 約8組、計30人弱）にて、先輩代の運営を手伝いながら、自身も参加者として活動しました。",
    isExpanded: false,
  },
]

// インターンデータ（就業型・短期インターン）
export const internshipEvents: TimelineEvent[] = [
  {
    year: "2026",
    title: "インターンシップ",
    description: "2DAYインターン",
    organization: "STORES 株式会社",
    date: "6月",
    details: "2日間の就業型インターンに参加し、実際の開発業務に触れました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "インターンシップ",
    description: "1DAYインターン",
    organization: "GA technologies",
    date: "6月",
    details: "GA technologies の1DAYインターンに参加し、事業内容や開発への理解を深めました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "インターンシップ",
    description: "長期インターン",
    organization: "株式会社BEENOS",
    date: "4月",
    details: "大規模なリファクタリング施策にアサインされ、初めてPHPに挑戦しています。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "インターンシップ",
    description: "就業型インターン 1ヶ月",
    organization: "株式会社CyberAgent",
    date: "3月",
    details: "Tappleチームにて1ヶ月間のAndroid開発に取り組みました。チーム全体の視座で動く自走力が身につきました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "インターンシップ",
    description: "1DAYインターン",
    organization: "株式会社Relic",
    date: "3月",
    details: "ハッカソン型のインターンで、Boltを使った開発からTikTokへの告知動画によるマーケティングまでを1日で行いました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "インターンシップ",
    description: "長期インターン",
    organization: "AlphaOmega",
    date: "2月",
    details: "フルTypeScriptでの開発に取り組んでいます。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "インターンシップ",
    description: "就業型インターン 1ヶ月",
    organization: "株式会社ヤプリ",
    date: "11月",
    details: "プラットフォーム開発に挑戦し、リポジトリの機能の守備範囲に驚きました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "インターンシップ",
    description: "就業型インターン 2週間",
    organization: "チームラボ株式会社",
    date: "10月",
    details: "実際の業務に参加し、設計から実装までを行いました。StateFlowやアーキテクチャの思想を深く理解できました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "インターンシップ",
    description: "就業型インターン 1 ヶ月間",
    organization: "合同会社DMM.com",
    date: "8月",
    details: "コンポーネント設計から、テスト、バグ修正まで幅広く学びました。とても勉強になりました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "バックエンド設計のインターンシップ",
    description: "DB , API 設計に挑戦",
    organization: "株式会社ゆめみ",
    date: "5月",
    details: "DBやAPI設計を学ぶインターンシップに参加。ER図や実践的な設計手法を学びました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "長期インターンシップ",
    description: "Streamlit のライブラリ作成に挑戦",
    organization: "KIT 情報処理サービスセンター",
    date: "4月",
    details: "金沢工業大学の長期インターンシップに参加し、PythonやStreamlitを使ったWeb開発に取り組んでいます。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "長期インターンシップ",
    description: "Goでの大規模開発に挑戦",
    organization: "株式会社ENECHANGE",
    date: "4月",
    details: "ENECHANGEの長期インターンシップに参加し、GoやTypeScriptを使った大規模開発に取り組んでいます。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "インターンシップ",
    description: "KotlinでAIチャットボットアプリを開発",
    organization: "株式会社CyberAgent",
    date: "2月",
    details: "MVVMやCI/CDなどの技術を学びました。良いメンターさんに巡り会え、とても良い経験になりました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "インターンシップ",
    description: "Swiftのチュートリアル",
    organization: "BetaComputing株式会社",
    date: "1月",
    details: "Swiftの基礎を学び、実務のお話を聞くことができました。",
    isExpanded: false,
  },
]

// ハッカソンデータ
export const hackathonEvents: TimelineEvent[] = [
  {
    year: "2026",
    title: "Hack the Liquid 参加",
    description: "2日間のハッカソンに参加",
    date: "6月",
    details: "2日間開催のハッカソン Hack the Liquid に参加しました。短期間でのチーム開発に取り組みました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "スマプロハッカソン",
    description: "ビリヤードの玉になれ 'VRiard'",
    organization: "優秀賞",
    date: "2月",
    details: "Meta Questを使い、ビリヤードの玉になってプレイするVRゲームを開発しました。Unityで実装し、バックエンドと通信部分を担当しました。",
    isExpanded: false,
  },
  {
    year: "2026",
    title: "Webチューニングハッカソン",
    description: "重いWebページを5時間でどこまで速くできるか",
    organization: "株式会社リクルート",
    date: "2月",
    details: "Lighthouseのスコアで評価されるパフォーマンスチューニングに挑戦しました。フロントエンドを極めることの解像度が上がる、非常に良い刺激となりました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "JPHACKS2025参加",
    description: "日々の料理に革命を 'WinCook'",
    organization: "富士フィルム賞",
    date: "10月",
    details: "両手が汚れている料理中、ウィンクでスクロールを行い、常にレシピを熟知している AI と会話ができる iOS アプリを開発しました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Lovable Hackthon",
    description: "QR ですぐつながる 'Kazarin'",
    date: "8月",
    details: "Lovable を利用し、100%バイブコーディング縛りでのハッカソンでした。supabaseとの連携がスムーズで、UXがとてもよかったです。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "iOS アプリ開発に挑戦",
    description: "締め切りを絶対に守るアプリ 'Dead Line'",
    date: "5月",
    details: "Widget を利用し、締め切り日時を常に表示してくれるアプリです。SwiftUIで実装し、リリースしました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "ローカル LLM 搭載デスクトップアプリ",
    description: "日々の人生をドラマチックに 'EpicLog'",
    date: "4月",
    details: "ローカルLLMがPCの履歴を読み取り、ドラマチックな日記を出力してくれます。Qwenをローカルで使用しているため、チューニングに苦労しました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "初ソロハッカソン！！",
    description: "エンジニアロードマップ 'DevTree'",
    date: "3月",
    details: "エンジニアのスキルやロードマップをアプリに落とし込みました。スキルツリー状になっており、自分が達成した箇所を設定することができます。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "KIT Hackathon 参加",
    description: "物流を DX 化 'LogiLink'",
    organization: "新人賞・8番ラーメン賞",
    date: "3月",
    details: "物流2025年問題の解決のため、サプライチェーンを可視化するアプリを開発しました。Web アプリだけでなく、Android アプリも開発しました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Engineer Guild Hackathon 参加",
    description: "日報SNS 'キロクル'",
    date: "2月",
    details: "日報を投稿し合う SNS です。1 週間で実際に利用できる状態まで実装し、アプリとしての完成度を追求しました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Android × Camera",
    description: "写真で撮るだけ家計簿 'おさいふカメラ'",
    date: "2月",
    details: "写真を撮るだけで家計簿を管理できるアプリです。ネイティブならではの機能を搭載し、MVVMで堅牢なアーキテクチャで実装されています。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "Android と LLM の融合",
    description: "自分だけの Vtuber 'AIVY'",
    organization: "努力賞",
    date: "12月",
    details: "Vtuber の中身を AI にし、Android アプリで会話をすることができるアプリです。LLM と Android を連携させ、カスタマイズ性の高い AI の Vtuber を作成できます。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "目指せ Canva !!",
    description: "AI 搭載 Canva 'PresentsAI'",
    date: "12月",
    details: "1 年生のみのチームで打倒 Canva を目指して開発しました。発表途中に AI がアシストしてくれる機能や、最後に点数をつけてくれる機能など、盛りだくさんのアプリです。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "スマプロハッカソン",
    description: "ペット育成アプリ'VirtuPet'",
    organization: "優秀賞",
    date: "11月",
    details: "初めての 1 年生のみチームでのハッカソンでリーダーを努めました。デスクトップ画面に Unity で動かしているペットをリアルタイムで表示し、育成するアプリです",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "JPHACKS2024参加",
    description: "運動促進アプリ 'ShareFit'",
    date: "10月",
    details: "全国規模のオフラインのハッカソンに初めて参加しました。本格的な Android アプリを初めて開発し、学ぶことができました。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "ゲーム開発に挑戦",
    description: "コンビニ経営ゲーム '店長になろう'",
    organization: "努力賞",
    date: "9月",
    details: "DxLib を利用し、店長視点での経営ゲームを開発しました。お客さんのアルゴリズムや C# によるプログラミングを学びました。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "人生初のハッカソン",
    description: "アルバム生成アプリ '思い出花火'",
    date: "9月",
    details: "React と Firebase を利用し、複数人が持ち寄った写真からアルバムを作成するアプリを開発しました。",
    isExpanded: false,
  },
]

// カンファレンスデータ
export const conferenceEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "アーキテクチャカンファレンス",
    description: "アーキテクチャが集う 2 日間！！",
    date: "11月",
    details: "各社のクラウドアーキテクチャを拝見し、憧れの Gregor Hohpe さんにお会いすることができました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Kotlin Fest",
    description: "Kotlin の祭りに参加！！",
    date: "11月",
    details: "想像以上にバックエンド Kotlin の勢いが強く、言語仕様の理解の甘さを痛感しました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Vue Fes",
    description: "初心者だけど、Vue Fest に参加しました！！",
    date: "10月",
    details: "ほぼ触ったことがなかったですが、React との違いや Vue の最新動向を知ることができました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Go Conference",
    description: "勢いに乗っている Go のカンファレンス！！",
    date: "9月",
    details: "Go の用途の幅の広さや、魅力の大部分である、並行処理の内部実装を理解できました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "iOSDC",
    description: "待ちに待った Android カンファレンス !!",
    date: "9月",
    details: "Android のカンファレンスに初参加。インターンで学んだ技術の発展的な内容や、知人との交流を通して、Android の技術をキャッチアップしました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Droid Kaigi",
    description: "待ちに待った Android カンファレンス !!",
    date: "9月",
    details: "Android のカンファレンスに初参加。インターンで学んだ技術の発展的な内容や、知人との交流を通して、Android の技術をキャッチアップしました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "AWS Summit",
    description: "クラウド技術のキャッチアップ",
    date: "6月",
    details: "AWS の技術や Amazon の Bedrock を利用した AI の技術を学びました。クラウド運用の熱量がとても上がりました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Interop Tokyo",
    description: "通信やセキュリティなどの低レイヤー技術のキャッチアップ",
    date: "6月",
    details: "各企業の取り組みや製品を見る、現場のエンジニアに聞くことで、技術の深さを感じることができました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "TS Kaigi",
    description: "Web のカンファレンスに参加！！",
    date: "5月",
    details: "TypeScript の勢いに触れ、とても刺激的な体験をしました。また、学生支援の方々とも交流するなど、貴重な体験をしました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "TrySwift !!",
    description: "iOS の国内最大イベントに参加しました。",
    date: "4月",
    details: "BuriKaigi を機に iOS 開発を始め、TrySwift に参加しました。現場のエンジニアやブースの方々と交流してきました。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "BuriKaigi",
    description: "人生初のカンファレンス。富山で鰤しゃぶをいただきました。",
    date: "2月",
    details: "技術問わず、様々な分野の知見を得ることができました。ブリめっちゃ美味しかったです。",
    isExpanded: false,
  },
]

// タブごとのデータマッピング
export const timelineData = {
  activities: activitiesEvents,
  events: eventsEvents,
  internships: internshipEvents,
  hackathons: hackathonEvents,
  conferences: conferenceEvents,
}
