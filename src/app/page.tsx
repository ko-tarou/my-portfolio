export default function Home() {
  return (
    <main>
      <header className="w-full bg-[#3498db] text-white text-right py-4 text-1xl font-bold">
        About skills Projects report Contact
      </header>

      <div className="text-5xl flex flex-col items-center">
        <img
          src="/monaka.png"
          alt="プロフィール画像"
          className="w-48 h-48 rounded-full object-cover border-4 border-yellow-400"
        />
        <div>私は</div>
        <div>高岡己太郎です</div>
        <div>金沢工業大学工学部情報工学科1年です</div>
        <div className="flex flex-row space-x-4 mt-6 mb-40">
          <button className="px-6 py-2 bg-yellow-400 text-black text-2xl rounded-full hover:bg-yellow-500 transition">
            知ってる
          </button>
          <button className="px-6 py-2 bg-yellow-400 text-black text-2xl rounded-full hover:bg-yellow-500 transition">
            知らない
          </button>
        </div>
        <div className="text-3xl font-semibold text-center text-[#268785]">
            About me
          < div className="text-xl text-center mt-4 text-black">
            金沢工業大学で情報工学を学んでいます。僕はメンヘラです。猫が好きです。すぐブロスタに誘います。身長１８４です。
            <br />
            あとはよくわかりません。
            <div className="mt-8 text-[#268785] text-3xl">skil</div>
            <div className="mt-4 flex justify-center gap-4 flex-wrap">
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                Java
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                Python
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                JavaScript
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                React
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                Kotlin
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                AviUtl
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                PremierePro
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                AfterEffects
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                ROS2
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                HTML
              </button>
            </div>
            <div className="mt-4 flex justify-center gap-4 flex-wrap">
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                GoogleCloud
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                PJリーダー
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                Unity
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                💡
              </button>
            </div>
            <div className="mt-8 mb-4 text-2xl font-semibold text-[#268785] text-center">
              プロジェクト（押すと詳細が読めます）
            </div>
            <div className="mt-4 flex justify-center gap-6 flex-wrap">
              <button className="px-6 py-6 bg-white text-sky-500 text-xl rounded-lg border-2 border-white shadow-xl hover:bg-sky-500 hover:text-white hover:shadow-lg active:scale-95 transition transform flex flex-col items-start">
              <span className="text-1xl font-bold mb-2">DidLife</span>
              <span className="text-sm mt-1 text-black">プロジェクト詳細はこちら</span>
              </button>
              <button className="px-6 py-6 bg-white text-sky-500 text-xl rounded-lg border-2 border-white shadow-xl hover:bg-sky-500 hover:text-white hover:shadow-lg active:scale-95 transition transform flex flex-col items-start">
              <span className="text-1xl font-bold mb-2">ShiftTape</span>
              <span className="text-sm mt-1 text-black">シフト管理アプリ</span>
              </button>
              <button className="px-7 py-7 bg-white text-sky-500 text-xl rounded-lg border-2 border-white shadow-xl hover:bg-sky-500 hover:text-white hover:shadow-lg active:scale-95 transition transform flex flex-col items-start">
              <span className="text-1xl font-bold mb-2">MilkyPublisher</span>
              <span className="text-sm mt-1 text-black">初心者向けロボットプログラミングアプリ</span>
              </button>
              <button className="px-6 py-6 bg-white text-sky-500 text-xl rounded-lg border-2 border-white shadow-xl hover:bg-sky-500 hover:text-white hover:shadow-lg active:scale-95 transition transform flex flex-col items-start">
              <span className="text-1xl font-bold mb-2">プロジェクト詳細動画</span>
              <span className="text-sm mt-1 text-black">大学で活動しているPJの紹介動画</span>
              </button>
            </div>
          <div className="mt-4 flex justify-center gap-6 flex-wrap">
              <button className="px-6 py-6 bg-white text-sky-500 text-xl rounded-lg border-2 border-white shadow-xl hover:bg-sky-500 hover:text-white hover:shadow-lg active:scale-95 transition transform flex flex-col items-start">
              <span className="text-1xl font-bold mb-2">CodeVision</span>
              <span className="text-sm mt-1 text-black">AIコード解析ツール</span>
              </button>
              <button className="px-6 py-6 bg-white text-sky-500 text-xl rounded-lg border-2 border-white shadow-xl hover:bg-sky-500 hover:text-white hover:shadow-lg active:scale-95 transition transform flex flex-col items-start">
              <span className="text-1xl font-bold mb-2">IdeaBox</span>
              <span className="text-sm mt-1 text-black">アイデア共有・管理アプリ</span>
              </button>
          </div>
          </div>
          </div>
        </div>
    </main>
  );
}
