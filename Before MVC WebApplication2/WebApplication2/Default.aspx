<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication2._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div style="margin-top: 10px;">

        <asp:Label runat="server">First Name</asp:Label>
        <asp:TextBox ID="tbFirst" runat="server"></asp:TextBox>

        <asp:Label runat="server">Last Name</asp:Label>
        <asp:TextBox ID="tbLast" runat="server"></asp:TextBox>

        <br />
        <br />

        <asp:Label runat="server">Email</asp:Label>
        <asp:TextBox ID="tbEmail" Width="200px" runat="server"></asp:TextBox>

        <br />
        <br />

        <asp:Button ID="bGetData" Text="Get Data" runat="server" />
        <asp:Button ID="bSave" Text="Save" runat="server" />

        <br />
        <br />

        <asp:Label ID="lblComplete" runat="server"></asp:Label>
    </div>
</asp:Content>
