var words = ["peek", "tool", "brag", "puke", "tarn", "heat", "caps", "kern", "yews", "fees", "wane", "bomb", "pouf", "vast", "amyl", "waly", "ails", "vugs", "monk", "shim",
    "olea", "alga", "rick", "rook", "male", "celt", "seam", "kata", "yett", "lair", "ream", "node", "aper", "snub", "pili", "tars", "reel", "gods", "rung", "slid",
    "lens", "gigs", "sets", "acre", "glow", "sled", "wows", "yare", "kine", "done", "okra", "ower", "alum", "abet", "wipe", "mens", "book", "afar", "lily", "than",
    "swab", "bogs", "spat", "crag", "corm", "fads", "orbs", "yeuk", "skid", "rows", "girl", "wand", "wale", "jays", "ares", "yean", "beer", "icon", "maul", "ride",
    "plop", "tern", "laws", "fold", "coed", "nuts", "cyst", "gals", "mast", "echo", "whey", "sued", "such", "tent", "ugly", "beta", "nevi", "yogh", "many", "rapt",
    "okay", "zeds", "thaw", "scan", "ease", "pass", "hugs", "cure", "ring", "cops", "hall", "skep", "saps", "coop", "they", "jilt", "revs", "beep", "gull", "shah",
    "hard", "lass", "case", "cord", "lout", "sown", "boys", "bonk", "oaks", "mayo", "emir", "cast", "jali", "viol", "skit", "coin", "chat", "rues", "isle", "clod",
    "hats", "lips", "quiz", "soot", "tees", "bark", "meme", "nosy", "beef", "eats", "omni", "pity", "oleo", "bury", "lush", "rust", "warm", "bend", "door", "thee",
    "clot", "dear", "vats", "scab", "acid", "eery", "loti", "week", "pock", "lute", "yank", "rage", "draw", "smit", "zeps", "fail", "made", "trot", "exes", "dyne",
    "drop", "silt", "hide", "unto", "oohs", "mobs", "bees", "milk", "reds", "mope", "dine", "mice", "vela", "punt", "onto", "crab", "dice", "bats", "flog", "riel",
    "cyan", "kilt", "hero", "tick", "peas", "lube", "lets", "fozy", "grin", "whir", "miff", "judo", "lick", "pimp", "pint", "dork", "view", "toot", "carp", "silo",
    "flee", "peal", "styx", "buts", "tizz", "ditz", "slur", "hark", "ells", "gala", "bios", "defy", "fair", "labs", "grub", "axon", "fogy", "evil", "town", "dank",
    "aids", "take", "worn", "acme", "axis", "umbo", "drug", "ohms", "yins", "faux", "hint", "toed", "seek", "digs", "bile", "logo", "meow", "vote", "eves", "lira",
    "forb", "goer", "hops", "zizz", "dint", "debt", "dabs", "yawn", "vial", "myna", "sass", "warp", "real", "vest", "wack", "lace", "darn", "whim", "hath", "best",
    "suqs", "says", "cues", "roan", "mesh", "lede", "ashy", "yill", "zonk", "mums", "resh", "amid", "kill", "scot", "code", "dews", "bait", "inky", "kyat", "halt",
    "teed", "deys", "jock", "bird", "goes", "mass", "ewer", "goos", "jots", "tile", "tics", "boxy", "full", "wait", "user", "soys", "grab", "dorr", "tufa", "crew",
    "doom", "guck", "eave", "colt", "anon", "quad", "barb", "dark", "brad", "lack", "lake", "silk", "glee", "soft", "cedi", "prow", "papa", "rule", "race", "bole",
    "soda", "vape", "raze", "corn", "gape", "bunk", "scum", "lode", "glum", "deal", "twit", "nave", "talc", "mitt", "husk", "meet", "crib", "fave", "spun", "wifi",
    "plea", "amps", "akin", "exit", "girn", "even", "spin", "dray", "crow", "bleb", "czar", "arty", "drab", "zoic", "molt", "mica", "joke", "tall", "joys", "jute",
    "faun", "pink", "cram", "brux", "qoph", "sick", "soul", "thru", "curs", "tend", "pour", "bled", "firs", "work", "oils", "cite", "kick", "cute", "zaps", "show",
    "seta", "uvea", "laps", "soar", "tsar", "blah", "snot", "bias", "suns", "whop", "spur", "ball", "gong", "wife", "jolt", "icer", "ynal", "blip", "cuff", "cats",
    "bits", "fume", "mace", "verb", "ever", "sour", "bore", "loot", "maws", "moat", "bene", "tuck", "suck", "baht", "demy", "pond", "lain", "sift", "aver", "ergo",
    "wadi", "buzz", "buds", "half", "hoer", "sawn", "goal", "loon", "bind", "wide", "note", "swan", "cosy", "apes", "lest", "pang", "leus", "vile", "paid", "pipe",
    "plot", "mugs", "move", "ween", "bash", "side", "malt", "meek", "arch", "knew", "flab", "buns", "back", "poor", "pied", "like", "brew", "yesk", "poxy", "each",
    "stew", "crux", "noun", "both", "rays", "lift", "lamb", "razz", "rami", "ziti", "ywis", "rubs", "gags", "sell", "yarn", "tact", "rout", "ahas", "bane", "spry",
    "furs", "flan", "hike", "mode", "typo", "prep", "loll", "bass", "rote", "yagi", "keps", "vita", "hobo", "tilt", "pick", "neck", "slat", "hose", "muon", "read",
    "jamb", "clad", "vear", "yaff", "haws", "scuz", "curt", "leks", "musk", "pore", "runt", "vies", "rind", "alto", "mans", "uses", "seen", "bolt", "zerk", "help",
    "yegg", "goth", "ploy", "stir", "loom", "atop", "snap", "porn", "cant", "coil", "mead", "boon", "stun", "look", "days", "flew", "life", "ayin", "woos", "moms",
    "kaph", "weal", "clop", "road", "tamp", "bout", "mole", "hump", "lame", "hilt", "hurt", "nibs", "tiff", "quid", "gobs", "gent", "alps", "limp", "imps", "raid",
    "anus", "suds", "navy", "busk", "jigs", "cwms", "posh", "cede", "nits", "sext", "arks", "hymn", "must", "hear", "paps", "scud", "limn", "feat", "earn", "yeah",
    "lust", "lynx", "zulu", "anal", "gear", "neap", "fuff", "shun", "azym", "bugs", "pool", "zest", "yuan", "dead", "mown", "pulp", "lyre", "mine", "yoke", "ides",
    "need", "ebbs", "hate", "punk", "cubs", "yeti", "spas", "zoos", "char", "belt", "oily", "jabs", "dean", "tale", "luff", "unix", "moor", "aunt", "slaw", "prod",
    "geek", "sane", "sags", "pelt", "wage", "gems", "bris", "claw", "pear", "figs", "toad", "rude", "pros", "dyad", "mute", "bale", "dope", "doth", "caws", "mere",
    "gone", "begs", "awls", "helm", "chis", "scry", "jams", "room", "lops", "hulk", "mink", "legs", "dual", "nazi", "pole", "gene", "fora", "jivy", "nude", "test",
    "sine", "oops", "clap", "body", "gasp", "bold", "less", "lugs", "salt", "cool", "jean", "heth", "loft", "raps", "slog", "tans", "aims", "blot", "muff", "tame",
    "pica", "cull", "thou", "rain", "foci", "null", "spit", "duet", "prim", "seep", "wive", "toro", "fast", "feel", "numb", "butt", "awny", "pile", "tidy", "bunt",
    "doty", "gawk", "taxi", "calm", "shin", "ewes", "alef", "yuck", "tint", "nova", "flea", "wolf", "sand", "tort", "jogs", "much", "yard", "taut", "arms", "eels",
    "ruin", "club", "farm", "yowe", "zoom", "chiv", "vamp", "with", "pier", "nods", "dish", "sagy", "yawp", "lull", "cabs", "onyx", "dude", "bear", "laid", "loud",
    "sacs", "eker", "lieu", "jive", "emus", "pent", "sire", "when", "hows", "gale", "muck", "lore", "fuss", "suit", "sent", "sips", "muse", "yirr", "vise", "maps",
    "some", "oust", "java", "died", "moot", "dies", "omen", "pooh", "fine", "from", "rive", "nuns", "hues", "zits", "luau", "pale", "hogs", "ulna", "mood", "star",
    "sort", "lobs", "limo", "very", "bask", "swig", "sone", "flip", "lays", "goji", "sash", "sows", "seme", "oink", "shut", "zany", "five", "quit", "bust", "nand",
    "brat", "cent", "tote", "asps", "wink", "lept", "acne", "went", "fame", "woad", "reed", "port", "tome", "ends", "noel", "watt", "lead", "gout", "left", "rums",
    "inch", "link", "flex", "dads", "flaw", "dele", "obey", "dins", "toys", "fohs", "dunk", "yerk", "naut", "name", "melt", "vows", "mils", "cows", "dung", "knot",
    "fink", "tuft", "maid", "bank", "yaup", "whup", "ales", "sumo", "poet", "herd", "wile", "ires", "golf", "marl", "cups", "ripe", "spot", "polo", "just", "puce",
    "wilt", "wets", "faze", "holy", "sits", "dors", "pods", "hoax", "leak", "yelk", "tune", "sing", "sots", "four", "bobs", "eked", "doxy", "weld", "weir", "ilks",
    "puff", "dumb", "pray", "cots", "bows", "tube", "omit", "daft", "cods", "moss", "kays", "axed", "rams", "slam", "iota", "berk", "lime", "tomb", "copy", "rack",
    "duel", "jade", "tows", "gell", "bitt", "gage", "lash", "mama", "weds", "ayes", "yawl", "feta", "fats", "goof", "jinx", "ally", "culm", "earl", "jerk", "aqua",
    "ting", "shed", "shoe", "guru", "poky", "lock", "spam", "dyed", "bred", "juts", "jest", "pars", "lung", "hens", "mull", "norm", "oars", "coda", "span", "beau",
    "foes", "magi", "fret", "burl", "euro", "bots", "beds", "deaf", "cell", "whip", "pubs", "kite", "lory", "firm", "mate", "brie", "prom", "ipad", "deli", "fore",
    "bras", "used", "hips", "reek", "sews", "cope", "cogs", "eddy", "type", "mile", "lien", "imam", "skip", "gist", "edit", "dull", "oven", "cult", "agog", "open",
    "toms", "palm", "josh", "sloe", "haze", "item", "refs", "subs", "gird", "dolt", "that", "band", "taxa", "ooid", "drip", "boor", "bone", "duty", "chug", "hand",
    "sobs", "jail", "owly", "iced", "peak", "vied", "ware", "cole", "yowl", "nice", "hick", "chef", "amok", "fens", "germ", "love", "ergs", "birr", "rhos", "pups",
    "burp", "core", "fact", "moan", "wove", "fops", "want", "sump", "game", "goon", "pail", "shew", "pelf", "rake", "dots", "bens", "part", "octo", "roof", "urea",
    "ante", "wean", "sank", "shoo", "rove", "soms", "lier", "sofa", "dart", "thud", "pies", "pepo", "weak", "scat", "burs", "agar", "swum", "wick", "gawp", "dash",
    "iron", "cued", "dare", "damp", "teem", "ilka", "sign", "food", "dips", "gain", "uric", "kook", "vane", "aces", "rope", "wool", "fins", "bloc", "tike", "fuzz",
    "jugs", "pram", "fumy", "toke", "wads", "jaws", "crap", "gray", "sikh", "epic", "neat", "soil", "auto", "peck", "solo", "gnar", "mend", "clan", "play", "tops",
    "vice", "grey", "cowl", "vale", "lawn", "stub", "rail", "fuel", "rife", "repo", "mail", "bare", "tong", "talk", "pork", "cafe", "swim", "ouch", "zoon", "gang",
    "leas", "nays", "ekes", "turf", "trod", "veto", "will", "cube", "aura", "saga", "yule", "serf", "maim", "yaws", "opts", "trip", "kits", "loss", "tier", "fort",
    "mars", "whiz", "rots", "gnat", "font", "sops", "eras", "call", "glut", "idea", "ramp", "pith", "hays", "TRUE", "hope", "drub", "what", "damn", "chic", "emit",
    "wigs", "cozy", "foul", "army", "lave", "toil", "ogre", "sari", "deet", "teen", "yond", "offs", "romp", "pogo", "taco", "most", "achy", "nils", "eyes", "luge",
    "fuki", "boll", "dusk", "sigh", "awol", "zati", "pled", "smog", "doxx", "hair", "womb", "puny", "aria", "eros", "lade", "hone", "trio", "tofu", "kelp", "dune",
    "waxy", "riot", "gaps", "zees", "glia", "dorm", "wine", "geld", "vein", "smug", "stab", "meat", "pope", "pair", "heed", "lint", "vain", "foil", "poke", "luck",
    "fate", "bite", "woof", "blog", "fowl", "plum", "snog", "phiz", "orca", "maze", "mint", "dees", "mild", "zags", "dhow", "mage", "barn", "ores", "cold", "swam",
    "duly", "july", "hind", "dawn", "horn", "duds", "vase", "bulk", "rise", "cask", "tack", "coho", "dirt", "lump", "bush", "scam", "guns", "glad", "gory", "blue",
    "tala", "yens", "tank", "gyne", "isms", "hunt", "soya", "bets", "yods", "egos", "goby", "size", "also", "irid", "feed", "perk", "hoop", "mock", "west", "rare",
    "card", "yaps", "minx", "chub", "skis", "eely", "tins", "seer", "yell", "inns", "tare", "hung", "oryx", "inks", "heal", "aryl", "wend", "drib", "bony", "matt",
    "meal", "last", "sage", "flue", "fist", "them", "park", "rosy", "mask", "cars", "laud", "cock", "hazy", "bids", "yaks", "etch", "bide", "feet", "tams", "slit",
    "fobs", "rute", "over", "reap", "wind", "flax", "delf", "swop", "lone", "itch", "risk", "loch", "mare", "mill", "flat", "buys", "hiss", "posy", "fibs", "woes",
    "rite", "yang", "pout", "boot", "hill", "sods", "pads", "cork", "hits", "haul", "memo", "wade", "tree", "wish", "sock", "jars", "tags", "conk", "bowl", "loin",
    "adds", "ughs", "rats", "peat", "prey", "cane", "here", "yore", "vibe", "fern", "rice", "pant", "buoy", "zarf", "ices", "anew", "dibs", "lice", "tens", "aced",
    "suet", "blow", "easy", "bray", "dado", "pews", "funk", "gulf", "rode", "bang", "hype", "howl", "loan", "deck", "prop", "pace", "outs", "horo", "dome", "gall",
    "yird", "teth", "bran", "aven", "bond", "dons", "quay", "tine", "mart", "peso", "ruff", "aped", "glug", "yuga", "goop", "vent", "dial", "levy", "rued", "peel",
    "moho", "sham", "gild", "roll", "yogi", "sums", "yutz", "ruse", "toss", "dewy", "cash", "bead", "jeli", "snow", "wept", "rang", "pleb", "tire", "vara", "camp",
    "wort", "cave", "away", "acts", "goat", "bent", "rily", "dupe", "rial", "duct", "spar", "jink", "rink", "tron", "mule", "pets", "zeal", "rock", "ooze", "tone",
    "quip", "dent", "smut", "iris", "wash", "pals", "dote", "fish", "buhl", "ping", "post", "same", "buff", "snit", "fund", "lope", "face", "late", "wall", "wore",
    "wimp", "base", "zoea", "woke", "mats", "head", "ruby", "plod", "jell", "buhr", "oats", "pave", "hums", "jeer", "dill", "ways", "pack", "bulb", "wits", "tabu",
    "jags", "airs", "fray", "nigh", "kava", "rave", "wiry", "pins", "lies", "logs", "arts", "gnus", "teal", "bean", "bade", "paws", "rand", "mire", "rood", "long",
    "able", "sung", "blat", "wart", "nope", "yams", "tech", "gimp", "past", "turn", "ribs", "coos", "bums", "nock", "qadi", "boss", "loop", "curd", "quin", "flox",
    "deva", "gums", "tipi", "hers", "elix", "flub", "yurt", "tiny", "dole", "bath", "berm", "miss", "tape", "cams", "loam", "sail", "sect", "crud", "iamb", "wing",
    "coif", "disk", "heel", "doff", "aide", "fall", "bald", "feud", "kept", "stag", "mach", "gold", "mold", "keep", "tray", "levs", "guff", "flag", "foot", "lire",
    "bays", "poem", "rigs", "iffy", "rend", "slap", "swag", "bins", "cola", "taro", "eeks", "icky", "daub", "near", "aloe", "seed", "snug", "expo", "lirk", "glob",
    "zigs", "harp", "jobs", "knur", "nick", "wist", "flux", "shop", "rich", "scar", "fend", "waul", "opal", "cart", "once", "lurk", "sins", "eggs", "stop", "city",
    "nubs", "free", "pose", "laze", "agin", "suer", "vets", "jury", "fawn", "sync", "jets", "tusk", "oral", "sway", "byes", "coat", "twos", "nest", "chin", "aahs",
    "stud", "deep", "leek", "dive", "owls", "curb", "fang", "pupa", "zing", "hood", "hoof", "sard", "drum", "stay", "gunk", "weed", "swat", "hams", "dens", "idly",
    "purr", "yodh", "yack", "amen", "tart", "mime", "zyme", "rash", "teas", "honk", "step", "alms", "tide", "blab", "rims", "teak", "plus", "sols", "goad", "oboe",
    "been", "snob", "blob", "were", "volt", "kina", "lobe", "cads", "kudu", "glue", "wise", "this", "nape", "ilea", "robs", "ears", "duke", "tots", "skim", "flap",
    "ague", "loaf", "sees", "derm", "pops", "hare", "keen", "etas", "fury", "diva", "shwa", "brin", "seat", "come", "boas", "ambo", "shot", "chew", "song", "bake",
    "well", "pain", "tear", "chap", "cyme", "slob", "envy", "rear", "idol", "friz", "seas", "kind", "bawl", "fizz", "lamp", "clef", "lite", "liar", "lari", "vees",
    "chum", "fogs", "tums", "xyst", "grew", "saws", "curl", "ajar", "peep", "sink", "yuks", "kids", "diet", "robe", "voes", "balk", "grim", "hush", "ibex", "doge",
    "file", "home", "tarp", "ashs", "dell", "deme", "zeta", "soup", "math", "hole", "hots", "loos", "raws", "duos", "juke", "glen", "knit", "drew", "poop", "coak",
    "mush", "foal", "pips", "dere", "wail", "hags", "cuss", "next", "jack", "tzar", "hull", "babe", "tell", "huff", "beat", "lane", "gins", "aril", "adze", "took",
    "spay", "yeas", "lazy", "dogs", "sill", "cans", "bops", "safe", "ibis", "heck", "puts", "puck", "wood", "kiwi", "oxes", "swap", "nabs", "slow", "bill", "pump",
    "roar", "rift", "nobs", "spud", "wasp", "nuke", "role", "mess", "awes", "join", "ants", "slug", "rids", "wily", "gees", "lewd", "know", "zein", "nose", "yelm",
    "writ", "tyro", "moth", "zori", "yips", "kuna", "nags", "beet", "vary", "gram", "toff", "fans", "veil", "edge", "rime", "yows", "kegs", "wawl", "site", "bike",
    "bars", "sewn", "sate", "pits", "kale", "pend", "nerd", "grid", "dene", "undo", "hoot", "lear", "peon", "sons", "wyes", "idle", "sale", "taka", "gate", "kiss",
    "wave", "dzos", "eons", "sirs", "deed", "guys", "qaid", "self", "ours", "avid", "ties", "moos", "gait", "jowl", "wake", "ired", "tout", "trap", "puma", "gore",
    "perm", "gosh", "mara", "pegs", "calx", "dose", "gets", "worm", "hook", "leaf", "airy", "coal", "boom", "chad", "eyed", "wavy", "thug", "clog", "knar", "exam",
    "dire", "reak", "wont", "sexy", "lisp", "down", "ills", "sure", "chip", "date", "bard", "sold", "kiln", "else", "irks", "awed", "only", "text", "bump", "arid",
    "baud", "tons", "vans", "dodo", "slop", "held", "ropy", "skew", "myth", "gyps", "floe", "stem", "tail", "webs", "bilk", "tubs", "puns", "cuts", "odes", "load",
    "hems", "pomp", "apps", "duff", "pens", "bode", "pine", "axle", "pert", "vatu", "hews", "flit", "tuff", "vole", "time", "menu", "welt", "owes", "lacy", "fade",
    "axel", "doll", "king", "coax", "sack", "kats", "herb", "cusp", "slay", "abut", "lion", "ache", "frog", "thin", "mite", "rasp", "rose", "dojo", "pion", "rely",
    "slip", "zero", "make", "wham", "lots", "beth", "whoa", "hewn", "cage", "limb", "trek", "lilt", "find", "born", "barf", "albs", "pawn", "harm", "your", "pact",
    "gave", "task", "knee", "bawd", "lady", "hurl", "neon", "bevy", "pane", "busy", "keek", "hypo", "rate", "fell", "loco", "bull", "effs", "mods", "bibs", "rape",
    "boar", "soap", "flop", "urge", "dock", "junk", "wons", "root", "huhs", "elks", "apex", "bail", "awry", "calf", "pure", "give", "owed", "fork", "hour", "sere",
    "gaze", "naps", "fuse", "putt", "rags", "wren", "swiz", "ruts", "troy", "pigs", "heme", "gaff", "fake", "sang", "guts", "form", "heir", "sera", "nets", "ukes",
    "hack", "word", "rill", "yaud", "mutt", "lees", "wear", "limy", "tram", "gyro", "thus", "zone", "burr", "pats", "hula", "film", "sulk", "hawk", "asks", "crop",
    "surf", "foxy", "umps", "ward", "hive", "zine", "gown", "cere", "dozy", "flow", "pays", "acyl", "save", "desk", "lure", "fare", "toll", "yeld", "fear", "balm",
    "good", "pyre", "xray", "sake", "pate", "brim", "psis", "deft", "furl", "cobs", "woks", "team", "ones", "slum", "gush", "peer", "mesa", "cyma", "does", "rank",
    "coot", "grit", "kink", "siku", "plug", "oafs", "hasp", "gyre", "mane", "brow", "rune", "huge", "exon", "twig", "soon", "soli", "weep", "racy", "cook", "shmo",
    "oath", "hang", "rips", "zens", "yoga", "raft", "riff", "runs", "upon", "duck", "sitz", "fain", "rugs", "poll", "ahoy", "rush", "void", "tuna", "send", "lent",
    "roil", "ecru", "wins", "whew", "hubs", "bans", "beam", "disc", "veer", "coma", "care", "lard", "urns", "zinc", "byte", "hire", "nine", "awns", "heap", "nail",
    "year", "slim", "axes", "rant", "rile", "gilt", "clue", "mash", "huts", "jeep", "dust", "list", "garb", "lend", "hail", "page", "oval", "gulp", "mall", "deer",
    "fits", "rest", "path", "mind", "glib", "sunk", "roes", "dram", "keel", "dyer", "trim", "unit", "saki", "ship", "peps", "slew", "loci", "pita", "qats", "walk",
    "lean", "tabs", "afro", "clip", "folk", "host", "daze", "odor", "newt", "dove", "cost", "kips", "felt", "kyak", "doze", "aged", "fool", "stye", "gill", "more",
    "buck", "halo", "blur", "wauk", "zebu", "burn", "chop", "fuze", "dime", "sore", "stat", "deil", "dreg", "tugs", "ovum", "june", "coys", "feds", "coup", "bubo",
    "rein", "fill", "dues", "onus", "main", "boat", "hunk", "arcs", "atom", "gaol", "pony", "jazz", "wags", "sues", "push", "eggy", "ouzo", "tutu", "hell", "whet",
    "tour", "hics", "gyms", "enol", "slab", "fled", "mops", "cees", "seal", "then", "pans", "comb", "lord", "yoyo", "deny", "hash", "gash", "tips", "lank", "pest",
    "moon", "cove", "cons", "meld", "ding", "grip", "yoni", "shiv", "tore", "dubs", "cloy", "gels", "wrap", "veal", "lads", "fire", "beak", "plan", "blew", "lose",
    "mist", "ably", "avow", "elms", "clay", "doer", "term", "demo", "ands", "live", "told", "bags", "mows", "hold", "rent", "kaon", "bell", "lost", "dump", "wary",
    "twin", "deem", "roam", "lied", "oxea", "lark", "sped", "seem", "wisp", "taps", "cuds", "sole", "nips", "dame", "vang", "chow", "have", "pugs", "jibe", "came",
    "boil", "toes", "foam", "rods", "dims", "lags", "phub", "mini", "lava", "fond", "whom", "none", "into", "toga", "leap", "snip", "taus", "murk", "ogle", "snag",
    "mews", "pall", "tuba", "noon", "data", "waif", "leer", "land", "plow", "clag", "hoar", "hoed", "said", "tyke", "zips", "yelp", "skin", "mays", "pots", "gnaw",
    "mark", "ions", "drey", "ages", "zhos", "edgy", "high", "pius", "midi", "terp", "news", "oxen", "reef", "dyes", "grow", "pull", "sear", "wars", "oozy", "flay",
    "ahem", "palp", "wild", "line", "vend", "pike", "till", "alas", "boos", "hoes", "lows", "drag", "wire", "lids", "gaga", "odds", "gift", "yipe", "east", "knob",
    "gabs", "owns", "stow", "slot", "phis", "cake", "vine", "pill", "gust", "baas", "ceca", "haps", "keys", "roue", "warn", "hued", "area", "visa", "soak", "jump",
    "cape", "yolk", "torn", "yald", "redo", "mean", "cone", "pare", "baby", "tied", "barm", "waft", "dams"];

var horizWords = ["", "", "", ""];
var vertWord1 = "";
var vertWordPos = 0;

var m_selectedTileID = "";


window.onload = function () {

    SomeAdjustmentsInHTML();

    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    //to get some random number for the given date
    //just to pick a random word from the words list everyday and unique for the day
    //it is kind of hash function, hashing the date input
    //rand() shoudnt be used here as it wont give unique rand num for the given date
    var randomizeDateVal = (year + (month * 3) + (date * 11) + 17) * (year + 71) * (month + 11) * (date + 311) + date;
    var wordsCount = words.length;
    var virtWordIdx = randomizeDateVal % wordsCount;

    vertWord1 = words[virtWordIdx];
    vertWordPos = randomizeDateVal % 4;

    ////now we got vertical word
    ////now lets get the horizontal words
    ////loop through all the words in list and get the words that can fit with vertical word that we got
    var idx = 0;
    var vertWordLetterIdx = 0;
    while (idx < wordsCount) {
        var wordIdx = (idx + virtWordIdx) % wordsCount;
        var word = words[wordIdx];

        if (word[vertWordPos] == vertWord1[vertWordLetterIdx]) {
            horizWords[vertWordLetterIdx] = word;
            vertWordLetterIdx++;
        }

        if (vertWordLetterIdx == 4)
            break;

        idx++;
    }

    if (vertWordLetterIdx != 4)
        return;
    
    for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
        for (var colIdx = 0; colIdx < 4; colIdx++) {

            var strId = "#" + rowIdx + colIdx;

            var letter = horizWords[rowIdx][colIdx];

            if ((rowIdx + colIdx) % 2 == 1) {

                $(strId).css("background-color", "grey");
                $(strId).css("color", "white");
                $(strId).text(letter);
            }

            if (colIdx == vertWordPos) {
                $(strId).css("border-color", "black");
            }
        }
    }
}

function SomeAdjustmentsInHTML() {

    var width = $("#tab").width();
    $("#tab").css("margin-left", "-" + (width / 2) + "px");

    width = $("#1r").width();
    $("#1r").css("margin-left", "-" + (width / 2) + "px");

    width = $("#2r").width();
    $("#2r").css("margin-left", "-" + (width / 2) + "px");

    width = $("#3r").width();
    $("#3r").css("margin-left", "-" + (width / 2) + "px");

}

$(document).ready(function () {

    $(".key").click(function () {

        var sender = this;
        var str = sender.textContent;

        if (str == "Enter") {
            CheckIfAllTheInputsAreCorrect();
            return;
        }

        UpdateTheTile(str);

        //alert(str);
    });

    $(".tile").click(function () {

        var strSenderId = this.id;
        var number = parseInt(strSenderId);

        var sumOfDigits = number % 9;//mod(num, 9) give sum of the digits in a number

            //tile with sum of rowdx and colIdx is odd then it is a fixed word so should not be touched
        if (sumOfDigits % 2 == 1)
            return;

        if (m_selectedTileID != "") {
            $("#" + m_selectedTileID).css("background-color", "silver");
        }

        m_selectedTileID = strSenderId;
        $("#" + m_selectedTileID).css("background-color", "yellow");
    });

});

//document.addEventListener('keydown', (event) => {

//    var key = event.key;

//    UpdateTheTile(key);

//}, false);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function CheckIfAllTheInputsAreCorrect() {

    var allInputsAreCorrect = true;
    for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
        for (var colIdx = 0; colIdx < 4; colIdx++) {

            //tile with sum of rowdx and colIdx is odd then it is a fixed word so should not be touched
            if ((rowIdx + colIdx) % 2 == 1)
                continue;

            var strId = "#" + rowIdx + colIdx;

            var actualLetter = horizWords[rowIdx][colIdx];
            var inputLetter = $(strId).text();

            if (actualLetter == inputLetter) {
                $(strId).animate({"background-color": "green"}, 1000);
            }
            else {
                allInputsAreCorrect = false;
                $(strId).animate({ "background-color": "red" }, 1000);
            }

            //sleep();
        }
    }

    //just for some amount of sleep
    for (var idx = 0; idx < 1e4; idx++) {

    }

    if (allInputsAreCorrect == true) {
        alert("GAME OVER");
    }

    for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
        for (var colIdx = 0; colIdx < 4; colIdx++) {

            //tile with sum of rowdx and colIdx is odd then it is a fixed word so should not be touched
            if ((rowIdx + colIdx) % 2 == 1)
                continue;

            var strId = "#" + rowIdx + colIdx;
            $(strId).animate({ "background-color": "silver" }, 1000);
        }
    }

}

function UpdateTheTile(strKeyInput) {

    $("#" + m_selectedTileID).text(strKeyInput);
}
