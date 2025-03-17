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
          <div className="text-xl text-center mt-4 max-w-xl text-black">
            金沢工業大学で情報工学を学んでいます。僕はメンヘラです。猫が好きです。すぐブロスタに誘います。身長１８４です。
            <br />
            あとはよくわかりません。
          </div>
        </div>
      </div>
    </main>
  );
}
