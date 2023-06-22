import { Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { AiFillFacebook, AiFillTwitterSquare,AiFillInstagram,AiFillYoutube } from "react-icons/ai"
import { FaTumblr,FaSnapchatGhost,FaPinterest } from "react-icons/fa"
export default function Footer ( ) {
    return <HStack 
    w="full" 
    bg="gray.800" 
    h="300px"
    py="20"
    justifyContent="center"
    alignItems="flex-start"
    >
        <Grid w={{
            md: "3xl",
            lg: "5xl",
            xl: "7xl"
            }} gap="4" h="full" 
            templateColumns={{
                sm: "1fr",
                xl: "1fr 1fr 1fr 1fr"
            }}>
            {/* 1번째 푸터 */}
            <GridItem >
                <Box >
                    <Image 
                    src="https://data.onnada.com/character/202212/3718766049_2da1e8b6_281931.jpg"
                    alt="Main logo" />
                </Box>
            </GridItem>
            {/* 2번째 푸터 */}
            <GridItem w="full" >
                <HStack w="full" spacing={8}>
                    <VStack color="gray.100" alignItems={"flex-start"} >
                        <Text>ABOUT MARVEL</Text>
                        <Text>HELP/FAQS</Text>
                        <Text>CAREERS</Text>
                        <Text>INTERNSHIPS</Text>
                    </VStack>
                    <VStack color={"gray.400"} alignItems={"flex-start"}>
                        <Text>ADVER</Text>
                        <Text>DISNEY+</Text>
                        <Text>MARVELHQ.COM</Text>
                        <Text>REDEEM DIGITAL</Text>
                    </VStack>
                </HStack>
            </GridItem>
            {/* 3번째 푸터 */}
            <GridItem w="full">
                <VStack alignItems={"flex-start"}>
                    <HStack spacing={6}>
                        <Box w="16">
                            <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBMVExcTFRUXFxcZGB0ZGRoaGRsZGhocHRogGhocGxofJCskGhwoHRofJTUlKCwuMjIyISM5PDcxOysxMi4BCwsLDw4PHRERHTEpIygxMTExMTMxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgQFBgcDAQj/xABKEAABAgMFBQQECgkCBQUAAAABAhEAAyEEEjFBUQUGImFxEzKBkSNCUqEHFBZTVGJysdHSFTM0Q3OSweHwJJNEY4KywheUorPT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAIDAQQFBv/EACkRAAICAQQABgICAwAAAAAAAAABAhEDEiExMgQTQVFhcRQiI5GBocH/2gAMAwEAAhEDEQA/ANhloDCgwGUKuDQeUEvAdBC4AEXBoPKC4NB5QuCABFwaDyguDQeULggARcGg8oLg0HlC4IAEXBoPKC4NB5QuCABFwaDyguDQeULggARcGg8oLg0HlC4IAEXBoPKC4NB5QuCABFwaDyguDQeULggARcGg8oLg0HlC4IAEXBoPKC4NB5QuCABFwaDyguDQeULggARcGg8oLg0HlC4IAEXBoPKC4NB5QuCABhdGgjyPYIAHkvAdBC4RLwHQQuAAggggAIIIIACCCCAAggggAIIIIACCCCAAggggAIIIIACCCCAAggggAIIIIACCCCAAggggAYQQQQAPJeA6CFwiXgOghcABHkQ+8e8VmsaO0tEwIfupxWrklIqeuAzaMg3w+Eu02l5dnezyjRwfSrHNY7g5JrzMLKSQ8McpcGtbU3usEhZlTbTLSsYpcqI5KCQbp5GGvy+2X9LR5L/LHzxZ0rKuC9eILs7scXOlavFq2JstMwPNnTEFgLq5veLXi1RQaVifmMu8CS3Zrvy/2X9Ll+S/ywpO/mzDhakfyr/LGc2CypCzclylAAhSmUtalaqmMw5iuVYdJVaFADgFWa5OTTD+7v4ZxutknCJe1b+7LGNqQP8ApX+WPPl/sv6XL8l/hFGmLKb3xgykoAzqo55k3aMddIoG81pkzJ6jKSyNfaOZ6RjyNDxwqXubx8v9l/S5fkv8sHy/2X9Ll+S/yxh6djywiXMKyUzEhWhriAkJUSxpiPCJOzbPsYBUqWUAZzb4vdApSQR4Qrz16D/jx9zXP/UDZf0uX5L/ACwr5ebMYH40hjgbq2PThjHrTtazym7FCFk43QiWBpxBBf8AmhHx+ZavQ9lLCS7lSlTKgBrhJDLDjDAEa1Fmk/Qx+HRsfy/2X9Ll+S/wg+X+y/pcvyX+WMZG6c5SErRduqJCSQsEtmWCgkFi14j3wz2psCdKbhKyXe6kqZunj5GN81+weRG6s3L5f7L+lo8l/lg+X2y/paPJX5YwFezJ4d5UwMm8SUEABrzkkMKfhjGvbqbHsdos0mcLJJVeQAr0aKLSbq3caiGjNthPDGCt2WD5fbL+ly/Jf5YPl9sv6XL8l/ljlI3SsRAJscgHTskfhDhG6Vg+hyP9pH4Q+5L+P5E/L3Zf0uX5L/LHSy757PmKuS54WpibqUTFKYVJYJeghSd0rB9Ds/8AtI/CO0jdiwoUFoskhKgXCkykpUDqCA4MG5n8fz/oZfL7Zn0pHkr8sK+XWzPpSPJf4RJTdlyO8pCaVdh76cz5nUxSd7vg/s01JmWRSJM2pKb3o15sR6h5imozhZSkvYaCxt07RfdmbQkz0CZKmJmIOCklw+YOh5GsPDHzhs+32zZ883CuVMDX0KDpUMrycFjRQ8DGtbmb/wAi13ZU1pM80CSeBZ+oo5/VNdHxjIZU9nyNl8PKO63RdoI8j2KnOMIIIIAHkvAdBDHbs4okLUFFBA74uuly14XkqFOaT0h9LwHQRD75fsc5vYORPuSQT4EGFm6izYq5JGUbU3cRNmTJqkW6eXV6TtUq7Rkgi6ewwJJSBgLpjirc+SH9BbSz+umrEAf8Pm7+BjSN2Q1mlP7GbjM5KJI8STrEjHnSzNM9AymVulLSXTJtwILOFpw7S4/6jC6b3SHg2BeF0y7axbEozUX/AOGyYK8RF821siTaZZlzEv7KhRST7STl9xzeMu3l3dnWRTqdconhmB25BQ9VXuOWgaORs1JMn7Ps+aAlIG0EggUvS+F0qLVs9GKQOqhHk7ZExYqdo9BMSPUvZSNeHrFNQo6mHElagQQogioIJBB1ByMPqkN5SJyfuZKUSVSrcohy5WkksEmjyM3I/wCkwHcaR81bM/XRkoD5jMF/CLButvcC0q0ljgJuAPJen2sNWxN1SYVzkibtGZS91EhIlj9IJQCwSJgAqspJYScG4uhjincWQS5l2xyzkrRmS7nsMmHmI1Qwz2rs+VORcmB9DgpJ1ScjGLIZbM1TuPIYeittW9dFHSVfMahupEendCSigTbUvl2iEg8INXkgY0rmIdbR2EuXMu3wZeUzPpcFSvkMYRfAHZyhQ0USyn+2cFfZHCOb0fUNuNxu5JFErtikl2Mu0IUlRDUpKxqcdI7p3PlswTbmdqTEs14D5nD1vCF2S1LQXd3Zzi7j1hnhQjiFMRSLPsfa4NHydnctqD6yeY8WMY5M12irHc6WaFNuIJDvMBHfIdux5BXjDnZ+7ypYCZatoy0liQmddAJdywks4b3iNBkTgoODHQwusRyZQU7NnsPS7Vwdu3NOC981rw9YUdmT6+m2rR/35qyQfmszTqIuW1NnSp6LkwPoRRSTqk5f1jP9v7Fm2cuXVLOCxh0UPVP35QylYLcfq2bPr6bauf785EAfus3PkY9/Rk/5/an/ALg+1d+a04ukVwGFS1qSQpJIIqCCQQeRh7Y2gsSdlzvn9q5fv9VEfNZAP4iPE7LnU9PtQO37/BwT81kzeIiR3c3oCmlzyEqwEzBJ+17J54dItUI5NCPYzi3brJnEKm/H5igGBXMSogXbzAmTrTrDdW40ivBbDQ+sirAFv1Obt4RqEeiM1G62uBluXJMuWZfbTZoSzdopK1Ix4bwQklmzeLDFc3PFZ38TRQzOpL+DDlFjjtxv9TjydmMYIIIcmO5eA6CInfEPY5wZ+A0Z38CQ/RxEtLwHQREb7AfEp74dmfZ/8uHzprCT6sfH3X2ZsnetdjmypS03pBkoJSAApBvLBKatl3XbQ6zOzLEubIQqVNlrAUr0qVzErmpN9SUzAA6FhUytSRVQYsIz3e8ATJTYfF5bd32l+zw+VNI4bv7anWWZ2kpVD3kGqFjRQ10IqI4JL2PV8u1sanP2NaVAtPuqZgbyyCXmusjAKaYigoOzGTQ8lbMX2qipQVKWllSlFSw9xKQ16jHjcZ8JxeOW628ci1odBuTAOOWe8OafaTzHi0TYMSba5JVRnm9W5ipbzbMCpGJl1Kk/ZzUOWI55VOWY3ECKxvVutLnPNlES5uJ9iZ9rRX1vN8nhP3HjP0ZnqIsW7m80yzshbrley/Ej7B0+rh0ivTZMxCihSFBQLMz+8UMSVgsDATFi+olkJyfPkWw0cjwrt6myou1o3kBAMsFQOCjwj3/0BhtO24sIN9gdHLNkokh0jwctQGK1PtPrEvmnUgOAEg0A+szHQ4Dmpd4up8Qc7ozUXPeOT1J8oxRJ6RzPtC5qnJLE3dCQakAeqlvE5k5eIFA31j/QR0s9ltEwBUqUqYHJvUSHwxURl98OJewrcQPRJFGqtOfQmGSC0hkjDwRCkukun2zR2qzgg+qcnzzcUh0vYNtA/VoNAKLTl1McZljtKXMySQO8SClTMORMbQakSVh2woJLFleQJ0V7Cic+6eRoJSxbeUC0xL6lLluoooeUVErBNHxNQHociNHyIYiPUTS7jvMGD5j2Ca5d0+GkI4hRpdktKZgCkkER0mSwoFKgCkhiCHBHSKJs22rSbyMWvEZLALK6Ea44u7Vslk3gklIKlBJ5/wCVHSFcRHH2ILeLdcoeZIBUnEy8VJ+z7Q5Y9cqwDGty1gihiB3j3bRNeZLZEzP2V9dDz84aM/c1S9GUMRP7u7xrksiY65X/AMkfZ1HLyiDtUhctRRMSUqGIP+VHMQiH5Has1iyWlExIWhQUk4Ef5Q8o7CMu2RtObIVelmh7yT3VdRrzi/7E2xKtA4Syh3kHvDmNRzHuibjRKUaOm5yWM+jek0AeprQl+tOkWOK3uWzz2+cr3dT7P9axZI7cfU5MnZjGCCCKCDuXgOgiI30LWKeXZpZq4Dc3IIHUgxLy8B0ERG+Z/wBFP/hnMj3pcjqK6Qk+rGh2X2YrvpZpjyJ10mWuSlKZgIUkqClki8AA7F8A+UV4Rt+xpCJljlomJC0qQykqdQNTiVBz1NfGKFvjuSuQ86zhUyViU4rlj71pGuIzepjz9abo9aE1wyp2WcpCkrQooUkulSSxB5GNM3Q33RMaTaSlEzBK8EL6+wr3HlhGXAwtKFKoEkgvVi1Ma8oHG+RpRT5Nq21txEp0pIMzJD16nQc/6xVbVtu0LCqsmqSQCLr6B7wxxiDkqNAFUAZKWdy2KlZnrRhClTCAUqIHE6kjF6FTjmM3xfqFUaE0pDmWi+plE4lwSGpVRfFTN/fV+tSVqSh0hKS2oCTTAA5pGRFagiGIWQmqiCoMA73EkuWAzdidadI6C0cBl3fXKnwPEwSL2IDOcanVmNEK1ZZ9n7rzlstK5dxabwWm8VEFilyQFBwfBsImrPuhKZQmKUt1cKu6pI0LUJfOFbgWtcyQQv1FXR0uggc2dvKLMBF4QTVnHPJJOrI/ZGyZchFxF5iXJJck4VMPuxGp/mMezFsCalg9MYZ/HAWINMwxdsKYZ54RTZEW2x2ZI1V/Mr8Ya2+wImoVLWSUqDHDqKs+MJ+Nh0s41xU+QY4Yw6s84KDjzyMGzDdFdmboSghQQpV84LUSSmtaYGkRlv3Vm4JUhSa/rctOKuPJusXp4jt4LQqXImLTiEluXPwxhXCJSOSd8mdLliXNcKSWoTXvVSzkC82pctmQzcLSgPeDgKDsG5OCk6Au8eptJF90uVAgk1qouSH7pfBmd82p4AGulRBehcpKSAxD8xXSvKIHWO7JtKehJYkgVLm8zsAHOPQNU84sOyNthXDMISrI4BXQHA8v8FOMypfhfvA4HI1wzDdMjj0U4pQF+6zggUY6OG8OkY0DVl62vsyVaUMsVHdWO8nx05YRQttbJm2dTLDpPdWO6r8Dy++LRu7tpAlhExbEFgTmMq5sM/OLDOlomIKVpCknEGoMYpOItuJkzw42bMKZsspJBvpqCxxaJjePdpcp5kp1y8SMVI/MnnjrrEFYj6SX9tP/AHCHTsps0aZuatzPqC0xqEFqmlAG6HziyxWtzFOqf/E1Ucz7Qp0FIssdWLqedk7MYwQQRQmO5eA6CInfL9jnY9w4XifAJ4ieldIlpeA6CIjfQPYp4x9GaM/ucP0cdYSfVjw7L7Indr9mlY93MKBxOIVxA9axIxWd39uSJfZWRZ7OZ2aVJcBKVXlKF0VN1Qbuv0JiyqLR5M01I9EpG++5iJoM+zgImO60BgmZqRkhZ1wOesU2RKZkpSb7MEHHhL4JdSi+JBaNR23tdEtBcjTWpwAGJJyAqYze225JUtMtIdRqMXz41ZpFfRjhFXeqRSDbW5SLdUN+3U1UtRyUKUkM7OygQz0eJ3ZOyp9ouGXK71BMUWDZkuA7ahJjjsfZS7ROMkEpCazZhSVBwlQN7DC6RdejDm+vbOsyUISEpCQEhIT7KRRKfLHm8VjGyWXLp2RWVblo7AIvntHvKWKF9Bonl4u9YXK3IlMniU4DEuKjTCg6NFqxjskNFIxTOV5Je5H2OVLs8vs5aSyaMNTUOdSSOdY6otSlNdFNcaVanNgX5+MOFSku5Act7sKYPzhaRFPgld7jeWZlxV/HL+UPhlefwhhZUABw/dIqKd6JaYlwzn3fhHAWRPP3fhCyNTGSUuAHwUDQHrHewlXZEIxrdPP7o7iyJ5/5TSOkqVdDAkDw/CBWDaG/bTE94U4iaPmWAb6o94j1U5K/RqFSA4xFQXryYiHYMeXEu7B9euP3Q6+zCtL3RklTuWyD0HTMecIsW6aE376lKvBg7Uq7jQvX+grFqIhJjNKH8yXuZxtTYk6SSSjtEJqFClBqMaaViEVON7AkmoBUWL6JCQTWNctfdJYkgEgAOSQHYczhGY7wWUj0hlmVLWpRQFC6Uijggtd6Hn4ylGi+LJq2YzAKgFKDPgQCAW+1jzasXjddcwyUmYQXqnW6wZ9Tj7sYolntrODgWd3Y6O1X0WKimOEWrYO1EgBIwAHCakDIv6yfrCJyKyLRFc21uyhcxM6UyFhYUpOCVVckeyr3HljE9Z5yVBwY6jGETonwMdysZ+P6zMKGZwvYjmKRZYq+4wraKN6T2br1NcS/WnSLRHfi6nLl7sYwQQRQkPJeA6CIffP9inv82dP/ACYedNYmJeA6CIffQtYp5dvRmrgN4kEDxBELPqx4dl9mG75kdpK0+Lo9n2l+y6fItE9sXeG1S7OU2g3gADLvFpl3AGYckaE8RqwVSGu0Uo7VJIvzpaJct1NdQSSUqAICSo3u+QEDIE0iO2vJUrjJHrKKXoWa8qtQqoDq6Ag8A4XTPW5VHm0dpLmqcq71A/DTNvYSc/WOZZkwrZkkJmAsyUupiQSWrVqBLt1ppEfJDpUov/bIVy/tHSyTrt4gEgJJpQUIw5s9YVjVtsaHuFtKUhapSr16ZOF1g/e7wJy4kp8FRoqjHz9KkXVqoHUzXgx50LYgvTAggjXadzjNNklGa99jjjdvG4//AEtFIvajjzQp6g3q22bHKRMEtU1S5qJaZaQXUVPQEYFgSHFSAM3GXb3bbmfHJdpEu1WWYRVK1lylwD2TjgBDgjuuxbGNQ3q2ymyygpVnnT7xZKZSL/FlePq9W1xwjPJu6+0Nprm2q0ASFFF2VLVgAC6UqxKUsTjxXlOwFDaO0ScGk7ZbNk73rM6RZ5ljnSQslAXNcvdQVNg+AxJNBXMiT32t1ulCV8TlCYpSlX7zFIATQEEpqSXBcd1qvFf3U3itMvs7HbrJP7RJCZc1KL6SBQFa3uggYrBLh3bO074y7UuzFNkUETStHGXBSm8CpQbEgZMXDhjGrknJVJbFW/TW8H0OV5J//aHO6G9Ftm242S1S5csplqUoJSQoHgKa31BmXDUbB23eu/pNN5nu8Ltg7XcHziL3KkTpe3JsufM7WaiSb8zVxKI09UgeEHBT9Wnxx6Dr4Qd50TElCBbZK5c0pCmEuVMKVXTxBbnAqSQPDR7uxvQJ8lNnmG2GZNNxU9KUBKFEYpWk8IFB3eZDkkx/xdNv23Pk2gKMuSghEt2FLgcsXIUVFVNUvg0ddjSxY9tmySQrsZssKUgkKCeAqChV2CktWvEzM0Gpsyo6a9eR58F9onKm2iUudMWmQq6kEuCVKWCS9fUDAkgOdXjratvW612mbIsSkS0SjdVMUASogkHFKmBILMMA71aK1uT8dVa7V8VUgJTaB2wUAVFHbLol0mt0L0xHhM/o227Otc2bZrOLRJmuboISUObwTqGJIDAghsDBZsktTO9n2taJ3b7PtSzLnoQVpmyzdvXReuqZgQQQaM4egIiQ+C+1TZtmMxcxa7quzSFF7qQARXEniNS5wGURmwdj2lc+0bQtUsS1KlruS0gEjgug0et0NqXU7UBkPgjkTEWNQmIXLV2pLLSUFrqQ7KALUMFsWVU6+C5RD7z2ITZMyWfWQW691/ek+EPrbaUy0KWsskYmISxbdkz7yELqAQQQQQDR64iJTyJbM2EJPdGaWa6UjiAUzEf5pHSzTig0OBJDH3pV6p9xzBjptjYc+Qtayi9LUtSkrRxJYqJAUMUli1aaQylqBBb7g2vmPxhLT4Oxbotmxtt4OWLtoCdCPUVywORyi2WG2JXyOkZXYEFRvO2IIo6mDkF6MRkQScgWLS9m2qqWeLugJqkvdD3Qxc3gSO6STmkqEI0K4l23CIe0MP3n1dT7JPvrrFrin/B4VPaAoub6TiMFAkUYEY4GvOLhHdi6nBm7sYwQQRQkPJeA6CIjfP8AYp/8M5ke8AkeR6RLS8B0ERO+f7FPx/VnC8/hd4vKukLPqx4dl9lG/QSZ1mlLwXcooF1ByXDkC8DmFBjmIpu8OzpqVXSDdeiXJExnuso1vjC4cnuaRqe7Y/00rHuZ3nxON7i866wbX2XLmpIUkEEMQQ4PWPM102enGVGNKF5BCXcOWOObjqI8KjQo0ppo3l98WPeHd9cslSXUBnVS0t7TVmJbMcY+sKCuzVKGIDkO4ZlA0dJ9Yc+sOvgqnZq/wd7Os67NJmmWha1grKlpC1BZSk0JDgBlN0POLu0Zd8Du1b0tdnPelrvJGqSSoDxdafFMaglTgEYEOI6Y1R52VNT3KdvTvdMslqMlVkmzZSpSVJVK4l3ipQVeD8IYBsC4OL0zXdPbVps0q2omSrYtdoQyFp7QKRMAUAtSiQb1U1FWTG+XAakB+ke3E6DyhyakkuDFNxN7Z9hssyUuy2masrVMlkoVcSSkd4moF8FRbUnExcdo79zbPNEubY5q70mVMBktM4lA9oDldCgQDmxOBEXjsxoPKOFmtElalBCkKUlrwBBKQXZ9MD5coy/c1tN3RjNj3iUja03aIslq7NaboR2Zvh0IBfJryScc4kJG9UmTPtFrlWK2KnzgS81KQhJ9UOmqZYoDySK5xr4CfZHkIRaFykJKl3EpGJUyUjqTQQ2zMcvgp23tz12mYi32ecqx2ooTfKRfSrhZixDkDheoIApgYcbnbmmzTV2mfOVPtC+9MUGpSgDlsBnkAGAY2OXtSzsLs2WQwa6tJoXZmPI+Rh0VxlpGanwZn8DB/wBXtL+KP/snQz+Gpd222QX1S0rRdWoKKeHtACScKBRLnCNI2TsazyFLXKlIlqWXWUgAqLk8RFTUnHU6x7trZFntISJ8qXMul030hV18WcUeBtUNq/azLtr7G2bLkTZkvahmTEy1KQj4zKVeUEkpSwqXNGEWT4FJxVYVqUolpqsST6qdYm/kXs76JJ/20fhDyy7PkyECVJlploJvEJASPIamEnPTGxr1KiofCVtpSUIlJoVkkagJZ/GoD9YjtzLKouS4YFTtV1sKnNgl2584sW8AkkArloWyiUXkhTc64CGtqtolyASQkqpTLM+IFerCPNeXUtPqz0Mcajse7S3kRIIQEGZVjxN4JDG8YTb93ZE5InyfRKULzNwF6m8j1Tq3kYz9e0O1tJmJBa9wB64sgPq7RoG1pi5VmlyEq9ItIBLO3tFjjjnSKyTgklyLJJvYoljQorBTerW64dYGZeiUOO+aaORHVW0UCahMtlqK0grJKkIJICuyeq1GvpFOdNYu2yNjyEyyhaQvtAyr3FecMSSceuAyEU7au7M6yz5ag65XaoF8CqeMMFjLrgeRLQ0ciboFTNE+DlLG0jSa3eKqAnVIbpUczFxiofB53rVj+uON/VWF/L7PDpFvj0MPU87N3YxgggipIdowHQRE74h7HPH/ACzk/uBD9HHURLIwHQREb5h7FPDP6M0YF+TKofGkLPqxodl9kRuyr/TSxRwjiADNU4hyU+Z6mJEisZBtnac6zWiTMkquEWeWLrC4RfXwqSk3SOQwyOcX3dLeqTawEUlzgKyyceaD6w5Yj3nyskHdo9JwdWTlqsyVggiMz3gsMlU6bLSySDUKN1C1EO4P7tdRxYKq4LRqE0G6QDUxku3rDNlTVBd5Tub+enewGAfECmGEEORoEbs61qsVpTPSCbpuzACApjUpKfaoFAglJIDHEDcdh7SlzUJmIUFIWxBGRVVuQOI5uNIxASUZKUonNSyB4BIf/OUPETDKIKb6FYFaVKAfG67l+l6tcYup0LlxKe/qby0EZmN/LQizhF1Kp4U19QN0oaiiB6xwpo5Awjsj4RpnCDIQSBxkLIBIxKaG6MPaAweLeZE5PIyexcd6lTBJ4UrUDMQJgQLyuyvC+yRUgihArdKmrFV9Mi0ImolTVollQR2ksvXhv8DFIT2pZwVFAm04kxbdnW0z5aJ0oi4tLsrEEEhQLDEENQtTOHJE5qlALZPi4fEGjPlG8iKWnYro2xbin9QAp1JAMtbayyTeYXnAYEgMo3nZBc7dmzlKSJQUJqeABUt5brCCZt40IQHDYniA1iZInZGX5K5f3jxaJz0UhiBRsCwcjWr+6FphqV8FEsC7RJmdoJC1hJKQTKWpZQzlZAIebMWQo8klwCgBTu37Qt8yWZK5QZboUUSpqQQ6TUqe6hQJScykLIuqZEXNPbfUwOR8I8CZ1XUgUyBocusbRuu96RURt3aHZgJkXSzA9jMF16JJTeLXRMQVCv6qc3qmLPu/YuykJRxPVSipioqUSpalNS8VEktmTHUInay+tdMer/5SqgJ2dz36190buK3fB3UpgScBERbrSyVKPrZfcOjYw92hN9XxPSKrvFbmB1wH9uscPi8u+lHT4bFqdsYoedPbEJx5nIQ3372XPmSpaJKL91SkqF5KSLzMplEAihGoeJzdyyiXLvr6+McNqbSBN1KgpajkQfARyRfl1I7WnOVR4RWNzN2VypgnzikJQL13E3uZwpXDF4lETjOnKnKwFEA6ZUj3bE0hKZCaqVVZ5aQ92fs8sNB5Rs8sp/s+Q0JcnnaKNB/eJPZ0taXK6gsCDWmvh9xjmyE4VPu88oRLtCrwYOTRsm0bSJJ07Ml+ypHb4OUkG1OGea/dKaOdVKfrToIuMU74OggKtVxFwGYCzIBet4m7jXNXFrFxj6HC7gjys/djGCCCKkh2jAdBERvm3xKe5Ydma0pz4nHmG1iXRgOgiJ3xLWOecPRmrt72LdWMLPqxodl9mG74EGbKILj4vLqLteNdeEBPkGiEQspIUkkEFwQWIORBFQYvG8u7U+dIlWuV6RpQStAqpkqUbyCwv44MDo+EUYxwNnsQaaNH3O37Crsm1kA0CZuCTymeyfrYatibtbLKmYkuAXGMYFFo3P3wm2RpUx5kj2fWl/YJy+qaaNnOUL3QsoVuhztLZcySsioS7CgKTxOlzilWWhpEWtIS6QaBgxVi1Q+NWoeRxxjWEKs9sk30FMxCxiMtQQag8jFe2huYCFFC1OxuvVtC+J84xSrkFJepUrAktdSvicqSGIKGJCkg4FJSSeVeULRLlrky0JlzFTryjMYXrwIvJuAOSpKXLMMTUYx5aNmT5aiyCyD7IbkUkC9h155wjaMtKxLUGCSCcSClaa8Kg91dU3TXxEOnuDNq3fsKbPIRJBcJBdTM5JKlFsqk0yiSEYdsvfLaFmb0gnyqfrgRMS+AUscQJyUq8k5aRabB8J0inbyJso5qAC0P9pLE/wAsdMZHDPBO7NJgaKnZN+9nrDi1ITyWbh8pgSYkJe8lnV3bRJPQpP3LhtSJPHJehOQifVJALFsdIhZu8khOM+UP5R964gt4d87N2S0y7XLSshgQUKbWibynaMc0NDFKUkiJG+ttlky1dkpSVFBUpBBcG6SbqgMsgIl9h75ErULQtF0JcKSkhy+AqXpGZJtstSriFFRYl2UAf5gD7ouCLRYQzJTljLUrJQI4gMXB8PPklPJF3Z9Jl8J4Zw/WN36r3/4Tds3qlrdMlC5ilaBkjqTUU5RXrcqfMmIvlEu+VBISQtQupvYYEkFLVzGDiFTduJS4lyySU3GICUsQKBKcwq8QXB4jHFOz7ZaOMpupcKcsgOEhLgCrsBHPUbtm4cEce7Sivdu3/R3tOyk0M6apQ4Cb6wAHJCwAXLpAy1wOER1sssqVKE1Mx1CcpICVJKQlKiUqKhhwgZ5iIbe6VNs0wSwUqKg5Uz1euOf4xAzrVOuqC2IUCKpYsdCP6x0Qx6knewsvEqFpSb/wki9SN4pctapi0GYsmlWA90WXYG3RaZalgXClV0gM2AILnJj7jFLl7Hly5BmTCVLRKQpb4Ba2CUgZkByecdJu6lslyVqSPRra8m+xIOakaDTEaQssMHGlt8nn5JJftIld4N8JUt0yvSrwd/RpPM+seQpzhW5G+iFKEq0hKFqICZgDJUSaJWPVNaHDpnWto7vqlylLK2uAki6wcZOS75YY6RC7L/Xyv4qP+8RkMUEtv7FhOOWL0m1fBqoFVrZQLTiCxQWLmhugMeSnVqYukU74OVuq1VdpxHevNVVMA3SvWLjHp4uiPMzd2MYIIIoSHaMB0ERG+f7FPx/VnC8/hd4n6V0iXRgOgiJ3xD2Of/DORPuDE9AYWfVjQ7L7Ijdr9mlY9zO8+JxvcT9axXd9t27NPKpiJkqVPGLrSErP/MD8J+sz6vFi3aDWaU/s6EZnIuR4mK7tuzzDMmES13Sol7hUl+IXqVZier9H8yPd7noptO0ZnaLFNQopUhTjFheHUKDgioqNRHFMtRwSo9AThj98aILKsqZKF0CrpCCwrcc0N43Q904imcMLRImSgibMmXAeFMwy1ISq8oroLwIUaHDKj0JqqKqZWdg7YnWWZ2kokYX0FyhQ0Wn7jiI1ndXeWTa0cJuTAHVLJqNSk+unmOTgRnG0FoUOxM+WZZKReSlLhlAJwXQNU0yzpDawWKUlMucLUJcwLHdUHQau1XyxwrzhZQUgkk0bTNkpNCAXipbf3ZqVyg71KMidR7Jqa1xLgvHu7290tSkyZ02UT3RMDJvqJN12N1PCGOAchsWi3tEGpQZNNoyJdhCVsrhoQbzJWHy4uGYOTlwwIzDOfZFS2KQFJUXSA91bBj2ZNQpqGWqoyKo1+0WCVM7yRDPaOxJS5ZRdTdZmIoYdZR9ZkqLPKWxupIvFJamTh2zjmNmSjd4cyDXSJ/b+wZkpRWlyMbxdRDFx2gFVp+uOMDG9EVLXUA0N68zguFZpIopL5iKp3uhrGkjZko3XB7pJ8DHSXZJYAN0dwqLvjlHRC2TzuMGqSVKIAAzMdpFmMw1KUpBSh1Edmkg0Br6WY/qDhFHJZo2ws4yJSlFKZYNQAm6BeW1VFOQS4DrVSnrYRoezNlWKZLeWL6gGU6lO+BLOxDvUUjzYG7oSKg17xUeNZ+sdPqigiesmy5MskoQEk4kBneOfLLUqQLNKO0ZNFe2Rs9EyeVJQAhBZLDFWvgPvix7VniXLI0Yf1P8ATzjtIkJl90MPxxiv7YUqZNTLelSo6ZqMcj/VbjW8s7fCK/tqxSlSFWicq6ongJ115vpDDdbYtntb+lF5JrLIZTZKY4p6YZww3v2h8ZndnLIEuULqHLAkEBSudfcOcRNns81ExKpawhYLpUFMUkc/HDMR2YoNQ3Zs9zSbdsCakywCFSkzZcxbu5SghxzoIsO17ADOl2kTFgISRcCh2anLpUrpXr4VrW6O+yZhEi1FKJndC8ETDhX2FHyOTO0XE2dPsp8oG3FUzmnqb3KnvJu4u1yVFE0pXfKwk0QujMrMag86jTN5NlmSrTLlTEFC0zZbpOPfFeY5ihjd8KRH7Z2JItFztE8SFBSFiikkEGhzDioNIIZK2ZsJKCpHnwc961d79cce01Vhfy+zw6RcYp3wcpN61PnNfuqTmrUl+oYcouMeni6HBm7sYwQQQ5IeS8B0ERO+Esqsk5ITeKkEBLA3iaAMSAXwYkCJVGA6CPLRJC0lJwMZJWmjYummUXYu1ZEqQiVMWmWqWkhaCLty7xEEBwlkqBoSGIrD9W3LKP3qQz5KoxAOWRIHiIlpu7dlUVFUlBKnvEpSSpwAXJFXAArkBHh3ash/coz9VObE5ZkDyEcb8K3udXnx+SJ/Tll+eTi2eN642GN7h60jlaNp2OYky1zJa0qABSQSFAkgOGzILcxE38mbJ80jF+6nG9ffDG9xdawDdmyCvYoy9VORJGWRJPiYPxfkPPj8mPbc3Zk9oDZbRLMtVQmYpQKXBUAlV030kJJD1YHHGI47tTce2s3+4v2b3sezXpG4jdiyBmlIDMBwJowIDUowUR0J1g+TFkw7FH8iNLuns06UinkSH/LRh6t2pgd51moC/pF0AAJfgyCh5jWLhufb7RZ2kz50mZKFB6RZmS2ISwdHEkEgXTg9DlGgL3Yshd5KKu/AirgAvSrhIHgNI9O7Nk+ZRn6qcyCcsyAeojHgb2CXiovlET+nbL86jFvWxKrjYY3uHrSBG3LNh2qSS3tZkgZZkHyiW+TNk+aRi/cTjevvhje4utYBu1ZBhJQMPVTk5GWTnzMJ+IJ58fkgLTtOxzBWcitQa1dJUGpXhBPQGKXt7ZtnUSZUxD3nuvdBU168lTejWzF+6aOM41IbsWSg7FFMOFFKFIalOEkdCRHit1rGXBkoIOPAitLtaezTpGrwrjwxl4mK9zGrNs+6/aG6bpZK1BExYGN4pvdlL4qs6i+LFo423Yc+aQVzbMAOFCAtSUIDhN1KblOIgau0bWd1rG5PYoc4m6ku7O9PqjyGkendmyfNI17qdbxy9oA9Q8OsMjfyo+xn25tvtFnaTOnSJkoMkETFGZL4igAOjiTeBSxqCCBg0WxO3LMWaamrN3qu7ZZsfIxKjdiyfMoxfuJxCioHD2iT1JMejdmyBmkoDM3CmjOzUyc+ZhJeGbYr8RFvgiE7dstD2yCDhjUXb9KeyL3SsN7RtCxKvFU1DNx94UCbxctQXSCeTRPDdex0HYy2GHAmnDd09kt0pArdiyFwZKKu/Airi6XpXhAHSFfg75BeIiuLMf29utKEz/TWiWUFzdmKUlSGIBD3TeAvAPiHDu7wwO7M352zYt+sXjeuN3PaIHWkbgrdmyHGUjP1U5s+Wd0eQ0g+TNk+aRr3E43rz4e0H61ivkMZeLRhw3Zmmna2bKnaLzJSPUzKSPAxcNzdoWiRdlT50mZKpcImKMxAIJADo40sDTFgWLBo0Ebs2T5lGXqpyJUMsiSepMCd2bIGaSgMzcKaMCA1KMCfMwPA2qB+KT5REJ29ZWftke/2b+ns8XSsB27ZQ5M5AAcnGjAKL0owL+MS3yXsbN2MtvsJ9m7p7PD0pHqt2bIXeSgu7uhNXDF6VcADwif4gvnw+SI+DqSUm0kouX5t8cKU3wSWXQl31LHkIuMNbHYkS+4Go3gMB0h1HXCLjGmc05apWMYIIIcQeS8B0ELhEvAdBC4ACCCCAAggggAIIIIACCCCAAggggAIIIIACCCCAAggggAIIIIACCCCAAggggAIIIIACCCCABhBBBAADAQQQQAEEEEABBBBAAQQQQAEEEEABBBBAAQQQQAEEEEABBBBAAQQQQAEEEEABBBBAAQQQQAEeGCCADhBBBAB/9k=" alt="footer image" />
                        </Box>
                        <VStack alignItems="flex-start" spacing="0">
                            <Text fontWeight={600} color="gray.100">choco</Text>
                            <Text color="gray.400">초코하임</Text>
                        </VStack>
                    </HStack>
                    <HStack spacing={6}>
                        <Box w="16">
                            <Image src="data:image/jpeg;base64,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" alt="footer image" />
                        </Box>
                        <VStack alignItems="flex-start" spacing="0">
                            <Text fontWeight={600} color="gray.100">white</Text>
                            <Text color="gray.400">화이트하임</Text>
                        </VStack>
                    </HStack>
                </VStack>
                <VStack></VStack>
            </GridItem>
            {/* 4번째 푸터  */}
            <GridItem w="full">
                <VStack alignItems="flex-start">
                    <Text fontWeight={600} color="gray.100">FOLLOW MARVEL</Text>
                    <Grid 
                    color="gray.500" 
                    templateColumns={"repeat(4, 1fr)"} 
                    gap={6} 
                    fontSize="20"
                    >
                        <GridItem><AiFillFacebook/></GridItem>
                        <GridItem><AiFillTwitterSquare/></GridItem>
                        <GridItem><AiFillInstagram/></GridItem>
                        <GridItem><FaTumblr/></GridItem>
                        <GridItem>
                            <Box>
                                <AiFillYoutube/>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box>
                                <FaSnapchatGhost/>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box>
                                <FaPinterest/>
                            </Box>
                        </GridItem>
                    </Grid>
                </VStack>
            </GridItem>
        </Grid>
    </HStack>
}