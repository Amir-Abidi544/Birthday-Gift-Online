window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play().catch(e => console.log("Autoplay blocked:", e));

  // floating particles
  for(let i=0;i<50;i++){
    const p=document.createElement("div");
    p.className="particle";
    p.style.left=Math.random()*window.innerWidth+"px";
    p.style.animationDuration=(5+Math.random()*5)+"s";
    p.style.animationDelay=Math.random()*3+"s";
    document.body.appendChild(p);
  }

  // balloons
  for(let i=0;i<10;i++){
    const b=document.createElement("div");
    b.className="balloon";
    b.style.left=Math.random()*window.innerWidth+"px";
    b.style.animationDuration=(10+Math.random()*10)+"s";
    b.style.animationDelay=Math.random()*5+"s";
    document.body.appendChild(b);
  }
});

// candles with staggered animation
const candleContainer = document.querySelector(".candles");
for(let i=0;i<25;i++){
  const c=document.createElement("div"); 
  c.className="candle";
  c.style.animationDelay = (i * 0.05) + "s";
  candleContainer.appendChild(c);
}

// sparkles page1
for(let i=0;i<20;i++){
  const s=document.createElement("div");
  s.className="sparkle";
  s.style.top=Math.random()*100+"px"; 
  s.style.left=Math.random()*340+"px";
  s.style.animationDuration=(0.5+Math.random())+"s";
  s.style.animationDelay=Math.random()+"s";
  document.querySelector(".cake-top").appendChild(s);
}

function blowCandles(){
  const music = document.getElementById("bgMusic");
  music.play().catch(()=>{});

  // Blow out candles with staggered effect
  const candles = document.querySelectorAll(".candle");
  candles.forEach((c, i) => {
    setTimeout(() => {
      c.classList.add("off");
    }, i * 40);
  });
  
  launchConfetti();

  // Cake → Star (after 1.6 seconds)
  setTimeout(()=>{
    page1.classList.add("hidden");
    pageStar.classList.remove("hidden");
  }, 1600);

  // Star → Letter (after 8 seconds on star page = 9.6 seconds total)
  setTimeout(()=>{
    pageStar.classList.add("hidden");
    page2.classList.remove("hidden");
    typeText();
  }, 19200);
}

function launchConfetti(){
  for(let i=0;i<100;i++){
    const conf=document.createElement("div");
    conf.className="confetti";
    conf.style.left=Math.random()*window.innerWidth+"px";
    conf.style.background=`hsl(${Math.random()*360},100%,${50+Math.random()*20}%)`;
    conf.style.animationDuration=(Math.random()*3+2)+"s";
    conf.style.animationDelay=(Math.random()*0.5)+"s";
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),10000);
  }
}

const text="🎂 Today is not just your birthday, it's a reminder of how special you are to me. Even though miles separate us, every thought of you brings me closer, turning the distance into gentle moments where I feel like you are right here with me. May your life be full of light, love, and endless joy. I'm lucky to have you with me, and no distance can ever change the love we share. ❤️✨";
let index=0;
function typeText(){
  const el=document.getElementById("declaration");
  const interval=setInterval(()=>{
    el.textContent+=text[index]; 
    index++;
    if(index>=text.length) clearInterval(interval);
  },50);
}