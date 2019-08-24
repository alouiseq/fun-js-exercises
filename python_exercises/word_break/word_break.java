// Given a string s and a dictionary of words d, determine if s can be segmented into a 
// space-separated sequence of one or more dictionary words.

public class WordBreak {

    public static void main(String[] args) throws Exception{
        String dictionary[] = {
            "is", "a", "view", "this", "inter", "ape", "or", "intermediate", "interview", "in", 
            "for", "syapse", "an", "which", "amazing", "any", "comp", "company", "tow", "work",
            "or", "am", "to", "i", "mediate", "media", "at", "ate"
        };

        String s = "thisisaninterviewforsyapsewhichisanamazingcompanytoworkfor";

        WordBreak wb = new WordBreak();
        boolean is_sentence = wb.wordBreak(s, dictionary);
        System.out.println("Is sentence = " + is_sentence);
    }

    public WordBreak() {

    }

    public boolean wordBreak(String s, String[] dictionary) {
        
        return false;
    }
}