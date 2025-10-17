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
export type TimelineTab = 'activities' | 'hackathons' | 'conferences'

// これまでの活動データ
export const activitiesEvents: TimelineEvent[] = [
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
    title: "Hackit",
    description: "校内ハッカソン運営",
    date: "8月",
    details: "校内 13 サークルが所属する DevelopHub にて、3 日間開催のハッカソンを主催しました。",
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
    description: "Goでの大規模開発に挑戦",
    organization: "株式会社ENECHANGE",
    date: "4月",
    details: "ENECHANGEの長期インターンシップに参加し、GoやTypeScriptを使った大規模開発に取り組んでいます。",
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
    title: "スマプロ参加",
    description: "校内のプロジェクト活動に参加",
    date: "4月",
    details:
      "ここで初めてアプリ開発に触れ、Androidアプリの開発を学びました。チームでの開発やコードレビューなど、エンジニアとしての基礎を学びました。",
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
]

// ハッカソンデータ
export const hackathonEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "Hackit",
    description: "校内ハッカソン運営",
    date: "8月",
    details: "校内 13 サークルが所属する DevelopHub にて、3 日間開催のハッカソンを主催しました。",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "DeadLine Widgetリリース",
    description: "技育キャンプハッカソン参加",
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
    year: "2024",
    title: "PresentAI開発",
    description: "プレゼン資料作成アプリ",
    date: "12月",
    details: "プレゼン資料を作成する際に、AIが自動でサポートしてくれるアプリです。これを通し、Web開発の基礎を学びました。",
    isExpanded: false,
  },
]

// カンファレンスデータ
export const conferenceEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "TSKaigi",
    description: "TypeScriptカンファレンス参加",
    date: "9月",
    details: "TypeScriptの最新動向を学び、多くのエンジニアと交流できました。モチベーションが爆上がりしました！",
    isExpanded: false,
  },
  {
    year: "2025",
    title: "Android Bazaar",
    description: "Android開発者カンファレンス",
    date: "7月",
    details: "Android開発の最新トレンドを学び、Jetpack Composeの実践的な使い方を習得しました。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "iOSDC",
    description: "iOS開発者カンファレンス",
    date: "11月",
    details: "SwiftUIの最新機能について学び、iOS開発のスキルを向上させました。",
    isExpanded: false,
  },
  {
    year: "2024",
    title: "Webフロントエンド勉強会",
    description: "フロントエンド技術勉強会",
    date: "10月",
    details: "ReactやNext.jsの最新動向について学び、Web開発の知識を深めました。",
    isExpanded: false,
  },
]

// タブごとのデータマッピング
export const timelineData = {
  activities: activitiesEvents,
  hackathons: hackathonEvents,
  conferences: conferenceEvents,
}
