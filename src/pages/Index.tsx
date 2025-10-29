import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DonatePackage {
  id: string;
  name: string;
  price: number;
  color: string;
  icon: string;
  features: string[];
  popular?: boolean;
}

const packages: DonatePackage[] = [
  {
    id: 'vip',
    name: 'VIP',
    price: 299,
    color: 'from-emerald-500 to-emerald-600',
    icon: 'Gem',
    features: [
      'Цветной ник в чате',
      'Приватная зона /warp vip',
      '5 точек дома /sethome',
      'Доступ к /fly на 30 минут',
      'Кит VIP раз в день'
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 599,
    color: 'from-diamond-500 to-diamond-600',
    icon: 'Crown',
    popular: true,
    features: [
      'Всё из VIP',
      'Префикс [PREMIUM]',
      'Приватная зона /warp premium',
      '10 точек дома',
      'Безлимитный /fly',
      'Кит PREMIUM 2 раза в день',
      'Доступ к /heal и /feed'
    ]
  },
  {
    id: 'legendary',
    name: 'LEGENDARY',
    price: 999,
    color: 'from-gold-500 to-gold-600',
    icon: 'Sparkles',
    features: [
      'Всё из PREMIUM',
      'Эксклюзивный префикс [LEGENDARY]',
      'Приватная легендарная зона',
      '20 точек дома',
      'Безлимитный /fly + /speed',
      'Кит LEGENDARY 3 раза в день',
      '/heal, /feed, /fix all',
      'Доступ к креативному режиму',
      'Персональный NPC'
    ]
  }
];

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-4 font-rubik">
            Магазин привилегий
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Получи уникальные возможности на сервере! Выбери свой донат-пакет и стань легендой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer animate-slide-up bg-slate-800/50 backdrop-blur-sm ${
                selectedPackage === pkg.id ? 'border-white ring-4 ring-white/50' : 'border-slate-700'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                    🔥 Популярное
                  </Badge>
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${pkg.color}`}>
                    <Icon name={pkg.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-rubik">{pkg.name}</h3>
                    <p className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white to-slate-300">
                      {pkg.price} ₽
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className={`mt-0.5 flex-shrink-0 bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`} />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white border-0 font-semibold text-lg py-6`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPackage(pkg.id);
                  }}
                >
                  Купить {pkg.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {selectedPackage && (
          <div className="max-w-2xl mx-auto animate-scale-in">
            <Card className="bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 p-8">
              <div className="text-center">
                <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold text-white mb-4 font-rubik">
                  Оформление покупки
                </h2>
                <p className="text-slate-300 mb-6">
                  Вы выбрали пакет: <span className="font-bold text-white">{packages.find(p => p.id === selectedPackage)?.name}</span>
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg">
                    <Icon name="User" size={24} className="text-primary" />
                    <input
                      type="text"
                      placeholder="Ваш игровой ник"
                      className="flex-1 bg-transparent border-0 text-white placeholder-slate-500 focus:outline-none text-lg"
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <input
                      type="email"
                      placeholder="Email для чека"
                      className="flex-1 bg-transparent border-0 text-white placeholder-slate-500 focus:outline-none text-lg"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-600 text-white hover:bg-slate-700"
                    onClick={() => setSelectedPackage(null)}
                  >
                    Отмена
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-primary to-emerald-600 hover:opacity-90 text-white font-semibold text-lg"
                  >
                    Перейти к оплате
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
            <Icon name="Shield" size={20} className="text-emerald-500" />
            <span className="text-slate-300">Безопасная оплата через проверенные платёжные системы</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
