export interface RawAptitudeQuestion {
  category: 'QUANTITATIVE' | 'LOGICAL_REASONING' | 'VERBAL_ABILITY' | 'TECHNICAL_MCQ';
  subcategory: string;
  difficulty: 'BEGINNER' | 'EASY' | 'MEDIUM' | 'HARD';
  questionText: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
}

const SYL_OPTS = [
  { id: 'A', text: 'Only conclusion I follows' },
  { id: 'B', text: 'Only conclusion II follows' },
  { id: 'C', text: 'Both conclusions follow' },
  { id: 'D', text: 'Neither conclusion follows' },
];

const DS_OPTS = [
  { id: 'A', text: 'Statement I alone' },
  { id: 'B', text: 'Statement II alone' },
  { id: 'C', text: 'Both statements together' },
  { id: 'D', text: 'Each statement alone' },
  { id: 'E', text: 'Neither statement, even together' },
];

const ARR_1 = 'Arrangement: Five people A, B, C, D and E sit in a straight row facing north. D sits at the extreme left. B sits immediately to the right of D. A sits at the extreme right. E sits immediately to the left of A.\n\n';
const ARR_2 = 'Arrangement: Six people P, Q, R, S, T and U sit in a straight row facing north. Q sits second to the left of T. P sits immediately to the right of Q. R sits at the extreme right. S sits immediately to the left of R. U sits somewhere to the right of T.\n\n';
const ARR_3 = 'Arrangement: Six people A, B, C, D, E and F sit around a circular table, all facing the centre. A sits opposite D. B sits immediately clockwise of A, and C sits second clockwise from A. E sits immediately clockwise of D. F occupies the remaining seat.\n\n';
const ARR_4 = 'Arrangement: Five people J, K, L, M and N live on five different floors of a building. Floor 1 is the lowest and floor 5 is the highest. N lives on the top floor, and L lives immediately below N. J lives on floor 2. K lives above J but below L. M lives below J.\n\n';

const lr = (
  subcategory: string,
  difficulty: 'EASY' | 'MEDIUM' | 'HARD',
  questionText: string,
  options: { id: string; text: string }[],
  correctOptionId: string,
  explanation: string
): RawAptitudeQuestion => ({
  category: 'LOGICAL_REASONING',
  subcategory,
  difficulty,
  questionText,
  options,
  correctOptionId,
  explanation,
});

const opt4 = (a: string, b: string, c: string, d: string) => [
  { id: 'A', text: a },
  { id: 'B', text: b },
  { id: 'C', text: c },
  { id: 'D', text: d },
];

export const LOGICAL_REASONING_QUESTIONS: RawAptitudeQuestion[] = [
  // Syllogisms (1-20)
  lr('Syllogisms', 'MEDIUM', 'Statements: All pens are tools. Some tools are made of metal.\nConclusions: I. Some pens are made of metal. II. Some metal objects are tools.', SYL_OPTS, 'B', 'The second statement guarantees that some tools are metal. It does not connect pens to those metal tools.'),
  lr('Syllogisms', 'MEDIUM', 'Statements: No cats are dogs. Some pets are cats.\nConclusions: I. Some pets are not dogs. II. No pets are dogs.', SYL_OPTS, 'A', 'The pets that are cats cannot be dogs. This does not establish that every pet is not a dog.'),
  lr('Syllogisms', 'MEDIUM', 'Statements: All roses are flowers. All flowers are plants.\nConclusions: I. All roses are plants. II. Some plants are roses.', SYL_OPTS, 'A', 'The universal chain proves I. II assumes that roses exist, which is not stated.'),
  lr('Syllogisms', 'EASY', 'Statements: Some books are novels. All novels are lengthy.\nConclusions: I. Some books are lengthy. II. All books are lengthy.', SYL_OPTS, 'A', 'The books that are novels must be lengthy. Nothing is said about all other books.'),
  lr('Syllogisms', 'MEDIUM', 'Statements: No laptops are tablets. All tablets are touch-screen devices.\nConclusions: I. No laptop is a tablet. II. Some touch-screen devices are tablets.', SYL_OPTS, 'A', 'I repeats a given statement. II requires the existence of at least one tablet, which is not given.'),
  lr('Syllogisms', 'EASY', 'Statements: Some artists are singers. Some singers are dancers.\nConclusions: I. Some artists are dancers. II. Some dancers are singers.', SYL_OPTS, 'B', 'The singers who are dancers establish II. The two groups of singers need not be the same, so I does not follow.'),
  lr('Syllogisms', 'EASY', 'Statements: All engineers are graduates. Some graduates are managers.\nConclusions: I. Some engineers are managers. II. Some managers are graduates.', SYL_OPTS, 'B', 'Some graduates are managers, so some managers are graduates. Those graduates are not necessarily engineers.'),
  lr('Syllogisms', 'MEDIUM', 'Statements: No fruits are metals. Some metals are liquids.\nConclusions: I. Some liquids are not fruits. II. No liquid is a fruit.', SYL_OPTS, 'A', 'The metals that are liquids cannot be fruits. This does not rule out liquids that are not metals but are fruits.'),
  lr('Syllogisms', 'MEDIUM', 'Statements: All cups are containers. No container is edible.\nConclusions: I. No cup is edible. II. Some containers are cups.', SYL_OPTS, 'A', 'Every cup is a container and no container is edible. The existence of cups is not guaranteed.'),
  lr('Syllogisms', 'EASY', 'Statements: Some cars are electric. All electric vehicles are quiet.\nConclusions: I. Some cars are quiet. II. All cars are quiet.', SYL_OPTS, 'A', 'The electric cars are quiet, proving I. Other cars may not be quiet.'),
  lr('Syllogisms', 'EASY', 'Statements: All poets are imaginative. Some imaginative people are scientists.\nConclusions: I. Some poets are scientists. II. Some scientists are imaginative.', SYL_OPTS, 'B', 'The second statement directly establishes that some scientists are imaginative. It does not connect poets to scientists.'),
  lr('Syllogisms', 'MEDIUM', 'Statements: Some keys are locks. No lock is digital.\nConclusions: I. Some keys are not digital. II. No key is digital.', SYL_OPTS, 'A', 'The keys that are locks cannot be digital. Other keys may be digital.'),
  lr('Syllogisms', 'MEDIUM', 'Statements: No teachers are careless. Some teachers are strict.\nConclusions: I. Some strict people are not careless. II. Some strict people are teachers.', SYL_OPTS, 'C', 'The teachers who are strict are also not careless, establishing both conclusions.'),
  lr('Syllogisms', 'EASY', 'Statements: All apples are fruits. Some fruits are sour.\nConclusions: I. Some apples are sour. II. Some sour things are fruits.', SYL_OPTS, 'B', 'Some fruits are sour, which proves II. Those sour fruits need not be apples.'),
  lr('Syllogisms', 'EASY', 'Statements: Some roads are highways. All highways are busy.\nConclusions: I. Some roads are busy. II. All roads are busy.', SYL_OPTS, 'A', 'The roads that are highways are busy. The statement does not cover every road.'),
  lr('Syllogisms', 'HARD', 'Statements: No singers are silent. All silent people are calm.\nConclusions: I. No singer is calm. II. Some calm people are silent.', SYL_OPTS, 'D', 'A singer could be calm without being silent, so I is not certain. The existence of silent people is not established for II.'),
  lr('Syllogisms', 'EASY', 'Statements: All squares are rectangles. All rectangles are quadrilaterals.\nConclusions: I. All squares are quadrilaterals. II. All quadrilaterals are squares.', SYL_OPTS, 'A', 'The category chain proves I. The reverse relationship in II is not given.'),
  lr('Syllogisms', 'EASY', 'Statements: Some phones are cameras. Some cameras are waterproof.\nConclusions: I. Some phones are waterproof. II. Some waterproof things are cameras.', SYL_OPTS, 'B', 'Some cameras are waterproof, proving II. The waterproof cameras need not be the same cameras that are phones.'),
  lr('Syllogisms', 'MEDIUM', 'Statements: No fish are mammals. Some mammals are aquatic.\nConclusions: I. Some aquatic animals are not fish. II. Some fish are aquatic.', SYL_OPTS, 'A', 'The aquatic mammals are not fish, proving I. Nothing establishes that any fish are aquatic.'),
  lr('Syllogisms', 'EASY', 'Statements: All dancers are fit. Some fit people are athletes.\nConclusions: I. Some dancers are athletes. II. Some athletes are fit.', SYL_OPTS, 'B', 'Some fit people are athletes, so some athletes are fit. Those people need not be dancers.'),

  // Blood Relations (21-40)
  lr('Blood Relations', 'EASY', "Riya points to a photograph and says, 'He is the son of my mother's only daughter.' How is the boy related to Riya?", opt4('Nephew', 'Brother', 'Father', 'Son'), 'D', "Riya is her mother's only daughter; therefore, the boy is Riya's son."),
  lr('Blood Relations', 'EASY', 'M is the brother of N. N is the mother of P. How is M related to P?', opt4('Grandfather', 'Nephew', 'Cousin', 'Maternal uncle'), 'D', "M is the brother of P's mother, so M is P's maternal uncle."),
  lr('Blood Relations', 'EASY', 'A is the father of B. B is the sister of C. How is A related to C?', opt4('Brother', 'Mother', 'Uncle', 'Father'), 'D', "B and C are siblings, so their stated father A is also C's father."),
  lr('Blood Relations', 'EASY', "L is the brother of K's mother. How is L related to K?", opt4('Paternal uncle', 'Maternal uncle', 'Grandfather', 'Brother'), 'B', "He is the brother of K's mother, making him K's maternal uncle."),
  lr('Blood Relations', 'MEDIUM', 'P is the daughter of Q. Q is the son of R. How is R related to P?', opt4('Grandfather', 'Uncle', 'Grandmother', 'Grandparent'), 'D', "R is Q's parent and Q is P's parent. R's gender is not specified, so R is P's grandparent."),
  lr('Blood Relations', 'EASY', 'A is the wife of B. C is the son of A and B. How is C related to B?', opt4('Son', 'Brother', 'Father', 'Husband'), 'A', 'C is explicitly stated to be the son of A and B, including B.'),
  lr('Blood Relations', 'EASY', 'D and E are children of F. D is the brother of E. How is D related to F?', opt4('Son', 'Uncle', 'Daughter', 'Father'), 'A', "D is male and is F's child, so D is F's son."),
  lr('Blood Relations', 'MEDIUM', 'X is the mother of Y. Y is the father of Z. How is X related to Z?', opt4('Maternal grandmother', 'Aunt', 'Paternal grandmother', 'Sister'), 'C', "Y is Z's father; therefore, Y's mother X is Z's paternal grandmother."),
  lr('Blood Relations', 'MEDIUM', 'A is the only son of B. C is the daughter of A. How is B related to C?', opt4('Mother', 'Aunt', 'Grandparent', 'Grandchild'), 'C', "B is the parent of A, and A is the parent of C. B is C's grandparent; B's gender is not known."),
  lr('Blood Relations', 'EASY', "P is the brother of Q. Q is S's mother, and R is S's father. How is P related to S?", opt4('Maternal uncle', 'Cousin', 'Paternal uncle', 'Brother'), 'A', "P is the brother of S's mother, so P is S's maternal uncle."),
  lr('Blood Relations', 'MEDIUM', 'T is the father of U. V is the wife of U. W is the son of U and V. How is T related to W?', opt4('Grandfather', 'Father', 'Brother', 'Uncle'), 'A', "T is the father of W's father U, so T is W's paternal grandfather."),
  lr('Blood Relations', 'MEDIUM', 'A is the mother of B. B is the sister of C. C is the father of D. How is A related to D?', opt4('Grandmother', 'Sister', 'Aunt', 'Mother'), 'A', "A is C's mother, and C is D's father. Hence, A is D's paternal grandmother."),
  lr('Blood Relations', 'MEDIUM', 'M is the daughter of N. N is the brother of O. O is the mother of P. How is M related to P?', opt4('Niece', 'Aunt', 'Cousin', 'Sister'), 'C', 'N and O are siblings; their children M and P are cousins.'),
  lr('Blood Relations', 'EASY', 'R is the son of S. S is the daughter of T. How is R related to T?', opt4('Grandson', 'Brother', 'Son', 'Nephew'), 'A', "R is the child of T's daughter, so R is T's grandson."),
  lr('Blood Relations', 'MEDIUM', 'A is the father of B. C is the mother of A. D is the sister of B. How is C related to D?', opt4('Paternal grandmother', 'Mother', 'Aunt', 'Maternal grandmother'), 'A', "D is B's sister and A's child. C is A's mother, making her D's paternal grandmother."),
  lr('Blood Relations', 'MEDIUM', 'P is the husband of Q. Q is the sister of R. R is the father of S. How is P related to S?', opt4('Grandfather', 'Uncle by marriage', 'Maternal uncle', 'Cousin'), 'B', "Q is S's paternal aunt. Her husband P is S's uncle by marriage."),
  lr('Blood Relations', 'MEDIUM', 'L is the daughter of M. M is the wife of N. N is the brother of O. O is the mother of P. How is L related to P?', opt4('Cousin', 'Sister', 'Niece', 'Aunt'), 'A', 'N and O are siblings, so their children L and P are cousins.'),
  lr('Blood Relations', 'MEDIUM', 'A is the mother of B. B is the father of C. C is the sister of D. How is A related to D?', opt4('Grandmother', 'Mother', 'Great-grandmother', 'Aunt'), 'A', "C and D are children of B; A is B's mother, so A is D's grandmother."),
  lr('Blood Relations', 'EASY', "Meera points to a boy and says, 'He is the son of my mother's only daughter.' How is the boy related to Meera?", opt4('Cousin', 'Son', 'Brother', 'Nephew'), 'B', "Meera is her mother's only daughter, so the boy is Meera's son."),
  lr('Blood Relations', 'MEDIUM', 'A is the son of B. B is the sister of C. C is the father of D. How is A related to D?', opt4('Nephew', 'Uncle', 'Cousin', 'Brother'), 'C', 'B and C are siblings; their children A and D are cousins.'),

  // Seating Arrangements (41-60)
  lr('Seating Arrangements', 'EASY', ARR_1 + 'Who sits in the middle position?', opt4('D', 'C', 'A', 'B'), 'B', 'The order is D - B - C - E - A; C occupies the third seat.'),
  lr('Seating Arrangements', 'EASY', ARR_1 + 'Who sits second from the left?', opt4('C', 'A', 'E', 'B'), 'D', 'The order from left to right is D, B, C, E, A.'),
  lr('Seating Arrangements', 'EASY', ARR_1 + 'Who sits immediately to the right of C?', opt4('A', 'D', 'B', 'E'), 'D', 'E is immediately to the right of C.'),
  lr('Seating Arrangements', 'EASY', ARR_1 + 'Which two people occupy the end seats?', opt4('A and C', 'C and D', 'B and E', 'A and D'), 'D', 'D is at the left end and A is at the right end.'),
  lr('Seating Arrangements', 'EASY', ARR_1 + "What is E's position from the left?", opt4('Fourth', 'Second', 'Third', 'Fifth'), 'A', 'E occupies the fourth seat.'),

  lr('Seating Arrangements', 'MEDIUM', ARR_2 + 'Who sits at the extreme left?', opt4('U', 'Q', 'R', 'P'), 'B', 'The order is Q - P - T - U - S - R.'),
  lr('Seating Arrangements', 'MEDIUM', ARR_2 + 'Who sits between Q and T?', opt4('S', 'U', 'P', 'R'), 'C', 'P is immediately to the right of Q and immediately to the left of T.'),
  lr('Seating Arrangements', 'MEDIUM', ARR_2 + 'Who sits immediately to the left of R?', opt4('T', 'S', 'U', 'P'), 'B', 'S is immediately to the left of R in the order Q - P - T - U - S - R.'),
  lr('Seating Arrangements', 'MEDIUM', ARR_2 + "What is U's position from the left?", opt4('Third', 'Fourth', 'Fifth', 'Second'), 'B', 'U is fourth from the left.'),
  lr('Seating Arrangements', 'MEDIUM', ARR_2 + 'Which pair sits next to each other?', opt4('Q and T', 'Q and R', 'U and S', 'P and U'), 'C', 'U and S occupy consecutive seats.'),

  lr('Seating Arrangements', 'MEDIUM', ARR_3 + 'Who sits opposite A?', opt4('E', 'C', 'D', 'B'), 'C', 'In the clockwise order A, B, C, D, E, F, D is opposite A.'),
  lr('Seating Arrangements', 'EASY', ARR_3 + 'Who sits immediately clockwise from A?', opt4('F', 'B', 'C', 'D'), 'B', 'B is immediately clockwise from A as given in the arrangement.'),
  lr('Seating Arrangements', 'EASY', ARR_3 + 'Who sits second clockwise from A?', opt4('E', 'C', 'B', 'F'), 'B', 'C is second clockwise from A.'),
  lr('Seating Arrangements', 'EASY', ARR_3 + 'Who sits immediately clockwise from D?', opt4('C', 'F', 'E', 'A'), 'C', 'E is immediately clockwise from D.'),
  lr('Seating Arrangements', 'MEDIUM', ARR_3 + 'Who sits immediately anticlockwise from A?', opt4('F', 'B', 'C', 'E'), 'A', 'F sits immediately anticlockwise from A in the stated clockwise order.'),

  lr('Seating Arrangements', 'EASY', ARR_4 + 'Who lives on the highest floor?', opt4('N', 'J', 'L', 'K'), 'A', 'N lives on floor 5, the highest floor.'),
  lr('Seating Arrangements', 'EASY', ARR_4 + 'Who lives immediately below L?', opt4('N', 'K', 'M', 'J'), 'B', 'The floor order from bottom to top is M, J, K, L, N.'),
  lr('Seating Arrangements', 'EASY', ARR_4 + 'On which floor does J live?', opt4('Floor 2', 'Floor 1', 'Floor 4', 'Floor 3'), 'A', 'J is stated to live on floor 2.'),
  lr('Seating Arrangements', 'EASY', ARR_4 + 'Who lives on the lowest floor?', opt4('J', 'N', 'M', 'K'), 'C', 'M occupies floor 1, the lowest floor.'),
  lr('Seating Arrangements', 'EASY', ARR_4 + 'Who lives between J and L?', opt4('K', 'J', 'N', 'M'), 'A', 'K lives on floor 3, between J on floor 2 and L on floor 4.'),

  // Coding-Decoding (61-80)
  lr('Coding-Decoding', 'EASY', 'In a code, each letter is replaced by the next letter in the alphabet (A becomes B, B becomes C, and so on). If CAT is coded as DBU, how is DOG coded?', opt4('EOG', 'FPH', 'EPH', 'EPG'), 'C', 'Move each letter one step forward: D-E, O-P, G-H.'),
  lr('Coding-Decoding', 'EASY', 'In a code, every letter is moved one step forward in the alphabet. If TABLE is coded as UBCMF, how is CHAIR coded?', opt4('DIBJS', 'DIBJR', 'EJCKT', 'CGAHR'), 'A', 'C-H-A-I-R becomes D-I-B-J-S.'),
  lr('Coding-Decoding', 'MEDIUM', 'A word is coded by replacing each letter with its opposite in the alphabet (A with Z, B with Y, and so on). If BOOK becomes YLLP, how does LAMP become coded?', opt4('OZMK', 'OZNK', 'PZML', 'NZOK'), 'B', 'L maps to O, A to Z, M to N, and P to K.'),
  lr('Coding-Decoding', 'EASY', 'Each letter is moved two places forward in the alphabet. If MANGO is coded as OCPIQ, how is GRAPE coded?', opt4('JUDSH', 'ITCRG', 'ITBQG', 'HBSQF'), 'B', 'G-R-A-P-E becomes I-T-C-R-G.'),
  lr('Coding-Decoding', 'EASY', 'If each letter is replaced by the next letter in the alphabet, DELHI is coded as EFMIJ. How will JAIPUR be coded?', opt4('LCKQWT', 'KBJQVS', 'KBJQVR', 'JZHOQT'), 'B', 'J-A-I-P-U-R becomes K-B-J-Q-V-S.'),
  lr('Coding-Decoding', 'EASY', 'A code reverses the order of all letters in a word. If TRAIN becomes NIART, how will PLANE be coded?', opt4('ELANP', 'NALPE', 'ENALP', 'ENAPL'), 'C', 'Reversing PLANE gives ENALP.'),
  lr('Coding-Decoding', 'MEDIUM', 'In a code, each letter is first moved one step forward and then the resulting word is reversed. GAME becomes FNBH. How will ROAD be coded?', opt4('SPBE', 'EBPS', 'FCQT', 'EBPR'), 'B', 'ROAD becomes SPBE after shifting; reversing it gives EBPS.'),
  lr('Coding-Decoding', 'EASY', 'The code for a word consists of the alphabetical positions of its letters. If DOG is coded as 4-15-7, how is HEN coded?', opt4('8-5-14', '8-6-14', '7-5-13', '8-4-14'), 'A', 'H, E and N are the 8th, 5th and 14th letters.'),
  lr('Coding-Decoding', 'MEDIUM', 'A word is coded by adding the alphabetical positions of all its letters. If PEN is coded as 35, what is the code for BOOK?', opt4('44', '43', '42', '41'), 'B', 'B + O + O + K = 2 + 15 + 15 + 11 = 43.'),
  lr('Coding-Decoding', 'MEDIUM', 'In a code, vowels are moved one letter forward and consonants one letter backward. If CODE becomes BPCF, how will MATH be coded?', opt4('NBUG', 'LZSG', 'LBSG', 'MBTG'), 'C', 'M becomes L, A becomes B, T becomes S, and H becomes G.'),
  lr('Coding-Decoding', 'EASY', 'In a code, each adjacent pair of letters is swapped. Thus ABCD becomes BADC. How will WXYZ be coded?', opt4('XWYZ', 'XWZY', 'YWZX', 'WXZY'), 'B', 'Swap W with X and Y with Z to obtain XWZY.'),
  lr('Coding-Decoding', 'MEDIUM', 'Each letter is moved three places forward in the alphabet. If KING becomes NLQJ, how will LION be coded?', opt4('OLRQ', 'NKQP', 'PMTS', 'OLRP'), 'A', 'L-I-O-N becomes O-L-R-Q.'),
  lr('Coding-Decoding', 'EASY', 'A code writes each letter as its alphabetical position. If FISH is written as 6-9-19-8, how is BIRD written?', opt4('2-9-18-4', '2-9-17-4', '2-8-18-4', '3-9-18-4'), 'A', 'B, I, R and D have positions 2, 9, 18 and 4.'),
  lr('Coding-Decoding', 'EASY', 'Each letter is replaced by its alphabetical position. If ACE is coded as 1-3-5, what is the code for BED?', opt4('2-4-5', '2-5-4', '2-6-4', '3-5-4'), 'B', 'B, E and D are in positions 2, 5 and 4.'),
  lr('Coding-Decoding', 'EASY', 'A word is coded by writing the alphabetical position of each letter in order. What is the code for MOON?', opt4('12-15-15-14', '13-15-14-14', '13-14-14-15', '13-15-15-14'), 'D', 'M, O, O and N correspond to 13, 15, 15 and 14.'),
  lr('Coding-Decoding', 'EASY', 'A code uses the alphabetical position of each letter. If FAN is represented as 6-1-14, how is CUP represented?', opt4('3-20-16', '4-21-16', '3-21-15', '3-21-16'), 'D', 'C, U and P are the 3rd, 21st and 16th letters.'),
  lr('Coding-Decoding', 'EASY', 'In a code, every letter is replaced by the previous letter in the alphabet (A becomes Z). If DOG becomes CNF, how will LAMP be coded?', opt4('KZLO', 'LBMN', 'KZMN', 'KAMO'), 'A', 'L becomes K, A becomes Z, M becomes L, and P becomes O.'),
  lr('Coding-Decoding', 'MEDIUM', 'In a code, each vowel is replaced by the next vowel in the cycle A-E-I-O-U-A, while consonants remain unchanged. If LOGIC becomes LUGOC, how will MUSIC be coded?', opt4('MASIC', 'NATOD', 'MASOC', 'MUSAC'), 'C', 'M, S and C stay unchanged; U becomes A and I becomes O.'),
  lr('Coding-Decoding', 'MEDIUM', 'Each letter is replaced by its opposite in the alphabet (A with Z, B with Y, and so on). If ACE becomes ZXV, how will DOG be coded?', opt4('WLT', 'WLU', 'XLT', 'DPT'), 'A', 'D maps to W, O maps to L, and G maps to T.'),
  lr('Coding-Decoding', 'EASY', 'In a code, every letter is replaced by the previous letter in the alphabet. If MIND becomes LHMC, how will CODE be coded?', opt4('BNCE', 'BNDC', 'BNCD', 'CNDE'), 'C', 'C becomes B, O becomes N, D becomes C, and E becomes D.'),

  // Data Sufficiency (81-100)
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nIs x greater than 5?\nStatement I: x = 7.\nStatement II: x > 3.', DS_OPTS, 'A', 'I fixes x at 7 and answers yes. II allows values both below and above 5.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nWhat is the value of x?\nStatement I: x + y = 10.\nStatement II: y = 4.', DS_OPTS, 'C', 'Neither statement alone fixes x. Together, x = 10 - 4 = 6.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nIs the integer n even?\nStatement I: n is divisible by 4.\nStatement II: n is divisible by 2.', DS_OPTS, 'D', 'Either condition guarantees that the integer is even.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nHow old is A?\nStatement I: A is 5 years older than B.\nStatement II: B is 20 years old.', DS_OPTS, 'C', "I gives only an age difference and II gives only B's age. Together, A is 25."),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nIs triangle ABC equilateral?\nStatement I: AB = BC = CA.\nStatement II: Each angle of triangle ABC is 60 degrees.', DS_OPTS, 'D', 'Either equal side lengths or three 60-degree angles establishes an equilateral triangle.'),
  lr('Data Sufficiency', 'MEDIUM', 'Decide which statements are sufficient to answer:\nIs the integer p positive?\nStatement I: p squared = 25.\nStatement II: p > 0.', DS_OPTS, 'B', 'I permits p = 5 or p = -5. II directly establishes that p is positive.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nWhat is the value of 2x + 3?\nStatement I: x = 4.\nStatement II: x + y = 10 and y = 6.', DS_OPTS, 'D', 'I gives x = 4 directly. II also gives x = 4, so either statement is sufficient.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nIs point A north of point B?\nStatement I: A is 3 km north of C.\nStatement II: B is 2 km south of C.', DS_OPTS, 'C', "Each statement alone leaves the other point's location unknown. Together, A is 5 km north of B."),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nWhat is the area of a rectangle?\nStatement I: Its length is 8 cm.\nStatement II: Its width is 5 cm.', DS_OPTS, 'C', 'Neither dimension alone determines area. Together, area = 8 x 5 = 40 square cm.'),
  lr('Data Sufficiency', 'MEDIUM', 'Decide which statements are sufficient to answer:\nIs the integer x divisible by 6?\nStatement I: x is divisible by 2.\nStatement II: x is divisible by 3.', DS_OPTS, 'C', 'Divisibility by 2 and 3 together guarantees divisibility by 6 for an integer.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nIs m equal to n?\nStatement I: m + n = 10.\nStatement II: m - n = 0.', DS_OPTS, 'B', 'I allows many unequal pairs. II directly states that their difference is zero.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nWhat is the perimeter of a square?\nStatement I: Its side length is 7 cm.\nStatement II: Its area is 49 square cm.', DS_OPTS, 'D', 'I gives perimeter 28 cm. A square with area 49 has side 7 cm, so II is sufficient too.'),
  lr('Data Sufficiency', 'MEDIUM', 'Decide which statements are sufficient to answer:\nIs the number prime?\nStatement I: The number is 17.\nStatement II: The number is an odd integer greater than 1.', DS_OPTS, 'A', '17 is prime. An odd integer greater than 1 could be composite, such as 9.'),
  lr('Data Sufficiency', 'MEDIUM', 'Decide which statements are sufficient to answer:\nWhat is the value of x?\nStatement I: 3x = 21.\nStatement II: x squared = 49.', DS_OPTS, 'A', 'I gives x = 7. II permits both 7 and -7, so it does not determine a unique value.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nDoes A have more than two siblings?\nStatement I: A has three brothers and one sister.\nStatement II: A has four siblings.', DS_OPTS, 'D', 'Each statement independently establishes that A has four siblings.'),
  lr('Data Sufficiency', 'MEDIUM', 'Decide which statements are sufficient to answer:\nIs the simple quadrilateral ABCD a rectangle?\nStatement I: All four interior angles are 90 degrees.\nStatement II: Both pairs of opposite sides are equal, and one interior angle is 90 degrees.', DS_OPTS, 'D', 'I directly establishes a rectangle. II establishes a parallelogram with a right angle, which is also a rectangle.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nHow many students are in a class that contains only boys and girls?\nStatement I: There are 18 boys.\nStatement II: There are 22 girls.', DS_OPTS, 'C', 'Neither count alone gives the total. Together, there are 18 + 22 = 40 students.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nIs x equal to zero?\nStatement I: x squared = 0.\nStatement II: 2x = 0.', DS_OPTS, 'D', 'Each equation independently has the unique solution x = 0.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nWhat is the average of three numbers?\nStatement I: Their sum is 30.\nStatement II: The three numbers are 8, 10 and 12.', DS_OPTS, 'D', 'I gives an average of 30/3 = 10. II also gives an average of (8 + 10 + 12)/3 = 10.'),
  lr('Data Sufficiency', 'EASY', 'Decide which statements are sufficient to answer:\nIs k greater than 10?\nStatement I: k = 11.\nStatement II: k squared = 121 and k is positive.', DS_OPTS, 'D', 'I directly gives k = 11. II gives the positive root k = 11, so each is sufficient.'),
];
