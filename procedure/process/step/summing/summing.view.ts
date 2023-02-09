namespace $.$$ {
  export class $etp_procedure_process_step_summing extends $.$etp_procedure_process_step_summing {
    @$mol_mem
    bid_statuses(): string[] {
      return [
        "ACCEPTED",
        "WINNER",
        ...this.bid_list()
          //   .filter((bid) => bid.status() !== this.bid_status(bid))
          //   .filter(
          //     (bid: $etp_procedure_process_bid, num) =>
          //       bid.status() !== this.bid_status()
          //   )
          .map((bid, num) => (num + 1).toString() + " место"),
      ];
    }

    bid_status(obj: $etp_procedure_process_bid, next?: string): string {
      return obj.status(next);
    }

    @$mol_mem
    bid_list() {
      return this.space()
        .bid_list()
        .filter(
          (bid: $etp_procedure_process_bid) =>
            bid.status() !== "NEW" && bid.status() !== "REJECTED"
        )
        .map((obj) => this.Bid(obj));
    }

    bid_title(obj: $etp_procedure_process_bid, next?: string) {
      return obj.title(next);
    }

    bid_number(obj: $etp_procedure_process_bid, next?: string): string {
      return obj.number(next);
    }
  }
}
