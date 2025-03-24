"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronDown, ChevronUp } from "lucide-react"

// プロジェクトデータの型定義
interface Project {
  title: string
  desc: string
  details: string
  technologies: string[]
}

// タイムラインイベントの型定義
interface TimelineEvent {
  year: string
  title: string
  description: string
  organization?: string
  date?: string
  details?: string
  isExpanded?: boolean
}

// Project data with additional details
const projects: Project[] = [
  {
    title: "LogiLink",
    desc: "配送業者同士の連携SNSアプリ",
    details:
      "配送業者同士の連携をスムーズに行うためのアプリです。サプライチェーンの会社全てを繋ぎ、契約や受注などの流れを全て自動化することを目指したプロダクトです。2024年問題を解決することを目指しています。",
    technologies: ["Android", "IOS", "Web", "AWS"],
  },
  {
    title: "PresentsAI",
    desc: "プレゼンシート作成アプリ",
    details:
      "プレゼン資料をAIで効率的に作ることができるWebアプリです。対象をエンジニアに絞り、コードブロック、発表の採点機能などを導入しました。プレゼンの質を向上させることを目指しています。",
    technologies: ["Web", "Next.js", "Go", "PostgreSQL"],
  },
  {
    title: "MichikusaMemo",
    desc: "位置情報と紐付けしたメモ帳アプリ",
    details:
      "場所にメモを書くことのできるアプリです。旅行やカンファレンスなどで飛び回る人に向けたアプリです。SwiftUIで実装し、リリースしました。DBのクラウド化を目指しています。",
    technologies: ["IOS", "SwiftUI", "MapKit"],
  },
  {
    title: "スマプロ",
    desc: "校内のプロジェクト活動",
    details:
      "2年生からリーダーを務めている。大学内のプロジェクト団体です。アプリ開発を中心に、WebやUnityなど幅広く勉強しています。",
    technologies: ["Web", "IOS", "Android"],
  },
  {
    title: "DevTree",
    desc: "エンジニア志望向けスキルツリーアプリ",
    details:
      "エンジニアが自分に足りてない知識を把握するためのスキルツリーアプリです。2年生になる直前に、新入生たちに向けて開発しました。",
    technologies: ["Android", "Kotlin", "JetpackCompose", "Room"],
  },
  {
    title: "Hackit運営",
    desc: "校内のハッカソンイベントの運営",
    details:
      "3つ上の代が校内で開催していたハッカソンイベントを引き継ぎ、運営を行っています。一年生向けの交流イベントです。一年生の参加者が増えるように、企画や広報を行っています。",
    technologies: ["Notion", "Git", "Web", "Slack"],
  },
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [events, setEvents] = useState<TimelineEvent[]>([
    {
      year: "2025",
      title: "LogiLink開発開始",
      description: "KITHackthonで受賞",
      date: "3月",
      details:
        "2024物流問題の解決を目指し、SNS型プラットフォームを開発しました。それぞれをネイティブで開発中です。",
      isExpanded: false,
    },
    {
      year: "2025",
      title: "MichikusaMemoリリース",
      description: "不登校自動を未然に防ぐアプリ開発",
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
      date:"4月",
      details: "情報工学を専攻し、プログラミングの基礎を学び始める",
      isExpanded: false,
    },
  ])

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  const toggleExpand = (index: number) => {
    setEvents(events.map((event, i) => (i === index ? { ...event, isExpanded: !event.isExpanded } : event)))
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 w-full bg-[#3498db] text-white py-4 z-50 shadow-md">
        <nav className="container mx-auto px-4">
          <ul className="flex justify-end space-x-6 text-lg font-medium">
            {["about", "skills", "projects", "timeline", "reports", "contact"].map((section) => (
              <li key={section} className="hover:text-yellow-300 transition-colors">
                <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 flex flex-col items-center px-4">
        <div className="mb-8 transform transition hover:scale-105 duration-300">
          <Image
            src="/monaka.png"
            alt="プロフィール画像"
            width={192}
            height={192}
            priority
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
          />
        </div>

        <h1 className="text-sky-500 text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">高岡己太朗</h1>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-8">About me</h2>
          <p className="text-xl text-center max-w-6xl mx-auto text-black">
            金沢工業大学で情報工学を学んでいる&quot;こたろう&quot;と申します
            <br />
            最近はAndroidアプリ開発にハマっていて、技術イベントにもよく出没します。
            <br />
            コードを書いたり、最新技術を追ったりするのが好きで、つい時間を忘れてしまうタイプです。
            <br />
            猫とゲームが癒し。
            <span className="block mt-4 mb-6">気軽に話しかけてください！</span>
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-10">Skills</h2>
          <div className="flex justify-center flex-wrap gap-3 md:gap-4 max-w-4xl mx-auto">
            {[
              "Java",
              "Jetpack Compose",
              "SwiftUI",
              "C",
              "Python",
              "Flutter",
              "React",
              "Next.js",
              "Go",
              "Kubernetes",
              "LLM",
              "Ruby",
              "Unity",
            ].map((skill) => (
              <div
                key={skill}
                className="px-6 py-2 bg-emerald-500 text-white text-lg rounded-full hover:bg-emerald-600 transition shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-8">プロジェクト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => openProjectDetails(project)}
                className="h-36 px-6 py-6 bg-white text-sky-500 rounded-lg border-2 border-white shadow-xl 
                hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-500 
                hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-95 
                transition transform flex flex-col items-start"
              >
                <span className="text-xl font-bold mb-4">{project.title}</span>
                <span className="text-base text-black hover:text-white">{project.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-xl font-bold text-sky-500">{selectedProject.title}</DialogTitle>
              </div>
              <DialogDescription className="text-base font-medium text-gray-700 mt-1">
                {selectedProject.desc}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">詳細</h3>
                <p className="text-sm text-gray-700">{selectedProject.details}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">使用技術</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-10">これまでの活動</h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-sky-500 transform -translate-x-1/2"></div>

              {/* Timeline events */}
              {events.map((event, index) => {
                const isEven = index % 2 === 0

                return (
                  <div key={index} className="mb-12 relative flex justify-center items-center">
                    {/* Year marker in center */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-sky-500 border-4 border-white z-10 flex items-center justify-center text-xs text-white font-bold">
                      {event.year.slice(-2)}
                    </div>

                    {/* Content positioning based on even/odd - responsive layout */}
                    <div
                      className={`w-full md:w-5/12 ${isEven ? "md:ml-auto pl-12 md:pl-0 md:pr-8" : "md:mr-auto pl-12 md:pl-8"} relative`}
                    >
                      {/* Event content */}
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-sky-500 text-white px-6 py-3 flex justify-between items-center">
                          <span className="font-medium">{event.year}</span>
                          <button
                            onClick={() => toggleExpand(index)}
                            className="text-white hover:bg-sky-600 rounded-full p-1"
                            aria-label={event.isExpanded ? "折りたたむ" : "展開する"}
                          >
                            {event.isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>
                        </div>

                        <div className="p-6">
                          <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                          <p className="text-sm mb-4">{event.description}</p>

                          {event.organization && (
                            <div className="bg-purple-500 text-white text-sm rounded-md shadow-md p-3 text-center mb-3">
                              {event.organization}
                            </div>
                          )}

                          {event.date && (
                            <div className="text-xs">
                              <span className="text-lime-400">{event.date}</span>
                            </div>
                          )}

                          {event.isExpanded && event.details && (
                            <div className="mt-4 text-sm bg-gray-50 p-4 rounded-md border border-gray-100">
                              {event.details}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Mobile timeline dot */}
                      <div className="absolute top-4 left-0 w-4 h-4 rounded-full bg-sky-500 border-2 border-white md:hidden"></div>
                    </div>

                    {/* Connector line to center - only visible on desktop */}
                    <div
                      className={`hidden md:block absolute top-4 h-0.5 bg-sky-500 w-[calc(25%-4px)] ${
                        isEven ? "left-[calc(50%+4px)]" : "right-[calc(50%+4px)]"
                      }`}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section id="reports" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-8">レポート</h2>
          <div className="max-w-2xl mx-auto">
            <a
              href="https://store.supercell.com/ja/brawlstars"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 underline py-2 hover:text-blue-800 transition-colors text-sm"
            >
              ・ブロスタのインストールはこちらから
            </a>
            {[...Array(7)].map((_, i) => (
              <a
                key={i}
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 underline py-2 hover:text-blue-800 transition-colors text-sm"
              >
                ・別のサイトはこちら
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-sky-500 mb-8">Contact</h2>
          <p className="text-lg mb-6">お問い合わせはこちらから</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:akokoa1221@gmail.com"
              className="bg-sky-500 text-white px-6 py-3 rounded-full hover:bg-sky-600 transition shadow-md"
            >
              メールを送る
            </a>
            <a
              href="https://x.com/monaka_12"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition shadow-md"
            >
              SNSで繋がる
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3498db] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 高岡己太郎 All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}

