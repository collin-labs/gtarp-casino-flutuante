export interface Game {
  id: string
  name: string
  sub: string
  image: string
  featured?: boolean
  badge?: string
  badgeColor?: string
  colors: [string, string]
  players?: number
  desc?: string
  stat?: string
}

export interface DockItem {
  id: string
  label: string
  icon: string
  color: string
}

export interface LiveFeedItem {
  user: string
  game: string
  amount: string
  color: string
}

export const GAMES: Record<string, Game[]> = {
  cassino: [
    { id: "bicho", name: "JOGO DO BICHO", sub: "Acerte o animal e ganhe", image: "/assets/9.ANIMA-GAME.png", featured: true, badge: "EXCLUSIVO", badgeColor: "#00E676", colors: ["#FFD700", "#00E676"], players: 1523 },
    { id: "crash", name: "CRASH", sub: "Cash out a tempo", image: "/assets/1.CRASH.png", colors: ["#FF6B00", "#00E676"], players: 2847 },
    { id: "roleta", name: "ROLETA", sub: "Gire a roda da sorte", image: "/assets/5.ROULETTE.png.png", badge: "HOT", badgeColor: "#FF2D78", colors: ["#FF2D55", "#FFD700"], players: 980 },
    { id: "blackjack", name: "BLACKJACK", sub: "Faca 21 e venca", image: "/assets/4.BLACKJACK.png", colors: ["#1DE9B6", "#FFD700"], players: 743 },
    { id: "mines", name: "MINES", sub: "Evite as bombas", image: "/assets/3.MINES.png", colors: ["#00D4FF", "#FF2D78"], players: 1876 },
    { id: "plinko", name: "PLINKO", sub: "Solte a bola e ganhe", image: "/assets/8.PLINKO.png", colors: ["#00E676", "#7B2FBE"], players: 654 },
    { id: "slots", name: "CACA-NIQUEL", sub: "Gire os rolos", image: "/assets/2.SLOTS.png", colors: ["#FF2D78", "#FFD700"], players: 1102 },
    { id: "dados", name: "DADOS", sub: "Aposte no numero", image: "/assets/7.DICE.png", colors: ["#FFD700", "#FF8C00"], players: 432 },
    { id: "poker", name: "POKER", sub: "Mostre suas cartas", image: "/assets/6.POKER.png", colors: ["#0066FF", "#FFD700"], players: 612 },
    { id: "roletabr", name: "ROLETA BRASILEIRA", sub: "Versao nacional", image: "/assets/10.BRAZILIAN-ROULETTE.png", colors: ["#00E676", "#FFD700"], players: 320 },
    { id: "bingo", name: "BINGO", sub: "Preencha a cartela", image: "/assets/21.BINGO.png", colors: ["#FFD700", "#FF2D78"], players: 289 },
    { id: "poolGame", name: "POOL GAME", sub: "Sinuca premium", image: "/assets/22.POOL-GAME.png", colors: ["#00D4FF", "#00E676"], players: 178 },
  ],
  pvp: [
    { id: "coinflip", name: "COINFLIP", sub: "50/50 cara ou coroa", image: "/assets/12.CONIFLIP.png", featured: true, badge: "PVP", badgeColor: "#FF2D78", colors: ["#FFD700", "#00D4FF"], players: 892 },
    { id: "jackpot", name: "JACKPOT", sub: "Pote acumulado PVP", image: "/assets/13.JACKPOT.png", colors: ["#FFD700", "#FF8C00"], players: 345 },
    { id: "battles", name: "CASE BATTLE", sub: "Batalha de caixas", image: "/assets/11.CASE-BATTLE.png", colors: ["#FF2D78", "#00D4FF"], players: 567 },
    { id: "pokerpvp", name: "POKER PVP", sub: "Mesa contra jogadores", image: "/assets/6.POKER.png", colors: ["#7B2FBE", "#FFD700"] },
    { id: "bjpvp", name: "BLACKJACK PVP", sub: "21 contra outros", image: "/assets/4.BLACKJACK.png", colors: ["#FF2D55", "#00E676"] },
  ],
  eventos: [
    { id: "loteria", name: "LOTERIA", sub: "Bilhetes semanais", image: "/assets/18.LOTTERY.png", featured: true, badge: "ATIVO", badgeColor: "#00E676", colors: ["#FFD700", "#00E676"], players: 4210 },
    { id: "daily", name: "GRATIS DIARIO", sub: "Caixa gratis todo dia", image: "/assets/19.DAILY-FREE.png", colors: ["#FF2D78", "#FFD700"], badge: "NOVO", badgeColor: "#00D4FF" },
    { id: "sorteios", name: "GIVEAWAYS", sub: "Eventos especiais", image: "/assets/20.GIVEAWAYS.png", colors: ["#FFD700", "#7B2FBE"] },
  ],
  loja: [
    { id: "caixas", name: "CASES", sub: "Abra caixas premium", image: "/assets/14.CASES.png", colors: ["#7B2FBE", "#FFD700"] },
    { id: "upgrade", name: "UPGRADE", sub: "Combine e evolua", image: "/assets/15.UPGRADE.png", colors: ["#FFD700", "#FF8C00"] },
    { id: "marketplace", name: "MARKETPLACE", sub: "Compre e venda itens", image: "/assets/16.MARKETPLACE.png", colors: ["#00D4FF", "#00E676"] },
    { id: "inventory", name: "INVENTARIO", sub: "Seus itens", image: "/assets/17.INVENTORY.png", colors: ["#E2E2EA", "#FFD700"] },
  ],
}

export const HERO_SLIDES: (Game & { desc: string; stat: string })[] = [
  { ...GAMES.cassino[0], desc: "O classico brasileiro com 25 animais. Exclusivo no FiveM!", stat: "1.523 apostas hoje" },
  { ...GAMES.cassino[2], desc: "Gire a roda e tente a sorte nos numeros!", stat: "980 jogando agora" },
  { ...GAMES.cassino[6], desc: "Gire os rolos e acerte a combinacao premiada!", stat: "1.102 jogando agora" },
]

export const DOCK_ITEMS: DockItem[] = [
  { id: "cassino", label: "CASSINO", icon: "\uD83C\uDFB0", color: "#00E676" },
  { id: "pvp", label: "PVP", icon: "\u2694\uFE0F", color: "#FF2D78" },
  { id: "loja", label: "LOJA", icon: "\uD83C\uDFEA", color: "#00D4FF" },
  { id: "eventos", label: "EVENTOS", icon: "\uD83C\uDF81", color: "#FFD700" },
  { id: "perfil", label: "PERFIL", icon: "\uD83D\uDC64", color: "#E2E2EA" },
  { id: "config", label: "CONFIG", icon: "\u2699\uFE0F", color: "#8A8A9A" },
]

export const LIVE_FEED: LiveFeedItem[] = [
  { user: "DarkWolf", game: "Crash", amount: "+R$12.450", color: "#00E676" },
  { user: "NightKing", game: "Mines", amount: "+R$3.200", color: "#00D4FF" },
  { user: "PixelGod", game: "Bicho", amount: "+R$8.900", color: "#FFD700" },
  { user: "ShadowX", game: "Coinflip", amount: "+R$5.100", color: "#FF2D78" },
  { user: "CyberAce", game: "Crash", amount: "+R$22.000", color: "#00E676" },
  { user: "NovaFlux", game: "Plinko", amount: "+R$4.560", color: "#7B2FBE" },
]
