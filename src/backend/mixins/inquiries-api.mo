import Types "../types/inquiries";
import InquiryLib "../lib/inquiries";
import List "mo:core/List";

mixin (
  inquiries : List.List<Types.Inquiry>,
  nextInquiryId : [var Nat],
) {
  public func submitInquiry(
    name : Text,
    phone : Text,
    email : Text,
    requirementType : Types.RequirementType,
    message : Text,
  ) : async Types.SubmitInquiryResult {
    if (name.size() == 0) {
      return #err("Name is required");
    };
    if (phone.size() == 0) {
      return #err("Phone is required");
    };
    if (email.size() == 0) {
      return #err("Email is required");
    };
    let id = InquiryLib.submit(inquiries, nextInquiryId[0], name, phone, email, requirementType, message);
    nextInquiryId[0] += 1;
    #ok(id);
  };

  public query func getInquiries() : async [Types.Inquiry] {
    InquiryLib.list(inquiries);
  };
};
