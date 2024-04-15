import React from "react";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Pagination } from "react-bootstrap";
import { useState,useEffect } from "react";
const Screenplay = () => {
    const pageContent = [
        {
            elements:[
              {type:"title" , content:"Define Screenplay"},
              {type:"text" ,content:"A screenplay is a written document that serves as the foundation for a film. It is a detailed and formatted narrative that outlines the story, characters, dialogue, and other essential elements necessary for the production of a movie. Screenplays are crucial in the filmmaking process, as they provide a blueprint for directors, actors, and other crew members to bring the story to life on screen.Structure of a Screenplay:\n A standard screenplay is divided into three acts.\n The first act introduces the main characters and sets up the story's central conflict.\n The second act develops the plot, explores character relationships, and builds tension.\n The third act resolves the conflict and concludes the story. Each page of a screenplay typically represents one minute of screen time, making the average screenplay around 90 to 120 pages.\n\nElements of a Screenplay:\n 1.Scene Headings (or Slug Lines):\n These specify the location and time of day for each scene.\n Example: INT. LIVING ROOM - NIGHT\n\n 2.Action Lines:\n Descriptions of the physical actions and events in a scene.\n Example:\n John nervously paces around the room, glancing at the clock.\n\n 3.Characters and Dialogue:\n Characters are introduced with capital letters, and their dialogue is written beneath their names.Example:\n JOHN What are we going to do?\n\n 4.Transitions:\n Used to indicate a change in time or location, such as CUT TO: or FADE IN:\n\n 5.Parentheticals:Additional direction for the actor's delivery of a line.\n Example: SARAH   (Whispering) Let's get out of here.\n\n  Example of a Screenplay Excerpt:\n\n INT. COFFEE SHOP - DAY The bell jingles as JANE enters, searching for a familiar face. She spots her friend, LISA, sitting by the window.\n JANE : (smiling) Hey, Lisa! Long time no see.\n LISA : (excited) I know! How have you been?\n They exchange pleasantries and dive into conversation, creating an engaging dialogue that reveals their personalities and advances the plot.\n\n  Role in Filmmaking:\nA screenplay is the foundation of a film, providing the essential framework for directors, cinematographers, actors, and other crew members. It serves as a communication tool, guiding the collaborative efforts of the filmmaking team to translate the written words into visual and auditory elements on screen. A well-crafted screenplay ensures a cohesive and compelling narrative, setting the tone for a successful cinematic experience.\n\n  In conclusion, a screenplay is a vital element in the filmmaking process, serving as the roadmap that transforms a story from the page to the screen. Its meticulous structure and detailed descriptions guide the creative decisions of the filmmaking team, making it an indispensable tool in the world of cinema. " },
              {type:"video",url:"https://www.youtube.com/embed/6PLSJBTzaGw"},  
              // {type:"image",content:"first import"},  
              // {type:"text" ,content:"fhudsfhgfuhs"},
            ],
        },
        {
            elements:[
              {type:"title" , content:"The Storytelling Power of Screenplays"},
              {type:"text" ,content:"Screenplays possess a unique power to captivate audiences and evoke emotions, serving as the heartbeat of any successful film. The combination of visual and narrative elements in a screenplay allows for a profound storytelling experience, engaging viewers on both intellectual and emotional levels.\n\n 1. Visual Storytelling:\nScreenplays transcend mere words on a page by providing a visual roadmap for filmmakers. Descriptions of settings, character actions, and visual motifs guide directors and cinematographers in crafting a compelling visual narrative. For example, in the screenplay for The Shawshank Redemption, the vivid description of Andy's escape through a sewage pipe creates a visceral image that resonates with the audience.\n\n 2. Emotional Resonance:\nScreenplays excel at tapping into human emotions. Well-crafted characters and their arcs, along with carefully scripted dialogue, allow audiences to connect emotionally with the story. In Forrest Gump, the screenplay navigates through Forrest's life, eliciting a rollercoaster of emotions as audiences witness his triumphs and heartbreaks.\n\n 3. Pacing and Tension:\nScreenplays are masterful in controlling pacing and building tension. Through the strategic use of scene structure and dialogue, writers can manipulate the rhythm of the story. The screenplay for The Dark Knigh expertly builds tension in the interrogation scene between Batman and the Joker, showcasing the power of dialogue-driven suspense.\n\n  4. Character Development:\nScreenplays breathe life into characters, providing actors with the tools to portray multidimensional individuals. In The Godfather, the screenplay meticulously crafts the transformation of Michael Corleone from a reluctant outsider to a ruthless leader, illustrating the profound impact of well-developed characters on the audience.\n\n  5. Theme and Subtext:\nScreenplays often incorporate underlying themes and subtext that add depth to the narrative. Eternal Sunshine of the Spotless Mind explores the complexities of love and memory, using the screenplay to weave a story that resonates with audiences on a philosophical and emotional level.\n\n  6. Unforgettable Moments:\nIconic moments in film often originate from powerful screenplay elements. The Here's looking at you, kid line from Casablanca is etched into cinematic history, a testament to the screenplay's ability to create unforgettable and resonant moments that linger in the minds of audiences.   In essence, screenplays wield a unique storytelling power by seamlessly blending visual and narrative elements. Through vivid descriptions, emotionally charged dialogue, and meticulous pacing, screenplays create an immersive experience that resonates with audiences long after the credits roll. They are the foundation upon which filmmakers build worlds, characters, and emotions, making them an indispensable force in the art of cinematic storytelling. "},
              {type:"video",url:"https://www.youtube.com/embed/XGUVkOmPTA"},  
              // {type:"image",content:"first import"},  
              
            ],
        },
        {
            elements:[
              {type:"title" , content:"Concept and Theme in Screenwriting: Navigating the Narrative Compass"},
              {type:"text" ,content:"A strong central concept and theme are the guiding forces that shape the essence of a screenplay, providing a narrative compass for both the writer and the audience. These elements not only define the story's core but also contribute to its resonance, coherence, and lasting impact.\n\n 1. Concept:\n The concept is the foundation upon which a screenplay is built. It encapsulates the unique idea or premise that distinguishes the story. A compelling concept serves as the hook, drawing audiences into the narrative. Consider the concept of The Matrix, where a simulated reality deceives humanity, questioning the nature of existence. This concept not only captivates viewers but also lays the groundwork for exploring profound philosophical and existential themes.\n\n  2. Importance of a Strong Concept:\n A strong concept is the initial promise a screenplay makes to its audience. It sets expectations, generates interest, and forms the backbone of marketing and promotional efforts. In the case of Jurassic Park, the concept of resurrecting dinosaurs through genetic engineering not only fueled the film's excitement but also explored the ethical implications of playing with nature.\n\n  3.Theme:\nWhile the concept provides the story's premise, the theme delves into its underlying meaning and messages. Themes are universal truths, philosophical inquiries, or moral lessons embedded in the narrative. In The Shawshank Redemption, the theme of hope prevails throughout, transcending the prison setting and resonating with audiences on a profound emotional level.\n\n  4.Role of Theme in Storytelling:\nThemes lend depth and resonance to a screenplay, elevating it beyond a mere sequence of events. They provide a unifying thread that connects characters, plot points, and the overall narrative. In The Godfather, the theme of power, loyalty, and the consequences of a criminal life enriches the story, transforming it into an epic exploration of the human condition.\n\n 5. Crafting a Central Theme:\n A central theme guides character arcs, influences plot choices, and shapes the overall narrative structure. Writers often use the theme as a compass to navigate the story's complexities. In Eternal Sunshine of the Spotless Mind, the theme of memory and the impermanence of relationships guides the narrative, creating a poignant exploration of love and loss.\n\n 6. Cohesion and Impact:\n A strong concept and theme contribute to the screenplay's cohesion, ensuring that every scene, character, and dialogue serves a purpose in reinforcing the central ideas. This cohesion enhances the impact of the story on the audience. Christopher Nolan's Inception seamlessly weaves the concept of dreams within dreams with the theme of subjective reality, creating a mind-bending narrative that challenges perceptions.\n\n  7.Long-lasting Impression:\n Screenplays with a robust concept and theme have the potential for a lasting cultural impact. They resonate with audiences across time and cultural boundaries. The enduring legacy of Star Wars lies not only in its space-fantasy concept but also in its timeless theme of the hero's journey and the battle between good and evil.\n\n In conclusion, a strong central concept and theme are the guiding stars that navigate the intricate waters of screenplay writing. They define the story, provide meaning, and elevate the narrative from a mere sequence of events to a resonant and impactful cinematic experience. As writers embark on the journey of crafting screenplays, embracing the power of a compelling concept and theme ensures that their stories leave an indelible mark on the hearts and minds of audiences.\n "},
              {type:"video",url:"https://www.youtube.com/embed/9ELleu9J05g"},  
              // {type:"image",content:"first import"},  
              // {type:"text" ,content:"fhudsfhgfuhs"},
            ],
        },
        
        {
            elements:[
              {type:"title" , content:"Character Development in Screenwriting: Crafting Compelling and Multidimensional Characters"},
              {type:"text" ,content:"In the realm of screenplay writing, the art of character development is paramount. Compelling characters form the emotional core of a story, driving audience engagement and empathy. To achieve this, writers delve into the intricacies of crafting characters with reliable flaws, genuine desires, and transformative arcs.\n\n 1. Reliable Flaws:\n Flawed characters are relatable characters. These imperfections add depth, humanity, and authenticity to the narrative. Take, for instance, Tony Stark in Iron Man. His arrogance and ego serve as reliable flaws that not only make him more relatable but also set the stage for his transformative journey towards humility and self-discovery.\n\n 2. Genuine Desires:\nCharacters are defined by their desires, whether they be external goals or internal yearnings. These desires propel the story forward and provide audiences with a reason to invest emotionally. In The Pursuit of Happyness, Chris Gardner's genuine desire to provide a better life for his son becomes the driving force behind the narrative, creating a powerful emotional connection\n\n 3. Complex Motivations:\nCharacter motivations should be nuanced and multifaceted. Exploring the layers of a character's psyche adds richness to the storytelling. In Breaking Bad, Walter White's descent into the world of crime is not driven solely by financial concerns but also by his desire for power and a sense of significance, creating a complex and riveting character.\n\n  4.Arcs and Transformations:\nCompelling characters undergo significant arcs and transformations throughout the story. These arcs showcase growth, change, or even tragic decline, offering a dynamic and satisfying narrative journey. In The Lion King, Simba's transformation from a carefree cub to a reluctant leader, overcoming guilt and embracing his destiny, exemplifies a well-crafted character arc.\n\n 5. Consistency and Change:\nWhile characters evolve, maintaining consistency in their core traits is crucial. Audiences should recognize the character despite the changes they undergo. In Casablanca, Rick Blaine's initial cynicism gives way to selflessness without compromising the essence of his character, creating a powerful and enduring protagonist.\n\n  6.Internal Conflicts:\nInternal conflicts add layers of complexity to characters. The struggle between conflicting desires or beliefs creates tension and intrigue. In The Dark Knight, Batman's internal conflict between justice and the temptation to break his moral code, as presented by the Joker, adds depth to the character and elevates the film's thematic exploration.\n\n 7. Emotional Resonance:\nUltimately, well-developed characters evoke emotional resonance. Audiences should empathize with their struggles, celebrate their victories, and mourn their losses. In Forrest Gump, Forrest's genuine innocence and unwavering kindness create an emotional connection that transcends the screen, making him a memorable and beloved character.\n\n 8. Dialogue as a Window to Character:\nCharacter development extends to dialogue, which serves as a window into their personalities. Each character should have a distinct voice and manner of expression. In The Social Network, the rapid-fire and intellectual dialogue of Mark Zuckerberg contrasts sharply with the measured and strategic language of Eduardo Saverin, highlighting their differences.\n\n "},
              {type:"video",url:"https://www.youtube.com/embed/TGWTlRnDe0w"},  
              // {type:"image",content:"first import"},  
              {type:"text" ,content:"In summary, character development is an intricate and essential aspect of screenplay writing. Crafting characters with reliable flaws, genuine desires, and transformative arcs elevates the storytelling experience, fostering audience connection and creating narratives that resonate long after the screen fades to black. As screenwriters embark on the journey of character creation, they wield the power to shape unforgettable individuals that breathe life into the cinematic tapestry."},
            ],
        },
        {
            elements:[
              {type:"title" , content:"Plot Structure in Screenwriting: Navigating Narratives with the Hero’s Journey and Three-Act Structure"},
              {type:"text" ,content:"Effective plot structure is the backbone of a compelling screenplay, guiding audiences through a journey of conflict, resolution, and transformation. Two commonly employed frameworks are the Hero's Journey and the Three-Act Structure, each offering a blueprint for constructing engaging and satisfying narratives.\n\n 1.The Hero's Journey:\n The Hero's Journey, popularized by Joseph Campbell, outlines a universal storytelling template that follows a hero through distinct stages of adventure and self-discovery. This structure is evident in classics like The Lord of the Rings and The Matrix. The journey typically includes stages such as the Call to Adventure, Crossing the Threshold, Tests and Trials, and the Return with the Elixir.\n\n Application Example -\nThe Matrix:\n - Call to Adventure:\nNeo, a computer hacker, receives a mysterious message leading him to a new reality.\n- Crossing the Threshold:\nNeo takes the red pill, entering the world of the Matrix.\n - Tests and Trials:\nNeo undergoes intense training and faces challenges to become The One.\n- Return with the Elixir:Neo returns to the Matrix with newfound abilities, fulfilling his destiny.\n\n 2. Three-Act Structure:\nThe Three-Act Structure divides a screenplay into three parts: Setup, Confrontation, and Resolution. Each act serves a specific purpose in advancing the plot and character arcs. This structure is prevalent in films like Casablanca and The Godfather.\n - Act 1 (Setup):Introduces characters, setting, and the central conflict.\n - Act 2 (Confrontation):Develops the conflict, introduces complications, and intensifies the story.\n- Act 3 (Resolution):Resolves the conflict, provides closure, and concludes character arcs.\n\n Application Example -\n Casablanca:\n - Setup:We're introduced to Rick's Café, Rick Blaine's character, and the political tensions in Casablanca.\n - Confrontation:Rick's past love, Ilsa, reappears with her husband, escalating the emotional and political stakes.\n - Resolution:Rick sacrifices his love for the greater good, resolving the central conflict and completing his character arc.\n\n 3. Hybrid Approaches:\nMany successful screenplays combine elements of both structures, creating a hybrid approach that maximizes narrative impact. Christopher Nolan's Inception intertwines the Hero's Journey with complex layers of the Three-Act Structure, creating a multi-dimensional and immersive storytelling experience.\n\nKey Considerations:\n -Character Arcs:Both structures emphasize character growth and transformation. Characters evolve through challenges, learning valuable lessons along the way.\n -Tension and Resolution:Effective plot structures build tension progressively, leading to a satisfying resolution. This ensures a fulfilling experience for the audience.\n- Pacing:Understanding the pacing inherent in each structure is crucial. Well-timed revelations, twists, and climactic moments contribute to a dynamic narrative flow.\n  "},
               {type:"video",url:"https://www.youtube.com/embed/v3QsRuqz49I"},  
              // {type:"image",content:"first import"},  
              {type:"text" ,content:"In conclusion, the Hero's Journey and Three-Act Structure provide versatile frameworks for screenwriters to construct engaging and impactful plots. Whether embarking on a hero's epic quest or navigating the three fundamental acts of setup, confrontation, and resolution, these structures serve as invaluable tools in the art of crafting compelling stories for the screen. Successful screenplays often arise from a thoughtful blend of these structures, allowing writers to create narratives that resonate with audiences on both emotional and intellectual levels."},
            ],
        },
        {
            elements:[
              {type:"title" , content:"Conflict and Tension in Screenwriting: The Catalysts of Compelling Narratives"},
              {type:"text" ,content:" 1. Types of Conflict:\nConflict comes in various forms, each contributing to the narrative's richness. External conflicts involve characters grappling with tangible obstacles such as adversaries, nature, or societal challenges. In The Dark Knight, Batman faces external conflict from the Joker's anarchic schemes. Internal conflicts, on the other hand, delve into characters' psychological or moral struggles. In Black Swan, Nina's internal conflict with her sanity adds layers of tension to the story.\n\n  2. Driving the Narrative:\nConflict serves as the narrative engine, initiating plot progression and character development. In The Shawshank Redemption, the central conflict revolves around Andy Dufresne's wrongful imprisonment. This conflict not only shapes the plot but also drives Andy's resilience, friendships, and eventual escape.\n\n 3. Creating Emotional Investment:\nAudiences connect with characters through their struggles. When characters face adversity, audiences empathize, creating emotional investment. Forrest Gump thrives on conflict, as Forrest navigates challenges such as prejudice, war, and loss. Each conflict enhances emotional resonance, making the character's journey more compelling.\n\n 4. Building Tension:\nConflict inherently generates tension, a crucial element for sustaining audience interest. Tension arises from uncertainty, opposing forces, and the anticipation of resolution. Alfred Hitchcock, a master of tension, famously stated that there is no terror in the bang, only in the anticipation of it. In Jaws, the conflict between the characters and the unseen shark builds tension, culminating in suspenseful moments.\n\n 5. Character Relationships:\n Conflict often arises in interpersonal relationships, adding layers to characters and their dynamics. In Pulp Fiction, conflicts between characters intersect, creating a mosaic of tension and intrigue. These conflicts propel the narrative, revealing aspects of the characters and their motivations.\n\n 6. Resolving Conflict:\nThe resolution of conflict is equally crucial. Whether through triumph, tragedy, or transformation, resolving conflicts provides narrative closure. In Casablanca, Rick's internal and external conflicts find resolution as he sacrifices his love for Ilsa, contributing to the film's enduring impact.\n\n 7. Multiple Layers of Conflict:\nComplex narratives often incorporate multiple layers of conflict, intertwining external and internal struggles. The Godfather weaves conflicts within the Corleone family, between rival mafia factions, and within individual characters. This intricate web of conflict contributes to the film's depth and complexity.\n\n 8. Sustaining Interest:\nWhile conflict is essential, its sustained impact relies on pacing and variety. A well-structured screenplay strategically introduces and resolves conflicts, preventing monotony and ensuring a dynamic narrative flow. The television series Breaking Bad excels in maintaining tension by consistently introducing new conflicts and challenges for its characters.\n"},
              {type:"video",url:"https://www.youtube.com/embed/rS_-UeTzZ-Y"},  
              // {type:"image",content:"first import"},  
              {type:"text" ,content:"In conclusion, conflict is the lifeblood of screenplay writing, infusing stories with drama, tension, and emotional resonance. It propels characters through transformative journeys, sustains audience interest, and forms the foundation of memorable narratives. Skillfully navigating conflicts, be they external or internal, ensures that screenplays resonate with audiences, keeping them on the edge of their seats and invested in the characters' struggles and triumphs."},
            ],
        },
        {
            elements:[
              {type:"title" , content:"Scene Anatomy in Screenwriting: Crafting Engaging Narratives Through Structure and Conflict"},
              {type:"text" ,content:"A scene in a screenplay is a microcosm of storytelling, with each element working harmoniously to advance the plot, develop characters, and maintain audience engagement. Breaking down a scene into its essential components – beginning, middle, end, purpose, and conflict – provides a framework for constructing compelling and impactful moments within the larger narrative.\n\n 1. Beginning of a Scene:\The beginning of a scene establishes the context and sets the stage for what follows. It introduces the setting, characters, and the initial situation. This phase should grab the audience's attention and create a sense of anticipation. In Inglourious Basterds, the opening scene in the dairy farm begins with tension as the audience wonders if the farmer is harboring Jews.\n\n 2. Middle of a Scene:\nThe middle section of a scene is where the core action and development occur. Characters engage in dialogue, confrontations, or actions that drive the scene forward. This is the heart of the scene, where conflicts intensify, relationships evolve, and key information is revealed. In The Social Network, the middle of the deposition scene is a verbal battle between Mark Zuckerberg and his accusers, unraveling the complexities of the narrative.\n\n 3. End of a Scene:\nThe conclusion of a scene provides resolution, a shift in dynamics, or a cliffhanger that propels the narrative into the next sequence. It should leave the audience with a sense of closure or anticipation. In the final scene of The Silence of the Lambs, the phone call between Clarice and Dr. Lecter ends with Lecter's chilling promise, creating anticipation for future development\n\n 4. Purpose of a Scene:\nEvery scene should have a clear purpose in advancing the overall narrative. Whether it's revealing crucial information, developing character relationships, or introducing a plot twist, the scene's purpose aligns with the broader storytelling goals. In The Matrix, the scene where Morpheus offers Neo the choice between the red and blue pills serves the purpose of initiating Neo into the truth of the Matrix.\n\n 5. Conflict in a Scene:\nConflict is the engine that drives scenes, providing tension, drama, and character growth. It can manifest in various forms, including interpersonal clashes, moral dilemmas, or external challenges. In the bar scene from Good Will Hunting, the conflict arises between Will Hunting and a Harvard student, showcasing Will's intellectual prowess and inner turmoil.\n\n How They Work Together:\nThese elements work in tandem to create a cohesive and engaging scene. The beginning hooks the audience, the middle sustains their interest through conflict and development, and the end leaves them eager for more. The purpose ensures that each scene serves a meaningful role in the larger narrative tapestry.\n\n Example - The Restaurant Scene in When Harry Met Sally:\n - Beginning:The scene begins with Harry and Sally arriving at the restaurant, establishing the setting for their dinner.\n - Middle:The core of the scene is the witty and memorable conversation about the possibility of men and women being friends without romantic entanglements.\n - End:The scene concludes with Sally's simulated orgasm, creating a humorous and unexpected resolution.\n - Purpose:The scene serves to deepen the relationship between the characters and explore the theme of friendship evolving into something more. - Conflict:The underlying conflict is the tension and uncertainty surrounding the potential romantic feelings between Harry and Sally.\n "},
              {type:"video",url:"https://www.youtube.com/embed/6PLSJBTzaGw"},  
              // {type:"image",content:"first import"},  
              {type:"text" ,content:"In conclusion, understanding the anatomy of a scene is pivotal in crafting a screenplay that captivates audiences. By meticulously constructing the beginning, middle, and end, ensuring a clear purpose, and infusing conflict, screenwriters can weave scenes that contribute to the narrative's overall impact and resonance. Each scene becomes a building block, contributing to the dynamic flow of the story and keeping audiences invested in the unfolding drama."},
            ],
        },
        {
            elements:[
              {type:"title" , content:"Dialogue for Purpose in Screenwriting: Crafting Conversations with Intent, Depth, and Authenticity"},
              {type:"text" ,content:"Dialogue is a powerful tool in screenwriting, serving multiple purposes beyond mere conversation. Well-crafted dialogue advances the plot, reveals character traits, and enhances the overall cinematic experience. Balancing purpose, depth, and authenticity is essential to create engaging and impactful dialogue within a screenplay.\n\n 1. Advancing the Plot:\nEffective dialogue is a driver of the narrative, providing essential information and progressing the story. In The Usual Suspects, the dialogue in the police lineup scene serves a dual purpose. It not only introduces the main characters but also conceals key details that become crucial plot points later in the film. Each line contributes to the unfolding mystery, pushing the plot forward.\n\n 2. Revealing Character:\nDialogue is a window into a character's personality, beliefs, and motivations. In The Big Lebowski, the character of The Dude is defined by his distinctive way of speaking. His casual, laid-back dialogue not only establishes his demeanor but also contrasts sharply with the eccentricities of the world around him, creating a memorable and authentic character.\n\n 3. Subtext and Layering:\nMeaning in dialogue often extends beyond the surface, relying on subtext to convey deeper emotions and intentions. In Pulp Fiction, the conversation between Vincent Vega and Mia Wallace at Jack Rabbit Slim's subtly explores their attraction, desires, and the complexities of their relationship. The dialogue operates on multiple levels, contributing to the film's richness.\n\n  4. Authenticity and Naturalism:\nWhile dialogue serves specific purposes, it should also sound natural and authentic. In Before Sunrise, the organic and spontaneous exchanges between Jesse and Céline feel genuine, enhancing the film's realism. Writers strive for dialogue that mirrors the way people speak while still serving the narrative's goals.\n\n 5. Economy of Words:\nEffective dialogue often embraces brevity and precision. In No Country for Old Men, Anton Chigurh's terse and ominous dialogue communicates volumes with minimal words. This economy of words not only enhances his enigmatic persona but also intensifies the suspense and unease within the scenes.\n\n 6. Character Dynamics:\nDialogue is a dynamic tool for showcasing relationships and character dynamics. The banter between Han Solo and Princess Leia in Star Wars: The Empire Strikes Back not only adds humor but also reveals the underlying tension and attraction between the characters. Each line contributes to the evolving dynamic of their relationship.\n\n  7. Establishing Tone:\nDialogue plays a pivotal role in setting the tone of a scene or film. In Goodfellas, the casual and profanity-laced conversations among mobsters not only create a gritty atmosphere but also establish the film's tone, immersing audiences in the world of organized crime.\n\n 8. Emotional Impact:\nWell-crafted dialogue has the power to evoke emotions. In the closing scene of Casablanca, Rick's farewell to Ilsa is iconic not just for its eloquence but also for the emotional weight it carries. The dialogue transcends words, becoming a memorable and emotionally resonant cinematic moment.\n "},
               {type:"video",url:"https://www.youtube.com/embed/jGCtUmBgWk"},  
              // {type:"image",content:"first import"},  
              {type:"text" ,content:"In conclusion, dialogue in screenwriting is a multifaceted tool that can shape plot, reveal character nuances, and elevate the cinematic experience. When crafted with purpose, depth, and authenticity, dialogue becomes an integral part of storytelling, creating moments that linger in the minds and hearts of audiences. Balancing the functional and artistic aspects of dialogue is the key to achieving a screenplay that not only advances the narrative but also captivates and connects with the audience on a profound level."},
            ],
        },
        {
          elements:[
           {type:"title", content:"Subtext and Show, Don’t Tell in Screenwriting: Crafting Nuanced Narratives through Implied Meaning and Visual Storytelling"},
           {type:"text", content:"Subtext and the principle of Show, Don't Tell are foundational concepts in screenwriting that elevate storytelling by allowing audiences to infer meaning, fostering engagement, and avoiding heavy-handed exposition. These techniques encourage writers to trust the audience's intelligence and create layered narratives that resonate on a deeper level.\n\n 1. Subtext in Dialogue:\nSubtext involves conveying underlying meaning beneath the surface of dialogue, allowing audiences to deduce emotions, motivations, or conflicts. In The Graduate, the famous line Plastics is more than a mere suggestion for a career path; it encapsulates societal expectations, existential angst, and the disconnection of the protagonist, Benjamin Braddock.\n\n 2. Visual Storytelling:\nShow, Don't Tell emphasizes the power of visual elements to convey information, emotion, and narrative beats without explicitly stating them. In the opening sequence of Up, the love story of Carl and Ellie is poignantly depicted through a silent montage, effectively conveying the passage of time, shared dreams, and the eventual loss without relying on explicit dialogue.\n\n 3. Subtext in Action:\nBeyond dialogue, subtext can permeate character actions and reactions. In The Godfather, the placement of an orange at the table hints at impending danger, creating an atmospheric and subtextual foreshadowing. The audience is left to interpret the symbolism without explicit exposition.\n\n 4. Emotional Complexity:\nUtilizing subtext allows for the exploration of emotional complexity. In Eternal Sunshine of the Spotless Mind, the characters undergo a process to erase memories of each other. The subtext here delves into the intricacies of love, loss, and the human desire to confront or escape emotional pain.\n\n 5. Avoiding Exposition Dumps:\nExposition dumps, where information is explicitly stated, can disrupt the flow of a screenplay. Subtext offers an alternative by integrating essential details naturally into the narrative. In Blade Runner, the visuals of a dystopian future, coupled with subtle references to replicants and artificial life, immerse the audience in the world without overt exposition.\n\n 6. Character Relationships:\nSubtext is particularly potent in conveying the nuances of relationships. In Lost in Translation, the evolving connection between Bob and Charlotte is expressed through unspoken moments, glances, and shared silences. The subtext allows the audience to feel the emotional depth of their connection without explicit declarations.\n\n 7. Cultural Context and Subtext:\n Subtext is also valuable in navigating cultural or historical contexts. In Get Out, the horror film directed by Jordan Peele, racial tensions are explored with layers of subtext, contributing to a thought-provoking and socially relevant narrative.\n\n "},
          {type:"video", url:"https://www.youtube.com/embed/wrR8ggeD4h4"},
          {type:"text", content:"In conclusion, subtext and the principle of Show, Don't Tell are essential tools in the screenwriter's arsenal, enabling the creation of nuanced, engaging, and immersive narratives. By trusting the audience's ability to interpret visual and verbal cues, writers can develop layered stories that resonate on both intellectual and emotional levels. These techniques not only add depth to characters and relationships but also contribute to the artistry of cinematic storytelling, allowing audiences to participate actively in the narrative exploration."}

          ],
        },
        {
          elements:[
         {type:"title", content:"Hooking the Reader: Crafting an Irresistible Opening Scene to Captivate Audiences"},
         {type:"text", content:"The opening scene of a screenplay is the writer's opportunity to captivate the reader's attention, setting the tone for the entire narrative and establishing a connection that keeps them eagerly turning pages. Crafting a compelling opening requires strategic choices and an understanding of the story's essence. Here are strategies to create a hook that pulls the reader into your screenplay:\n\n 1.Start in Medias Res:\nPlunge the audience into the middle of action or intrigue right away. This technique, known as in medias res, creates immediate engagement. In Pulp Fiction, Quentin Tarantino opens with a diner scene, sparking curiosity about the characters and their discussions. The audience is thrown into a compelling scenario without the need for extensive exposition.\n\n 2.Introduce a Mystery or Question: Pose a question or present a mystery that piques the reader's curiosity. In The Matrix, the audience is immediately confronted with a woman named Trinity pursued by mysterious agents. The enigma surrounding her situation raises questions that drive the audience to seek answers, pulling them into the story.\n\n 3.Establish an Intriguing Setting:\nPaint a vivid picture of the story's world. In Blade Runner, the opening scene showcases a dystopian, futuristic Los Angeles. The visual richness and atmosphere instantly immerse the audience, sparking interest in the unique world they are about to explore.\n\n 4.Create a Compelling Character:\nIntroduce a character whose charisma, complexity, or uniqueness immediately grabs attention. The iconic introduction of Indiana Jones in Raiders of the Lost Ark not only establishes his adventurous nature but also showcases his resourcefulness and charisma. Audiences are drawn to characters with compelling qualities.\n\n 5.Infuse Conflict or Tension:\nPlace characters in a situation of immediate conflict or tension. Alfred Hitchcock was a master of this technique, as seen in North by Northwest where the protagonist finds himself wrongfully accused and chased by mysterious agents. The suspense generated in the opening moments is irresistible.\n\n 6.Utilize Strong Visuals or Action:\nOpen with a visually striking or action-packed sequence. James Bond films are renowned for their dynamic and visually stunning openings. In Casino Royale, the thrilling parkour chase scene immediately grabs attention, showcasing the film's intensity and setting the tone for the espionage adventure.\n\n 7.Establish a Unique Tone or Voice:\nSet the tone for the entire screenplay through distinctive language or a unique narrative voice. The opening narration in Fight Club introduces the protagonist's disillusionment with modern life, immediately establishing a dark and satirical tone that defines the film.\n"},
         {type:"video", url:"https://www.youtube.com/embed/zDReQ3MZ8qo"},
         {type:"text", content:"In conclusion, hooking the reader in the opening scene is an artful blend of creativity, intrigue, and strategic choices. By immersing the audience in action, mystery, vivid settings, compelling characters, or unique tones, screenwriters can establish an immediate connection that compels readers to delve deeper into the unfolding narrative. The opening scene serves as a doorway to the world of the story, inviting readers on a journey they can't resist.\n"}

          ]
        }
    ];
    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const maxVisiblePages = 5;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  const renderPaginationButtons = () => {
    const buttons = [];
    const midPoint = Math.floor(maxVisiblePages / 2);
    if (currentPage <= midPoint + 1) {
      for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
        buttons.push(i);
      }
    } else if (currentPage >= totalPages - midPoint) {
      for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      for (let i = currentPage - midPoint; i <= currentPage + midPoint; i++) {
        buttons.push(i);
      }
    }

    return buttons.map((pageNumber) => (
      <Pagination.Item
        key={pageNumber}
        active={pageNumber === currentPage}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </Pagination.Item>
    ));
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const renderContent = () => {
    const currentPageData = pageContent[currentPage - 1];
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {currentPageData.elements.map((element, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              {element.type === "title" && (
                <h2 style={{ textAlign: "center" }}>{element.content}</h2>
              )}
              {element.type === "text" && (
                <div
                  className="msg"
                  style={{
                    textAlign: "justify",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                >
                  {" "}
                  {element.content}
                </div>
              )}
              {element.type === "image" && (
                <img
                  src={element.path}
                  style={{ marginBottom: "10px" }}
                  width={560}
                  height={315}
                />
              )}
              {element.type === "video" && (
                <div className="cen">
                  <iframe
                    width="560"
                    height="315"
                    src={element.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <SignedIn>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {renderContent()}
          <Pagination
            className="custom-pagination"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Pagination.Prev
              onClick={handlePrevClick}
              disabled={currentPage === 1}
            />
            {renderPaginationButtons()}
            <Pagination.Next
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>

  );
}
export default Screenplay;