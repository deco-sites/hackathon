export interface Props {
    location: string;
    dateStart: string;
    dateEnd: string;
  }

export default function Header({
    location,
    dateStart,
    dateEnd,
  }: Props) {
  return (
    <div class="font-mono">
        <div class="mt-8 md:mt-[100px] mb-[150px] flex flex-col gap-7">
            <div class="md:hidden flex-none px-3 mb-3">
                <svg width="101" height="35" viewBox="0 0 101 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M86.4927 29.6506C82.7049 29.6506 82.0557 25.9033 83.2516 22.2562C84.1986 19.3576 86.4415 16.3099 89.7825 16.3099C93.7215 16.3099 94.1194 20.3067 92.9724 23.8046C91.9742 26.8034 89.7313 29.6506 86.4927 29.6506ZM85.3456 34.9953C91.9254 34.9953 97.8071 31.3482 100.15 24.7536C102.593 17.8093 99.8499 10.8649 90.8784 10.8649C83.7007 10.8649 78.2168 15.3608 76.1228 21.3071C73.7799 28.002 76.3229 34.9953 85.3456 34.9953ZM63.5124 34.9953C66.1043 34.9953 68.7473 34.445 70.59 33.6475C71.2392 31.8496 71.288 30.1007 70.7901 28.3518C69.4942 28.8508 67.7004 29.3521 65.8553 29.3521C60.8693 29.3521 60.4226 25.6561 61.4696 22.508C62.6166 19.1618 65.6064 16.4638 70.3434 16.4638C71.5905 16.4638 72.7864 16.6643 73.5333 17.1144C74.8292 15.3654 75.576 13.6165 75.7273 11.8186C74.6314 11.3196 72.7864 10.8695 70.3946 10.8695C62.619 10.8695 56.4859 15.4167 54.2942 21.7105C52.2002 27.6569 53.7963 35 63.517 35L63.5124 34.9953ZM36.7443 20.6565C38.0891 17.6577 40.1831 15.9111 42.9262 15.9111C45.3692 15.9111 45.7671 17.2589 45.3692 18.3083C44.7713 19.7564 42.7261 20.6565 36.7443 20.6565ZM38.8872 34.9953C41.4302 34.9953 45.0179 34.4963 48.01 32.9969C48.5079 31.3482 48.459 29.6996 47.9099 27.9996C46.016 28.9487 43.373 29.4991 40.9812 29.4991C37.4423 29.4991 35.4973 28.3494 35.5484 25.4532C45.218 25.7027 50.2528 23.9538 51.8978 19.6585C53.5427 15.3118 50.7019 10.8649 43.9709 10.8649C36.7932 10.8649 31.5094 16.0114 29.5643 21.5566C27.5215 27.4516 28.8175 34.9953 38.8849 34.9953H38.8872ZM9.99258 34.9953C16.6235 34.9953 20.395 31.9475 24.7807 22.606C27.1725 17.4595 29.2176 12.4133 31.5606 7.41833L34.3526 8.31845C35.0994 8.56796 35.4996 8.1179 35.1506 7.41833L31.7607 0.473948C31.5117 -0.0250778 30.9626 -0.0763795 30.6136 0.0751937L22.1889 3.27222C21.4909 3.52174 21.5397 4.17233 22.2377 4.37055L24.7296 5.17039C22.6868 9.81785 20.1437 16.8112 18.0986 21.2068C15.8045 26.1038 14.6598 29.5504 10.772 29.5504C6.88419 29.5504 6.23505 26.5026 7.87999 22.1559C9.77388 17.1097 12.9637 15.6103 16.6026 16.6596C17.6007 15.2605 18.3476 13.1618 18.6454 11.2636C17.5984 10.9628 16.3513 10.8649 15.3066 10.8649C9.42488 10.8649 3.59198 13.9127 1.20019 20.3067C-1.88959 28.55 0.967529 34.9953 9.99026 34.9953H9.99258Z" fill="white"/>
                </svg>
            </div>
            <div class="flex flex-col md:(flex-row items-center)">
                <div class="flex-auto h-[95px] bg-accent flex items-center overflow-hidden md:pl-[15%] lg:pl-[25%]">
                    <div class="text-accent bg-primary uppercase text-[130px] pl-3 pr-6 md:px-7 pb-2 font-bold">ha</div>
                </div>
                <div class="hidden md:flex flex-none text-white items-center text-center gap-6 px-8 text-xl">
                    <div class="text-accent" dangerouslySetInnerHTML={{ __html: location }}></div>
                    <div class="" dangerouslySetInnerHTML={{ __html: dateStart }}></div>
                    <div dangerouslySetInnerHTML={{ __html: dateEnd }}></div>
                </div>
            </div>
            <div class="flex flex-col md:(flex-row items-center)">
                <div class="flex-none px-8 hidden md:block">
                    <svg width="101" height="35" viewBox="0 0 101 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M86.4927 29.6506C82.7049 29.6506 82.0557 25.9033 83.2516 22.2562C84.1986 19.3576 86.4415 16.3099 89.7825 16.3099C93.7215 16.3099 94.1194 20.3067 92.9724 23.8046C91.9742 26.8034 89.7313 29.6506 86.4927 29.6506ZM85.3456 34.9953C91.9254 34.9953 97.8071 31.3482 100.15 24.7536C102.593 17.8093 99.8499 10.8649 90.8784 10.8649C83.7007 10.8649 78.2168 15.3608 76.1228 21.3071C73.7799 28.002 76.3229 34.9953 85.3456 34.9953ZM63.5124 34.9953C66.1043 34.9953 68.7473 34.445 70.59 33.6475C71.2392 31.8496 71.288 30.1007 70.7901 28.3518C69.4942 28.8508 67.7004 29.3521 65.8553 29.3521C60.8693 29.3521 60.4226 25.6561 61.4696 22.508C62.6166 19.1618 65.6064 16.4638 70.3434 16.4638C71.5905 16.4638 72.7864 16.6643 73.5333 17.1144C74.8292 15.3654 75.576 13.6165 75.7273 11.8186C74.6314 11.3196 72.7864 10.8695 70.3946 10.8695C62.619 10.8695 56.4859 15.4167 54.2942 21.7105C52.2002 27.6569 53.7963 35 63.517 35L63.5124 34.9953ZM36.7443 20.6565C38.0891 17.6577 40.1831 15.9111 42.9262 15.9111C45.3692 15.9111 45.7671 17.2589 45.3692 18.3083C44.7713 19.7564 42.7261 20.6565 36.7443 20.6565ZM38.8872 34.9953C41.4302 34.9953 45.0179 34.4963 48.01 32.9969C48.5079 31.3482 48.459 29.6996 47.9099 27.9996C46.016 28.9487 43.373 29.4991 40.9812 29.4991C37.4423 29.4991 35.4973 28.3494 35.5484 25.4532C45.218 25.7027 50.2528 23.9538 51.8978 19.6585C53.5427 15.3118 50.7019 10.8649 43.9709 10.8649C36.7932 10.8649 31.5094 16.0114 29.5643 21.5566C27.5215 27.4516 28.8175 34.9953 38.8849 34.9953H38.8872ZM9.99258 34.9953C16.6235 34.9953 20.395 31.9475 24.7807 22.606C27.1725 17.4595 29.2176 12.4133 31.5606 7.41833L34.3526 8.31845C35.0994 8.56796 35.4996 8.1179 35.1506 7.41833L31.7607 0.473948C31.5117 -0.0250778 30.9626 -0.0763795 30.6136 0.0751937L22.1889 3.27222C21.4909 3.52174 21.5397 4.17233 22.2377 4.37055L24.7296 5.17039C22.6868 9.81785 20.1437 16.8112 18.0986 21.2068C15.8045 26.1038 14.6598 29.5504 10.772 29.5504C6.88419 29.5504 6.23505 26.5026 7.87999 22.1559C9.77388 17.1097 12.9637 15.6103 16.6026 16.6596C17.6007 15.2605 18.3476 13.1618 18.6454 11.2636C17.5984 10.9628 16.3513 10.8649 15.3066 10.8649C9.42488 10.8649 3.59198 13.9127 1.20019 20.3067C-1.88959 28.55 0.967529 34.9953 9.99026 34.9953H9.99258Z" fill="white"/>
                    </svg>
                </div>
                <div class="flex-auto h-[95px] bg-accent flex items-center overflow-hidden md:pl-[20%] lg:pl-[42%]">
                    <div class="text-accent bg-primary uppercase text-[130px] pl-3 pr-6 md:px-7 pb-2 font-bold">cka</div>
                </div>
            </div>
            <div class="flex flex-col md:(flex-row items-center)">
                <div class="flex-auto h-[95px] bg-accent flex items-center overflow-hidden md:pl-[12%] lg:pl-[30%]">
                    <div class="text-accent bg-primary uppercase text-[130px] pl-3 pr-6 md:px-7 pb-2 font-bold">thon</div>
                </div>
                <div class="hidden md:block flex-none text-white px-8 uppercase text-[27px] leading-[1.1] font-bold">
                    III<br/>Edi<br/>tion
                </div>
            </div>
            <div class="md:hidden mb-10 flex-none text-white px-3 uppercase text-[27px] leading-[1.1] text-right">
                III Edition
            </div>
            <div class="md:hidden px-5 mx-auto flex flex-none text-white items-center text-center gap-6 px-8 text-xl">
                <div class="text-accent" dangerouslySetInnerHTML={{ __html: location }}></div>
                <div class="" dangerouslySetInnerHTML={{ __html: dateStart }}></div>
                <div dangerouslySetInnerHTML={{ __html: dateEnd }}></div>
            </div>
        </div>
    </div>
  );
}