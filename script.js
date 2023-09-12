// Function Declaration
function analyzeSentence(sentence) {
    //Initialize the 3 counter Variables: "sentenceLength" to keep track of total number of characters in the sentence,  "wordCount" to count the number of words, and "vowelCount" this is to keep count of the number of vowels in the sentence
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Now We define the vowels, (N/B we use const because our vowels will remain the same through out the code)
    const vowels = new Set("aeiouAEIOU");

    // We also define the words by Spliting the sentence into words using spaces as separators.
    const words = sentence.split(' ');

    //Now we run an iteration through each character in the sentence using the for Loop; for (let i = 0; i < length; i++)
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence.charAt(i);
        // increment the sentence length for each character
        sentenceLength++;

        // Now we run some checks first to check if the character is a letter (not a space or punctuation)
        if (char.match(/[a-zA-Z]/)) {
            // check if the character is a vowel 
            if (vowels.has(char)) {
                vowelCount++;
            }
        }
    }

    // Count the number of words
    wordCount = words.length;

    //Finally Now its time to Print Results 
    console.log("sentence Length:", sentenceLength);
    console.log("Number of Words:", wordCount);
    console.log("Number of Vowels:", vowelCount);
}

// Example:
const sentence = "Welcome to GoMyCode where we learn by making.";
analyzeSentence(sentence);