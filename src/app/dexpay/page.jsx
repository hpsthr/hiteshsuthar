"use client"
import Image from "next/image";
import React from "react";
import classes from "./style.module.css";
import {motion} from "framer-motion"
import {useState} from "react";
import Skipbt from "../qanda/skipbt";

export default function Qanda() {
    
    const [web, sweb] = useState(true)
    const [stt, sstt] = useState(false)
    const [stt1, sstt1] = useState(false)
    const [hov , shov] = useState(false)
    
    return (
        <main>
            <div className={classes.backbtn}>
            <a onMouseEnter={() => shov(!hov)} onMouseLeave={() => shov(!hov)} href="./"> <span>
                    <motion.svg animate={{x: hov ? -20 : 0}} viewBox="0 0 63 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8 26.252L25.2 37.652C26 38.452 26.3833 39.3853 26.35 40.452C26.3167 41.5187 25.9333 42.452 25.2 43.252C24.4 44.052 23.45 44.4687 22.35 44.502C21.25 44.5353 20.3 44.152 19.5 43.352L1.2 25.052C0.4 24.252 0 23.3187 0 22.252C0 21.1853 0.4 20.252 1.2 19.452L19.5 1.152C20.3 0.352 21.25 -0.0313333 22.35 0.002C23.45 0.0353333 24.4 0.452 25.2 1.252C25.9333 2.052 26.3167 2.98533 26.35 4.052C26.3833 5.11867 26 6.052 25.2 6.852L13.8 18.252H58.4C59.5333 18.252 60.4833 18.6353 61.25 19.402C62.0167 20.1687 62.4 21.1187 62.4 22.252C62.4 23.3853 62.0167 24.3353 61.25 25.102C60.4833 25.8687 59.5333 26.252 58.4 26.252H13.8Z" fill="black"/>
                    </motion.svg>
                </span>&nbsp;Go Back </a>
            </div>
            <div className={classes.title}>
                <div className={classes.box}>
                    <div className={classes.first}>
                        <a className={classes.titles}>Project</a>
                        <a className={classes.info}>Dexpay</a>
                    </div>
                    <div className={classes.first}>
                        <a className={classes.titles}>Year</a>
                        <a className={classes.info}>2023</a>
                    </div>
                    <div className={classes.first}>
                        <a className={classes.titles}>Brief</a>
                        <a className={classes.infosmall}>Redesigning website, for increase engagement, Establish Digital Identity of Brand and  communicate about product efficiently.</a>
                    </div>
                </div>
            </div> 
          <div className={classes.stage1}>
            <div style={{ width : "60vw" , flexDirection: "row", alignItems: "flex-start"}} className={classes.sbox1}>
                <div  className={classes.ibox1}>
                <h1 className={classes.atitle}>Why Redesign & Problem with current website </h1>  
                <p>The previous landing page was not designed with the long-term vision of the company in mind. It used a prebuilt template to construct the site, resulting in less thoughtful design considerations</p>         
                <p>The current website lacks a clear information flow, hindering users from making informed decisions about the product. Consequently, this may result in missed opportunities for the company if website visitors fail to convert into product users</p>
                <p>With ultimate goal to convert maximum amount of visitor into products user, here project is began </p>
                </div>
                
            </div>
            <div style= {{backgroundColor:"#C2D0FF"}}className={classes.sbox1}>
            <div className={classes.pimg}>
                    <Image width={1920} height={4000} className={classes.pimgs} alt="Imgr" src="/img/odesign.png" />
                   
                </div>
            </div>
            <div className={classes.pbox}></div>
            <div className={classes.sbox2}>
            <div className={classes.timg}> 
                    <Image width={1109} height={430} className={classes.frm} alt="Imgr" src="/img/dap1.png" />
                </div>
                <div className={classes.line}></div>
                <div className={classes.indx}>
                    <a href="#section-2">Research and Analysis </a>
                    <a style={{paddingLeft: "40px",fontSize:"24px"}} href="#section-2_1">Competitive Analysis.</a>
                    <a style={{paddingLeft: "40px",fontSize:"24px"}} href="#section-2_2">Quantitative Analysis.</a>
                    <a style={{paddingLeft: "40px",fontSize:"24px"}} href="#section-2_3">Understanding target User.</a>
                    
                    <a href="#section-3">Research Conclusion  </a>
                    <a href="#section-4">Key goals </a>
                    <a href="#section-5">Color and Font </a>
                    <a href="#section-6">Final Design </a>
                    <a href="#section-7">Conclusion </a>
                   
                
                </div>
            </div>
            <div className={classes.pbox}></div>
            <div className={classes.sbox3}>
            <div className={classes.ibox1}>
                    <h1 className={classes.atitle}>Research and Analysis. </h1>
                    <p>In this project i had choose to study competition and decode how they design their website to getting major user engagement,  Then talking to target Users and figure out what kind of information they are looking for in website and how they make sense of information provided to them and take action to complete what they trying to archive with website. </p>
                    
                    <h1 id="section-2_1" style={{fontSize:"24px"}} className={classes.atitle}> Competitive analysis. </h1>
                    <p>looking for online review of product and deciding who are providing best service and attracting more user through their website with tools like semrush , or any other seo tool. (This tool only provides information about number of visitor this current website has, not how many use product of company)</p>
                    <p>In order to shortlist sites I have decided to go with number of user visiting this website, download on play store and apple store  and how well design their website they have, </p>
                    <p>Through analysis I have Choose this 4 Website to observe and then select 2 website to make in depth analysis to inform my design decision here are website </p>
                    <ul style={{listStyleType: "circle", listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-iRegular", fontSize: "18px",  padding : "15px 0px 0 20px"}}>LazyPay  </li>  
                        <li style={{fontFamily:"Averta CY-iRegular" ,fontSize: "18px", padding : "0 0 0 20px" }}>Zest</li>  
                        <li style={{fontFamily:"Averta CY-iRegular",fontSize: "18px", padding : "0 0 0 20px" }}>Money View</li>  
                        <li style={{fontFamily:"Averta CY-iRegular",fontSize: "18px", padding : "0 0 0 20px" }}> Home Credit </li>  
                    </ul>
                    </div>
                    <div className={classes.pbox}></div>
                    <div className={classes.pbox}></div>
            </div>
            <div className={classes.sbox4}>
            
                <div className={classes.ibox1}>
                
                <div className={classes.pimg}>
                    <Image width={1920} height={4000} className={classes.pimgs} alt="Imgr" src="/img/Frame1.png" />
                    <Image width={1920} height={4000} className={classes.pimgs} alt="Imgr" src="/img/Frame2.png" />
                    <Image width={1920} height={4000} className={classes.pimgs} alt="Imgr" src="/img/Frame3.png" />
                    <Image width={1920} height={4000} className={classes.pimgs} alt="Imgr" src="/img/Frame4.png" />
                </div>
                
                
                </div>
            </div>
          </div>
          
          
          
          <div className={classes.stage2}>
          <div className={classes.s1box1}>
            <div className={classes.i1box1}>
                <div className={classes.pbox}></div> 
                    <h1  style={{fontSize:"24px"}} className={classes.atitle}>Final Analysis.</h1>
                    <p>Here are 2 website we have decided to make in-depth analysis, and speculative guess why it&apos;s made this way with best of my and team ability. here are some parameter.  </p>
                    <ul style={{listStyleType: "circle", listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-iRegular", fontSize: "18px",  padding : "15px 0px 0 20px"}}> Why Section is designed this way and what are their out come.  </li>  
                        <li style={{fontFamily:"Averta CY-iRegular" ,fontSize: "18px", padding : "0 0 0 20px" }}>How visitor perceive this design.</li>  
                        <li style={{fontFamily:"Averta CY-iRegular",fontSize: "18px", padding : "0 0 0 20px" }}>What are the things visitor looking for when he comes to this website and what order are they presented to user and why.</li>  
                    </ul>
                    
            </div>
            <div className={classes.pbox}></div>
            </div>
            <div className={classes.s1box2}>
                <div className={classes.i1box2}>
                <div className={classes.pbox}></div>
                    
                    
                    <div className={classes.abimg}>
                        <p style={{fontFamily:"Averta CY-iRegular", paddingBottom : "20px"}}>LazyPay </p>
                        <Image width={1920} height={1177} className={classes.abimage} alt="Imgr" src="/img/lazypay.png" />
                        <p style={{fontFamily:"Averta CY-iRegular", paddingBottom : "20px"}}>Moneyview </p>
                        <Image width={1920} height={1177} className={classes.abimage} alt="Imgr" src="/img/moneyview.png" />
                        
                    </div>
                    <div className={classes.pbox}></div>
                    <h1 id="section-2_2" style={{fontSize:"24px"}} className={classes.atitle}>Quantitative Analysis.</h1>
                    <p style={{fontFamily:"Averta CY-ibold"}}> Reason to Take Quick loans (Online Blogs and Articles).</p>
                    <p>Sometimes, when you least expect it, a situation arises that requires you to urgently arrange 
                        for a certain sum of money, which you may not have at your disposal. In such situations, 
                        when there is absolutely no time to lose, an instant loan can provide you with the perfect financial boost in the most convenient and hassle-free manner. 
                        Instant loans can be used for any purpose like house repairing, parties, travel, or for emergency. </p>
                    <p>Instant loans are very helpful when we have sudden money problems in an unexpected situation. Instant loans can be used for any purpose like house repairing, parties, travel or for an emergency situation. There is no restriction for the loan usage. The name itself satisfies that instant loans are taken for instant situations. This can be taken without disturbing the regular deposit or savings. The repayment amount of loan depends on the financial status of the person who takes loan and the period of time.</p>
                    <p style={{fontFamily:"Averta CY-ibold"}}> Most Asked Question About Quick loans (Online Blogs and Articles).</p>
                    <ul style={{listStyleType: "decimal", listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-Regular", fontSize: "18px",  padding : "15px 0px 0 20px"}}> What is a quick loan app?</li>  
                        <li style={{fontFamily:"Averta CY-Regular" ,fontSize: "18px", padding : "0 0 0 20px" }}> Who can take a quick loan?</li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>What are the documents required for a quick loan app?</li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>  Is it safe to use a quick loan app? </li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}> How do you apply for such a loan? </li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}> Where can I find a quick loan app? </li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}> What can I use a quick loan app for? </li>  
                        <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>  How long are the repayment tenures? </li>  
                    </ul>
                        <h1  id="section-2_3" style={{fontSize:"24px"}} className={classes.atitle}>Understanding Target User.</h1>
                        <ul style={{listStyleType: "circle", listStylePosition: "inside"}}>
                            <li style={{fontFamily:"Averta CY-Regular", fontSize: "18px",  padding : "15px 0px 0 20px"}}> Our Target User is between age 18-30 Mostly male ,And having low or no credit score at lower end and moderate credit score at higher end, they have less finance but more Potential for growth, </li>  
                            <li style={{fontFamily:"Averta CY-Regular" ,fontSize: "18px", padding : "0 0 0 20px" }}>Having low attention span, and less knowledge of in-depth things, and prefer simple language to understand things.</li>  
                            <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Keep their selves up to date with latest internet trends, news.</li>  
                            <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Understand  basic Technology, Mostly Use Phone for browsing internet. </li>  
                            <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Purchase things before doing online research from multiple source,  and wise with spending. </li>   
                        </ul>
                        <h1 id="section-3"  className={classes.atitle}>Research Conclusion.</h1>
                        <ul style={{listStyleType: "circle", listStylePosition: "inside"}}>
                            <li style={{fontFamily:"Averta CY-Regular", fontSize: "18px",  padding : "15px 0px 0 20px"}}> User&apos;s primary motive to take quick loan is in emergency situation.   </li>  
                            <li style={{fontFamily:"Averta CY-Regular" ,fontSize: "18px", padding : "0 0 0 20px" }}>Compotator&apos;s targeting user&apos;s problem by providing them solutions and answers. </li>  
                            <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>landing page of website need to clear in providing information in fewer steps possible .</li>  
                            <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Gen-Z user&apos;s have lowest attention span and tend to compare when choosing service   </li>  
                            <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>User fill flustered if things are radically different it makes difficult for user&apos;s to find what they looking for. (due to mental models) </li>   
                        </ul>
                        <h1 id="section-4" className={classes.atitle}>Key Goals.</h1>
                        <ul style={{listStyleType: "circle", listStylePosition: "inside"}}>
                            <li style={{fontFamily:"Averta CY-Regular", fontSize: "18px",  padding : "15px 0px 0 20px"}}> Provide information that our target User will understand without any confusion and hassle.  </li>  
                            <li style={{fontFamily:"Averta CY-Regular" ,fontSize: "18px", padding : "0 0 0 20px" }}>Adding Element that Gain User&apos;s Attention & Trust.</li>  
                            <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Has Unique Differentiation than Competitor&apos;s website.</li>  
                            <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>Information has to be understandable in few sentence.</li>  
                            <li style={{fontFamily:"Averta CY-Regular",fontSize: "18px", padding : "0 0 0 20px" }}>information about product is presented to user in minimum steps possible due to low attention span.</li>  
                        </ul>
                    <div className={classes.pbox}></div>
                    <div className={classes.abimg}>
                        <p style={{fontFamily:"Averta CY-iRegular", paddingBottom : "20px"}}>RoadMap</p>
                        <Image width={1920} height={1177} className={classes.abimage} alt="Imgr" src="/img/flow.png" />   
                    </div>
                    <div className={classes.pbox}></div>
                    <h1 id="section-5" style={{ paddingBottom : "20px"}} className={classes.atitle}>Branding, Color and Font</h1>
                    <div className={classes.abimg}>
                        <Image style={{width:"40vw"}} width={1920} height={1177} className={classes.abimage} alt="Imgr" src="/img/brand.png" />   
                    </div>
                    <div className={classes.dbox}></div>
                    
                    <h1 id="section-6" className={classes.atitle}>Final Design.</h1>
                    <div className={classes.dbox}></div>
                    <button className={classes.imgbtn} onClick={() => sweb(web === true ? false : true)}>{web === true ? "Show Phone Preview" : "Show website preview"}</button> 
                    
                    <div className={classes.fimage}> 
                    
                    {web === true ?
                    
                    <div className={classes.phonebox}>   
                        <button  className={classes.stbtn} onClick={() => sstt(!stt)}>Figma Prototype <span  > 
                        <motion.div animate={{rotate:stt ? 225 : 45,  }} className={classes.arrow}></motion.div>  
                        </span></button>
                        <div style={{overflow:"hidden",display:"flex", flexDirection: "column", alignItems: "center"}}>
                        <motion.div style={{ zIndex: 1}} transition={{ ease: "easeOut", duration: 0.4 }} animate={{y:stt ? 6 : -310,height:stt ? "auto" : 0,}}  className={classes.stateap} >
                            <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} className={classes.figfrm} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWhmzTJKWBPs5DJ2D2KiEce%2FFlexPay%3Fpage-id%3D50%253A34%26type%3Ddesign%26node-id%3D1266-557%26viewport%3D1021%252C884%252C0.16%26t%3Dz1lSa1H7XPAzwD1w-1%26scaling%3Dscale-down%26starting-point-node-id%3D1266%253A557%26mode%3Ddesign" allowFullScreen></iframe>
                        </motion.div>
                        <Skipbt condit={stt} section= "#section-7"/>
                        </div>
                        <div>
                        <Image width={1920} height={10380} className={classes.fnimgs} alt="Imgr" src="/img/dexpay.png" />
                        </div>
                    </div>
                    :
                    <div className={classes.phonebox}> 
                        <button className={classes.stbtn} onClick={() => sstt1(!stt1)}> Figma Prototype <span  > 
                        <motion.div animate={{rotate:stt1 ? 225 : 45,  }} className={classes.arrow}></motion.div>  
                        </span></button>
                        <div style={{overflow:"hidden", display:"flex", flexDirection: "column", alignItems: "center"}}>
                        <motion.div style={{ zIndex: 1}} transition={{ ease: "easeOut", duration: 0.4 }} animate={{y:stt1 ? 6 : -310,height:stt1 ? "auto" : 0,}}  className={classes.stateap} >
                            <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} className={classes.figfrmm} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWhmzTJKWBPs5DJ2D2KiEce%2FDexpay%3Fpage-id%3D1152%253A73%26type%3Ddesign%26node-id%3D1386-150%26viewport%3D-3512%252C-632%252C0.28%26t%3DOc2c4CV4BizwDNrX-1%26scaling%3Dscale-down%26starting-point-node-id%3D1386%253A150%26mode%3Ddesign" allowFullScreen></iframe>
                        </motion.div>
                        <Skipbt condit={stt1} section= "#section-7"/>
                        </div>
                    <div >
                    <Image width={1920} height={1177} className={classes.fnimgsm} alt="Imgr" src="/img/dexpaym.png" />
                    </div>
                    </div>
                    }
                </div> 
                <div className={classes.dbox}></div>
                <h1 id="section-7" className={classes.atitle}>Conclusion and Learning.</h1>
                <p>I approached this design with new aesthetics in mind. For that purpose, I learned 3D modeling and rendering in Blender to create interactive and modern 3D graphics. This resulted in a very unique design that stands out among competitors. It&apos;s not just about making things look good; it&apos;s also about effectively communicating the product to site visitors with the goal of providing a unique experience that they won&apos;t easily forget. I always strive to bring new and creative ways to solve problems. For that reason, I never stop learning and applying new techniques to my designs to make them more unique</p>
                <p> </p>
                </div>

                <div className={classes.endbox}>
                <div style= {{ position :"relative", top:"10vh", left: "40vw"}} className={classes.backbtn}>
                <a onMouseEnter={() => shov(!hov)} onMouseLeave={() => shov(!hov)} href="./qanda"> Next Project &nbsp; <span>
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