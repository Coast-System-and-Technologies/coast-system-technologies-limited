"use client";

import * as React from "react";
import { CheckCircle2, Copy, Mail, MessageCircle, Phone } from "lucide-react";

import { SITE } from "@/content/site";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type HelpWith =
  | "governance"
  | "legaltech"
  | "privacy"
  | "trademark"
  | "cac"
  | "not_sure";

const HELP_WITH: { value: HelpWith; label: string }[] = [
  { value: "governance", label: "Governance & Structuring" },
  { value: "legaltech", label: "Legal-Tech & Compliance Systems" },
  { value: "privacy", label: "Data Protection & Privacy (Nigeria)" },
  { value: "trademark", label: "Trademark & IP Protection (NIPO)" },
  { value: "cac", label: "CAC Registry Services (Accredited Agent)" },
  { value: "not_sure", label: "Not sure — route me" },
];

const TIMELINES = ["Urgent (1–7 days)", "2–4 weeks", "1–3 months", "Flexible"] as const;

const BUDGETS = [
  "Not sure yet",
  "Under ₦250k",
  "₦250k–₦750k",
  "₦750k–₦2m",
  "₦2m+",
] as const;

function safeJoin(list: string[]) {
  return list.filter(Boolean).join(", ");
}

const whatsappLink = `https://wa.me/${SITE.contact.phoneTel.replace(/\D/g, "")}`;

function dataTypeLabel(key: string) {
  switch (key) {
    case "staff":
      return "Staff";
    case "customer":
      return "Customer";
    case "vendor":
      return "Vendor";
    case "minors":
      return "Minors";
    case "sensitive":
      return "Sensitive";
    default:
      return key;
  }
}

export default function StartProjectForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  // Core fields
  const [fullName, setFullName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [helpWith, setHelpWith] = React.useState<HelpWith>("not_sure");
  const [outcome, setOutcome] = React.useState("");
  const [timeline, setTimeline] = React.useState<(typeof TIMELINES)[number] | "">("");
  const [budget, setBudget] = React.useState<(typeof BUDGETS)[number]>("Not sure yet");

  // Conditional: Trademark
  const [brandNames, setBrandNames] = React.useState("");
  const [goodsServices, setGoodsServices] = React.useState("");
  const [filingScope, setFilingScope] = React.useState<
    "Nigeria only" | "Nigeria + International (via partners)" | ""
  >("");
  const [marksCount, setMarksCount] = React.useState<"1" | "2–5" | "6+" | "">("");

  // Conditional: CAC
  const [cacServiceType, setCacServiceType] = React.useState<
    "New incorporation" | "Post-incorporation update" | "Annual returns" | "Certified extract" | ""
  >("");
  const [proposedNames, setProposedNames] = React.useState("");
  const [directorCount, setDirectorCount] = React.useState("");
  const [shareholderCount, setShareholderCount] = React.useState("");
  const [shareCapital, setShareCapital] = React.useState("");
  const [hasExistingCompany, setHasExistingCompany] = React.useState<"yes" | "no">("no");
  const [rcNumber, setRcNumber] = React.useState("");

  // Conditional: Privacy
  const [sector, setSector] = React.useState<
    "Fintech" | "HR" | "Education" | "Health" | "E-commerce" | "Agency" | "Other" | ""
  >("");
  const [dataTypes, setDataTypes] = React.useState({
    staff: false,
    customer: false,
    vendor: false,
    minors: false,
    sensitive: false,
  });
  const [vendorsHandleData, setVendorsHandleData] = React.useState<"yes" | "no" | "">("");
  const [previousIncidents, setPreviousIncidents] = React.useState<"yes" | "no" | "">("");

  // Conditional: Governance
  const [companyStage, setCompanyStage] = React.useState<
    "Startup" | "SME" | "Group" | "Family business" | ""
  >("");
  const [directorsShareholders, setDirectorsShareholders] = React.useState<"yes" | "no" | "">("");
  const [directorsShareholdersCount, setDirectorsShareholdersCount] = React.useState("");
  const [mainPain, setMainPain] = React.useState<
    "approvals chaos" | "unclear roles" | "partner disputes" | "investor readiness" | "group structure" | ""
  >("");
  const [teamSize, setTeamSize] = React.useState<"1–5" | "6–15" | "16–50" | "51–200" | "200+" | "">(
    ""
  );

  // Conditional: Legal-tech
  const [tools, setTools] = React.useState({
    gdrive: false,
    m365: false,
    notion: false,
    none: false,
    other: false,
  });
  const [toolsOther, setToolsOther] = React.useState("");
  const [legaltechMainIssue, setLegaltechMainIssue] = React.useState<
    "template mess" | "approvals informal" | "version confusion" | "missing audit trail" | "obligation tracking" | ""
  >("");
  const [documentsThatMatter, setDocumentsThatMatter] = React.useState("");

  const briefText = React.useMemo(() => {
    const lines: string[] = [];
    lines.push(`Full Name: ${fullName}`);
    if (company) lines.push(`Company / Organisation: ${company}`);
    lines.push(`Work Email: ${email}`);
    lines.push(`Phone (WhatsApp allowed): ${phone}`);
    lines.push(`Help With: ${HELP_WITH.find((x) => x.value === helpWith)?.label ?? helpWith}`);
    if (timeline) lines.push(`Timeline: ${timeline}`);
    if (budget) lines.push(`Budget Range: ${budget}`);
    lines.push("");
    lines.push("Outcome you want:");
    lines.push(outcome);

    if (helpWith === "trademark") {
      lines.push("");
      lines.push("Trademark & IP (NIPO) — Details");
      if (brandNames) lines.push(`Brand name(s): ${brandNames}`);
      if (goodsServices) lines.push(`Goods/Services: ${goodsServices}`);
      if (filingScope) lines.push(`Filing scope: ${filingScope}`);
      if (marksCount) lines.push(`Number of marks: ${marksCount}`);
    }

    if (helpWith === "cac") {
      lines.push("");
      lines.push("CAC Registry — Details");
      if (cacServiceType) lines.push(`Service type: ${cacServiceType}`);
      if (proposedNames) lines.push(`Proposed name(s): ${proposedNames}`);
      if (directorCount) lines.push(`Director count: ${directorCount}`);
      if (shareholderCount) lines.push(`Shareholder count: ${shareholderCount}`);
      if (shareCapital) lines.push(`Share capital intent: ${shareCapital}`);
      lines.push(`Existing company?: ${hasExistingCompany}`);
      if (hasExistingCompany === "yes" && rcNumber) lines.push(`RC number: ${rcNumber}`);
    }

    if (helpWith === "privacy") {
      lines.push("");
      lines.push("Data Protection & Privacy (Nigeria) — Details");
      if (sector) lines.push(`Sector: ${sector}`);
      const selectedTypes = Object.entries(dataTypes)
        .filter(([, v]) => v)
        .map(([k]) => dataTypeLabel(k));
      if (selectedTypes.length) lines.push(`Personal data processed: ${safeJoin(selectedTypes)}`);
      if (vendorsHandleData) lines.push(`Vendors/processors handle data?: ${vendorsHandleData}`);
      if (previousIncidents) lines.push(`Previous incidents?: ${previousIncidents}`);
    }

    if (helpWith === "governance") {
      lines.push("");
      lines.push("Governance & Structuring — Details");
      if (companyStage) lines.push(`Company stage: ${companyStage}`);
      if (directorsShareholders) lines.push(`Directors/shareholders exist?: ${directorsShareholders}`);
      if (directorsShareholdersCount) lines.push(`Count: ${directorsShareholdersCount}`);
      if (mainPain) lines.push(`Main pain: ${mainPain}`);
      if (teamSize) lines.push(`Team size range: ${teamSize}`);
    }

    if (helpWith === "legaltech") {
      lines.push("");
      lines.push("Legal-Tech & Compliance Systems — Details");
      const toolList: string[] = [];
      if (tools.gdrive) toolList.push("Google Drive");
      if (tools.m365) toolList.push("Microsoft 365");
      if (tools.notion) toolList.push("Notion");
      if (tools.none) toolList.push("None");
      if (tools.other) toolList.push(`Other: ${toolsOther || "(not specified)"}`);
      if (toolList.length) lines.push(`Current tools: ${safeJoin(toolList)}`);
      if (legaltechMainIssue) lines.push(`Main issue: ${legaltechMainIssue}`);
      if (documentsThatMatter) lines.push(`Documents that matter most: ${documentsThatMatter}`);
    }

    return lines.join("\n");
  }, [
    budget,
    cacServiceType,
    company,
    companyStage,
    dataTypes,
    directorsShareholders,
    directorsShareholdersCount,
    documentsThatMatter,
    directorCount,
    email,
    filingScope,
    fullName,
    goodsServices,
    hasExistingCompany,
    helpWith,
    legaltechMainIssue,
    mainPain,
    marksCount,
    outcome,
    phone,
    previousIncidents,
    proposedNames,
    rcNumber,
    sector,
    shareCapital,
    shareholderCount,
    teamSize,
    timeline,
    tools,
    toolsOther,
    vendorsHandleData,
    brandNames,
  ]);

  const mailtoHref = React.useMemo(() => {
    const subject = encodeURIComponent(`Start a Project — ${SITE.shortName} Project Brief`);
    const body = encodeURIComponent(briefText);
    return `mailto:${SITE.contact.email}?subject=${subject}&body=${body}`;
  }, [briefText]);

  async function copyBrief() {
    try {
      if (!navigator?.clipboard) return;
      await navigator.clipboard.writeText(briefText);
    } catch {
      // ignore
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Frontend-only: simulate submission (replace with API later).
    await new Promise((r) => setTimeout(r, 500));

    setSubmitting(false);
    setSubmitted(true);
  }

  const showTrademark = helpWith === "trademark";
  const showCAC = helpWith === "cac";
  const showPrivacy = helpWith === "privacy";
  const showGovernance = helpWith === "governance";
  const showLegalTech = helpWith === "legaltech";

  return (
    <Card className="bg-card/70">
      <CardHeader>
        <CardTitle className="font-heading text-xl">Submit Brief</CardTitle>
      </CardHeader>

      <CardContent>
        {submitted && (
          <div className="mb-6 rounded-xl border bg-background/60 p-4 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5" />
              <div className="space-y-1">
                <p className="font-medium">Received.</p>
                <p className="text-muted-foreground">
                  We’ll review and respond with next steps, checklist, and a recommended engagement path.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Button asChild size="sm" className="gap-2">
                    <a href={mailtoHref}>
                      <Mail className="h-4 w-4" />
                      Email this brief
                    </a>
                  </Button>

                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>

                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={copyBrief}
                    className="gap-2"
                  >
                    <Copy className="h-4 w-4" />
                    Copy brief
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Core fields */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company / Organisation (optional)</Label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (WhatsApp allowed)</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+234..."
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>What do you need help with?</Label>
              <Select value={helpWith} onValueChange={(v) => setHelpWith(v as HelpWith)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a pillar (or choose route me)" />
                </SelectTrigger>
                <SelectContent>
                  {HELP_WITH.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">Choose the closest option—we’ll refine it.</p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="outcome">Outcome you want</Label>
              <Textarea
                id="outcome"
                value={outcome}
                onChange={(e) => setOutcome(e.target.value)}
                required
                placeholder="What does success look like?"
              />
              <p className="text-xs text-muted-foreground">
                Example: “Register a company + clean governance”, “Trademark 2 brands”, “Privacy readiness for our customer data”.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Timeline</Label>
              <Select value={timeline} onValueChange={(v) => setTimeline(v as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {TIMELINES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Budget Range (optional)</Label>
              <Select value={budget} onValueChange={(v) => setBudget(v as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {BUDGETS.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">Very useful for scoping.</p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="files">Upload files (optional)</Label>
              <Input id="files" type="file" multiple />
              <p className="text-xs text-muted-foreground">
                CAC docs, brand assets, policies, contracts, briefs, screenshots—anything relevant.
              </p>
            </div>
          </div>

          {/* Conditional fields */}
          {(showTrademark || showCAC || showPrivacy || showGovernance || showLegalTech) && (
            <>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-heading text-lg tracking-tight">
                  Extra details (to help us scope faster)
                </h3>

                {showTrademark && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="brandNames">Brand name(s)</Label>
                      <Input
                        id="brandNames"
                        value={brandNames}
                        onChange={(e) => setBrandNames(e.target.value)}
                        placeholder="e.g., Coast Shield, Coast System"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="goodsServices">What goods/services do you offer?</Label>
                      <Input
                        id="goodsServices"
                        value={goodsServices}
                        onChange={(e) => setGoodsServices(e.target.value)}
                        placeholder="Short description"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Filing scope</Label>
                      <Select value={filingScope} onValueChange={(v) => setFilingScope(v as any)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select scope" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nigeria only">Nigeria only</SelectItem>
                          <SelectItem value="Nigeria + International (via partners)">
                            Nigeria + International (via partners)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Number of marks</Label>
                      <Select value={marksCount} onValueChange={(v) => setMarksCount(v as any)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2–5">2–5</SelectItem>
                          <SelectItem value="6+">6+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="trademarkLogo">Logo upload (if applicable)</Label>
                      <Input id="trademarkLogo" type="file" />
                    </div>
                  </div>
                )}

                {showCAC && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                      <Label>Service type</Label>
                      <Select value={cacServiceType} onValueChange={(v) => setCacServiceType(v as any)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="New incorporation">New incorporation</SelectItem>
                          <SelectItem value="Post-incorporation update">Post-incorporation update</SelectItem>
                          <SelectItem value="Annual returns">Annual returns</SelectItem>
                          <SelectItem value="Certified extract">Certified extract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="proposedNames">Proposed name(s) (if new)</Label>
                      <Textarea
                        id="proposedNames"
                        value={proposedNames}
                        onChange={(e) => setProposedNames(e.target.value)}
                        placeholder="List 2–3 names (one per line)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="directorCount">Director count</Label>
                      <Input
                        id="directorCount"
                        value={directorCount}
                        onChange={(e) => setDirectorCount(e.target.value)}
                        placeholder="e.g., 2"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="shareholderCount">Shareholder count</Label>
                      <Input
                        id="shareholderCount"
                        value={shareholderCount}
                        onChange={(e) => setShareholderCount(e.target.value)}
                        placeholder="e.g., 3"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="shareCapital">Share capital intent (optional)</Label>
                      <Input
                        id="shareCapital"
                        value={shareCapital}
                        onChange={(e) => setShareCapital(e.target.value)}
                        placeholder="e.g., ₦5,000,000"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label>Do you already have an existing company?</Label>
                      <RadioGroup
                        value={hasExistingCompany}
                        onValueChange={(v) => setHasExistingCompany(v as any)}
                        className="flex items-center gap-6"
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="no" id="hasExistingNo" />
                          <Label htmlFor="hasExistingNo">No</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="yes" id="hasExistingYes" />
                          <Label htmlFor="hasExistingYes">Yes</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {hasExistingCompany === "yes" && (
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="rcNumber">RC number</Label>
                        <Input
                          id="rcNumber"
                          value={rcNumber}
                          onChange={(e) => setRcNumber(e.target.value)}
                          placeholder="RC XXXXXXX"
                        />
                      </div>
                    )}
                  </div>
                )}

                {showPrivacy && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                      <Label>Sector</Label>
                      <Select value={sector} onValueChange={(v) => setSector(v as any)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select sector" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Fintech">Fintech</SelectItem>
                          <SelectItem value="HR">HR</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Health">Health</SelectItem>
                          <SelectItem value="E-commerce">E-commerce</SelectItem>
                          <SelectItem value="Agency">Agency</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label>What personal data do you process?</Label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {(
                          [
                            ["staff", "Staff"],
                            ["customer", "Customer"],
                            ["vendor", "Vendor"],
                            ["minors", "Minors"],
                            ["sensitive", "Sensitive"],
                          ] as const
                        ).map(([key, label]) => (
                          <div key={key} className="flex items-center gap-2">
                            <Checkbox
                              checked={dataTypes[key]}
                              onCheckedChange={(v) =>
                                setDataTypes((p) => ({ ...p, [key]: Boolean(v) }))
                              }
                              id={`dt-${key}`}
                            />
                            <Label htmlFor={`dt-${key}`}>{label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Do vendors/processors handle your data?</Label>
                      <RadioGroup
                        value={vendorsHandleData}
                        onValueChange={(v) => setVendorsHandleData(v as any)}
                        className="flex items-center gap-6"
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="yes" id="vendorsYes" />
                          <Label htmlFor="vendorsYes">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="no" id="vendorsNo" />
                          <Label htmlFor="vendorsNo">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Any previous incidents? (optional)</Label>
                      <RadioGroup
                        value={previousIncidents}
                        onValueChange={(v) => setPreviousIncidents(v as any)}
                        className="flex items-center gap-6"
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="yes" id="incYes" />
                          <Label htmlFor="incYes">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="no" id="incNo" />
                          <Label htmlFor="incNo">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {showGovernance && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Company stage</Label>
                      <Select value={companyStage} onValueChange={(v) => setCompanyStage(v as any)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Startup">Startup</SelectItem>
                          <SelectItem value="SME">SME</SelectItem>
                          <SelectItem value="Group">Group</SelectItem>
                          <SelectItem value="Family business">Family business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Directors/shareholders?</Label>
                      <RadioGroup
                        value={directorsShareholders}
                        onValueChange={(v) => setDirectorsShareholders(v as any)}
                        className="flex items-center gap-6"
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="yes" id="dsYes" />
                          <Label htmlFor="dsYes">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="no" id="dsNo" />
                          <Label htmlFor="dsNo">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="dsCount">If yes, count (optional)</Label>
                      <Input
                        id="dsCount"
                        value={directorsShareholdersCount}
                        onChange={(e) => setDirectorsShareholdersCount(e.target.value)}
                        placeholder="e.g., 4"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Main pain</Label>
                      <Select value={mainPain} onValueChange={(v) => setMainPain(v as any)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pain" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="approvals chaos">Approvals chaos</SelectItem>
                          <SelectItem value="unclear roles">Unclear roles</SelectItem>
                          <SelectItem value="partner disputes">Partner disputes</SelectItem>
                          <SelectItem value="investor readiness">Investor readiness</SelectItem>
                          <SelectItem value="group structure">Group structure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Team size range</Label>
                      <Select value={teamSize} onValueChange={(v) => setTeamSize(v as any)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1–5">1–5</SelectItem>
                          <SelectItem value="6–15">6–15</SelectItem>
                          <SelectItem value="16–50">16–50</SelectItem>
                          <SelectItem value="51–200">51–200</SelectItem>
                          <SelectItem value="200+">200+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {showLegalTech && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                      <Label>Current tools</Label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {(
                          [
                            ["gdrive", "Google Drive"],
                            ["m365", "Microsoft 365"],
                            ["notion", "Notion"],
                            ["none", "None"],
                            ["other", "Other"],
                          ] as const
                        ).map(([key, label]) => (
                          <div key={key} className="flex items-center gap-2">
                            <Checkbox
                              checked={(tools as any)[key]}
                              onCheckedChange={(v) => {
                                const checked = Boolean(v);

                                setTools((p) => {
                                  // selecting "none" clears others
                                  if (key === "none" && checked) {
                                    return { gdrive: false, m365: false, notion: false, other: false, none: true };
                                  }

                                  // selecting any other tool clears "none"
                                  const next = { ...p, [key]: checked, none: key === "none" ? checked : false };

                                  // if "other" toggled off, clear text
                                  if (key === "other" && !checked) setToolsOther("");

                                  return next;
                                });
                              }}
                              id={`tool-${key}`}
                            />
                            <Label htmlFor={`tool-${key}`}>{label}</Label>
                          </div>
                        ))}
                      </div>

                      {tools.other && (
                        <div className="mt-3 space-y-2">
                          <Label htmlFor="toolsOther">Other (specify)</Label>
                          <Input
                            id="toolsOther"
                            value={toolsOther}
                            onChange={(e) => setToolsOther(e.target.value)}
                            placeholder="What tool(s)?"
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Main issue</Label>
                      <Select value={legaltechMainIssue} onValueChange={(v) => setLegaltechMainIssue(v as any)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select issue" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="template mess">Template mess</SelectItem>
                          <SelectItem value="approvals informal">Approvals informal</SelectItem>
                          <SelectItem value="version confusion">Version confusion</SelectItem>
                          <SelectItem value="missing audit trail">Missing audit trail</SelectItem>
                          <SelectItem value="obligation tracking">Obligation tracking</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="docsMatter">What documents matter most?</Label>
                      <Input
                        id="docsMatter"
                        value={documentsThatMatter}
                        onChange={(e) => setDocumentsThatMatter(e.target.value)}
                        placeholder="e.g., vendor contracts, SOPs, HR policies"
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          <Separator />

          {/* Preview (helps email fallback) */}
          <div className="space-y-2">
            <Label>Brief preview</Label>
            <Textarea value={briefText} readOnly className="min-h-[180px] font-mono text-xs" />
            <p className="text-xs text-muted-foreground">
              Frontend-only for now: use “Email this brief” (after submit) to send instantly, or copy + paste into WhatsApp/email.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              Your information is treated as confidential and used only to evaluate and respond to this request.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button asChild variant="outline" className="gap-2">
                <a href={`tel:${SITE.contact.phoneTel}`}>
                  <Phone className="h-4 w-4" />
                  Call {SITE.contact.phoneDisplay}
                </a>
              </Button>

              <Button type="submit" disabled={submitting} size="lg">
                {submitting ? "Submitting..." : "Submit Brief"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
