function getData(deal = 3.8, checkOut = 7.0, configurator = 0.2, landingPage = 7.4): {
    name: string;
    time: number;
}[] {
  return [
    { name: 'Landing Page', time: landingPage },
    { name: 'Configurator', time: configurator },
    { name: 'Check-out', time: checkOut },
    { name: 'Deal', time: deal },
  ];
}

export default getData;
