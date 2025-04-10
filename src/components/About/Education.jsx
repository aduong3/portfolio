import { IoIosLink } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";
import UdemyLink from "./UdemyLink";

function Education() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold text-blue-300">
        Education and Courses
      </h1>
      <div>
        <h2 className="text-xl">University of California, Merced</h2>
        <div className="flex items-center gap-1">
          <PiCertificate />
          <p>B.S in Computer Science and Engineering</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-xl">Udemy Courses</h2>
        <UdemyLink
          to="https://www.udemy.com/share/101XY23@vrwwavEYfz3tW5391b0SCiTtazq9tfKtD5fniWuJdXzfog1DH2fcufTLYUc1wE7znA==/"
          isCompleted={true}
        >
          <IoIosLink />
          JavaScript Algorithms and Data Structures Masterclass
          <span className="hidden sm:inline">| Colt Steele</span>
        </UdemyLink>
        <UdemyLink
          to="https://www.udemy.com/share/108PTo3@FNEKhBxQiqlQ4Mxp_aC5Ameb_0h6D-TknOHhQtXgjOXQw-ml10hjWDyCZgB1GDqvNA==/"
          isCompleted={true}
        >
          <IoIosLink />
          The Ultimate React Course 2025{" "}
          <span className="hidden sm:inline">| Jonas Schmedtmann</span>
        </UdemyLink>

        <UdemyLink
          to="https://www.udemy.com/share/101Wv63@9ppfNf50jil3G3iE4VkRE30Md9WDQNHczJRtbgsAqU_k0UmYiHrcTd0JmyU_9Okr2w==/"
          isCompleted={true}
        >
          <IoIosLink />
          Node.js, Express, MongoDB & More: The Complete Bootcamp{" "}
          <span className="hidden sm:inline">| Jonas Schmedtmann</span>
        </UdemyLink>

        <UdemyLink
          to="https://www.udemy.com/share/101sTi3@ZetVJTLAEzRE9d5WxlnVKC_v6xnC8C8cMsXAFJPDYhb6H-Vd7OJqa8gJQG99rvc1hQ==/"
          isCompleted={true}
        >
          <IoIosLink />
          Understanding TypeScript{" "}
          <span className="hidden sm:inline">| Maximilian Schwarzmüller</span>
        </UdemyLink>
        <UdemyLink
          to="https://www.udemy.com/share/1041Y03@TiP2ASsWCoXDwg0ijYuxR9qul7fuGfa2ycfv5yobfEsiCGj3uGYGC8rUoEqq4pH5YQ==/"
          isCompleted={false}
        >
          <IoIosLink />
          PostgreSQL Bootcamp{" "}
          <span className="hidden sm:inline">| Adnan Waheed</span>
        </UdemyLink>
        <UdemyLink
          to="https://www.udemy.com/share/103Ia03@Bnd0VOCy8DZxo4kod2Dfntbl0ABJju_T2SPLRdoIHv1cnOXDA6TmhcquiAQ8dMeyTA==/"
          isCompleted={false}
        >
          <IoIosLink />
          Docker & Kubernetes: The Practice Guide [2025 Edition]{" "}
          <span className="hidden sm:inline">| Maximilian Schwarzmüller</span>
        </UdemyLink>
        <UdemyLink
          to="https://www.udemy.com/share/107oRA3@T7Sr5nKw_Gfh--RRApNnMOMeHHT0wEU37nLblf17gV6m7-MRLMM41jqmzt1mEaW4YQ==/"
          isCompleted={false}
        >
          <IoIosLink />
          GitHub Actions - The Complete Guide{" "}
          <span className="hidden sm:inline">| Maximilian Schwarzmüller</span>
        </UdemyLink>
      </div>
    </div>
  );
}

export default Education;
