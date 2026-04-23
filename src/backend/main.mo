import Types "types/inquiries";
import InquiriesMixin "mixins/inquiries-api";
import List "mo:core/List";

actor {
  let inquiries = List.empty<Types.Inquiry>();
  let nextInquiryId : [var Nat] = [var 0];

  include InquiriesMixin(inquiries, nextInquiryId);
};
