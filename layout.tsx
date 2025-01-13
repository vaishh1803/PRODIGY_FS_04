import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
<script src="https://kit.fontawesome.com/f1ed3a95ea.js" crossOrigin="anonymous" defer></script>
      </head>
      <body className={`text-sm lg:text-base min-h-screen h-full bg-isabelline ${roboto.className}`}>
 </body>
    </html>
  );
 </main>
            {displayStory && <div className="fixed top-0 h-full z-20" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"}}>
                <i className="text-white m-8 cursor-pointer fa-solid fa-x" aria-hidden="true" onClick={() => {setStory(""); setDisplayStory(false);}}></i>
                <div className="my-20 lg:my-10 flex items-center lg:w-9/12 mx-auto">
                <div className="my-20 lg:my-8 flex items-center lg:w-7/12 mx-auto">
                    <video className="w-full border-y border-gray-700" controls autoPlay>
                        <source src={`/users/stories/${story}`} type="video/mp4" />
                    </video>
                  stories: string[],
    members: string[],
    messages: string[],
    medias: string[],
    createdAt: Date,
    updatedAt: Date,
    __v: number
    createdAt?: Date,
    updatedAt?: Date,
    __v?: number
}
                  members: string[],
    groupPicture: string,
    messages: string[],
    medias: string[],
    createdAt: Date,
    updatedAt: Date,
    __v: number
    createdAt?: Date,
    updatedAt?: Date,
    __v?: number
}
                    contacts: string[],
    conversations: string[],
    groups: string[],
    createdAt: Date,
    updatedAt: Date,
    __v: number
    createdAt?: Date,
    updatedAt?: Date,
    __v?: number
}
                  
                  
                  
