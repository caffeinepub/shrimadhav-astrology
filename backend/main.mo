import Set "mo:core/Set";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Order "mo:core/Order";

actor {
  type ContactEntry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  module ContactEntry {
    public func compare(a : ContactEntry, b : ContactEntry) : Order.Order {
      switch (Text.compare(a.name, b.name)) {
        case (#equal) { Text.compare(a.email, b.email) };
        case (order) { order };
      };
    };
  };

  // Persistent store for contacts
  let contacts = Map.empty<Principal, Set.Set<ContactEntry>>();

  // Persistent store for newsletter emails
  let newsletterEmails = Set.empty<Text>();

  // Add a new contact entry
  public shared ({ caller }) func submitContactEntry(name : Text, email : Text, phone : Text, message : Text) : async Bool {
    let newEntry = { name; email; phone; message };

    let existingEntries = switch (contacts.get(caller)) {
      case (null) { Set.empty<ContactEntry>() };
      case (?entries) { entries };
    };

    existingEntries.add(newEntry);

    contacts.add(caller, existingEntries);

    true;
  };

  // Subscribe to newsletter
  public shared ({ caller }) func subscribeNewsletter(email : Text) : async Bool {
    newsletterEmails.add(email);
    true;
  };

  // Query phone number and email
  public query ({ caller }) func getContactInfo() : async {
    phone : Text;
    email : Text;
  } {
    {
      phone = "8700810124";
      email = "shrimadhavastrology@gmail.com";
    };
  };

  // Query all contacts for a user
  public query ({ caller }) func getUserContacts(user : Principal) : async [ContactEntry] {
    switch (contacts.get(user)) {
      case (null) { [] };
      case (?entries) { entries.toArray().sort() };
    };
  };

  // Query all newsletter emails
  public query ({ caller }) func getAllNewsletterEmails() : async [Text] {
    newsletterEmails.toArray();
  };
};
