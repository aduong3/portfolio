import { IoIosLink } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";
import UdemyLink from "./UdemyLink";

function Education() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-blue-300 sm:text-4xl">
        Education and Courses
      </h1>
      <div>
        <h2 className="text-lg font-semibold sm:text-xl">
          University of California, Merced
        </h2>
        <div className="flex items-center gap-1">
          <PiCertificate />
          <p>B.S in Computer Science and Engineering</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold sm:text-xl">Udemy Courses</h2>

        <UdemyLink
          to="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/"
          isCompleted={true}
        >
          <IoIosLink className="shrink-0" />
          JavaScript Algorithms and Data Structures Masterclass
          <span className="hidden sm:inline">| Colt Steele</span>
        </UdemyLink>
        <UdemyLink
          to="https://www.udemy.com/course/the-ultimate-react-course/"
          isCompleted={true}
        >
          <IoIosLink className="shrink-0" />
          The Ultimate React Course 2025{" "}
          <span className="hidden sm:inline">| Jonas Schmedtmann</span>
        </UdemyLink>

        <UdemyLink
          to="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
          isCompleted={true}
        >
          <IoIosLink className="shrink-0" />
          Node.js, Express, MongoDB & More: The Complete Bootcamp{" "}
          <span className="hidden sm:inline">| Jonas Schmedtmann</span>
        </UdemyLink>

        <UdemyLink
          to="https://www.udemy.com/course/understanding-typescript"
          isCompleted={true}
        >
          <IoIosLink className="shrink-0" />
          Understanding TypeScript{" "}
          <span className="hidden sm:inline">| Maximilian Schwarzmüller</span>
        </UdemyLink>
        <UdemyLink
          to="https://www.udemy.com/course/javascript-advanced/"
          isCompleted={true}
        >
          <IoIosLink className="shrink-0" />
          Advanced JavaScript{" "}
          <span className="hidden sm:inline">| Asim Hussain</span>
        </UdemyLink>
        <UdemyLink
          to="https://www.udemy.com/course/postgresqlmasterclass/"
          isCompleted={false}
        >
          <IoIosLink className="shrink-0" />
          PostgreSQL Bootcamp{" "}
          <span className="hidden sm:inline">| Adnan Waheed</span>
        </UdemyLink>
        <UdemyLink
          to="https://www.udemy.com/course/docker-kubernetes-the-practical-guide"
          isCompleted={false}
        >
          <IoIosLink className="shrink-0" />
          Docker & Kubernetes: The Practice Guide [2025 Edition]{" "}
          <span className="hidden sm:inline">| Maximilian Schwarzmüller</span>
        </UdemyLink>
        <UdemyLink
          to="https://www.udemy.com/course/github-actions-the-complete-guide"
          isCompleted={false}
        >
          <IoIosLink className="shrink-0" />
          GitHub Actions - The Complete Guide{" "}
          <span className="hidden sm:inline">| Maximilian Schwarzmüller</span>
        </UdemyLink>
      </div>
    </div>
  );
}

export default Education;
