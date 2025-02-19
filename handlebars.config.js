import { resolve } from "path";
import { dirname } from "path";

const __dirname = dirname(new URL(import.meta.url).pathname);

const deals = [
  {
    href: "#!",
    title: "NEAR/USDT",
    profit: "58.6206",
    goal: "Цель 4",
  },
  {
    href: "#!",
    title: "BTC/USDT",
    profit: "6.02",
    goal: "Цель 3",
  },
  {
    href: "#!",
    title: "ETH/USDT",
    profit: "16.3",
    goal: "Цель 4",
  },
  {
    href: "#!",
    title: "NEAR/USDT",
    profit: "0.963",
    goal: "Цель 4",
  },
  {
    href: "#!",
    title: "NEAR/USDT",
    profit: "58.6206",
    goal: "Цель 4",
  },
];

const tradeCards = [
  {
    cardIcon: "#copy",
    cardTitle: "Копи–трейдинг 24/7",
    cardText:
      "Copy–Trading позволяет следить за сделками команды и получать прибыль 24/7 без каких–либо усилий или проблем для вас.",
  },
  {
    cardIcon: "#trade",
    cardTitle: "Торговля спотовыми и фьючерсными сделками",
    cardText:
      "Платформа для копи–трейдинга поддерживает торговлю как спотовыми, так и фьючерсными сделками на Binance.",
  },
  {
    cardIcon: "#wallet",
    cardTitle: "Высокая прибыль каждий день",
    cardText:
      "Каждая сделка показывает хорошие результаты на рынках за счет хорошего денежного и риск менеджмента.",
  },
  {
    cardIcon: "#play",
    cardTitle: "Собственный курс по трейдингу",
    cardText:
      "Мы хотим менять комьюнити, улучшать его. В личном кабинете на сайте вы найдете наш собственный курс по криптовалютам, который поможет увереннее понимать наши сигналы и разрабатывать свои.",
  },
  {
    cardIcon: "#circle",
    cardTitle: "Сильное окружение",
    cardText:
      "Ты попадаешь в сильное крипто окружение, ведь развиваться легче когда нас много. В чате присутствуют люди из нашей команды, которые общаються со всеми, помагают и подсказывают.",
  },
];

const serviceCards = [
  {
    cardTitle: "Создайте аккаунт",
    cardText:
      "Начните бесплатную 3-дневную пробную версию. Кредитная карта не требуется.",
  },
  {
    cardTitle: "Подключить обмен API ключами",
    cardText: "Просто вставьте свои ключи API из личного кабинета.",
  },
  {
    cardTitle: "Настройте аккаунт",
    cardText:
      "Поставьте нужные настройки депозита на каждый сигнал и нажмите сохранить.",
  },
  {
    cardTitle: "Ваш копитрейдер запущен",
    cardText:
      "Просто расслабьтесь и начните получать пассивный доход от криптовалюты с помощью TradeBlade.",
  },
];

export default {
  partialDirectory: resolve(__dirname, "src/partials"),
  context: {
    deals: deals,
    tradeCard: tradeCards,
    serviceCard: serviceCards,
  },
};
