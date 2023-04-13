namespace $.$$ {
  export class $etp_procedure_process_bid_edit extends $.$etp_procedure_process_bid_edit {
    @$mol_mem
    price(next: number = 0): number {
      //   if (typeof next === "string") {
      //     next = parseFloat(next);
      //   }
      //   console.log("nnn", next);
      return next;
    }

    section_rows() {
      return [{ label: "Label", value: "Value" }];
    }
  }
}
