import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { GrFormAdd,GrFormSubtract } from "react-icons/gr";


function Faq(){
  const [isOpen, setIsOpen] = useState({
    question1: false,
    question2: false,
    question3: false,
  });
//  const newOpenItems = { ...isOpen };
//  isOpen.forEach((item, i) => {
//   if (i !== index) {
//     newOpenItems[i] = false;
//   }
// });

  const toggleAccordion = (question) => {
    for(let i in isOpen){
      if(i !== question){
        isOpen[i] = false
      }
    }
    setIsOpen({
      ...isOpen,
      [question]: !isOpen[question],
    });
  };



    
    return (
        <Box p={16}>
        <Text fontSize="3.5rem" color="#12406f" textAlign="center" fontWeight="bold">
          FAQ
        </Text>
        <Accordion allowToggle>
          <SimpleGrid spacing={6} columns={{sm:1,md:1,lg:1}}>
            <Box>
              <AccordionItem>
                <h2>
                  <AccordionButton bg={"white"} borderBottom={"1px solid #E5E5E5"} onClick={() => toggleAccordion("question1")}>
                    <Box as="b" flex="1" textAlign="left" fontSize="1.3rem" color={isOpen.question1 ? "#12406f" : "black"}>
                      How does an investor gain access to MF Utitlity?
                    </Box>
                    {isOpen.question1 ? <GrFormSubtract color="#12406f" /> : <GrFormAdd color="black" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="1.3rem" textAlign={"justify"} width={"100%"} >
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ab iure non nesciunt temporibus itaque facilis, eligendi blanditiis, nulla rerum aut iste soluta inventore error debitis dolore quo. Nesciunt, quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum doloribus et. Repudiandae quod ut hic odio excepturi, consectetur vitae alias, minus nisi eveniet quia consequatur, earum quidem iste nobis!
                </AccordionPanel>
              </AccordionItem>
            </Box>
            <Box>
              <AccordionItem>
                <h2>
                  <AccordionButton bg={"white"} borderBottom={"1px solid #E5E5E5"} onClick={() => toggleAccordion("question2")}>
                    <Box as="b" flex="1" textAlign="left" fontSize="1.3rem" color={isOpen.question2 ? "#12406f" : "black"}>
                      Will investors be able to have multiple Common Account Numbers?
                    </Box>
                    {isOpen.question2 ? <GrFormSubtract color="#12406f" /> : <GrFormAdd color="black" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="1.3rem">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur nesciunt voluptate veritatis, sunt dolorum consectetur quasi officiis! Dolor iste cumque ab nihil, placeat illum quod obcaecati tempore quisquam impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias unde illo corrupti sequi harum? Distinctio reiciendis, quibusdam fugiat id corporis laborum deleniti cum placeat amet dolores tempora magni temporibus similique!
                </AccordionPanel>
              </AccordionItem>
            </Box>
            <Box>
              <AccordionItem>
                <h2>
                  <AccordionButton bg={"white"} borderBottom={"1px solid #E5E5E5"}  onClick={() => toggleAccordion("question3")}>
                    <Box as="b" flex="1" textAlign="left" fontSize="1.3rem" color={isOpen.question3 ? "#12406f" : "black"}>
                      How does an investor gain access to MF Utitlity?
                    </Box>
                    {isOpen.question3 ? <GrFormSubtract color="#12406f" /> : <GrFormAdd color="black" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="1.3rem">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis, in culpa officia deleniti debitis vitae ea. Minus, consequuntur ullam veritatis iste, magni dolorem, voluptas dolore soluta explicabo quas a! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nam porro perferendis, at quod neque, tempore eligendi enim totam culpa voluptas illo nesciunt sequi, architecto minus maiores asperiores pariatur iure!
                </AccordionPanel>
              </AccordionItem>
            </Box>
          </SimpleGrid>
        </Accordion>
      </Box>
    )
}

export default Faq