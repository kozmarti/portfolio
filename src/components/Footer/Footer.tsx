import { footerLinks, languages } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex min-h-[200px] flex-col justify-between overflow-hidden px-4 py-14 md:p-14">
      <div className="relative z-20 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h5 className="mb-8 flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-lg font-medium">Marta Kozma</span>
          </h5>
          <p className="text-tertiary-content">
          Focused on building thoughtful, innovative applications that solve real-world problems.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-tertiary-content hover:text-neutral transition-colors duration-300 hover:underline">
              {link.title}.
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex flex-col-reverse gap-10 md:grid md:grid-cols-2 md:gap-12">
        <div className="grid grid-cols-2 gap-4">
          <ul className="flex flex-col justify-end gap-4">
            {socials.map((item, index) => (
              <li key={index} className="cursor-pointer bg-transparent">
                <a
                  href={item.href}
                  className="text-neutral transition-color hover:text-neutral/50 h-full w-full duration-300">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-tertiary-content flex flex-col self-end text-right text-xs md:text-center">
            <span>© 2025 — Copyright</span>
            <span>All Rights reserved</span>
          </p>
        </div>

        <div className="flex flex-col justify-between gap-[50px] md:flex-row md:gap-8">
          <div className="space-y-10 md:self-end">
            <div className="flex flex-col">
              <h5 className="text-neutral mb-4 text-lg font-medium">Contact</h5>
              <a
                href="mailto:johndoe@gmail.com"
                className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
                web.martakozma@gmail.com
              </a>
            </div>
            <div>
              <div>
                <h5 className="text-neutral mb-4 text-lg font-medium">Location</h5>
                <address className="text-tertiary-content flex flex-col text-sm font-light">
                  <span>33000, Bordeaux</span>
                  <span>France</span>
                </address>
              </div>
            </div>
          </div>
          
          <div className="md:self-end">
            <p className="text-neutral mb-8 text-sm md:text-right pr-10">Spoken Languages</p>
            <div className="flex gap-8 md:gap-4 lg:gap-8">
              {languages.map(language => (
                <span
                  key={language}
                  className='text-neutral'>
                  {language}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
