// プロジェクトデータの型定義
export interface Project {
  title: string
  desc: string
  details: string
  technologies: string[]
  // 本番URL・ストア・公式サイトなど（存在するもののみ）
  link?: string
}

// Project data with additional details
export const projects: Project[] = [
  {
    title: "HitoLink",
    desc: "花き市場向けB2B取引・POS SaaS",
    details:
      "学生2名で立ち上げた受託開発ベンチャーの技術責任者を務めています。富山の生花卸売市場（ワールドフラワー花竹）の紙の商習慣をデジタル化するB2B取引アプリ CompanySeller と、レジ/POS の FlowerPOS を、要件ヒアリングから設計・実装まで一貫して担当しています。取引ステートマシン、カメラでのバーコード読み取り（EAN-13）、A4請求書のPDF出力などを実装しました。",
    technologies: ["Go", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    title: "DevelopersHub Ops",
    desc: "技術コミュニティの運営自動化基盤",
    details:
      "校内13サークルが所属する DevelopersHub の運営を自動化する Slack Bot / Web アプリで、Cloudflare Workers 上で本番稼働しています。リーダー会の招集、HackIT の運営タスク管理、朝活の「けじめトラッカー」などを1つの基盤に載せました。Slack SDK が Workers 非対応だったため Hono + Web API 直叩きに設計変更し、dedup_key による冪等性の担保や JST/UTC の一元管理を行っています。",
    technologies: ["Cloudflare Workers", "Hono", "D1", "React"],
    link: "https://leaders-meetup-bot.akokoa1221.workers.dev",
  },
  {
    title: "捌 (Sabaki)",
    desc: "ターミナル・エディタ・ブラウザ統合のmacOSアプリ",
    details:
      "開発中に散らばる作業を1ウィンドウにまとめる自作の macOS ネイティブアプリです。左にターミナル（SwiftTerm + tmux でセッションを永続化）、右に Markdown エディタ、全画面に複数タブの内蔵ブラウザを統合しました。iOS コンパニオンアプリと同期し、日々の開発で自分自身が常用しています。",
    technologies: ["Swift", "SwiftUI", "AppKit", "tmux"],
  },
  {
    title: "のってぃバスどこ",
    desc: "野々市市のバス位置情報アプリ",
    details:
      "石川県野々市市のコミュニティバス「のってぃ」の現在地をリアルタイムに表示するアプリで、Google Play で公開しています。Raspberry Pi を車載して位置情報を取得し、Firebase 経由で地図上に反映する構成です。15人チームのPM兼 Flutter エンジニアとして、開発の進行管理・レビュー・リリース作業を担当しました。",
    technologies: ["Flutter", "Firebase", "Raspberry Pi", "Google Maps API"],
    link: "https://play.google.com/store/apps/details?id=com.honmushi.notybus",
  },
  {
    title: "TaskTalk",
    desc: "タスク管理×チャット統合アプリ（長期インターン）",
    details:
      "AlphaOmega での長期インターンで開発している、チームのタスクをトーク形式で扱う本番プロダクトです。タスクの「完了確認フロー」の新規設計・実装、モーダル内でのスレッド表示、スクロール制御の全面刷新、グループ一括招待APIの生SQL化などを担当しました。WebSocket の送信者なりすましの脆弱性を発見し、issue として報告しています。",
    technologies: ["TypeScript", "Next.js", "Prisma", "Cloud Run"],
  },
  {
    title: "HackIT 2026",
    desc: "学内ハッカソンの主催と公式サイト内製",
    details:
      "校内13サークルが所属する DevelopersHub のハッカソン「HackIT」を主催しています。2026年で4回目の開催となり、企画・広報・企業協賛の交渉までを担当しました。公式サイトも自分で開発し、申込APIにレート制限と冪等性キーを実装して本番公開しています。",
    technologies: ["Next.js", "TypeScript", "Tailwind", "GAS"],
    link: "https://hackit-2026.vercel.app",
  },
]
