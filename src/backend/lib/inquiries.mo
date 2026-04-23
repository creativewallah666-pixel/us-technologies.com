import Types "../types/inquiries";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func submit(
    inquiries : List.List<Types.Inquiry>,
    nextId : Nat,
    name : Text,
    phone : Text,
    email : Text,
    requirementType : Types.RequirementType,
    message : Text,
  ) : Nat {
    let inquiry : Types.Inquiry = {
      id = nextId;
      name;
      phone;
      email;
      requirementType;
      message;
      submittedAt = Time.now();
    };
    inquiries.add(inquiry);
    nextId;
  };

  public func list(inquiries : List.List<Types.Inquiry>) : [Types.Inquiry] {
    inquiries.toArray();
  };
};
