"use client"
import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import { motion } from "framer-motion";
import Skipbt from "./skipbt";

import {useState } from "react";

export default function Qanda() {
    const [img1, simg1] = useState(true)
    const [web, sweb] = useState(true)
    const [img2, simg2] = useState(true)
    const [web2, sweb2] = useState(true)
    const [web3, sweb3] = useState(true)
    const [web4, sweb4] = useState(true)
    const [stt, sstt] = useState(false)
    const [stt1, sstt1] = useState(false)
    const [prot, sprot] = useState(false)
    const [prot2, sprot2] = useState(false)
    const [prot3, sprot3] = useState(false)
    const [prot4, sprot4] = useState(false)
    const [hov , shov] = useState(false)
    return (
        <main>
            <div className={classes.grids}>
      <Image width={1920} height={2710} className={classes.gridimg} alt="Imgr" src="/img/grids.png" />
         </div>
            <div className={classes.backbtn}>
                <a onMouseEnter={() => shov(!hov)} onMouseLeave={() => shov(!hov)} href="./"> <span>
                    <motion.svg animate={{x: hov ? -20 : 0}}   viewBox="0 0 63 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8 26.252L25.2 37.652C26 38.452 26.3833 39.3853 26.35 40.452C26.3167 41.5187 25.9333 42.452 25.2 43.252C24.4 44.052 23.45 44.4687 22.35 44.502C21.25 44.5353 20.3 44.152 19.5 43.352L1.2 25.052C0.4 24.252 0 23.3187 0 22.252C0 21.1853 0.4 20.252 1.2 19.452L19.5 1.152C20.3 0.352 21.25 -0.0313333 22.35 0.002C23.45 0.0353333 24.4 0.452 25.2 1.252C25.9333 2.052 26.3167 2.98533 26.35 4.052C26.3833 5.11867 26 6.052 25.2 6.852L13.8 18.252H58.4C59.5333 18.252 60.4833 18.6353 61.25 19.402C62.0167 20.1687 62.4 21.1187 62.4 22.252C62.4 23.3853 62.0167 24.3353 61.25 25.102C60.4833 25.8687 59.5333 26.252 58.4 26.252H13.8Z" fill="black"/>
                    </motion.svg>
                </span> &nbsp;Go Back </a>
            </div>
            <div className={classes.title}>
                 
                <Image width={1920} height={1080} priority className={classes.imgttl} alt="Imgr" src="/img/medittl.png" />
                <Image width={1920} height={1080} priority className={classes.deximg} alt="Imgr" src="/img/medig.gif" />
            </div> 
          <div className={classes.stage1}>
            <div className={classes.sbox1}>
                <div className={classes.ibox1}>
                    <h1 className={classes.atitle}>Why I am seeing only part of application? </h1>
                    <p>I was tasked with Redesigning the Ux of  Medical record management application. I have worked on this project. But Here I am only showing the part of application Because This is Real case study of how <span> you shouldn&apos;t always rely on your intuition & Product Manger&apos;s biases in end product and neglect users up to Provide Great User Experience </span> Because great is “always” better than good. As Designer you always stand with users to bring more Money in long run.</p>
                    <p style={{fontFamily:"Averta CY-iRegular"}}>So what is story </p>
                    <p>So the project is concluded and End every one is happy with outcome and we assume that if all the people are liking this user will also like this. yes... No after completing Project I am Visiting other website for different project and it heats me. that the solution that i have designed in this part is biased. and as Designer I have failed to caught that. And I decided to work on this and make it right because i can&apos;t ignore this. so In my spear time I have decided to onboard User&apos;s to test finished product. (so the “users” are my friends ). I asked them to finish user interaction with small price of free meal. And they likes** the end solution. So wait.. Why there is need to re-re design this Because they like previous design solution more than this with just little change. <span> Continue reading this if you like to know what happened. </span>  </p>
                </div>
            </div>
            <div className={classes.sbox2}>
                <div className={classes.timg}> 
                <Image width={1109} height={430} className={classes.frm} alt="Imgr" src="/img/fr1.png" />
                </div>
                <div className={classes.line}></div>
                <div className={classes.indx}>
                    <a href="#section-2">Analyzing</a>
                    <a href="#section-3">Understanding Target Users</a>
                    <a href="#section-4">Problem Identification</a>
                    <a href="#section-5">Ideas & Iterations </a>
                    <a href="#section-6">Design 1 </a>
                    <a href="#section-7">Turning point & User testing </a>
                    <a href="#section-8">Design 2 </a>
                    <a href="#section-9">Conclution </a>
                </div>
            </div>
            <div className={classes.sbox3}>
            <div className={classes.ibox1}>
                    <h1 className={classes.atitle}>Importance of this Questions. </h1>
                    <p>This are around ~50 questions that has to be asked before diagnosis patients. This questions are asked before diagnosis purpose of this questions is to diagnosis without any complications so this is integral part of the application. also this the only part of application where doctors are not involved and has major changes. (also name, color and style are changed in this presentation)</p>
                    <h1 className={classes.atitle}> Why Redesign is needed? </h1>
                    <p>Company expanding it&apos;s reach, and Current UI is outdated and has unoptimized user experience    </p>
                    </div>
            </div>
            <div className={classes.sbox4}>
            
                <div className={classes.ibox1}>
                <h1 id="section-2" className={classes.atitle}>Analyzing</h1>
                <p>For this steps we don&apos;t have enough reference to how to pursue project, so in order to get the insight in short time frame we have to use existing design as reference point to Identify problem interface. and other website that how they solve this problem </p>
                <p style={{fontFamily:"Averta CY-iRegular"}}> Previous Interface </p>
                <div className={classes.pimg}>
                    <Image width={1431} height={854} className={classes.pimgs} alt="Imgr" src="/img/oldd.png" />
                </div>
                <p style={{fontFamily:"Averta CY-iRegular"}}>Problem found based on observation and team discussion.</p>
                <p> 1. Too much distant between questions and options. <br />
                    2. No indication of how much questions are there (number of questions)<br />
                    3. Visibility issue for certain demographic. <br />
                    4. Hard to keep track of progress
                </p>
                <div className={classes.pbox}></div>
                <h1 id="section-3" className={classes.atitle}>Understanding target user</h1>
                <p style={{fontFamily:"Averta CY-iRegular"}}> Who is our target user.</p>
                <p>First target demographic comprises individuals residing in the United States who are aged above 30 and are at increased risk of illness.</p>
                <p>The second target demographic includes individuals who have sustained injuries from unforeseen accidents. However, due to the urgent nature of these situations, the question of product usage might not immediately come to mind. Therefore, I have chosen to focus on the first target demographic of users. </p>
                <div className={classes.pbox}></div>
                <h1 id="section-4" className={classes.atitle}>Problem Identification.</h1>
                <p style={{fontFamily:"Averta CY-iRegular"}}> What is right problem to solve.</p>
                <p>This is exercise i do before starting ideation that help me to define problem and see the bigger picture.</p>
                <p>I thought about this hard on what is problem we are solving, is the problem of visibility, is the problem of tediousness or uncertainty. After giving thought i have arrived at conclusion of tediousness or uncertainty.</p>
                <div className={classes.pbox}></div>
                <h1 id="section-5" className={classes.atitle}>Current Objectives and restrictions.</h1>
                    <ul style={{listStyleType: "circle", listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-Regular", fontSize: "18px",  padding : "5px 0px 0 20px"}}>  A design that is scalable without losing out on functions as more questions are added.  </li>  
                        <li style={{fontFamily:"Averta CY-Regular" ,fontSize: "18px", padding : "0 0 0 20px" }}>  Make progression more engaging and informative.</li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Reduce user interaction steps, (lesser the steps better the ux). </li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}> Identify & Reduce information or ui that don&apos;t help to reaching final goals. </li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Not allow to temper with questions due to it&apos;s nature. </li>  
                    </ul>
                           
                           
                    <div className={classes.pbox}></div>    
                            
                              
                <h1 id="section-5" className={classes.atitle}>Ideas & iteration .</h1>
                <p style={{fontFamily:"Averta CY-iRegular"}}> Solving problem tediousness & uncertainty there are lots solutions came to my mind. here are glimpse of that.</p>
                <p> 1. As we saw there are lots of yes and no questions that can be translated as state like tick or no tick and grouping questions into segments to display how many segment are done and how many are remains. <br/>
                    2. Asking general question and convert yes and no questions into multiple answer.<br/>
                    3. Asking Question one after another with auto scroll as you answer question.<br/>
                    4. Make a group of Questions according to body part, and indication of how many answers and how many remains.<br/>  
                    5. Create Separate Questions and present in horizontal scroll that also act as progress indicator.
                </p>
                <p style={{fontFamily:"Averta CY-iRegular"}}> Iteration.</p>
                <Image style={{objectFit: ""}} width={1433} height={1433} className={classes.pimgs} alt="Imgr" src="/img/itrc.png" />
               
                <h1 id="section-6" className={classes.atitle}>Decision for Final Design.</h1>
                <p style={{fontFamily:"Averta CY-iRegular"}}>After Evaluating design with team, we all agree with design “4”, with a few modification like.</p>
                <p> -Create group of 6 Questions instead of 4 to reduce steps,  <br/>
                    -Change the position and style for progress bar.</p>
                    <div className={classes.pbox}></div>
                    <button className={classes.stbtn} onClick={() => sstt(!stt)}> State of button <span  > 
                      <motion.div animate={{rotate:stt ? 225 : 45,  }} className={classes.arrow}></motion.div>  
                    </span></button>
                    <div style={{overflow:"hidden" , display:"flex"}}>
                    <motion.div style={{ zIndex: -1}} transition={{ ease: "easeOut", duration: 0.4 }} animate={{y:stt ? 6 : -310,height:stt ? "auto" : 0,}}  className={classes.stateap} >
                        
                        <div>
                        <Image style={{border: " 1.5px solid black"}} width={431} height={147} className={classes.pimgs} alt="Imgr" src="/img/state1.png" />
                        
                        </div>
                        <div>
                        <Image style={{border: " 1.5px solid black"}} width={431} height={147} className={classes.pimgs} alt="Imgr" src="/img/stateg1.gif" />
                        </div>
                    </motion.div>
                    </div>
                <h1  className={classes.atitle}>Design 1.</h1>
                <p style={{fontFamily:"Averta CY-iRegular"}}>Here is final screen in video and image preview</p>
                <button className={classes.imgbtn} onClick={() => simg1(img1 === true ? false : true)}>{img1 === true ? "Show Video Preview" : "Show Image Preview"}</button>
                {img1 === true ? 
                <div className={classes.fimage}> 
                    <button className={classes.imgbtn} onClick={() => sweb(web === true ? false : true)}>{web === true ? "Show Phone Preview" : "Show website preview"}</button> 
                    {web === true ?
                    <div >
                        <div className={classes.phonebox}> 
                        <button className={classes.stbtn} onClick={() => sprot(!prot)}> Figma Prototype <span  > 
                        <motion.div animate={{rotate:prot ? 225 : 45,  }} className={classes.arrow}></motion.div>  
                        </span></button>
                        <div style={{overflow:"hidden", display:"flex", flexDirection: "column", alignItems: "center"}}>
                        <motion.div style={{ zIndex: 1}} transition={{ ease: "easeOut", duration: 0.4 }} animate={{y:prot ? 6 : -310,height:prot ? "auto" : 0,}}  className={classes.stateap} >
                            <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} className={classes.figfrm} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fya1CXlCbvDUuFbyVzcUKaA%2FOrthovitals%3Fpage-id%3D1428%253A216%26type%3Ddesign%26node-id%3D1428-218%26viewport%3D564%252C2574%252C0.46%26t%3DcXk2stFDRKxKWlk8-1%26scaling%3Dscale-down%26starting-point-node-id%3D1428%253A218%26mode%3Ddesign" allowFullScreen></iframe>
                            
                        </motion.div>
                        <Skipbt condit={prot} section= "#section-7"/>
                        </div>
                    
                        </div>
                    <Image width={1920} loading ="lazy" height={1177} className={classes.pimgs} alt="Imgr" src="/img/it1.png" />
                    <Image width={1920} loading ="lazy" height={1177} className={classes.pimgs} alt="Imgr" src="/img/it2.png" />
                    <Image width={1920} loading ="lazy" height={1177} className={classes.pimgs} alt="Imgr" src="/img/it3.png" />
                    <Image width={1920} loading ="lazy" height={1177} className={classes.pimgs} alt="Imgr" src="/img/it4.png" />
                    <Image width={1920} loading ="lazy" height={1177} className={classes.pimgs} alt="Imgr" src="/img/it5.png" />
                    <Image width={1920} loading ="lazy" height={1177} className={classes.pimgs} alt="Imgr" src="/img/it6.png" />
                    <Image width={1920} loading ="lazy" height={1177} className={classes.pimgs} alt="Imgr" src="/img/it7.png" />
                    <Image width={1920} loading ="lazy" height={1177} className={classes.pimgs} alt="Imgr" src="/img/it8.png" />
                    <Image width={1920} loading ="lazy" height={1177} className={classes.pimgs} alt="Imgr" src="/img/it9.png" />
                    </div>
                    :
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent: "center"}}>
                       <div className={classes.phonebox}> 
                        <button className={classes.stbtn} onClick={() => sprot2(!prot2)}> Figma Prototype <span  > 
                        <motion.div animate={{rotate:prot2 ? 225 : 45,  }} className={classes.arrow}></motion.div>  
                        </span></button>
                        <div style={{overflow:"hidden" , display:"flex", flexDirection: "column", alignItems: "center"}}>
                        <motion.div style={{ zIndex: 1}} transition={{ ease: "easeOut", duration: 0.4 }} animate={{y:prot2 ? 6 : -310,height:prot2 ? "auto" : 0,}}  className={classes.stateap} >
                            <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} className={classes.figfrmm} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fya1CXlCbvDUuFbyVzcUKaA%2FOrthovitals%3Fpage-id%3D1428%253A217%26type%3Ddesign%26node-id%3D1428-6983%26viewport%3D552%252C2985%252C0.58%26t%3DX7ghb1vUIiYmYZIq-1%26scaling%3Dscale-down%26starting-point-node-id%3D1428%253A6983%26mode%3Ddesign" allowFullScreen></iframe>
                            
                        </motion.div>
                        <Skipbt condit={prot2} section= "#section-7"/>
                        </div>
                    
                    </div> 
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm1.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm2.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm3.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm4.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm5.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm6.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm7.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm8.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm9.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/itm10.png" />
                    </div>
                    }
                </div> 
                : 
                <div className={classes.videogroup}>
                    <div style={{textAlign: "center"}}>
                    <button className={classes.imgbtn} onClick={() => sweb2(web2 === true ? false : true)}>{web2 === true ? "Show Phone Preview" : "Show website preview"}</button> 
                    {web2 === true ?
                    
                    <iframe className={classes.iframe} src="https://www.veed.io/embed/7c5a2ff0-7216-4f12-92c2-5f5957af7b49"  frameborder="0" title="MediQuest" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    :
                    <iframe className={classes.iframe} src="https://www.veed.io/embed/700c50fa-973a-4ec4-a01f-851369001b3b"  frameborder="0" title="MediQuest" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    
                    }
                    </div>
                    
                    
                    
                    
                    </div>
                }

                </div>
            </div>
          </div>
          
          
          
          <div className={classes.stage2}>
          <div className={classes.s1box1}>
            <div className={classes.i1box1}>
            <h1 id="section-7" className={classes.atitle}>Turning point.</h1>
            <p>After completion of Design, After sometime i was stumbled upon this design flow and i decide to A/B test current and older design with my friends, because going for actual target audience is expensive on my own. And this is also answer for questions why don&apos;t we always do testing with user, because <span> it&apos;s expensive even for organization and majority of time you don&apos;t need to talk to user to figure out actually problem. Reading already published research, article would be really good time and money saving and works 80 percent of time. Always stand on giants shoulder if you chance.</span> </p>
            <h1 className={classes.atitle}>How research was conducted & What are the outcome.</h1>
            <p style={{fontFamily:"Averta CY-iRegular"}}>Here is step by step process </p>
            <p>1. Create less glorified version (using only basic shaped and mono chromatic theme) for design to reduce halo effect. designs attached below.</p>
            <p>2. Asking Question open ended questions :-</p>
            <ul style={{listStyleType: "circle", listStylePosition: "inside"}}>
            <li style={{fontFamily:"Averta CY-iRegular", fontSize: "18px",  padding : "5px 0px 0 20px"}}> How much questions are there approximately. and why you think that. or which design felt like it has more questions.  </li>  
            <li style={{fontFamily:"Averta CY-iRegular" ,fontSize: "18px", padding : "0 0 0 20px" }}> How you process the information and what are best way to ask questions,</li>  
            <li style={{fontFamily:"Averta CY-iRegular",fontSize: "18px", padding : "0 0 0 20px" }}>Which design took less time to complete and why you think they took less time.</li>  
            <li style={{fontFamily:"Averta CY-iRegular",fontSize: "18px", padding : "0 0 0 20px" }}> Which are the part of Questions you feel like giving up or become boring, if you felt any, and if not why you don&apos;t felt like this. </li>  
            </ul>
            <p>3. Extracting insight from interview :- </p>
            <ul className={classes.list} style={{listStyleType: "circle", listStylePosition: "inside"}}>
                <li style={{fontFamily:"Averta CY-iRegular", fontSize: "18px", padding : "5px 0px 0 20px"}}> <span> in older design people felt less question </span> then new design. because it has fever steps.  </li>  
                <li style={{fontFamily:"Averta CY-iRegular" ,fontSize: "18px", padding : "0 0 0 20px" }}> Making user notifying about progression works as double edge sward because in this case <span>interface felt like long and draining.</span></li>  
                <li style={{fontFamily:"Averta CY-iRegular",fontSize: "18px", padding : "0 0 0 20px" }}>User <span> don&apos;t seem to care about how questions are presented </span> to them, it felt same. </li>  
                <li style={{fontFamily:"Averta CY-iRegular", fontSize: "18px", padding : "0 0 0 20px" }}> All the Question felt like same, they read them as their eyes are drown naturally, and in few of the cases they have <span>hard time to keep in line with question </span>(in older design). </li>  
                <li style={{fontFamily:"Averta CY-iRegular", fontSize: "18px", padding : "0 0 0 20px" }}> <span> User felt connection to process, if real life doctor would ask them it&apos;s more interactive this way.</span></li>  
            </ul>
            </div>
            <div className={classes.pbox}></div>
            </div>
            <div className={classes.s1box2}>
                <div className={classes.i1box2}>
                <div className={classes.pbox}></div>
                    <p style={{fontFamily:"Averta CY-iRegular"}}>A/B tested Design </p>
                    <div className={classes.abimg}>
                        <Image width={1920} height={1177} className={classes.abimage} alt="Imgr" src="/img/mono1st.png" />
                        <Image width={1920} height={1177} className={classes.abimage} alt="Imgr" src="/img/mono2nd.png" />
                    </div>
                    <div className={classes.pbox}></div>
                    <h1 className={classes.atitle}>Reidentifying Problem.</h1>
                    <p>In previous Design we trying to solve problem of tediousness and uncertainty, After talking to people i realized we are solving problem of connection. User has to feel connected and empathized (if possible) with the process and previous interfaces are not doing justice to that.</p>
                    <div className={classes.pbox}></div>
                    <h1 className={classes.atitle}>New objectives from interaction.</h1>
                    <ul style={{listStyleType: "decimal", listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-Regular", fontSize: "18px",  padding : "5px 0px 0 20px"}}> Creating Design that resemble more like human interaction.  </li>  
                        <li style={{fontFamily:"Averta CY-Regular" ,fontSize: "18px", padding : "0 0 0 20px" }}> Making Design Accessible for many type of patient.</li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Making effortless interaction between Questions.</li>  
                        
                    </ul>
                    <div className={classes.pbox}></div>
                    <h1 className={classes.atitle}>Ideas.</h1>
                    <ul style={{listStyleType: "decimal", listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-Regular", fontSize: "18px",  padding : "5px 0px 0 20px"}}> Creating Design that resemble more like human interaction or felt like being asked in way.  </li>  
                        <li style={{fontFamily:"Averta CY-Regular" ,fontSize: "18px", padding : "0 0 0 20px" }}> Making Phone Conversation type Questionnaire.</li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Making effortless interaction between Questions to reduce unnecessary clicks and movement. </li>  
                         
                    </ul>
                    <div className={classes.pbox}></div>
                    <h1 id="section-8" className={classes.atitle}>Decision for Final Design.</h1>
                    <ul style={{listStyleType: "circle", listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-Regular", fontSize: "18px",  padding : "5px 0px 0 20px"}}>So in final Design I have combined few element of ideas and internet research to Create final design. </li>  
                        <li style={{fontFamily:"Averta CY-Regular" ,fontSize: "18px", padding : "0 0 0 20px" }}> I have used simulation and 3d software to resemble experience doctors to increase interactivity. </li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>To reduce time and effort, creating Chat like environment with voice command to increase accessibility of design.  </li>  
                        
                    </ul>
                    <button className={classes.stbtn} onClick={() => sstt1(!stt1)}> State of button <span  > 
                      <motion.div animate={{rotate:stt1 ? 225 : 45,  }} className={classes.arrow}></motion.div>  
                    </span></button>
                    <div style={{overflow:"hidden", display:"flex"}}>
                    <motion.div style={{  zIndex: -1}} transition={{ ease: "easeOut", duration: 0.4 }} animate={{y:stt1 ? 15 : -310,height:stt1 ? "auto" : 0,}}  className={classes.stateap} >
                        
                        <div>
                        <Image style={{border: " 1.5px solid black"}} width={431} height={147} className={classes.pimgs} alt="Imgr" src="/img/state2.png" />
                        
                        </div>
                        <div>
                        <Image style={{border: " 1.5px solid black"}} width={431} height={147} className={classes.pimgs} alt="Imgr" src="/img/stateg2.gif" />
                        </div>
                        <div>
                        <Image style={{border: " 1.5px solid black"}} width={431} height={147} className={classes.pimgs} alt="Imgr" src="/img/state21.png" />
                        
                        </div>
                        <div>
                        <Image style={{border: " 1.5px solid black"}} width={431} height={147} className={classes.pimgs} alt="Imgr" src="/img/stateg21.gif" />
                        </div>
                    </motion.div>
                    </div>
                    <h1  className={classes.atitle}>Design 2.</h1>
                    <p style={{fontFamily:"Averta CY-iRegular"}}>Here is second design for final screen in video and image preview</p>
                    <button className={classes.imgbtn} onClick={() => simg2(img2 === true ? false : true)}>{img2 === true ? "Show Video Preview" : "Show Image Preview"}</button>
                {img2 === true ? 
                <div className={classes.fimage}> 
                <button className={classes.imgbtn} onClick={() => sweb3(web3 === true ? false : true)}>{web3 === true ? "Show Phone Preview" : "Show website preview"}</button> 
                {web3 === true ?
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent: "center"}}>
                        <div className={classes.phonebox}> 
                        <button className={classes.stbtn} onClick={() => sprot3(!prot3)}> Figma Prototype <span  > 
                        <motion.div animate={{rotate:prot3 ? 225 : 45,  }} className={classes.arrow}></motion.div>  
                        </span></button>
                        <div style={{overflow:"hidden", display:"flex", flexDirection: "column", alignItems: "center"}}>
                        <motion.div style={{ zIndex: 1}} transition={{ ease: "easeOut", duration: 0.4 }} animate={{y:prot3 ? 6 : -310,height:prot3 ? "auto" : 0,}}  className={classes.stateap} >
                            <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} className={classes.figfrm} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fya1CXlCbvDUuFbyVzcUKaA%2FMediQuest%3Fpage-id%3D1428%253A216%26type%3Ddesign%26node-id%3D1523-15637%26viewport%3D569%252C667%252C0.08%26t%3DyXw4cJGruW3fatx6-1%26scaling%3Dscale-down%26starting-point-node-id%3D1523%253A15637%26mode%3Ddesign" allowFullScreen></iframe>
                            
                        </motion.div>
                        <Skipbt condit={prot3} section= "#section-9"/>
                        </div>
                    
                        </div>
                    <Image style={{border: " 1.5px solid black"}} width={1920} height={1177} className={classes.pimgs} alt="Imgr" src="/img/2it1.png" />
                    <Image style={{border: " 1.5px solid black"}} width={1920} height={1177} className={classes.pimgs} alt="Imgr" src="/img/2it2.png" />
                    <Image style={{border: " 1.5px solid black"}} width={1920} height={1177} className={classes.pimgs} alt="Imgr" src="/img/2it3.png" />
                    <Image style={{border: " 1.5px solid black"}} width={1920} height={1177} className={classes.pimgs} alt="Imgr" src="/img/2it4.png" />
                    <Image style={{border: " 1.5px solid black"}} width={1920} height={1177} className={classes.pimgs} alt="Imgr" src="/img/2it5.png" />
                    <Image style={{border: " 1.5px solid black"}} width={1920} height={1177} className={classes.pimgs} alt="Imgr" src="/img/2it6.png" />
                    </div>
                    : 
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent: "center"}}>
                        <div className={classes.phonebox}> 
                        <button className={classes.stbtn} onClick={() => sprot4(!prot4)}> Figma Prototype <span  > 
                        <motion.div animate={{rotate:prot4 ? 225 : 45,  }} className={classes.arrow}></motion.div>  
                        </span></button>
                        <div style={{overflow:"hidden" , display:"flex", flexDirection: "column", alignItems: "center"}}>
                        <motion.div style={{ zIndex: 1}} transition={{ ease: "easeOut", duration: 0.4 }} animate={{y:prot4 ? 6 : -310,height:prot4 ? "auto" : 0,}}  className={classes.stateap} >
                            <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} className={classes.figfrmm} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fya1CXlCbvDUuFbyVzcUKaA%2FMediQuest%3Fpage-id%3D1428%253A217%26type%3Ddesign%26node-id%3D1523-10267%26viewport%3D331%252C939%252C0.1%26t%3DiGILzig409JDdq09-1%26scaling%3Dscale-down%26starting-point-node-id%3D1523%253A10267%26mode%3Ddesign" allowFullScreen></iframe>
                            
                        </motion.div>
                        <Skipbt condit={prot4} section= "#section-9"/>
                        </div>     
                    
                    </div> 
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/2itm1.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/2itm2.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/2itm3.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/2itm4.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/2itm5.png" />
                    <Image width={1920} height={1177} className={classes.pimgsm} alt="Imgr" src="/img/2itm6.png" />
                    
                    </div> 
                    }
                </div>
                :
                <div className={classes.videogroup}>
                    <div style={{textAlign: "center"}}>
                    <button className={classes.imgbtn} onClick={() => sweb4(web4 === true ? false : true)}>{web4 === true ? "Show Phone Preview" : "Show website preview"}</button> 
                    {web4 === true ?
                        <div> 
                            <iframe className={classes.iframe} src="https://www.veed.io/embed/fa3707b3-8a9a-441e-bfb2-d46cb0952e88"  frameborder="0" title="MediQuest" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                        </div>
                        :
                        <div>
                           <iframe className={classes.iframe} src="https://www.veed.io/embed/491dc922-0578-412d-bb70-d5ff7a60aa9b"  frameborder="0" title="MediQuest" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                         </div> 
                        }
                </div>
                </div>
                }
                <h1 id="section-9" className={classes.atitle}>Conclusion and Learning.</h1>
                <p>Design is iterative process. Most of the cases it&apos;s not linear, we have to quick to adapt, identify problems and make necessary changes to deliver great user experience. and This is why i have choose to include this case study to show Design is not linear process and one time thing. As product Designer I always wanted to make timeless design, but things are keep changing outside and inside of you. As you grow and learn more, you Found out flow in your pervious work, And try to make Design better with new knowledge and experience. as you grow more experience in design you tend to rely on intuition to identify problem and make designs decision,  Most of time it&apos;s efficient and time saving. but there are times you need to balance things. You can&apos;t 100% reduce bias from any things. So your goal should be solve problem using best of both world and being efficient with time to deliver result.  </p>
                <p>I Put this case study to show design is not about process but more about Designer&apos;s ability to solve problem effectively with Limited time and resources available to them. </p>
                </div>
                <div className={classes.endbox}>
                <div style= {{ position :"relative", top:"10vh", left: "40vw"}} className={classes.backbtn}>
                <a onMouseEnter={() => shov(!hov)} onMouseLeave={() => shov(!hov)} href="./gwal"> Next Project &nbsp; <span>
                    <motion.svg whileHover={{x:30}}  animate={{rotate:180, x: hov ? 20 : 0}} viewBox="0 0 63 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8 26.252L25.2 37.652C26 38.452 26.3833 39.3853 26.35 40.452C26.3167 41.5187 25.9333 42.452 25.2 43.252C24.4 44.052 23.45 44.4687 22.35 44.502C21.25 44.5353 20.3 44.152 19.5 43.352L1.2 25.052C0.4 24.252 0 23.3187 0 22.252C0 21.1853 0.4 20.252 1.2 19.452L19.5 1.152C20.3 0.352 21.25 -0.0313333 22.35 0.002C23.45 0.0353333 24.4 0.452 25.2 1.252C25.9333 2.052 26.3167 2.98533 26.35 4.052C26.3833 5.11867 26 6.052 25.2 6.852L13.8 18.252H58.4C59.5333 18.252 60.4833 18.6353 61.25 19.402C62.0167 20.1687 62.4 21.1187 62.4 22.252C62.4 23.3853 62.0167 24.3353 61.25 25.102C60.4833 25.8687 59.5333 26.252 58.4 26.252H13.8Z" fill="black"/>
                    </motion.svg>
                </span></a>
            </div>
                </div>
            </div>
          </div>
          
          <div className={classes.image2}></div>
          <div className={classes.videogroup2}></div>
          <div className={classes.stage3}></div>
        </main>
    )
}