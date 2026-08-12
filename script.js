const CONFIG = { contactEmail: "hello@dorime.studio", telegramUrl: "#", socialsUrl: "#" };

const translations = {
  en: {
    "nav.about":"About us","nav.services":"Services","nav.portfolio":"Portfolio","nav.process":"Process","nav.contact":"Contact",
    "cta.discuss":"Discuss a project","cta.work":"Watch our work",
    "hero.eyebrow":"Professional voiceover studio","hero.tagline":"Where every voice becomes a story.","hero.text":"Professional voiceover, recording and audio production for ads, video, games, brands and media.",
    "sections.about":"About the studio","sections.services":"Services","sections.portfolio":"Portfolio","sections.process":"Process","sections.why":"Why DorimЭ","sections.cta":"Your project","sections.contact":"Contact",
    "about.title":"We create sound<br>that <em>stays</em><br>with you.","about.lead":"DorimЭ is a professional voiceover studio bringing together voice talent, direction, sound engineering and modern post-production.","about.text":"We turn a script into sound that works for your goal — from a short video to a complete audio production.","about.stat1":"Professional recording","about.stat2":"Experienced voice talent","about.stat3":"Post-production","about.stat4":"Personal approach","about.quality":"studio quality",
    "services.title":"A complete sound<br><em>production partner.</em>",
    "services.voiceover.title":"Voiceover","services.voiceover.text":"Ads, videos, presentations, YouTube and social media.","services.talent.title":"Voice talent","services.talent.text":"The right voice for your task, brand and project mood.","services.audio.title":"Audio production","services.audio.text":"Recording, editing, processing, mixing and mastering.","services.video.title":"Video voiceover","services.video.text":"A complete sound workflow for video and advertising materials.","services.games.title":"Games & multimedia","services.games.text":"Characters, dialogue, game scenes and interactive content.","services.podcasts.title":"Podcasts","services.podcasts.text":"Recording, editing, processing and delivery of finished episodes.",
    "portfolio.title":"Listen to<br><em>how it sounds.</em>","portfolio.all":"All","portfolio.dub":"Dubbing","portfolio.voice":"Voiceover","portfolio.ad":"Advertising","portfolio.placeholder":"Add MP4 / MOV","portfolio.demo":"Demo reel",
    "process.title":"Five steps to the<br><em>perfect take.</em>","process.1.title":"Meet the brief","process.1.text":"We understand the project, audience, tone and goal.","process.2.title":"Cast the voice","process.2.text":"We find the timbre and delivery that fit the story.","process.3.title":"Record","process.3.text":"Clean studio recording with direction and attention to detail.","process.4.title":"Edit & mix","process.4.text":"Editing, processing, mixing and final quality control.","process.5.title":"Deliver","process.5.text":"Final files in the format you need — on time.",
    "why.title":"Sound you<br>can <em>trust.</em>","why.1.title":"Professional sound","why.1.text":"Clean recording and thoughtful post-production.","why.2.title":"A voice for the task","why.2.text":"We match tone, delivery and character to your project.","why.3.title":"Full cycle","why.3.text":"From the first brief to the finished media file.","why.4.title":"On time","why.4.text":"Structured work and clear communication throughout.",
    "cta.title":"Have a project?<br>Let’s give it<br><em>a voice.</em>","cta.text":"Tell us what you need voiced and we’ll suggest the right way to make it sound.",
    "contact.title":"Talk to <em>DorimЭ</em>","contact.text":"Write to us or fill out the form. We’ll reply within one business day with a collaboration plan.",
    "form.name":"Name","form.namePlaceholder":"How should we address you?","form.company":"Company","form.companyPlaceholder":"Company or project name","form.contact":"Email / Telegram","form.contactPlaceholder":"Your preferred way to reach you","form.message":"Tell us about the project","form.messagePlaceholder":"What needs a voice, deadlines, references","form.submit":"Send request","form.note":"The form opens your email client with a prefilled message.","footer.tag":"Voiceover studio","footer.copy":"© 2026 DorimЭ. All rights reserved."
  },
  ru: {
    "nav.about":"О студии","nav.services":"Услуги","nav.portfolio":"Портфолио","nav.process":"Процесс","nav.contact":"Контакты",
    "cta.discuss":"Обсудить проект","cta.work":"Посмотреть работы",
    "hero.eyebrow":"Профессиональная студия озвучивания","hero.tagline":"Где каждый голос становится историей.","hero.text":"Профессиональная озвучка, запись и аудиопродакшен для рекламы, видео, игр, брендов и медиа.",
    "sections.about":"О студии","sections.services":"Услуги","sections.portfolio":"Портфолио","sections.process":"Процесс","sections.why":"Почему DorimЭ","sections.cta":"Ваш проект","sections.contact":"Контакты",
    "about.title":"Мы создаём звук,<br>который <em>остаётся</em><br>с вами.","about.lead":"DorimЭ — профессиональная студия озвучивания, где голос, режиссура, звукорежиссура и современный постпродакшен работают как единое целое.","about.text":"Мы превращаем сценарий в звук, который работает на вашу задачу — от короткого ролика до полноценного аудиопродакшена.","about.stat1":"Профессиональная запись","about.stat2":"Опытные дикторы","about.stat3":"Пост-продакшен","about.stat4":"Индивидуальный подход","about.quality":"качество студии",
    "services.title":"Полный цикл<br><em>работы со звуком.</em>",
    "services.voiceover.title":"Озвучивание","services.voiceover.text":"Реклама, видео, презентации, YouTube и социальные сети.","services.talent.title":"Дикторы","services.talent.text":"Подбираем голос под задачу, бренд и настроение проекта.","services.audio.title":"Аудиопродакшен","services.audio.text":"Запись, монтаж, обработка, сведение и мастеринг.","services.video.title":"Озвучка видео","services.video.text":"Полный цикл работы со звуком для видео и рекламы.","services.games.title":"Игры и мультимедиа","services.games.text":"Персонажи, диалоги, игровые сцены и интерактивный контент.","services.podcasts.title":"Подкасты","services.podcasts.text":"Запись, монтаж, обработка и подготовка готовых выпусков.",
    "portfolio.title":"Послушайте,<br><em>как это звучит.</em>","portfolio.all":"Все","portfolio.dub":"Дубляж","portfolio.voice":"Закадр","portfolio.ad":"Реклама","portfolio.placeholder":"Добавьте MP4 / MOV","portfolio.demo":"Демо-ролик",
    "process.title":"Пять шагов до<br><em>идеального дубля.</em>","process.1.title":"Знакомимся с задачей","process.1.text":"Разбираемся в проекте, аудитории, характере и цели.","process.2.title":"Подбираем голос","process.2.text":"Находим тембр и подачу, которые точно работают на историю.","process.3.title":"Записываем","process.3.text":"Чистая студийная запись под контролем режиссёра.","process.4.title":"Редактируем и сводим","process.4.text":"Монтаж, обработка, сведение и финальный контроль.","process.5.title":"Передаём результат","process.5.text":"Готовые файлы в нужном формате — вовремя.",
    "why.title":"Звук, которому<br>можно <em>доверять.</em>","why.1.title":"Профессиональный звук","why.1.text":"Чистая запись и качественный постпродакшен.","why.2.title":"Голос под задачу","why.2.text":"Подбираем тембр, подачу и характер под ваш проект.","why.3.title":"Полный цикл","why.3.text":"От первого запроса до готового медиаконтента.","why.4.title":"Соблюдаем сроки","why.4.text":"Работаем структурированно и держим клиента в курсе.",
    "cta.title":"Есть проект?<br>Давайте дадим ему<br><em>голос.</em>","cta.text":"Расскажите, что нужно озвучить, — мы предложим оптимальный формат работы.",
    "contact.title":"Связаться с <em>DorimЭ</em>","contact.text":"Напишите нам или заполните форму. Мы ответим в течение одного рабочего дня и предложим следующий шаг.",
    "form.name":"Имя","form.namePlaceholder":"Как к вам обращаться?","form.company":"Компания","form.companyPlaceholder":"Название компании или проекта","form.contact":"Email / Telegram","form.contactPlaceholder":"Как с вами связаться?","form.message":"Расскажите о проекте","form.messagePlaceholder":"Что нужно озвучить, сроки, референсы","form.submit":"Отправить заявку","footer.tag":"Студия озвучивания","footer.copy":"© 2026 DorimЭ. Все права защищены."
  }
};

let currentLang = "en";
function applyLanguage(lang){
  currentLang = translations[lang] ? lang : "en";
  const dict = translations[currentLang];
  document.documentElement.lang = currentLang;
  document.title = currentLang === "en" ? "DorimЭ — Voiceover Studio" : "DorimЭ — Студия озвучивания";
  document.querySelectorAll("[data-i18n]").forEach(el => { if(dict[el.dataset.i18n] !== undefined) el.textContent = dict[el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { if(dict[el.dataset.i18nHtml] !== undefined) el.innerHTML = dict[el.dataset.i18nHtml]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { if(dict[el.dataset.i18nPlaceholder] !== undefined) el.placeholder = dict[el.dataset.i18nPlaceholder]; });
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
  localStorage.setItem("dorime-language", currentLang);
}

document.querySelectorAll(".lang-btn").forEach(btn => btn.addEventListener("click", () => applyLanguage(btn.dataset.lang)));

const savedLang = localStorage.getItem("dorime-language");
applyLanguage(savedLang === "ru" ? "ru" : "en");

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => { if(glow){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";} });

const header=document.querySelector(".site-header"), menuToggle=document.querySelector(".menu-toggle");
menuToggle?.addEventListener("click",()=>{const open=header.classList.toggle("mobile-open");menuToggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{header.classList.remove("mobile-open");menuToggle?.setAttribute("aria-expanded","false");}));

autoReveal();
function autoReveal(){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.1});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}

function makeWave(selector,count=105){const el=document.querySelector(selector);if(!el)return;el.innerHTML="";for(let i=0;i<count;i++){const bar=document.createElement("i");const center=Math.abs(i-count/2)/(count/2);const h=Math.max(8,82*(1-center*.78)*(.3+Math.random()*.95));bar.style.height=`${h}px`;bar.style.animationDelay=`${(Math.random()*-1.5).toFixed(2)}s`;el.appendChild(bar);}}
makeWave(".waveform-hero");
const ctaWave=document.querySelector(".cta-wave");if(ctaWave){for(let i=0;i<70;i++){const bar=document.createElement("i");bar.style.height=`${18+Math.random()*85}%`;ctaWave.appendChild(bar);}}

const tabs=document.querySelectorAll(".tab"),cards=document.querySelectorAll(".video-card");
tabs.forEach(tab=>tab.addEventListener("click",()=>{tabs.forEach(t=>t.classList.remove("active"));tab.classList.add("active");const filter=tab.dataset.filter;cards.forEach(card=>card.classList.toggle("is-hidden",filter!=="all"&&card.dataset.category!==filter));}));

const form=document.getElementById("contact-form");
form?.addEventListener("submit",e=>{e.preventDefault();const data=new FormData(form);const subject=currentLang==="en"?`New project — DorimЭ — ${data.get("name")||""}`:`Новый проект — DorimЭ — ${data.get("name")||""}`;const body=currentLang==="en"?[`Name: ${data.get("name")||""}`,`Company: ${data.get("company")||""}`,`Email / Telegram: ${data.get("contact")||""}`,"","Project:",`${data.get("message")||""}`].join("\n"):[`Имя: ${data.get("name")||""}`,`Компания: ${data.get("company")||""}`,`Email / Telegram: ${data.get("contact")||""}`,"","Проект:",`${data.get("message")||""}`].join("\n");window.location.href=`mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});
