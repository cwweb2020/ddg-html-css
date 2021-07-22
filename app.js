// change picture in Daily peel

document.addEventListener( 'DOMContentLoaded', function () {
    var bigImg = document.getElementById('big-img')
	var imgs = document.querySelectorAll('.alphathumb-img')
   
    for (var i = 0; i < imgs.length; i++) {
        var item = imgs[i];
        item.addEventListener('click', function (e) {
           
            source = e.target.src
            bigImg.src = source
         
        })
        
    }

});

// frequent asked questions

document.addEventListener('DOMContentLoaded', function() {
    var accordion = document.querySelectorAll('.content-faq')

    for (var i = 0; i < accordion.length; i++) {
        var item = accordion[i];

        item.addEventListener('click', function(e) {
            this.classList.toggle('activeFaq')
        })

    }
});

// progressbar collapsable

document.addEventListener( 'DOMContentLoaded', function () {
    var titlebtn = document.querySelectorAll('.titlebtn')
    var progressbar = document.querySelector('.progressbar')
    
  
    for (var i = 0; i < titlebtn.length; i++) {
        let item = titlebtn[i];
  
        item.addEventListener('click',function (e) {
           
            p= e.target.nextElementSibling
           
            p.classList.toggle('activeprogress')
            item.classList.toggle('active')
            // progressbar.classList.toggle('active')

            if (item.classList.contains('h1')) {
                
                progressbar.classList.toggle('active1')

            }else if (item.classList.contains('h2')) {
                progressbar.classList.toggle('active2')

            }else if (item.classList.contains('h3')) {
                progressbar.classList.toggle('active3')

            }else if (item.classList.contains('h44')) {
                progressbar.classList.toggle('active4')
            }
            
        })
        
    }
  });

// Navigation tab JS

var ourpromise= `
<section class="ourpromise-total">

<div class="ourpromise-wrapper">
   <div class="op-box1">
       <h5>About Dr. Dennis Gross</h5>
       <h5 class="drdennis">Dr. Dennis Gross Skincare is a dermatologist-founded brand. Dr. Gross an unwavering advocate for his patients, consumers, humanity, bound by the Hippocratic oath to do no harm. His mission – and ours – is to improve your skin health, how it looks, but most importantly how it makes you feel. Our #1 priority is to ensure efficacy without ever compromising safety. We are cruelty-free, paraben-free, phthalate-free, sulfate-free, and vegan. With every product we take a research backed approach and formulate with only pharmaceutical-grade active ingredients to ensure superior results, without irritation. </h5>

   </div>
   <div class="op-box2">
                  <!-- pic space -->
                  <div class="ourpromise-container">
                   <div class="ourpromise-picwrapp">
                       <div class="ourpromisebg-ratio">
                           <img src="img/ddr.png" alt="" />
                       </div>
                   </div>
               </div>
          <!-- pic space -->
       

   </div>
</div>
</section>
`
var ingredients= `
<section class="ingredients-total">

<div class="ingredients-wrapper">
    <div class="_box1">
        <h5>Key Ingredients (Step 1)</h5>
        <article>
           <p class="alpha"><b>5 Alpha Beta® acids</b>  lift away dead skin cells, while toning and smoothing skin.<p>
            <p><b>Chamomile</b>  has anti-inflammatory properties that helps neutralize and soothe skin. </p>
            <h5 class="see">See all Step 1 ingredients</h5>

        </article>

    </div>
    <div class="_box2">
      
            <h5 class="key">Key Ingredients (Step 2)</h5>
            <article>
               <p class="alpha"><b>Retinol </b> helps smooth wrinkles and lines while increasing moisture & elasticity.<p> 
                   
                <p> Green Tea Extract </b> 
                   is a natural antioxidant that protects skin from free radicals and environmental toxins. </p>
                <h5>See all Step 2 ingredients</h5>

            </article>
    </div>
    <div class="box3">
          <!-- pic space -->
             <div class="ingredients-container">
                 <div class="ingredients-picwrapp">
                     <div class="ingredientsbg-ratio">
                         <img src="img/ingredients.png" alt="" />
                     </div>
                 </div>
             </div>
        <!-- pic space -->
    </div>
</div>

</section>

`
var results= `
<section class="tn-resultstab-total">

<div class="tab-resultstab-wrapper">
    <div class="tabresult-left">
        <h5 class="daily">In a daily-use consumer study, users agreed:</h5>
        <div class="porcentage">
            <h5>96% reported their skin looked more youthful</h5>
            <h5> 92% saw increased firmness and radiance</h5>
            <h5>90% said skin appeared brighter and more even</h5>
        </div>
        <h6>* 28 day results</h6>
        <h5 class="expert"><b>In an expert clinical graded trial</b> , pore perfecting & refining serum provides a significant improvement in the look of pores after just one use</h5>

        <!-- pic space -->
        <div class="resultstab-container">
            <div class="resultstab-picwrapp">
                <div class="resultstabbg-ratio">
                    <img src="img/results-graph.svg" alt="" />
                </div>
            </div>
        </div>
        <!-- pic space -->
    </div>

    <div class="tabresult-right">
         <!-- pic space -->
         <div class="resultstabr-container">
            <div class="resultstabr-picwrapp">
                <div class="resultstabbgr-ratio">
                    <img src="img/result-cleanface.png" alt="" />
                </div>
            </div>
        </div>
        <!-- pic space -->
        <a href="#">See more real results <img src="img/arrow-right.svg" alt="arrow-right"></a>
    </div>
</div>
</section>
`
var howitworks= `
<section class="hiw-total">

<div class="hiw-wrapper">
    <div class="hiw-left">
                    <!-- pic space -->
                    <div class="hiw-container">
                     <div class="hiw-picwrapp">
                         <div class="hiwbg-ratio">
                             <img src="img/hiw.png" alt="" />
                         </div>
                     </div>
                 </div>
            <!-- pic space -->

    </div>
    <div class="hiw-right">
     <h5>Step 1: Isolated AHA/BHA Acids</h5>
     <article>
        <p class="alpha">Anti-aging and anti-oxidants and nutrients get deeper into skin to repair damage, protect cells and restore healthy looking skin, while controlling acid activity.<p> 
            
     </article>
     <h5 class="hiw">Step 2: Anti-aging neutralizer</h5>
     <article>
        <p class="alpha">Anti-aging and anti-oxidants and nutrients get deeper into skin to repair damage, protect cells and restore healthy looking skin, while controlling acid activity.<p> 
     </article>
     <h5 class="hiw">Step 3: Anti-aging neutralizer</h5>
     <article>
        <p class="alpha">Anti-aging and anti-oxidants and nutrients get deeper into skin to repair damage, protect cells and restore healthy looking skin, while controlling acid activity.<p> 
     </article>

    </div>
</div>

</section>
`

var benefits= `
<div id="tabwrapper" class="tab-wrapper">
<div class="left-box">
    <div class="verticalbox-1">
        <div class="box-1">
            <span><img src="img/tab-icon1.png" alt=""></span>
            <h5>Immediate radiance</h5>
            <p>Dr. Dennis Gross' iconic renewing peel, an easy and safe for at-home use version of the peels he developed and uses for patients at his NYC practice - without requiring recovery time.</p>

        </div>
        <div class="box-1">
            <span class="tab-improve"><img src="img/tab-icon2.png" alt=""></span>
            <h5>Improved tone and texture</h5>
            <p>Step 1 is packed with rejuvenating powerful yet gentle exfoliating acids. Lorem ipsum dolor sit amet a little bit longer for visual balance.</p>

        </div>
    </div>
    <div class="verticalbox-2">
        <div class="box-1">
            <span><img src="img/tab-icon3.png" alt=""></span>
            <h5>Reduced lines and wrinkles</h5>
            <p>Step 2 controls the alpha hydroxy acid activity, delivers anti-aging actives that nourishes skin while keeping it balanced, smooth, and radiant - perfectly prepped for a more effective routine.</p>

        </div>
        <div class="box-1">
            <span class="tab-improve"><img src="img/tab-icon4.png" alt=""></span>
            <h5>Oil and pore control</h5>
            <p>96% reported their skin looked more youthful
                92% saw increased firmness and radiance
                90% said skin appeared brighter and more even</p>

        </div>
    </div>
</div>

<div class="right-box">
       <!-- pic space -->
       <div class="tab-container">
        <div class="tab-picwrapp">
           <div class="tabbg-ratio">
             <img src="img/righttab-pic.png" alt="">
         </div>
       </div>
    </div>
<!-- pic space -->
</div>
</div>
`
var featuredin= `
<section class="fourtabs-benefits">
<!-- <div class="tabnavigation-container">
    <div class="tab-four tab1 active-tab"><h3>Benefits</h3></div>
    <div class="tab-four"><h3>Ingredients</h3></div>
    <div class="tab-four"><h3>Our Promise</h3></div>
    <div class="tab-four"><h3>Featured In</h3></div>
</div> -->
<div class="fourtabs-wrapper">
    <div class="fourtabs-leftbox ft-left">
        <!-- pic space -->
        <div class="fourtabs-container">
            <div class="fourtabs-picwrapp">
                <div class="fourtabsbg-ratio">
                    <img src="img/fourtabs-left.png" alt="" />
                </div>
            </div>
        </div>
        <!-- pic space -->
        <h5 class="fourtab-undertitle"><b>Deeply Cleansing</b>  lorem ipsum dolor this is a caption for the graphic it could describe it and give more info lorem ipsum dolor sit amet.</h5>
    </div>
    <!-- right box -->
    <div class="fourtabs-leftbox ft-right">
        <!-- pic space -->
        <div class="fourtabs-container">
            <div class="fourtabs-picwrapp">
                <div class="fourtabsbg-ratio">
                    <img src="img/fourtabs-right.png" alt="" />
                </div>
            </div>
        </div>
        <!-- pic space -->
        <h5 class="fourtab-undertitle"><b>Exfoliating</b>  Lorem ipsum dolor this is a caption for the graphic it could describe it and give more info lorem ipsum dolor sit amet.</h5>
    </div>
</div>
</section>
`

document.addEventListener( 'DOMContentLoaded', function () {
    var tabs = document.getElementsByClassName('tab')
    var tabwrapper= document.getElementById('tabwrapper')
    
    // let progressbar = document.querySelector('.progressbar')
    for (var i = 0; i < tabs.length; i++) {
        var el = tabs[i];
        el.addEventListener('click', function (e) {
           
            for (var i = 0; i < tabs.length; i++) {
                var el = tabs[i];
                el.classList.remove('tab1')
            }
            this.classList.add('tab1')
            if (this.classList.contains('prom')) {
                tabwrapper.innerHTML= ourpromise
                
                
            }else if (this.classList.contains('ing')) {
                tabwrapper.innerHTML= ingredients

            }else if (this.classList.contains('res')) {
                tabwrapper.innerHTML= results

            }else if (this.classList.contains('how')) {
                tabwrapper.innerHTML= howitworks

            }else if (this.classList.contains('ben')) {
                tabwrapper.innerHTML= benefits

            }else if (this.classList.contains('feat')) {
                tabwrapper.innerHTML= featuredin
            }
        })
    }
});


// -----------------------------------------
// counter from input number from universal daily peel

var inputnumber= document.getElementById('numbercontainer') 
var buttons= document.querySelectorAll('.btnInput')
let checkboxInput= document.getElementById('checkboxInput')

var counter= 0

    buttons.forEach(function (btn) {
       
        btn.addEventListener('click', function (e) {
           var clase= e.target.classList
           if (clase.contains ('menos')) {
               counter--
               counter < 0 ? counter= 0 : counter
           }else if (clase.contains ('mas')) {
               counter++
           }
    
           inputnumber.innerText= counter
            
        })
    })

// CHECKBOX JAVASCRIPT LOGIC
    window.addEventListener('click', function (e) {
       
        if (e.target.classList.contains('input')) {
            checkboxInput.style.background= '#3a3838'
        }else{
            checkboxInput.style.background= ''
        }
    })
// INITIALIZING COUNTER IN 0
document.addEventListener( 'DOMContentLoaded', function () {
     inputnumber.innerText= counter

});
















