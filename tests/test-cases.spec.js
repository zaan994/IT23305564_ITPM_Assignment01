const { test, expect } = require("@playwright/test");

// Configuration
const CONFIG = {
  url: "https://www.swifttranslator.com/",
  timeouts: {
    pageLoad: 3000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000,
  },
  selectors: {
    inputField: "Input Your Singlish Text Here.",
    outputContainer:
      "div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap",
  },
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: "Pos_Fun_001",
      name: "Convert Simple present tense sentence",
      input: "mama kadeeta poddak yanavaa",
      expected: "මම කඩේට පොඩ්ඩක් යනවා",
      category: "Daily language usage",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Pos_Fun_002",
      name: "Convert simple sentence",
      input: "api heta sellam karanna yamu",
      expected: "අපි හෙට සෙල්ලම් කරන්න යමු",
      category: "Daily language usage",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Pos_Fun_003",
      name: "Convert simple request sentence",
      input: "mata pothak dhennakoo",
      expected: "මට පොතක් දෙන්නකෝ",
      category: "Daily language usage",
      grammar: "Simple sentence",
      length: "S",
    },

    // // Compound Sentences
    {
      tcId: "Pos_Fun_004",
      name: "Convert compound sentence",
      input: "mata poddak saniipa madhi vagee, beheth gaththaa nam hodhayi",
      expected: "මට පොඩ්ඩක් සනීප මදි වගේ, බෙහෙත් ගත්තා නම් හොදයි",
      category: "Daily language usage",
      grammar: "Compound sentence",
      length: "M",
    },
    {
      tcId: "Pos_Fun_005",
      name: "Convert compound opinion sentence",
      input: "oyaa kiyapu eka hari, api e vidhihatama karamu",
      expected: "ඔයා කියපු එක හරි, අපි එ විදිහටම කරමු",
      category: "Daily language usage",
      grammar: "Compound sentence",
      length: "M",
    },

    //Complex Sentences
    {
      tcId: "Pos_Fun_006",
      name: "Convert complex conditional sentence",
      input: "ammaa bath aragena enakam mama innam vaedak karagena",
      expected: "අම්මා බත් අරගෙන එනකම් මම ඉන්නම් වැඩක් කරගෙන",
      category: "Daily language usage",
      grammar: "Complex sentence",
      length: "M",
    },
    {
      tcId: "Pos_Fun_007",
      name: "Convert cause-effect sentence",
      input: "mata badagini naee eeth kannam",
      expected: "මට බඩගිනි නෑ ඒත් කන්නම්",
      category: "Daily language usage",
      grammar: "Complex sentence",
      length: "S",
    },

    // Questions
    {
      tcId: "Pos_Fun_008",
      name: "Convert future question",
      input: "oyaa heta panthi enavadha?",
      expected: "ඔයා හෙට පන්ති එනවද?",
      category: "Daily language usage",
      grammar: "Interrogative (question)",
      length: "S",
    },
    {
      tcId: "Pos_Fun_009",
      name: "Convert question sentence",
      input: "api monavadha kannee?",
      expected: "අපි මොනවද කන්නේ?",
      category: "Daily language usage",
      grammar: "Interrogative (question)",
      length: "S",
    },
    {
      tcId: "Pos_Fun_010",
      name: "Convert polite question request",
      input: "oyaata mata meeka poddak kiyala dhenna puluvandha?",
      expected: "ඔයාට මට මේක පොඩ්ඩක් කියල දෙන්න පුලුවන්ද?",
      category: "Greeting / request / response",
      grammar: "Interrogative (question)",
      length: "M",
    },

    // Commands
    {
      tcId: "Pos_Fun_011",
      name: "Convert imperative command",
      input: "vahaama othanin naegitinna",
      expected: "වහාම ඔතනින් නැගිටින්න",
      category: "Daily language usage",
      grammar: "Imperative (command)",
      length: "S",
    },
    {
      tcId: "Pos_Fun_012",
      name: "Convert polite command",
      input: "karuNaakaralaa heta edhdhi gedhara vaeda karagena enna",
      expected: "කරුණාකරලා හෙට එද්දි ගෙදර වැඩ කරගෙන එන්න",
      category: "Greeting / request / response",
      grammar: "Imperative (command)",
      length: "M",
    },

    // Greetings and Responses
    {
      tcId: "Pos_Fun_013",
      name: "Common greeting",
      input: "oyaa hodhin innavadha?",
      expected: "ඔයා හොදින් ඉන්නවද?",
      category: "Greeting / request / response",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Pos_Fun_014",
      name: "Common simple response",
      input: "hari. mama oyaata e vaedee karala dhennam",
      expected: "හරි. මම ඔයාට එ වැඩේ කරල දෙන්නම්",
      category: "Greeting / request / response",
      grammar: "Simple sentence",
      length: "M",
    },

    // Tense Variations
    {
      tcId: "Pos_Fun_015",
      name: "Past tense simple sentence",
      input: "iiyee apee thaaththaagee upandhinee thibbaa",
      expected: "ඊයේ අපේ තාත්තාගේ උපන්දිනේ තිබ්බා",
      category: "Daily language usage",
      grammar: "Past tense",
      length: "M",
    },
    {
      tcId: "Pos_Fun_016",
      name: "Future tense simple sentence",
      input: "api heta poddak eliyata yamudha",
      expected: "අපි හෙට පොඩ්ඩක් එලියට යමුද",
      category: "Daily language usage",
      grammar: "Future tense",
      length: "S",
    },

    // Negations
    {
      tcId: "Pos_Fun_017",
      name: "Simple negation pattern sentence",
      input: "mama nam eeka gaena dhanne naee",
      expected: "මම නම් ඒක ගැන දන්නෙ නෑ",
      category: "Daily language usage",
      grammar: "Negation (negative form)",
      length: "S",
    },

    // Singular and Pronouns
    {
      tcId: "Pos_Fun_018",
      name: "Singular pronoun negation",
      input: "mata heta enna venne naee",
      expected: "මට හෙට එන්න වෙන්නෙ නෑ",
      category: "Daily language usage",
      grammar: "Singular pronoun negation",
      length: "S",
    },

    // Plural and Pronouns
    {
      tcId: "Pos_Fun_019",
      name: "Plural pronoun usage",
      input: "eyaalaa heta gamanak yanavaa",
      expected: "එයාලා හෙට ගමනක් යනවා",
      category: "Daily language usage",
      grammar: "Plural form",
      length: "S",
    },

    // Informal Language
    {
      tcId: "Pos_Fun_020",
      name: "Informal sentence",
      input: "eeyi mehe varenko vaedak pennanna",
      expected: "ඒයි මෙහෙ වරෙන්කො වැඩක් පෙන්නන්න",
      category: "Word combination / phrase pattern",
      grammar: "Simple sentence",
      length: "S",
    },

    // Simple sentence with English words
    {
      tcId: "Pos_Fun_021",
      name: "Simple sentence with English words",
      input: "mata heta campus ekee viva ekak thiyenavaa",
      expected: "මට හෙට campus එකේ viva එකක් තියෙනවා",
      category: "Mixed Singlish + English",
      grammar: "Simple sentence",
      length: "S",
    },

    {
      tcId: "Pos_Fun_022",
      name: "Place name preservation",
      input: "mama heta colombo yanavaa",
      expected: "මම හෙට colombo යනවා",
      category: "Names / places / common English words",
      grammar: "Past tense",
      length: "S",
    },

    // Punctuation
    {
      tcId: "Pos_Fun_023",
      name: "Exclamation mark handling",
      input: "eeka nam niyamayii!!",
      expected: "ඒක නම් නියමයී!!",
      category: "Punctuation / numbers",
      grammar: "Simple sentence",
      length: "S",
    },

    // Numbers and Formats with english words
    {
      tcId: "Pos_Fun_024",
      name: "Currency amount with english words",
      input: "mata heta class ekata Rs.1000k oonee",
      expected: "මට හෙට class එකට Rs.1000ක් ඕනේ",
      category: "Punctuation / numbers",
      grammar: "Simple sentence",
      length: "S",
    },

    // Medium Length
    {
      tcId: "Pos_Fun_025",
      name: "Medium length compound sentence",
      input:
        "machan mata heta office ekata enna venne naee, heta thiyena meeting ekee details tika mata oya whatsapp karanavadha? ethakota mata eeka poddak balanna puluvan anith dhavase enna kalin. apita ethakota waeda tika karaganna lesi veyi.",
      expected:
        "මචන් මට හෙට office එකට එන්න වෙන්නෙ නෑ, හෙට තියෙන meeting එකේ details ටික මට ඔය whatsapp කරනවද? එතකොට මට ඒක පොඩ්ඩක් බලන්න පුලුවන් අනිත් දවසෙ එන්න කලින්. අපිට එතකොට wඇඩ ටික කරගන්න ලෙසි වෙයි.",
      category: "Daily language usage",
      grammar: "Compound sentence",
      length: "M",
    },
  ],

  negative: [
    {
      tcId: "Neg_Fun_001",
      name: "Heavy joined words wihtout spaces",
      input: "mamaikmanatagedharayanavagodakhavasvennakalin",
      expected: "මම ඉක්මණට ගෙදර යනවා ගොඩක් හවස් වෙන්න කලින්",
      category: "Typographical error handling",
      grammar: "Simple sentence",
      length: "M",
    },
    {
      tcId: "Neg_Fun_002",
      name: "Joined compound words",
      input: "hetaiskooleeyannaoone,eethgedharavaedathaamakareenaee",
      expected: "හෙට ඉස්කෝලේ යන්න ඕනෙ, ඒත් ගෙදර වැඩ තාම කරේ නෑ",
      category: "Typographical error handling",
      grammar: "Simple sentence",
      length: "M",
    },
    {
      tcId: "Neg_Fun_003",
      name: "Excessive slang handling",
      input: "ado machan ela kiri",
      expected: "අඩෝ මචන් එල කිරි",
      category: "Slang / informal language",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Neg_Fun_004",
      name: "Multiple spaces handling",
      input: "mama     heta aluth     vaahanayak gannavaa",
      expected: "මම හෙට අලුත් වාහනයක් ගන්නවා",
      category: "Formatting (spaces / line breaks / paragraph)",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Neg_Fun_005",
      name: "Line break handling",
      input: "api vaeda tika \nivara karamudha?",
      expected: "අපි වැඩ ටික ඉවර කරමුද?",
      category: "Formatting (spaces / line breaks / paragraph)",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Neg_Fun_006",
      name: "Colloquial expression",
      input: "adooo mokakdha ee velaa thiyennee",
      expected: "අඩෝ මොකක්ද ඒ වෙලා තියෙන්නේ",
      category: "Slang / informal language",
      grammar: "Interrogative (question)",
      length: "S",
    },
    {
      tcId: "Neg_Fun_007",
      name: "Mixed English with errors",
      input: "mamaWhatsAppekagiyaa",
      expected: "මම WhatsApp එකගියා",
      category: "Mixed Singlish + English",
      grammar: "Past tense",
      length: "S",
    },
    {
      tcId: "Neg_Fun_008",
      name: "Excessive character repetition",
      input: "hariiiii hodhayiiiii",
      expected: "හරී හොදයී",
      category: "Slang / informal language",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Neg_Fun_009",
      name: "Question with english word and no spacing",
      input: "oyaalaahetacampusyanavadha?",
      expected: "ඔයාලා හෙට campus යනවද?",
      category: "Typographical error handling",
      grammar: "Interrogative (question)",
      length: "S",
    },
    {
      tcId: "Neg_Fun_010",
      name: "English-heavy sentence",
      input: "Please send the file mama heta check karannama",
      expected: "Please send the file මම හෙට check කරන්නම්",
      category: "Mixed Singlish + English",
      grammar: "Simple sentence",
      length: "S",
    },
  ],

  ui: {
    tcId: "Pos_UI_001",
    name: "Verify real-time Sinhala output update",
    input: "mama heta gamee yanavaa",
    partialInput: "mama heta gamee",
    expectedFull: "මම හෙට ගමේ යනවා",
    category: "Usability flow",
    grammar: "Future tense",
    length: "S",
  },
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole("textbox", {
      name: CONFIG.selectors.inputField,
    });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator("textarea") })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    const output = await this.getOutputField();

    // Wait until the output is visible and has text
    await expect(output).toBeVisible({ timeout: 20000 }); // waits for element to appear
    await expect(output).not.toHaveText("", { timeout: 20000 }); // waits for text to be non-empty

    // Small buffer after text appears
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    const outputSelector = CONFIG.selectors.outputContainer;

    // Read previous text safely
    const previousText = await this.page
      .locator(outputSelector)
      .filter({ hasNot: this.page.locator("textarea") })
      .first()
      .textContent();

    await this.clearAndWait();
    await this.typeInput(inputText);

    // ✅ Wait for text to change INSIDE browser context
    await this.page.waitForFunction(
      (selector, prev) => {
        const el = document.querySelector(selector);
        return (
          el && el.textContent && el.textContent.trim() !== (prev || "").trim()
        );
      },
      outputSelector,
      previousText,
      { timeout: 30000 }
    );

    return await this.getOutputText();
  }
}

// Test Suite
test.describe("SwiftTranslator - Singlish to Sinhala Conversion Tests", () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe("Positive Functional Tests", () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(
          testCase.input
        );
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe("Negative Functional Tests", () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(
          testCase.input
        );
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe("UI Functionality Tests", () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      // const output = await translator.getOutputField();

      await translator.clearAndWait();

      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });

      const output = await translator.getOutputField();

      // Wait until partial output appears
      await expect(output).not.toHaveText("", { timeout: 10000 });
      let outputText = (await output.textContent()).trim();
      expect(outputText.length).toBeGreaterThan(0);

      // Complete input
      await input.pressSequentially(
        TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length),
        { delay: 150 }
      );

      // Wait for full translation
      await translator.waitForOutput();
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);

      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
