module {
  public type RequirementType = {
    #home;
    #agriculture;
    #industry;
  };

  public type Inquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    requirementType : RequirementType;
    message : Text;
    submittedAt : Int;
  };

  public type SubmitInquiryResult = {
    #ok : Nat;
    #err : Text;
  };
};
