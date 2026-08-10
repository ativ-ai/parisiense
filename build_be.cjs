const fs = require('fs');

const images = JSON.parse(fs.readFileSync('images_base64.json', 'utf8'));
const fontBase64 = fs.readFileSync('material_symbols_base64.txt', 'utf8').trim();
const tailwindCss = fs.readFileSync('full_tailwind.css', 'utf8');
const latinFontsCss = fs.readFileSync('latin_fonts_embedded.css', 'utf8');

const materialSymbolsCss = `
@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('data:font/ttf;base64,${fontBase64}') format('truetype');
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
`;

const translations = {
  pt: {
    headerTitle: 'Be Parisiense',
    logoAlt: 'Logo Be Parisiense',
    heroTitle: 'GPS Paris|Guia para Sentir Paris',
    heroSubtitle: 'O guia completo com roteiros de 3, 5 e 7 dias, dicas secretas e a essência parisiense que só quem vive na cidade conhece.',
    heroImageAlt: 'Vista panorâmica de Paris com a Torre Eiffel ao fundo ao pôr do sol',
    ctaButton: 'QUERO MEU GUIA AGORA',
    ctaSubtext: 'Compra segura e acesso imediato.',
    problemTitle: 'Cansado de roteiros genéricos que só te levam aos mesmos lugares?',
    problemSubtitle: 'Sua viagem a Paris é um sonho, e você não quer desperdiçar nenhum momento em filas, restaurantes ruins ou "pegadinhas para turistas".',
    problemPoint1: 'Medo de planejar tudo errado e perder tempo?',
    problemPoint2: 'Quer descobrir cafés charmosos e lugares secretos?',
    problemPoint3: 'Dificuldade em organizar um roteiro que faça sentido?',
    problemPoint4: 'Sonha em viver uma experiência autêntica e inesquecível?',
    problemConclusion: "Se você disse 'sim' para alguma dessas perguntas, o GPS Paris foi feito para você.",
    solutionTitle: 'Apresentando o GPS Paris: Seu Passaporte para a Paris dos Seus Sonhos.',
    solutionText: 'Este não é apenas um guia. É um convite para viver Paris com profundidade, calma e encanto. Criado por Beatriz Scholten (@beparisiense), uma brasileira que chama Paris de casa, este guia reúne anos de descobertas e paixão pela cidade luz em um material completo, prático e 100% digital.',
    solutionMapAlt: 'Mapa estilizado de Paris destacando pontos turísticos',
    featuresTitle: 'Tudo o que você precisa para uma viagem perfeita',
    featuresSubtitle: 'Deixamos tudo pronto para que sua única preocupação seja criar memórias inesquecíveis.',
    feature1Title: 'Roteiros Prontos (3, 5 e 7 dias)',
    feature1Desc: 'Otimize seu tempo e aproveite cada segundo, sem o estresse de planejar o que fazer a cada dia.',
    feature2Title: 'Dicas de Restaurantes e Cafés',
    feature2Desc: 'Saboreie a autêntica culinária parisiense e fuja dos restaurantes caros e sem alma.',
    feature3Title: 'Segredos Locais',
    feature3Desc: 'Descubra lugares que não estão nos guias tradicionais e crie memórias que só os locais conhecem.',
    feature4Title: 'Guia de Transporte Prático',
    feature4Desc: 'Navegue por Paris como um expert, com confiança e economia, usando metrô, ônibus e RER.',
    feature5Title: 'Bônus de Hospedagem',
    feature5Desc: 'Saiba quais são os melhores bairros para se hospedar de acordo com seu estilo de viajante.',
    feature6Title: 'Lugares Fotogênicos',
    feature6Desc: 'Encontre os melhores ângulos e locais para tirar fotos incrível e eternizar sua viagem.',
    authorTitle: 'Feito com carinho, por quem vive Paris de verdade.',
    authorText1: 'Meu nome é Beatriz Scholten, mas talvez você me conheça como <a href="https://www.instagram.com/beparisiense" target="_blank" rel="noopener noreferrer" class="underline hover:text-beige-900 font-semibold">@beparisiense</a>. Desde 2019, Paris se tornou minha casa. Mais do que uma turista, me tornei uma moradora apaixonada por desvendar cada canto desta cidade.',
    authorText2: 'Criei o GPS Paris para compartilhar com você o meu olhar, os meus achados e os segredos que aprendi. Quero que você sinta a Paris que eu sinto: autêntica, vibrante e inesquecível.',
    authorAlt: 'Foto de Beatriz Scholten, criadora do Be Parisiense',
    authorInstaButton: 'Seguir no Instagram',
    authorTiktokButton: 'Seguir no TikTok',
    testimonialsTitle: 'O que os viajantes estão dizendo',
    testimonial1Name: 'Juliana R.',
    testimonial1Text: 'Este guia foi um divisor de águas na minha viagem! As dicas de restaurantes são perfeitas e os roteiros me fizeram aproveitar muito mais cada dia. Indispensável!',
    testimonial2Name: 'Marcos P.',
    testimonial2Text: 'Comprei o guia sem muita expectativa e me surpreendi. Muito completo e fácil de usar no celular. As dicas de transporte me salvaram várias vezes. Valeu cada centavo.',
    testimonial3Name: 'Fernanda L.',
    testimonial3Text: 'A melhor parte são as dicas "secretas". Fui em lugares que nunca encontraria sozinha e que fizeram minha viagem ser realmente especial. Obrigada, Bia!',
    finalCtaTitle: 'Está pronto para a sua melhor viagem a Paris?',
    finalCtaSubtitle: 'Deixe a complexidade do planejamento para trás. Com o GPS Paris, sua única tarefa é se apaixonar pela cidade.',
    finalCtaButton: 'SIM, QUERO O GUIA COMPLETO!',
    finalCtaSubtext: 'Acesso vitalício por um pagamento único.',
    faqTitle: 'Perguntas Frequentes',
    faq1q: 'Como vou receber o guia?',
    faq1a: 'Assim que o pagamento for confirmed, você receberá um e-mail com o link para baixar o seu guia em formato PDF. O acesso é imediato!',
    faq2q: 'O guia serve para quem viaja pela primeira vez?',
    faq2a: 'Com certeza! Ele é perfeito tanto para sua primeira viagem, com roteiros que cobrem os pontos essenciais, quanto para viajantes experientes que querem redescobrir a cidade por um novo ângulo.',
    faq3q: 'Posso usar o guia no meu celular?',
    faq3a: 'Sim! O guia é um arquivo PDF, compatível com qualquer celular, tablet ou computador. Você pode salvar no seu dispositivo e acessar a qualquer momento, mesmo sem internet.',
    faq4q: 'Por quanto tempo terei acesso ao guia?',
    faq4a: 'O guia é seu para sempre! Após o download, você pode guardá-lo e consultar quantas vezes quiser para esta e futuras viagens.',
    faq5q: 'A compra é segura?',
    faq5a: 'Sim, 100% segura. O pagamento é processado pela Kiwify, uma das maiores e mais seguras plataformas de produtos digitais do Brasil.',
    footerBrand: 'Be Parisiense',
    footerCopyright: '© Beatriz Scholten. Todos os direitos reservados.<br>Design by <a href="https://ativ.ai" target="_blank" rel="noopener noreferrer" class="underline hover:text-beige-900">Ativ.ai</a>',
    cookieBannerText: 'Usamos cookies para garantir que você tenha a melhor experiência em nosso site.',
    cookieBannerButton: 'Aceitar'
  },
  en: {
    headerTitle: 'Be Parisiense',
    logoAlt: 'Be Parisiense Logo',
    heroTitle: 'GPS Paris|A Guide to Feeling Paris',
    heroSubtitle: 'The complete guide with 3, 5, and 7-day itineraries, secret tips, and the Parisian essence that only someone who lives in the city knows.',
    heroImageAlt: 'Panoramic view of Paris with the Eiffel Tower in the background at sunset',
    ctaButton: 'I WANT MY GUIDE NOW',
    ctaSubtext: 'Secure purchase and immediate access.',
    problemTitle: 'Tired of generic itineraries that only take you to the same old places?',
    problemSubtitle: 'Your trip to Paris is a dream, and you don’t want to waste any moment in queues, bad restaurants, or "tourist traps".',
    problemPoint1: 'Afraid of planning everything wrong and wasting time?',
    problemPoint2: 'Want to discover charming cafes and secret spots?',
    problemPoint3: 'Struggling to organize an itinerary that makes sense?',
    problemPoint4: 'Dream of living an authentic and unforgettable experience?',
    problemConclusion: "If you said 'yes' to any of these questions, GPS Paris was made for you.",
    solutionTitle: 'Introducing GPS Paris: Your Passport to the Paris of Your Dreams.',
    solutionText: 'This is not just a guide. It is an invitation to experience Paris with depth, calm, and charm. Created by Beatriz Scholten (@beparisiense), a Brazilian who calls Paris home, this guide brings together years of discoveries and passion for the city of light in a complete, practical, and 100% digital material.',
    solutionMapAlt: 'Stylized map of Paris highlighting tourist spots',
    featuresTitle: 'Everything you need for a perfect trip',
    featuresSubtitle: 'We have prepared everything so that your only concern is creating unforgettable memories.',
    feature1Title: 'Ready-Made Itineraries (3, 5, & 7 days)',
    feature1Desc: 'Optimize your time and enjoy every second, without the stress of planning what to do each day.',
    feature2Title: 'Restaurant and Café Tips',
    feature2Desc: 'Savor authentic Parisian cuisine and avoid expensive, soulless restaurants.',
    feature3Title: 'Local Secrets',
    feature3Desc: 'Discover places that are not in traditional guides and create memories that only locals know.',
    feature4Title: 'Practical Transport Guide',
    feature4Desc: 'Navigate Paris like an expert, with confidence and savings, using the metro, bus, and RER.',
    feature5Title: 'Accommodation Bonus',
    feature5Desc: 'Learn about the best neighborhoods to stay in according to your travel style.',
    feature6Title: 'Photogenic Spots',
    feature6Desc: 'Find the best angles and places to take incredible photos and immortalize your trip.',
    authorTitle: 'Made with love, by someone who truly lives in Paris.',
    authorText1: 'My name is Beatriz Scholten, but you might know me as <a href="https://www.instagram.com/beparisiense" target="_blank" rel="noopener noreferrer" class="underline hover:text-beige-900 font-semibold">@beparisiense</a>. Since 2019, Paris has become my home. More than a tourist, I became a resident passionate about uncovering every corner of this city.',
    authorText2: "I created GPS Paris to share with you my perspective, my findings, and the secrets I've learned. I want you to feel the Paris I feel: authentic, vibrant, and unforgettable.",
    authorAlt: 'Photo of Beatriz Scholten, creator of Be Parisiense',
    authorInstaButton: 'Follow on Instagram',
    authorTiktokButton: 'Follow on TikTok',
    testimonialsTitle: 'What travelers are saying',
    testimonial1Name: 'Juliana R.',
    testimonial1Text: 'This guide was a game-changer for my trip! The restaurant tips are perfect and the itineraries made me enjoy each day so much more. Indispensable!',
    testimonial2Name: 'Marcos P.',
    testimonial2Text: 'I bought the guide with low expectations and was amazed. Very complete and easy to use on my phone. The transport tips saved me several times. Worth every penny.',
    testimonial3Name: 'Fernanda L.',
    testimonial3Text: 'The best part is the "secret" tips. I went to places I would never have found on my own and that made my trip truly special. Thank you, Bia!',
    finalCtaTitle: 'Ready for your best trip to Paris?',
    finalCtaSubtitle: 'Leave the complexity of planning behind. With GPS Paris, your only job is to fall in love with the city.',
    finalCtaButton: 'YES, I WANT THE COMPLETE GUIDE!',
    finalCtaSubtext: 'Lifetime access for a one-time payment.',
    faqTitle: 'Frequently Asked Questions',
    faq1q: 'How will I receive the guide?',
    faq1a: 'As soon as the payment is confirmed, you will receive an email with a link to download your guide in PDF format. Access is immediate!',
    faq2q: 'Is the guide suitable for first-time travelers?',
    faq2a: 'Absolutely! It is perfect for both your first trip, with itineraries covering the essential points, and for experienced travelers who want to rediscover the city from a new angle.',
    faq3q: 'Can I use the guide on my phone?',
    faq3a: 'Yes! The guide is a PDF file, compatible with any smartphone, tablet, or computer. You can save it on your device and access it at any time, even without internet.',
    faq4q: 'For how long will I have access to the guide?',
    faq4a: 'The guide is yours forever! After downloading, you can keep it and consult it as many times as you want for this and future trips.',
    faq5q: 'Is the purchase secure?',
    faq5a: 'Yes, 100% secure. The payment is processed by Kiwify, one of the largest and safest digital product platforms in Brazil.',
    footerBrand: 'Be Parisiense',
    footerCopyright: '© Beatriz Scholten. All rights reserved.<br>Design by <a href="https://ativ.ai" target="_blank" rel="noopener noreferrer" class="underline hover:text-beige-900">Ativ.ai</a>',
    cookieBannerText: 'We use cookies to ensure you get the best experience on our website.',
    cookieBannerButton: 'Accept'
  },
  fr: {
    headerTitle: 'Be Parisiense',
    logoAlt: 'Logo Be Parisiense',
    heroTitle: 'GPS Paris|Guide pour Ressentir Paris',
    heroSubtitle: "Le guide complet avec des itinéraires de 3, 5 et 7 jours, des conseils secrets et l'essence parisienne que seule une personne qui vit dans la ville connaît.",
    heroImageAlt: 'Vue panoramique de Paris avec la Tour Eiffel en arrière-plan au coucher du soleil',
    ctaButton: 'JE VEUX MON GUIDE MAINTENANT',
    ctaSubtext: 'Achat sécurisé et accès immédiat.',
    problemTitle: 'Fatigué des itinéraires génériques qui vous emmènent toujours aux mêmes endroits ?',
    problemSubtitle: 'Votre voyage à Paris est un rêve, et vous ne voulez perdre aucun instant dans les files d’attente, les mauvais restaurants ou les "pièges à touristes".',
    problemPoint1: 'Peur de tout mal planifier et de perdre du temps ?',
    problemPoint2: 'Envie de découvrir des cafés de charme et des lieux secrets ?',
    problemPoint3: 'Difficulté à organiser un itinéraire qui a du sens ?',
    problemPoint4: 'Vous rêvez de vivre une experiência authentique et inoubliable ?',
    problemConclusion: "Si vous avez répondu 'oui' à l'une de ces questions, le GPS Paris est fait pour vous.",
    solutionTitle: 'Découvrez le GPS Paris : Votre Passeport pour le Paris de Vos Rêves.',
    solutionText: "Ce n'est pas seulement un guide. C'est une invitation à vivre Paris avec profondeur, calme et enchantement. Créé par Beatriz Scholten (@beparisiense), une Brésilienne qui a fait de Paris sa maison, ce guide rassemble des années de découvertes et de passion pour la ville lumière dans un support complet, pratique et 100% numérique.",
    solutionMapAlt: 'Carte stylisée de Paris mettant en évidence les sites touristiques',
    featuresTitle: 'Tout ce dont vous avez besoin pour un voyage parfait',
    featuresSubtitle: 'Nous avons tout préparé pour que votre seule préoccupation soit de créer des souvenirs inoubliables.',
    feature1Title: 'Itinéraires Prêts (3, 5 & 7 jours)',
    feature1Desc: 'Optimisez votre temps et profitez de chaque seconde, sans le stress de planifier quoi faire chaque day.',
    feature2Title: 'Conseils de Restaurants et Cafés',
    feature2Desc: "Savourez l'authentique cuisine parisienne et fuyez les restaurants chers et sans âme.",
    feature3Title: 'Secrets Locaux',
    feature3Desc: 'Découvrez des lieux qui ne figurent pas dans les guides traditionnels et créez des souvenirs que seuls les locaux connaissent.',
    feature4Title: 'Guide Pratique des Transports',
    feature4Desc: 'Naviguez dans Paris comme un expert, avec confiance et économies, en utilisant le métro, le bus et le RER.',
    feature5Title: "Bonus d'Hébergement",
    feature5Desc: 'Sachez quels sont les meilleurs quartiers où séjourner en fonction de votre style de voyageur.',
    feature6Title: 'Lieux Photogéniques',
    feature6Desc: 'Trouvez les meilleurs angles et endroits pour prendre des photos incroyables et immortaliser votre voyage.',
    authorTitle: 'Fait avec amour, par quelqu\'un qui vit vraiment à Paris.',
    authorText1: 'Je m\'appelle Beatriz Scholten, mais vous me connaissez peut-être sous le nom de <a href="https://www.instagram.com/beparisiense" target="_blank" rel="noopener noreferrer" class="underline hover:text-beige-900 font-semibold">@beparisiense</a>. Depuis 2019, Paris est devenue ma maison. Plus qu\'une touriste, je suis devenue une résidente passionnée par la découverte de chaque recoin de cette ville.',
    authorText2: "J'ai créé le GPS Paris pour partager avec vous mon regard, mes trouvailles et les secrets que j'ai appris. Je veux que vous ressentiez le Paris que je ressens : authentique, vibrant et inoubliable.",
    authorAlt: 'Photo de Beatriz Scholten, créatrice de Be Parisiense',
    authorInstaButton: 'Suivre sur Instagram',
    authorTiktokButton: 'Suivre sur TikTok',
    testimonialsTitle: 'Ce que les voyageurs en disent',
    testimonial1Name: 'Juliana R.',
    testimonial1Text: "Ce guide a changé la donne pour mon voyage ! Les conseils de restaurants sont parfaits et les itinéraires m'ont permis de profiter beaucoup plus de chaque journée. Indispensable !",
    testimonial2Name: 'Marcos P.',
    testimonial2Text: "J'ai acheté le guide sans trop d'attentes et j'ai été bluffé. Très complet et facile à utiliser sur mon téléphone. Les conseils sur les transports m'ont sauvé plusieurs fois. Ça vaut chaque centime.",
    testimonial3Name: 'Fernanda L.',
    testimonial3Text: 'Le meilleur, ce sont les conseils "secrets". Je suis allée dans des endroits que je n\'aurais jamais trouvés seule et qui ont rendu mon voyage vraiment spécial. Merci, Bia !',
    finalCtaTitle: 'Prêt pour votre meilleur voyage à Paris ?',
    finalCtaSubtitle: 'Laissez la complexité de la planification derrière vous. Avec le GPS Paris, votre seule mission est de tomber amoureux de la ville.',
    finalCtaButton: 'OUI, JE VEUX LE GUIDE COMPLET !',
    finalCtaSubtext: 'Accès à vie pour un paiement unique.',
    faqTitle: 'Questions Fréquentes',
    faq1q: 'Comment vais-je recevoir le guide ?',
    faq1a: "Dès que le paiement est confirmé, vous recevrez un e-mail avec un lien pour télécharger votre guide au format PDF. L'accès est immédiat !",
    faq2q: 'Le guide est-il adapté aux primo-voyageurs ?',
    faq2a: "Absolument ! Il est parfait aussi bien pour votre premier voyage, avec des itinéraires couvrant les points essentiels, que pour les voyageurs expérimentés qui souhaitent redécouvrir la ville sous un nouvel angle.",
    faq3q: 'Puis-je utiliser le guide sur mon téléphone ?',
    faq3a: "Oui ! Le guide est un fichier PDF, compatible avec n'importe quel smartphone, tablette ou ordinateur. Vous pouvez l'enregistrer sur votre appareil et y accéder à tout moment, même sans internet.",
    faq4q: "Pendant combien de temps aurai-je accès au guide ?",
    faq4a: "Le guide est à vous pour toujours ! Après le téléchargement, vous pouvez le conserver et le consulter autant de fois que vous le souhaitez pour ce voyage et les suivants.",
    faq5q: "L'achat est-il sécurisé ?",
    faq5a: 'Oui, 100% sécurisé. Le paiement est traité par Kiwify, l\'une des plateformes de produits numériques les plus grandes et les plus sûres du Brésil.',
    footerBrand: 'Be Parisiense',
    footerCopyright: '© Beatriz Scholten. Tous droits réservés.<br>Design by <a href="https://ativ.ai" target="_blank" rel="noopener noreferrer" class="underline hover:text-beige-900">Ativ.ai</a>',
    cookieBannerText: 'Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site.',
    cookieBannerButton: 'Accepter'
  }
};

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="${images.logo}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>GPS Paris: Guia de Viagem e Roteiros | Be Parisiense</title>
    <meta name="description" content="Descubra Paris como um local com o guia GPS Paris da Beatriz Scholten. Roteiros otimizados (3, 5 e 7 dias), dicas secretas de restaurantes e lugares únicos. Planeje sua viagem dos sonhos agora!" />
    <meta name="keywords" content="Be Parisiense, Beatriz Scholten, guia de Paris, roteiro Paris, dicas de Paris, viagem para Paris, turismo em Paris, o que fazer em Paris, roteiro 3 dias Paris, roteiro 5 dias Paris, roteiro 7 dias Paris" />
    <link rel="canonical" href="https://www.beparisiense.com/" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.beparisiense.com/" />
    <meta property="og:title" content="GPS Paris: Guia de Viagem e Roteiros | Be Parisiense" />
    <meta property="og:description" content="Descubra Paris como um local com o guia GPS Paris da Beatriz Scholten. Roteiros otimizados, dicas secretas e tudo para sua viagem dos sonhos." />
    <meta property="og:site_name" content="Be Parisiense" />
    <meta property="og:image" content="${images.og}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.beparisiense.com/" />
    <meta property="twitter:title" content="GPS Paris: Guia de Viagem e Roteiros | Be Parisiense" />
    <meta property="twitter:description" content="Descubra Paris como um local com o guia GPS Paris da Beatriz Scholten. Roteiros otimizados, dicas secretas e tudo para sua viagem dos sonhos." />
    <meta property="twitter:image" content="${images.og}" />

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "GPS Paris: Guia para Sentir Paris",
      "image": "${images.og}",
      "description": "O guia completo com roteiros de 3, 5 e 7 dias, dicas secretas e a essência parisiense que só quem vive na cidade conhece.",
      "brand": {
        "@type": "Brand",
        "name": "Be Parisiense"
      },
      "author": {
        "@type": "Person",
        "name": "Beatriz Scholten"
      },
      "review": [
        {
          "@type": "Review",
          "author": {"@type": "Person", "name": "Juliana R."},
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Este guia foi um divisor de águas na minha viagem! As dicas de restaurantes são perfeitas e os roteiros me fizeram aproveitar muito mais cada dia. Indispensável!"
        },
        {
          "@type": "Review",
          "author": {"@type": "Person", "name": "Marcos P."},
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Comprei o guia sem muita expectativa e me surpreendi. Muito completo e fácil de usar no celular. As dicas de transporte me salvaram várias vezes. Valeu cada centavo."
        },
        {
          "@type": "Review",
          "author": {"@type": "Person", "name": "Fernanda L."},
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "A melhor parte são as dicas 'secretas'. Fui em lugares que nunca encontraria sozinha e que fizeram minha viagem ser realmente especial. Obrigada, Bia!"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "3"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BRL",
        "price": "97.00",
        "availability": "https://schema.org/InStock",
        "url": "https://pay.kiwify.com.br/CHkuPxM"
      }
    }
    </script>

    <style>
${latinFontsCss}
${materialSymbolsCss}
${tailwindCss}
    </style>
  </head>
  <body class="bg-beige-50 min-h-screen text-beige-900">
    <!-- Header -->
    <header class="absolute top-0 left-0 right-0 z-10 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <a href="#" class="flex items-center gap-3">
            <img src="${images.logo}" data-t-alt="logoAlt" alt="Logo Be Parisiense" class="h-14 w-auto" />
            <span class="font-display text-2xl font-bold text-beige-800" data-t="headerTitle">Be Parisiense</span>
          </a>
          <div class="flex items-center gap-2" id="lang-switcher">
            <button onclick="setLanguage('pt')" id="btn-pt" class="px-3 py-1 text-sm font-bold rounded-md transition-colors bg-beige-800 text-white" aria-label="Switch to PT">PT</button>
            <button onclick="setLanguage('en')" id="btn-en" class="px-3 py-1 text-sm font-bold rounded-md transition-colors bg-transparent text-beige-700 hover:bg-beige-200" aria-label="Switch to EN">EN</button>
            <button onclick="setLanguage('fr')" id="btn-fr" class="px-3 py-1 text-sm font-bold rounded-md transition-colors bg-transparent text-beige-700 hover:bg-beige-200" aria-label="Switch to FR">FR</button>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <section class="relative flex flex-col justify-between min-h-screen text-center overflow-hidden bg-beige-100" role="img" data-t-aria="heroImageAlt" aria-label="Vista panorâmica de Paris com a Torre Eiffel ao fundo ao pôr do sol">
        <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div class="w-full h-full bg-cover bg-[center_25%] animate-hero-bg" style="background-image: url('${images.hero}')"></div>
          <div class="absolute inset-0 bg-beige-100/20"></div>
        </div>

        <div class="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28">
          <h1 class="font-noto text-4xl sm:text-5xl md:text-6xl font-bold text-beige-900 [text-shadow:0_1px_3px_rgba(74,55,40,0.6)]" id="hero-title">
            GPS Paris<br />Guia para Sentir Paris
          </h1>
          <p class="font-noto mt-6 text-lg md:text-xl text-beige-800 max-w-2xl mx-auto font-medium" data-t="heroSubtitle">
            O guia completo com roteiros de 3, 5 e 7 dias, dicas secretas e a essência parisiense que só quem vive na cidade conhece.
          </p>
        </div>
        
        <div class="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
          <a href="https://pay.kiwify.com.br/CHkuPxM" target="_blank" rel="noopener noreferrer" class="inline-block bg-brand-red text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-red-800/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl" data-t="ctaButton">
            QUERO MEU GUIA AGORA
          </a>
          <p class="font-noto text-sm text-white mt-3 font-medium [text-shadow:0_1px_3px_rgba(74,55,40,0.6)]" data-t="ctaSubtext">
            Compra segura e acesso imediato.
          </p>
        </div>
      </section>

      <!-- Problem -->
      <section class="py-16 sm:py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-2xl font-bold text-beige-800" data-t="problemTitle">
            Cansado de roteiros genéricos que só te levam aos mesmos lugares?
          </h2>
          <p class="mt-4 text-lg text-beige-700" data-t="problemSubtitle">
            Sua viagem a Paris é um sonho, e você não quer desperdiçar nenhum momento em filas, restaurantes ruins ou "pegadinhas para turistas".
          </p>
          <div class="mt-10 grid sm:grid-cols-2 gap-8 text-left">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-2xl flex-shrink-0 text-brand-red mt-1">check_circle</span>
              <p class="text-beige-800" data-t="problemPoint1">Medo de planejar tudo errado e perder tempo?</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-2xl flex-shrink-0 text-brand-red mt-1">check_circle</span>
              <p class="text-beige-800" data-t="problemPoint2">Quer descobrir cafés charmosos e lugares secretos?</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-2xl flex-shrink-0 text-brand-red mt-1">check_circle</span>
              <p class="text-beige-800" data-t="problemPoint3">Dificuldade em organizar um roteiro que faça sentido?</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-2xl flex-shrink-0 text-brand-red mt-1">check_circle</span>
              <p class="text-beige-800" data-t="problemPoint4">Sonha em viver uma experiência autêntica e inesquecível?</p>
            </div>
          </div>
          <p class="mt-10 font-semibold text-lg text-beige-900" data-t="problemConclusion">
            Se você disse 'sim' para alguma dessas perguntas, o GPS Paris foi feito para você.
          </p>
        </div>
      </section>

      <!-- Solution -->
      <section class="py-16 sm:py-24 bg-beige-50">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="text-center md:text-left">
              <h2 class="font-display text-3xl sm:text-4xl font-bold text-beige-900" data-t="solutionTitle">
                Apresentando o GPS Paris: Seu Passaporte para a Paris dos Seus Sonhos.
              </h2>
              <p class="mt-6 text-lg text-beige-800" data-t="solutionText">
                Este não é apenas um guia. É um convite para viver Paris com profundidade, calma e encanto. Criado por Beatriz Scholten (@beparisiense), uma brasileira que chama Paris de casa, este guia reúne anos de descobertas e paixão pela cidade luz em um material completo, prático e 100% digital.
              </p>
            </div>
            <div>
              <img src="${images.map}" data-t-alt="solutionMapAlt" alt="Mapa estilizado de Paris destacando pontos turísticos" class="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="py-16 sm:py-24 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-beige-900" data-t="featuresTitle">
              Tudo o que você precisa para uma viagem perfeita
            </h2>
            <p class="mt-4 text-lg text-beige-700 max-w-3xl mx-auto" data-t="featuresSubtitle">
              Deixamos tudo pronto para que sua única preocupação seja criar memórias inesquecíveis.
            </p>
          </div>
          <div class="mt-12 grid md:grid-cols-3 gap-8">
            <div class="text-center p-6 bg-beige-50 rounded-lg shadow-sm">
              <span class="material-symbols-outlined text-4xl text-brand-red">map</span>
              <h3 class="mt-4 text-xl font-bold text-beige-900" data-t="feature1Title">Roteiros Prontos (3, 5 e 7 dias)</h3>
              <p class="mt-2 text-beige-800" data-t="feature1Desc">Otimize seu tempo e aproveite cada segundo, sem o estresse de planejar o que fazer a cada dia.</p>
            </div>
            <div class="text-center p-6 bg-beige-50 rounded-lg shadow-sm">
              <span class="material-symbols-outlined text-4xl text-brand-red">restaurant</span>
              <h3 class="mt-4 text-xl font-bold text-beige-900" data-t="feature2Title">Dicas de Restaurantes e Cafés</h3>
              <p class="mt-2 text-beige-800" data-t="feature2Desc">Saboreie a autêntica culinária parisiense e fuja dos restaurantes caros e sem alma.</p>
            </div>
            <div class="text-center p-6 bg-beige-50 rounded-lg shadow-sm">
              <span class="material-symbols-outlined text-4xl text-brand-red">key</span>
              <h3 class="mt-4 text-xl font-bold text-beige-900" data-t="feature3Title">Segredos Locais</h3>
              <p class="mt-2 text-beige-800" data-t="feature3Desc">Descubra lugares que não estão nos guias tradicionais e crie memórias que só os locais conhecem.</p>
            </div>
            <div class="text-center p-6 bg-beige-50 rounded-lg shadow-sm">
              <span class="material-symbols-outlined text-4xl text-brand-red">directions_bus</span>
              <h3 class="mt-4 text-xl font-bold text-beige-900" data-t="feature4Title">Guia de Transporte Prático</h3>
              <p class="mt-2 text-beige-800" data-t="feature4Desc">Navegue por Paris como um expert, com confiança e economia, usando metrô, ônibus e RER.</p>
            </div>
            <div class="text-center p-6 bg-beige-50 rounded-lg shadow-sm">
              <span class="material-symbols-outlined text-4xl text-brand-red">hotel</span>
              <h3 class="mt-4 text-xl font-bold text-beige-900" data-t="feature5Title">Bônus de Hospedagem</h3>
              <p class="mt-2 text-beige-800" data-t="feature5Desc">Saiba quais são os melhores bairros para se hospedar de acordo com seu estilo de viajante.</p>
            </div>
            <div class="text-center p-6 bg-beige-50 rounded-lg shadow-sm">
              <span class="material-symbols-outlined text-4xl text-brand-red">photo_camera</span>
              <h3 class="mt-4 text-xl font-bold text-beige-900" data-t="feature6Title">Lugares Fotogênicos</h3>
              <p class="mt-2 text-beige-800" data-t="feature6Desc">Encontre os melhores ângulos e locais para tirar fotos incrível e eternizar sua viagem.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Author -->
      <section class="py-16 sm:py-24 bg-beige-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div class="md:col-span-1">
              <img src="${images.author}" data-t-alt="authorAlt" alt="Foto de Beatriz Scholten, criadora do Be Parisiense" class="rounded-full aspect-square object-cover shadow-2xl shadow-beige-800/40 mx-auto w-48 h-48 md:w-full md:h-auto" />
            </div>
            <div class="md:col-span-2 text-center md:text-left">
              <h2 class="font-display text-3xl font-bold text-beige-900" data-t="authorTitle">Feito com carinho, por quem vive Paris de verdade.</h2>
              <div class="mt-6 space-y-4 text-beige-800 text-lg">
                <p id="authorText1"></p>
                <p data-t="authorText2">Criei o GPS Paris para compartilhar com você o meu olhar, os meus achados e os segredos que aprendi. Quero que você sinta a Paris que eu sinto: autêntica, vibrante e inesquecível.</p>
              </div>
              <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="https://instagram.com/beparisiense" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-beige-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-beige-900 transition-colors shadow-md" data-t="authorInstaButton">Seguir no Instagram</a>
                <a href="https://www.tiktok.com/@beparisiense" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-beige-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-beige-900 transition-colors shadow-md" data-t="authorTiktokButton">Seguir no TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-16 sm:py-24 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-beige-900" data-t="testimonialsTitle">O que os viajantes estão dizendo</h2>
          </div>
          <div class="mt-12 grid md:grid-cols-3 gap-8">
            <div class="bg-beige-50 p-6 rounded-lg shadow-sm relative">
              <p class="text-beige-800" id="t1-text">"Este guia foi um divisor de águas na minha viagem! As dicas de restaurantes são perfeitas e os roteiros me fizeram aproveitar muito mais cada dia. Indispensável!"</p>
              <p class="mt-4 font-bold text-beige-900" id="t1-name">- Juliana R.</p>
              <div class="absolute -top-3 -left-3 text-6xl text-beige-200/50 opacity-50 font-display">“</div>
            </div>
            <div class="bg-beige-50 p-6 rounded-lg shadow-sm relative">
              <p class="text-beige-800" id="t2-text">"Comprei o guia sem muita expectativa e me surpreendi. Muito completo e fácil de usar no celular. As dicas de transporte me salvaram várias vezes. Valeu cada centavo."</p>
              <p class="mt-4 font-bold text-beige-900" id="t2-name">- Marcos P.</p>
              <div class="absolute -top-3 -left-3 text-6xl text-beige-200/50 opacity-50 font-display">“</div>
            </div>
            <div class="bg-beige-50 p-6 rounded-lg shadow-sm relative">
              <p class="text-beige-800" id="t3-text">"A melhor parte são as dicas 'secretas'. Fui em lugares que nunca encontraria sozinha e que fizeram minha viagem ser realmente especial. Obrigada, Bia!"</p>
              <p class="mt-4 font-bold text-beige-900" id="t3-name">- Fernanda L.</p>
              <div class="absolute -top-3 -left-3 text-6xl text-beige-200/50 opacity-50 font-display">“</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="py-16 sm:py-24 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="font-display text-4xl sm:text-5xl font-bold text-beige-900" data-t="finalCtaTitle">Está pronto para a sua melhor viagem a Paris?</h2>
          <p class="mt-6 text-lg md:text-xl text-beige-800 max-w-2xl mx-auto" data-t="finalCtaSubtitle">Deixe a complexidade do planejamento para trás. Com o GPS Paris, sua única tarefa é se apaixonar pela cidade.</p>
          <div class="mt-10">
            <a href="https://pay.kiwify.com.br/CHkuPxM" target="_blank" rel="noopener noreferrer" class="inline-block bg-brand-red text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-red-800/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl" data-t="finalCtaButton">
              SIM, QUERO O GUIA COMPLETO!
            </a>
            <p class="text-sm text-beige-700 mt-3" data-t="finalCtaSubtext">Acesso vitalício por um pagamento único.</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="py-16 sm:py-24 bg-beige-50">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-center text-beige-900" data-t="faqTitle">Perguntas Frequentes</h2>
          <div class="mt-10 space-y-4" id="faq-container">
            <div class="border border-beige-200 rounded-lg overflow-hidden">
              <button onclick="toggleFaq(0)" class="w-full flex justify-between items-center text-left p-5 bg-white hover:bg-beige-100/50 transition-colors" aria-expanded="false">
                <span class="font-semibold text-lg text-beige-900" id="faq-q-0"></span>
                <span class="material-symbols-outlined transition-transform transform rotate-0" id="faq-icon-0">expand_more</span>
              </button>
              <div id="faq-a-wrapper-0" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div class="p-5 pt-0 text-beige-800">
                  <p id="faq-a-0"></p>
                </div>
              </div>
            </div>

            <div class="border border-beige-200 rounded-lg overflow-hidden">
              <button onclick="toggleFaq(1)" class="w-full flex justify-between items-center text-left p-5 bg-white hover:bg-beige-100/50 transition-colors" aria-expanded="false">
                <span class="font-semibold text-lg text-beige-900" id="faq-q-1"></span>
                <span class="material-symbols-outlined transition-transform transform rotate-0" id="faq-icon-1">expand_more</span>
              </button>
              <div id="faq-a-wrapper-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div class="p-5 pt-0 text-beige-800">
                  <p id="faq-a-1"></p>
                </div>
              </div>
            </div>

            <div class="border border-beige-200 rounded-lg overflow-hidden">
              <button onclick="toggleFaq(2)" class="w-full flex justify-between items-center text-left p-5 bg-white hover:bg-beige-100/50 transition-colors" aria-expanded="false">
                <span class="font-semibold text-lg text-beige-900" id="faq-q-2"></span>
                <span class="material-symbols-outlined transition-transform transform rotate-0" id="faq-icon-2">expand_more</span>
              </button>
              <div id="faq-a-wrapper-2" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div class="p-5 pt-0 text-beige-800">
                  <p id="faq-a-2"></p>
                </div>
              </div>
            </div>

            <div class="border border-beige-200 rounded-lg overflow-hidden">
              <button onclick="toggleFaq(3)" class="w-full flex justify-between items-center text-left p-5 bg-white hover:bg-beige-100/50 transition-colors" aria-expanded="false">
                <span class="font-semibold text-lg text-beige-900" id="faq-q-3"></span>
                <span class="material-symbols-outlined transition-transform transform rotate-0" id="faq-icon-3">expand_more</span>
              </button>
              <div id="faq-a-wrapper-3" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div class="p-5 pt-0 text-beige-800">
                  <p id="faq-a-3"></p>
                </div>
              </div>
            </div>

            <div class="border border-beige-200 rounded-lg overflow-hidden">
              <button onclick="toggleFaq(4)" class="w-full flex justify-between items-center text-left p-5 bg-white hover:bg-beige-100/50 transition-colors" aria-expanded="false">
                <span class="font-semibold text-lg text-beige-900" id="faq-q-4"></span>
                <span class="material-symbols-outlined transition-transform transform rotate-0" id="faq-icon-4">expand_more</span>
              </button>
              <div id="faq-a-wrapper-4" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div class="p-5 pt-0 text-beige-800">
                  <p id="faq-a-4"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="text-center py-10 bg-beige-100">
      <a href="https://www.instagram.com/beparisiense" target="_blank" rel="noopener noreferrer" class="inline-block transition-opacity hover:opacity-80">
        <img src="${images.logo}" data-t-alt="logoAlt" alt="Logo Be Parisiense" class="h-16 mx-auto" />
      </a>
      <p class="text-sm font-display text-beige-800 mt-2" data-t="footerBrand">Be Parisiense</p>
      <p class="text-xs text-beige-700/70 mt-4" id="footerCopyright"></p>
    </footer>

    <!-- Cookie Banner -->
    <div id="cookie-banner" class="hidden fixed bottom-0 left-0 right-0 bg-beige-800 text-beige-100 p-4 z-50 shadow-lg animate-slide-up">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <p class="text-sm text-center sm:text-left" data-t="cookieBannerText">Usamos cookies para garantir que você tenha a melhor experiência em nosso site.</p>
        <button onclick="acceptCookies()" class="bg-brand-red text-white font-bold py-2 px-6 rounded-lg hover:bg-red-800/90 transition-colors flex-shrink-0" data-t="cookieBannerButton">
          Aceitar
        </button>
      </div>
    </div>

    <!-- Application Script -->
    <script>
      const translations = ${JSON.stringify(translations, null, 2)};
      let currentLang = 'pt';
      let openFaqIndex = null;

      function t(key) {
        return (translations[currentLang] && translations[currentLang][key]) || translations['pt'][key] || key;
      }

      function updateLanguageUI() {
        // Buttons
        ['pt', 'en', 'fr'].forEach(lang => {
          const btn = document.getElementById('btn-' + lang);
          if (btn) {
            if (lang === currentLang) {
              btn.className = 'px-3 py-1 text-sm font-bold rounded-md transition-colors bg-beige-800 text-white';
            } else {
              btn.className = 'px-3 py-1 text-sm font-bold rounded-md transition-colors bg-transparent text-beige-700 hover:bg-beige-200';
            }
          }
        });

        // Simple text content elements
        document.querySelectorAll('[data-t]').forEach(el => {
          const key = el.getAttribute('data-t');
          if (key && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
          }
        });

        // Image Alts
        document.querySelectorAll('[data-t-alt]').forEach(el => {
          const key = el.getAttribute('data-t-alt');
          if (key && translations[currentLang][key]) {
            el.setAttribute('alt', translations[currentLang][key]);
          }
        });

        // Aria Labels
        document.querySelectorAll('[data-t-aria]').forEach(el => {
          const key = el.getAttribute('data-t-aria');
          if (key && translations[currentLang][key]) {
            el.setAttribute('aria-label', translations[currentLang][key]);
          }
        });

        // Hero Title (split with |)
        const heroTitleStr = t('heroTitle');
        const heroParts = heroTitleStr.split('|');
        const heroTitleEl = document.getElementById('hero-title');
        if (heroTitleEl) {
          heroTitleEl.innerHTML = heroParts.join('<br />');
        }

        // Author Text 1 (HTML inside)
        const author1El = document.getElementById('authorText1');
        if (author1El) {
          author1El.innerHTML = t('authorText1');
        }

        // Testimonials
        for (let i = 1; i <= 3; i++) {
          const nameEl = document.getElementById('t' + i + '-name');
          const textEl = document.getElementById('t' + i + '-text');
          if (nameEl) nameEl.textContent = '- ' + t('testimonial' + i + 'Name');
          if (textEl) textEl.textContent = '"' + t('testimonial' + i + 'Text') + '"';
        }

        // FAQ
        for (let i = 0; i < 5; i++) {
          const idx = i + 1;
          const qEl = document.getElementById('faq-q-' + i);
          const aEl = document.getElementById('faq-a-' + i);
          if (qEl) qEl.textContent = t('faq' + idx + 'q');
          if (aEl) aEl.textContent = t('faq' + idx + 'a');
        }

        // Footer Copyright
        const footerEl = document.getElementById('footerCopyright');
        if (footerEl) {
          footerEl.innerHTML = t('footerCopyright');
        }
      }

      function setLanguage(lang) {
        if (translations[lang]) {
          currentLang = lang;
          updateLanguageUI();
        }
      }

      function toggleFaq(index) {
        const wrapper = document.getElementById('faq-a-wrapper-' + index);
        const icon = document.getElementById('faq-icon-' + index);
        const btn = wrapper.previousElementSibling;

        if (openFaqIndex === index) {
          wrapper.style.maxHeight = '0px';
          icon.classList.remove('rotate-180');
          icon.classList.add('rotate-0');
          btn.setAttribute('aria-expanded', 'false');
          openFaqIndex = null;
        } else {
          if (openFaqIndex !== null) {
            const prevWrapper = document.getElementById('faq-a-wrapper-' + openFaqIndex);
            const prevIcon = document.getElementById('faq-icon-' + openFaqIndex);
            if (prevWrapper) prevWrapper.style.maxHeight = '0px';
            if (prevIcon) {
              prevIcon.classList.remove('rotate-180');
              prevIcon.classList.add('rotate-0');
            }
          }
          wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
          icon.classList.remove('rotate-0');
          icon.classList.add('rotate-180');
          btn.setAttribute('aria-expanded', 'true');
          openFaqIndex = index;
        }
      }

      function acceptCookies() {
        localStorage.setItem('cookie_consent', 'true');
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.add('hidden');
      }

      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
        updateLanguageUI();
        setTimeout(() => {
          if (!localStorage.getItem('cookie_consent')) {
            const banner = document.getElementById('cookie-banner');
            if (banner) banner.classList.remove('hidden');
          }
        }, 1000);
      });
    </script>
  </body>
</html>
`;

fs.writeFileSync('be.html', htmlContent);
console.log('Successfully written be.html! Total size:', (fs.statSync('be.html').size / 1024 / 1024).toFixed(2), 'MB');
