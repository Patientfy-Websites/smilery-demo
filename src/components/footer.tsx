import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="px-6">
        <Container>
        {/* Top: Logo + description | Social */}
        <div className="flex items-start justify-between py-16">
          <div className="max-w-[30em]">
            <svg
              className="h-8 sm:h-7 w-auto text-white"
              viewBox="0 0 180 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <title>Smilery</title>
              <path d="M180 0.00628269L167.299 15.9664L164.62 19.1876C158.854 26.0922 145.917 25.3517 129.33 25.3517L5.12424 25.351L3.35276 21.8932L129.33 21.7511C133.568 21.6237 139.94 21.9246 145.822 21.5722C148.763 21.396 151.531 21.102 153.857 20.3257C156.225 19.5354 157.838 18.7002 159.281 17.3804C160.889 15.7723 162.073 14.3725 163.436 12.6895L152.267 0.013817L158.017 0.00802515L166.201 9.22897L173.579 0.0155595L180 0.00628269Z" fill="currentColor" />
              <path d="M107.215 18.5484H90.4341L90.4334 0.0170909L95.0501 0.00486908L95.0398 15.5873L107.219 15.6285L107.215 18.5484Z" fill="currentColor" />
              <path d="M86.6181 0.0109947H81.9532V18.5484H86.6181V0.0109947Z" fill="currentColor" />
              <path d="M46.6887 13.3347C46.4969 14.9951 45.0869 16.8834 44.0659 17.4759C42.8332 18.1919 41.6615 18.5329 38.2427 18.5329C29.0867 18.5329 1.77011 18.5639 1.77011 18.5639L0 14.8751L38.6123 14.8129C39.762 14.8129 41.9435 15.2165 42.462 13.2942C42.7592 12.1928 41.9139 11.2915 39.5142 10.9724L29.7421 9.69147C27.9837 9.4663 26.3329 9.01081 24.8111 8.15965C22.8337 7.05633 22.0376 4.55114 23.1779 2.5677C24.3613 0.509637 27.3832 0.00525367 29.9241 0.0110438L45.3236 0.0110193L45.3056 3.19753L29.7304 3.20911C28.3788 3.20911 27.1994 3.74309 27.1955 4.73641C27.1896 5.79665 28.5333 6.34671 29.9553 6.53006L40.6741 7.91518C44.109 8.3591 47.101 9.77248 46.6887 13.3347Z" fill="currentColor" />
              <path d="M77.5322 0.00691095L77.5398 18.5485H72.9898L72.9728 4.82467L68.3529 9.80675L63.7523 14.6241L54.5988 5.08715L54.6026 18.5485L50.0239 18.5484L50.0194 0.00707784L55.8412 0.0147938L63.7137 8.87394L72.1176 0.0149557L77.5322 0.00691095Z" fill="currentColor" />
              <path d="M146.347 11.1284C148.389 10.9643 150.267 10.4638 151.519 8.94745C153.248 6.85271 152.937 3.74277 151.104 1.79665C149.829 0.756355 148.344 0.0238016 146.607 0.0218716L130.65 0L130.68 18.5339L135.196 18.5628L135.219 11.416L141.342 11.4359L148.628 18.5657L154.011 18.531L146.347 11.1284ZM135.196 8.48038L135.221 2.82729L145.451 2.91929C146.859 3.00357 147.863 3.9969 147.863 5.57374C147.863 7.14994 146.838 8.41798 145.287 8.4257L135.196 8.48038Z" fill="currentColor" />
              <path d="M128.099 15.6544L128.087 18.5484H109.629L109.608 0.00973816L127.242 0.0123101L127.215 3.05255L114.303 3.03904L114.284 7.59844L124.874 7.61967L124.995 10.1622H114.282L114.307 15.6608L128.099 15.6544Z" fill="currentColor" />
            </svg>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="Facebook"
              className="w-12 h-12 border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
            >
              <svg
                width="1.125em"
                height="1.125em"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1467 12.0733C24.1467 5.40541 18.7413 0 12.0733 0C5.40541 0 0 5.40541 0 12.0733C0 18.0995 4.41504 23.0943 10.1869 24V15.5633H7.12139V12.0733H10.1869V9.41344C10.1869 6.38754 11.9893 4.71615 14.7471 4.71615C16.0681 4.71615 17.4497 4.95195 17.4497 4.95195V7.92313H15.9273C14.4275 7.92313 13.9598 8.85379 13.9598 9.80858V12.0733H17.3083L16.773 15.5633H13.9598V24C19.7316 23.0943 24.1467 18.0995 24.1467 12.0733Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-12 h-12 border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
            >
              <svg
                width="1.125em"
                height="1.125em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.001 0C8.742 0 8.333 0.0142502 7.053 0.0725002C5.7755 0.131 4.9035 0.33325 4.1405 0.63C3.35125 0.9365 2.68175 1.3465 2.01475 2.01375C1.34725 2.68075 0.93725 3.35025 0.62975 4.13925C0.33225 4.9025 0.12975 5.77475 0.0722499 7.05175C0.0149999 8.33175 0 8.741 0 12C0 15.259 0.0145002 15.6668 0.0725002 16.9468C0.13125 18.2243 0.3335 19.0962 0.63 19.8592C0.93675 20.6485 1.34675 21.318 2.014 21.985C2.68075 22.6525 3.35025 23.0635 4.139 23.37C4.9025 23.6668 5.77475 23.869 7.052 23.9275C8.332 23.9857 8.74075 24 11.9995 24C15.2588 24 15.6665 23.9857 16.9465 23.9275C18.224 23.869 19.097 23.6668 19.8605 23.37C20.6495 23.0635 21.318 22.6525 21.9848 21.985C22.6523 21.318 23.0622 20.6485 23.3697 19.8595C23.6647 19.0963 23.8672 18.224 23.9272 16.947C23.9847 15.667 23.9998 15.259 23.9998 12C23.9998 8.741 23.9847 8.332 23.9272 7.052C23.8672 5.7745 23.6647 4.9025 23.3697 4.1395C23.0622 3.35025 22.6523 2.68075 21.9848 2.01375C21.3173 1.34625 20.6498 0.93625 19.8598 0.63C19.0948 0.33325 18.2222 0.131 16.9447 0.0725002C15.6647 0.0142502 15.2572 0 11.9972 0H12.001ZM10.9245 2.1625C11.244 2.162 11.6005 2.1625 12.001 2.1625C15.205 2.1625 15.5848 2.174 16.85 2.2315C18.02 2.285 18.655 2.4805 19.078 2.64475C19.638 2.86225 20.0373 3.12225 20.457 3.54225C20.877 3.96225 21.137 4.36225 21.355 4.92225C21.5192 5.34475 21.715 5.97975 21.7682 7.14975C21.8257 8.41475 21.8382 8.79475 21.8382 11.9972C21.8382 15.1997 21.8257 15.5797 21.7682 16.8447C21.7147 18.0147 21.5192 18.6498 21.355 19.0723C21.1375 19.6323 20.877 20.031 20.457 20.4508C20.037 20.8708 19.6382 21.1307 19.078 21.3482C18.6555 21.5132 18.02 21.7082 16.85 21.7617C15.585 21.8192 15.205 21.8318 12.001 21.8318C8.79675 21.8318 8.417 21.8192 7.152 21.7617C5.982 21.7077 5.347 21.5122 4.92375 21.348C4.36375 21.1305 3.96375 20.8705 3.54375 20.4505C3.12375 20.0305 2.86375 19.6315 2.64575 19.0713C2.4815 18.6488 2.28575 18.0137 2.2325 16.8438C2.175 15.5788 2.1635 15.1987 2.1635 11.9942C2.1635 8.78975 2.175 8.41175 2.2325 7.14675C2.286 5.97675 2.4815 5.34175 2.64575 4.91875C2.86325 4.35875 3.12375 3.95875 3.54375 3.53875C3.96375 3.11875 4.36375 2.85875 4.92375 2.64075C5.34675 2.47575 5.982 2.28075 7.152 2.227C8.259 2.177 8.688 2.162 10.9245 2.1595V2.1625ZM18.4065 4.155C17.6115 4.155 16.9665 4.79925 16.9665 5.5945C16.9665 6.3895 17.6115 7.0345 18.4065 7.0345C19.2015 7.0345 19.8465 6.3895 19.8465 5.5945C19.8465 4.7995 19.2015 4.1545 18.4065 4.1545V4.155ZM12.001 5.8375C8.59775 5.8375 5.8385 8.59675 5.8385 12C5.8385 15.4032 8.59775 18.1612 12.001 18.1612C15.4042 18.1612 18.1625 15.4032 18.1625 12C18.1625 8.59675 15.4042 5.8375 12.001 5.8375ZM12.001 8C14.21 8 16.001 9.79075 16.001 12C16.001 14.209 14.21 16 12.001 16C9.79175 16 8.001 14.209 8.001 12C8.001 9.79075 9.79175 8 12.001 8Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Columns */}
        <div className="grid grid-cols-4 gap-4 pt-14 pb-16">
          <FooterColumn title="About Us">
            <FooterLink href="#">Mission</FooterLink>
            <FooterLink href="#">Team</FooterLink>
            <FooterLink href="#">Our Values</FooterLink>
            <FooterLink href="#">How We Work</FooterLink>
            <FooterLink href="#">Our Office</FooterLink>
            <FooterLink href="#">Reviews</FooterLink>
          </FooterColumn>

          <FooterColumn title="Services">
            <FooterLink href="#">Service 01</FooterLink>
            <FooterLink href="#">Service 02</FooterLink>
            <FooterLink href="#">Service 03</FooterLink>
          </FooterColumn>

          <FooterColumn title="Get Started">
            <FooterLink href="#">Insurance</FooterLink>
            <FooterLink href="#">Financing</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </FooterColumn>

          <FooterColumn title="Location">
            <div className="font-sans text-sm">
              <p className="font-medium text-white">Smilery</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors leading-[1.6] mt-3 block"
              >
                123 NE 2nd Ave
                <br />
                Miami Shores, FL 33138
              </a>
              <a
                href="tel:+13055550100"
                className="text-white/60 hover:text-white transition-colors mt-3 block"
              >
                (305) 555-0100
              </a>
            </div>
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between py-7 font-sans text-xs text-white/60 border-t border-white/10">
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        <p className="font-sans text-xs text-white/60 leading-[1.6] pb-4 max-w-[60%]">
          Copyright 2026 Smilery — Site Monitored &amp; Protected by DMCA
        </p>
        <div className="pb-8" />
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h5 className="font-display text-xs uppercase font-bold text-white">
        {title}
      </h5>
      <ul className="flex flex-col gap-[0.875em] mt-[1.375em]">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="font-sans text-sm text-white/60 hover:text-white transition-colors"
      >
        {children}
      </a>
    </li>
  );
}
